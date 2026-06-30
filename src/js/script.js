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

// ── Project Filter ──
(function() {
  const pills = document.querySelectorAll('.pill');
  const cards = document.querySelectorAll('.project-card');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const filter = pill.dataset.filter;
      cards.forEach(card => {
        let show = false;
        if (filter === 'featured') {
          show = card.dataset.featured === 'true';
        } else if (filter === 'all' || card.dataset.categories.includes(filter)) {
          show = true;
        }
        if (show) {
          card.classList.remove('hidden');
          card.classList.remove('visible');
          requestAnimationFrame(() => {
            revealObserver.observe(card);
            setTimeout(() => card.classList.add('visible'), 50);
          });
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
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
      psStack.style.minHeight = '';
      requestAnimationFrame(() => {
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
    updateStack();
  });

  setStackHeight();
  updateStack();

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
