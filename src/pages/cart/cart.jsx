import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cartContext";
import DataShopp from "./content-cart";
import "./cart.scss";

const Cart = () => {
  const { cart, total, deleteToCart } = useContext(CartContext);
  
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
            {cart.map((item,index) => {
              return (
                <DataShopp data={item} key={item.id} Delete={deleteToCart}/>
              );
            })}
          </div>
        </div>
        <div
          className="col-12 col-md-3 scrollspy-example vh-100 overflow-scroll container-price"
          data-bs-spy="scroll"
          data-bs-smooth-scroll="true"
          tabindex="0"
        >
           <div className="row row-cols-md-12">
            <h4>Total a pagar: $ {total}</h4>
            <button type="button" className="btn btn-primary mb-2 btn-buy">Comprar</button>
          </div>
          <div className="row">
            {cart.map((item) => {
              return (
                <>
                  <p className="price" key={item.id}>$ {item.price}</p>
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
