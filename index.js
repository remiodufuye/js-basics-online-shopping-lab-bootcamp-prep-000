var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(Name) {
   const randomPrice = Math.floor(Math.random() * 100 ) + 1 ;
   cart.push({itemName:Name, itemPrice:randomPrice});
   var result = `${Name} has been added to your cart.` ;
   console.log(result);
   return result ; 
}

 function viewCart() {

     var CartMessage = '' ; 

    if(cart.length < 1 || cart == undefined)  {
       CartMessage = "Your shopping cart is empty."
       console.log(CartMessage) ; 
    } else {
      
      let itemsAndPrices = [];
        
            for (let i = 0; i < l; i++) {
            let itemAndPrice = cart[i];
            let item = Object.keys(itemAndPrice)[0];
            let price = itemAndPrice[item];
            itemsAndPrices.push(`${item} at \$${price}`);
          }
        
                switch(itemsAndPrices.length) {
                case 1:
                  break;
                case 2:
                  itemsAndPrices = itemsAndPrices.join(" and ");
                  break;
                default:
                  itemsAndPrices[l-1] = "and ".concat(itemsAndPrices[l-1]);
                  itemsAndPrices = itemsAndPrices.join(", ");
              }
              
           CartMessage = `In your cart, you have${itemsAndPrices}.` ;
           
          console.log(CartMessage);
      
               }

          return CartMessage ; 
        
        }

// testing view cart 
/*
cart = [ 
  { itemName:"bananas", itemPrice: 17 }, 
  { itemName:"pancake batter",itemPrice: 5 }, 
  { itemName:"eggs", itemPrice: 49 }
      ] ; 

viewCart() ; 
*/ 
// testing view cart end




function total() {
  
}


function removeFromCart(item) {
  let itemInCart = false;

  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
      l--;
    }
  }

  if (!itemInCart) {
    var message = "That item is not in your cart."
    console.log(message);
  }
  return message;
}


function placeOrder(cardNumber) {
  if (!cardNumber) {
    var cardnumbermessage  = 'Sorry, we don\'t have a credit card on file for you.' 
    console.log(cardnumbermessage);
    return cardnumbermessage;
  } else {
       var cardnumbermessage = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.` ; 
       console.log(cardnumbermessage) ; 
       return cardnumbermessage ; 
  }

  cart = []; 
  
}
