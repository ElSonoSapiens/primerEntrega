//------------------- ES 9 .finally() - rest y spread
let obj1 = {
	Nombre: "Diego",
	Edad: 33,
	Sexo: "onvre",
};
let obj2 = {
	Nombre: "Lissie",
	Edad: 31,
	Sexo: "Mulher",
};

// let { Nombre, Edad } = obj1;

// console.log(Nombre);
// console.log(Edad);

console.log(obj1.EdadSexo);

let obj3 = { ...obj1, ...obj2 };

console.log(obj3);

// Si las propiedades tienen el mismo nombre lo valores se superponen

let obj4 = {
	a: 1,
	b: 2,
	c: 3,
	d: 4,
	e: 5,
	f: 6,
};

let { a, b, ...rest } = obj4;

console.log(obj4);
console.log(a);
console.log(b);
// console.log(c); => no definido, porque no se desestrucutró 
console.log(rest);
