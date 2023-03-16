// setTimeout y setInterval son Funciones nativas de JS

// setTimeout => funciona de manera asíncrona y no detiene el proceso

setTimeout(() => {
	console.log("Set Timeout");
}, 2000);
console.log("Ultimo log");

setTimeout(() => {
	console.log("Set Timeout");
}, 0);
console.log("Ultimo log");

// setInterval => misma estructura que timeout, la diferencia es que repite el mismo comando cada x segundos

setInterval(() => {
	console.log("Set Timeout");
}, 2000);
