"use strict";

const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");

function mobileMenu() {
  burger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

burger.addEventListener("click", mobileMenu);

const navLink = document.querySelector(".nav-link");

function closeMenu() {
  burger.classList.remove("active");
  navMenu.classList.remove("active");
}

navLink.forEach((n) => n.addEventListener("click", closeMenu));
