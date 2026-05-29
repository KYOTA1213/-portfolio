// ヘッダー
const header = document.getElementById('header');
window.addEventListener('scroll', () => header.classList.toggle('on', scrollY > 40), { passive: true });

// バーガー
const burger = document.getElementById('burger');
const spNav  = document.getElementById('spNav');
const spNavClose = document.getElementById('spNavClose');
burger.addEventListener('click', () => spNav.classList.add('on'));
spNavClose.addEventListener('click', () => spNav.classList.remove('on'));
spNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => spNav.classList.remove('on')));

// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id === '#') return;
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
  });
});

// FAQ
document.querySelectorAll('.faq-item').forEach(item => {
  item.querySelector('.faq-q').addEventListener('click', () => {
    const open = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!open) item.classList.add('open');
  });
});

// スクロールリビール
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); } });
}, { threshold: 0.08 });

document.querySelectorAll('.sec-hd, .prob-grid li, .prob-ans, .sv-card, .flow-item, .faq-item, .about-body, .chips, .cmp-row, .hero-label, .hero-text h1, .hero-desc, .hero-btns, .hero-card').forEach(el => {
  el.classList.add('r');
  io.observe(el);
});

// ヒーローは即時
setTimeout(() => {
  document.querySelectorAll('.hero .r').forEach((el, i) => setTimeout(() => el.classList.add('on'), i * 80));
}, 50);
