"use strict";
const switcher = document.querySelector(".switcher");
switcher.addEventListener("click", () => {
  const isCurrentlyDark = switcher.classList.contains("fa-moon");
  if (isCurrentlyDark) {
    document.body.style.setProperty("--background", "#fff");
    switcher.classList.replace("fa-moon", "fa-sun");
  } else {
    document.body.style.setProperty("--background", "#000");
    switcher.classList.replace("fa-sun", "fa-moon");
  }
});
