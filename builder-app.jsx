/* global React, ReactDOM */
const { useState, useEffect, useRef, useCallback, useMemo } = React;
const { Slide, slideToPng, download, copyText, Field, Seg, load, save, DEFAULT_PROFILE, randomSchemes, SCHEMES } = window.ERGB;
const TEXT_COLOURS = [
  { v: "", l: "Auto", css: "linear-gradient(135deg,#FFFFFF 0 50%,#030328 50% 100%)" },
  { v: "#FFFFFF", l: "White", css: "#FFFFFF" },
  { v: "#030328", l: "Elevate Blue", css: "#030328" },
  { v: "#1D1D1D", l: "Charcoal", css: "#1D1D1D" },
  { v: "#00FBF0", l: "Accent Aqua", css: "#00FBF0" },
  { v: "#048A84", l: "Deep teal", css: "#048A84" },
];

const FORMATS = {
  "4:5": { label: "Carousel 4:5", ratio: "4 / 5", w: 1080, h: 1350, note: "Feed carousel" },
  "9:16": { label: "Story 9:16", ratio: "9 / 16", w: 1080, h: 1920, note: "Story / Reel frames" },
};

function Nav({ view, go, profile }) {
  return (
    <header className="nav">
      <button className="nav__brand" onClick={() => go("landing")}>
        <img src="assets/erg-white.png" alt="Elevate Realty Group" />
        <span className="nav__tool">Studio</span>
      </button>
      <nav className="nav__links">
        <button className={view === "gallery" ? "is-on" : ""} onClick={() => go("gallery")}>Templates</button>
        <button className={view === "profile" ? "is-on" : ""} onClick={() => go("profile")}>My Profile</button>
        <button className="nav__me" onClick={() => go("profile")} title={profile.name}>
          <img src={profile.headshot} alt="" />
        </button>
      </nav>
    </header>
  );
}

/* ------------------------------- LANDING ------------------------------- */
function Landing({ go }) {
  const counts = window.CATEGORIES.map((c) => ({ ...c, n: window.TEMPLATES.filter((t) => t.cat === c.id).length }));
  return (
    <main className="landing">
      <section className="hero">
        <span className="eyebrow">Elevate Realty Group · Internal Tool</span>
        <h1><span className="ln">Less time posting.</span><span className="ln">More time <em>Selling</em>.</span></h1>
        <p className="lead">Pick a template, drop in your photos, edit the words. Everything comes out sized and ready for Instagram, with your name, headshot and contact details already on the last slide. Caption and hashtags included.</p>
        <div className="hero__cta">
          <button className="btn btn--aqua" onClick={() => go("gallery")}>Start a post</button>
        </div>
      </section>

      <section className="steps">
        {[
          ["01", "Choose a template", "Written and approved by the team. Neighbourhood spotlights, market updates, buyer and seller tips."],
          ["02", "Make it yours", "Upload your own photos or b-roll and fill in the bracketed parts. Colours and type stay locked to brand."],
          ["03", "Download and post", "Every slide exports at full Instagram resolution, with a caption ready to paste."],
        ].map(([n, h, b]) => (
          <article className="step" key={n}>
            <span className="step__n">{n}</span>
            <h3>{h}</h3>
            <p>{b}</p>
          </article>
        ))}
      </section>

      <section className="cats">
        <h2 className="sec-title">What you can build</h2>
        <div className="cats__grid">
          {counts.map((c) => (
            <button className="catcard" key={c.id} onClick={() => go("gallery")}>
              <span className="catcard__n">{c.n} {c.n === 1 ? "template" : "templates"}</span>
              <h3>{c.label}</h3>
              <p>{c.blurb}</p>
              <span className="catcard__go">Browse <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M9 7h8v8" /></svg></span>
            </button>
          ))}
        </div>
      </section>

      <footer className="foot">
        <img className="foot__erg" src="assets/erg-white.png" alt="Elevate Realty Group" />
        <span>Elevate Realty Group · Brokered by Real</span>
      </footer>
    </main>
  );
}

/* ------------------------------- GALLERY ------------------------------- */
function MiniPreview({ tpl }) {
  const s = tpl.slides[0];
  return (
    <div className={"mini" + (tpl.thumb ? " mini--photo" : "")}>
      {tpl.thumb ? <img className="mini__img" src={tpl.thumb} alt="" loading="lazy" /> : null}
      <span className="mini__rule" />
      <span className="mini__head">{(s.head || "").replace(/\*/g, "")}</span>
    </div>
  );
}
function Gallery({ go, openTemplate }) {
  const [cat, setCat] = useState("all");
  const list = window.TEMPLATES.filter((t) => cat === "all" || t.cat === cat);
  return (
    <main className="page page--dark">
      <div className="page__inner">
      <div className="page__head">
        <div>
          <span className="eyebrow">Shared Library</span>
          <h1 className="page__title">Templates</h1>
        </div>
        <div className="chips">
          <button className={"chip" + (cat === "all" ? " is-on" : "")} onClick={() => setCat("all")}>All</button>
          {window.CATEGORIES.map((c) => (
            <button key={c.id} className={"chip" + (cat === c.id ? " is-on" : "")} onClick={() => setCat(c.id)}>{c.label}</button>
          ))}
        </div>
      </div>

      <div className="tpl-grid">
        {list.map((t) => (
          <article className="tpl" key={t.id}>
            <MiniPreview tpl={t} />
            <div className="tpl__body">
              <span className="tpl__cat">{(window.CATEGORIES.find((c) => c.id === t.cat) || {}).label}</span>
              <h3>{t.name}</h3>
              <p>{t.desc}</p>
              <div className="tpl__foot">
                <span className="tpl__meta">{t.slides.length} slides</span>
                <button className="btn btn--sm btn--aqua" onClick={() => openTemplate(t.id)}>Use template</button>
              </div>
            </div>
          </article>
        ))}
      </div>
      </div>
    </main>
  );
}

/* ------------------------------- PROFILE ------------------------------- */
function Profile({ profile, setProfile, go }) {
  const fileRef = useRef(null);
  const onFace = (f) => { if (!f) return; const r = new FileReader(); r.onload = () => setProfile({ ...profile, headshot: r.result }); r.readAsDataURL(f); };
  return (
    <main className="page page--narrow page--dark">
      <span className="eyebrow">Your details</span>
      <h1 className="page__title">My Profile</h1>
      <p className="page__sub">This is what gets stamped on the last slide of every post you build. Set it once.</p>

      <div className="profile">
        <div className="profile__face">
          <img src={profile.headshot} alt="" />
          <button className="btn btn--ghost btn--sm" onClick={() => fileRef.current.click()}>Change headshot</button>
          <input ref={fileRef} type="file" accept="image/*" hidden onChange={(e) => onFace(e.target.files[0])} />
        </div>
        <div className="profile__fields">
          <Field label="Full name" value={profile.name} onChange={(v) => setProfile({ ...profile, name: v })} />
          <Field label="Title" value={profile.title} onChange={(v) => setProfile({ ...profile, title: v })} />
          <Field label="Instagram handle" value={profile.handle} onChange={(v) => setProfile({ ...profile, handle: v })} />
          <Field label="Phone" value={profile.phone} onChange={(v) => setProfile({ ...profile, phone: v })} />
          <Field label="Email" value={profile.email} onChange={(v) => setProfile({ ...profile, email: v })} />
          <Field label="Market" value={profile.city} onChange={(v) => setProfile({ ...profile, city: v })} />
          <label className="check">
            <input type="checkbox" checked={profile.brokerage} onChange={(e) => setProfile({ ...profile, brokerage: e.target.checked })} />
            <span>Show “Brokered by Real” on the closing slide</span>
          </label>
        </div>
      </div>
      <div className="profile__save"><button className="btn btn--aqua btn--sm" onClick={() => go("gallery")}>Save</button></div>
    </main>
  );
}

/* ------------------------------- BUILDER ------------------------------- */
function Builder({ tpl, profile, go }) {
  const key = "erg_draft_" + tpl.id;
  const [draft, setDraft] = useState(() => load(key, { templateId: tpl.id, format: "4:5", copy: tpl.slides.map(() => ({})), schemes: tpl.slides.map((s) => (s.kind === "media" ? { key: "blue", accent: "#00FBF0" } : { key: "blue" })) }));
  const [i, setI] = useState(0);
  const [busy, setBusy] = useState("");
  const [shots, setShots] = useState(null);
  const [copied, setCopied] = useState(false);
  const stageRef = useRef(null);
  const capRef = useRef(null);
  const fmt = FORMATS[draft.format];
  const total = tpl.slides.length;

  useEffect(() => { save(key, draft); }, [draft, key]);
  useEffect(() => { setI(0); }, [tpl.id]);

  const patch = (n, field, val) => setDraft((d) => {
    const copy = d.copy.slice(); copy[n] = { ...copy[n], [field]: val }; return { ...d, copy };
  });
  const cur = tpl.slides[i];
  const curCopy = draft.copy[i] || {};
  const val = (f) => curCopy[f] ?? cur[f] ?? "";

  const exportOne = async (n) => {
    setBusy(`Exporting slide ${n + 1}…`);
    try {
      const el = stageRef.current.querySelector(`[data-export="${n}"]`);
      const name = `${tpl.id}-${String(n + 1).padStart(2, "0")}.png`;
      const url = await slideToPng(el, fmt.w);
      download(url, name);
      setShots([{ name, url }]);
      setBusy("");
    } catch (e) { setBusy(e.message); }
  };
  const exportAll = async () => {
    try {
      const empties = [...stageRef.current.querySelectorAll("[data-export]")]
        .filter((c) => c.querySelector(".mslot__empty"))
        .map((c) => Number(c.dataset.export) + 1);
      const out = [];
      for (let n = 0; n < total; n++) {
        setBusy(`Exporting ${n + 1} of ${total}…`);
        const el = stageRef.current.querySelector(`[data-export="${n}"]`);
        const name = `${tpl.id}-${String(n + 1).padStart(2, "0")}.png`;
        const url = await slideToPng(el, fmt.w);
        download(url, name);
        out.push({ name, url });
        await new Promise((r) => setTimeout(r, 250));
      }
      setShots(out);
      setBusy(empties.length
        ? `No photo yet on slide${empties.length > 1 ? "s" : ""} ${empties.join(", ")}.`
        : "");
      setTimeout(() => setBusy(""), 6000);
    } catch (e) { setBusy(e.message); }
  };
  const applyAlt = (n, alt) => setDraft((d) => {
    const copy = d.copy.slice();
    copy[n] = { ...copy[n], head: alt.head, sub: alt.sub ?? "", ...(alt.list !== undefined ? { list: alt.list } : {}) };
    return { ...d, copy };
  });
  const rewordPost = () => {
    const depth = Math.max(1, ...tpl.slides.map((s) => (s.alts || []).length)) + 1;
    const next = ((draft.version || 0) + 1) % depth;
    setDraft((d) => ({
      ...d,
      version: next,
      copy: tpl.slides.map((s, n) => {
        const src = next === 0 ? s : ((s.alts || [])[next - 1] || s);
        return { ...(d.copy[n] || {}), head: src.head, sub: src.sub ?? "", ...(s.list !== undefined || src.list !== undefined ? { list: src.list ?? s.list ?? "" } : {}) };
      }),
    }));
  };

  const selectCaption = () => {
    if (!capRef.current) return;
    const r = document.createRange();
    r.selectNodeContents(capRef.current);
    const s = getSelection(); s.removeAllRanges(); s.addRange(r);
  };
  const copyCaption = async () => {
    const ok = await copyText(`${tpl.caption}\n\n${tpl.tags}`);
    if (!ok) selectCaption();
    setCopied(ok ? "Copied" : "Selected. Press Ctrl or Cmd + C");
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <main className="builder">
      <aside className="editor">
        <button className="back" onClick={() => go("gallery")}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg> All templates
        </button>
        <span className="eyebrow">{(window.CATEGORIES.find((c) => c.id === tpl.cat) || {}).label}</span>
        <h2 className="editor__title">{tpl.name}</h2>

        <div className="tools">
          <Seg value={draft.format} onChange={(v) => setDraft({ ...draft, format: v })}
            options={Object.entries(FORMATS).map(([v, f]) => ({ v, l: f.label }))} />
          <div className="tools__row">
            <button className="btn btn--ghost btn--sm" title="Pick a different approved Elevate colourway for the whole post"
              onClick={() => setDraft((d) => ({ ...d, schemes: randomSchemes(tpl.slides, d.schemes) }))}>Shuffle colour</button>
            <button className="btn btn--ghost btn--sm btn--icon" aria-label="Back to the default colourway" title="Back to the default colourway"
              onClick={() => setDraft((d) => ({ ...d, schemes: tpl.slides.map((s) => (s.kind === "media" ? { key: "blue", accent: "#00FBF0" } : { key: "blue" })) }))}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v6h6" /><path d="M3.51 15a9 9 0 1 0 2.13-9.36L3 8" /></svg>
            </button>
          </div>
          <div className="tools__row">
            <button className="btn btn--ghost btn--sm" title="Rewrite every slide to the next approved version of this post"
              onClick={rewordPost}>Reword</button>
            <button className="btn btn--ghost btn--sm btn--icon" aria-label="Back to the original wording" title="Back to the original wording"
              onClick={() => setDraft((d) => ({ ...d, version: 0, copy: tpl.slides.map(() => ({})) }))}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v6h6" /><path d="M3.51 15a9 9 0 1 0 2.13-9.36L3 8" /></svg>
            </button>
          </div>
          <p className="hint">{fmt.note} · exports at {fmt.w} × {fmt.h}</p>
        </div>

        <div className="block">
          <span className="block__label">Slide {i + 1} of {total}</span>
          <Field label="Headline" area rows={3} format value={val("head")} onChange={(v) => patch(i, "head", v)} />
          {cur.list !== undefined ? <Field label="List, one per line" area rows={4} format value={val("list")} onChange={(v) => patch(i, "list", v)} /> : null}
          <Field label="Supporting line" area rows={3} format value={val("sub")} onChange={(v) => patch(i, "sub", v)} />
          <div className="pair">
            <div className="field">
              <span className="field__label">Position</span>
              <Seg value={curCopy.pos || cur.pos || "bottom"} onChange={(v) => patch(i, "pos", v)}
                options={[{ v: "top", l: "Top" }, { v: "center", l: "Mid" }, { v: "bottom", l: "Btm" }]} />
            </div>
            <div className="field">
              <span className="field__label">Alignment</span>
              <Seg value={curCopy.align || cur.align || "left"} onChange={(v) => patch(i, "align", v)}
                options={[{ v: "left", l: "Left" }, { v: "center", l: "Centre" }, { v: "right", l: "Right" }]} />
            </div>
          </div>
          <div className="field">
            <span className="field__label">Accent and text colour</span>
            <div className="swatches swatches--row">
              {TEXT_COLOURS.map((c) => (
                <button key={c.l} type="button" title={c.l}
                  className={"swatch" + ((curCopy.ink || "") === c.v ? " is-on" : "")}
                  style={{ background: c.css }} onClick={() => patch(i, "ink", c.v)} />
              ))}
            </div>
          </div>
          {cur.kind === "media" ? <p className="hint">Click the preview to add your photo or video{cur.hint ? `: ${cur.hint.toLowerCase()}` : ""}.</p> : null}
        </div>

        {(cur.alts || []).length ? (
          <details className="drop">
            <summary>Other wordings for this slide</summary>
            <div className="alts">
              {[{ head: cur.head, sub: cur.sub, list: cur.list }, ...cur.alts].map((alt, n) => (
                <button key={n} type="button"
                  className={"alt" + (val("head") === alt.head ? " is-on" : "")}
                  onClick={() => applyAlt(i, alt)}>
                  {alt.head.replace(/\*/g, "").replace(/\n/g, " ")}
                </button>
              ))}
            </div>
          </details>
        ) : null}

        <details className="drop">
          <summary>Caption and hashtags</summary>
          <p className="caption-box" ref={capRef} onClick={selectCaption}>{tpl.caption}{"\n\n"}{tpl.tags}</p>
          <button className="btn btn--ghost btn--sm" onClick={copyCaption}>{copied || "Copy caption and hashtags"}</button>
        </details>

        <div className="block block--export">
          <button className="btn btn--aqua" onClick={exportAll}>Download all {total} slides</button>
          <button className="btn btn--ghost btn--sm" onClick={() => exportOne(i)}>Download slide {i + 1} only</button>
          {busy ? <p className="busy">{busy}</p> : null}
        </div>
      </aside>

      {shots ? (
        <div className="sheet" onClick={() => setShots(null)}>
          <div className="sheet__box" onClick={(e) => e.stopPropagation()}>
            <div className="sheet__head">
              <div>
                <span className="eyebrow">Your slides</span>
                <h3 className="sheet__title">{shots.length} image{shots.length > 1 ? "s" : ""} ready</h3>
              </div>
              <button className="sheet__x" onClick={() => setShots(null)} aria-label="Close">✕</button>
            </div>
            <p className="sheet__note">If nothing landed in your downloads folder, save them from here: right click an image, or press and hold on mobile. Keep them in order when you upload.</p>
            <div className="sheet__grid">
              {shots.map((s, n) => (
                <figure className="shot" key={s.name}>
                  <img src={s.url} alt={`Slide ${n + 1}`} />
                  <figcaption>
                    <span>{n + 1}</span>
                    <a href={s.url} download={s.name}>Save</a>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      <section className="preview">
        {draft.format === "9:16" ? (
          <div className={"story" + (((SCHEMES[((draft.schemes || [])[i] || {}).key] || {}).light) ? " is-light" : "")} style={{ "--ratio": fmt.ratio }}>
            <div className="story__stage" ref={stageRef}>
              <div className="rail" style={{ transform: `translateX(-${i * 100}%)` }}>
                {tpl.slides.map((s, n) => (
                  <div className="rail__cell" key={n} data-export={n}>
                    <Slide slide={s} i={n} total={total} profile={profile} draft={draft} editable={n === i} />
                  </div>
                ))}
              </div>
            </div>
            <div className="story__bars">
              {tpl.slides.map((s, n) => (
                <button key={n} className={"sbar" + (n < i ? " is-done" : n === i ? " is-on" : "")} onClick={() => setI(n)} aria-label={`Frame ${n + 1}`} />
              ))}
            </div>
            <div className="story__top">
              <img className="story__face" src={profile.headshot} alt="" />
              <span className="story__handle">{(profile.handle || "").replace(/^@/, "")}</span>
              <span className="story__x">✕</span>
            </div>
            <div className="story__bottom">
              <span className="story__reply">Send message</span>
              <Ico d="M19.5 12.6l-7.5 7.4-7.5-7.4a5 5 0 0 1 7.5-6.6 5 5 0 0 1 7.5 6.6z" />
              <Ico d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </div>
            {i > 0 ? <button className="arrow arrow--l" onClick={() => setI(i - 1)} aria-label="Previous">‹</button> : null}
            {i < total - 1 ? <button className="arrow arrow--r" onClick={() => setI(i + 1)} aria-label="Next">›</button> : null}
          </div>
        ) : (
        <div className="phone" style={{ "--ratio": fmt.ratio }}>
          <div className="phone__bar">
            <div className="phone__who">
              <img className="phone__face" src={profile.headshot} alt="" />
              <div>
                <span className="phone__handle">{(profile.handle || "").replace(/^@/, "")}</span>
                <span className="phone__loc">{profile.city}</span>
              </div>
            </div>
            <span className="phone__dots">•••</span>
          </div>

          <div className="phone__stage" ref={stageRef}>
            <div className="rail" style={{ transform: `translateX(-${i * 100}%)` }}>
              {tpl.slides.map((s, n) => (
                <div className="rail__cell" key={n} data-export={n}>
                  <Slide slide={s} i={n} total={total} profile={profile} draft={draft} editable={n === i} />
                </div>
              ))}
            </div>
            {i > 0 ? <button className="arrow arrow--l" onClick={() => setI(i - 1)} aria-label="Previous">‹</button> : null}
            {i < total - 1 ? <button className="arrow arrow--r" onClick={() => setI(i + 1)} aria-label="Next">›</button> : null}
          </div>

          <div className="phone__foot">
            <div className="phone__acts">
              <div className="phone__acts-l">
                <Ico d="M19.5 12.6l-7.5 7.4-7.5-7.4a5 5 0 0 1 7.5-6.6 5 5 0 0 1 7.5 6.6z" />
                <Ico d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.6-5.2A8.5 8.5 0 1 1 21 11.5z" />
                <Ico d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </div>
            <div className="phone__pips">
              {tpl.slides.map((s, n) => <button key={n} className={"pip" + (n === i ? " is-on" : "")} onClick={() => setI(n)} aria-label={`Slide ${n + 1}`} />)}
            </div>
            <Ico d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
          </div>
          <p className="phone__cap"><b>{(profile.handle || "").replace(/^@/, "")}</b>{tpl.caption}</p>
        </div>
        </div>
        )}
      </section>
    </main>
  );
}
function Ico({ d }) {
  return <svg className="ico" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>;
}

/* ------------------------------- ROOT ------------------------------- */
function App() {
  const [view, setView] = useState("landing");
  const [tplId, setTplId] = useState(null);
  const [profile, setProfile] = useState(() => load("erg_profile", DEFAULT_PROFILE));
  useEffect(() => { save("erg_profile", profile); }, [profile]);
  useEffect(() => { window.scrollTo(0, 0); }, [view, tplId]);

  const tpl = useMemo(() => window.TEMPLATES.find((t) => t.id === tplId), [tplId]);
  const openTemplate = (id) => { setTplId(id); setView("builder"); };

  return (
    <div className="app">
      <Nav view={view} go={setView} profile={profile} />
      {view === "landing" && <Landing go={setView} />}
      {view === "gallery" && <Gallery go={setView} openTemplate={openTemplate} />}
      {view === "profile" && <Profile profile={profile} setProfile={setProfile} go={setView} />}
      {view === "builder" && tpl && <Builder tpl={tpl} profile={profile} go={setView} />}
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
