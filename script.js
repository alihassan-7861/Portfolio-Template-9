/* ============================================================
   DATA — single source of truth for every repeatable section.
   Add/remove an entry here and the DOM updates automatically.
============================================================ */

const NAV_LINKS = [
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
];

const TICKER_IMAGES = [
  'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=420&h=270&fit=crop',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=420&h=270&fit=crop',
  'https://images.unsplash.com/photo-1551434678-e076c223a692?w=420&h=270&fit=crop',
  'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=420&h=270&fit=crop',
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=420&h=270&fit=crop',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=420&h=270&fit=crop',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=420&h=270&fit=crop',
  'https://images.unsplash.com/photo-1547658719-da2b51169166?w=420&h=270&fit=crop',
  'https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=420&h=270&fit=crop',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=420&h=270&fit=crop',
  'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=420&h=270&fit=crop',
  'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=420&h=270&fit=crop',
  'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=420&h=270&fit=crop',
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=420&h=270&fit=crop',
  'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=420&h=270&fit=crop',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=420&h=270&fit=crop',
  'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=420&h=270&fit=crop',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=420&h=270&fit=crop',
];

const SKILLS = [
  { name: 'JavaScript',    icon: 'https://cdn.simpleicons.org/javascript' },
  { name: 'TypeScript',    icon: 'https://cdn.simpleicons.org/typescript' },
  { name: 'Java',          icon: 'https://cdn.simpleicons.org/openjdk' },
  { name: 'C',             icon: 'https://cdn.simpleicons.org/c' },
  { name: 'C++',           icon: 'https://cdn.simpleicons.org/cplusplus' },
  { name: 'Python',        icon: 'https://cdn.simpleicons.org/python' },
  { name: 'SQL',           icon: 'https://cdn.simpleicons.org/postgresql' },
  { name: 'PHP',           icon: 'https://cdn.simpleicons.org/php' },
  { name: 'Framer Motion', icon: 'https://cdn.simpleicons.org/framer' },
  { name: 'Vite',          icon: 'https://cdn.simpleicons.org/vite' },
  { name: 'Git',           icon: 'https://cdn.simpleicons.org/git' },
  { name: 'GitHub',        icon: 'https://cdn.simpleicons.org/github/ffffff' },
  { name: 'Figma',         icon: 'https://cdn.simpleicons.org/figma' },
  { name: 'Firebase',      icon: 'https://cdn.simpleicons.org/firebase' },
  { name: 'MongoDB',       icon: 'https://cdn.simpleicons.org/mongodb' },
  { name: 'Express',       icon: 'https://cdn.simpleicons.org/express/ffffff' },
  { name: 'jQuery',        icon: 'https://cdn.simpleicons.org/jquery' },
  { name: 'GitLab',        icon: 'https://cdn.simpleicons.org/gitlab' },
  { name: 'Docker',        icon: 'https://cdn.simpleicons.org/docker' },
  { name: 'Netlify',       icon: 'https://cdn.simpleicons.org/netlify' },
  { name: 'Vercel',        icon: 'https://cdn.simpleicons.org/vercel/ffffff' },
  { name: 'Next.js',       icon: 'https://cdn.simpleicons.org/nextdotjs/ffffff' },
  { name: 'Bootstrap',     icon: 'https://cdn.simpleicons.org/bootstrap' },
];

const SERVICES = [
  {
    number: '01',
    title: 'Software Development',
    description: 'Building reliable, well-structured software solutions tailored to real-world problems, with a focus on clean code and maintainability.',
  },
  {
    number: '02',
    title: 'Web Development',
    description: 'Designing and developing modern, responsive websites and web applications using current frameworks and best practices.',
  },
  {
    number: '03',
    title: 'Desktop Application Development',
    description: 'Creating efficient cross-platform desktop applications with intuitive interfaces and solid performance.',
  },
];

const PROJECTS = [
  {
    number: '01',
    tag: 'WEB',
    title: 'Modern React Portfolio',
    images: [
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=340&fit=crop',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=340&fit=crop',
      'https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&h=340&fit=crop',
    ],
    liveLink: '#',
  },
  {
    number: '02',
    tag: 'WEB',
    title: 'Personal Portfolio Website',
    images: [
      'https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=500&h=340&fit=crop',
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=500&h=340&fit=crop',
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=340&fit=crop',
    ],
    liveLink: '#',
  },
  {
    number: '03',
    tag: 'WEB',
    title: 'Developer Portfolio Showcase',
    images: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=340&fit=crop',
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&h=340&fit=crop',
      'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=500&h=340&fit=crop',
    ],
    liveLink: '#',
  },
];

const SOCIAL_LINKS = [
  { platform: 'GitHub',   url: '#', icon: 'M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.13-.02-2.04-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.74.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.21 0 .3.21.66.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z' },
  { platform: 'LinkedIn', url: '#', icon: 'M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z' },
  { platform: 'Instagram',url: '#', icon: 'M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.8.31-1.48.72-2.15 1.39A5.95 5.95 0 0 0 .6 4.17c-.3.76-.5 1.64-.56 2.91C0 8.36 0 8.77 0 12s.01 3.64.07 4.92c.06 1.27.26 2.15.56 2.91.31.8.72 1.48 1.39 2.15.67.67 1.35 1.08 2.15 1.39.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.8-.31 1.48-.72 2.15-1.39a5.95 5.95 0 0 0 1.39-2.15c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.92s-.01-3.64-.07-4.92c-.06-1.27-.26-2.15-.56-2.91a5.95 5.95 0 0 0-1.39-2.15A5.95 5.95 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm6.4-10.6a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z' },
];

/* ============================================================
   RENDER FUNCTIONS — each loops its data array exactly once
============================================================ */

function renderNav() {
  const ul = document.getElementById('navLinks');
  ul.innerHTML = NAV_LINKS.map(link => `
    <li class="nav-item"><a class="nav-link" href="${link.href}">${link.label}</a></li>
  `).join('');
}

function renderTicker() {
  const half = Math.ceil(TICKER_IMAGES.length / 2);
  const row1 = TICKER_IMAGES.slice(0, half);
  const row2 = TICKER_IMAGES.slice(half);

  // Triple so there's plenty of image content visible at any scroll position
  const buildRow = (arr) => arr.concat(arr).concat(arr)
    .map(src => `<img src="${src}" alt="" loading="lazy"/>`).join('');

  document.getElementById('tickerRow1').innerHTML = buildRow(row1);
  document.getElementById('tickerRow2').innerHTML = buildRow(row2);
}

function renderSkills() {
  // distribute skills evenly across 3 rows
  const rows = [[], [], []];
  SKILLS.forEach((skill, i) => rows[i % 3].push(skill));

  const buildPill = (s) => `
    <div class="skill-pill"><img src="${s.icon}" alt=""/><span>${s.name}</span></div>
  `;

  rows.forEach((rowSkills, i) => {
    const tripled = rowSkills.concat(rowSkills).concat(rowSkills);
    document.getElementById(`skillsRow${i + 1}`).innerHTML = tripled.map(buildPill).join('');
  });
}

function renderServices() {
  const list = document.getElementById('servicesList');
  list.innerHTML = SERVICES.map((s, i) => `
    <div class="service-card reveal-up" style="--delay:${i * 0.12}s">
      <div class="service-num">${s.number}</div>
      <div>
        <div class="service-title">${s.title}</div>
        <p class="service-desc">${s.description}</p>
      </div>
    </div>
  `).join('');
}

function renderProjects() {
  const list = document.getElementById('projectsList');
  const total = PROJECTS.length;

  list.innerHTML = PROJECTS.map((p, i) => {
    // scale-down amount increases for earlier cards so each new card
    // visually sits on top of the previous one as you scroll past it
    const targetScale = 1 - (total - 1 - i) * 0.03;
    const topOffset = i * 28;

    return `
    <div class="project-sticky-outer">
      <div class="project-block reveal-up"
           style="--delay:${i * 0.12}s; top:${24 + topOffset}px; transform:scale(${targetScale}); z-index:${i + 1}">
        <div class="project-top">
          <div>
            <span class="project-tag">${p.tag}</span>
            <span class="project-num">${p.number}</span>
            <div class="project-title">${p.title}</div>
          </div>
          <a href="${p.liveLink}" class="project-live-btn" target="_blank" rel="noopener">Live Project</a>
        </div>
        <div class="project-grid">
          <div class="project-col-left">
            <img src="${p.images[0]}" alt="${p.title} preview 1" loading="lazy"/>
            <img src="${p.images[1]}" alt="${p.title} preview 2" loading="lazy"/>
          </div>
          <div class="project-col-right">
            <img src="${p.images[2]}" alt="${p.title} preview 3" loading="lazy"/>
          </div>
        </div>
      </div>
    </div>
  `;
  }).join('');
}

function renderSocial() {
  const row = document.getElementById('socialRow');
  row.innerHTML = SOCIAL_LINKS.map(s => `
    <a href="${s.url}" target="_blank" rel="noopener" aria-label="${s.platform}">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="${s.icon}"/></svg>
    </a>
  `).join('');
}

/* ============================================================
   INTERSECTION OBSERVER — scroll-triggered reveals
   Applies to every element carrying a .reveal-* class.
============================================================ */
function initScrollReveal() {
  const targets = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  targets.forEach(el => observer.observe(el));
}

/* ============================================================
   HERO PORTRAIT — 4-step hover position cycle
============================================================ */
function initHeroPortraitCycle() {
  const portrait = document.getElementById('heroPortrait');
  const positions = ['center', 'right', 'top', 'left'];
  let index = 0;

  portrait.classList.add(`pos-${positions[index]}`);

  portrait.addEventListener('mouseenter', () => {
    portrait.classList.remove(`pos-${positions[index]}`);
    index = (index + 1) % positions.length;
    portrait.classList.add(`pos-${positions[index]}`);
    portrait.dataset.pos = positions[index];
  });
}

/* ============================================================
   SCROLL-LINKED HERO MOVEMENT + TICKER ROWS
   - bg heading text shifts left as hero scrolls
   - ticker rows keep their continuous CSS marquee animation,
     and scroll progress adds an EXTRA offset on top (row 1 gets
     pushed further left, row 2 further right) via a margin shift
     on a wrapper so it doesn't fight the animated transform
============================================================ */
function initHeroScrollLink() {
  const bgText     = document.querySelector('.hero-bg-text');
  const heroSection = document.getElementById('hero');
  const tickerPin  = document.getElementById('tickerPin');
  const row1       = document.getElementById('tickerRow1');
  const row2       = document.getElementById('tickerRow2');

  // total distance (px) each row travels across the full pin scroll range
  const MAX_TRAVEL = 700;

  // Start row2 offset at -50% so it begins appearing from the right
  // (both rows start centred; row1 slides left, row2 slides right)
  let ticking = false;

  function update() {
    // hero heading shift
    const heroRect = heroSection.getBoundingClientRect();
    const heroH    = heroSection.offsetHeight;
    const heroP    = Math.max(0, Math.min(1, -heroRect.top / heroH));
    bgText.style.transform = `translateX(${-heroP * 140}px)`;

    // ticker: pure scroll progress through the pinned zone
    const pinRect  = tickerPin.getBoundingClientRect();
    const pinScroll = tickerPin.offsetHeight - window.innerHeight;
    const p = Math.max(0, Math.min(1, -pinRect.top / pinScroll));

    // row1: starts centred, moves LEFT  (negative x)
    // row2: starts centred, moves RIGHT (positive x)
    row1.style.transform = `translateX(calc(-50% + ${-p * MAX_TRAVEL}px))`;
    row2.style.transform = `translateX(calc(-50% + ${ p * MAX_TRAVEL}px))`;

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });

  window.addEventListener('resize', () => requestAnimationFrame(update));
  update();
}

/* ============================================================
   FLOATING MUTE / UNMUTE — background audio toggle
============================================================ */
function initAudioToggle() {
  const audio = document.getElementById('bgAudio');
  const fab = document.getElementById('muteFab');
  const fabIcon = document.getElementById('muteFabIcon');
  const inlineBtn = document.getElementById('muteToggle');

  let playing = false;

  function setIconState(isPlaying) {
    fab.classList.toggle('muted', !isPlaying);
    const lineEls = fabIcon.querySelectorAll('line');
    lineEls.forEach(l => l.style.display = isPlaying ? 'none' : 'block');
  }

  function toggle() {
    if (!playing) {
      audio.play().catch(() => {/* autoplay blocked until user gesture — fine, this IS the gesture */});
      playing = true;
    } else {
      audio.pause();
      playing = false;
    }
    setIconState(playing);
  }

  fab.addEventListener('click', toggle);
  if (inlineBtn) inlineBtn.addEventListener('click', (e) => { e.preventDefault(); toggle(); });

  setIconState(false);
}

/* ============================================================
   INIT — run everything once the DOM is ready
============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderTicker();
  renderSkills();
  renderServices();
  renderProjects();
  renderSocial();

  initScrollReveal();
  initHeroPortraitCycle();
  initHeroScrollLink();
  initAudioToggle();

  // hero load-in stagger (plays once on page load, not on scroll)
  document.querySelectorAll('.hero-content [data-load-stagger]').forEach((el, i) => {
    el.style.setProperty('--delay', `${i * 0.18}s`);
    el.classList.add('load-in');
  });
});
