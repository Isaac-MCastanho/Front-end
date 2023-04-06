const miniRodape = document.querySelector(".miniRodape");

document.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    miniRodape.classList.add("miniRodape--active");
  } else {
    miniRodape.classList.remove("miniRodape--active");
  }
});
