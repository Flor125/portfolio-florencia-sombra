// Sketchy primitives + bilingual content for portfolio wireframes
// Florencia Sombra — COBOL/Mainframe Developer

// ─── Bilingual content ──────────────────────────────────────────
const CONTENT = {
  es: {
    name: "Florencia Alicia Sombra",
    role: "Desarrolladora COBOL Junior",
    subRole: "IBM Mainframe · Batch & Online · Python/Flask",
    location: "San Luis, Argentina · Remoto",
    heroLine1: "Único despliegue de la cohorte",
    heroLine2: "en infraestructura IBM LinuxONE real",
    heroLine3: "expuesto a tráfico real de internet.",
    nav: ["Sobre mí", "Stack", "Proyecto", "Certificaciones", "Educación", "Contacto"],
    aboutTitle: "Sobre mí",
    aboutBody: "Desarrolladora COBOL junior con experiencia práctica desplegando aplicaciones batch en infraestructura empresarial IBM LinuxONE real (s390x). Diseñé, codifiqué y documenté un sistema híbrido de grado productivo integrando COBOL batch, Db2, JCL y Python Flask, calificado con 9/10. IBM Z Xplore All Star.",
    stackTitle: "Stack técnico",
    stackGroups: [
      { title: "Mainframe Core", items: ["COBOL", "JCL", "IBM Db2", "VSAM", "z/OS", "TSO/ISPF"] },
      { title: "Mainframe Extendido", items: ["CICS", "RACF", "IBM MQ", "IMS", "zOSMF", "Assembler", "PL/I"] },
      { title: "Herramientas", items: ["Zowe CLI/Desktop", "Ansible", "Docker s390x", "IBM Z OAU"] },
      { title: "Backend & Integración", items: ["Python", "Flask", "ibm_db", "REST APIs", "Bash", "Git"] },
    ],
    projectTitle: "Sistema de Gestión de Inventario",
    projectSub: "Arquitectura Mainframe · COBOL + Db2 + JCL + Flask",
    projectMetrics: [
      { v: "9/10", l: "calificación PPS" },
      { v: "500+", l: "líneas COBOL batch" },
      { v: "8", l: "tablas Db2 normalizadas" },
      { v: "56", l: "páginas de documentación" },
      { v: "1/cohorte", l: "despliegue en LinuxONE real" },
    ],
    projectBullets: [
      "Procesamiento batch nocturno: control de stock, alertas FEFO, actualización masiva de precios.",
      "Esquema Db2 normalizado con transacciones ACID e integridad referencial.",
      "API REST en Python Flask con RBAC, hashing pbkdf2:sha256, CSRF y auditoría completa.",
      "Logs documentaron y bloquearon ataques reales: bots, SQLi, fuerza bruta, secuestro de sesión.",
    ],
    certsTitle: "Certificaciones",
    certs: [
      { t: "IBM Mainframe Developer Professional", o: "IBM / Coursera", y: "2024–2025" },
      { t: "IBM z/OS Mainframe Practitioner", o: "IBM / Coursera", y: "2024–2025" },
      { t: "IBM Z Xplore All Star", o: "Concepts + Advanced + Code-a-Thon", y: "Oct 2024" },
      { t: "Fundamentals for Zowe", o: "Interskill Learning", y: "2025" },
      { t: "EF SET English B2", o: "Upper Intermediate", y: "2024" },
    ],
    eduTitle: "Educación",
    eduSchool: "Universidad Nacional de Villa Mercedes (UNViMe)",
    eduDegree: "Programadora Universitaria de Sistemas",
    eduMeta: "Promedio 8.43/10 · Egresada Marzo 2026 · PPS calificada 9/10",
    otherTitle: "Otros proyectos",
    otherProjects: [
      { t: "Página de Olimpiadas", s: "PHP · MySQL · CRUD en tiempo real" },
      { t: "Registro de Reparaciones", s: "C · CMake · sistema de inventario técnico" },
      { t: "Club de Programadores", s: "HTML · CSS · JS · Bootstrap" },
    ],
    contactTitle: "Contacto",
    contactCTA: "Disponible para roles remotos full-time o part-time",
    cta: ["Descargar CV", "Email", "LinkedIn", "GitHub"],
    contact: {
      email: "sombraflorencia097@gmail.com",
      phone: "+54 2657 517408",
      linkedin: "linkedin.com/in/flor125",
      github: "github.com/Flor125",
    },
  },
  en: {
    name: "Florencia Alicia Sombra",
    role: "Junior COBOL Developer",
    subRole: "IBM Mainframe · Batch & Online · Python/Flask",
    location: "San Luis, Argentina · Remote",
    heroLine1: "Only deployment in the cohort",
    heroLine2: "on real IBM LinuxONE infrastructure",
    heroLine3: "exposed to live internet traffic.",
    nav: ["About", "Stack", "Project", "Certifications", "Education", "Contact"],
    aboutTitle: "About",
    aboutBody: "Junior COBOL developer with hands-on experience deploying batch applications on real IBM LinuxONE enterprise infrastructure (s390x). Designed, coded and documented a production-grade hybrid system integrating COBOL batch, Db2, JCL and Python Flask — scored 9/10. IBM Z Xplore All Star.",
    stackTitle: "Technical stack",
    stackGroups: [
      { title: "Mainframe Core", items: ["COBOL", "JCL", "IBM Db2", "VSAM", "z/OS", "TSO/ISPF"] },
      { title: "Mainframe Extended", items: ["CICS", "RACF", "IBM MQ", "IMS", "zOSMF", "Assembler", "PL/I"] },
      { title: "Tooling", items: ["Zowe CLI/Desktop", "Ansible", "Docker s390x", "IBM Z OAU"] },
      { title: "Backend & Integration", items: ["Python", "Flask", "ibm_db", "REST APIs", "Bash", "Git"] },
    ],
    projectTitle: "Inventory Management System",
    projectSub: "Mainframe Architecture · COBOL + Db2 + JCL + Flask",
    projectMetrics: [
      { v: "9/10", l: "PPS score" },
      { v: "500+", l: "lines of batch COBOL" },
      { v: "8", l: "normalized Db2 tables" },
      { v: "56", l: "pages of documentation" },
      { v: "1/cohort", l: "deployed on real LinuxONE" },
    ],
    projectBullets: [
      "Nightly batch processing: stock control, FEFO alerts, mass price updates.",
      "Normalized Db2 schema with ACID transactions and referential integrity.",
      "Python Flask REST API with RBAC, pbkdf2:sha256 hashing, CSRF & full audit.",
      "Audit logs documented and blocked real attacks: bots, SQLi, brute force, session hijacking.",
    ],
    certsTitle: "Certifications",
    certs: [
      { t: "IBM Mainframe Developer Professional", o: "IBM / Coursera", y: "2024–2025" },
      { t: "IBM z/OS Mainframe Practitioner", o: "IBM / Coursera", y: "2024–2025" },
      { t: "IBM Z Xplore All Star", o: "Concepts + Advanced + Code-a-Thon", y: "Oct 2024" },
      { t: "Fundamentals for Zowe", o: "Interskill Learning", y: "2025" },
      { t: "EF SET English B2", o: "Upper Intermediate", y: "2024" },
    ],
    eduTitle: "Education",
    eduSchool: "Universidad Nacional de Villa Mercedes (UNViMe)",
    eduDegree: "University Systems Programmer",
    eduMeta: "GPA 8.43/10 · Graduated March 2026 · Supervised practice scored 9/10",
    otherTitle: "Other projects",
    otherProjects: [
      { t: "Olympics Page", s: "PHP · MySQL · realtime CRUD" },
      { t: "Repair Records System", s: "C · CMake · technical inventory" },
      { t: "Programmers Club Site", s: "HTML · CSS · JS · Bootstrap" },
    ],
    contactTitle: "Contact",
    contactCTA: "Available for remote full-time or part-time roles",
    cta: ["Download CV", "Email", "LinkedIn", "GitHub"],
    contact: {
      email: "sombraflorencia097@gmail.com",
      phone: "+54 2657 517408",
      linkedin: "linkedin.com/in/flor125",
      github: "github.com/Flor125",
    },
  },
};

// ─── Sketchy primitives ─────────────────────────────────────────
// Hand-drawn looking lines/boxes via SVG. These render the "wireframe" feel.

function SketchBox({ w = "100%", h = 60, fill = "transparent", stroke = "#1a1a1a", strokeWidth = 1.4, rough = 1.2, children, style = {}, dashed = false }) {
  // We use a CSS clip to keep the rough-ish look without an SVG lib.
  const border = `${strokeWidth}px ${dashed ? "dashed" : "solid"} ${stroke}`;
  return (
    <div style={{
      position: "relative",
      width: w,
      minHeight: h,
      border,
      borderRadius: 2,
      background: fill,
      // subtle hand-drawn jitter via box-shadow offset
      boxShadow: `1.2px 1.2px 0 ${stroke}22, -0.5px 0.5px 0 ${stroke}11`,
      transform: `rotate(${(Math.random() - 0.5) * 0.15}deg)`,
      ...style,
    }}>
      {children}
    </div>
  );
}

function SketchLine({ w = "100%", thickness = 1.2, color = "#1a1a1a", dashed = false, style = {} }) {
  return (
    <div style={{
      width: w,
      height: thickness,
      background: dashed
        ? `repeating-linear-gradient(90deg, ${color} 0 6px, transparent 6px 10px)`
        : color,
      ...style,
    }} />
  );
}

// Wavy underline (sketchy)
function WavyLine({ w = 80, color = "#1a1a1a" }) {
  return (
    <svg width={w} height="6" style={{ display: "block" }} viewBox={`0 0 ${w} 6`} preserveAspectRatio="none">
      <path d={`M0,3 Q${w/8},0 ${w/4},3 T${w/2},3 T${3*w/4},3 T${w},3`} stroke={color} strokeWidth="1.3" fill="none" />
    </svg>
  );
}

// Placeholder image box with diagonal lines
function ImagePlaceholder({ w = "100%", h = 100, label = "image", color = "#1a1a1a", style = {} }) {
  return (
    <div style={{
      width: w,
      height: h,
      border: `1.3px solid ${color}`,
      position: "relative",
      background: `repeating-linear-gradient(135deg, transparent 0 8px, ${color}10 8px 9px)`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Caveat', cursive",
      fontSize: 14,
      color: `${color}aa`,
      ...style,
    }}>
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100%" y2="100%" stroke={color} strokeWidth="0.8" opacity="0.3" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke={color} strokeWidth="0.8" opacity="0.3" />
      </svg>
      <span style={{ position: "relative", zIndex: 1, padding: "2px 6px", background: "#fefdf8" }}>{label}</span>
    </div>
  );
}

// Sketchy button
function SketchButton({ children, primary = false, color = "#1a1a1a", accent = "#1a1a1a", style = {} }) {
  return (
    <div style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "6px 14px",
      border: `1.4px solid ${color}`,
      background: primary ? accent : "transparent",
      color: primary ? "#fefdf8" : color,
      fontFamily: "'Kalam', cursive",
      fontSize: 13,
      fontWeight: 600,
      borderRadius: 3,
      boxShadow: primary ? `2px 2px 0 ${color}` : `1.5px 1.5px 0 ${color}55`,
      transform: `rotate(${(Math.random() - 0.5) * 0.4}deg)`,
      ...style,
    }}>
      {children}
    </div>
  );
}

// Sticky note for designer commentary
function Sticky({ children, color = "#fff3a3", style = {} }) {
  return (
    <div style={{
      background: color,
      padding: "8px 12px",
      fontFamily: "'Caveat', cursive",
      fontSize: 15,
      color: "#3a2a1a",
      lineHeight: 1.2,
      transform: `rotate(${(Math.random() - 0.5) * 1.5}deg)`,
      boxShadow: "1.5px 2px 4px rgba(0,0,0,0.12)",
      maxWidth: 220,
      ...style,
    }}>
      {children}
    </div>
  );
}

// ─── Section header (sketchy) ───────────────────────────────────
function SectionLabel({ n, label, color = "#1a1a1a", accent = "#1a1a1a" }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 8 }}>
      <span style={{
        fontFamily: "'Kalam', cursive",
        fontSize: 11,
        fontWeight: 700,
        color: accent,
        border: `1.2px solid ${accent}`,
        padding: "1px 6px",
        borderRadius: 2,
      }}>{String(n).padStart(2, "0")}</span>
      <span style={{ fontFamily: "'Caveat', cursive", fontSize: 22, fontWeight: 700, color }}>{label}</span>
      <div style={{ flex: 1, marginLeft: 6 }}><WavyLine w={140} color={color} /></div>
    </div>
  );
}

// Export to window for cross-script usage
Object.assign(window, {
  CONTENT,
  SketchBox, SketchLine, WavyLine, ImagePlaceholder, SketchButton, Sticky, SectionLabel,
});
