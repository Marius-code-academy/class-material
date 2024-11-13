const isRainingToday = true;
const isSunnyToday = false;

const infinity = Infinity;

const number = "asdf" - 20;
console.log(number);

const superBigNumber = 23186413516841312n;

console.log(superBigNumber);

const name = "Jonas".toLocaleUpperCase();
const lastName = "Jonaitis";
const simbolis = '@'

const fullName = `ksdjfhb ${name} ${lastName} ${10 + 20}`;

const res = typeof fullName;

let count = 0;
count = count + 1;
count++;
count--;
console.log(count);

let count2 = 0;

count2 = count2 + 10;
count2 += 10;

count2 *= 5;

count2 = count2 ** 3;
count2 **= 2;

console.log(count2);

console.log(12 % 3);

console.log(10 !== "10");

console.log(10 <= 5);

console.log(true === true);

const a = "20";

const sum = Number(a) + 50;

console.log(sum);
console.log(+"32asd");

const x = 50;
const y = 10;

const suma = x + y;
const atimtis = x - y;
const daugyba = x * y;
const dalyba = x / y;

const vartotojoSkaicius = 20;
//              true                        false
console.log(((vartotojoSkaicius > 5 && vartotojoSkaicius < 10) || vartotojoSkaicius === 20));

console.log(false || false);

console.log(!true);

console.log(true && "Cat");
console.log(false || "Dog");

console.log(1 && "Labas");

const kazkas = null;

console.log(kazkas === null && kazkas === undefined);

const amzius = 19;

const arPilnametis = amzius >= 20 ? "Pilnametis" : "Nepilnametis";

console.log(arPilnametis);

console.log(Boolean(""));
