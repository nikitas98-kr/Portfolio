// Navbar scroll effect
let nav = document.querySelector(".navigation-wrap");

// Scroll-to-top button
const scrollBtn = document.getElementById("scrollTopBtn");

// Combined scroll event
window.addEventListener("scroll", () => {
  // Navbar scroll effect
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("scroll-on");
  } else {
    nav.classList.remove("scroll-on");
  }

  // Scroll-to-top button
  if (document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

// Navbar hide on link click (mobile)
let navLinks = document.querySelectorAll(".nav-link");
let navCollapse = document.getElementById("navbarText"); // safer than class selector

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navCollapse.classList.remove("show");
    navLinks.forEach((l) => (l.style.color = "")); // reset others
    link.style.color = "var(--primary-color)";
  });
});

// Counter animation
document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }

  counter("count1", 0, 1287, 3000);
  counter("count2", 100, 5786, 2500);
  counter("count3", 0, 1440, 3000);
  counter("count4", 0, 7110, 3000);
});

// Scroll to top on button click
scrollBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
