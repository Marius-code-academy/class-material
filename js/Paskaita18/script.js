const clickMeButton = document.querySelector("#clickMe");

function handleClick(event) {
  console.log(event.target);
  event.target.style.fontSize = "40px";
  // event.target.disabled = true;
}

clickMeButton.addEventListener("click", handleClick);

clickMeButton.addEventListener("dblclick", () => {
  console.log("Double click");
});

const div = document.querySelector("div");

div.addEventListener("click", handleClick);

const clickMe2 = document.querySelector("#clickMe2");

clickMe2.addEventListener("click", (e) => {
  console.log("Mygtukas paspaustas");
  e.target.disabled = true;

  setTimeout(() => {
    e.target.disabled = false;
  }, 2000);
});

window.addEventListener("resize", () => {
  console.log("Resize", window.innerWidth);
});

const googleLink = document.querySelector("a");

googleLink.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Google link clicked");
});

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form submitted");
});

const inner = document.querySelector(".inner");
const outer = document.querySelector(".outer");

inner.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Inner clicked");
  console.log(e.target.classList);
  // e.target.classList.add("big-text");
  // e.target.classList.remove("inner");
  e.target.classList.toggle("big-text");
});

outer.addEventListener("click", (e) => {
  console.log("Outer clicked");
});

// Task 2: Hover to Display a Message
// Create a box (div) that shows a hidden message when hovered over and hides the message when the mouse leaves.

const hiddenMessageDiv = document.querySelector("#hiddenMessage");
const hiddenPar = document.querySelector("#hiddenPar");

hiddenMessageDiv.addEventListener("mouseover", (e) => {
  hiddenPar.classList.remove("display-none");
});

hiddenMessageDiv.addEventListener("mouseleave", (e) => {
  hiddenPar.classList.add("display-none");
});

// Task 3: Key Press to Move an Object
// Create a small square on the page that can be moved up, down, left, or right using the arrow keys.

const movingSquareDiv = document.querySelector(".moving-box");

movingSquareDiv.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "ArrowRight") {
    if (e.target.style.left) {
      e.target.style.left = Number.parseInt(e.target.style.left) + 10 + "px";
    } else {
      e.target.style.left = "10px";
    }
  }

  if (e.key === "ArrowLeft") {
    if (e.target.style.left) {
      e.target.style.left = Number.parseInt(e.target.style.left) - 10 + "px";
    } else {
      e.target.style.left = "-10px";
    }
  }

  if (e.key === "ArrowDown") {
    if (e.target.style.top) {
      // 10px                                     10                   20px
      e.target.style.top = Number.parseInt(e.target.style.top) + 10 + "px";
    } else {
      e.target.style.top = "10px";
    }
  }

  if (e.key === "ArrowUp") {
    if (e.target.style.top) {
      // 10px                                     10                   20px
      e.target.style.top = Number.parseInt(e.target.style.top) - 10 + "px";
    } else {
      e.target.style.top = "-10px";
    }
  }
});
