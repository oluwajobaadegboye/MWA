function curriable(category, discount) {
    this.price = (this.price) - (this.price * discount);
    return this;
}
const item = {
    "name": "Biscuits",
    "type": "regular",
    "category": "food",
    "price": 2.0
};
let applycoupon = curriable.bind(item);
console.log(applycoupon("food", 0.1).price === 1.8);
