import express from "express";
import ProductManager from "./ProductManager";

const app = express();
const ProductManager = new ProductManager("./products.json");

//express.json()
//express.urlencoded()

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // siempre poner esto primero

app.get("/products", async (req, res) => {
	const products = await ProductManager.getProducts();
	res.json({ products });
});

app.get("/products/:idProd", async (req, res) => {
	const { idProd } = req.params;
	const product = await ProductManager.getProductById(+idProd);
	res.json({ product });
});

app.post("/products", async (req, res) => {
	const obj = req.body;
	console.log("Informacion", obj);
	const newProduct = await ProductManager.createProduct(obj);
	res.json({ message: "product created", product: newProduct });
});

app.listen(8080, () => {
	console.log("escuchando puerto 8080");
});


//app.delete("/products",async,(req,res))=>{}

app.deleteProductsById(idProd){
  const products = await ProductManager.getProducts();
  const productIndex = productsFile.findIndex(p=>p.id===idProd)
  productsFile.splice(productIndex,1)



};