/* ============================================================
   HOMEGRAM ESTATE — V4 PREMIUM INTERACTIONS
   Counters · Parallax · Progress · Sticky CTA · Form Magic
   ============================================================ */

// Respect reduced motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// 1. Nav scroll state
(function(){
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const onScroll = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// 2. Mobile menu
(function(){
  const burger = document.querySelector('.nav-burger');
  const menu = document.querySelector('.mobile-menu');
  if (!burger || !menu) return;
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    menu.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
  });
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      burger.classList.remove('open');
      menu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
})();

// 3. Scroll reveal with stagger
(function(){
  const els = document.querySelectorAll('.reveal,.reveal-l,.reveal-r');
  if (!els.length) return;
  if (prefersReducedMotion) {
    els.forEach(el => el.classList.add('visible'));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  els.forEach(el => io.observe(el));
})();

// 4. Hero loaded class
(function(){
  const hero = document.querySelector('.hero');
  if (!hero) return;
  requestAnimationFrame(() => hero.classList.add('is-loaded'));
})();

// 5. Animated Number Counters (count from 0 to target)
(function(){
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;
  
  const animateCounter = (el) => {
    const target = parseFloat(el.dataset.count);
    const decimals = (el.dataset.count.split('.')[1] || '').length;
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const duration = prefersReducedMotion ? 0 : 1800;
    
    if (duration === 0) {
      el.textContent = prefix + target.toFixed(decimals) + suffix;
      return;
    }
    
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4); // ease-out quart
      const value = (target * eased).toFixed(decimals);
      el.textContent = prefix + value + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCounter(e.target);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => io.observe(c));
})();

// 6. Parallax effect on hero (subtle transform on scroll)
(function(){
  if (prefersReducedMotion) return;
  const heroMedia = document.querySelector('.hero-media');
  if (!heroMedia) return;
  
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        if (scrolled < window.innerHeight) {
          heroMedia.style.transform = `translateY(${scrolled * 0.3}px) scale(${1 + scrolled * 0.0001})`;
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();

// 7. Progress bar animation (fills to data-target %)
(function(){
  const bars = document.querySelectorAll('.progress-bar');
  if (!bars.length) return;
  
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('animated');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  bars.forEach(bar => io.observe(bar));
})();

// 8. Floating enquiry bar (shows after scrolling past hero)
(function(){
  const bar = document.querySelector('.floating-enquiry');
  if (!bar) return;
  const hero = document.querySelector('.hero');
  const threshold = hero ? hero.offsetHeight : 600;
  
  const onScroll = () => {
    bar.classList.toggle('visible', window.scrollY > threshold);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// 9. Form handling with success animation
(function(){
  const forms = document.querySelectorAll('form[data-lead-form]');
  forms.forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get('name') || 'Prospect';
      const phone = data.get('phone') || '';
      const project = data.get('project') || form.dataset.leadForm;
      const message = data.get('message') || '';
      const subject = encodeURIComponent(`HomeGram Estate · ${project} Enquiry — ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nPhone: ${phone}\nProject: ${project}\n${message ? 'Message: ' + message + '\n' : ''}\n— Sent from HomeGram Estate website`
      );
      window.location.href = `mailto:contact@homegramestate.in?subject=${subject}&body=${body}`;
      
      // WhatsApp fallback
      setTimeout(() => {
        const waMsg = encodeURIComponent(`Hi, I'm ${name}. I'm interested in ${project}. My number: ${phone}.`);
        window.open(`https://wa.me/919654803560?text=${waMsg}`, '_blank');
      }, 1200);
      
      // Button success animation
      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        const original = btn.innerHTML;
        btn.innerHTML = '<i class="hgi-stroke hgi-checkmark-circle-02"></i> Sent — We\'ll Call You';
        btn.style.background = '#27AE60';
        btn.style.color = '#fff';
        setTimeout(() => {
          btn.innerHTML = original;
          btn.style.background = '';
          btn.style.color = '';
        }, 4000);
      }
      form.reset();
    });
  });
})();

// 10. FAQ accordion
(function(){
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    if (!q) return;
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(o => o.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
})();

// 11. Smooth anchor scroll
(function(){
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    const href = a.getAttribute('href');
    if (href.length < 2) return;
    a.addEventListener('click', e => {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();

// 12. Yield calculator (Lansdowne page)
(function(){
  const rate = document.getElementById('calc-rate');
  const nights = document.getElementById('calc-nights');
  const cost = document.getElementById('calc-cost');
  if (!rate || !nights || !cost) return;
  const fmt = (n) => '₹' + Math.round(n).toLocaleString('en-IN');
  const update = () => {
    const r = parseInt(rate.value);
    const n = parseInt(nights.value);
    const c = parseInt(cost.value);
    document.getElementById('calc-rate-val').textContent = fmt(r);
    document.getElementById('calc-nights-val').textContent = n;
    document.getElementById('calc-cost-val').textContent = c + '%';
    const gross = r * n;
    const net = Math.round(gross * (1 - c/100));
    document.getElementById('calc-monthly').textContent = fmt(net);
    document.getElementById('calc-annual').textContent = fmt(net * 12);
  };
  rate.addEventListener('input', update);
  nights.addEventListener('input', update);
  cost.addEventListener('input', update);
  update();
})();

// 13. Plots remaining counter (decreases periodically for urgency)
(function(){
  const el = document.querySelector('[data-plots-remaining]');
  if (!el) return;
  let count = parseInt(el.dataset.plotsRemaining) || 76;
  el.textContent = count;
  
  // Decrease by 1 every 45 seconds for subtle urgency
  setInterval(() => {
    if (count > 60) {
      count--;
      el.textContent = count;
    }
  }, 45000);
})();

// 14. Gold glow on cards when mouse moves (premium hover effect)
(function(){
  if (prefersReducedMotion) return;
  const cards = document.querySelectorAll('.card-glass, .card-premium, .feature-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--glow-x', `${x}px`);
      card.style.setProperty('--glow-y', `${y}px`);
    });
  });
})();
