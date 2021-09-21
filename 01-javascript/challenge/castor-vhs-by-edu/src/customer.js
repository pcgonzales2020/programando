const CustomerType = {
    VIP: 'VIP',
    Standard: 'Standard'
};

class Customer {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}

module.exports = {
    Customer,
    CustomerType
};