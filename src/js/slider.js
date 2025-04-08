"use strict";
// HTML elementlarini tanlab olish
const nextBtn = document.querySelector(".next");
const backBtn = document.querySelector(".back");
const images = document.querySelector(".images");
const imageItems = document.querySelectorAll(".images li");

let currentIndex = 0;
const imageWidth = imageItems[0].clientWidth;

function showImage() {
  images.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

// Keyingi rasmga o'tish
nextBtn.addEventListener("click", () => {
  if (currentIndex < imageItems.length - 1) {
    currentIndex++;
    showImage();
  }
});

// Oldingi rasmga qaytish
backBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    showImage();
  }
});
