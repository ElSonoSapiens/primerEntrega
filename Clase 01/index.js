// actividad en clase

// let nombre = "Diego"
// let edad = 33
// let precio = 1000
// let nombreSeries = ["breakingBad","TheOffice","Jackass"]
// let nombrePeliculas = ["Gladiador","SpiderMan", "Matrix"]

let usuarios =[
    {
    nombre:"Ramon",
    edad : 33,
    precio: 1000,
    nombreSeries: ["breakingBad","TheOffice","Jackass"],
    nombrePeliculas : ["Gladiador","SpiderMan", "Matrix"]
    },
    {
    nombre:"Lis",
    edad : 35,
    precio: 1500,
    nombreSeries: ["Emily","TheOffice","JarriPoter"],
    nombrePeliculas : ["Sascuach","SpiderMan", "Everlong"]
    }
]

console.log("hola");
console.log(usuarios.edad)

//---------------- Repaso de info => .map

let numeros = [1,2,3,4,5,6,7,8,9]
let dobles = numeros.map(function(x){
    return x*2;
})

console.log(numeros)
console.log(dobles)

let expoDobles = dobles.map((a,b)=>b**a)
let expoDobles2 = dobles.map((a,b)=>a**b)

console.log(expoDobles)

console.log(expoDobles2)