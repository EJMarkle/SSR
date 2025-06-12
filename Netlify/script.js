// Mobile menu toggle
function toggleMobileMenu() {
  const mobileNav = document.getElementById("mobileNav")
  mobileNav.classList.toggle("active")
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    // Close mobile menu if open
    const mobileNav = document.getElementById("mobileNav")
    mobileNav.classList.remove("active")
  })
})



// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.98)"
  } else {
    header.style.background = "rgba(255, 255, 255, 0.95)"
  }
})

// Close mobile menu when clicking outside
document.addEventListener("click", (event) => {
  const mobileNav = document.getElementById("mobileNav")
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")

  if (!mobileNav.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
    mobileNav.classList.remove("active")
  }
})

// Add this function to enhance the parallax effect
function enhanceParallaxEffect() {
  const scrollPosition = window.scrollY
  const windowHeight = window.innerHeight
  const documentHeight = document.body.scrollHeight

  // Calculate how far down the page we've scrolled as a percentage
  const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100

  // Adjust the background position based on scroll percentage
  // This creates a subtle parallax effect where the background moves slower than the content
  document.body.style.backgroundPosition = `center ${20 + scrollPercentage * 0.2}%`
}

// Add event listener for scroll
window.addEventListener("scroll", enhanceParallaxEffect)

// Add loading animation for images
document.addEventListener("DOMContentLoaded", () => {
  enhanceParallaxEffect()

  // Rest of your existing DOMContentLoaded code...
  const images = document.querySelectorAll("img")
  images.forEach((img) => {
    img.addEventListener("load", function () {
      this.style.opacity = "1"
    })

    // Set initial opacity for smooth loading
    img.style.opacity = "0"
    img.style.transition = "opacity 0.3s ease"

    // If image is already loaded (cached)
    if (img.complete) {
      img.style.opacity = "1"
    }
  })
})
