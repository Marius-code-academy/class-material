const testRegex = /[c|C]at[0-2]?[0-9]/g;

const testString = "Labas ate Cat20 krabas Cat23";

const rez = testRegex.test(testString);

console.log(rez);

const rez2 = testString.match(testRegex);
console.log(rez2);

const rez3 = testString.matchAll(testRegex);
const arr = Array.from(rez3);
console.log(arr, "naujas sukurtas array");

for (const item of rez3) {
  console.log(item);
}

const rez4 = testString.search(testRegex);
console.log(rez4);

const rez5 = testString.replace(testRegex, "Kazkas kito");
console.log(rez5);

const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

function testInputCallback(regex, value) {
  const rez = regex.test(value);
  console.log(rez);
}
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[a-zA-Z0-9]).{8,}$/;

emailInput.addEventListener("input", (e) => testInputCallback(emailRegex, e.target.value));

passwordInput.addEventListener("input", (e) => testInputCallback(passwordRegex, e.target.value));
