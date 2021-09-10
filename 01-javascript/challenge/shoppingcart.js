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

class Order {
    constructor(nameProducto,price, subtotal, iva, total) {
        this.nameProducto = nameProducto;
        this.price=price;
        this.subtotal = subtotal;
        this.iva = iva;
        this.total = total;
    }
}


class ShoppingCart {
    constructor() {
        this.items = [];
        this.ordr = [];
        this.totalAmount = 0;
        this.totalQuantity = 0;
    }

    add(product, quantity) {
        this.items.push(
            new ShoppingCartItem(product, quantity)
        );

        this._summary()
    }

    remove(productId) {
        this.items = this.items.filter(x =>
            x.product.id !== productId
        );

        this._summary();
    }

    orderCart() {
        for (const item of this.items) {
            this.ordr.push(
                new Order(
                    item.product.name
                    ,item.product.price
                    ,item.product.price*item.quantity
                    ,((item.product.price*item.quantity)*1.18)-(item.product.price*item.quantity)
                    ,(item.product.price*item.quantity)*1.18
                )
            )
        }
        this.items = [];
    }
    _summary() {
        this.totalAmount = 0;
        this.totalQuantity = 0;

        for (const item of this.items) {
            this.totalAmount += item.product.price * item.quantity;
            this.totalQuantity += item.quantity;
        }
    }
    /*get totalAmount() {
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
    }*/
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


/*console.log('Check total amount and quantity', {
    total: cart.totalAmount,
    quantity: cart.totalQuantity
});*/

// remove second product
console.log(`Remove ${products[1].name} product from shopping cart`);
//cart.remove(products[1].id);
console.log(cart);
cart.orderCart();
console.log(cart.Order);

