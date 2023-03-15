import { Router } from "express";
import CartManager from "../CartManager.js";
import __dirname from "../utils.js"

const carts = [];
const router = Router();

const CartManager = new ManagerCart (__dirname+"/carts.json")

/*
// crear carrito
router.post("/", (req, res) => {
	const newCart = await CartManager.createCart()
  res.json = ({cart:newCart})
});
*/

// buscar carrito
router.get("/:cid", async (req, res) => {
  const {cid} = req.params
const cart = await CartManager.getCart(idCart)});
res.json({cart})

// agregar un producto al array del carrito
router.post("/:pid", (req, res) => {
	const obj = req.body;
	carts.push(obj);
	res.json({ message: "Cart added" });
});

//router.put()

//router.delete()

export default router;
