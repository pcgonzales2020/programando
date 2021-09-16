class ProductItem {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class BudgetItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
        this.total = this.product.price * this.quantity;
    }
}

class Budget {
    constructor() {
        this.cost = 0
        this.income = 0
        this.utility = 0;
        this.items = [];
    }

    calculate() {
        this.cost = 0
        this.income = 0
        this.utility = 0;

        for (const line of this.lines) {
            this.cost += line.total;
        }

        this.income = (this.cost  * 1.18)* 1.35;
        this.utility = this.income - this.cost;
    }

    add(product, quantity) {
        this.items.push(new BudgetItem(product, quantity));
    }
}

//#region productItems
const productItems = [
    new ProductItem(0, "CPU Core 5", 1150),
    new ProductItem(1, "Cpu Core 4", 950),
    new ProductItem(2, "Cpu Core 3", 750),
    new ProductItem(4, "Monitor LED", 550),
    new ProductItem(5, "Monitor Plasma", 650),
    new ProductItem(6, "Teclado Ergonomico", 30),
    new ProductItem(7, "Teclado Gamer", 45),
    new ProductItem(8, "Mouse Standard", 15),
    new ProductItem(9, "Mouse Gamer", 25),
    new ProductItem(10, "Parlante", 55)
];
//#endregion
const budget = new Budget();

budget.add(productItems[0], 2);
budget.add(productItems[4], 3);
budget.add(productItems[6], 5);

budget.calculate();
console.log(budget);

