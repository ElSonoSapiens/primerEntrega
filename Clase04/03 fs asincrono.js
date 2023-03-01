const fs = require("fs");
/*
fs.writeFile("archivo2.txt", "primera linea asincrona", (error) => {
	if (error) {
		console.log(error);
	} else {
		console.log("archivo creado con exito");
	}
});
*/

// Leer archivo
fs.readFile("archivo2.txt", "utf-8", (error,info) => {
	if (error) {
		console.log("Prueba error",error);
	} else {
		console.log(info);
	}
});

// El primer parámetro siempre es el error y el segundo la respuesta.

//eliminar archivo
fs.unlink("archivo2.txt", (error)=>{
  if(error){
    console.log(error);
  }else{
    console.log("Archivo eliminado con exito");
  }
})