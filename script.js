

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});


const fadeElems = document.querySelectorAll('.fade-in');
function revealOnScroll() {
  const windowHeight = window.innerHeight;
  fadeElems.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});
