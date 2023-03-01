const fs = require("fs");

fs.promises
	.writeFile("promesas.txt", "Primera linea Promesas")
	.then(() => {
		console.log("Archivo creado con exito");
	})
	.catch((error) => {
		console.log(error);
	});

// Leer archivo
fs.promises
	.readFile("promesas.txt", "utf-8")
	.then((info) => {
		console.log(info);
	})
	.catch((error) => {
		console.log(error);
	});

const productos = [
	{
		nombre: "iPad",
		precio: 500,
		stock: 10,
	},
	{
		nombre: "iPhone",
		precio: 200,
		stock: 20,
	},
	{
		nombre: "TV",
		precio: 800,
		stock: 10,
	},
	{
		nombre: "Computadora",
		precio: 1200,
		stock: 15,
	},
];

// JSON.stringify(productos)
// JSON.parse()

fs.promises
	.writeFile("promesas.json",JSON.stringify(productos))
	.then(() => {
		console.log("Productos guardados con exito");
	})
	.catch((error) => {
		console.log(error);
	});

	fs.promises
	.readFile("promesas.json", "utf-8")
	.then((info) => {
		console.log(info);
		console.log(JSON.parse(info));
	})
	.catch((error) => {
		console.log(error);
	});






/*
//eliminar archivo
fs.unlink("promesas.txt", (error)=>{
  if(error){
    console.log(error);
  }else{
    console.log("Archivo eliminado con exito");
  }
})
*/
