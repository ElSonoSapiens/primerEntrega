const obt = {
	nombre: "Diego",
	edad: 33,
	setso: "Machin",
};

console.log(obt);

obt.pelo = "negro";

console.log(obt);

const pelo = (color) => (obt.pelo = color);
if (obt.pelo === "") {
	obt.pelo = "Ahora es rubio";
} else {
	obt.pelo = pelo("Violeta");
}

console.log(obt);
//---

// con Constructor

function perro(raza, color, setso, edad) {
	(this.raza = raza), (this.color = color), (this.setso = setso), (this.edad = edad);
}

06