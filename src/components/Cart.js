import React from 'react'
import "../style/wishlist.css";
import { Link } from "react-router-dom";

export default function Cart({cartProduct, removeProduct}) {
  return (
    <div>
    <div className={`${cartProduct.length === 0 ? "empty-wishlist" : "filled-wishlist"}`}>
        <div className="empty-cart-img"></div>
        <div className="empty-wishlist-content">
            <h1>OOPS! SEEMS LIKE YOUR CART IS EMPTY</h1>
            <br/>
            <Link to="/" className="add-wishlist">CLICK TO ADD ITEMS</Link>
        </div>
    </div>
<div className={`${cartProduct.length !== 0 && "wishlist-box"}`}>
  <div className="wishlist-container">
      { 
        cartProduct.map((cart)=>
        {
            return(
              <div
              className="wishlist-card"
              href="#.html"
              key={cart.productID}
            >
              <div className="wishlistproduct-img-container">
                <img
                  alt=""
                  className="topseller-img front"
                  src={cart.productImageFront}
                />
              </div>
              <div className="wishlistproduct-desc-container">
                <div className="product-desc">
                  <h3 className="topseller-category">
                    {cart.category}
                  </h3>
                  <h4 className="wishlist-name">{cart.productName}</h4>
                  <h4 className="wishlist-price">
                    {cart.productPrice}
                  </h4>
                </div>
                <button className="add-to-cart">buy now</button>
                <i
                  className="remove-item fa-solid fa-trash"
                  onClick={() => removeProduct(cart)}
                ></i>
              </div>
            </div>
                );
              })}
            </div>
          </div>
          </div>
        );
      }
