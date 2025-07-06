const navbar = document.querySelector(".sec__header");
window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    navbar.classList.add("show");
  } else {
    navbar.classList.remove("show");
  }
});
