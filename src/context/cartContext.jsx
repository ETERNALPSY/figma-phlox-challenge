import React, { createContext, useState } from 'react';



export const CartContext = createContext();


export const CartProvider = ({ children }) => {
   const [cart, setCart] = useState([]);
   // console.log(cart)

   const addToCart = (newItem) => {
      setCart([...cart, newItem ]);
   };

   const Total = (price) =>{
      price.reduce((acum, current) => {acum + current},0)
   }
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
            Total,
         }}
      >
         {children}
      </CartContext.Provider>
   );
};
