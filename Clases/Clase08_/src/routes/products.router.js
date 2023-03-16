import { Router } from "express";

const products = [];
const router = Router();

router.get("/", (req, res) => {
	//res.send("Products");
	res.json({ products });
});

router.get("/:idProd", (req, res) => {
	const { idProd } = req.params;
	res.send(idProd);
});

router.post("/", (req, res) => {
	const obj = req.body;
	products.push(obj);
	res.json({ message: "product added" });
});
// router.put()

// router.delete()

export default router;
