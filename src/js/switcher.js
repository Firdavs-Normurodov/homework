"use strict";
const switcher = document.querySelector(".switcher");

switcher.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    switcher.classList.replace("fa-sun", "fa-moon");
  } else {
    switcher.classList.replace("fa-moon", "fa-sun");
  }
});
