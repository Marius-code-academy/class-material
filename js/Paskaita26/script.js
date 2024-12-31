// import { externalFunction, externalFunction2 } from "./utils.js";
import manoKitoksPavadinimas, { externalFunction as naujasVardas, externalFunction2 } from "./utils.js";
import * as someFileStuff from "./someFile.js";
import { darVienaFunkcija } from "./darVienas.js";

function doStuff() {
  console.log("Doing stuff");
}
manoKitoksPavadinimas();
doStuff();
naujasVardas("name");
externalFunction2();
someFileStuff.someArrowFunction();
console.log(someFileStuff.someNumber);
darVienaFunkcija();
