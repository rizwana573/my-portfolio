particlesJS("particles-js", {
  "particles": {
    "number": { "value": 100 },
    "color": {
      "value": ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#8B00FF"]
    },
    "shape": { "type": [ "triangle", "polygon", "star"] },
    "opacity": { "value": 0.7 },
    "size": { "value": 4, "random": true },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#999999",
      "opacity": 0.6,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "attract": { "enable": false }
    }
  },
  "interactivity": {
    "detect_on": "canvas",   
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"  
      },
      "onclick": {
        "enable": true,
        "mode": "push"      
      }
    },
    "modes": {
      "repulse": {
        "distance": 120,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 6
      }
    }
  },
  "retina_detect": true
});

const latestWorks = document.getElementById("latestWorks");
document.getElementById("latestWrksBtn").addEventListener("click", ()=> {
  window.scrollTo({
    top:latestWorks.offsetTop,
    behavior: "smooth"
  })
})

const light = document.getElementById("light");
const dark = document.getElementById("dark");
const body = document.getElementsByTagName("body")[0];

light.addEventListener("click", ()=> {
  dark.classList.remove("hidden");
  light.classList.add("hidden");
  body.classList.add("lightMode");
  body.classList.remove("darkMode");
});

dark.addEventListener("click", ()=> {
  light.classList.remove("hidden");
  dark.classList.add("hidden");
    body.classList.remove("lightMode");
  body.classList.add("darkMode");
})

const aboutBtn = document.getElementById("aboutBtn");
const aboutModal = document.getElementById("aboutModal");
const closeModal = document.getElementById("closeModal");

aboutBtn.addEventListener("click", () => {
  aboutModal.classList.remove("opacity-0", "pointer-events-none", "hidden");
  const modalContent = aboutModal.querySelector("div");
  setTimeout(() => {
    modalContent.classList.remove("scale-75", "opacity-0");
    modalContent.classList.add("scale-100", "opacity-100", "block");
  }, 50);
});

closeModal.addEventListener("click", () => {
  const modalContent = aboutModal.querySelector("div");
  modalContent.classList.add("scale-75", "opacity-0");
  modalContent.classList.remove("scale-100", "opacity-100", "block");
  setTimeout(() => {
    aboutModal.classList.add("opacity-0", "pointer-events-none", "hidden");
  }, 500);
});