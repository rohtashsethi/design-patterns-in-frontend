/*
* 1. Module Pattern (Example: Shopping Cart)
* 
* Imagine you're building a shopping cart system where you need to encapsulate 
* private data (like the cart items) and expose methods to add or remove items.
*/

const ShoppingCart = (function () {
  let cart = [];

  function addItem(item) {
    cart.push(item);
    console.log(`${item.name} added to the cart.`);
  }

  function removeItem(itemName) {
    cart = cart.filter(item => item.name !== itemName);
    console.log(`${itemName} removed from the cart.`);
  }

  function getTotalItems() {
    return cart.length;
  }

  function getCartItems() {
    return [...cart]; // Return a copy of the cart
  }

  return {
    addItem,
    removeItem,
    getTotalItems,
    getCartItems
  };
})();

ShoppingCart.addItem({ name: 'Laptop', price: 1000 });
ShoppingCart.addItem({ name: 'Phone', price: 500 });
console.log(ShoppingCart.getCartItems()); // [{ name: 'Laptop', ...}, { name: 'Phone', ... }]
