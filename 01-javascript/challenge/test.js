class ProductCategory{
    constructor(name,rawMaterialGroup_id){
        this.name=name;
        this.rawMaterialGroup_id=rawMaterialGroup_id
    }
}

 const category=[
    new ProductCategory('computadora',0),
    new ProductCategory('computadora',1),
    new ProductCategory('computadora',2),
];

console.log(category);