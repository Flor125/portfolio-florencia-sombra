// Wireframe 3: Corporate moderno
// Estructura: hero card grande + grid de tarjetas, sidebar nav fija, sobrio
// Vibe: portfolio profesional banca/seguros, sans humanista

function WF3_Corporate() {
  const t = window.CONTENT.es;
  const accent = "#1f3d6e"; // navy
  const ink = "#1a1a1a";

  return (
    <div style={{
      width: 540, padding: "20px 22px 28px", background: "#fefdf8",
      fontFamily: "'Kalam', cursive", color: ink, position: "relative",
    }}>
      <Sticky color="#c9e0f0" style={{ position: "absolute", top: -6, right: -10, zIndex: 5 }}>
        WF-03 · CORPORATE<br/>
        <span style={{ fontSize: 12 }}>"banca / seguros"</span>
      </Sticky>

      {/* Top bar — sidebar simulada */}
      <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 14 }}>
        {/* Sidebar */}
        <div style={{ borderRight: `1.4px solid ${ink}`, paddingRight: 12, position: "sticky", top: 12 }}>
          <div style={{ fontFamily: "'Caveat', cursive", fontSize: 18, fontWeight: 700, lineHeight: 1, marginBottom: 4 }}>
            FS<span style={{ color: accent }}>.</span>
          </div>
          <div style={{ fontFamily: "'Kalam', cursive", fontSize: 9, letterSpacing: 1, color: "#666", marginBottom: 14 }}>
            FLORENCIA SOMBRA
          </div>
          <div style={{ fontFamily: "'Kalam', cursive", fontSize: 11, lineHeight: 2.2 }}>
            {t.nav.map((n, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 8, height: 1.5, background: i === 0 ? accent : "#999" }} />
                <span style={{ fontWeight: i === 0 ? 700 : 400, color: i === 0 ? accent : ink }}>{n}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 16, fontFamily: "'Kalam', cursive", fontSize: 10, color: "#666" }}>
            ES | <span style={{ color: "#bbb" }}>EN</span>
          </div>
          <div style={{ marginTop: 16, fontFamily: "'Kalam', cursive", fontSize: 10, color: "#666", lineHeight: 1.5 }}>
            {t.location}
          </div>
        </div>

        {/* Main column */}
        <div>
          {/* HERO card */}
          <div style={{ border: `1.6px solid ${ink}`, padding: "20px 18px 18px", marginBottom: 14, position: "relative", background: "#f7f4ec" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 100px", gap: 14, alignItems: "start" }}>
              <div>
                <div style={{ fontFamily: "'Kalam', cursive", fontSize: 9, letterSpacing: 2, color: accent, fontWeight: 700, marginBottom: 6 }}>
                  · DISPONIBLE PARA ROLES REMOTOS
                </div>
                <div style={{ fontFamily: "'Kalam', cursive", fontSize: 26, fontWeight: 700, lineHeight: 1.05, marginBottom: 4 }}>
                  {t.name}
                </div>
                <div style={{ fontFamily: "'Caveat', cursive", fontSize: 18, color: accent, marginBottom: 8 }}>
                  {t.role}
                </div>
                <div style={{ fontFamily: "'Kalam', cursive", fontSize: 10, color: "#555", marginBottom: 12 }}>
                  {t.subRole}
                </div>

                <div style={{ borderLeft: `2.5px solid ${accent}`, paddingLeft: 10 }}>
                  <div style={{ fontFamily: "'Caveat', cursive", fontSize: 18, fontWeight: 700, lineHeight: 1.15 }}>
                    {t.heroLine1} {t.heroLine2.toLowerCase()},
                  </div>
                  <div style={{ fontFamily: "'Caveat', cursive", fontSize: 16, color: "#666" }}>
                    {t.heroLine3}
                  </div>
                </div>
              </div>
              <ImagePlaceholder w={100} h={120} label="foto pro" color={ink} />
            </div>

            <div style={{ display: "flex", gap: 6, marginTop: 14, flexWrap: "wrap" }}>
              {t.cta.map((c, i) => (
                <SketchButton key={i} primary={i===0} accent={accent}>{c}</SketchButton>
              ))}
            </div>
          </div>

          {/* IBM logos strip */}
          <div style={{ display: "flex", gap: 8, marginBottom: 18, alignItems: "center", borderTop: `1px dashed ${ink}55`, borderBottom: `1px dashed ${ink}55`, padding: "10px 0" }}>
            <span style={{ fontFamily: "'Kalam', cursive", fontSize: 9, letterSpacing: 1.5, color: "#888", marginRight: 8 }}>CERTIFIED IN</span>
            {["IBM", "Z/OS", "Db2", "COBOL", "Zowe", "RACF"].map((l, i) => (
              <div key={i} style={{ border: `1.2px solid ${ink}66`, padding: "3px 8px", fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: "#555" }}>{l}</div>
            ))}
          </div>

          {/* About */}
          <SectionLabel n={1} label={t.aboutTitle} color={ink} accent={accent} />
          <div style={{ fontFamily: "'Kalam', cursive", fontSize: 11, lineHeight: 1.65, marginBottom: 20 }}>
            {t.aboutBody}
          </div>

          {/* STACK — cards */}
          <SectionLabel n={2} label={t.stackTitle} color={ink} accent={accent} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 20 }}>
            {t.stackGroups.map((g, i) => (
              <div key={i} style={{ border: `1.2px solid ${ink}`, padding: "10px 12px", background: "#fff" }}>
                <div style={{ fontFamily: "'Caveat', cursive", fontSize: 14, fontWeight: 700, color: accent, marginBottom: 4 }}>
                  {g.title}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                  {g.items.map((it, j) => (
                    <span key={j} style={{ border: `1px solid ${ink}66`, padding: "1px 6px", fontFamily: "'JetBrains Mono', monospace", fontSize: 9, borderRadius: 10 }}>{it}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* PROJECT — full card with metrics top, body bottom */}
          <SectionLabel n={3} label="Proyecto destacado" color={ink} accent={accent} />
          <div style={{ border: `1.6px solid ${ink}`, padding: "14px", marginBottom: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
              <div>
                <div style={{ fontFamily: "'Kalam', cursive", fontSize: 16, fontWeight: 700 }}>{t.projectTitle}</div>
                <div style={{ fontFamily: "'Caveat', cursive", fontSize: 13, color: accent }}>{t.projectSub}</div>
              </div>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, border: `1px solid ${ink}`, padding: "2px 6px" }}>2025</span>
            </div>

            <ImagePlaceholder w="100%" h={120} label="diagrama: COBOL/JCL ↔ Db2 ↔ Flask · LinuxONE s390x" color={ink} style={{ marginBottom: 10 }} />

            {/* Metrics row — uniform */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 6, marginBottom: 12 }}>
              {t.projectMetrics.map((m, i) => (
                <div key={i} style={{ background: "#f4f1e8", padding: "8px 4px", textAlign: "center" }}>
                  <div style={{ fontFamily: "'Kalam', cursive", fontSize: 16, fontWeight: 700, color: accent }}>{m.v}</div>
                  <div style={{ fontFamily: "'Kalam', cursive", fontSize: 8, color: "#555", marginTop: 2, lineHeight: 1.1 }}>{m.l}</div>
                </div>
              ))}
            </div>

            <div style={{ fontFamily: "'Kalam', cursive", fontSize: 11, lineHeight: 1.6 }}>
              {t.projectBullets.map((b, i) => (
                <div key={i} style={{ display: "flex", gap: 6, marginBottom: 4 }}>
                  <span style={{ color: accent, fontWeight: 700 }}>›</span>
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 6, marginTop: 10 }}>
              <SketchButton primary accent={accent}>Ver case study</SketchButton>
              <SketchButton>GitHub</SketchButton>
            </div>
          </div>

          {/* CERTS — grid de badges */}
          <SectionLabel n={4} label={t.certsTitle} color={ink} accent={accent} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 20 }}>
            {t.certs.map((c, i) => (
              <div key={i} style={{ border: `1.2px solid ${ink}`, padding: "8px 10px", display: "flex", gap: 8, alignItems: "center" }}>
                <div style={{ width: 28, height: 28, border: `1.4px solid ${accent}`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Caveat', cursive", fontWeight: 700, color: accent, fontSize: 13 }}>★</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: "'Kalam', cursive", fontSize: 10, fontWeight: 700, lineHeight: 1.2 }}>{c.t}</div>
                  <div style={{ fontFamily: "'Caveat', cursive", fontSize: 11, color: "#666" }}>{c.o} · {c.y}</div>
                </div>
              </div>
            ))}
          </div>

          {/* OTHER PROJECTS */}
          <SectionLabel n={5} label={t.otherTitle} color={ink} accent={accent} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 20 }}>
            {t.otherProjects.map((p, i) => (
              <div key={i} style={{ border: `1.2px solid ${ink}`, padding: 8 }}>
                <ImagePlaceholder w="100%" h={50} label="thumb" color={ink} style={{ marginBottom: 6 }} />
                <div style={{ fontFamily: "'Kalam', cursive", fontSize: 10, fontWeight: 700 }}>{p.t}</div>
                <div style={{ fontFamily: "'Caveat', cursive", fontSize: 11, color: "#666" }}>{p.s}</div>
              </div>
            ))}
          </div>

          {/* EDU + CONTACT */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div>
              <SectionLabel n={6} label={t.eduTitle} color={ink} accent={accent} />
              <div style={{ border: `1.2px solid ${ink}`, padding: "10px 12px" }}>
                <div style={{ fontFamily: "'Kalam', cursive", fontSize: 11, fontWeight: 700, lineHeight: 1.2 }}>{t.eduSchool}</div>
                <div style={{ fontFamily: "'Caveat', cursive", fontSize: 13, color: accent, marginTop: 2 }}>{t.eduDegree}</div>
                <div style={{ fontFamily: "'Kalam', cursive", fontSize: 9, color: "#666", marginTop: 4, lineHeight: 1.4 }}>{t.eduMeta}</div>
              </div>
            </div>
            <div>
              <SectionLabel n={7} label={t.contactTitle} color={ink} accent={accent} />
              <div style={{ border: `1.2px solid ${ink}`, padding: "10px 12px" }}>
                <div style={{ fontFamily: "'Caveat', cursive", fontSize: 14, fontWeight: 700, marginBottom: 6, lineHeight: 1.1 }}>
                  Hablemos.
                </div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, lineHeight: 1.7, color: "#444" }}>
                  <div>{t.contact.email}</div>
                  <div>{t.contact.linkedin}</div>
                  <div>{t.contact.github}</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Sticky color="#fde7a3" style={{ position: "absolute", left: -22, top: 380, transform: "rotate(-3deg)" }}>
        sidebar fija<br/>tipo doc/manual<br/>nav numerada
      </Sticky>
    </div>
  );
}

window.WF3_Corporate = WF3_Corporate;
