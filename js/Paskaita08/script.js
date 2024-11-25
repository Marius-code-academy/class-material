function concatStrings(str1, str2) {
  const res = str1 + str2;
  return res;

  console.log("kazkas po return");
}

const x = concatStrings("labas", "kasdasd");

console.log(x);

console.log(concatStrings("labas", concatStrings("labas", "kasdasd")));
concatStrings(" ", "asdsssssdasd");
concatStrings("labas", "kasdasd");

console.log("labas", "krabas", 2);

const arr = ["a", "b", "c"];
const arr2 = arr;

console.log(...arr);

function concatAllStrings(prepend, ...allStrings) {
  let res = "";
  for (let i = 0; i < allStrings.length; i++) {
    res += allStrings[i] + prepend;
  }

  return res;
}

console.log(concatAllStrings("   ", "kazanas", "asdf"));

function changeFirstArrayElement(ar) {
  const copy = [...ar];
  copy[0] = "Pakeista reiksme";
  return copy;
}

console.log(changeFirstArrayElement(arr));
console.log(arr);

function fn1(a, b) {
  console.log("labas");
}

const fn2 = function (a, b) {
  console.log("labas");
};

const fn3 = (a, b) => a + b;

const fn4 = (k = 0) => k + 10;

console.log(fn3(1, 5));

console.log(fn4(25));
