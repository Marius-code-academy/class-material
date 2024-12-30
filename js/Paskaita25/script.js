// console.log(document.cookie);

// document.cookie = "username=Marius alskdjfasdlj; expires=Thu, 18 Dec 2026 12:00:00 UTC;";

// document.cookie = "lastname=laksjdfalskjdfhaklsjdfh;";

// localStorage.setItem("name", "Marius");
console.log(localStorage.getItem("name"));
localStorage.removeItem("name");

// sessionStorage.setItem("laikinas", "kazkas laiko kuris pradings");

// console.log(sessionStorage.getItem("laikinas"));

sessionStorage.removeItem("laikinas");

const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const inputValue = input.value;
  const currentDalykai = localStorage.getItem("dalykai");
  let newDalykai;

  if (!currentDalykai) {
    newDalykai = [inputValue];
  } else {
    const currentDalykaiArray = JSON.parse(currentDalykai);
    newDalykai = [...currentDalykaiArray, inputValue];
  }

  localStorage.setItem("dalykai", JSON.stringify(newDalykai));
});
