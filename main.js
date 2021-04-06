const toggle_btn = document.querySelector(".toggle-button");
const navbarlink = document.querySelector(".navbar_links");
const navbarlinkli = document.querySelectorAll(".navbar_links ul li");
const navbar = document.querySelector(".navbar");

toggle_btn.addEventListener("click", () => {
  navbarlink.classList.toggle("active");
});

navbarlinkli.forEach((nav) => {
  nav.addEventListener("click", () => {
    navbarlink.classList.remove("active");
  });
});

const texts = ["Software Engineer", "Frontend Enthusiastic", "Avid Learner"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count == texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".main_text").textContent = letter;
  if (letter.length == currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 400);
})();

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
}
