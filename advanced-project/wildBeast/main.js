let scrolled = document.documentElement.scrollTop;
let menuToggle = document.querySelector(".header__toggleMobile");
let header = document.querySelector(".header");

// Events
document.addEventListener("scroll", (e) => {
  minHeader();
  window.scrollY > 200 ? headerShow() : "";
});

menuToggle.addEventListener("click", () => {
  header.classList.toggle("header--show");
});
document.querySelectorAll(".header__nav__list__item").forEach((e) => {
  e.addEventListener("click", () => {
    header.classList.remove("header--show");
  });
});

// Method
function minHeader() {
  window.scrollY > 50
    ? header.classList.add("header--minify")
    : header.classList.remove("header--minify");
}

function headerShow() {
  if (header.classList.contains("header--show")) return;
  if (window.innerWidth > 700) return;

  if (window.scrollY > scrolled) {
    header.classList.add("header--disappear");
    scrolled = window.scrollY;
  } else {
    header.classList.remove("header--disappear");
    scrolled = window.scrollY;
  }
}

//ScrollReveal: Config
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `
.sidenav ul,
.content,
.anuncios`,
  { interval: 100 }
);
