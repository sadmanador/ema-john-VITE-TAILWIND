// use local storage to manage cart data
const addToLocalStorage = (id, increase) => {
  let shoppingCart = getShoppingCart();
  // add quantity

  if (increase) {
    const quantity = shoppingCart[id];
    if (!quantity) {
      shoppingCart[id] = 1;
    } else {
      const newQuantity = quantity + 1;
      shoppingCart[id] = newQuantity;
    }
  } else {
    const quantity = shoppingCart[id];
    if (!quantity) {
      return;
    } else {
      if (quantity > 0) {
        const newQuantity = quantity - 1;
        shoppingCart[id] = newQuantity;
      }
    }
  }

  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const removeFromDb = (id) => {
  const shoppingCart = getShoppingCart();
  if (id in shoppingCart) {
    delete shoppingCart[id];
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
  }
};

const getShoppingCart = () => {
  let shoppingCart = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

const deleteShoppingCart = () => {
  localStorage.removeItem("shopping-cart");
};

export { addToLocalStorage, removeFromDb, getShoppingCart, deleteShoppingCart };
