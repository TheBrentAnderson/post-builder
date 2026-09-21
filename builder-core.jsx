/* global React, ReactDOM */
const { useState, useEffect, useRef, useCallback, useMemo } = React;

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
function RichText({ text }) {
  if (!text) return null;
  return String(text).split("\n").map((line, li) => (
    <React.Fragment key={li}>
      {li > 0 && <br />}
      {line.split(/(\*[^*]+\*)/g).map((p, pi) =>
        p.startsWith("*") && p.endsWith("*") && p.length > 2
          ? <em key={pi}>{p.slice(1, -1)}</em>
          : <React.Fragment key={pi}>{p}</React.Fragment>)}
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
function Lockup({ profile, light }) {
  return (
    <div className="lockup">
      <img className="lockup__mark" src={light ? "assets/erg-navy.png" : "assets/erg-white.png"} alt="Elevate Realty Group" />
      {profile.brokerage ? <span className="lockup__broker">Brokered by Real</span> : null}
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

function Slide({ slide, i, total, profile, draft, editable, showCounter }) {
  const copy = draft.copy[i] || {};
  const head = copy.head ?? slide.head;
  const sub = copy.sub ?? slide.sub;
  const list = copy.list ?? slide.list;
  const pos = copy.pos || slide.pos || "bottom";
  const items = list ? list.split("\n").filter(Boolean) : [];
  const isMedia = slide.kind === "media";
  const sc = (draft.schemes || [])[i] || {};
  const scheme = SCHEMES[sc.key] || SCHEMES.blue;
  const light = !!scheme.light;
  const vars = {
    "--s-bg": scheme.bg,
    "--s-ink": scheme.ink,
    "--s-scrim": scheme.bg,
    "--s-accent": isMedia ? (light ? scheme.accent : (sc.accent || scheme.photo)) : scheme.accent,
  };

  return (
    <div className={"slide slide--" + slide.kind + (light ? " is-light" : "")} style={vars} data-screen-label={`Slide ${i + 1}`}>
      {isMedia
        ? <MediaSlot slotKey={`${draft.templateId}_${i}`} hint={slide.hint} editable={editable} />
        : <div className="slide__solid" />}
      {isMedia ? <div className="slide__scrim" data-pos={pos} /> : null}

      <div className={"slide__body slide__body--" + pos}>
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

      {slide.kind === "cta" ? <Lockup profile={profile} light={light} /> : null}
      {showCounter && total > 1 ? <span className="slide__count">{i + 1}/{total}</span> : null}
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
function Field({ label, value, onChange, area, rows = 3, placeholder }) {
  return (
    <label className="field">
      <span className="field__label">{label}</span>
      {area
        ? <textarea rows={rows} value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
        : <input type="text" value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />}
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

window.ERGB = { RichText, MediaSlot, Slide, slideToPng, download, copyText, Field, Seg, load, save, mediaDel, DEFAULT_PROFILE, randomSchemes, SCHEMES };
