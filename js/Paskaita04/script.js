let x = 10;

// 1. x = 0, true
// 2. x = 1, true
// 3. x = 2, true
// ...
// 11. x = 10, false
while (x < 10) {
  console.log(x);
  x++;
}

let y = 10;

do {
  y++;
  console.log(y);
} while (y < 10);

let userInput = "";

// while(userInput === "") {
//   userInput = prompt("Iveskite kazka");
// }


console.log("po Ciklo");

const sk = 15;

let a = 0;

for (let i = 1; i <= sk; i++) {
  a += i;
  const labas = "Labas"
  console.log(i);
}
console.log("-----------------");

for(let i = 20; i > 5; i--) {
  console.log(i);
}

console.log("-----------------");

for(let i = 1; i < 10; i *= 2) {
  console.log(i);
}
console.log("----------------- uzduotis 1");

// Naudodami for (loop) ciklą, parašykite visus lyginius skaičiuos nuo 2 iki 10;
// Patarimas: jums padės if sąlyga ir modulis.

for(let i = 2; i <= 10; i+=2) {
  console.log(i);
}

console.log("-----------------");


for(let i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Parašykite ciklą, kuris išvestų sukurtų string’ą su nurodytu „ha“ skaičiumi.

// Nustačius const laugh = 4;
// Rezultatas: "hahahaha!"
console.log("----------------- uzduotis 2");

const laugh = 10000;

let haha = "";
console.time("for");
for(let i = 0; i < laugh; i++) {
  haha += "ha";
}
haha += "!"
console.timeEnd("for");
// console.log(haha);

console.time("repeat");
let haha2 = "ha".repeat(laugh) + "!";
console.timeEnd("repeat");
// console.log(haha2);

// Perrašykite šį while ciklą į for:

// let x = 9;
// while (x >= 1) {
//   console.log("hello " + x);
//   x = x - 1;
// }

console.log("----------------- uzduotis 3");

for(let x = 9; x >= 1; x--) {
  console.log("hello " + x);
}