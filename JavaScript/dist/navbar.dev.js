"use strict";

var toggleButton = document.querySelector('.toggle-button');
var navList = document.querySelector('.nav-list');
toggleButton.addEventListener('click', function () {
  navList.classList.toggle('active');
});