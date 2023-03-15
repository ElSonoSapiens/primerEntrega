const validarUsuario = (req, res, next) => {
	const user = req.body;
	if (user.Nombre === "Diego") {
		res.send("Hermano sos crack");
	} else {
		next(); // next() sirve para que el flujo continúe su curso
	}
};

export default validarUsuario