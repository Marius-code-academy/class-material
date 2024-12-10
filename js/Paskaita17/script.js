console.log(document.body.style);

// document.body.style.backgroundColor = "red";

console.log(document.body.childNodes[1]);

const span = document.getElementById("span");

span.style.color = "white";

span.textContent = "Kazkoks kitas tekstas";

console.log(span);

const h1 = document.querySelector("h1");

const div = document.querySelector(".testine-klase");
console.log(div);

const divs = document.querySelectorAll(".testine-klase");
console.log(divs);

console.log(h1);

const table = document.querySelector("#age-table");
console.log(table);
const td = document.querySelector("#age");
console.log(td);

const labels = document.querySelectorAll("table form label");
console.log(labels);

const firstInput = document.querySelector("table input");
console.log(firstInput);

const lastInput = document.querySelector("table input:last-of-type");
console.log(lastInput);

// Istrinti elementa

const bigText = document.querySelector("#big-text");
bigText.remove();

// Sukurti elementa

const newDiv = document.createElement("div");
newDiv.textContent = "Naujas js sukurtas divas";
console.log(newDiv);

document.body.append(newDiv);

const newH2 = document.createElement("h2");
newH2.textContent = "Naujas sukurtas h2 elementas";

const containerDiv = document.querySelector("#container");

containerDiv.append(newH2);

const newH3 = document.createElement("h3");
newH3.textContent = "Nujas h3 ir jis yra pirmas vaikinis elementas";

containerDiv.prepend(newH3);

const students = ["Jonas", "Petras", "Antanas", "Kazys"];

const studentUl = document.querySelector("#student-list");

students.forEach((student) => {
  const studentLi = document.createElement("li");
  studentLi.textContent = student;

  studentUl.append(studentLi);
});
