class Persona{
    constructor(nombre){
        this.nombre = nombre
    }
static especie ="humano";
saludar = () =>{
console.log(`Hola, soy ${this.nombre}, un guston`)
}
getEspecie = () => {
    console.log(`Aunque no parezca, soy un ${Persona.especie}`)
}
}

let persona1 = new Persona("Diego");
let persona2 = new Persona("Lissie");

persona1.saludar();
persona2.saludar();

persona1.getEspecie();
persona2.getEspecie();

//--------------------- ES7 - exponencial ** - array.includes


let nombres = ["Diego","Lis","Juan","Flor","ELi"]

if(nombres.includes("Dieg")){
    console.log("Diego está en el array")
}
else{
    console.log("No se encuentra")
}

//-------------------- ES8 async await - Object.entries values y keys

let numLet ={
    Nombre:"Diego",
    Edad:33,
    Casado:false
}
let numLet2 ={Nombre:"Lissie",Edad:31,Casado:false} 

let parLlaveValor = Object.entries(numLet);
console.log(parLlaveValor);

let propsOnly = Object.keys(numLet)
console.log(propsOnly);

let valueOnly = Object.values(numLet)
console.log(valueOnly);

//------------------- ES 9 .finally() - rest y spread

let {Nombre} = numLet;
let numLet3 = {...numLet,...numLet2}

console.log(numLet3)

let numLet4 ={
    a:1,
    b:2,
    c:3
}

let{a,...rest} = numLet4
console.log(rest)