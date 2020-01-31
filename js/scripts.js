
$(document).ready(function(){
 
  $("input[type='button']").click(function(){
    event.preventDefault();
  
    //var arr = document.getElementById('rbtn').getElementsByTagName('input')
    var pizza= new Pizza();
    
    
    
    if  (document.getElementById('pepperoni').checked) {
     
 
       var topping1 = "pepperoni"
       var topping1 = new Topping(topping1);
       
       pizza.addToppings(topping1);
    }
    
       console.log(pizza)
      
     
      if (document.getElementById('mushrooms').checked){
    
        var topping2 = "mushrooms"
        var topping2 = new Topping(topping2);
        
        pizza.addToppings(topping2);
        
      }
    
    });

});


  // Business Logic for Pizza

function Pizza() {
  this.toppings = [];
}

Pizza.prototype.addToppings = function(topping) {
  this.toppings.push(topping);
}
// Business Logic for Toppings 
function Topping(topping) {
  this.topping = topping;
  
}








  

  


