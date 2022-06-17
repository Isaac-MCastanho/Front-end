const grids = document.querySelectorAll(".grid");
const headings = document.querySelectorAll(".heading .wrapper .text");
const items = document.querySelectorAll(".item");
document.scrollingElement.scrollTop = 0;
const footer = document.querySelector(".footer");
const toggleMenu = document.querySelector(".toggle-mobile");
const nav = document.querySelector("header nav");

document
  .querySelectorAll(".footer .footer--arrowButton, .explore_come-down__button")
  .forEach((i) => {
    i.addEventListener("click", () => {
      scrollMove(800);
      loginShow();
    });
  });

document
  .querySelectorAll("nav .nav__list__item, nav .login, nav .singup")
  .forEach((i) => {
    i.addEventListener("click", () => {
      if (nav.classList.contains("nav--showMobile")) {
        openMenuMobile();
        console.log(i);
      }
    });
  });

document
  .querySelector(".explore .footer--arrowButton")
  .addEventListener("click", () => {
    scrollMove(0);
    loginShow();
  });

toggleMenu.addEventListener("click", (e) => {
  openMenuMobile();
});

function openMenuMobile() {
  toggleMenu.classList.toggle("toggle-mobile--showToggle");
  nav.classList.toggle("nav--showMobile");
}
function scrollMove(scroll) {
  footer.classList.toggle("footer-disappear");
  document.scrollingElement.scrollTo(0, scroll);
}
function loginShow() {
  document.querySelector(".explore").classList.toggle("explore--show");
}

// Animations
function enterScreen(index) {
  const grid = grids[index];
  const heading = headings[index];
  const gridColumns = grid.querySelectorAll(".column");

  grid.classList.add("active");

  gridColumns.forEach((e) => {
    e.classList.remove("animate-before", "animate-after");
  });

  heading.classList.remove("animate-before", "animate-after");
}

function exitScreen(index, exitDelay) {
  const grid = grids[index];
  const heading = headings[index];
  const gridColumns = grid.querySelectorAll(".column");

  gridColumns.forEach((e) => {
    e.classList.add("animate-after");
  });
  heading.classList.add("animate-after");

  setTimeout(() => {
    grid.classList.remove("active");
  }, exitDelay);
}

function setupAnimationCycle({ timePerScreen, exitDelay }) {
  const cycleTime = timePerScreen + exitDelay;
  let nextIndex = 0;
  function nextCycle() {
    const currentIndex = nextIndex;
    enterScreen(currentIndex);

    setTimeout(() => exitScreen(currentIndex, exitDelay), timePerScreen);

    nextIndex = nextIndex + 1 == grids.length ? 0 : nextIndex + 1;
  }

  nextCycle();

  setInterval(nextCycle, cycleTime);
}

setupAnimationCycle({
  timePerScreen: 6000,
  exitDelay: 200 * 7,
});

// Fetch images

async function getImages() {
  const response = await fetch("https://picsum.photos/400/800");
  // const response = await fetch("https://source.unsplash.com/400x800/");
  return `<img src="${response.url}">`;
}

items.forEach(async (e) => {
  let img = await getImages();
  e.innerHTML = img;
});
