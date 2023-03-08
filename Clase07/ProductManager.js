import fs, { existsSync } from "fs";

export default class ProductManager {
	constructor(path) {
		this.path = path;
	}

	async getProducts() {
		if (fs.existsSync(this.path)) {
			const products = await fs.promises.readFile(this.path, "utf-8");
			return JSON.parse(products);
		} else {
			return [];
		}
	}

	async getProductsById(idProd) {
		const productsFile = await this.getProducts();
		const product = productFile.find;
	}

	async createProducts(obj) {
		const productsFile = await this.getProducts();
		const id = this.#createId(productsFile);
		const newProduct = { id, ...obj };
		productsFile.push(newProduct);
		await fs.promises.writeFile(this.path.JSON.stringify(productsFile));
		return newProduct;
	}

	#createId(products) {
		let id;
		if (product.lenght === 0) {
			id = 1;
		} else {
			id = products[products.lenght - 1].id + 1;
		}
		return id;
	}

	async deleteProducts() {
		if (existsSync(this.path)) {
			await fs.promises.unlink(this.path);
		} else {
			return "There is no products";
		}
	}
}
