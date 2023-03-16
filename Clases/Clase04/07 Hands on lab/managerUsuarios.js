const fs = require("fs");

const path = "Usuarios.json";

class ManagerUsuarios {

constructor (){
  this.path=path
}

	consultarUsuarios = async () => {
		if (fs.existsSync(path)) {
			const infoArchivo = await fs.promises.readFile(path, "utf-8");
			const usuarios = JSON.parse(infoArchivo);
			return usuarios;
		} else {
			console.log("Archivo no existe");
			return [];
		}
	};

	crearUsuario = async (usuario) => {
		const usuarios = await this.consultarUsuarios();
    let id
		if (usuarios.length === 0) {
			id = 1;
		} else {
			id = usuarios[usuarios.length - 1].id + 1;
		}
		const nuevoUsuario = { id, ...usuario };
		usuarios.push(nuevoUsuario);
		await fs.promises.writeFile(path, JSON.stringify(usuarios));
		return nuevoUsuario;
	};
/*
  eliminarUsuario = async (usuario) => {
		const usuarios = await this.consultarUsuarios();
		if (usuarios.id === id) {
    usuarios.pop(eliminarUsuario);
		await fs.promises.writeFile(path, JSON.stringify(usuarios));
		return eliminarUsuario;
	};*/

  
}

const usuario1 = {
	nombre: "Diego",
	apellido: "Hernandez",
};

const usuario2 = {
	nombre: "Lissie",
	apellido: "Novoa",
};

async function prueba() {
	const manager = new ManagerUsuarios();
	// await manager.crearUsuario(usuario2);
  // await manager.eliminarUsuario(usuario1);
	const usuarios = await manager.consultarUsuarios();
	console.log(usuarios);
}

prueba();
