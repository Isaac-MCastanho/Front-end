var burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  var sidebar = document
    .querySelector(".sidebar")
    .classList.toggle("sidebar--showMenu");
  burger.classList.toggle("burger--close");
});

document
  .querySelector("#input-qtde")
  .addEventListener("change", atualizarPreco);
document
  .querySelector("#input-prazo")
  .addEventListener("change", atualizarPreco);
document.querySelector("#input-js").addEventListener("change", atualizarPreco);
document
  .querySelector("#layout-sim")
  .addEventListener("change", atualizarPreco);
document
  .querySelector("#layout-nao")
  .addEventListener("change", atualizarPreco);
document.querySelector("#input-prazo").addEventListener("change", () => {
  const prazo = document.querySelector("#input-prazo").value;
  document.querySelector(
    "label[for=input-prazo]"
  ).innerHTML = `Prazo: ${prazo} ${prazo > 1 ? "semanas" : "semana"}`;
  atualizarPreco;
});

/* functions */

function atualizarPreco() {
  const qtde = document.querySelector("#input-qtde").value;
  const temJs = document.querySelector("#input-js").checked;
  const incluiLayout = document.querySelector("#layout-sim").checked;
  const prazo = document.querySelector("#input-prazo").value;

  let preco = qtde * 100;
  preco += incluiLayout ? 500 : 0;
  preco *= temJs ? 1.1 : 1;

  let taxaUrgencia = 1 - prazo * 0.1;

  if (qtde >= 1 && (temJs || incluiLayout)) {
    preco *= 1 + taxaUrgencia;
  }
  document.querySelector("#preco").innerHTML = `R$ ${Number(preco).toFixed(2)}`;
}
