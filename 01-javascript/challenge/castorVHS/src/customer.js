class Customer {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}

const customerType = {
    VIP: 'VIP',
    PLATINIUM: 'Platinium',
    STANDARD: 'Standard'
};

module.exports = {
    Customer,
    customerType
};