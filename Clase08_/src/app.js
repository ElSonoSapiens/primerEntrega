import express from "express";
import usersRouter from "./routes/users.router.js";
import productsRouter from "./routes/products.router.js";

const app = express();

// métodos clave para recibir info sin inconvenientes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//

// Routes
app.use("/api/users", usersRouter);
app.use("/api/products", productsRouter);

// Endpoint creado con express
/*  
app.get("/users", (req, res) => {
	res.send("ruta users");
});
*/

app.listen(8080, () => {
	console.log("escuchando al puerto 8080");
});
