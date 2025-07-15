const roles = ["Developer", "UI/UX Designer", "Frontend Engineer", "Problem Solver"];
const typingText = document.getElementById("typing-text");
let roleIndex = 0;
let charIndex = 0;
let typingDelay = 150;
let erasingDelay = 80;
let newTextDelay = 2000;

function type() {
  if (charIndex < roles[roleIndex].length) {
    typingText.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typingText.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type, typingDelay);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (roles.length) setTimeout(type, newTextDelay);
});

const toggleBtn = document.getElementById("toggle-mode");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

const skillLevels = document.querySelectorAll(".skill-level");
function animateSkills() {
  skillLevels.forEach(bar => {
    const level = bar.getAttribute("data-level");
    bar.style.width = level;
  });
}
window.addEventListener("DOMContentLoaded", animateSkills);

document.querySelectorAll('.ripple').forEach(button => {
  button.addEventListener('click', function (e) {
    const circle = document.createElement('span');
    circle.classList.add('ripple-effect');
    this.appendChild(circle);

    const d = Math.max(this.clientWidth, this.clientHeight);
    circle.style.width = circle.style.height = d + 'px';

    const rect = this.getBoundingClientRect();
    circle.style.left = e.clientX - rect.left - d / 2 + 'px';
    circle.style.top = e.clientY - rect.top - d / 2 + 'px';

    setTimeout(() => circle.remove(), 600);
  });
});

const backToTopBtn = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");
form.addEventListener("submit", e => {
  e.preventDefault();
  status.textContent = "Thank you for your message. I’ll get back to you!";
  form.reset();
});
