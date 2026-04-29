// Wireframe 2: Editorial / Tipográfico
// Estructura: revista, mucho whitespace, hero serif gigante, columnas asimétricas
// Vibe: New York Times tech, sobrio

function WF2_Editorial() {
  const t = window.CONTENT.es;
  const accent = "#8a2727"; // editorial red
  const ink = "#1a1a1a";

  const serif = "'Caveat', cursive"; // (sketchy stand-in para el serif elegante)
  const display = "'Caveat', cursive";

  return (
    <div style={{
      width: 540, padding: "24px 28px 32px", background: "#fefdf8",
      fontFamily: "'Kalam', cursive", color: ink, position: "relative",
    }}>
      <Sticky color="#c9d4f0" style={{ position: "absolute", top: -6, right: -10, zIndex: 5 }}>
        WF-02 · EDITORIAL<br/>
        <span style={{ fontSize: 12 }}>"revista de tecnología"</span>
      </Sticky>

      {/* Masthead */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `2px solid ${ink}`, paddingBottom: 6, marginBottom: 20 }}>
        <span style={{ fontFamily: "'Kalam', cursive", fontSize: 11, letterSpacing: 2, fontWeight: 700 }}>
          PORTFOLIO · NO. 01 · 2026
        </span>
        <span style={{ fontFamily: "'Kalam', cursive", fontSize: 11 }}>
          ES <span style={{ color: "#999" }}>| en</span>
        </span>
      </div>

      {/* HERO — full editorial */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontFamily: "'Kalam', cursive", fontSize: 9, letterSpacing: 3, color: accent, fontWeight: 700, marginBottom: 4 }}>
          DESARROLLO MAINFRAME · EDICIÓN ESPECIAL
        </div>

        <div style={{ fontFamily: display, fontSize: 56, fontWeight: 700, lineHeight: 0.95, letterSpacing: -1.5, marginBottom: 6 }}>
          Florencia<br/>
          <span style={{ fontStyle: "italic", color: accent }}>Sombra</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 12 }}>
          <div>
            <ImagePlaceholder w="100%" h={140} label="foto editorial b&w" color={ink} />
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 12, color: "#666", marginTop: 4, fontStyle: "italic" }}>
              Florencia A. Sombra, San Luis. Marzo 2026.
            </div>
          </div>
          <div>
            <div style={{ fontFamily: serif, fontSize: 18, lineHeight: 1.25, fontWeight: 600 }}>
              "{t.heroLine1} {t.heroLine2.toLowerCase()}, {t.heroLine3.toLowerCase()}"
            </div>
            <div style={{ marginTop: 12, fontFamily: "'Kalam', cursive", fontSize: 11, color: "#555", lineHeight: 1.5 }}>
              {t.role} · {t.subRole}
              <br/>—
              <br/>{t.location}
            </div>
          </div>
        </div>
      </div>

      <Sticky style={{ position: "absolute", left: -22, top: 200, transform: "rotate(-4deg)" }}>
        serif gigante<br/>tipo NYT/Bloomberg<br/>+ whitespace
      </Sticky>

      {/* Drop cap intro / About */}
      <div style={{ borderTop: `1px solid ${ink}`, paddingTop: 16, marginBottom: 24 }}>
        <SectionLabel n={1} label={t.aboutTitle} color={ink} accent={accent} />
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 12 }}>
          <div style={{ fontFamily: display, fontSize: 64, fontWeight: 700, lineHeight: 0.85, color: accent }}>D</div>
          <div style={{ fontFamily: "'Kalam', cursive", fontSize: 11, lineHeight: 1.7, columnCount: 2, columnGap: 14 }}>
            {t.aboutBody}
          </div>
        </div>
      </div>

      {/* STACK — tabla editorial */}
      <SectionLabel n={2} label={t.stackTitle} color={ink} accent={accent} />
      <div style={{ borderTop: `1.4px solid ${ink}`, borderBottom: `1.4px solid ${ink}`, marginBottom: 24 }}>
        {t.stackGroups.map((g, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "150px 1fr", padding: "10px 0", borderBottom: i < t.stackGroups.length - 1 ? `1px solid ${ink}33` : "none", gap: 12 }}>
            <div style={{ fontFamily: display, fontSize: 16, fontWeight: 700, fontStyle: "italic" }}>{g.title}</div>
            <div style={{ fontFamily: "'Kalam', cursive", fontSize: 11, lineHeight: 1.6 }}>
              {g.items.join("  ·  ")}
            </div>
          </div>
        ))}
      </div>

      {/* FEATURED PROJECT — pull quote layout */}
      <SectionLabel n={3} label="Proyecto destacado" color={ink} accent={accent} />
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontFamily: "'Kalam', cursive", fontSize: 9, letterSpacing: 2, color: accent, fontWeight: 700, marginBottom: 4 }}>
          CASE STUDY · MAINFRAME
        </div>
        <div style={{ fontFamily: display, fontSize: 32, fontWeight: 700, lineHeight: 1, letterSpacing: -0.5, marginBottom: 4 }}>
          {t.projectTitle}
        </div>
        <div style={{ fontFamily: "'Caveat', cursive", fontSize: 16, fontStyle: "italic", color: "#555", marginBottom: 14 }}>
          {t.projectSub}
        </div>

        <ImagePlaceholder w="100%" h={180} label="diagrama de arquitectura — full bleed" color={ink} style={{ marginBottom: 14 }} />

        {/* Pull quote */}
        <div style={{ borderLeft: `3px solid ${accent}`, paddingLeft: 14, margin: "16px 0" }}>
          <div style={{ fontFamily: display, fontSize: 22, fontWeight: 600, lineHeight: 1.15, fontStyle: "italic" }}>
            "Único proyecto de la cohorte desplegado en infraestructura empresarial IBM LinuxONE real."
          </div>
        </div>

        {/* Metrics — typographic */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 0, borderTop: `1.4px solid ${ink}`, borderBottom: `1.4px solid ${ink}`, padding: "14px 0", marginBottom: 14 }}>
          {t.projectMetrics.map((m, i) => (
            <div key={i} style={{ textAlign: "center", borderRight: i < 4 ? `1px solid ${ink}33` : "none", padding: "0 6px" }}>
              <div style={{ fontFamily: display, fontSize: 28, fontWeight: 700, lineHeight: 1, color: accent }}>{m.v}</div>
              <div style={{ fontFamily: "'Kalam', cursive", fontSize: 8, color: "#666", marginTop: 4, textTransform: "uppercase", letterSpacing: 0.5 }}>{m.l}</div>
            </div>
          ))}
        </div>

        {/* Two-column body */}
        <div style={{ fontFamily: "'Kalam', cursive", fontSize: 11, lineHeight: 1.7, columnCount: 2, columnGap: 16 }}>
          {t.projectBullets.map((b, i) => (
            <div key={i} style={{ marginBottom: 8, breakInside: "avoid" }}>
              <span style={{ color: accent, fontWeight: 700, marginRight: 6 }}>{String(i+1).padStart(2, "0")}</span>
              {b}
            </div>
          ))}
        </div>
      </div>

      <Sticky color="#fde7a3" style={{ position: "absolute", right: -24, top: 720, transform: "rotate(3deg)" }}>
        métricas grandes<br/>tipo magazine<br/>cifra + caption
      </Sticky>

      {/* CERTS — index */}
      <SectionLabel n={4} label={t.certsTitle} color={ink} accent={accent} />
      <div style={{ marginBottom: 24 }}>
        {t.certs.map((c, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 10, padding: "8px 0", borderBottom: `1px dotted ${ink}55`, alignItems: "baseline" }}>
            <span style={{ fontFamily: display, fontSize: 18, fontWeight: 700, color: accent }}>{String(i+1).padStart(2, "0")}</span>
            <span>
              <div style={{ fontFamily: "'Kalam', cursive", fontSize: 12, fontWeight: 700 }}>{c.t}</div>
              <div style={{ fontFamily: "'Caveat', cursive", fontSize: 12, color: "#666", fontStyle: "italic" }}>{c.o}</div>
            </span>
            <span style={{ fontFamily: "'Kalam', cursive", fontSize: 10, color: "#666" }}>{c.y}</span>
          </div>
        ))}
      </div>

      {/* OTHER PROJECTS */}
      <SectionLabel n={5} label={t.otherTitle} color={ink} accent={accent} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 24 }}>
        {t.otherProjects.map((p, i) => (
          <div key={i}>
            <ImagePlaceholder w="100%" h={70} label="thumb" color={ink} style={{ marginBottom: 6 }} />
            <div style={{ fontFamily: display, fontSize: 14, fontWeight: 700, lineHeight: 1.1 }}>{p.t}</div>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 12, color: "#666", fontStyle: "italic", marginTop: 2 }}>{p.s}</div>
          </div>
        ))}
      </div>

      {/* EDUCATION + CONTACT side by side */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, borderTop: `2px solid ${ink}`, paddingTop: 16 }}>
        <div>
          <SectionLabel n={6} label={t.eduTitle} color={ink} accent={accent} />
          <div style={{ fontFamily: display, fontSize: 14, fontWeight: 700, lineHeight: 1.1 }}>{t.eduSchool}</div>
          <div style={{ fontFamily: "'Kalam', cursive", fontSize: 11, marginTop: 2 }}>{t.eduDegree}</div>
          <div style={{ fontFamily: "'Caveat', cursive", fontSize: 12, color: "#666", fontStyle: "italic", marginTop: 4 }}>{t.eduMeta}</div>
        </div>
        <div>
          <SectionLabel n={7} label={t.contactTitle} color={ink} accent={accent} />
          <div style={{ fontFamily: "'Kalam', cursive", fontSize: 11, lineHeight: 1.6 }}>
            <div>{t.contact.email}</div>
            <div>{t.contact.phone}</div>
            <div>{t.contact.linkedin}</div>
            <div>{t.contact.github}</div>
          </div>
          <div style={{ display: "flex", gap: 6, marginTop: 10, flexWrap: "wrap" }}>
            {t.cta.map((c, i) => (
              <SketchButton key={i} primary={i===0} accent={accent}>{c}</SketchButton>
            ))}
          </div>
        </div>
      </div>

      {/* Footer mark */}
      <div style={{ marginTop: 24, borderTop: `1px solid ${ink}`, paddingTop: 8, fontFamily: "'Kalam', cursive", fontSize: 9, letterSpacing: 2, color: "#888", textAlign: "center" }}>
        — FIN —
      </div>
    </div>
  );
}

window.WF2_Editorial = WF2_Editorial;
