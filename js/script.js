const myFullpage = new fullpage("#fullpage", {
  sectionsColor: ["#f2f2f2", "#4BBFC3", "#7BAABE", "whitesmoke", "#ccddff"],
  autoScrolling: true,
  navigation: true,
  navigationTooltips: [
    "Accueil",
    "SEO",
    "Accessibilité",
    "Performance",
    "Conclusion",
  ],
  slidesNavigation: true,
});

// (function () {
const source = document.getElementsByClassName("btn");
Array.from(source).forEach((btn) => {
  btn.addEventListener("click", () => {
    swal("Good job!", "You clicked the button!", "success", {
      button: "Aww yiss!",
    });
  });
});
// });

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
  button.addEventListener("touchmove", (e) => {
    handleMove(e.changedTouches[0]);
  });
});
