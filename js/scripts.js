
$(document).ready(function(){
 
  $("input[type='button']").click(function(){
    event.preventDefault();
  
    //var arr = document.getElementById('rbtn').getElementsByTagName('input')
    var pizza= new Pizza();
    
    
    
    if  (document.getElementById('pepperoni').checked) {
      
       var topping1 = "pepperoni"
       var topping1 = new Topping(topping1);
       pizza.addToppings(topping1);
      
       var price = new Price(price);
       pizza.addPrices(price);
      
      }
    
       console.log(pizza)
      
     
      if (document.getElementById('mushrooms').checked){
        var topping2 = "mushrooms"
        var topping2 = new Topping(topping2);
        pizza.addToppings(topping2);
       
      }
    
    
    if (document.getElementById('small').checked){

     
    }
    
    
    
    
    
    });

});


  // Business Logic for Pizza

function Pizza() {
  this.toppings = [];
  this.prices = [];
}

Pizza.prototype.addToppings = function(topping) {
  this.toppings.push(topping);
}
Pizza.prototype.addPrices = function(price) {
  
  var price = "5"
  this.prices.push(price);
}

// Business Logic for Toppings 
function Topping(topping) {
  this.topping = topping;
}
  // Business Logic for price
function Price(price) {
  this.price = price;
}








  

  


