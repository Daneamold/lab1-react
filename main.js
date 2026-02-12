//7.1
console.log("7.1")
// main.js

const { adunare, scadere } = require("./mathUtils.js");

console.log(adunare(5, 3));
console.log(scadere(5, 3));


//7.2

//7.3

//7.4
const salutPersonalizat = require("./salutari.js");

salutPersonalizat("Daniil");

const utilizator = require("./dateUtilizator.js"); // require pentru CommonJS

console.log(utilizator.nume);
console.log(utilizator.varsta);
console.log(utilizator.tara);


