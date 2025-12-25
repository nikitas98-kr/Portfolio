/* ================= NAVBAR SCROLL ================= */
const navbar = document.querySelector(".navbar");
const toTopBtn = document.getElementById("to-top");

window.addEventListener("scroll", () => {
  // Navbar background on scroll
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Show / hide scroll-to-top button
  if (window.scrollY > 100) {
    toTopBtn.classList.add("show");
  } else {
    toTopBtn.classList.remove("show");
  }
});

/* ================= SCROLL TO TOP ================= */
toTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/* ================= NAVBAR TOGGLE ================= */
const menuBtn = document.getElementById("menu_btn");
const navLinks = document.getElementById("nav_links");
const menuIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  if (navLinks.classList.contains("open")) {
    menuIcon.className = "ri-close-line";
  } else {
    menuIcon.className = "ri-menu-line";
  }
});

/* ================= CLOSE MENU ON LINK CLICK ================= */
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuIcon.className = "ri-menu-line";
  });
});
