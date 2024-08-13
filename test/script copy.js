
gsap.registerPlugin(ScrollTrigger);

// GSAP Horizontal Scroll
let sections = gsap.utils.toArray(".panel");

// Mobile Navigation Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('expanded');
});


gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector(".container").offsetWidth
  }
});

const flowers = [
  {
    name: "Tulip",
    color: "yellow",
    image: "./assets/images/1.png"
  },
  {
    name: "Sunflower",
    color: "yellow",
    image: "./assets/images/2.png"
  },
  {
    name: "Bluebell",
    color: "blue",
    image: "./assets/images/3.png"
  },
  {
    name: "Rose",
    color: "red",
    image: "./assets/images/4.png"
  },
  {
    image: "./assets/images/5.png"
  },
  {
    image: "./assets/images/6.png"
  },
  {
    image: "./assets/images/7.png"
  },
  {
    image: "./assets/images/8.png"
  }

];

const btn = document.querySelector(".clear-btn");
const firstContainer = document.querySelector(".firstContainer");


let i = 0;

function placeImage(x, y) {
  const nextImg = flowers[i].image;
  console.log(nextImg);

  const img = document.createElement("img");
  img.setAttribute("src", nextImg);
  img.style.left = x + "px";
  img.style.top = y + "px";
  img.style.transform = "translate(-50%, -50%) scale(1.5) rotate(" + Math.random() * 20 + "deg)";

  firstContainer.appendChild(img);

  i = i + 1;
  if (i >= flowers.length) {
    i = 0;
  }
}

// For web
firstContainer.addEventListener("click", function(event) {
  event.preventDefault();
  placeImage(event.pageX, event.pageY);
});

// For mobile
firstContainer.addEventListener("touchstart", function(event) {
  event.preventDefault();
  placeImage(event.touches[0].pageX, event.touches[0].pageY);
});

window.addEventListener('load', function() {
  const highlight = document.querySelector('.highlight');
  highlight.classList.add('animate');
});


document.addEventListener("DOMContentLoaded", function() {
  const scroller = scrollama();
  let currentGraph = null;

  function hideGraph(element) {
    if (element) {
      console.log("Hiding graph:", element.id);
      gsap.to(element, { autoAlpha: 0, duration: 0.5, onComplete: () => {
        element.style.display = 'none';
      }});
    }
  }
  
  function showGraph(element) {
    if (element) {
      console.log("Showing graph:", element.id);
      element.style.display = 'block';
      gsap.fromTo(
        element,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.5 }
      );
    } else {
      console.error("Graph element is null or undefined");
    }
  }
  
  scroller
    .setup({
      step: '.step',
      offset: 0.5,
    })
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit);

  // Handle step enter
  function handleStepEnter(response) {
    // Hide the current graph if there is one
    if (currentGraph) {
      hideGraph(currentGraph);
    }
    
    // Show the graph corresponding to the current step
    currentGraph = document.querySelector(`#${response.element.dataset.graph}`);
    if (currentGraph) {
      showGraph(currentGraph);
    } else {
      console.error("No graph found for the current step");
    }
  }

  // Handle step exit (optional)
  function handleStepExit(response) {
    // Custom logic on step exit if needed
    console.log("Step exited:", response.element.dataset.graph);
  }

  // Reinitialize Scrollama on window resize
  window.addEventListener('resize', scroller.resize);
});
document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tab');
  const contentPanel = document.getElementById('content-panel');
  const infoContent = document.getElementById('info-content');

  const tabContent = {
    'tab1': `<div class="design-fiction">
               <h3>TrustWeb: Blockchain-Enhanced Verification Network</h3>
               <p><strong>Perspective:</strong> Technological Infrastructure</p>
               <p><strong>How It Works:</strong> Every piece of digital content is cryptographically hashed and verified through a decentralized blockchain network. Users can easily check content authenticity via API or browser plugin.</p>
             </div>`,
    'tab2': `<div class="design-fiction">
               <h3>EyeWitness: AI-Augmented Human Authentication</h3>
               <p><strong>Perspective:</strong> Human-Centric Verification</p>
               <p><strong>How It Works:</strong> Combines AI filtering with human expert analysis to verify suspicious content in real-time. Experts are incentivized through a reward system, improving the overall detection process.</p>
             </div>`,
    'tab3': `<div class="design-fiction">
               <h3>VeriLens: Consumer-Based Smart Device Integration</h3>
               <p><strong>Perspective:</strong> User-Centric Protection</p>
               <p><strong>How It Works:</strong> Embedded in consumer devices, VeriLens performs real-time deepfake detection using edge AI. Users can flag suspicious content, contributing to a collective database for better detection.</p>
             </div>`
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      contentPanel.style.display = 'block';
      infoContent.style.opacity = '0';
      
      setTimeout(() => {
        infoContent.innerHTML = tabContent[tab.id];
        infoContent.style.opacity = '1';
      }, 300); // Match this with the transition duration for smooth effect
    });
  });
});

window.addEventListener('load', function() {
  const highlights = document.querySelectorAll('.highlight');
  highlights.forEach(highlight => {
    highlight.classList.add('animate');
  });
});