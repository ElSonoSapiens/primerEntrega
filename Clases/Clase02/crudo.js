class ProductManager {
	constructor() {
		this.products = [];
	}

  #idGenerator() {
		const id = this.products.length === 0 ? 1 : this.products[this.products.length - 1].id + 1;
		return id;
	}

	getProducts() {
		return this.products;
	}

	addProduct(title, description, price, thumbnail, code, stock) {
		const product = {
			title,
			description,
			price,
			thumbnail,
			code,
			stock,
			id: this.#idGenerator(),
		};
		this.products.push(product);
	}
}
/* 
  
  getProductById(productoId){
      this.products.findById(productoId,function(error,producto){
          if(error){
              return 'Error: not found'
          }
          return producto
      })
  }
  
  */

const productos = new ProductManager();
productos.addProduct("hola", "zzz", 300, "foto.jpg", 4444, 20);
productos.addProduct("chau", "hehe", 500, "foto2.jpg", 4445, 15);
console.log(productos.getProducts());
console.log(productos.products.length);