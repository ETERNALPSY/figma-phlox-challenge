import React, { createContext, useEffect, useState } from 'react';



export const CartContext = createContext();


export const CartProvider = ({ children }) => {
   const [cart, setCart] = useState([]);
   const [total, setTotal]= useState(0)
   
   const Total = ()=>{
      let priceTotal = 0
      priceTotal= cart.reduce((acum,current)=> acum + current.price,0)
      setTotal(priceTotal.toFixed(2))
   }

   useEffect(()=>{
      Total()
   },[cart])

   const addToCart = (newItem) => {
      setCart([...cart, newItem ]);
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
            total,
            setTotal
         }}
      >
         {children}
      </CartContext.Provider>
   );
};
