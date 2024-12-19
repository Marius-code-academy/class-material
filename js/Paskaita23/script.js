const input = document.querySelector("input");

// input.addEventListener("change", (e) => {
//   console.log(e.target.value);
// });

// input.addEventListener("input", (e) => {
//   console.log(e.target.value);
// });

input.addEventListener("keydown", (e) => {
  console.log(e.key + " key down");
});

input.addEventListener("keyup", (e) => {
  console.log(e.key + " key up");
});

const par = document.querySelector("p");

par.addEventListener("click", (e) => {
  console.log("p clicked");
});

par.addEventListener("mousedown", (e) => {
  console.log("p mousedown");
});

par.addEventListener("mouseup", (e) => {
  console.log("p mouseup");
});

const ul = document.querySelector("ul");

ul.addEventListener("mousedown", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("big-text");
  }
});

for (let i = 0; i < 15; i++) {
  const li = document.createElement("li");
  li.textContent = i;
  ul.appendChild(li);
}

const images = [
  "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
  "https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75",
  "https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649",
  "https://pixlr.com/images/generator/how-to-generate.webp",
];

const arrowRight = document.querySelector(".arrow-right");
const arrowLeft = document.querySelector(".arrow-left");
const carouselImage = document.querySelector("#carousel img");
const carouselContainer = document.querySelector("#carousel");

let currentImageIndex = 0;
carouselImage.src = images[0];

const moveRight = (e) => {
  if (currentImageIndex + 1 >= images.length) {
    currentImageIndex = 0;
  } else {
    currentImageIndex++;
  }
  carouselImage.src = images[currentImageIndex];
};

const moveLeft = (e) => {
  if (currentImageIndex - 1 < 0) {
    currentImageIndex = images.length - 1;
  } else {
    currentImageIndex--;
  }

  carouselImage.src = images[currentImageIndex];
};

arrowRight.addEventListener("click", moveRight);

arrowLeft.addEventListener("click", moveLeft);

carouselContainer.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    moveLeft();
  } else if (e.key === "ArrowRight") {
    moveRight();
  }
});
