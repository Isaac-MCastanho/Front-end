function shadowHeader() {
  if (window.scrollY > 50) {
    document.querySelector("#header").classList.add("scroll");
  } else {
    document.querySelector("#header").classList.remove("scroll");
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
        .parentNode.classList.add("active");
    } else {
      document
        .querySelector("nav ul li a[href*=" + sectionId + "]")
        .parentNode.classList.remove("active");
    }
  }
}

window.addEventListener("scroll", function () {
  shadowHeader();
  activateMenu();
});
