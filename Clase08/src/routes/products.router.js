import {Router} from "express";

const router = Router();

router.get("/",(req,res)=>{
  res.send("Ruta products")
})

router.get("/:idProd",(req,res)=>{
  const {idProd} = a
  res.send(idProd)
})

router.post("/",(req,res)=>{
  const obj = req.body
  products.push(obj)
  res.json({message:"Product added"})
})

router.post("/",(req,res)=>{
  const obj = req.bodyusers.push(obj)
  res.json({message:"User added"})
})


//router.put()

//router.delete()

export default router