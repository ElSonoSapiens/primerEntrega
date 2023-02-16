// async y await son una forma de .then y .catch
// Es una forma mas sencilla de manipular promesas
// Se trabaja como si fuera sincrónica

// async se coloca al inicio de una funcion, indicando que todo el cuerpo de esa funcion deberá ejecutarse de manera asincrona

async function agregarFamiliar(usuarioId, infoFamiliar) { // se debe colocar async para habilitar los await
	// bloque try - catch 
    // try => intenta hacer esto
    // catch => si try falla, hace esto
  
  try { // lo que está dentro del try es todo lo que sea .then 
		const usuario = await usuarios.findById(usuarioId); // el tener el await dice que la linea debe esperar hasta que la funcion se resuelva
		const familiares = await familiares.findAllByLastName(usuario.lastname);
		if (familiares.includes(infoFamiliar)) {
			return "Este familiar ya existe";
		}
		await familiares.createOne(infoFamiliar);
		return "Familiar creado con éxito";
	} catch (error) {
		return error;
	}
}

// Una vez que te acostumbras al async await, no se vuelve al .then .catch

// Programar 1er after sobre async-await
// LUNES NO HAY CLASES