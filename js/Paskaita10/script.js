const str = "   labas, ate, katinas labas   ";

console.log(str.charAt(50));
console.log(str[1]);

console.log(str.charCodeAt(1));

console.log(str.at(50));

console.log(str.slice(0, 5));

console.log(str.slice(-6, -3));

console.log(str.substring(4, 0));

console.log(str.substr(4, 4));

console.log(str.slice(-6, str.length));

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.toLocaleUpperCase("dk"));

console.log("istanbul".toLocaleUpperCase("tr"));

console.log(str.trim());
console.log(str.trimEnd());
console.log(str.trimStart());

console.log(str.padStart(30, "a"));
console.log(str.padEnd(30, "a"));

console.log(str.repeat(2));

console.log(str.replace("labas", "laskdfj"));
console.log(str.replaceAll("labas", "XXXXX"));

console.log(str.trim().split(" "));

const x = 20.26;

console.log(x.toString());

console.log(x.toExponential());

console.log(x.toFixed(2));

console.log(x.toPrecision(2));

console.log(Number("2.88"));
console.log(parseInt("12.55"));
console.log(parseInt("10 years"));

console.log(parseFloat("10.55 asdf"));

console.log(Number.isInteger(25.55));

const v = true;

console.log(v.toString());

console.log(Math.max(20.55, 5, 3));
console.log(Math.min(20.55, 5, 3));
console.log(Math.pow(2, 2));
console.log(Math.pow(9, 1 / 2));
