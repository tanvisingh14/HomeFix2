// HomeFix micro-interactions
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  if (header) header.classList.toggle('scrolled', window.scrollY > 20);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelectorAll('.tilt-card').forEach(card => {
  card.addEventListener('pointermove', (e) => {
    if (window.innerWidth < 900) return;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(900px) rotateX(${-y * 4}deg) rotateY(${x * 5}deg) translateY(-7px)`;
  });
  card.addEventListener('pointerleave', () => {
    card.style.transform = '';
  });
});

const helpButton = document.getElementById('helpButton');
const helpPopover = document.getElementById('helpPopover');
if (helpButton && helpPopover) {
  helpButton.addEventListener('click', () => helpPopover.classList.toggle('open'));
}

const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
if (form && status) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.textContent = 'Thanks! We have received your message and will reply soon.';
    form.reset();
  });
}

// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const nav = document.querySelector('.desktop-nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open);
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded', false); }));
}
// Contact form: save message locally (replace with a backend later)
if (form) {
  form.addEventListener('submit', () => {
    try {
      const msgs = JSON.parse(localStorage.getItem('homefix_messages') || '[]');
      msgs.push({ name: form.name.value, email: form.email.value, message: form.message.value, date: new Date().toISOString() });
      localStorage.setItem('homefix_messages', JSON.stringify(msgs));
    } catch (_) {}
  }, true);
}
