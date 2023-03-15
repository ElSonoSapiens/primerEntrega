import { Router } from "express";
import  validarUsuario from "../middlewares/userValidations.middleware.js";

const users = [];
const router = Router();

// Middleware => son funciones que se disparan antes de que entre la solicitud
// a nivel de aplicacion => se ejecutan en cualquier ruta
// a nivel de ruta => solo se ejecutan en determinadas rutas (ej: eliminar o modificar un producto)

router.get("/", (req, res) => {
	res.json({ users }); // muestra el array users
});

router.post("/", validarUsuario, (req, res) => {
	// para agregar un usuario
	const obj = req.body;
	users.push(obj);
	res.json({ message: "User added" });
});

//router.put()

//router.delete()

export default router;
