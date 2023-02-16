//-- ES8 async await - Object.entries values y keys

// async - await => Se ve en la próxima clase.

//-- Object.entries values y keys
/* Toman la info de de objetos y las pasan a arreglos */

const obj = {
	nombre: "Diego",
	apellido: "Hernandez",
	edad: 33,
	casado: false,
};

//--
// Object.entries() => cada elemento de un objeto lo convierte en arreglos dentro de un arreglo

const parLlaveValor = Object.entries(obj);
console.log(parLlaveValor);

const objArray = Object.entries(obj);
const objArrayMod = objArray.map(([key, value]) => [key, `${value} modificado`]);
console.log(objArrayMod);

// Object.fromEntries => convierte un array en objeto

const objMod = Object.fromEntries(objArrayMod);
console.log(objMod);
//--

//-- Object.keys() => utiliza las claves del objeto y los convierte en un array

const propsOnly = Object.keys(obj);
console.log(propsOnly);

//-- Object.values() => utiliza los valores del objeto y los convierte en un array

const valueOnly = Object.values(obj);
console.log(valueOnly);

//-- Object.reduce()

const reduceValues = valueOnly.reduce((a, b) => a + b);
console.log(reduceValues);
