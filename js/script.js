const myFullpage = new fullpage("#fullpage", {
  sectionsColor: ["#f2f2f2", "#4BBFC3", "#7BAABE", "#1f1f23", "#ccddff"],
  autoScrolling: true,
  navigation: true,
  scrollOverflow: true,
  normalScrollElements: ".swal2-popup, .stop-scroll",

  navigationTooltips: [
    "Accueil",
    "SEO",
    "Accessibilité",
    "Performance",
    "Conclusion",
  ],
  slidesNavigation: true,
});

const source = document.getElementsByClassName("btn");
source[0].addEventListener("click", () => {
  Swal.fire("OK????");
});

source[1].addEventListener("click", () => {
  Swal.fire({
    imageUrl: "../public/img/screenshots/gtmetrix/graphs.webp",
    background: "#1f1f23cc",
    confirmButtonColor: "black",
  });
});

const mockup = document.getElementsByClassName("btn-mockup");
mockup[0].addEventListener("click", () => {
  Swal.fire({
    imageUrl: "../public/img/tools/before.webp",
    background: "#1f1f23cc",
    confirmButtonColor: "black",
  });
});
mockup[1].addEventListener("click", () => {
  Swal.fire({
    imageUrl: "../public/img/tools/after.webp",
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
