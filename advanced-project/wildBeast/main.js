let scrolled = document.documentElement.scrollTop;
let menuToggle = document.querySelector(".toggleMobile");

document.addEventListener("scroll", (e) => {
  // Aplica o efeito de shadow e diminui o menu ao dar scroll
  if (window.scrollY > 50) {
    document.querySelector(".header").classList.add("headerShadow");
  } else {
    document.querySelector(".header").classList.remove("headerShadow");
  }
  // Esconde header qunado rola o scroll para baixo, e aparce quando rola para cima
  if (document.documentElement.scrollTop > 200) {
    if (!document.querySelector("header").classList.contains("show")) {
      if (document.documentElement.scrollTop > scrolled) {
        document.querySelector(".header").classList.add("down");
        scrolled = document.documentElement.scrollTop;
      } else {
        document.querySelector(".header").classList.remove("down");
        scrolled = document.documentElement.scrollTop;
      }
    }
  }
});

// Abri e fecha o menu ao clicar no Botão de toggle.
menuToggle.addEventListener("click", () => {
  document.querySelector(".header").classList.toggle("show");
});

// Fecha o menu ao clicar nos links do mobile.
document.querySelectorAll("header ul li").forEach((e) => {
  e.addEventListener("click", () => {
    document.querySelector(".header").classList.remove("show");
  });
});

/* ScrollReveal: Mostrar elementos da pagina */
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
