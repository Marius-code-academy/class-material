// Sort

const arr1 = [1, 5, 8, -7, 0];

// quick sort
// Keicia originala
const rez1 = [...arr1].sort((a, b) => b - a);

console.log(rez1);
console.log(arr1);

const arr2 = [10, 5, 22, 3, -8];

console.log(arr2.sort());

const arr3 = ["ksdgh", "asd", "ddd, iii", "Aaa"];

console.log("aaa".localeCompare("bbb"));

const rez3 = [...arr3].sort((a, b) => a.localeCompare(b));
const rez4 = [...arr3].sort();
console.log(rez3);
console.log(rez4);

// Reduce

const arr4 = [1, 8, 5, 8];

const rez5 = arr4.reduce((acc, cur) => {
  console.log(`acc - ${acc} cur - ${cur}`);
  return acc + cur;
}, -5);

console.log(rez5);

const arr5 = ["asd", "sdf", "asdf"];

const rez6 = arr5.reduce((acc, cur) => {
  return acc + cur + "|";
});

console.log(rez6);
console.log("--------");

const rez7 = arr5.reduce((acc, cur) => {
  console.log(`acc - ${acc} cur - ${cur}`);

  if (cur.length > 3) {
    acc.push(cur);
    return acc;
  } else {
    return acc;
  }
}, []);

console.log(rez7);

// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.

function addDashes(num) {
  const str = num;
  console.log(str);
  // 0-25
  let rez = "";
  str.forEach((x, i) => {
    rez += x;
    if (+x % 2 === 0 && str[i + 1] % 2 === 0) {
      rez += `-`;
    }
  });

  console.log(rez);
}

addDashes("025468");

function addDashes(num) {
  let num_rez = "";
  num = num.split("");
  for (let i = 0; i < num.length; i++) {
    num_rez += num[i];
    if (num[i] % 2 === 0 && num[i + 1] % 2 === 0) {
      num_rez += " - ";
    }
  }
  return num_rez;
}

const dashInsert = (num) => {
  let s = "";
  for (let i = 0; i < num.length; i++) {
    let el = num[i];
    let el2 = num[i + 1];
    s += el;
    if (Number(el % 2 === 0 && el2 % 2 === 0)) s += "-";
  }
  return s;
};
