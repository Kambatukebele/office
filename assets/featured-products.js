document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".products-container > div");
  const nextArrow = document.querySelector(".next-arrow");
  const prevArrow = document.querySelector(".prev-arrow");

  const scrollAmount = 300; // adjust scroll distance as needed

  nextArrow.addEventListener("click", () => {
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  prevArrow.addEventListener("click", () => {
    container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });
});
