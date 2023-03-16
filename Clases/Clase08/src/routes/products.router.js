import { Router } from "express";
// import validarUsuario from "../middlewares/userValidations.middleware.js";

const products = [];
const router = Router();

// método GET es lo que muestra el browser
router.get("/", (req, res) => {
	res.json({ products }); // muestra el arregro products
});

router.get("/:idProd", (req, res) => {
	const { idProd } = req.params; // por .params viaja el id
	res.send(idProd);
});

router.post("/", (req, res) => {
	const obj = req.body; // guarda lo que viene en req.body
	products.push(obj);
	res.json({ message: "Product added" });
});

//router.put()

//router.delete()

export default router;
