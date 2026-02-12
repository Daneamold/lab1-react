//1.1
console.log("1.1")
var putere = 160;
let brand ='150';
const car = true;
//1.2
console.log("1.2")
function one(variabila){
    return typeof(variabila)
}
console.log(one(brand))
//1.3
console.log("1.3")
function convertire(a){
    if (typeof(a) == 'number'){
        return a.toString();
    }else{
        return Number(a);
    }
}

let result = convertire(brand);
console.log(typeof result);

//1.4
function nume_prenume(a,b){
    return `nume = ${a}, prenume = ${b}`
}
console.log(nume_prenume("Moldovanu", "Daniil"))

//1.5
console.log("1.5")
let temp
let var1 = 10;
let var2 = 20;

function switcher (a, b){
    temp = a;
    a = b;
    b = temp;
    return `var1 = ${a}, var2 = ${b}`
}
console.log(switcher(var1, var2));

//1.6
console.log("1.6")
function undef_or_null (a){
    if (a === undefined){
        return undefined
    }else if (a === null){
        return null
    }else{
        return a
    }
}

console.log(undef_or_null(20))

//1.7
console.log("1.7")
let masina = {
    marca:"bwm",
    anul: 2010,
    benzina: true
}
delete masina.anul;
masina.cai_putere = 256;
console.log(masina)

//1.8
console.log("1.8")

let array1 = [10, 15.2, "hello", true, null];

array1.forEach(n => console.log(n))

//2.1
console.log("2.1")
function suma(a,b){
    return a+b;
}
console.log(suma(23, 22))

//2.2
console.log("2.2");

function aria (a,b){
    if(b === undefined){
        b=1;
        return a*b;
    }else{
        return a*b;
    }
}
console.log(aria(10,2 ))

//2.3
console.log("2.3")
let anonim = (a) => a*a;
console.log(anonim(11));

//2.4
console.log("2.4")

function to_upper(a){
    return a.toUpperCase();
}

console.log(to_upper("salut"));

//2.5
console.log("2.5")

let dublul = (a) => a*2;
let patratul = (a) => a*a;

function afis_res(b){
    let result = {};
    result.dublul = dublul(b);
    result.patratul = patratul(b);
    return result
}
console.log(afis_res(6))

//2.6
console.log("2.6");

suma = (a,b) => a+b;
console.log(suma(4, 4));

//2.7
console.log("2.7")

let array2 = [2, 4, 6, 8];
let triple = (a) => a*3;

function double_func(array, functie){
    let result = [];

    array.forEach(element => result.push(functie(element)))
    return result;
}

console.log(double_func(array2, triple))

//3.1
console.log("3.1");
let car1 = {
    marca: "bmw",
    model: "5 series",
    an: 1994
}

//3.2
console.log("3.2")

console.log(car1.marca);
console.log(car1["marca"])

//3.3
console.log("3.3")
car1.culoare = "neagra";
car1.an = 1995;

//3.4
console.log("3.4")

delete car1.model;

//3.5
console.log("3.5");

//3.6
console.log("3.6");

// car1.descriere = function(){
//     return `Masina este: ${car1.culoare}, ${car1.marca}, ${car1.an}`
// }
car1.descriere = function(){
    return Object.keys(car1)
        .filter(k => typeof car1[k] != "function")
        .map(k => `${k}: ${car1[k]}`)
        .join(", ")
}

console.log(car1.descriere())

//3.7
console.log(3.7)

let persoana = {
    nume: "Vlad",
    varsta: 23
}
function pers_func(obiect){
    return `${obiect.nume}, ${obiect.varsta}`
}

console.log(pers_func(persoana));

//3.8
console.log("3.8");

function verifica_daca_contine(){
    if("culoare" in car1){
        return `culoarea este ${car1.culoare.toUpperCase()}`
    }else {
        return `nu are asa proprietate`
    }
}console.log(verifica_daca_contine())

//3.9
console.log("3.9")

let casa = {
    tip: "apartament",
    etaj: 5,
    adreas: {
        strada: "str. Paris",
        oras: "Chisinau"
    }
}

//3.10

console.log("3.10")

function add_student(nume_prenume, clasa, liceu){
    return {
        nume_prenume,
        clasa,
        liceu
    }
}
let student = add_student("Mihai Moraru", 10, "Gogol");
console.log(student)

//3.11

console.log("3.11")

let car1clone = Object.assign({}, car1);
console.log(car1clone);

//3.12

console.log("3.12")

let calculator = {
    adunare: function(a, b){
        a+b
    },
    scadere: function(a,b){
        a-b
    },
    inmultire: function(a,b){
        a*b
    },
    impartire: function(a,b){
        a/b
    }
}

//3.13

console.log("3.13")

let {liceu, clasa} = student
console.log(liceu, clasa)

//4.1
let main_array = ["Chisinau", "Cimislea", "Balti"];
console.log(main_array[main_array.length-1], main_array[0])


//4.2
console.log("4.2")

main_array.unshift("Taraclia");
main_array.push("Drochia");
console.log(main_array)
main_array.splice(0, 1);
console.log(main_array)

//4.3
console.log("4.3")
let culori = ["alb", "negru", "galben", "rosu", "verde"]

for(let i=0; i < culori.length; i++){
    console.log(culori[i]);
}

//4.4
console.log("4.4")
animale = ["caine", "pisica", "leu"]

animale.forEach(animal => console.log(`in zoo este ${animal}`));

//4.5
console.log("4.5")
let numere = [4,5,6,10,11,32,43,50,9]

bigger_then_10 = numere.filter((number) => number > 10).map((number) => number)
console.log(bigger_then_10)

//4.6
console.log("4.6")
numere.sort((a,b) => a-b)
console.log(numere)

//4.7
console.log("4.7")
function patrat_array(array){
    return array.map((number) => number*number)
}

let array_la2 = patrat_array([10, 2, 3, 4, 5])
console.log(array_la2)

//4.8
console.log("4.8")
let suma_array = [10,23,34,23,43,12,32]
    console.log(suma_array.reduce((acc, number) => acc+number))

//4.9
console.log("4.9")

function include_verify(array, element_cautat){
    if(array.includes(element_cautat)){
       return `array include ${element_cautat} si el se afla pe indexul ${array.indexOf(element_cautat)}`
    }else{
        return "acest element nu este in array"
    }
}

console.log(include_verify([4,6,3,8,10], 3))

//4.10
console.log("4.10")
let cuvinte1 = ["salut", "jos", "pleaca"];
let cuvinte2 = ["masina", "casa"]

cuvinte_combined = [...cuvinte2, ...cuvinte1]

console.log(cuvinte_combined)

//4.11
console.log("4.11");

let bid_array = [[1,2],[3, 4]];
console.log(bid_array[0][1])

//4.12

console.log("4.12")

function delete_reapeted(array){
    return [...new Set(array)]
}
console.log(delete_reapeted([10,3,4,4,10,5,6,9]))

//4.13
console.log("4.13")
let slice_array = [1,2,3,4,5,6,7,8,9]
let sliced_array = slice_array.slice(2,7)
sliced_array.splice(3,1)
console.log(sliced_array)

//5.1

console.log("5.1");

let heading1 = document.getElementById("titlu")
heading1.innerText = "Cea mai rapida masina";

//5.2
console.log("5.2")

let liste_detalii = document.querySelectorAll("li")
liste_detalii.forEach(li => li.style.color = "blue")

//5.3
console.log("5.3")

let pnew = document.createElement("p")
pnew.textContent = "paragraf nou"
document.getElementById("container").appendChild(pnew)

//5.4

console.log("5.4")
image1 = document.getElementById("imagine");
image1.src = "https://a.d-cd.net/aYAAAgJ4juA-1920.jpg"

//5.5
document.getElementById("box").classList.add("newClass");

//5.6

console.log("5.6");
let pRemove = document.getElementById("paragraf");
pRemove.remove()

//5.7
console.log("5.8")

let buttonChanger = document.getElementById("btnSchimbaH2");
let subtitlu = document.getElementById("subtitlu");

buttonChanger.addEventListener("click", () => subtitlu.innerText = "textul 2222")

//5.8
console.log("5.9");

document.getElementById("inputText").addEventListener("input", (e) => document.getElementById("outputText").innerText = e.target.value)

//5.9
console.log("5.9")

let listaCopii = document.getElementById("listaCopii");

let primul = listaCopii.firstElementChild.textContent;
let ultimul = listaCopii.lastElementChild.textContent;

document.getElementById("firstLast").textContent = `Primul ${primul}, ultimul ${ultimul}`;


//5.10
console.log("5.10");

let btnToggle = document.getElementById("btnToggle");
btnToggle.addEventListener("click", () => {document.getElementById("toggleBox").classList.toggle("active")})

//5.11
// console.log("5.11")
//
// let table = document.createElement("table")
//
// for(let i=0; i<3; i++){
//     let tr = document.createElement("tr")
//     for  (let j=0; j<2; i++){
//         let td = document.createElement("td")
//         td.textContent = `R${i+1}C${j+1}`
//         tr.appendChild(td)
//     }
//     table.appendChild(tr);
// }
// document.getElementById("tabelContainer").appendChild(table)

//5.12
console.log("5.12")
let n = 1;
document.getElementById("btnAdauga").addEventListener("click", () => {
    let liAdd = document.createElement("li");
    liAdd.textContent = `${n++}`
    document.getElementById("listaDinamica").appendChild(liAdd)
})

//6.1
console.log("6.1")
setTimeout(() => {
    console.log("3 sec")
}, 3000);

//6.2
console.log("6.2")
let count = 1;

let interval = setInterval(() => {
    console.log(count);
    count++;

    if (count > 5) {
        clearInterval(interval);
    }
}, 1000);

//6.3

function salut(callback) {
    console.log("salut");
    callback();
}

salut(() => {
    console.log("callback");
});

//6.4

function promisiune() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promisiune rezolvată!");
        }, 2000);
    });
}

promisiune().then(result => console.log(result));

//6.5

function promisiune() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("promisiune rezolvata");
        }, 2000);
    });
}

promisiune().then(result => console.log(result));

//6.6

async function executa() {
    let rezultat = await promisiune();
    console.log(rezultat);
}

executa();

//6.7

function pas1() {
    return Promise.resolve("Pas 1");
}

function pas2() {
    return Promise.resolve("Pas 2");
}

function pas3() {
    return Promise.resolve("Pas 3");
}

pas1()
    .then(result => {
        console.log(result);
        return pas2();
    })
    .then(result => {
        console.log(result);
        return pas3();
    })
    .then(result => {
        console.log(result);
    });


//6.8

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log("Eroare:", error);
    });

//6.9

let p1 = Promise.resolve("Primul");
let p2 = Promise.resolve("Al doilea");
let p3 = Promise.reject("Eroare la al treilea");

Promise.all([p1, p2])
    .then(results => console.log("Promise.all:", results));

Promise.allSettled([p1, p2, p3])
    .then(results => console.log("Promise.allSettled:", results));



