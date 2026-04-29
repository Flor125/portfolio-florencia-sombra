// Wireframe 4: Híbrido Editorial + Terminal
// Estructura: hero editorial sobrio + secciones de proyecto en modo terminal
// Vibe: lo mejor de los dos mundos — autoridad editorial + credibilidad técnica

function WF4_Hybrid() {
  const t = window.CONTENT.es;
  const accent = "#0a7a3a"; // verde
  const accent2 = "#8a2727"; // rojo editorial
  const ink = "#1a1a1a";

  return (
    <div style={{
      width: 540, padding: "24px 28px 32px", background: "#fefdf8",
      fontFamily: "'Kalam', cursive", color: ink, position: "relative",
    }}>
      <Sticky color="#f0d4c9" style={{ position: "absolute", top: -6, right: -10, zIndex: 5 }}>
        WF-04 · HÍBRIDO<br/>
        <span style={{ fontSize: 12 }}>editorial + terminal</span>
      </Sticky>

      {/* Top */}
      <div style={{ display: "flex", justifyContent: "space-between", borderBottom: `1.4px solid ${ink}`, paddingBottom: 6, marginBottom: 28, fontFamily: "'JetBrains Mono', monospace", fontSize: 10 }}>
        <span>FLOR125 · PORTFOLIO/2026</span>
        <span style={{ display: "flex", gap: 14 }}>
          {t.nav.map((n, i) => <span key={i}>{n.toLowerCase()}</span>)}
          <span>[ ES ]</span>
        </span>
      </div>

      {/* HERO — Editorial big type */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: 2, color: accent, marginBottom: 8 }}>
          ▸ COBOL · IBM MAINFRAME · BATCH &amp; ONLINE · PYTHON/FLASK
        </div>
        <div style={{ fontFamily: "'Caveat', cursive", fontSize: 70, fontWeight: 700, lineHeight: 0.9, letterSpacing: -2, marginBottom: 10 }}>
          Florencia<br/>
          Sombra.
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 16, alignItems: "end" }}>
          <div style={{ fontFamily: "'Caveat', cursive", fontSize: 22, lineHeight: 1.1, fontWeight: 600 }}>
            {t.heroLine1}<br/>
            <span style={{ color: accent2 }}>{t.heroLine2}</span><br/>
            <span style={{ fontSize: 17, color: "#666" }}>{t.heroLine3}</span>
          </div>
          <ImagePlaceholder w="100%" h={130} label="foto · b&w" color={ink} />
        </div>
      </div>

      <Sticky style={{ position: "absolute", left: -24, top: 220, transform: "rotate(-5deg)" }}>
        hero serif XL<br/>+ bloque hero<br/>tipo subtítulo
      </Sticky>

      {/* Stat ticker — terminal */}
      <div style={{ background: ink, color: "#fefdf8", padding: "10px 14px", marginBottom: 28, fontFamily: "'JetBrains Mono', monospace", fontSize: 10, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
        <span><span style={{ color: accent }}>●</span> 9/10 PPS</span>
        <span><span style={{ color: accent }}>●</span> 500+ líneas COBOL</span>
        <span><span style={{ color: accent }}>●</span> IBM Z Xplore All Star</span>
        <span><span style={{ color: accent }}>●</span> 30+ insignias técnicas</span>
        <span><span style={{ color: accent }}>●</span> EF B2</span>
      </div>

      {/* About — editorial */}
      <SectionLabel n={1} label={t.aboutTitle} color={ink} accent={accent2} />
      <div style={{ fontFamily: "'Kalam', cursive", fontSize: 13, lineHeight: 1.7, marginBottom: 28, maxWidth: "85%" }}>
        {t.aboutBody}
      </div>

      {/* Stack — terminal style */}
      <SectionLabel n={2} label={t.stackTitle} color={ink} accent={accent2} />
      <div style={{ background: "#f4f1e8", border: `1.4px solid ${ink}`, padding: "12px 14px", marginBottom: 28, fontFamily: "'JetBrains Mono', monospace", fontSize: 10 }}>
        <div style={{ color: accent, marginBottom: 6 }}>$ tree ./skills</div>
        {t.stackGroups.map((g, i) => (
          <div key={i} style={{ marginBottom: 6 }}>
            <div style={{ fontWeight: 700 }}>├── {g.title}/</div>
            {g.items.map((it, j) => (
              <div key={j} style={{ paddingLeft: 18, color: "#444" }}>
                {j === g.items.length - 1 ? "└──" : "├──"} {it}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* PROJECT — full editorial header + terminal body */}
      <SectionLabel n={3} label="Case study" color={ink} accent={accent2} />
      <div style={{ marginBottom: 28 }}>
        <div style={{ fontFamily: "'Caveat', cursive", fontSize: 36, fontWeight: 700, lineHeight: 1, letterSpacing: -0.5 }}>
          Sistema de Gestión<br/>
          de Inventario<br/>
          <span style={{ color: accent2, fontStyle: "italic" }}>en mainframe.</span>
        </div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: accent, marginTop: 6, marginBottom: 16 }}>
          STACK: COBOL · DB2 · JCL · FLASK · LINUXONE-S390X · DOCKER
        </div>

        {/* Architecture — full bleed */}
        <div style={{ position: "relative", marginBottom: 14 }}>
          <ImagePlaceholder w="100%" h={180} label="diagrama de arquitectura — full bleed" color={ink} />
        </div>

        {/* Metrics terminal */}
        <div style={{ background: ink, color: "#fefdf8", padding: "12px 14px", marginBottom: 14, fontFamily: "'JetBrains Mono', monospace", fontSize: 10 }}>
          <div style={{ color: accent, marginBottom: 6 }}>$ cat metrics.txt</div>
          {t.projectMetrics.map((m, i) => (
            <div key={i}>
              <span style={{ color: accent, fontWeight: 700, marginRight: 8 }}>{m.v.padEnd(12, " ")}</span>
              <span style={{ color: "#ccc" }}>{m.l}</span>
            </div>
          ))}
        </div>

        {/* Code excerpt — JCL */}
        <div style={{ border: `1.4px solid ${ink}`, marginBottom: 14 }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, padding: "4px 10px", borderBottom: `1px solid ${ink}`, background: "#f4f1e8", display: "flex", justifyContent: "space-between" }}>
            <span>FEFO.JCL</span><span>JOB CLASS=A</span>
          </div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, padding: "8px 10px", lineHeight: 1.6 }}>
            <div style={{ color: accent }}>//FEFOBAT  JOB (ACCT),'FLORENCIA',CLASS=A,MSGCLASS=X</div>
            <div>//STEP01   EXEC PGM=COBFEFO,PARM='FECHA=20260101'</div>
            <div>//STKIN    DD DSN=FLOR125.STOCK.MAESTRO,DISP=SHR</div>
            <div>//ALERTOUT DD DSN=FLOR125.ALERTAS.OUT,DISP=(NEW,CATLG)</div>
            <div>//SYSOUT   DD SYSOUT=*</div>
          </div>
        </div>

        {/* Bullets — editorial */}
        <div style={{ fontFamily: "'Kalam', cursive", fontSize: 12, lineHeight: 1.7, columnCount: 2, columnGap: 16 }}>
          {t.projectBullets.map((b, i) => (
            <div key={i} style={{ marginBottom: 8, breakInside: "avoid" }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", color: accent, fontSize: 9, marginRight: 6 }}>0{i+1}</span>
              {b}
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
          <SketchButton primary accent={accent}>$ ./view_full_case</SketchButton>
          <SketchButton>$ git clone</SketchButton>
        </div>
      </div>

      <Sticky color="#fde7a3" style={{ position: "absolute", right: -28, top: 1100, transform: "rotate(4deg)" }}>
        case study mezcla:<br/>headline editorial<br/>+ JCL real terminal
      </Sticky>

      {/* CERTS — editorial list */}
      <SectionLabel n={4} label={t.certsTitle} color={ink} accent={accent2} />
      <div style={{ marginBottom: 28 }}>
        {t.certs.map((c, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 12, padding: "10px 0", borderBottom: i < t.certs.length - 1 ? `1px solid ${ink}33` : `1.4px solid ${ink}`, alignItems: "center" }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: "#888" }}>{String(i+1).padStart(2, "0")}</span>
            <span>
              <div style={{ fontFamily: "'Caveat', cursive", fontSize: 17, fontWeight: 700, lineHeight: 1.1 }}>{c.t}</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: "#666", marginTop: 2 }}>{c.o}</div>
            </span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: accent, fontWeight: 700 }}>{c.y}</span>
          </div>
        ))}
      </div>

      {/* OTHER */}
      <SectionLabel n={5} label={t.otherTitle} color={ink} accent={accent2} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 28 }}>
        {t.otherProjects.map((p, i) => (
          <div key={i}>
            <ImagePlaceholder w="100%" h={70} label="thumb" color={ink} style={{ marginBottom: 6 }} />
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 16, fontWeight: 700, lineHeight: 1.1 }}>{p.t}</div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: "#666", marginTop: 2 }}>{p.s}</div>
          </div>
        ))}
      </div>

      {/* EDU + CONTACT — final spread */}
      <div style={{ borderTop: `2px solid ${ink}`, paddingTop: 20 }}>
        <div style={{ fontFamily: "'Caveat', cursive", fontSize: 32, fontWeight: 700, lineHeight: 1, marginBottom: 14 }}>
          {t.contactCTA}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: accent, marginBottom: 6 }}>$ whoami</div>
            <div style={{ fontFamily: "'Kalam', cursive", fontSize: 11, lineHeight: 1.6 }}>
              <div>{t.contact.email}</div>
              <div>{t.contact.phone}</div>
              <div>{t.contact.linkedin}</div>
              <div>{t.contact.github}</div>
            </div>
          </div>
          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: accent, marginBottom: 6 }}>$ cat education.md</div>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 16, fontWeight: 700, lineHeight: 1.1 }}>{t.eduDegree}</div>
            <div style={{ fontFamily: "'Kalam', cursive", fontSize: 10, color: "#666", marginTop: 2 }}>{t.eduSchool}</div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: accent, marginTop: 4 }}>{t.eduMeta}</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8, marginTop: 16, flexWrap: "wrap" }}>
          {t.cta.map((c, i) => (
            <SketchButton key={i} primary={i===0} accent={accent}>{c}</SketchButton>
          ))}
        </div>
      </div>
    </div>
  );
}

window.WF4_Hybrid = WF4_Hybrid;
