const footerMenuCards = document.querySelectorAll(".footer-menu-card");

footerMenuCards.forEach((card, index) => {
  card.addEventListener("click", function (event) {
    event.preventDefault();

    if (
      event.currentTarget.firstElementChild.lastElementChild.firstElementChild.classList.contains(
        "rotate-0"
      ) &&
      event.currentTarget.lastElementChild.classList.contains("max-h-0")
    ) {
      event.currentTarget.firstElementChild.lastElementChild.firstElementChild.classList.replace(
        "rotate-0",
        "rotate-180"
      );
      event.currentTarget.lastElementChild.classList.replace(
        "max-h-0",
        "max-h-96"
      );
    } else {
      event.currentTarget.firstElementChild.lastElementChild.firstElementChild.classList.replace(
        "rotate-180",
        "rotate-0"
      );
      event.currentTarget.lastElementChild.classList.replace(
        "max-h-96",
        "max-h-0"
      );
    }
  });
});
