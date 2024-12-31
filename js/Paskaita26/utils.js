// const lastName = "Pavardenis";
const lastName = "Pavardenis";

export function externalFunction(name) {
  console.log("External function", name);
}

export function externalFunction2() {
  console.log("External function 2", lastName);
}

export default function mainFunction() {
  console.log("Main function");
}
