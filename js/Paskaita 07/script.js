const y = 20;


function sayHello() {
  const x = 10;
  console.log(x, y);

  function atspausdinkSkaiciu() {
    const z = 50;
    console.log(y);
  }

  atspausdinkSkaiciu()
  
  console.log("Labas");
}

sayHello()

const sk1 = 10;
const sk2 = 20;

function addNumbers(skaicius1 = 1, skaicius2 = 1) {

  function iskonsolinkPirmaSk() {
    console.log(skaicius1);
  }

  iskonsolinkPirmaSk()

  console.log(skaicius1 + skaicius2);
}

addNumbers(33, 45);
addNumbers(20, 84)
addNumbers(55)
addNumbers()

function subtractNumbers(number1, number2) {
  return number1 - number2;
}

const res = subtractNumbers(10, 5);

console.log(res);

console.log(subtractNumbers(20, 50));
const asdf =[1, 5, 7, "asdf"]

function getArray() {
  return [1, 5, 7, "asdf"];

  console.log("kazkas vyksta toliau");
  
}

const newArray = getArray();
const newArray2 = getArray();

newArray2[0] = "alskjdfhalsdkfhj"

console.log(newArray);

function doRandomStuff(number) {
  if (number > 10) {
    return number * 2;
  } else {
    return number / 2;
  }

  console.log("labas");
  
}

console.log(doRandomStuff(11));
 

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm("Ar tevai leido?");
  }
}

// console.log(checkAge(15));
 
function getFunction() {
  function consoleStuff() {
    console.log("stuff");
  }

  return consoleStuff;
}

const result = getFunction();

result()

console.log(result);

// Funkcija grąžins true, jei parametro amžius yra didesnis nei 18 metų.
// function checkAge(age) {
//   if (age > 18) {
//     return true; //console.log(true)
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }
// Perrašykite funkcijos kodą, kad jis būtų be if ir vienoje eilutėje:
// Naudokite: ternary operator ?

function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?')
}

// console.log(checkAge(15));

// Parašykite funkciją min(a, b), kuri grąžina mažiausiai iš dviejų skaičių a ir b

// Pvz.:
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

function min(num1, num2) {
  return (num1 < num2) ? num1 : num2;
}

console.log(min(1, 1));
console.log("-=----------------------");


for(let i = 0; i < 10; i++) {
  console.log(i, "i");
  for(let j = 0; j < 5; j++) {
    console.log(j, "j");
  }
}


// 2. Rasti visų masyvo elementų, kurie pasikartoja, sąrašą
 
// Sukurk masyvą su skaičiais, kuriuose yra pasikartojančių reikšmių. Naudodamas for ciklą rask visas reikšmes, kurios pasikartoja bent kartą. Išvesk tik unikalius pasikartojančius elementus.
 
// Pavyzdys:
 
// let masyvas = [2, 3, 2, 5, 6, 3, 7];
// // Rezultatas: [2, 3]

let masyvas = [2, 3, 2, 5, 6, 3, 7];
let repeatedValues = [];

for(let i = 0; i < masyvas.length; i++) {

  for(let j = i + 1; j < masyvas.length; j++) {
    if (masyvas[i] === masyvas[j]) {
      repeatedValues.push(masyvas[i])
    } 
  }
}

console.log(repeatedValues);
