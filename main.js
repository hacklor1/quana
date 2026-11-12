document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".content-left .anh");
  const SLIDE_INTERVAL = 5000;
  if (!slides.length) return;

  let slideIndex = 1;
  let slideTimer = null;

  function showSlides(n) {
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    slides.forEach(function (slide) {
      slide.style.display = "none";
    });
    slides[slideIndex - 1].style.display = "block";

    clearTimeout(slideTimer);
    slideTimer = setTimeout(function () {
      slideIndex++;
      showSlides(slideIndex);
    }, SLIDE_INTERVAL);
  }

  showSlides(slideIndex);
});