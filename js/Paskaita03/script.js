const x = 5;

if (x > 5) {
  console.log("Skaicius didesnis nei 5");
} else {
  console.log("skaicius mazenis negu 5");
}

console.log("kazkas dar");

// const userIput = prompt("Iveskite bent kazka");

// console.log(userIput);

// if (userIput) {
//   console.log(`aciu, kad ivedei ${userIput}`);
// } else {
//   console.log("Pabandyk dar paskutini karta kazka ivest");
//   const antrasSansas = prompt("Prasau?");
//   if (antrasSansas) {
//     console.log("saunuolis");
//   } else {
//     console.log("pasiduodu");
//   }
// }

// if (condition) {
  
// }

const weather = "snowy";

if (weather === "snowy") {
  console.log("Pasiimk striuke");
} else if (weather === "sunny") {
  console.log("Pasiimk akinius");
} else {
  console.log("daryk savo nmuoziura");
}

if (weather === "snowy") {
  console.log("Pasiimk striuke");
}

if (weather === "sunny") {
  console.log("Pasiimk akinius");
}

let skaicius = 10;

if (skaicius > 3) {
  console.log("skaicius didesnis nei 3");
} else if (skaicius < 50) {
  console.log("skaicius mazesnis nei 50");
}

// Parašykite if...else sąlygą, kuri: 
// consolė’je atspausdins lyginis“, jei skaičius yra lyginis skaičius;
// consolė’je atspausdins „nelyginis“, jei skaičius yra nelyginis skaičius.

const sk = 0;

console.log(sk % 2);

if (sk === 0) {
  console.log("Nei tas nei tas");
} else if (sk % 2) {
  console.log("nelyginis");
} else {
  console.log("lyginis");
}

if (sk % 2 === 0) {
  console.log("lyginis --");
} else if (sk === 0) {
  console.log("nei tas nei tas --");
} else {
  console.log("nelyginis --");
}

// Muzikinės grupės turi specialius pavadinimus pagal žmonių skaičių grupėje. Pvz., „kvartetas“ yra muzikinė grupė, kurią sudaro keturi muzikantai.
// Parašykite sąlyginių teiginių seriją (else...if statements), kuri:
// Atspausdins consolėje "ne grupė" jei muzikantų yra mažiau ar lygu 0;
// Atspausdins consolėje "solo" jei muzikantų yra 1;
// Atspausdins consolėje "duetas" jei muzikantų yra 2;
// Atspausdins consolėje "trio" jei muzikantų yra 3;
// Atspausdins consolėje "kvartetas" jei muzikantų yra 4;
// Atspausdins consolėje "didelė grupė" jei muzikantų yra daugiau nei 4.

const muzikantuSk = -1;

if (muzikantuSk <= 0) {
  console.log("ne grupe");
} else if (muzikantuSk === 1) {
  console.log("solo");
} else if (muzikantuSk === 2) {
  console.log("duetas");
} else if (muzikantuSk === 3) {
  console.log("trio");
} else if (muzikantuSk === 4) {
  console.log("kvartetas");
} else {
  console.log("didele grupe");
}

const arDidele = muzikantuSk > 4 ? console.log("didele grupe") : console.log("maza grupe");

const kazkas = 4;

switch (kazkas) {
  case 1:
  case 2:
    console.log("mazas skaicius");
    break;
  case 4:
    console.log("keturi");
    break;
  default:
    console.log("neaisku");
}