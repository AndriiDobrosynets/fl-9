class Store {
  constructor(pizzaSlicePrice, nightDiscount, weekendDiscount) {
    this.pizzaSlicePrice = pizzaSlicePrice;
    this.nightDiscount = nightDiscount;
    this.weekendDiscount = weekendDiscount;
    this.bonus = 0;
    this.summaryPrice = 0;
  }
  getDiscount() {
    return 0;
  }
  calculatePrice() {
    this.summaryPrice = this.pizzaSlicePrice - this.getDiscount();
  }

  buyPizzaSlice() {
    return `Price after discount is ${this.summaryPrice} and you have ${this.bonus} bonuses`;
  }
}

function getDiscount(store) {
  const date = new Date();
  if (date.getHours() < 6) {
    store.nightDiscount = 2;
  }
  if (date.getDay() === 6 || date.getDay() === 0) {
    store.weekendDiscount = 2;
  }
  store.calculatePrice();
}

function setBonus(store) {
  store.bonus += Math.floor(store.summaryPrice / 10);
}

const store1 = new Store(20, 1, 1);
getDiscount(store1);
setBonus(store1);
console.log(store1.buyPizzaSlice())