
gsap.registerPlugin(ScrollTrigger);

// GSAP Horizontal Scroll
let sections = gsap.utils.toArray(".panel");

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
    image: "C:/Users/cathe/OneDrive/Desktop/colloqUium I/test/news/1.png"
  },
  {
    name: "Sunflower",
    color: "yellow",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sunflower_sky_backdrop.jpg/800px-Sunflower_sky_backdrop.jpg"
  },
  {
    name: "Bluebell",
    color: "blue",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Hyacinthoides_non-scripta_%28Common_Bluebell%29.jpg"
  },
  {
    name: "Rose",
    color: "red",
    image: "https://www.jacksonandperkins.com/images/xxl/v1780.jpg"
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
  img.style.position = "absolute";
  img.style.left = x + "px";
  img.style.top = y + "px";
  img.style.transform = "translate(-50%, -50%) scale(0.5) rotate(" + Math.random() * 20 + "deg)";

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

// Clear button functionality
if (btn) {
  btn.addEventListener("click", function() {
    firstContainer.innerHTML = "";
  });
}

// For mobile
firstContainer.addEventListener("touchstart", function(event) {
  event.preventDefault();
  placeImage(event.touches[0].pageX, event.touches[0].pageY);
});

btn.addEventListener("click", () => {
  console.log("clicked");
  firstContainer.innerHTML = "<h1>Click the screen</h1><footer><button class='clear-btn'>Clear</button></footer>";
});
