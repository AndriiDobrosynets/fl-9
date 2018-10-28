class Store {
  constructor(pizzaSlicePrice) {
    this.pizzaSlicePrice = pizzaSlicePrice;
    this.nightDiscount = 0;
    this.weekendDiscount = 0;
    this.bonus = 0;
    this.summaryPrice = 0;
  }

  calculatePrice() {
    this.summaryPrice = this.pizzaSlicePrice - this.weekendDiscount - this.nightDiscount;
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
  if (date.getDay() > 5) {
    store.weekendDiscount = 2;
  }
  store.calculatePrice();
}

function setBonus(store) {
  store.bonus += Math.floor(store.summaryPrice / 10);
}

const store1 = new Store(20);
getDiscount(store1);
setBonus(store1);