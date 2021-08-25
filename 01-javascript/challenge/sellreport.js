function productSalesByCategory(items) {
    let result = {
        total: {
            income: 0,
            soldUnits: 0
        }
    };

    for (let item of items) {
        let index = item.category.toLowerCase();

        if (!result[index]) {
            result[index] = {
                income: item.income,
                soldUnits: item.soldUnits
            };
        } else {
            result[index].income += item.income;
            result[index].soldUnits += item.soldUnits;
        }

        result.total.income += item.income;
        result.total.soldUnits += item.soldUnits;
    }

    return result;
}

const data = [
    { item: 'Electric Guitar B', category: 'Instruments', soldUnits: 45, income: 154788 },
    { item: 'Boss Ds1', category: 'Pedals', soldUnits: 45, income: 4858 },
    { item: 'Boss Ds2', category: 'Pedals', soldUnits: 75, income: 8952 },
    { item: 'Addario Strings', category: 'Others', soldUnits: 75, income: 8952 },
    { item: 'Guitar case', category: 'Others', soldUnits: 15, income: 2750 },
    { item: 'Electric Guitar A', category: 'Instruments', soldUnits: 121, income: 12659 },
];

console.log(productSalesByCategory(data));