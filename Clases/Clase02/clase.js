class Persona {
	constructor(nombre) {
		this.nombre = nombre;
	}
	static especie = "humano";
	saludar = () => {
		console.log(`Hola, soy ${this.nombre}, un guston`);
	};
	getEspecie = () => {
		console.log(`Aunque no parezca, soy un ${Persona.especie}`);
	};
}

let persona1 = new Persona("Diego");
let persona2 = new Persona("Lissie");

persona1.saludar();
persona2.saludar();

persona1.getEspecie();
persona2.getEspecie();
