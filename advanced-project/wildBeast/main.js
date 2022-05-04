let scrolled = document.documentElement.scrollTop;
let menuToggle = document.querySelector(".toggleMobile");
let header = document.querySelector(".header");

// Events
document.addEventListener("scroll", (e) => {
  minHeader();
  window.scrollY > 200 ? headerShow() : "";
});

menuToggle.addEventListener("click", () => {
  header.classList.toggle("show");
});
document.querySelectorAll("header ul li").forEach((e) => {
  e.addEventListener("click", () => {
    header.classList.remove("show");
  });
});

// Method
function minHeader() {
  window.scrollY > 50
    ? header.classList.add("headerShadow")
    : header.classList.remove("headerShadow");
}

function headerShow() {
  if (header.classList.contains("show")) return;
  if (window.innerWidth > 700) return;

  if (window.scrollY > scrolled) {
    header.classList.add("down");
    scrolled = window.scrollY;
  } else {
    header.classList.remove("down");
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
