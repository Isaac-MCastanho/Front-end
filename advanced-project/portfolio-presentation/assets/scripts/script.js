var burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  var sidebar = document
    .querySelector(".sidebar")
    .classList.toggle("sidebar--showMenu");
  burger.classList.toggle("burger--close");
});
