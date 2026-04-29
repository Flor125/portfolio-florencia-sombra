// Portfolio · main app logic + interactive terminal

(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  let lang = localStorage.getItem("portfolio-lang") || "es";
  let firstRender = true; // primera carga → secuencia boot+typewriter

  // ─── Theme (day/night) ────────────────────────────────────
  // 1) Si el usuario eligió antes → respetar.
  // 2) Si NO → usar la preferencia del sistema operativo (prefers-color-scheme).
  // 3) Si tampoco hay sistema → "dark" (default histórico).
  const STORAGE_THEME = "portfolio-theme";

  function systemPrefersDark() {
    return window.matchMedia &&
           window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function getInitialTheme() {
    const saved = localStorage.getItem(STORAGE_THEME);
    if (saved === "dark" || saved === "light") return saved;
    return systemPrefersDark() ? "dark" : "light";
  }

  let theme = getInitialTheme();

  function applyTheme(t) {
    theme = t;
    document.documentElement.setAttribute("data-theme", t);
    // Actualizar estado visual de los botones
    $$(".theme-toggle button").forEach(b => {
      b.classList.toggle("active", b.dataset.theme === t);
    });
  }

  function setTheme(t, persist = true) {
    if (persist) localStorage.setItem(STORAGE_THEME, t);
    applyTheme(t);
  }

  // Aplicar ANTES de pintar para evitar flash
  applyTheme(theme);

  // Si el usuario nunca eligió manualmente, seguir al sistema en vivo.
  if (window.matchMedia) {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onSysChange = e => {
      // Sólo seguimos al sistema si el usuario no fijó preferencia.
      if (!localStorage.getItem(STORAGE_THEME)) {
        applyTheme(e.matches ? "dark" : "light");
      }
    };
    if (mq.addEventListener) mq.addEventListener("change", onSysChange);
    else if (mq.addListener) mq.addListener(onSysChange);
  }

  // ─── Render ───────────────────────────────────────────────
  function render() {
    const t = window.I18N[lang];
    document.documentElement.lang = lang;

    // Bar
    $("#bar-left-text").textContent = t.barLeft;
    $("#bar-row").textContent = t.barCenter;

    // Boot — el render lo deja vacío; la secuencia (o el dump instantáneo)
    // se hace después según firstRender.
    const bootEl = $("#boot");
    bootEl.innerHTML = "";

    // Hero — los nodos quedan vacíos en la primera carga (los rellena
    // playBootSequence). En cambios de idioma se llenan al instante.
    $("#hero-prompt").innerHTML = firstRender ? "" : `===&gt; READY`;
    $("#hero-name").innerHTML = firstRender ? `<span class="cursor thin"></span>` : `FLORENCIA SOMBRA<span class="cursor thin"></span>`;
    $("#hero-role").innerHTML = firstRender ? "" : `&gt; ${t.role} <span class="sep">·</span> ${t.sub.map((x, i) => `<span class="${i === 0 ? "key" : ""}">${x}</span>`).join('<span class="sep">·</span>')}`;
    $("#hero-q1").textContent = t.h1;
    $("#hero-q2").textContent = t.h2;
    $("#hero-q3").textContent = t.h3;

    // Hero actions
    $("#hero-actions").innerHTML = `
      <a class="btn primary" href="#contact"><span>$ ./connect.sh</span></a>
      <a class="btn" href="#project"><span>$ view --project</span></a>
      <a class="btn" href="https://linkedin.com/in/flor125" target="_blank" rel="noopener"><span>$ linkedin</span></a>
      <a class="btn" href="https://github.com/Flor125" target="_blank" rel="noopener"><span>$ github</span></a>
    `;

    // Section titles
    $("#s1-title").textContent = t.s1;
    $("#s2-title").textContent = t.s2;
    $("#s3-title").textContent = t.s3;
    $("#s4-title").textContent = t.s4;
    $("#s5-title").textContent = t.s5;
    $("#s6-title").textContent = t.s6;
    $("#s7-title").textContent = t.s7;

    // About
    $("#about-body").innerHTML = `
      <p>${t.aboutP1Pre}<span class="hl">${t.aboutP1Hl}</span>${t.aboutP1Suf}</p>
      <p>${t.aboutP2Pre}<span class="hl">${t.aboutP2Hl}</span>${t.aboutP2Suf}</p>
      <p>${t.aboutP3}</p>
    `;
    $("#facts").innerHTML = t.facts.map(f =>
      `<div class="fact"><div class="v">${f.v}</div><div class="l">${f.l}</div></div>`
    ).join("");

    // Stack
    $("#stack").innerHTML = t.stackGroups.map(g => `
      <div class="stack-card">
        <div class="head" data-prefix="${g.p}"><span>${g.t}</span><span style="color:var(--fg-mute)">${g.items.length}</span></div>
        <div class="stack-list">${g.items.map(i => `<span class="tag">${i}</span>`).join("")}</div>
      </div>
    `).join("");

    // Project
    $("#proj-title").textContent = t.projTitle;
    $("#proj-sub").textContent = t.projSub;
    $("#metrics").innerHTML = t.projMetrics.map(m =>
      `<div class="metric"><div class="v">${m.v}</div><div class="l">${m.l}</div></div>`
    ).join("");
    $("#proj-bullets").innerHTML = t.projBullets.map((b, i) =>
      `<li><span class="n">${String(i + 1).padStart(2, "0")}.</span><span>${b}</span></li>`
    ).join("");
    $("#proj-cta").innerHTML = `
      <a class="btn primary" href="https://github.com/Flor125/kiosco-management-system-mainframe" target="_blank" rel="noopener"><span>${t.projCta.case}</span></a>
      <a class="btn" href="https://github.com/Flor125" target="_blank" rel="noopener"><span>${t.projCta.repo}</span></a>
    `;

    // Certs
    $("#certs").innerHTML = t.certs.map(c => `
      <div class="cert">
        <div class="badge">◆</div>
        <div class="body">
          <div class="t">${c.t}</div>
          <div class="o">${c.o}</div>
        </div>
        <div class="y">${c.y}</div>
      </div>
    `).join("");

    // Others
    $("#others").innerHTML = t.others.map(p => {
      const isLink = !!p.url;
      const tag = isLink ? "a" : "div";
      const href = isLink ? ` href="${p.url}" target="_blank" rel="noopener"` : "";
      return `
      <${tag} class="other-card"${href}>
        <div class="pre">${p.pre}</div>
        <div class="t">${p.t}</div>
        <div class="s">${p.s}</div>
      </${tag}>
      `;
    }).join("");

    // Edu
    $("#edu").innerHTML = `
      <div class="school">${t.eduSchool}</div>
      <div class="degree">${t.eduDegree}</div>
      <div class="meta">${t.eduMeta}</div>
    `;

    // Contact
    $("#contact-pre").textContent = t.contactPre;
    $("#contact-h").textContent = t.contactH;
    $("#contact-sub").textContent = t.contactSub;
    $("#contact-end").textContent = t.contactEnd;
    $("#contact-actions").innerHTML = `
      <a class="btn primary" href="mailto:sombraflorencia097@gmail.com"><span>${t.cta.em}</span></a>
      <a class="btn" href="${t.cta.file}" download><span>${t.cta.dl}</span></a>
      <a class="btn" href="https://linkedin.com/in/flor125" target="_blank" rel="noopener"><span>${t.cta.li}</span></a>
      <a class="btn" href="https://github.com/Flor125" target="_blank" rel="noopener"><span>${t.cta.gh}</span></a>
    `;

    // Egg
    $("#egg-btn-label").textContent = t.eggBtn;
    $("#egg-titlebar-text").textContent = t.eggTitle;

    // Lang toggle
    $$(".lang-toggle button").forEach(b => {
      b.classList.toggle("active", b.dataset.lang === lang);
    });

    if (firstRender) {
      // Ocultamos el resto del DOM mientras corre la secuencia
      document.body.classList.add("booting");
      // Re-attach reveal observer al final de la secuencia
      playBootSequence(t).then(() => {
        firstRender = false;
        document.body.classList.remove("booting");
        initReveals();
      });
    } else {
      // Re-attach reveal observer
      initReveals();
    }
  }

  // ─── Boot sequence + typewriter ──────────────────────────
  const sleep = ms => new Promise(r => setTimeout(r, ms));

  async function playBootSequence(t) {
    const bootEl = $("#boot");
    bootEl.innerHTML = "";

    // 1) Imprimir boot lines una por una con un pequeño retardo
    for (let i = 0; i < t.boot.length; i++) {
      const b = t.boot[i];
      const d = document.createElement("div");
      d.className = `boot-line ${b.c === "ok" ? "ok" : ""} live`;
      if (b.c === "ok") {
        d.innerHTML = `<span class="ok">OK</span> ${b.t.replace(/^OK · /, "")}`;
      } else if (b.c === "info") {
        d.innerHTML = `<span class="info">INFO</span> ${b.t.replace(/^INFO · /, "")}`;
      } else {
        d.textContent = b.t;
      }
      bootEl.appendChild(d);
      // Líneas "sys" tardan más (parecen pesos), las "ok" más rápidas
      const baseDelay = b.c === "sys" ? 380 : (b.c === "info" ? 280 : 180);
      // Pequeña variación humana
      const jitter = Math.floor(Math.random() * 80);
      await sleep(baseDelay + jitter);
    }

    // Pausa antes del READY → name
    await sleep(260);

    // 2) Mostrar prompt "===> READY"
    const prompt = $("#hero-prompt");
    prompt.textContent = "===> READY";

    await sleep(220);

    // 3) Typewriter del nombre
    const name = $("#hero-name");
    const target = "FLORENCIA SOMBRA";
    name.innerHTML = `<span class="typed"></span><span class="cursor thin"></span>`;
    const typedEl = name.querySelector(".typed");
    for (let i = 0; i < target.length; i++) {
      typedEl.textContent = target.slice(0, i + 1);
      // Pausa más larga al espacio
      await sleep(target[i] === " " ? 140 : 55 + Math.random() * 45);
    }

    await sleep(280);

    // 4) Mostrar el rol con un pequeño fade
    const role = $("#hero-role");
    role.innerHTML = `&gt; ${t.role} <span class="sep">·</span> ${t.sub.map((x, i) => `<span class="${i === 0 ? "key" : ""}">${x}</span>`).join('<span class="sep">·</span>')}`;
    role.classList.add("fade-in");

    await sleep(220);

    // 5) Revelar el resto (quote, actions, secciones) con la
    //    animación reveal estándar.
    document.body.classList.remove("booting");
  }

  function setLang(l) {
    lang = l;
    localStorage.setItem("portfolio-lang", l);
    render();
  }
  window.setLang = setLang;

  // ─── Reveal observer ─────────────────────────────────────
  let revealObserver;
  function initReveals() {
    if (revealObserver) revealObserver.disconnect();
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in-view");
          revealObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    $$(".reveal, .reveal-stagger, .metric").forEach(el => revealObserver.observe(el));
  }

  // ─── Tabs (code snippets) — smooth crossfade + height ────
  function initTabs() {
    const stage = document.getElementById("code-stage");
    if (!stage) return;
    const panes = $$(".code-pane");

    // Set initial stage height
    function setStageHeight(target) {
      const h = target.scrollHeight;
      stage.style.height = h + "px";
    }
    requestAnimationFrame(() => {
      const cur = panes.find(p => p.classList.contains("active"));
      if (cur) setStageHeight(cur);
    });
    window.addEventListener("resize", () => {
      const cur = panes.find(p => p.classList.contains("active"));
      if (cur) setStageHeight(cur);
    });

    $$(".tab-btn").forEach(b => {
      b.addEventListener("click", () => {
        const tab = b.dataset.tab;
        const next = panes.find(p => p.dataset.tab === tab);
        const cur = panes.find(p => p.classList.contains("active"));
        if (!next || next === cur) return;

        $$(".tab-btn").forEach(x => x.classList.toggle("active", x === b));

        // animate height to next pane height
        setStageHeight(next);

        // out-in crossfade
        if (cur) {
          cur.classList.remove("active");
          cur.classList.add("leaving");
        }
        // tiny defer for transition pickup
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            next.classList.remove("leaving");
            next.classList.add("active");
          });
        });
        // cleanup after transition
        setTimeout(() => {
          panes.forEach(p => {
            if (p !== next) p.classList.remove("leaving");
          });
        }, 500);
      });
    });
  }

  // ─── Easter egg terminal ─────────────────────────────────
  function initEgg() {
    const btn = $("#egg-btn");
    const modal = $("#egg-modal");
    const closeBtn = $("#egg-close");
    const input = $("#egg-input");
    const mirror = $("#egg-input-mirror");
    const out = $("#egg-output");

    function open() {
      modal.classList.add("open");
      setTimeout(() => input.focus(), 200);
    }
    function close() { modal.classList.remove("open"); }

    btn.addEventListener("click", open);
    closeBtn.addEventListener("click", close);
    modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("open")) close();
    });

    function append(txt, cls = "sys") {
      const d = document.createElement("div");
      d.className = `out-line ${cls}`;
      d.textContent = txt;
      out.appendChild(d);
      out.scrollTop = out.scrollHeight;
    }
    function appendHTML(html, cls = "sys") {
      const d = document.createElement("div");
      d.className = `out-line ${cls}`;
      d.innerHTML = html;
      out.appendChild(d);
      out.scrollTop = out.scrollHeight;
    }

    const cmds = {
      help: () => {
        append("Available commands:", "ok");
        append("  help        — show this list");
        append("  whoami      — about Florencia");
        append("  skills      — list technical stack");
        append("  certs       — list certifications");
        append("  project     — featured project summary");
        append("  contact     — contact info");
        append("  date        — show current date");
        append("  cobol       — print sample COBOL");
        append("  matrix      — toggle matrix mode");
        append("  clear       — clear screen");
        append("  exit        — close terminal");
      },
      whoami: () => {
        append("FLORENCIA ALICIA SOMBRA", "hl");
        append("Junior COBOL Developer · IBM Mainframe · Batch & Online · Python/Flask");
        append("San Luis, Argentina · Available for remote roles");
        append("UID: FLOR125 · GROUP: MAINFRAME-DEV · CLASS: A");
      },
      skills: () => {
        append("CORE: COBOL, JCL, Db2, VSAM, z/OS, TSO/ISPF", "ok");
        append("EXT:  CICS, RACF, IBM MQ, IMS, zOSMF, Assembler, PL/I", "ok");
        append("TOOL: Zowe CLI/Desktop, Ansible, Docker s390x, IBM Z OAU", "ok");
        append("BACK: Python, Flask, ibm_db, REST APIs, Bash, Git", "ok");
      },
      certs: () => {
        append("◆ IBM Mainframe Developer Professional · 2024-2025", "ok");
        append("◆ IBM z/OS Mainframe Practitioner Professional · 2024-2025", "ok");
        append("◆ IBM Z Xplore All Star · Concepts + Advanced + Code-a-Thon · Oct 2024", "ok");
        append("◆ Fundamentals for Zowe · Interskill · 2025", "ok");
        append("◆ EF SET English B2 Upper Intermediate · 2024", "ok");
      },
      project: () => {
        append("KIOSCO-MGMT-MAINFRAME", "hl");
        append("Sistema de Gestión de Inventario · COBOL + Db2 + JCL + Flask");
        append("Deployed on real IBM LinuxONE (s390x) — only one in the cohort.");
        append("Score: 9/10 · 500+ COBOL lines · 8 normalized Db2 tables · 56-page docs");
        appendHTML('<a href="https://github.com/Flor125/kiosco-management-system-mainframe" target="_blank" style="color:var(--green)">→ github.com/Flor125/kiosco-management-system-mainframe</a>', "ok");
      },
      contact: () => {
        appendHTML('email     <a href="mailto:sombraflorencia097@gmail.com" style="color:var(--green)">sombraflorencia097@gmail.com</a>');
        append("phone     +54 2657 517408");
        appendHTML('linkedin  <a href="https://linkedin.com/in/flor125" target="_blank" style="color:var(--green)">linkedin.com/in/flor125</a>');
        appendHTML('github    <a href="https://github.com/Flor125" target="_blank" style="color:var(--green)">github.com/Flor125</a>');
      },
      date: () => append(new Date().toString()),
      cobol: () => {
        append("       IDENTIFICATION DIVISION.", "ok");
        append("       PROGRAM-ID. HELLO-RECRUITER.", "ok");
        append("       PROCEDURE DIVISION.", "ok");
        append('           DISPLAY "Hire Florencia. She deploys on real LinuxONE."', "ok");
        append("           STOP RUN.", "ok");
      },
      matrix: () => {
        document.body.classList.toggle("matrix-mode");
        append("matrix mode toggled.", "ok");
      },
      clear: () => { out.innerHTML = ""; },
      exit: () => { close(); },
    };

    function run(raw) {
      const cmd = raw.trim().toLowerCase();
      append(raw, "user");
      if (!cmd) return;
      if (cmds[cmd]) cmds[cmd]();
      else append(`command not found: ${cmd}. Type 'help'.`, "err");
    }

    input.addEventListener("input", () => {
      if (mirror) mirror.textContent = input.value;
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        run(input.value);
        input.value = "";
        if (mirror) mirror.textContent = "";
      }
    });

    // Welcome message
    append("TSO/E SHELL v2.0 · z/OS 2.5", "ok");
    append("Type 'help' to see available commands.");
    append("");
  }

  // ─── Init ───────────────────────────────────────────────
  document.addEventListener("DOMContentLoaded", () => {
    render();
    initTabs();
    initEgg();

    $$(".lang-toggle button").forEach(b => {
      b.addEventListener("click", () => setLang(b.dataset.lang));
    });

    $$(".theme-toggle button").forEach(b => {
      b.addEventListener("click", () => setTheme(b.dataset.theme));
    });
  });
})();
