class Store {
  constructor(pizzaSlicePrice, weekendDiscount, nightDiscount) {
    this.pizzaSlicePrice = pizzaSlicePrice;
    this.weekendDiscount = weekendDiscount;
    this.nightDiscount = nightDiscount;
    this.bonus = 0;
    this.counterOfBuying = 0;
  }

  calulatePriceWithBonuce() {
    let price;
    if (this.bonus < this.getPizzaSlicePrice) {
      price = this.getPizzaSlicePrice - this.bonus;
      this.bonus = 0;
    } else {
      price = 0;
      this.bonus = this.bonus - this.getPizzaSlicePrice;
    }
    return price;
  }
  buyPizzaSlice() {
    this.counterOfBuying++;
    return `Price after discount is ${this.calulatePriceWithBonuce()} and you have ${
      this.bonus
    } bonuses`;
  }
}

const store1 = new Store(20, 1, 1);

console.log(store1.buyPizzaSlice());