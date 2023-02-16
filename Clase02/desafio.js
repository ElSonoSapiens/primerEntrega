class ProductManager {
	constructor() {
		this.products = [];
	}

	getProducts() {
		return this.products;
	}

	getProductById() {
		return this.products.find((e) => (e = e));
	}

	addProduct(title, description, price, thumbnail, code, stock) {
		const product = {
			title,
			description,
			price,
			thumbnail,
			code,
			stock,
			id: this.#generarId(),
		};
		this.products.push(product);
	}
	#generarId() {
		const id =
			this.products.length === 0
				? 1
				: this.products[this.products.length - 1].id + 1;
		return id;
	}
}

const manager = new ProductManager();

manager.addProduct("Jamon", "Mediterraneo", 500, "thumbnail", 132 , 2);


console.log(manager);

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let find = array.find((e) => (e == e));

console.log(find);
