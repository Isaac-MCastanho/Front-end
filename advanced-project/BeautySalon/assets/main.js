const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");
const links = document.querySelectorAll(".menu .grid a");

/* Abre e fecha o menu burger */

for (let e of toggle) {
  e.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

/* fecha o menu ao clicar nos links */

for (let e of links) {
  e.addEventListener("click", () => {
    nav.classList.remove("show");
  });
}

/* Coloca sombra no header ao rolar o scroll */

//  const header = document.querySelector('#header');
//  const navHeight = header.offsetHeight;

//  window.addEventListener('scroll', function(){
//   if(window.scrollY >= navHeight){
//     header.classList.add('scroll');
//   }else{
//     header.classList.remove('scroll');
//   }
//  })

function shadowHeader() {
  if (window.scrollY > 50) {
    document.querySelector("#header").classList.add("scroll");
  } else {
    document.querySelector("#header").classList.remove("scroll");
  }
}

/* Testimonials carousel slider swiper */

const swiper = new Swiper(".swiper", {
  slidePerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true,
    },
  },
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
#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links,
footer .brand, footer .social`,
  { interval: 100 }
);

/* button back to top */
const topButtun = document.querySelector(".top");

const footerHeight = document.querySelector("footer");
const htmlHeight = document.querySelector("html");

function backToTop() {
  let footerScroll =
    htmlHeight.offsetHeight - window.innerHeight - footerHeight.offsetHeight;

  // Adiciona o botão "backToTop" na pagina.

  if (window.scrollY >= 500) {
    topButtun.classList.add("show-top");
  } else {
    topButtun.classList.remove("show-top");
  }

  // Muda a cor do botão "backToTop", quando o scroll chega no footer

  if (window.scrollY >= footerScroll) {
    topButtun.classList.add("top-footer");
  } else {
    topButtun.classList.remove("top-footer");
  }
}

/* menu ativo */
const sections = document.querySelectorAll("main section[id]");
function activateMenu() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector("nav ul li a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector("nav ul li a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  }
}

/* chama funçoes de scroll */

window.addEventListener("scroll", function () {
  backToTop();
  shadowHeader();
  activateMenu();
});
