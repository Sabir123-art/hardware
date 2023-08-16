"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll(".product-links a");
  var contentContainers = document.querySelectorAll(".content-container");
  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      var targetId = link.getAttribute("href");
      contentContainers.forEach(function (container) {
        container.style.display = "none";
      });
      document.querySelector(targetId).style.display = "block";
    });
  });
});