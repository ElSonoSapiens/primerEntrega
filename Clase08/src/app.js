import express from "express";
import usersRouter from "./routes/users.router.js";
import productsRouter from "./routes/products.router.js";
import __dirname from ".utils/js"
// crear const __dirname() => toca hacerla mientras no se agrege solo


console.log("__dirname",__dirname+"/public"); // ruta absoula

const app = express();

//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// public
app.use(express.static(__dirname + "/public"));

// Routes
app.use("/api/users", usersRouter);
app.use("/api/products", productsRouter);

app.get("/users", (req, res) => {
	res.send("Ruta usuario");
});

app.listen(8080, () => {
	console.log("Escuchando puerto 8080");
});
