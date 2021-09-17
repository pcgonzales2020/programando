
const category = {
    computer: 0
};

const materialTypes = {
    powerSupply: "powerSupply",
    disk: "disk",
    memory: "memory",
    processor: "processor",
};

class RawMaterialTypeCategory {
    constructor(name, rawMaterialTypes) {
        this.name = name;
        this.rawMaterialTypes = rawMaterialTypes;
    }
}

class Product {
    constructor(name, cost, price, utility) {
        this.name = name;
        this.price = price;
        this.cost = cost;
        this.utility = utility;
    }
}

class RawMaterial {
    constructor(name, materialType, cost) {
        this.name = name;
        this.materialType = materialType;
        this.cost = cost;
    }
}

class ProductProductionMaterial {
    constructor(material, quantity) {
        this.material = material;
        this.quantity = quantity;
        this.cost = material.cost * quantity;
    }
}

class ProductProduction {
    constructor() {
        this.materials = [];
        this.rawMaterialTypesCategory = [
            new RawMaterialTypeCategory(category.computer, [
                materialTypes.memory,
                materialTypes.processor,
                materialTypes.powerSupply
            ]),
        ];
    }

    add(material, quantity) {
        this.materials.push(new ProductProductionMaterial(material, quantity));
    }

    create(productName, category) {
        let cost = 0,
            utility = 0,
            price = 0;

        this._validateMaterials(category);
        
        for (const material of this.materials) {
            cost += material.cost;
        }

        price = cost * 1.18 * 1.35;
        utility = price - cost;

        return new Product(productName, cost, price, utility);
    }

    _validateMaterials(category) {
        const materialsNotFound = [];
        const rawMaterialTypeCategory = this.rawMaterialTypesCategory.find(x => x.name === category);

        for (const rawMaterialType of rawMaterialTypeCategory.rawMaterialTypes) {
            const exists = this.materials.find(x => x.material.materialType === rawMaterialType);

            if (!exists) {
                materialsNotFound.push(rawMaterialType);
            }
        }
          
        if (materialsNotFound.length) {
            throw new Error(`No se puede crear el producto porque falta los siguientes tipos de materiales: ${materialsNotFound.join(', ')}.`);
        }
    }
}

const productProduction = new ProductProduction();

productProduction.add(new RawMaterial("Memoria Ram 8GB", materialTypes.memory, 70), 2);
//productProduction.add(new RawMaterial("Procesador Ryzen 7 2.5gh", materialTypes.processor, 250), 1);
//productProduction.add(new RawMaterial("Fuente 750w reales", materialTypes.powerSupply, 50), 1);

const product = productProduction.create("Computadora Ryzen 16Gb", category.computer);
console.log(product);

