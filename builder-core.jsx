/* global React, ReactDOM */
const { useState, useEffect, useLayoutEffect, useRef, useCallback, useMemo } = React;

/* ---------- storage ---------- */
const DB = "erg_builder", STORE = "media";
function openDB() {
  return new Promise((res, rej) => {
    const r = indexedDB.open(DB, 1);
    r.onupgradeneeded = () => r.result.createObjectStore(STORE);
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
}
async function idb(mode, fn) {
  try { const db = await openDB(); return await new Promise((res) => { const tx = db.transaction(STORE, mode); const out = fn(tx.objectStore(STORE)); if (out) { out.onsuccess = () => res(out.result || null); out.onerror = () => res(null); } else tx.oncomplete = () => res(true); }); } catch { return null; }
}
const mediaGet = (k) => idb("readonly", (s) => s.get(k));
const mediaSet = (k, v) => idb("readwrite", (s) => { s.put(v, k); });
const mediaDel = (k) => idb("readwrite", (s) => { s.delete(k); });

const load = (k, d) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } };
const save = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };

const DEFAULT_PROFILE = {
  name: "Brent Anderson", title: "REALTOR®", handle: "@thebrentanderson",
  phone: "780.555.0142", email: "brent@elevaterealtygroup.ca",
  city: "Edmonton, AB", brokerage: true, headshot: "assets/headshot-brent.jpg",
};

/* ---------- rich text ---------- */
const HILITE = [
  { k: "", label: "Accent", css: "var(--s-accent)" },
  { k: "1", label: "Aqua", css: "#00FBF0" },
  { k: "2", label: "Aqua soft", css: "#6BFCF5" },
  { k: "3", label: "Deep teal", css: "#048A84" },
  { k: "4", label: "White", css: "#FFFFFF" },
  { k: "5", label: "Elevate Blue", css: "#030328" },
];
const HILITE_BY_KEY = Object.fromEntries(HILITE.map((h) => [h.k, h]));

function markup(text, keyBase) {
  return String(text).split(/(\*[^*]*\*|_[^_]*_|~[^~]*~)/g).map((p, pi) => {
    const k = keyBase + "-" + pi;
    if (p.startsWith("*") && p.endsWith("*") && p.length > 2) {
      let body = p.slice(1, -1), css = null;
      const m = body.match(/^([1-5])\|/);
      if (m) { css = (HILITE_BY_KEY[m[1]] || {}).css; body = body.slice(2); }
      return <em key={k} style={css ? { color: css } : undefined}>{markup(body, k)}</em>;
    }
    if (p.startsWith("_") && p.endsWith("_") && p.length > 2) return <i key={k}>{markup(p.slice(1, -1), k)}</i>;
    if (p.startsWith("~") && p.endsWith("~") && p.length > 2) return <u key={k}>{markup(p.slice(1, -1), k)}</u>;
    return <React.Fragment key={k}>{p}</React.Fragment>;
  });
}
function RichText({ text }) {
  if (!text) return null;
  return String(text).split("\n").map((line, li) => (
    <React.Fragment key={li}>
      {li > 0 && <br />}
      {markup(line, String(li))}
    </React.Fragment>
  ));
}

/* ---------- media slot ---------- */
const readAsDataURL = (blob) => new Promise((res, rej) => {
  const r = new FileReader();
  r.onload = () => res(r.result);
  r.onerror = () => rej(r.error);
  r.readAsDataURL(blob);
});

function MediaSlot({ slotKey, hint, editable }) {
  const [url, setUrl] = useState(null);
  const [kind, setKind] = useState(null);
  const [drag, setDrag] = useState(false);
  const inputRef = useRef(null), urlRef = useRef(null);

  useEffect(() => {
    let live = true;
    setUrl(null); setKind(null);
    mediaGet(slotKey).then(async (blob) => {
      if (!live || !blob) return;
      const img = blob.type.startsWith("image/");
      // images become data URLs so the PNG exporter can inline them;
      // videos stay object URLs so they can stream in the preview
      const u = img ? await readAsDataURL(blob) : URL.createObjectURL(blob);
      if (!live) return;
      if (urlRef.current) URL.revokeObjectURL(urlRef.current);
      urlRef.current = img ? null : u;
      setKind(img ? "image" : "video"); setUrl(u);
    });
    return () => { live = false; };
  }, [slotKey]);

  const accept = useCallback(async (file) => {
    if (!file) return;
    const img = file.type.startsWith("image/"), vid = file.type.startsWith("video/");
    if (!img && !vid) return;
    mediaSet(slotKey, file);
    const u = img ? await readAsDataURL(file) : URL.createObjectURL(file);
    if (urlRef.current) URL.revokeObjectURL(urlRef.current);
    urlRef.current = img ? null : u;
    setKind(img ? "image" : "video"); setUrl(u);
  }, [slotKey]);

  return (
    <div className={"mslot" + (drag ? " is-drag" : "")}
      onDragOver={editable ? (e) => { e.preventDefault(); setDrag(true); } : undefined}
      onDragLeave={editable ? () => setDrag(false) : undefined}
      onDrop={editable ? (e) => { e.preventDefault(); setDrag(false); accept(e.dataTransfer.files[0]); } : undefined}
      onClick={editable ? () => inputRef.current.click() : undefined}
      style={{ cursor: editable ? "pointer" : "default" }}>
      {url ? (kind === "image"
        ? <img className="mslot__fill" src={url} alt="" />
        : <video className="mslot__fill" src={url} autoPlay muted loop playsInline />)
        : (
          <div className="mslot__empty">
            {editable && (
              <div className="mslot__hint">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="8.5" cy="10" r="1.5" /><path d="M21 15l-5-4-4.5 4L9 13l-6 5" /></svg>
                <span>Add photo or video</span>
                {hint ? <span className="mslot__hintsub">{hint}</span> : null}
              </div>
            )}
          </div>
        )}
      {editable && url ? <span className="mslot__badge">Click to replace</span> : null}
      <input ref={inputRef} type="file" accept="image/*,video/*" hidden onChange={(e) => accept(e.target.files[0])} />
    </div>
  );
}

/* ---------- logo lockup + CTA block ---------- */
function Lockup({ light }) {
  return (
    <div className="lockup">
      <img className="lockup__mark" src={light ? "assets/erg-navy.png" : "assets/erg-white.png"} alt="Elevate Realty Group" />
    </div>
  );
}

/* ---------- approved colour schemes (Elevate palette only) ---------- */
const SCHEMES = {
  blue:     { bg: "#030328", ink: "#FFFFFF", accent: "#00FBF0", photo: "#00FBF0", light: false },
  blueAqua: { bg: "#030328", ink: "#00FBF0", accent: "#FFFFFF", photo: "#00FBF0", light: false },
  raised:   { bg: "#0A0A3A", ink: "#FFFFFF", accent: "#6BFCF5", photo: "#6BFCF5", light: false },
  ink:      { bg: "#010110", ink: "#FFFFFF", accent: "#6BFCF5", photo: "#6BFCF5", light: false },
  charcoal: { bg: "#1D1D1D", ink: "#FFFFFF", accent: "#00FBF0", photo: "#00FBF0", light: false },
  teal:     { bg: "#048A84", ink: "#FFFFFF", accent: "#030328", photo: "#6BFCF5", light: false },
  aqua:     { bg: "#00FBF0", ink: "#030328", accent: "#1D1D1D", photo: "#00FBF0", light: true },
  tint:     { bg: "#DEFEFC", ink: "#030328", accent: "#048A84", photo: "#6BFCF5", light: true },
  white:    { bg: "#FFFFFF", ink: "#030328", accent: "#048A84", photo: "#00FBF0", light: true },
  paper:    { bg: "#F5F6F8", ink: "#030328", accent: "#048A84", photo: "#00FBF0", light: true },
  mist:     { bg: "#ECEEF2", ink: "#030328", accent: "#048A84", photo: "#6BFCF5", light: true },
};
const ALL_KEYS = Object.keys(SCHEMES);

/* One approved colourway for the whole post, so every slide matches. */
function randomSchemes(slides, current) {
  const now = (current || []).find((s) => s && s.key);
  const pool = ALL_KEYS.filter((k) => k !== (now && now.key));
  const key = pool[Math.floor(Math.random() * pool.length)];
  const sc = SCHEMES[key];
  return slides.map((s) => (s.kind === "media" ? { key, accent: sc.photo } : { key }));
}

function Slide({ slide, i, total, profile, draft, editable }) {
  const copy = draft.copy[i] || {};
  const head = copy.head ?? slide.head;
  const sub = copy.sub ?? slide.sub;
  const list = copy.list ?? slide.list;
  const pos = copy.pos || slide.pos || "bottom";
  const align = copy.align || slide.align || "left";
  const items = list ? list.split("\n").filter(Boolean) : [];
  const isMedia = slide.kind === "media";
  const sc = (draft.schemes || [])[i] || {};
  const scheme = SCHEMES[sc.key] || SCHEMES.blue;
  const light = !!scheme.light;
  const vars = {
    "--s-bg": scheme.bg,
    "--s-ink": copy.ink || scheme.ink,
    "--s-scrim": scheme.bg,
    "--s-accent": isMedia ? (light ? scheme.accent : (sc.accent || scheme.photo)) : scheme.accent,
  };

  return (
    <div className={"slide slide--" + slide.kind + (light ? " is-light" : "") + (i === 0 || i === total - 1 ? " slide--lock" : "")} style={vars} data-screen-label={`Slide ${i + 1}`}>
      {isMedia
        ? <MediaSlot slotKey={`${draft.templateId}_${i}`} hint={slide.hint} editable={editable} />
        : <div className="slide__solid" />}
      {isMedia ? <div className="slide__scrim" data-pos={pos} /> : null}

      <div className={"slide__body slide__body--" + pos} data-align={align}>
        <span className="slide__rule" />
        <h2 className="slide__head"><RichText text={head} /></h2>
        {items.length ? (
          <ul className="slide__list">{items.map((it, n) => <li key={n}><RichText text={it} /></li>)}</ul>
        ) : null}
        {sub ? <p className="slide__sub"><RichText text={sub} /></p> : null}

        {slide.kind === "cta" ? (
          <div className="cta">
            <img className="cta__face" src={profile.headshot} alt="" />
            <div className="cta__lines">
              <span className="cta__name">{profile.name}</span>
              <span className="cta__meta">{profile.title} · {profile.city}</span>
              <span className="cta__meta">{profile.phone} · {profile.handle}</span>
            </div>
          </div>
        ) : null}
      </div>

      {i === 0 || i === total - 1 ? <Lockup light={light && i === total - 1} /> : null}
      {slide.kind === "cta" && profile.brokerage ? (
        <div className="brokerline">
          <img src={light ? "assets/real-full-black.png" : "assets/real-full-white.png"} alt="Brokered by Real Broker" />
        </div>
      ) : null}
    </div>
  );
}

/* ---------- export ---------- */
const H2I = "https://unpkg.com/html-to-image@1.11.13/dist/html-to-image.js";
let h2iP = null;
function loadH2I() {
  if (window.htmlToImage) return Promise.resolve(window.htmlToImage);
  if (!h2iP) h2iP = new Promise((res, rej) => {
    const s = document.createElement("script");
    s.src = H2I; s.onload = () => res(window.htmlToImage);
    s.onerror = () => rej(new Error("Couldn't load the exporter. Check your connection."));
    document.head.appendChild(s);
  });
  return h2iP;
}
async function slideToPng(el, targetW) {
  const h2i = await loadH2I();
  const undo = [];
  el.querySelectorAll("video").forEach((v) => {
    const c = document.createElement("canvas");
    c.width = v.videoWidth || 1080; c.height = v.videoHeight || 1350;
    try { c.getContext("2d").drawImage(v, 0, 0, c.width, c.height); } catch {}
    c.className = v.className; c.style.cssText = "width:100%;height:100%;object-fit:cover;display:block";
    v.style.display = "none"; v.parentNode.insertBefore(c, v);
    undo.push(() => { c.remove(); v.style.display = ""; });
  });
  el.querySelectorAll(".mslot__badge, .mslot__hint").forEach((b) => { b.style.display = "none"; undo.push(() => { b.style.display = ""; }); });
  const rect = el.getBoundingClientRect();
  try {
    return await h2i.toPng(el, { width: rect.width, height: rect.height, pixelRatio: targetW / rect.width });
  } finally { undo.forEach((f) => f()); }
}
function download(dataUrl, name) {
  try {
    const a = document.createElement("a");
    a.href = dataUrl; a.download = name; a.rel = "noopener";
    document.body.appendChild(a); a.click(); a.remove();
  } catch (e) { /* sandboxed preview blocks programmatic downloads; modal is the fallback */ }
}

/* Clipboard is often unavailable inside a sandboxed preview frame. */
async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (e) {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.cssText = "position:fixed;top:0;left:0;opacity:0";
      document.body.appendChild(ta);
      ta.focus(); ta.select();
      const ok = document.execCommand("copy");
      ta.remove();
      return ok;
    } catch (e2) { return false; }
  }
}

/* ---------- small ui ---------- */
function Field({ label, value, onChange, area, rows = 3, placeholder, format }) {
  const ref = useRef(null);
  const pend = useRef(null);
  useLayoutEffect(() => {
    if (pend.current && ref.current) {
      const [a, b] = pend.current; pend.current = null;
      ref.current.focus(); ref.current.setSelectionRange(a, b);
    }
  }, [value]);
  const wrap = (mark, prefix = "") => {
    const el = ref.current;
    if (!el) return;
    const { selectionStart: a, selectionEnd: b } = el;
    if (a === b) { el.focus(); return; }
    const picked = value.slice(a, b);
    const wrapped = picked.startsWith(mark) && picked.endsWith(mark) && picked.length > 2;
    let next;
    if (wrapped) {
      const inner = picked.slice(1, -1).replace(/^[1-5]\|/, "");
      next = prefix && !picked.slice(1, -1).startsWith(prefix) ? mark + prefix + inner + mark : inner;
    } else {
      next = mark + prefix + picked + mark;
    }
    pend.current = [a, a + next.length];
    onChange(value.slice(0, a) + next + value.slice(b));
  };
  return (
    <label className="field">
      <span className="field__label">{label}</span>
      {format ? (
        <div className="fmt">
          <button type="button" className="fmt__b" onMouseDown={(e) => e.preventDefault()} onClick={() => wrap("*")}>
            <span className="fmt__dot"></span>Highlight
          </button>
          <button type="button" className="fmt__b" onMouseDown={(e) => e.preventDefault()} onClick={() => wrap("_")}>
            <i>I</i>talic
          </button>
          <button type="button" className="fmt__b" onMouseDown={(e) => e.preventDefault()} onClick={() => wrap("~")}>
            <u>U</u>nderline
          </button>
          <span className="fmt__tip">select a word first</span>
          <div className="swatches">
            {HILITE.filter((h) => h.k).map((h) => (
              <button key={h.k} type="button" className="swatch" title={"Highlight in " + h.label}
                style={{ background: h.css }}
                onMouseDown={(e) => e.preventDefault()} onClick={() => wrap("*", h.k + "|")} />
            ))}
          </div>
        </div>
      ) : null}
      {area
        ? <textarea ref={ref} rows={rows} value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
        : <input ref={ref} type="text" value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />}
    </label>
  );
}
function Seg({ options, value, onChange }) {
  return (
    <div className="seg">{options.map((o) => (
      <button key={o.v} type="button" className={"seg__b" + (value === o.v ? " is-on" : "")} onClick={() => onChange(o.v)}>{o.l}</button>
    ))}</div>
  );
}

window.ERGB = { RichText, MediaSlot, Slide, slideToPng, download, copyText, Field, Seg, load, save, mediaDel, DEFAULT_PROFILE, randomSchemes, SCHEMES, HILITE };
