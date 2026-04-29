// Wireframe 5: Documentación técnica IBM
// Estructura: estilo manual IBM Redbook — sidebar TOC, secciones numeradas profundamente,
//             cabecera de documento, footer paginado. Muy denso pero ordenado.

function WF5_Manual() {
  const t = window.CONTENT.es;
  const accent = "#0f4c81"; // IBM blue
  const ink = "#1a1a1a";

  return (
    <div style={{
      width: 540, padding: "20px 22px 28px", background: "#fefdf8",
      fontFamily: "'Kalam', cursive", color: ink, position: "relative",
    }}>
      <Sticky color="#c9d4f0" style={{ position: "absolute", top: -6, right: -10, zIndex: 5 }}>
        WF-05 · MANUAL IBM<br/>
        <span style={{ fontSize: 12 }}>"Redbook style"</span>
      </Sticky>

      {/* Document header */}
      <div style={{ borderTop: `3px solid ${accent}`, borderBottom: `1px solid ${ink}`, padding: "8px 0", marginBottom: 6, display: "flex", justifyContent: "space-between", fontFamily: "'JetBrains Mono', monospace", fontSize: 9 }}>
        <span>FLOR125-PORT-2026.01</span>
        <span>DOCUMENT REVISION 1.4</span>
        <span>PAGE 01/01</span>
      </div>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: "#888", marginBottom: 18, display: "flex", justifyContent: "space-between" }}>
        <span>CLASSIFICATION: OPEN</span>
        <span>LANG: ES &lt;&gt; EN</span>
      </div>

      {/* Title block */}
      <div style={{ marginBottom: 22 }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: 2, color: accent, fontWeight: 700, marginBottom: 6 }}>
          PROFESSIONAL PORTFOLIO &mdash; TECHNICAL REFERENCE
        </div>
        <div style={{ fontFamily: "'Caveat', cursive", fontSize: 38, fontWeight: 700, lineHeight: 0.95, letterSpacing: -0.5 }}>
          Florencia Alicia<br/>
          Sombra
        </div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: ink, marginTop: 6 }}>
          {t.role.toUpperCase()} · {t.subRole.toUpperCase()}
        </div>
        <div style={{ fontFamily: "'Kalam', cursive", fontSize: 11, color: "#666", marginTop: 4 }}>
          {t.location}
        </div>
      </div>

      {/* Hero callout */}
      <div style={{ borderLeft: `4px solid ${accent}`, background: "#f0f3fa", padding: "10px 14px", marginBottom: 22 }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: accent, fontWeight: 700, marginBottom: 4 }}>
          ▶ HIGHLIGHT
        </div>
        <div style={{ fontFamily: "'Caveat', cursive", fontSize: 19, fontWeight: 700, lineHeight: 1.15 }}>
          {t.heroLine1} {t.heroLine2.toLowerCase()}, {t.heroLine3.toLowerCase()}
        </div>
      </div>

      {/* TOC + Photo */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 110px", gap: 14, marginBottom: 22 }}>
        <div style={{ border: `1.2px solid ${ink}` }}>
          <div style={{ background: ink, color: "#fefdf8", padding: "5px 10px", fontFamily: "'JetBrains Mono', monospace", fontSize: 9, fontWeight: 700, letterSpacing: 1 }}>
            TABLE OF CONTENTS
          </div>
          <div style={{ padding: "8px 10px", fontFamily: "'JetBrains Mono', monospace", fontSize: 10 }}>
            {[
              ["1.0", t.aboutTitle, "P.1"],
              ["2.0", t.stackTitle, "P.1"],
              ["2.1", "Mainframe Core", "P.1"],
              ["2.2", "Mainframe Extendido", "P.2"],
              ["3.0", "Proyecto destacado", "P.2"],
              ["3.1", "Arquitectura", "P.2"],
              ["3.2", "Métricas", "P.3"],
              ["3.3", "Código de muestra", "P.3"],
              ["4.0", t.certsTitle, "P.3"],
              ["5.0", t.otherTitle, "P.4"],
              ["6.0", t.eduTitle, "P.4"],
              ["7.0", t.contactTitle, "P.4"],
            ].map(([n, l, p], i) => (
              <div key={i} style={{ display: "flex", alignItems: "baseline", gap: 6, paddingLeft: n.includes(".") && n.split(".")[1] !== "0" ? 16 : 0 }}>
                <span style={{ color: accent, fontWeight: 700 }}>{n}</span>
                <span style={{ flex: 1, borderBottom: "1px dotted #aaa", margin: "0 4px", height: 8 }} />
                <span style={{ color: "#666" }}>{p}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <ImagePlaceholder w="100%" h={130} label="foto" color={ink} />
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 8, color: "#666", marginTop: 4, textAlign: "center" }}>
            FIG. 1 · AUTOR
          </div>
        </div>
      </div>

      {/* Section 1.0 — About */}
      <div style={{ marginBottom: 22 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 8, borderBottom: `1.4px solid ${ink}`, paddingBottom: 4, marginBottom: 8 }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: accent, fontWeight: 700 }}>1.0</span>
          <span style={{ fontFamily: "'Caveat', cursive", fontSize: 22, fontWeight: 700 }}>{t.aboutTitle}</span>
        </div>
        <div style={{ fontFamily: "'Kalam', cursive", fontSize: 11, lineHeight: 1.65 }}>
          {t.aboutBody}
        </div>
      </div>

      {/* Section 2.0 — Stack */}
      <div style={{ marginBottom: 22 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 8, borderBottom: `1.4px solid ${ink}`, paddingBottom: 4, marginBottom: 8 }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: accent, fontWeight: 700 }}>2.0</span>
          <span style={{ fontFamily: "'Caveat', cursive", fontSize: 22, fontWeight: 700 }}>{t.stackTitle}</span>
        </div>
        {t.stackGroups.map((g, i) => (
          <div key={i} style={{ marginBottom: 10 }}>
            <div style={{ display: "flex", gap: 8, alignItems: "baseline", marginBottom: 4 }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: accent }}>2.{i+1}</span>
              <span style={{ fontFamily: "'Caveat', cursive", fontSize: 16, fontWeight: 700 }}>{g.title}</span>
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'JetBrains Mono', monospace", fontSize: 10 }}>
              <tbody>
                {g.items.map((it, j) => (
                  <tr key={j}>
                    <td style={{ border: `1px solid ${ink}66`, padding: "3px 8px", width: 30, color: "#888", textAlign: "center" }}>{j+1}</td>
                    <td style={{ border: `1px solid ${ink}66`, padding: "3px 8px" }}>{it}</td>
                    <td style={{ border: `1px solid ${ink}66`, padding: "3px 8px", color: "#666", width: 80 }}>practical</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>

      {/* Section 3.0 — Project (the deep one) */}
      <div style={{ marginBottom: 22 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 8, borderBottom: `1.4px solid ${ink}`, paddingBottom: 4, marginBottom: 8 }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: accent, fontWeight: 700 }}>3.0</span>
          <span style={{ fontFamily: "'Caveat', cursive", fontSize: 22, fontWeight: 700 }}>{t.projectTitle}</span>
        </div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: "#666", marginBottom: 8 }}>
          {t.projectSub}
        </div>

        {/* 3.1 Arq */}
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: accent, fontWeight: 700, marginBottom: 4 }}>
          3.1 ARQUITECTURA
        </div>
        <ImagePlaceholder w="100%" h={140} label="diagrama UML — sistema híbrido COBOL/Db2/JCL/Flask" color={ink} style={{ marginBottom: 4 }} />
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 8, color: "#666", marginBottom: 12, textAlign: "center" }}>
          FIG. 2 · DIAGRAMA DE COMPONENTES
        </div>

        {/* 3.2 Metrics — table */}
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: accent, fontWeight: 700, marginBottom: 4 }}>
          3.2 MÉTRICAS
        </div>
        <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'JetBrains Mono', monospace", fontSize: 10, marginBottom: 12 }}>
          <thead>
            <tr style={{ background: "#f0f3fa" }}>
              <th style={{ border: `1px solid ${ink}66`, padding: "4px 8px", textAlign: "left" }}>Métrica</th>
              <th style={{ border: `1px solid ${ink}66`, padding: "4px 8px", textAlign: "left" }}>Valor</th>
              <th style={{ border: `1px solid ${ink}66`, padding: "4px 8px", textAlign: "left" }}>Observación</th>
            </tr>
          </thead>
          <tbody>
            {t.projectMetrics.map((m, i) => (
              <tr key={i}>
                <td style={{ border: `1px solid ${ink}66`, padding: "4px 8px" }}>{m.l}</td>
                <td style={{ border: `1px solid ${ink}66`, padding: "4px 8px", color: accent, fontWeight: 700 }}>{m.v}</td>
                <td style={{ border: `1px solid ${ink}66`, padding: "4px 8px", color: "#666" }}>verificado</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* 3.3 Code */}
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: accent, fontWeight: 700, marginBottom: 4 }}>
          3.3 CÓDIGO DE MUESTRA &mdash; FEFO LOGIC
        </div>
        <div style={{ background: "#f4f1e8", border: `1px solid ${ink}66`, padding: "8px 10px", fontFamily: "'JetBrains Mono', monospace", fontSize: 9, lineHeight: 1.55, marginBottom: 8 }}>
          <div style={{ color: "#888" }}>      * COBOL · CONTROL DE VENCIMIENTOS</div>
          <div>       PERFORM VARYING IDX FROM 1 BY 1 UNTIL EOF-STOCK</div>
          <div>           READ STOCK-MAESTRO INTO WS-REG</div>
          <div>           IF FECHA-VENC OF WS-REG &lt; FECHA-HOY + 7</div>
          <div>               MOVE 'ALERT' TO WS-FLAG</div>
          <div>               PERFORM 9000-WRITE-AUDIT</div>
          <div>           END-IF</div>
          <div>       END-PERFORM.</div>
        </div>

        <div style={{ fontFamily: "'Kalam', cursive", fontSize: 11, lineHeight: 1.65 }}>
          {t.projectBullets.map((b, i) => (
            <div key={i} style={{ display: "flex", gap: 6, marginBottom: 4 }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: accent, fontWeight: 700 }}>3.3.{i+1}</span>
              <span>{b}</span>
            </div>
          ))}
        </div>
      </div>

      <Sticky color="#fde7a3" style={{ position: "absolute", right: -28, top: 1300, transform: "rotate(3deg)" }}>
        formato manual:<br/>secciones numeradas<br/>tablas, figuras<br/>callouts laterales
      </Sticky>

      {/* 4.0 Certs */}
      <div style={{ marginBottom: 22 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 8, borderBottom: `1.4px solid ${ink}`, paddingBottom: 4, marginBottom: 8 }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: accent, fontWeight: 700 }}>4.0</span>
          <span style={{ fontFamily: "'Caveat', cursive", fontSize: 22, fontWeight: 700 }}>{t.certsTitle}</span>
        </div>
        <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'JetBrains Mono', monospace", fontSize: 10 }}>
          <tbody>
            {t.certs.map((c, i) => (
              <tr key={i}>
                <td style={{ border: `1px solid ${ink}66`, padding: "5px 8px", width: 30, color: accent, fontWeight: 700, textAlign: "center" }}>4.{i+1}</td>
                <td style={{ border: `1px solid ${ink}66`, padding: "5px 8px" }}>{c.t}</td>
                <td style={{ border: `1px solid ${ink}66`, padding: "5px 8px", color: "#666", width: 90 }}>{c.y}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 5.0 Other */}
      <div style={{ marginBottom: 22 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 8, borderBottom: `1.4px solid ${ink}`, paddingBottom: 4, marginBottom: 8 }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: accent, fontWeight: 700 }}>5.0</span>
          <span style={{ fontFamily: "'Caveat', cursive", fontSize: 22, fontWeight: 700 }}>{t.otherTitle}</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
          {t.otherProjects.map((p, i) => (
            <div key={i} style={{ border: `1px solid ${ink}66`, padding: 8 }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: accent, marginBottom: 4 }}>5.{i+1}</div>
              <ImagePlaceholder w="100%" h={50} label="thumb" color={ink} style={{ marginBottom: 4 }} />
              <div style={{ fontFamily: "'Caveat', cursive", fontSize: 14, fontWeight: 700, lineHeight: 1.1 }}>{p.t}</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 8, color: "#666" }}>{p.s}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 6 + 7 spread */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 18 }}>
        <div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 6, borderBottom: `1.4px solid ${ink}`, paddingBottom: 4, marginBottom: 6 }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: accent, fontWeight: 700 }}>6.0</span>
            <span style={{ fontFamily: "'Caveat', cursive", fontSize: 18, fontWeight: 700 }}>{t.eduTitle}</span>
          </div>
          <div style={{ fontFamily: "'Kalam', cursive", fontSize: 11, fontWeight: 700, lineHeight: 1.2 }}>{t.eduSchool}</div>
          <div style={{ fontFamily: "'Caveat', cursive", fontSize: 14, color: accent }}>{t.eduDegree}</div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: "#666", marginTop: 4 }}>{t.eduMeta}</div>
        </div>
        <div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 6, borderBottom: `1.4px solid ${ink}`, paddingBottom: 4, marginBottom: 6 }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: accent, fontWeight: 700 }}>7.0</span>
            <span style={{ fontFamily: "'Caveat', cursive", fontSize: 18, fontWeight: 700 }}>{t.contactTitle}</span>
          </div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, lineHeight: 1.7, color: "#444" }}>
            <div>{t.contact.email}</div>
            <div>{t.contact.phone}</div>
            <div>{t.contact.linkedin}</div>
            <div>{t.contact.github}</div>
          </div>
          <div style={{ display: "flex", gap: 4, marginTop: 8, flexWrap: "wrap" }}>
            {t.cta.map((c, i) => (
              <SketchButton key={i} primary={i===0} accent={accent}>{c}</SketchButton>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ borderTop: `1.4px solid ${ink}`, paddingTop: 6, fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: "#888", display: "flex", justifyContent: "space-between" }}>
        <span>FLOR125-PORT-2026.01</span>
        <span>END OF DOCUMENT</span>
        <span>P.04</span>
      </div>
    </div>
  );
}

window.WF5_Manual = WF5_Manual;
