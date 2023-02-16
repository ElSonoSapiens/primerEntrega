const objetos = [
	{
		manzanas: 3,
		peras: 2,
		carne: 1,
		jugos: 5,
		dulces: 2,
	},
	{
		manzanas: 1,
		sandias: 1,
		huevos: 6,
		jugos: 1,
		panes: 4,
	},
];

console.log(objetos)

let tiposProductos = Object.entries(objetos)

console.log(tiposProductos)

let llaveProductos = tiposProductos.reduce((a,b)=>a+b)

console.log(llaveProductos)

let nuevoArray = llaveProductos.map((a,b)=>b+a)

console.log(nuevoArray)

//---

let nombres = ["Diego", "Lis", "Juan", "Flor", "ELi"];

if (nombres.includes("Diego")) {
	console.log("Diego está en el array");
} else {
	console.log("No se encuentra");
}


//---------

let numLet = {
	Nombre: "Diego",
	Edad: 33,
	Casado: false,
};

let parLlaveValor = Object.entries(numLet);
console.log(parLlaveValor);

let propsOnly = Object.keys(numLet);
console.log(propsOnly);

let valueOnly = Object.values(numLet);
console.log(valueOnly);

let reduceValues = valueOnly.reduce((a, b) => a + b);
console.log(reduceValues);
