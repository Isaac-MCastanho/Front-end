const miniRodape = document.querySelector(".miniRodape");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const assunto = document.querySelector("#assunto");

document.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    miniRodape.classList.add("miniRodape--active");
  } else {
    miniRodape.classList.remove("miniRodape--active");
  }
});

function validaNome() {
  if (nome.value.length < 3) {
    alert("nome invalido");
  }
}

function validaEmail() {
  if (email.value.indexOf("@") == -1) {
    alert("nome invalido");
  }
}
