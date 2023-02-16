// .finally() => lo veremos mas adelante

// rest y spread

const animales1 = ["perro", "gato", "pajaro", "raton"];
const animales2 = ["vaca", "toro", "caballo", "cerdo"];

console.log(animales1, animales2); // mantiene los objetos

const animales = [...animales1, ...animales2]; // desarma el array
console.log(animales);
//-
const obj1 = {
	nombre: "Diego",
	apellido: "Hernandez",
};

const obj2 = {
	edad: 33,
	peso: 130,
};
const objUsuario = { ...obj1, ...obj2 }; // Se concatenan en un objeto otros objetos
console.log(objUsuario);
//-

/*
const objUsuarioCopia = objUsuario
objUsuarioCopia.nombre ="Damian"
console.log(objUsuarioCopia);
console.log(objUsuario); 

- Al modificar la copia se modifica el objeto inicial porque apunta al mismo casillero que la original.
- No copia la informacion solo apunta al mismo casillero. Al modificarlo con una variable, la otra variable levanta la misma info.
- La segunda variable deberá apuntar a otro casillero => para eso se utiliza el spread operator
*/
const objUsuarioCopia = { ...objUsuario, curso: "BackEnd", sexo: "masculino" }; // spread operator para que apunte a otro casillero + nueva propiedad para agregar al objeto
objUsuarioCopia.nombre = "Damian";
console.log(objUsuario);
console.log(objUsuarioCopia);

//---

// Rest operator

const functionUno = (param1, param2, ...otroParams) => {
	console.log(otroParams);
};
functionUno(1, 2, 3, 4, 5, 6, 7, 8);

const { nombre, apellido,...otraInfo } = objUsuarioCopia;
console.log(otraInfo);

