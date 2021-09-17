// crear un algoritmo que permita calcular el total, subtotal e IGV
const order = {
    items: [
        { product: 'Guitar 1', quantity: 2, price: 3000 },
        { product: 'Guitar 2', quantity: 3, price: 2000 },
        { product: 'Guitar 3', quantity: 1, price: 14000 }
    ]
};

/*
items.total=0;
items.igv=0;
items.subtotal=0;

for (let item of items) {
    items.total += item.price
    items.igv += item.price - (item.price / 1.18)
    items.subtotal += item.price / 1.18
};
*/

console.log(order);

// expected result

/*
order: {
  total: xxx,
  igv: xxx,
  subtotal: xxx,
  items: []
};
*/
