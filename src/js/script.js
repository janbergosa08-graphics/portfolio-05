// ══════════════════════════════════════════════
// Interactions — Portfolio-05
// ══════════════════════════════════════════════

// ── Glass Border Highlight (mouse follower) ──
(function() {
  const els = document.querySelectorAll('.glass');
  els.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty('--mx', x + '%');
      el.style.setProperty('--my', y + '%');
    });
  });
})();

// ── Cursor Spotlight (lerp) ──
(function() {
  const spotlight = document.getElementById('cursor-spotlight');
  if (!spotlight) return;
  let mx = 0, my = 0, cx = 0, cy = 0;
  document.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; });
  function tick() {
    cx += (mx - cx) * 0.06;
    cy += (my - cy) * 0.06;
    spotlight.style.transform = `translate(${cx - 250}px, ${cy - 250}px)`;
    requestAnimationFrame(tick);
  }
  tick();
})();

// ── Reveal Animations ──
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
  revealObserver.observe(el);
});

// ── Nav — Scroll Spy ──
(function() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  if (!navLinks.length || !sections.length) return;

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { rootMargin: '-45% 0px -55% 0px', threshold: 0 });

  sections.forEach(s => navObserver.observe(s));
})();

// ── Nav — Scroll Compact State ──
(function() {
  const navWrapper = document.querySelector('.nav-wrapper');
  if (!navWrapper) return;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        navWrapper.classList.toggle('scrolled', window.scrollY > 80);
        ticking = false;
      });
      ticking = true;
    }
  });
})();

// ── Scroll Up Button ──
(function() {
  const btn = document.getElementById('scrollUpBtn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
  });

  let scrollTimer = null;

  window.addEventListener('scroll', () => {
    btn.classList.remove('visible');
    if (scrollTimer) clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;
      if (atBottom) btn.classList.add('visible');
    }, 300);
  }, { passive: true });
})();

// ── Nav — Smooth Scroll on Click ──
(function() {
  document.querySelectorAll('.nav-link, .nav-cta').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
})();

// ── FAQ Accordion ──
(function() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
})();

// ── Project Data ──
const projectsData = [
  {
    title: 'Dataflower \u2013 BaaS Platform',
    desc: 'Backend-as-a-Service platform designed for developers \u2014 intuitive dashboard, API management, and seamless deployment workflows.',
    categories: ['product-design', 'ui-ux'],
    tags: ['Product Design', 'Dashboard', 'UI/UX'],
    url: 'https://www.behance.net/gallery/232269585/Dataflower-Backend-as-a-Service-Platform',
    featured: true,
    gradient: 'linear-gradient(135deg,rgba(251,146,60,0.15),rgba(125,211,252,0.08))',
    icon: '\u25C6',
    badge: 'BaaS Platform'
  },
  {
    title: 'Powerion \u2013 Energy Platform',
    desc: 'Energy management platform with real-time monitoring, consumption analytics, and intelligent resource optimization tools.',
    categories: ['product-design', 'ui-ux'],
    tags: ['Product Design', 'Dashboard', 'Data Viz'],
    url: 'https://www.behance.net/gallery/232269087/Powerion-Energy-Management-Platform',
    featured: true,
    gradient: 'linear-gradient(135deg,rgba(245,158,11,0.12),rgba(34,211,238,0.06)',
    icon: '\u25C1',
    badge: 'Energy'
  },
  {
    title: '4rom \u2013 Social Hub',
    desc: 'Social networking platform connecting communities through shared interests \u2014 designed for engagement and seamless interaction.',
    categories: ['ui-ux', 'product-design'],
    tags: ['Mobile', 'Social', 'UI/UX'],
    url: 'https://www.behance.net/gallery/232271697/4rom-Social-Hub',
    featured: true,
    gradient: 'linear-gradient(135deg,rgba(251,146,60,0.1),rgba(125,211,252,0.05))',
    icon: '\u25A2'
  },
  {
    title: 'Odysse \u2013 IT Solutions Website',
    desc: 'Professional IT solutions website showcasing services, case studies, and a clean, trust-building interface for B2B clients.',
    categories: ['web', 'ui-ux'],
    tags: ['Web Design', 'B2B', 'UI/UX'],
    url: 'https://www.behance.net/gallery/232273329/Odysse-IT-Solutions-Website',
    featured: false,
    gradient: 'linear-gradient(135deg,rgba(251,146,60,0.12),rgba(34,211,238,0.06))',
    icon: '\u25C6'
  },
  {
    title: 'Grafon \u2013 Supply Chain App',
    desc: 'Supply chain simulator web app for training and optimization \u2014 interactive dashboards and real-time scenario modeling.',
    categories: ['web', 'ui-ux', 'product-design'],
    tags: ['Web App', 'Simulation', 'Product Design'],
    url: 'https://www.behance.net/gallery/239508565/Grafon-Supply-Chain-Simulator-Web-App',
    featured: true,
    gradient: 'linear-gradient(135deg,rgba(249,115,22,0.13),rgba(125,211,252,0.07))',
    icon: '\u25A2',
    badge: 'Supply Chain'
  },
  {
    title: 'Seafood Innovation \u2013 Landing Page',
    desc: 'Landing page redesign for a seafood innovation company \u2014 modern, brand-driven layout with clear product storytelling.',
    categories: ['web', 'ui-ux'],
    tags: ['Landing Page', 'Web Design', 'UI/UX'],
    url: 'https://www.behance.net/gallery/240877067/Seafood-Innovation-Landing-Page-Redesign',
    featured: false,
    gradient: 'linear-gradient(135deg,rgba(245,158,11,0.12),rgba(34,211,238,0.06))',
    icon: '\u25C1'
  },
  {
    title: 'wpward \u2013 Website Design',
    desc: 'Modern website design with clean typography, structured layouts, and a refined visual identity tailored for digital presence.',
    categories: ['web', 'ui-ux'],
    tags: ['Web Design', 'UI/UX'],
    url: 'https://www.behance.net/gallery/232272229/wpward-Website-Design',
    featured: false,
    gradient: 'linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))',
    icon: '\u25C6'
  },
  {
    title: '3D Print Pricing \u2013 Plug-in',
    desc: 'Pricing plug-in for 3D printing services \u2014 intuitive interface with cost calculation, material selection, and instant quotes.',
    categories: ['ui-ux', 'product-design'],
    tags: ['UI/UX', 'Product Design'],
    url: 'https://www.behance.net/gallery/232272705/3D-Print-Pricing-Plug-in',
    featured: true,
    gradient: 'linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.01))',
    icon: '\u25A2',
    badge: 'Plug-in'
  },
  {
    title: 'ADHD \u2013 Test Assessment',
    desc: 'Assessment tool designed for clarity and accessibility \u2014 streamlined test flow with clear progress tracking and result visualization.',
    categories: ['ui-ux'],
    tags: ['UI/UX', 'Health'],
    url: 'https://www.behance.net/gallery/232272891/ADHD-Test-Assestment',
    featured: true,
    gradient: 'linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))',
    icon: '\u25C1',
    badge: 'Health'
  },
  {
    title: 'Florist \u2013 Feminine Vector Illustration',
    desc: 'Elegant vector illustration with soft floral motifs and feminine aesthetics \u2014 crafted for brand identity and visual storytelling.',
    categories: ['illustration', 'graphic-design', 'branding'],
    tags: ['Illustration', 'Vector Art', 'Branding'],
    url: 'https://www.behance.net/gallery/240878813/Florist-Feminine-Vector-Illustration',
    featured: false,
    gradient: 'linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.01))',
    icon: '\u25C6'
  },
  {
    title: '3D Printing Service \u2013 Isometric Vector',
    desc: 'Isometric vector illustration showcasing a 3D printing service workflow \u2014 detailed, technical, and visually engaging.',
    categories: ['illustration', 'graphic-design'],
    tags: ['Illustration', 'Isometric'],
    url: 'https://www.behance.net/gallery/240874197/3D-Printing-Service-Isometric-Vector-Illustration',
    featured: false,
    gradient: 'linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))',
    icon: '\u25C1'
  },
  {
    title: 'Calmity \u2013 Minimal Vector Illustration',
    desc: 'Minimal vector illustration with a calm, understated aesthetic \u2014 clean lines, muted tones, and thoughtful composition.',
    categories: ['illustration', 'graphic-design'],
    tags: ['Illustration', 'Minimal'],
    url: 'https://www.behance.net/gallery/240873963/Calmity-Minimal-Vector-Illustration',
    featured: false,
    gradient: 'linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))',
    icon: '\u25A2'
  }
];

// ── Project Filter & Render ──
(function() {
  const grid = document.getElementById('projectsGrid');
  const footer = document.getElementById('projectsFooter');
  const viewAllBtn = document.getElementById('viewAllBtn');
  const pills = document.querySelectorAll('.pill');
  if (!grid) return;

  let currentFilter = 'all';
  let showingAll = false;

  function getViews(title) { return parseInt(localStorage.getItem('pv_views_' + title)) || Math.floor(Math.random() * 400) + 120; }
  function setViews(title, val) { localStorage.setItem('pv_views_' + title, val); }
  function getLiked(title) { return localStorage.getItem('pv_liked_' + title) === 'true'; }
  function setLiked(title, val) { localStorage.setItem('pv_liked_' + title, val); }
  function getLikes(title) { return parseInt(localStorage.getItem('pv_likes_' + title)) || Math.floor(Math.random() * 20) + 5; }
  function setLikes(title, val) { localStorage.setItem('pv_likes_' + title, val); }

  function renderCards() {
    const max = showingAll ? Infinity : 6;
    const filtered = projectsData.filter(p => {
      if (currentFilter === 'all') return true;
      return p.categories.includes(currentFilter);
    });
    const visible = filtered.slice(0, max);
    const hasMore = filtered.length > max;

    grid.innerHTML = '';
    visible.forEach(p => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.dataset.categories = p.categories.join(',');
      card.dataset.featured = String(p.featured);

      const views = getViews(p.title);
      const liked = getLiked(p.title);
      let likes = getLikes(p.title);

      const heartSvg = '<svg viewBox="0 0 24 24" width="16" height="16"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>';
      const eyeSvg = '<svg viewBox="0 0 24 24" width="16" height="16"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';

      card.innerHTML = `
        <a href="${p.url}" target="_blank" class="project-thumb" style="display:block;text-decoration:none">
          <div class="project-thumb-inner" style="background:${p.gradient}">
            ${p.icon ? '<span class="project-thumb-icon">' + p.icon + '</span>' : ''}
            ${p.badge ? '<span class="project-badge">' + p.badge + '</span>' : ''}
          </div>
          <div class="project-overlay">
            <span class="project-overlay-cta">View on Behance &nearr;</span>
          </div>
        </a>
        <div class="project-info">
          <div class="project-info-left">
            <div class="project-info-title">${p.title}</div>
            <div class="project-info-category">${p.tags[0] || ''}</div>
          </div>
          <div class="project-info-right">
            <span class="project-stat project-stat-heart${liked ? ' liked' : ''}" data-title="${p.title}">
              ${heartSvg}
              <span class="project-stat-count">${likes}</span>
            </span>
            <span class="project-stat">
              ${eyeSvg}
              <span>${views}</span>
            </span>
          </div>
        </div>
      `;

      grid.appendChild(card);
      requestAnimationFrame(() => {
        revealObserver.observe(card);
        setTimeout(() => card.classList.add('visible'), 50);
      });
    });

    // Heart click handler
    grid.querySelectorAll('.project-stat-heart').forEach(el => {
      el.addEventListener('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
        const title = this.dataset.title;
        const countEl = this.querySelector('.project-stat-count');
        const wasLiked = getLiked(title);
        const newLiked = !wasLiked;
        setLiked(title, newLiked);
        let likes = getLikes(title);
        likes = newLiked ? likes + 1 : likes - 1;
        setLikes(title, likes);
        this.classList.toggle('liked', newLiked);
        this.classList.remove('pop');
        void this.offsetWidth;
        this.classList.add('pop');
        countEl.textContent = likes;
      });
    });

    // Thumbnail click opens Behance (the wrapping <a> does this)
    // Prevent heart click from navigating
    grid.querySelectorAll('.project-stat').forEach(el => {
      el.addEventListener('click', function(e) {
        e.stopPropagation();
      });
    });

    if (footer) {
      footer.style.display = hasMore || showingAll ? '' : 'none';
    }
  }

  function setShowAll(state) {
    showingAll = state;
    if (viewAllBtn) {
      const span = viewAllBtn.querySelector('span');
      if (span) span.textContent = showingAll ? 'Show Less' : 'View All Projects';
      viewAllBtn.classList.toggle('show-less', showingAll);
    }
    renderCards();
  }

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentFilter = pill.dataset.filter;
      showingAll = false;
      if (viewAllBtn) {
        const span = viewAllBtn.querySelector('span');
        if (span) span.textContent = 'View All Projects';
        viewAllBtn.classList.remove('show-less');
      }
      renderCards();
    });
  });

  if (viewAllBtn) {
    viewAllBtn.addEventListener('click', () => {
      setShowAll(!showingAll);
    });
  }

  window.addEventListener('resize', () => {
    renderCards();
  });

  renderCards();
})();

// ── Parallax (Hero Orbs) ──
(function() {
  const orbs = document.querySelectorAll('[data-parallax]');
  if (!orbs.length) return;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const sy = window.scrollY;
        orbs.forEach(orb => {
          const speed = parseFloat(orb.dataset.parallax) || 0.05;
          orb.style.transform = `translateY(${sy * speed}px)`;
        });
        ticking = false;
      });
      ticking = true;
    }
  });
})();

// ── Workflow — Scroll Spy ──
(function() {
  const pills = document.querySelectorAll('.wf-pill');
  const frames = document.querySelectorAll('.wf-frame');
  if (!pills.length || !frames.length) return;

  const wfObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const idx = parseInt(entry.target.dataset.step);
      if (entry.isIntersecting) {
        pills.forEach(p => p.classList.remove('active'));
        pills[idx].classList.add('active');
        frames.forEach(f => f.classList.remove('visible'));
        entry.target.classList.add('visible');
      }
    });
  }, { rootMargin: '-40% 0px -40% 0px', threshold: 0 });

  frames.forEach(f => wfObserver.observe(f));

  // Click pill -> smooth scroll to frame
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      const step = pill.dataset.step;
      const frame = frames[parseInt(step)];
      if (frame) frame.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });
})();

// ── Process — Sticky Stack (animated deck, readable active card) ──
(function() {
  const scrollZone = document.getElementById('psScrollZone');
  const psStack = document.querySelector('.ps-stack');
  const cards = document.querySelectorAll('.ps-card');
  const steps = document.querySelectorAll('.ps-step');
  if (!scrollZone || !psStack || !cards.length) return;

  const STACK_OFFSET = 18;
  const SCALE_STEP = 0.045;
  const SCROLL_PER_CARD = 0.72;

  let ticking = false;
  let stackEnabled = true;

  function setStackHeight() {
    stackEnabled = window.innerWidth > 1100;
    if (stackEnabled) {
      const totalVh = (cards.length - 1) * SCROLL_PER_CARD + 1;
      scrollZone.style.height = `${totalVh * 100}vh`;
      requestAnimationFrame(() => {
        const prevMinHeight = psStack.style.minHeight;
        psStack.style.minHeight = '';
        const indicator = scrollZone.querySelector('.ps-indicator');
        const indicatorH = indicator ? indicator.offsetHeight : 0;
        psStack.style.minHeight = `${scrollZone.offsetHeight - indicatorH}px`;
        updateStack();
      });
    } else {
      scrollZone.style.height = 'auto';
      psStack.style.minHeight = '';
      cards.forEach(card => {
        card.classList.remove('active', 'passed', 'hidden');
        card.style.removeProperty('--ps-scale');
        card.style.removeProperty('--ps-y');
        card.style.removeProperty('z-index');
      });
    }
  }

  function scrollToStep(idx) {
    if (!stackEnabled) {
      cards[idx]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    const zoneTop = scrollZone.offsetTop;
    const zoneHeight = scrollZone.offsetHeight;
    const scrollable = zoneHeight - window.innerHeight;
    const target = zoneTop + (idx / (cards.length - 1)) * scrollable;
    window.scrollTo({ top: target, behavior: 'smooth' });
  }

  function updateStack() {
    if (!stackEnabled) return;

    const zoneRect = scrollZone.getBoundingClientRect();
    const scrollable = scrollZone.offsetHeight - window.innerHeight;
    if (scrollable <= 0) return;

    const progress = Math.max(0, Math.min(1, -zoneRect.top / scrollable));
    const floatIdx = progress * (cards.length - 1);
    const contentIdx = Math.min(cards.length - 1, Math.round(floatIdx));
    const cardProgress = floatIdx - Math.floor(floatIdx);
    const showUntil = Math.min(cards.length - 1, contentIdx + 1);
    const hideFrom = Math.max(0, contentIdx - 1);

    steps.forEach((step, i) => {
      const isActive = i === contentIdx && i < cards.length - 1;
      const isDone = i < contentIdx || (i === cards.length - 1 && i === contentIdx);
      step.classList.toggle('active', isActive);
      step.classList.toggle('done', isDone);
      step.setAttribute('aria-selected', isActive ? 'true' : 'false');
      if (i === contentIdx && i < cards.length - 1) {
        step.style.setProperty('--ps-line-fill', cardProgress);
      } else if (i <= contentIdx) {
        step.style.setProperty('--ps-line-fill', 1);
      } else {
        step.style.setProperty('--ps-line-fill', 0);
      }
    });

    cards.forEach((card, i) => {
      if (i > showUntil || i < hideFrom) {
        card.classList.add('hidden');
        card.classList.remove('active', 'passed');
        card.style.removeProperty('--ps-scale');
        card.style.removeProperty('--ps-y');
        card.style.removeProperty('z-index');
        return;
      }

      card.classList.remove('hidden');
      const depth = Math.max(0, floatIdx - i);
      card.style.setProperty('--ps-scale', String(Math.max(0.82, 1 - depth * SCALE_STEP)));
      card.style.setProperty('--ps-y', `${-depth * STACK_OFFSET}px`);
      card.style.zIndex = String(i + 1);
      card.classList.toggle('active', i === contentIdx);
      card.classList.toggle('passed', i < contentIdx);
    });
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateStack();
        ticking = false;
      });
      ticking = true;
    }
  }

  steps.forEach(step => {
    step.addEventListener('click', () => {
      scrollToStep(parseInt(step.dataset.idx, 10));
    });
  });

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => {
    setStackHeight();
  });

  setStackHeight();

  // Hide process indicator when approach section appears
  const approach = document.getElementById('approach');
  const psIndicator = document.querySelector('.ps-indicator');
  if (approach && psIndicator) {
    const io = new IntersectionObserver(([entry]) => {
      psIndicator.classList.toggle('ps-indicator--hidden', entry.isIntersecting);
    }, { threshold: 0 });
    io.observe(approach);
  }
})();

// ── Contact Modal ──
(function() {
  const openBtn = document.getElementById('openModalBtn');
  const overlay = document.getElementById('modalOverlay');
  const closeBtn = document.getElementById('modalClose');
  const form = document.getElementById('contactForm');
  if (!openBtn || !overlay) return;

  openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  function closeModal() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('formName').value.trim();
      const email = document.getElementById('formEmail').value.trim();
      if (!name || !email) return;
      const project = document.getElementById('formProject').value;
      const message = document.getElementById('formMessage').value.trim();
      const subject = encodeURIComponent(`New inquiry from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}%0D%0AEmail: ${email}%0D%0AProject: ${project || 'Not specified'}%0D%0A%0D%0AMessage:%0D%0A${message || 'No message'}`
      );
      window.location.href = `mailto:janbergosa.graphics@gmail.com?subject=${subject}&body=${body}`;
      closeModal();
    });
  }
})();

// ── Hamburger Menu ──
(function() {
  const burger = document.getElementById('burgerBtn');
  const menu = document.getElementById('mobileMenu');
  if (!burger || !menu) return;

  function toggleMenu(open) {
    burger.classList.toggle('open', open);
    menu.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  const closeBtn = document.getElementById('mobileClose');

  function openMenu() { toggleMenu(true); }
  function closeMenu() { toggleMenu(false); }

  burger.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  menu.querySelectorAll('.mobile-link, .mobile-cta').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
})();

// ── Availability Dot ──
(function() {
  const dots = document.querySelectorAll('.availability-dot');
  if (!dots.length) return;

  function updateDots() {
    const now = new Date();
    const phtDate = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Manila' }));
    const day = phtDate.getDay();
    const hour = phtDate.getHours();
    const isAvailable = day >= 1 && day <= 5 && hour >= 9 && hour < 18;
    dots.forEach(dot => {
      dot.classList.toggle('active', isAvailable);
      dot.classList.toggle('inactive', !isAvailable);
    });
  }
  updateDots();
  setInterval(updateDots, 60000);
})();
