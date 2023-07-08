"use strict";
// IT CREATES NAVIGATION FOR MOBILE DEVICES
const nav = document.querySelector(".main-nav");
const nav_btn = document.querySelector(".mobile-nav-btn");
nav_btn.addEventListener("click", () => {
  const visible = nav.getAttribute("data-visible");
  if (visible === "false") {
    nav.setAttribute("data-visible", true);
    nav_btn.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    nav_btn.setAttribute("aria-expanded", false);
  }
});
