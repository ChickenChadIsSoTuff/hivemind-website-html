const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    menuToggle.textContent = isOpen ? '×' : '☰';
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
      menuToggle.textContent = '☰';
    });
  });
}

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

// IMPORTANT: Replace this with an email address monitored by the team before publishing.
const TEAM_EMAIL = 'nirankrishnanc14@gmail.com';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get('name') || '').trim();
  const email = String(data.get('email') || '').trim();
  const interest = String(data.get('interest') || 'Partnership');
  const message = String(data.get('message') || '').trim();

  if (!name || !email || !message) {
    status.textContent = 'Please complete all required fields.';
    return;
  }

  if (TEAM_EMAIL.includes('REPLACE_WITH')) {
    status.textContent = 'The form is ready, but the team email has not been configured yet. Update TEAM_EMAIL in script.js before publishing.';
    return;
  }

  const subject = encodeURIComponent(`Hivemind 23892 — ${interest}`);
  const body = encodeURIComponent(`Hello Hivemind Team,\n\n${message}\n\nName: ${name}\nEmail: ${email}\nInterest: ${interest}`);
  window.location.href = `mailto:${TEAM_EMAIL}?subject=${subject}&body=${body}`;
  status.textContent = 'Your email app should open with a draft ready to send.';
});
