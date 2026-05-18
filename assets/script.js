/* HOMEGRAM ESTATE — Site Behaviour */

// 1. Nav scroll state + light/dark detection
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

// 3. Scroll reveal
(function(){
  const els = document.querySelectorAll('.reveal,.reveal-l,.reveal-r');
  if (!els.length) return;
  if (!('IntersectionObserver' in window)) {
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

// 4. Hero loaded class for image scale-in
(function(){
  const hero = document.querySelector('.hero');
  if (!hero) return;
  requestAnimationFrame(() => hero.classList.add('is-loaded'));
})();

// 5. Number counter for stat cells (animates when in view)
(function(){
  const cells = document.querySelectorAll('[data-count]');
  if (!cells.length) return;
  const animate = (el) => {
    const target = parseFloat(el.dataset.count);
    const decimals = (el.dataset.count.split('.')[1] || '').length;
    const suffix = el.dataset.suffix || '';
    const duration = 1400;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const value = (target * eased).toFixed(decimals);
      el.textContent = value + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { animate(e.target); io.unobserve(e.target); }
    });
  }, { threshold: 0.5 });
  cells.forEach(c => io.observe(c));
})();

// 6. Yield calculator (Lansdowne page)
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

// 7. Form handling — opens mailto + WhatsApp
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
      form.reset();
      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        const original = btn.textContent;
        btn.textContent = '✓ Sent — we\'ll be in touch';
        setTimeout(() => { btn.textContent = original; }, 4000);
      }
    });
  });
})();

// 8. FAQ accordion
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

// 9. Smooth anchor scroll
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
