function hero() {
  const hero = document.querySelector(".heroImage");
  if (!hero) return;

  const slides = hero.querySelectorAll(".hero-slide");
  const dots = hero.querySelectorAll(".slider-dot");
  let currentIndex = 0;
  let interval;

  // 💡 Instantly show the first slide before JS animations
  slides[0].classList.remove("translate-x-full", "opacity-0");
  slides[0].classList.add("translate-x-0", "opacity-100");

  function goToSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.remove("translate-x-full", "opacity-0");
        slide.classList.add("translate-x-0", "opacity-100");
        slide.style.zIndex = 2;
      } else {
        slide.classList.remove("translate-x-0", "opacity-100");
        slide.classList.add("translate-x-full", "opacity-0");
        slide.style.zIndex = 1;
      }
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("bg-opacity-100", i === index);
      dot.classList.toggle("bg-opacity-50", i !== index);
    });

    currentIndex = index;
  }

  function nextSlide() {
    const next = (currentIndex + 1) % slides.length;
    goToSlide(next);
  }

  function startSlider() {
    interval = setInterval(nextSlide, 5000);
  }

  function stopSlider() {
    clearInterval(interval);
  }

  // Dot click navigation
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const index = parseInt(dot.dataset.index);
      goToSlide(index);
      stopSlider();
      startSlider();
    });
  });

  // Pause on hover
  hero.addEventListener("mouseenter", stopSlider);
  hero.addEventListener("mouseleave", startSlider);

  // Start autoplay
  startSlider();
}

document.addEventListener("DOMContentLoaded", hero);
