class CoffeeShop {
  constructor(name, menu) {
    this.name = name;
    this.menu = menu;
    this.orders = [];
  }
  checkIfOrderExistsInMenu = function (order) {
    let exist = false;
    this.menu.forEach((element) => {
      if (element["name"] === order) {
        exist = true;
      }
    });
    return exist;
  };

  addOrder = function (plusOrder) {
    if (coffeeShop.checkIfOrderExistsInMenu(plusOrder)) {
      this.orders.push(plusOrder);
      return this.orders;
    }
    return "order is not exists in menu";
  };

  fulfillOrder = function () {
    if (this.orders === []) {
      return "All orders have been fulfilled!";
    } else {
      return `${this.orders.shift()} is ready!`;
    }
  };

  dueAmount = function () {
    let price = 0;
    this.orders.forEach((element) => {
      this.menu.forEach((el) => {
        if (element === el["name"]) {
          price = price + el["price"];
        }
      });
    });
    return price;
  };

  cheapestItem = function () {
    let minArr = [];
    this.menu.forEach((element) => {
      minArr.push(element["price"]);
    });
    return Math.min(...minArr);
  };

  drinksOnly = function () {
    let drinkArr = [];
    this.menu.forEach((element) => {
      if (element["type"] === "drink") {
        drinkArr.push(element);
      }
    });
    return drinkArr;
  };

  foodsOnly = function () {
    let foodArr = [];
    this.menu.forEach((element) => {
      if (element["type"] === "food") {
        foodArr.push(element);
      }
    });
    return foodArr;
  };
}

let coffeeShop = new CoffeeShop("bob", [
  { name: "americano", type: "drink", price: 10 },
  { name: "kruasan", type: "food", price: 15 },
  { name: "apple", type: "food", price: 5 },
  { name: "shokmanje", type: "food", price: 8 },
  { name: "capushino", type: "drink", price: 7 },
  { name: "latio", type: "drink", price: 20 },
  { name: "hotChoco", type: "drink", price: 25 },
]);

console.log(coffeeShop.addOrder("kruasan"));
console.log(coffeeShop.addOrder("apple"));
console.log(coffeeShop.addOrder("shokmanje"));
console.log(coffeeShop.addOrder("latio"));
console.log(coffeeShop.dueAmount());
console.log(coffeeShop.foodsOnly());
