$(document).ready(function() {
  $("#order-details").hide();
  $("#deliver").hide();


  var totalPriceArray = [];
  function Order(size, crust, toppings, amount) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.pizzaPrice = 0;
    this.amount = amount;
  }
  Order.prototype.pizzaCost = function() {
    if (this.size === "small-pizza") {
      this.pizzaPrice += 500;
    } else if (this.size === "medium-pizza") {
      this.pizzaPrice += 750;
    } else if (this.size === "large-pizza") {
      this.pizzaPrice += 1000;
    }
    if (this.crust === "thin") {
      this.pizzaPrice += 100;
    } else if (this.crust === "thick") {
      this.pizzaPrice += 150;
    } else if (this.crust === "custom") {
      this.pizzaPrice += 150;
    }
    if (this.toppings === "tomato") {
      this.pizzaPrice += 100;
    } else if (this.toppings === "mushroom") {
      this.pizzaPrice += 150;
    } else if (this.toppings === "pepper") {
      this.pizzaPrice += 200;
    } else if (this.toppings === "mince") {
      this.pizzaPrice += 150;
    } else if (this.toppings === "onions") {
      this.pizzaPrice += 150;
    }
  };

 function Address(address) {
  this.address = address;
  this.deliveryAddress = (address);
}
Order.prototype.finalCost = function() {
  var shopCartTotalPrice = [];
  for (var arrayElement = 0; arrayElement < totalPriceArray.length; arrayElement++) {
    shopCartTotalPrice += totalPriceArray[arrayElement];
  }
  return shopCartTotalPrice;
};