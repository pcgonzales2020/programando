// inmutable values (all primitive types)
// ref: https://developer.mozilla.org/es/docs/Glossary/Primitive

// inmutable example
let foo = "Christian";
foo.toUpperCase();

console.log(foo); // Christian

// mutable example
let user = {
    id: 1,
    name: 'Cristian'
};

user.id++;

console.log(user); // { id: 2, ... }

// mutable example #2
let users = [
    { name: "Christian" },
    { name: "Eduardo" }
];

users.push({name: "xxx"})

console.log(users); // length => 3 items

// advanced example
let order = {
    total: 100
};

function addIva(order) {
    order.iva = order.total - (order.total / 1.18);
}

addIva(order);