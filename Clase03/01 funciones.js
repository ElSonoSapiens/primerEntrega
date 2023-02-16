function saludar() {
	return "buenos dias";
}

const segundaFun = (a, b) => {
	return a + b;
};

function terceraFun() {
	return function () {};
}

segundaFun(5, 3); // 10seg
saludar(); // 0seg
terceraFun(); // 5seg

console.log(saludar());

// Programacion sincrónica o bloqueante. Va en bloques y no comienza hasta que termina el anterior

// Programacion asincrona - Continúa sin bloquearse, independientemente que hayan otros bloques resolviendose
// Aunque la funcion dure 0seg y sea asincrona, JS la aparta igual.

// En que orden ingresan en el callstack?? => Saca primero la que se resuelve antes, no la que ingresa primero.

// ejemplo de fila con boletos de tickets - buen ejemplo
//// bloqueante => espera a que muestre el boleto
//// asincrono => le dice que busque el boleto y continua con los demas hasta que encuentre el boleto

//// el que encuentre el boleto primero, lo deja pasar antes => perfecto ejemplo

// --- Callbacks => funcion que se va a colocar como parámetro de otra funcion

const array = ["perro", "gato", "raton", "pajaro"];

array.forEach((animal) => `${animal} modificado`);
// array.filter();

// Casi todos los metodos de arreglos necesitan de callbacks
// muy utilizados en JS en terminos generales

function cbFunction(param) {
	return `El usuario escribio: ${param}`;
}

function funDos(p1, callback) {
	const respuesta = callback(p1);
	return respuesta;
}

console.log(funDos("buenas noches", cbFunction));

// esta forma se utiliza al utilizar un solo callback

// Convenciones

// El callback siempre es el ultimo parámetro
// Suele ser una funcion que recibe 2 parametros => Puede recibir un error y el valor en si
// La funcion llama al callback al termina de ejecutar todas sus operaciones
// Si la op fue exitosa, la funcion llamara al callback

const ejemploCallback = (error, resultado) => {
	if (error) {
		//hacer algo con el error
	} else {
		// hacer algo con el resultado
	}
};

// Callback anidados => primera solucion para resolver la asincronía

// Callback Hell => anidado de muchas funciones

//Simular llamado a base de datos

const usuarios = [];
const familiares = [];

function agregarFamiliar(usuarioId, infoFamiliar) {
	usuarios.findById(usuarioId, function (error, usuario) {
		if (error) {
			return error;
		} else {
			familiares.findAllByLastName(
				usuario.lastname,
				function (error, familiares) {
					if (error) {
						return error;
					} else {
						if (familiares.includes(infoFamiliar)) {
							return "este familiar ya existe";
						} else {
							familiares.createOne(infoFamiliar, function (error) {
								if (error) {
									return error;
								} else {
									return "familiar creado con exito";
								}
							});
						}
					}
				}
			);
		}
	});
}

// Tengo que garantizar que se ejecute en orden. Por esta razón se anidan Callbacks
// Actualmente se utilizan callback cuando se utilizan solo 1 en una funcion => ya no se anidan mas

// --- PROMESAS

// la promesa es un objeto especial que tiene un valor
// Si se cumple una promesa => Fulfilled o Resolved
// Si no se cumple la promesa  => Rejected

// Generalmente manipulamos funciones que devuelven promesas => fetch o axius

// Creacion de promesas

function promesaFun(a, b) {
	return new Promise((resolve, reject) => {
		// funcion que retorna promesa => necesita 2 parametros. Resolve y Rejected
		if (a === 0 || b === 0) {
			// si a o b es igual a 0
			reject("promesa rechazada"); // reject
		} else {
			resolve(a + b); // resolve
		}
	});
}

promesaFun(2, 5)
	.then((resultado) => console.log(resultado))
	.catch((error) => console.log(error));

console.log(promesaFun(2, 0));
console.log(promesaFun(0, 5));

// .then => como manipulo la promesa si esta resolve
// .catch => como manipulo la promesa si esta reject
