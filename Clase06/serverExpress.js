import express from "express";

const app = express();

// cualquier info puede viajar por cualquier propiedad

// req.params => info de un producto en particular por ej: un id
// req.query => info mas generalizadas y para segmentar mas la búsqueda
// req.body => info del usuario

app.get("/",(req,res)=>{
  // req.params // req.query // req.body
  console.log(req.query);

  const {limite, orden} = req.query
  console.log(limite, orden);
  res.send("Hola con express")
})

app.get("/productos/:idProductos",(req,res)=>{ // los : indica que lo que se recibe va a ser dinámico
  console.log(req.params);
  res.send("Hola con productos")
})



app.get("/usuarios",(req,res)=>{
  res.send("Hola con usuarios")
})


app.listen(8080, () => {
	console.log("Escuchando puerto 8080");
});
