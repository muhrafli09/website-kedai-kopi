// Toggle class active

const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Ketika klik diluar hamburger menu
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  console.log("Clicked:", e.target);
  console.log("hamburger.contains:", hamburger.contains(e.target));
  console.log("navbarNav.contains:", navbarNav.contains(e.target));

  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
