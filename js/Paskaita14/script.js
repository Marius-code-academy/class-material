const obj = {
  name: "Marius",
  lastName: "kasjdfh",
  age: 28,
  pets: ["katinas1", "katinas2"],
  car: {
    make: "askdfhjn",
    year: 2000,
  },
  sayHello: () => console.log("Hello"),
};

obj.name = "alskjdfhaskldjf";

obj.tel = "+370351684";

delete obj.name;

console.log(obj.car.make);

obj.sayHello();

const obj2 = {
  "first-name": "aklsdjf",
};

const x = "first-name";

console.log(obj2[x]);

const obj3 = {
  name: "Vardas",
  saySomething: () => {
    console.log(this);
  },
  saySomethingElse: function () {
    console.log(this);
  },
};

const obj4 = {
  name: "Vardas________",
  saySomething: () => {},
  saySomethingElse: function () {
    console.log(this.name);
  },
};

obj3.saySomething();
obj3.saySomethingElse();

// obj4.saySomethingElse();

const arr = [1, 8, 5, 0, 6, 7];

const rez = arr.reduce(
  (acc, cur) => {
    if (cur % 2 === 0) {
      acc.even.push(cur);
    } else {
      acc.odd.push(cur);
    }

    return acc;
  },
  {
    odd: [],
    even: [],
  },
);

console.log(rez);

const arr2 = ["a", "abc", "abc", "a", "kdkd", "asdfasdf", "a"];

const rez2 = arr2.reduce((acc, cur) => {
  if (acc[cur]) {
    acc[cur]++;
  } else {
    acc[cur] = 1;
  }

  return acc;
}, {});

console.log(rez2);

const obj5 = {
  name: "asdf",
  tel: 351861,
};

const obj6 = { ...obj5 };

obj6.name = "KAZKAS NAUJO";
console.log(obj6);

console.log(Object.keys(obj5));
console.log(Object.values(obj5));
console.log(Object.entries(obj5));

const obj7 = {
  abc: 123,
  ddd: 651,
  iii: 3513,
  kazkas: "Object 7 kazkas",
};

const obj8 = {
  xxx: 123,
  yyy: 651,
  lll: 3513,
  kazkas: "Object 8 kazkas",
};

const combined = {
  kazkas: "Visiskai naujas",
  ...obj7,
  ...obj8,
  naujas: "Ciak kazkas naujo",
};

console.log(combined);

// Skaičių kumuliacinė suma ir sandauga
// Turite šį masyvą:
// const numbers = [2, 3, 5, 7, 11];
// Užduotis: Naudodami reduce, sukurkite naują masyvą, kuriame:
// Pirmasis elementas yra toks pats kaip pradiniame masyve.
// Kiekvienas kitas elementas yra visų ankstesnių elementų suma padauginta iš dabartinio elemento.
// Pvz.:
// Pirmasis elementas: 2.
// Antrasis elementas: (2) + (2 * 3) = 8.
// Trečiasis elementas: (2 + 8) + (2 + 8) * 5 = 50.
// Rezultatas:
// [2, 8, 50, ...]

const numbers = [2, 3, 5, 7, 11];

const newArr = numbers.reduce((acc, cur, index) => {
  if (index === 0) {
    acc.push(cur);
    return acc;
  }

  const previousSum = acc.reduce((ac, cu) => ac + cu);

  const rez = previousSum + previousSum * cur;

  acc.push(rez);

  return acc;
}, []);

console.log(newArr);
