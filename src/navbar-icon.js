const element = document.getElementsByClassName(".nav-ellipse");
let open = element.getAttribute("aria-expanded");

if (open === true) {
  document.querySelector(".nav-ellipse").className = "semi-nav-ellipse";
}
