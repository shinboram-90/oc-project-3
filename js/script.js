const myFullpage = new fullpage("#fullpage", {
  sectionsColor: [
    "#F2DFD7",
    "#347FC4",
    "#D4C1EC",
    "#9F9FED",
    "#202024",
    "#52D1DC",
    "#FEF9FF",
    "#6C3A5C",
    "#8ED081",
  ],
  autoScrolling: true,
  navigation: true,
  scrollOverflow: true,
  normalScrollElements: ".swal2-popup, .stop-scroll",

  // navigationTooltips: [
  //   "Accueil",
  //   "SEO",
  //   "Accessibilité",
  //   "Performance",
  //   "Conclusion",
  // ],
  slidesNavigation: true,
});

// GET ALL BUTTONS
const source = document.getElementsByClassName("btn");

// ITERATION ON EACH OF THEM ORDER OF APPEARANCE
source[0].addEventListener("click", () => {
  Swal.fire({
    imageUrl: "public/img/screenshots/lighthouse/desktop/lh-before.webp",
    background: "#1f1f23cc",
    confirmButtonColor: "black",
  });
});

source[1].addEventListener("click", () => {
  Swal.fire({
    imageUrl: "public/img/screenshots/lighthouse/desktop/lh-after.webp",
    background: "#1f1f23cc",
    confirmButtonColor: "black",
  });
});

source[2].addEventListener("click", () => {
  Swal.fire({
    imageUrl: "public/img/screenshots/lighthouse/mobile/lh-m-before.webp",
    background: "#1f1f23cc",
    confirmButtonColor: "black",
  });
});

source[3].addEventListener("click", () => {
  Swal.fire({
    imageUrl: "public/img/screenshots/lighthouse/mobile/lh-m-after.webp",
    background: "#1f1f23cc",
    confirmButtonColor: "black",
  });
});

source[4].addEventListener("click", () => {
  Swal.fire({
    imageUrl: "public/img/screenshots/gtmetrix/graph.webp",
    background: "#1f1f23cc",
    confirmButtonColor: "black",
  });
});

source[5].addEventListener("click", () => {
  Swal.fire({
    imageUrl: "public/img/mockups/optimized-1.webp",
    background: "#1f1f23cc",
    confirmButtonColor: "black",
  });
});

source[6].addEventListener("click", () => {
  Swal.fire({
    imageUrl: "public/img/mockups/optimized-2.webp",
    background: "#1f1f23cc",
    confirmButtonColor: "black",
  });
});

const mockup = document.getElementsByClassName("btn-mockup");
mockup[0].addEventListener("click", () => {
  Swal.fire({
    imageUrl: "public/img/mockups/m-before.webp",
    background: "#1f1f23cc",
    confirmButtonColor: "black",
  });
});
mockup[1].addEventListener("click", () => {
  Swal.fire({
    imageUrl: "public/img/mockups/m-after.webp",
    background: "#1f1f23cc",
    confirmButtonColor: "black",
  });
});

const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  let target = button.querySelector(".target");
  function handleMove(e) {
    const x = -50 + (e.pageX - button.offsetLeft - 300 / 2) / 3;
    const y = -10 + (e.pageY - button.offsetTop - 100 / 2) / 3;

    target.style.setProperty("--x", `${x}px`);
    target.style.setProperty("--y", `${y}px`);
  }
  button.addEventListener("mousemove", (e) => {
    handleMove(e);
  });
  // button.addEventListener("touchmove", (e) => {
  //   handleMove(e.changedTouches[0]);
  // });
});

// const essai = document.getElementsByClassName("btn-mockup-1");
// Array.from(essai).forEach((btn) => {
//   btn.addEventListener("click", () => {

//     Swal.fire({
//       imageUrl: "../public/img/tools/mobile-mockup.webp",
//     });
//   });
// });
