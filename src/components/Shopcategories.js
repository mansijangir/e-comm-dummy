import React from "react";
import Catdata from "../data/shop_categories.json";
import "../style/shopcategories.css";

export default function Shopcategories() {
  return (
    <div>
      <div className="shop-categories-box">
      <div className="shop-categories-container">
        {Catdata.shop_categories.map((category,index) => {
          return (
            <a href="#!" className="shop-category-item"  style={{backgroundImage:`url(${category.categoryImg})`,  backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}} key={index}>
             
              <div className="banner-img-desc-container">
                <h1 className="banner-img-desc">{category.categoryName}</h1>

                <button className="category-btn" href="#!">
                  {category.categoryShop}
                  <i className="fa fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </a>
          );
        })}
      </div>
      </div>
    </div>
  );
}
