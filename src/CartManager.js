import fs, { existsSync } from "fs";

export default class CartManager {
	constructor(path) {
		this.path = path;
	}

	async getCarts(){
		if (fs.existsSync(this.path)) {
			const cartsFile = await fs.promises.readFile(this.path,"utf-8")
		return JSON.parse(cartsFile)
	}else{
		return[]
	}
}

	async getCart(id){
	const cartsFile = await this.getCarts()
const cart = cartFile.find((cart)=> cart.id ===id)
if(cart){
	return cart
}else{
	return "Cart not found"
}
/*
	async createCart(){
		const cartsFile = await thjis.getCarts()
		const newCart = {
			id.this.#idGenerator(cartsFile)
			products:[]
		}
	}
*/	
	idGenerator = (carts) => {
		let id = carts.length === 0 ? 1 : carts[carts.length - 1].id + 1;
		return id;
	};

}}