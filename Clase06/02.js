// const http = require("http") // forma 1 de requerir

import http from "http"; // forma 2

// crearndo servidor utilizando metodo createServer
const server = http.createServer((req, res) => {
	if (req.method === "GET") {
		res.end("Estas en productos");
	} else {
		res.end("Mi primer hola mundo desde backend");
	}
	console.log(req.url);
});

server.listen(8080, () => {
	console.log("Escuchando el puerto 8080");
});

// ExpressJS
