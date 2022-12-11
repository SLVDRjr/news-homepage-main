const menu = document.querySelector(".menu-button");
const close = document.querySelector(".close-button");
const nav = document.querySelector("nav");
const overlay = document.querySelector(".overlay");

menu.addEventListener("click", () => {
  nav.classList.add("active");
  overlay.classList.add("active");
});

close.addEventListener("click", () => {
  nav.classList.remove("active");
  overlay.classList.remove("active");
});