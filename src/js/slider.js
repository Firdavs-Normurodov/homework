"use strict";
let nextBtn = document.querySelector(".next");
let backBtn = document.querySelector(".back");
let images = document.querySelector(".images");
let imageItems = document.querySelectorAll(".images li");

let currentIndex = 0;
let imageWidth = imageItems[0].clientWidth;

nextBtn.addEventListener("click", () => {
  if (currentIndex < imageItems.length - 1) {
    currentIndex++;
    images.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    images.style.transition = "transform 0.5s ease";
  }
});

backBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    images.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    images.style.transition = "transform 0.5s ease";
  }
});
