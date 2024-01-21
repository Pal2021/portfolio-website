document.querySelector(".hamburger").addEventListener("click", function () {
  document.querySelector(".nav-links").style.display =
    document.querySelector(".nav-links").style.display === "none"
      ? "flex"
      : "none";
});
