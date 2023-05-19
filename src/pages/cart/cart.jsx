import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cartContext";
import "./cart.scss";

const Cart = () => {
  const { cart, deleteToCart, Total } = useContext(CartContext);
  const [items, setItem] = useState([])
   useEffect(()=>{
       localStorage.setItem("carrito",JSON.stringify(cart))
   },[items])
  //   const saveLocal = ()=>{
  //    localStorage.setItem("carrito",JSON.stringify(cart))
  //   }
  return (
    <div>
      <div className="row ">
        <div className="col-12 col-md-9 col-lg-9">
          <div
            className="row row-cols-1 row-cols-md-3 scrollspy-example vh-100 overflow-scroll container-card"
            data-bs-spy="scroll"
            data-bs-smooth-scroll="true"
            tabindex="0"
          >
            {cart.map((item) => {
              return (
                <div className="item">
                  <img className="img-card" src={item.image} alt="" />
                  <div className="ms-5">
                    <p>{item.title}</p>
                    <button type="button" className="btn btn-primary">
                     Eliminar
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-12 col-md-3">
          <div className="row row-cols-md-12">
            <h2>Compras Carrito</h2>
          </div>
          <div className="row">
            {cart.map((item) => {
              return (
                <>
                  <p>$ {item.price}</p>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
