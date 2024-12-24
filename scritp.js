window.addEventListener('load', function() {
    const marquee = document.querySelector('.marquee');
    const containerWidth = document.querySelector('.marquee-container').offsetWidth;
    const marqueeWidth = marquee.offsetWidth;

    marquee.innerHTML += marquee.innerHTML;

    marquee.style.animationDuration = `${(marqueeWidth + containerWidth) / 50}s`;
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  

  const mobileMenu = document.querySelector('#mobile-menu');
const mobileLinks = document.querySelector('#mobile-links');

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  mobileLinks.classList.toggle('active');
});

