let stars = document.querySelector("#stars");
let moon = document.querySelector("#moon");
let mountains_behind = document.querySelector("#mountains_behind");
let text = document.querySelector("#text");
let btn = document.querySelector("#btn");
let mountains_front = document.querySelector("#mountains_front");
let header = document.querySelector("header");
let menuBurger = document.querySelector(".header__toggleMobile");
let links = document.querySelectorAll(".link");

document.addEventListener("scroll", () => {
  let value = window.scrollY;
  stars.style.left = value * 0.25 + "px";
  moon.style.top = value * 1.05 + 100 + "px";
  mountains_behind.style.top = value * 0 + "px";
  mountains_front.style.top = value * 0.05 + "px";
  text.style.marginRight = value * 4 + "px";
  text.style.marginTop = value * 1.5 + "px";
  btn.style.marginTop = value * 1.5 + "px";

  if (value > 50) {
    if (!header.classList.contains("show")) {
      header.classList.add("scroll");
    }
  } else {
    header.classList.remove("scroll");
  }
});

menuBurger.addEventListener("click", () => {
  header.classList.remove("scroll");
  header.classList.toggle("show");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    link.classList.add("active");

    console.log(window.screen.width);
    if (window.screen.width < 720) {
      header.classList.toggle("scroll");
      header.classList.remove("show");
    }
  });
});
