// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Dark mode toggle
    const toggleBtn = document.getElementById("darkToggle");
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  
    // Scroll to top
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    window.addEventListener("scroll", () => {
      scrollToTopBtn.style.display = window.scrollY > 100 ? "block" : "none";
    });
    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
    // Auto type effect
    const words = ["Build Websites", "Boost Your Brand", "Grow Your Business"];
    let wordIndex = 0, charIndex = 0;
    const typedText = document.getElementById("typedText");
    function typeEffect() {
      if (charIndex < words[wordIndex].length) {
        typedText.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
      } else {
        setTimeout(() => {
          typedText.textContent = "";
          charIndex = 0;
          wordIndex = (wordIndex + 1) % words.length;
          typeEffect();
        }, 1500);
      }
    }
    typeEffect();

    document.getElementById("year").textContent = new Date().getFullYear();
  });
  const links = document.querySelectorAll("nav ul li a");

links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(link => link.classList.remove("active"));
    link.classList.add("active");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Navbar toggle
  const myNavBar = document.getElementById("navBar");
  const openBtn = document.getElementById("menu-btn");
  const closeBtn = document.getElementById("close");

  function toggleNavBar() {
    const isVisible = myNavBar.style.display === "flex";
    myNavBar.style.display = isVisible ? "none" : "flex";
    openBtn.style.display = isVisible ? "inline-block" : "none";
    closeBtn.style.display = isVisible ? "none" : "inline-block";
  }

  if (openBtn) openBtn.addEventListener("click", toggleNavBar);
  if (closeBtn) closeBtn.addEventListener("click", toggleNavBar);

  // Dropdown toggle for "About Us"
  const aboutLink = document.getElementById("about");
  const dropdownContent = document.getElementById("navdrop");

  function toggleDropdown(event) {
    event.preventDefault();
    if (dropdownContent) {
      dropdownContent.classList.toggle("show");
    }
  }

  if (aboutLink) {
    aboutLink.addEventListener("click", toggleDropdown);
  }

  // Lazy loading for media
  const lazyElements = document.querySelectorAll("img, iframe, video, embed");
  lazyElements.forEach((element) => {
    if (!element.hasAttribute("loading")) {
      element.setAttribute("loading", "lazy");
    }
  });
});