var navLinks = document.querySelectorAll(".nav-link");

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("mouseover", function () {
    var current = document.querySelector(".nav-item .active");
    current.classList.remove("active");
    this.parentNode.classList.add("active");
  });
}
