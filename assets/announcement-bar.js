function initAnnouncementRotation(section) {
  const enableRotation =
    section.getAttribute("data-rotation-enabled") === "true";
  const rotationSpeed =
    parseInt(section.getAttribute("data-rotation-speed"), 10) || 5000;

  if (enableRotation && window.innerWidth < 640) {
    const announcements = section.querySelectorAll(".announcement");
    if (announcements.length > 1) {
      let current = 0;
      setInterval(() => {
        announcements[current].classList.add("hidden");
        current = (current + 1) % announcements.length;
        announcements[current].classList.remove("hidden");
      }, rotationSpeed);
    }
  }
}

function loadAnnouncementRotation() {
  document
    .querySelectorAll("section[data-rotation-enabled]")
    .forEach(initAnnouncementRotation);
}

// Run on first load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", loadAnnouncementRotation);
} else {
  loadAnnouncementRotation();
}

// Run again when Shopify dynamically reloads a section
document.addEventListener("shopify:section:load", function (event) {
  const section = event.target.querySelector("section[data-rotation-enabled]");
  if (section) {
    initAnnouncementRotation(section);
  }
});
