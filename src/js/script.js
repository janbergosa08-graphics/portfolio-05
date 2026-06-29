// ══════════════════════════════════════════════
// Interactions — Portfolio-05
// ══════════════════════════════════════════════

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
function toggleFaq(el) {
  const item = el.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

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
        if (filter === 'all' || card.dataset.categories.includes(filter)) {
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

// ── Process — Stack Animation + Phase Indicator ──
(function() {
  const cards = document.querySelectorAll('.ps-card');
  const psStack = document.querySelector('.ps-stack');
  if (!cards.length || !psStack) return;

  function updateStack() {
    const rect = psStack.getBoundingClientRect();
    const viewportH = window.innerHeight;
    const scrollable = psStack.scrollHeight - viewportH;
    if (scrollable <= 0) return;
    const progress = Math.max(0, Math.min(1, (-rect.top) / scrollable));
    const idx = Math.min(cards.length - 1, Math.floor(progress * cards.length));

    // Update pagination steps
    const steps = document.querySelectorAll('.ps-step');
    steps.forEach((step, i) => {
      step.classList.toggle('active', i === idx);
      step.classList.toggle('done', i < idx);
    });

    // Toggle animation classes
    cards.forEach((card, i) => {
      card.classList.toggle('active', i === idx);
      card.classList.toggle('passed', i < idx);
    });
  }

  window.addEventListener('scroll', updateStack, { passive: true });
  window.addEventListener('resize', updateStack);
  setTimeout(updateStack, 100);
})();
