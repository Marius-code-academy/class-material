const people = [1, 5, 8, "asdf", true, [1, 5]];

const x = people[0]

console.log(x);

people[4] = false;

people.push("Nauja reiksme", "dar viena");
people.unshift("Nauja reiksme pradzioje")

const galineReiksme = people.pop();
const priekineReiksme = people.shift();

console.log(galineReiksme);
console.log(priekineReiksme);

const deleted = people.splice(2, 0, "kazkas naujo", "kazkas naujo 2");
console.log(deleted);

console.log(people);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Slice nekeicia originalo array
const slicedArray = array.slice(0, 4);

console.log(slicedArray);

console.log(array);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const rez = arr1.concat(arr2);
console.log(rez);

const arr3 = ["labas", "krabas", "kebabas"];
const arr33 = [1, 5, 8 , 9]

// Senas budasdaryti array kopija
// const arr4 = JSON.parse(JSON.stringify(arr3));
const arr4 = [...arr3, "kazkas vidury", ...arr33];

console.log(arr4);


arr4[1] = "Kazkas naujo"

console.log(arr3);
console.log("labas", "krabas", "kebabas");


// Task 1: Find the Largest Number
// Create an array called numbers with the following items: 12, 45, 2, 67, 33.

const numbers = [-12, -45, -2, -67, -33];

let result = numbers[0];

for(let i = 1; i < numbers.length; i++) {
  if (result < numbers[i]) {
    result = numbers[i];
  }
}

console.log("didziausias skaicius", result);

// Task 3: Filter Even Numbers
// Create an array called nums with the following items: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.

const nums = [1, 2, 3, 4, 9, 10, 25, 80, 60, 21];

const evenNumbers = [];

for(let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    evenNumbers.push(nums[i]);
  }
}

console.log(evenNumbers);

// Task 4: Reverse an Array
// Create an array called colors with the following items: "red", "blue", "green", "yellow", "purple".

const colors = ["red", "blue", "green", "yellow", "purple"];

const reversedColors = [];

// for(let i = colors.length - 1; i >= 0; i--) {
//   reversedColors.push(colors[i])
// }

for(let i = 0; i < colors.length; i++) {
  reversedColors.unshift(colors[i])
}

console.log(reversedColors);
