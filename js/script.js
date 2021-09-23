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
const source = document.getElementsByClassName("my-btn");
Array.from(source).forEach((btn) => {
  btn.addEventListener("click", () => {
    swal("Good job!", "You clicked the button!", "success", {
      button: "Aww yiss!",
    });
  });
});
// });
