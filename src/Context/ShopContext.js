import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};
const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  function addToCart(itemId) {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    //console.log(cartItems);
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  function getCartTotalAmount() {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.filter(
          (product) => product.id === Number(item)
        );
        //console.log(itemInfo)
        //console.log("price,items",itemInfo[0].new_price,cartItems[item])
        totalAmount += itemInfo[0].new_price * cartItems[item];
      }
    }
    console.log(totalAmount)
    return totalAmount;
  };
   
  function getCartTotalItem(){
    let totalItem = 0;

    for(const item in cartItems){
      if(cartItems[item]>0){
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  }

  const contextValue = {
    getCartTotalItem,
    getCartTotalAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
  };

  console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
