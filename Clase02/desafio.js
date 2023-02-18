class ProductManager {
	#generarId() {
		const id = this.products.length === 0 ? 1 : this.products[this.products.length - 1].id + 1;
		return id;
	}

	#noRepeatCode() {
		const code = this.#generarId()+"a"
		return code;
	}

	constructor() {
		this.products = [];
	}

	arrayProducts = this.products

	getProducts() {
		return this.products;
	}

	getProductById(id) {

		const productById = this.products.find((id) => id === id);
		return productById;
	}

	addProduct(title, description, price, thumbnail, code, stock) {
		const product = {
			title,
			description,
			price,
			thumbnail,
			code: this.#noRepeatCode(),
			stock,
			id: this.#generarId(),
		};
		this.products.push(product);
	}
}


const manager = new ProductManager();

manager.addProduct("Jamon", "Mediterraneo", 500, "thumbnail", 1, 10);
manager.addProduct("Queso", "Suizo", 600, "thumbnail", 2, 15);
manager.addProduct("Pan", "Arabe", 750, "thumbnail", 3, 20);
manager.addProduct("Mayonesa", "Pura de huevo", 430, "thumbnail", 4, 25);

// console.log(getProducts());
console.log(manager);
/*
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let find = array.find((e) => e == e);

console.log(find);
*/

console.log(arrayProducts);

const productById = this.products.find((id) => id === 1);