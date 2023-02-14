import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/wishlist.css";

export default function Wishlist({ wishlitProduct, removeProduct,props}) {
 
  return (
    <div>
        <div className={`${wishlitProduct.length === 0 ? "empty-wishlist" : "filled-wishlist"}`}>
            <div className="empty-wishlist-img"></div>
            <div className="empty-wishlist-content">
                <h1>OOPS! SEEMS LIKE YOUR WISHLIST IS EMPTY</h1>
                <br/>
                <Link to="/" className="add-wishlist">CLICK TO ADD ITEMS</Link>
            </div>
        </div>
    <div className={`${wishlitProduct.length !== 0 && "wishlist-box"}`}>
      <div className="wishlist-container">
        {wishlitProduct.map((wishListItem) => {
          return (
            <div
              className="wishlist-card"
              href="#.html"
              key={wishListItem.productID}
            >
              <div className="wishlistproduct-img-container">
                <img
                  alt=""
                  className="topseller-img front"
                  src={wishListItem.productImageFront}
                />
              </div>
              <div className="wishlistproduct-desc-container">
                <div className="product-desc">
                  <h3 className="topseller-category">
                    {wishListItem.category}
                  </h3>
                  <h4 className="wishlist-name">{wishListItem.productName}</h4>
                  <h4 className="wishlist-price">
                    {wishListItem.productPrice}
                  </h4>
                </div>
                <button className="add-to-cart" onClick={() => props.handleCartClick(wishListItem)}>add to cart</button>
                <i
                  className="remove-item fa-solid fa-trash"
                  onClick={() => removeProduct(wishListItem)}
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
