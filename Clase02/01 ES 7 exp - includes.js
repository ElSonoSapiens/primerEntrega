//--------------------- ES7 - exponencial ** - array.includes

const expNum = Math.pow(4, 3);
const expNumES7 = 4 ** 3;
console.log(expNum, expNumES7);

// Las 2 se pueden utilizar, ninguna es mala práctica

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let dobles = numeros.map(function (x) {
	return x * 2;
});

console.log(numeros);
console.log(dobles);

let expoDobles = dobles.map((a, b) => b ** a);
let expoDobles2 = dobles.map((a, b) => a ** b);

console.log(expoDobles);

console.log(expoDobles2);

//-- INCLUDES
// array.includes => arroja true o false

const arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arrayNum);
console.log(arrayNum.includes(3));
console.log(arrayNum.includes(11));

let nombres = ["Diego", "Lis", "Juan", "Flor", "ELi"];

if (nombres.includes("Diego")) {
	console.log("Diego está en el array");
} else {
	console.log("No se encuentra");
}
