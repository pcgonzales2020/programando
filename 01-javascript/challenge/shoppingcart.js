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

class Order {
    constructor(shoppingItems) {
        this.total = 0;
        this.iva = 0;
        this.subTotal = 0;
        this.lines = [];

        this._prepare(shoppingItems);
    }

    _prepare(shoppingItems) {
        for (const shoppingItem of shoppingItems) {
            const orderLine = new OrderLine(shoppingItem.product, shoppingItem.quantity);
            this.lines.push(orderLine);

            this.total += orderLine.total;
        }

        this.subTotal = this.total / 1.18;
        this.iva = this.total - this.subTotal;
    }
}

class OrderLine {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
        this.total = this.product.price * this.quantity;
    }
}

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
        this.totalAmount = 0;
        this.totalQuantity = 0;
    }

    add(product, quantity) {
        this.items.push(
            new ShoppingCartItem(product, quantity)
        );

        this._summary();
    }

    remove(productId) {
        this.items = this.items.filter(x =>
            x.product.id !== productId
        );

        this._summary();
    }

    purchase() {
        const order = new Order(this.items);

        /* this.items = [];
        this.totalAmount = 0;
        this.totalQuantity = 0; */

        return order;
    }

    _summary() {
        this.totalAmount = 0;
        this.totalQuantity = 0;

        for (const item of this.items) {
            this.totalAmount += item.product.price * item.quantity;
            this.totalQuantity += item.quantity;
        }
    }

    // other option in runtime
    /* get totalAmount() {
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
    } */
}

// product catalog
const products = [
    new Product(1, 'Guitar', 3200),
    new Product(2, 'Laptop', 1600),
    new Product(3, 'String Guitar', 8)
];

const cart = new ShoppingCart();

// add guitar
console.log(`Add ${products[0].name} product to shopping cart`);
cart.add(products[0], 2);

// add laptop
console.log(`Add ${products[1].name} product to shopping cart`);
cart.add(products[1], 3);

/* console.log('Check total amount and quantity', {
    total: cart.totalAmount,
    quantity: cart.totalQuantity
}); */

// remove second product
// console.log(`Remove ${products[1].name} product from shopping cart`);
// //cart.remove(products[1].id);
// console.log(cart);

console.log(cart);

const order = cart.purchase();
console.log(order);

console.log(cart);
