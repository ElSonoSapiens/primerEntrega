class Persona {
	constructor(nombre) {
		this.nombre = nombre;
	}
	static especie = "humano";
	saludar = () => {
		console.log(`Hola, soy ${this.nombre}, un guston`);
	};
	getEspecie = () => {
		console.log(`Aunque no parezca, soy un ${Persona.especie}`);
	};
}

let persona1 = new Persona("Diego");
let persona2 = new Persona("Lissie");

persona1.saludar();
persona2.saludar();

persona1.getEspecie();
persona2.getEspecie();

//--------------------- ES7 - exponencial ** - array.includes

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

let nombres = ["Diego", "Lis", "Juan", "Flor", "ELi"];

if (nombres.includes("Diego")) {
	console.log("Diego está en el array");
} else {
	console.log("No se encuentra");
}

//-------------------- ES8 async await - Object.entries values y keys

let numLet = {
	Nombre: "Diego",
	Edad: 33,
	Casado: false,
};
let numLet2 = {
	Nombre: "Lissie",
	Edad: 31,
	Casado: false,
};

let parLlaveValor = Object.entries(numLet);
console.log(parLlaveValor);

let parLlaveValor2 = Object.entries(numLet2);
console.log(parLlaveValor2);

let propsOnly = Object.keys(numLet);
console.log(propsOnly);

let valueOnly = Object.values(numLet);
console.log(valueOnly);

let reduceValues = valueOnly.reduce((a, b) => a + b);
console.log(reduceValues);

