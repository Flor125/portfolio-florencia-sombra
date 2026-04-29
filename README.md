```
╔══════════════════════════════════════════════════════════════════╗
║  TSO/E SESSION · FLOR125.PORTFOLIO                  ROW 001/999  ║
║  ●  z/OS 2.5 · IBM LinuxONE · s390x                              ║
╚══════════════════════════════════════════════════════════════════╝
```

# `===>` PORTFOLIO · FLORENCIA SOMBRA

> **Junior COBOL Developer · IBM Mainframe · Batch & Online · Python / Flask**
> Único despliegue de la cohorte en infraestructura **IBM LinuxONE real**,
> expuesto a tráfico real de internet.

---

## `[ OK ]` ¿Qué es esto?

Bienvenida/o a mi portfolio personal. No es una landing page más:
es una **terminal IBM 3270 interactiva** construida en HTML/CSS/JS puro,
pensada como una carta de presentación honesta de cómo trabajo y qué hago.

Si llegaste hasta acá, probablemente seas:

- `> RECRUITER` — buscando perfiles mainframe / COBOL junior.
- `> HIRING MANAGER` — evaluando si encajo en tu equipo.
- `> DEV` — curioso/a por el código que hay detrás.
- `> AMIG@` — gracias por pasar 💚

---

## `[ INFO ]` Cómo navegarlo

```
F1  HELP      F3  EXIT      F7  UP      F8  DOWN      ENTER  SUBMIT
```

- **`ES / EN`** — Toggle de idioma en la barra superior.
- **`DAY / NIGHT`** — Cambio de tema. Detecta automáticamente la
  preferencia de tu sistema operativo en la primera visita.
- **`TSO/E TERMINAL`** (esquina inferior) — Abrí la consola y escribí
  `help` para ver comandos disponibles. Hay easter eggs.
- **Scroll** — Cada sección revela contenido con animaciones tipo
  monitor de fósforo verde.

---

## `[ OK ]` Secciones

| `//STEP` | Sección                | Contenido                                  |
|----------|------------------------|--------------------------------------------|
| `01`     | Sobre mí               | Quién soy, de dónde vengo                  |
| `02`     | Stack técnico          | COBOL · JCL · Db2 · VSAM · Python · Flask  |
| `03`     | Proyecto destacado     | Kiosco-Mgmt-Mainframe (FEFO + RBAC)        |
| `04`     | Certificaciones        | IBM Z Xplore · cursos formales             |
| `05`     | Otros proyectos        | Side projects y exploraciones              |
| `06`     | Educación              | Formación académica                        |
| `07`     | Contacto               | Email · LinkedIn · GitHub · CV             |

---

## `[ OK ]` Proyecto destacado · `KIOSCO-MGMT-MAINFRAME`

```
//FLOR125  JOB (ACCT),'PORTFOLIO',CLASS=A,MSGCLASS=X
//STEP01   EXEC PGM=COBKIOS,PARM='ENV=PROD'
```

- **COBOL Batch** con lógica **FEFO** (First Expired, First Out) para
  control de vencimientos y alertas de stock.
- **Flask API** con RBAC, CSRF, hashing pbkdf2:sha256 y audit logging.
- **IBM Db2** con esquema normalizado de 8 tablas, integridad referencial.
- **VSAM** + flat files para el flujo batch nocturno.
- Desplegado en **IBM LinuxONE s390x** con tráfico real.

---

## `[ INFO ]` Stack del propio portfolio

- HTML5 semántico
- IBM Plex Mono · JetBrains Mono
- i18n manual (ES/EN)

---

## `[ OK ]` Contacto

```
TSO> CONNECT FLOR125
```

- 📧 **sombraflorencia097@gmail.com**
- 💼 **linkedin.com/in/flor125**
- 🐙 **github.com/Flor125**
- 📄 CV disponible para descarga directa desde el portfolio.

---

```
//SYSOUT   DD  SYSOUT=*
//
**** EOF · CRAFTED WITH COBOL ❤ AND CSS · 2026 ****
