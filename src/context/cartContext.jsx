import React, { createContext, useState } from 'react';



export const CartContext = createContext();



export const CartProvider = ({ children }) => {
   const [cart, setCart] = useState([]);
   

   const addToCart = (newItem) => {
      setCart(...cart, newItem );
   };

   const deleteToCart = (id) => {
      const cartAct =cart.filter(item => item.id != id)
      setCart(cartAct)
   }

   return (
      <CartContext.Provider
         value={{
            cart,
            addToCart,
            deleteToCart,
         }}
      >
         {children}
      </CartContext.Provider>
   );
};
