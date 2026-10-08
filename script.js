document.getElementById('burger').addEventListener('click', function () {
  document.getElementById('navLinks').classList.toggle('open');
});

// Плавное появление карточек при скролле
const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) entry.target.style.opacity = 1;
  });
}, { threshold: 0.15 });

document.querySelectorAll('.card').forEach(function (el, i) {
  el.style.opacity = 0;
  el.style.transition = 'opacity .5s ease ' + (i * 0.12) + 's';
  observer.observe(el);
});
