document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".product-links a");
  const contentContainers = document.querySelectorAll(".content-container");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      contentContainers.forEach((container) => {
        container.style.display = "none";
      });
      document.querySelector(targetId).style.display = "block";
    });
  });
});
