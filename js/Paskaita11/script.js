function doStuff() {
  console.log("labas");
}

setTimeout(() => console.log("Labas"), 3000);

// setInterval(() => console.log("Intervalas"), 2000);

console.log("kazkas");

const arr = [1, 5, 8, 33];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr.forEach((number, i) => {
  const x = number * 3;
  console.log(x);
  console.log(i);
});

const newArr = arr.map((number) => number * number);

console.log(arr);
console.log(newArr);

const filtered = arr.filter((number) => number > 5);

console.log(filtered);

const arrStr = ["Labas", "kazkas", "siandien", "Salta"];

const rez = arrStr.filter((str) => str[0] === str[0].toUpperCase());

console.log(rez);

// Remove Null or Undefined Values
// Filter out all null and undefined values from an array.

const arr1 = ["asdf", "sadf", null, undefined, 0, 358, -1];

const rez1 = arr1.filter((ele) => ele !== null && ele !== undefined);

console.log(rez1);

// Log the length of each word in the array.

const arr2 = ["asdf", "asdf", "ksjdhf"];

arr2.forEach((word) => console.log(word.length));

// Create a new array with only words containing the letter 'e'.

const arr3 = ["aEsd", "lkje", "e", "", "lasekdjge"];

const rez3 = arr3.filter((str) => str.toLowerCase().includes("e"));

console.log(rez3);

// Convert all strings to uppercase, then filter out strings shorter than 5 characters.

const arr4 = ["aEsd", "lkje", "e", "", "lasekdjge"];

const rez4 = arr4.filter((str) => str.length > 5).map((str) => str.toUpperCase());

console.log(rez4);

// Filter an array of numbers to get only odd numbers, then create a new array where each number is squared.

const arr5 = [1, 5, 8, 9, 10, 12];

const rez5 = arr5.filter((num) => num % 2 !== 0).map((num) => num * num);

console.log(rez5);
