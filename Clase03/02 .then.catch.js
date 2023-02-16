function agregarFamiliar(usuarioId, infoFamiliar) {
	usuarios
		.findById(usuarioId)
		.then((usuario) => {
			return familiares.findAllByLastName(usuario.lastname);
		})
		.then((familiares) => {
			if (familiares.includes(infoFamiliar)) {
				return "este familiar ya esxite";
			} else {
				return familiares.createOne(infoFamiliar);
			}
		})
		.then(() => {
			return "Familiar creado con exito";
		})
		.catch((error) => {
			return error;
		});
}

// TODO se debe resolver dentro del Scope o bloque
