function getDate() {
  return new Date();
}

function isValidNumber(n) {
  return !Number.isNaN(n) && isFinite(n) && typeof n === 'number';
}

function ShoppingCart(name, owner, maxCount) {
  this.name = name.trim();
  this.owner = owner.trim();
  this.maxCount = maxCount;
  let _products = [];
  let _logs = [`${this.name} was created at ${getDate()}`];
  this.addNewProduct = function(product) {
    if (product instanceof Product) {
      if (_products.length >= this.maxCount) {
        this.removeCheapestProduct();
      }
      product.dateOdAddingToCart = getDate();
      _products.push(product);
      product.add(this);
      _logs.push(
        `${product.name} was adeed to ${this.name} in ${
          product.dateOdAddingToCart
        }`
      );
    } else {
      console.log('Please try to add Product instance');
    }

    return this;
  };
  this.removeCheapestProduct = function() {
    let min = _products[0].price;
    let minIndex = 0;
    for (let i = 1; i < _products.length; i++) {
      if (_products[i].price < min) {
        min = _products[i].price;
        minIndex = i;
      }
    }
    _products.splice(minIndex, 1);
    _logs.push(
      `${_products[minIndex].name} was removed from ${
        this.name
      } in ${getDate()}`
    );
  };
  this.removeProduct = function(product) {
    for (let i = 0; i < _products.length; i++) {
      if (product.name === _products[i].name) {
        _products.splice(i, 1);
        product.removeProduct(this);
        _logs.push(
          `${product.name} was removed from ${this.name} on ${getDate()}`
        );
        return this;
      }
    }
  };

  this.getAvaragePrice = function() {
    let totalPrice = 0;
    let avaragePrice;
    if (_products.length > 0) {
      _products.forEach(product => {
        totalPrice += product.price;
      });
    }

    avaragePrice = totalPrice / _products.length;
    return avaragePrice;
  };
  this.getProducts = function() {
    return _products;
  };
  this.getFormattedListOfProducts = function() {
    return _products.map(product => {
      return `${product.name} - is on ${this.name} from ${
        product.dateOdAddingToCart
      }.Detailed product description: ${JSON.stringify(product.description)}`;
    });
  };
  this.getTotalPrice = function() {
    let totalPrice = 0;
    if (_products.length > 0) {
      _products.forEach(product => {
        totalPrice += product.price;
      });
    }
    return totalPrice;
  };
  this.getHistory = function() {
    return _logs;
  };
}

function Product(name, description, price) {
  let _logs = [];
  let _cartName;
  this.name = name;
  this.description = description;
  this.price = price;
  this.getPrice = function() {
    return this.price;
  };
  this.setPrice = function(newPrice) {
    if (newPrice > this.price && isValidNumber(newPrice)) {
      this.price = newPrice;
    }
  };
  this.add = function(shoppingCart) {
    _cartName = shoppingCart.name;
    _logs.push(`${this.name} was added to ${_cartName} on ${getDate()}`);
    return this;
  };
  this.removeProduct = function() {
    _logs.push(`${this.name} was removed from ${_cartName} on ${getDate()}`);
    _cartName = null;
    return this;
  };
  this.getHistoryLog = function() {
    return _logs;
  };
}

const apple = new Product(
  'apple',
  {
    color: 'red',
    size: 'small'
  },
  20
);

const stevesShopCart = new ShoppingCart('stevesCart', 'Steve', 5);

apple.setPrice(50);
stevesShopCart
  .addNewProduct(apple)
  .addNewProduct(apple)
  .addNewProduct(apple)
  .removeProduct(apple);

console.log('avarage price', stevesShopCart.getAvaragePrice());
stevesShopCart.addNewProduct('apple.....');
console.log(stevesShopCart.getProducts());
console.log(stevesShopCart.getHistory());
console.log(stevesShopCart.getFormattedListOfProducts());

console.log(apple.getHistoryLog());
