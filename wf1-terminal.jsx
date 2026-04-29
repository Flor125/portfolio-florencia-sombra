// Wireframe 1: Terminal / Mainframe vibe
// Estructura: pantalla 3270-like, columna single, todo monoespaciado
// Vibe: verde fósforo sobre fondo crema, framing de terminal

function WF1_Terminal() {
  const t = window.CONTENT.es;
  const accent = "#0a7a3a"; // green phosphor (en wireframe se ve oscuro)
  const ink = "#1a1a1a";

  const monoFrame = {
    fontFamily: "'JetBrains Mono', 'Courier New', monospace",
    fontSize: 11,
    color: ink,
  };

  return (
    <div style={{
      width: 540, padding: "20px 22px 28px", background: "#fefdf8",
      fontFamily: "'Kalam', cursive", color: ink, position: "relative",
    }}>
      {/* Top sticky note */}
      <Sticky color="#c9f0c9" style={{ position: "absolute", top: -6, right: -10, zIndex: 5 }}>
        WF-01 · TERMINAL VIBE<br/>
        <span style={{ fontSize: 12 }}>"como una sesión 3270"</span>
      </Sticky>

      {/* Terminal chrome — top bar */}
      <div style={{ ...monoFrame, border: `1.4px solid ${ink}`, padding: "6px 10px", display: "flex", justifyContent: "space-between", marginBottom: 6, background: "#f4f1e8" }}>
        <span>TSO/E SESSION — FLOR125.PORTFOLIO</span>
        <span>[ ES | en ]  ROW 001 OF 999</span>
      </div>

      {/* HERO as a terminal screen */}
      <div style={{ border: `1.6px solid ${ink}`, padding: "18px 16px 20px", marginBottom: 14, position: "relative" }}>
        <div style={{ ...monoFrame, color: accent, marginBottom: 6 }}>===&gt; READY</div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 22, fontWeight: 700, letterSpacing: -0.5, lineHeight: 1.15 }}>
          {t.name.toUpperCase()}
        </div>
        <div style={{ ...monoFrame, fontSize: 12, marginTop: 4, marginBottom: 14 }}>
          &gt; {t.role.toUpperCase()} · {t.subRole}
        </div>

        <div style={{ borderTop: `1px dashed ${ink}`, paddingTop: 10, marginBottom: 12 }}>
          <div style={{ fontFamily: "'Caveat', cursive", fontSize: 26, fontWeight: 700, lineHeight: 1.05, color: accent }}>
            {t.heroLine1}
          </div>
          <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, lineHeight: 1.1 }}>
            {t.heroLine2}
          </div>
          <div style={{ fontFamily: "'Caveat', cursive", fontSize: 18, color: "#6a5a4a", marginTop: 2 }}>
            {t.heroLine3}
          </div>
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <SketchButton primary accent={accent}>$ ./download_cv.sh</SketchButton>
          <SketchButton>$ contact</SketchButton>
          <SketchButton>$ linkedin</SketchButton>
          <SketchButton>$ github</SketchButton>
        </div>

        <div style={{ ...monoFrame, position: "absolute", bottom: 4, right: 8, color: "#888" }}>F3=EXIT  F7=UP  F8=DOWN</div>
      </div>

      <Sticky style={{ position: "absolute", left: -18, top: 250, transform: "rotate(-3deg)" }}>
        cursor titilante<br/>tipo CLI →
      </Sticky>

      {/* NAV as command list */}
      <div style={{ ...monoFrame, border: `1.2px solid ${ink}`, padding: "8px 12px", marginBottom: 14 }}>
        {t.nav.map((n, i) => (
          <span key={i} style={{ marginRight: 14 }}>
            <span style={{ color: accent, fontWeight: 700 }}>0{i+1}</span> {n.toLowerCase()}
          </span>
        ))}
      </div>

      {/* ABOUT */}
      <SectionLabel n={1} label={t.aboutTitle} color={ink} accent={accent} />
      <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 12, marginBottom: 18 }}>
        <ImagePlaceholder w={80} h={100} label="foto" color={ink} />
        <div style={{ ...monoFrame, fontSize: 11, lineHeight: 1.55 }}>
          {t.aboutBody}
        </div>
      </div>

      {/* STACK as a screen with grouped boxes */}
      <SectionLabel n={2} label={t.stackTitle} color={ink} accent={accent} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 18 }}>
        {t.stackGroups.map((g, i) => (
          <div key={i} style={{ border: `1.2px solid ${ink}`, padding: "8px 10px" }}>
            <div style={{ ...monoFrame, fontSize: 10, color: accent, marginBottom: 4, fontWeight: 700 }}>
              [{g.title.toUpperCase()}]
            </div>
            <div style={{ ...monoFrame, fontSize: 10, lineHeight: 1.6 }}>
              {g.items.map((it, j) => (
                <span key={j} style={{ marginRight: 6 }}>· {it}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* FEATURED PROJECT — terminal job submit */}
      <SectionLabel n={3} label={t.projectTitle} color={ink} accent={accent} />
      <div style={{ border: `1.6px solid ${ink}`, padding: "12px 14px", marginBottom: 18 }}>
        <div style={{ ...monoFrame, color: accent, marginBottom: 4 }}>//FLOR125 JOB CLASS=A,MSGCLASS=X</div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 16, fontWeight: 700, marginBottom: 2 }}>
          KIOSCO-MGMT-MAINFRAME
        </div>
        <div style={{ ...monoFrame, color: "#555", marginBottom: 10 }}>{t.projectSub}</div>

        {/* Architecture diagram placeholder */}
        <ImagePlaceholder w="100%" h={130} label="diagrama de arquitectura: COBOL batch ↔ Db2 ↔ JCL · Flask API · LinuxONE s390x" color={ink} style={{ marginBottom: 10 }} />

        {/* Metrics row */}
        <div style={{ display: "flex", gap: 6, marginBottom: 10, flexWrap: "wrap" }}>
          {t.projectMetrics.map((m, i) => (
            <div key={i} style={{ border: `1.2px solid ${ink}`, padding: "4px 8px", flex: "1 1 0", minWidth: 80 }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 14, fontWeight: 700, color: accent }}>{m.v}</div>
              <div style={{ ...monoFrame, fontSize: 8, color: "#555" }}>{m.l}</div>
            </div>
          ))}
        </div>

        {/* Code snippet */}
        <div style={{ ...monoFrame, fontSize: 10, background: "#f4f1e8", padding: "8px 10px", marginBottom: 8, borderLeft: `3px solid ${accent}` }}>
          <div style={{ color: "#888" }}>* COBOL batch — FEFO logic</div>
          <div>PERFORM VARYING IDX FROM 1 BY 1 UNTIL EOF</div>
          <div>&nbsp;&nbsp;IF FECHA-VENC &lt; FECHA-HOY + 7</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;MOVE 'ALERT' TO WS-FLAG</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;PERFORM WRITE-AUDIT-LOG</div>
          <div>END-PERFORM.</div>
        </div>

        <div style={{ ...monoFrame, fontSize: 10, lineHeight: 1.7 }}>
          {t.projectBullets.map((b, i) => <div key={i}>&gt; {b}</div>)}
        </div>
      </div>

      <Sticky color="#fde7a3" style={{ position: "absolute", right: -22, top: 920, transform: "rotate(4deg)" }}>
        snippets reales<br/>COBOL · JCL · SQL<br/>+ output simulado
      </Sticky>

      {/* CERTS */}
      <SectionLabel n={4} label={t.certsTitle} color={ink} accent={accent} />
      <div style={{ marginBottom: 18 }}>
        {t.certs.map((c, i) => (
          <div key={i} style={{ ...monoFrame, fontSize: 11, padding: "6px 0", borderBottom: `1px dashed ${ink}55`, display: "flex", justifyContent: "space-between", gap: 8 }}>
            <span><span style={{ color: accent, fontWeight: 700 }}>◆</span> {c.t}</span>
            <span style={{ color: "#666", whiteSpace: "nowrap" }}>{c.y}</span>
          </div>
        ))}
      </div>

      {/* OTHER PROJECTS */}
      <SectionLabel n={5} label={t.otherTitle} color={ink} accent={accent} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 18 }}>
        {t.otherProjects.map((p, i) => (
          <div key={i} style={{ border: `1.2px solid ${ink}`, padding: "8px" }}>
            <ImagePlaceholder w="100%" h={50} label="thumb" color={ink} style={{ marginBottom: 6 }} />
            <div style={{ ...monoFrame, fontSize: 10, fontWeight: 700 }}>{p.t}</div>
            <div style={{ ...monoFrame, fontSize: 9, color: "#666", marginTop: 2 }}>{p.s}</div>
          </div>
        ))}
      </div>

      {/* EDUCATION */}
      <SectionLabel n={6} label={t.eduTitle} color={ink} accent={accent} />
      <div style={{ border: `1.2px solid ${ink}`, padding: "10px 12px", marginBottom: 18 }}>
        <div style={{ ...monoFrame, fontSize: 11, fontWeight: 700 }}>{t.eduSchool}</div>
        <div style={{ ...monoFrame, fontSize: 11 }}>{t.eduDegree}</div>
        <div style={{ ...monoFrame, fontSize: 10, color: "#666", marginTop: 3 }}>{t.eduMeta}</div>
      </div>

      {/* CONTACT — full terminal screen */}
      <SectionLabel n={7} label={t.contactTitle} color={ink} accent={accent} />
      <div style={{ border: `1.6px solid ${ink}`, padding: "16px 14px", textAlign: "center" }}>
        <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, fontWeight: 700, marginBottom: 4 }}>
          {t.contactCTA}
        </div>
        <div style={{ ...monoFrame, fontSize: 11, color: accent, marginBottom: 12 }}>
          ===&gt; {t.contact.email}
        </div>
        <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
          {t.cta.map((c, i) => (
            <SketchButton key={i} primary={i===0} accent={accent}>{c}</SketchButton>
          ))}
        </div>
        <div style={{ ...monoFrame, fontSize: 9, color: "#888", marginTop: 14 }}>
          *** END OF DATA ***
        </div>
      </div>
    </div>
  );
}

window.WF1_Terminal = WF1_Terminal;
