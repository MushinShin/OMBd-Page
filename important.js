const ojb = { key: 1, key2: 2, etc };
// const uno = ojb.key;
// const dos = ojb.key2;

// obj desestructuracion
const { key, key2, etc } = ojb;

const a = false;

// array destructuracion
const arr = ["uno", "dos", "tres", "cuatro"];

//const uno = arr[0];
//const dos = arr[1];

const [uno, dos, ...etc] = arr;

//Spread operator

const obj1 = { nombre: "alavrez" };
const obj2 = { apellido: "alejandro" };

//Combinar objeetos en uno nuevo en una sola linea de codigo, sin usar apply, usando sintaxis nueva
//const obj3 = {nombre: obj1.nombre, apellido: obj2.apellido}

const obj3 = { ...obj1, ...obj2 };

//Early Return Statement
if (!a) return console.log("error");
console.log("Sigo");
