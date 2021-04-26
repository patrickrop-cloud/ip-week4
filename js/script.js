$(document).ready(function() {
  $("#order-details").hide();
  $("#deliver").hide();
  // Business Logic
  var totalPriceArray = [];
  function Order(size, flavour,crust, toppings, amount) {
    this.size = size;
    this.flavour = flavour;
    this.crust = crust;
    this.toppings = toppings;
    this.pizzaPrice = 0;
    this.amount = amount;
  }
  Order.prototype.pizzaCost = function() {
    if (this.size == "small-pizza") {
      this.pizzaPrice += 300;
    } else if (this.size == "medium-pizza") {
      this.pizzaPrice += 500;
    } else if (this.size == "large-pizza") {
      this.pizzaPrice += 900;
    }
    if (this.flavour == "bbqsteak") {
      this.pizzaPrice += 50;
   } else if (this.flavour == "hawaian") {
     this.pizzaPrice += 60;
    } else if (this.flavour == "periperi") {
       this.pizzaPrice += 70;
    } else if (this.flavour == "chickentikka") {
      this.pizzaPrice += 75;
    }
    if (this.crust == "Thin") {
      this.pizzaPrice += 100;
    } else if (this.crust == "thick") {
      this.pizzaPrice += 150;
    } else if (this.crust == "stuffed") {
      this.pizzaPrice += 160;
    } else if (this.crust == "crispy") {
      this.pizzaPrice += 180;
    }
    if (this.toppings == "tommato") {
      this.pizzaPrice += 100;
    } else if (this.toppings == "mushroom") {
      this.pizzaPrice += 100;
    } else if (this.toppings == "pepper") {
      this.pizzaPrice += 150;
    } else if (this.toppings == "mince") {
      this.pizzaPrice += 150;
    } else if (this.toppings == "onions") {
      this.pizzaPrice += 120;
    }
  };
  //Business logic
  function Address(address) {
    this.address = address;
    this.deliveryAddress = (address);
  }
  Order.prototype.finalCost = function() {
    var cartTotalPrice = [];
    for (var arrayElement = 0; arrayElement < totalPriceArray.length; arrayElement++) {
      cartTotalPrice += totalPriceArray[arrayElement];
    }
    return cartTotalPrice;
  };
  $(".btn.check-out").click(function() {
  });
  $("form#custom-pizza").submit(function(event) {
    event.preventDefault();
    var size = $("select#size").val();
    var flavour = $("select#flavour").val();
    var crust = $("select#crust").val();
    var toppings = $("select#toppings").val();
    var pizzaDetails = (size + " - " + flavour + " - " + crust + " - " + toppings);
    var newPizzaOrder = new Order(size, flavour, crust, toppings);
    newPizzaOrder.pizzaCost();
    totalPriceArray.push(newPizzaOrder.pizzaPrice);
    // $("#pizza-details").hide();
    $("#final-cost").text(newPizzaOrder.finalCost());
    $("#pizza-details").append("<ul><li>" + pizzaDetails + "</li></ul>");
    // $("#size, #crust, #toppings,").val("");
  });
  $("#submit-pizza").click(function() {
    $("#deliver").toggle();
  });

  $("#checkout-btn").click(function() {
    $("#order-details").toggle();
  });
  $("form#address-form").submit(function(event) {
    $(".address-form").toggle();
    event.preventDefault();
    var address = $("input#location").val();
    var newAddress = new Address(address);
    $("#delivery-option").text("Your pizza will be delivered to: " + newAddress.deliveryAddress);
  });
});