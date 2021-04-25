function Pizza () {
    this.toppings = [];
    this.size;
    this.total;
}
Pizza.prototype.cost = function () {
    var cost = 0;
    this.toppings.map(function(topping) {
      cost += topping
    });
    var total = cost + this.size;
    this.total = "Your total is: " + "$" + total.toFixed(2);
  };