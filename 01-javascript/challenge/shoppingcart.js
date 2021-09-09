// Se requiere crear una clase que permita gestionar un carrito de compra.

// El carrito de compra debe hacer lo siguiente:

// - Agregar un nuevo producto y la cantidad a comprar
// - Retirar un producto (retira el producto por completo)
// - Calcular el total de la compra
// - Calcular el total de la cantidad en compra

// Los productos son una clase aparte y tienen los siguientes atributos:
// - Nombre del producto
// - Precio Unitario

// * Nota: la cantidad en compra no pertenece a la clase Producto, vea usted la forma
// de resolverlo.

// CRITERIOS
// -----------------
// - Codificar en inglés
// - Usted define cuantas clases crear

// REFERENCIAS
// -----------------
// - Clases en JavaScript https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes

class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    add(product, quantity) {
        this.items.push(
            new ShoppingCartItem(product, quantity)
        );
    }

    // TODO: improve this method using indexOf to avoid array re-creation
    remove(productId) {
        this.items = this.items.filter(x =>
            x.product.id !== productId
        );
    }

    get totalAmount() {
        let result = 0;

        for (const item of this.items) {
            result += item.product.price * item.quantity;
        }

        return result;
    }

    get totalQuantity() {
        let result = 0;

        for (const item of this.items) {
            result += item.quantity;
        }

        return result;
    }
}

// product catalog
const products = [
    new Product(1, "Guitar", 3200),
    new Product(2, "Laptop", 1600),
    new Product(3, "String Guitar", 8)
];

const cart = new ShoppingCart();

// add guitar
console.log(`Add ${products[0].name} product to shopping cart`);
cart.add(products[0], 2);

// add laptop
console.log(`Add ${products[1].name} product to shopping cart`);
cart.add(products[1], 3);

console.log('Check total amount and quantity', {
    total: cart.totalAmount,
    quantity: cart.totalQuantity
});

// remove second product
console.log(`Remove ${products[1].name} product from shopping cart`);
cart.remove(products[1].id);

console.log(cart);
