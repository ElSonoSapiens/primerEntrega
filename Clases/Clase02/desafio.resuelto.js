class ProductManager {
  #codeGenerator(codeLength = 15) {
    const numeros = "0123456789";
    const letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numYLetras = numeros + letras;
    let code = "";
    for (let i = 0; i < codeLength; i++) {
      const random = Math.floor(Math.random() * numYLetras.length);
      code += numYLetras.charAt(random);
    }
    return code;
  }

  #idGenerator() {
    const id =
      this.products.length === 0
        ? 1
        : this.products[this.products.length - 1].id + 1;
    return id;
  }

  constructor() {
    this.products = [];
  }

  addProduct(product) {
    try {
      if (
        product.title &&
        product.description &&
        product.price &&
        product.thumbnail &&
        product.stock
      ) {
        return this.products.push({
          id: this.#idGenerator(),
          code: this.#codeGenerator(),
          ...product,
        });
      } else {
        if (!product.title) {
          throw new Error(`Falta el title del producto.`);
        } else if (!product.description) {
          throw new Error(`Falta la descripcion del producto.`);
        } else if (!product.price) {
          throw new Error(`Falta el precio del producto.`);
        } else if (!product.thumbnail) {
          throw new Error(`Falta la imagen del producto.`);
        } else if (!product.stock) {
          throw new Error(`Falta el stock del producto.`);
        }
      }
    } catch (error) {
      console.log(`Problema agregando producto: ${error.message}`);
    }
  }

  getProducts() {
    try {
      console.log(this.products);
    } catch (error) {
      console.log(`Error obteniendo todos los productos: ${error.message}`);
    }
  }

  getProductById(id) {
    try {
      const idProduct = this.products.filter(product => product.id === id);
      if (idProduct.length > 0) {
        console.log(idProduct[0]);
      } else throw new Error(`Not found`);
    } catch (error) {
      console.log(
        `Problema al buscar producto con el id ${id}: ${error.message}`
      );
    }
  }
}

const lautaro = new ProductManager();

//lautaro.getProducts();
lautaro.addProduct({
  title: "Joystick PS5",
  description: "Joystick para consola PS5",
  price: 25000,
  thumbnail:
    "https://images.fravega.com/f1000/a23c2e9cbe114eca833fc5f7288457fc.jpg",
  stock: 30,
});
lautaro.addProduct({
  title: "Auriculares PS5",
  description: "Auriculares compatibles con PS5 y computadoras",
  price: 42000,
  thumbnail:
    "https://arsonyb2c.vtexassets.com/arquivos/ids/348062/PS5_WHS_Pshot_A.jpg?v=637363806123470000",
  stock: 22,
});
lautaro.getProducts();
lautaro.getProductById(2);

console.log(lautaro.products[0].code)


lautaro.getProductById(11);