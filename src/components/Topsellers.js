import React, { useState, useRef } from "react";
import { useEffect } from "react";
import Data from "../data/topseller.json";
import "../style/topseller.css";
import { Modal } from "react-bootstrap";

export default function Topsellers(props) {
  console.log(props)
  const detailRef = useRef();
  const [items, setItems] = useState(Data.topsellers);
  const [toggleActivetab, setToggleActivetab] = useState("women");
  const [show, setShow] = useState(false);
  const [productDetails, setProductDetails] = useState({});

  const handleClose = () => setShow(false);

  // const handleShow = (e) => {
  //   setShow(true);
  //   const target = e.currentTarget;
  //   // detail?.current.innerText= target.getAttribute("data-title")
  //   console.log(detailRef?.current);
  //   console.log(e);
  // };

  const handleShow = (content) => {
    setShow(true);
    console.log(content);
    setProductDetails({...content});
  };

  const toggleFilter = (cat) => {
    const filterCategory = Data.topsellers.filter((currentCategory) => {
      return currentCategory.filter === cat;
    });
    setItems(filterCategory);
    setToggleActivetab(cat);
  };
  useEffect(() => {
    toggleFilter("women");
  }, []);

  return (
    <div className="topseller-main-container">
      <h2 className="topseller-heading">Top month Sellers</h2>
      <div className="filter">
        <button
          className={
            toggleActivetab === "women"
              ? "filter-category active-filter-button"
              : "filter-category"
          }
          onClick={() => toggleFilter("women")}
        >
          Women
        </button>
        <button
          className={
            toggleActivetab === "men"
              ? "filter-category active-filter-button"
              : "filter-category"
          }
          onClick={() => toggleFilter("men")}
        >
          Men
        </button>
        <button
          className={
            toggleActivetab === "children"
              ? "filter-category active-filter-button"
              : "filter-category"
          }
          onClick={() => toggleFilter("children")}
        >
          Children
        </button>
      </div>
      <div className="topseller-container">
        {items.map((content, index) => {
          return (
            <div key={content.productID}>
              <div className="topseller-card" href="#.html">
                <div className="product-img-container">
                  <div className="image-hover" href="#.html">
                    <img
                      alt=""
                      className="topseller-img front"
                      src={content.productImageFront}
                    />
                    <img
                      alt=""
                      className="topseller-img back"
                      src={content.productImageBack}
                    />
                  </div>

                  <div className="card-actions">
                    <span className="card-action">
                      <button
                        className="circle-btn"
                        onClick={()=>handleShow(content)}>
                                              
                        <i className="action-btn fa-regular fa-eye"></i>
                      </button>
                    </span>

                    <span className="card-action">
                      <button
                        className="circle-btn"
                        onClick={() => props.handleCartClick(content)}
                      >
                        <i className={`action-btn fa-solid fa-cart-shopping
                          ${
                            props.cartItem.find(
                              (item) => item.productID === content.productID
                            )
                              ? "active-like fa-solid"
                              : ""
                          }`}></i>
                      </button>
                    </span>
                    <span className="card-action">
                      <button
                        className="circle-btn"
                        onClick={() => props.handleClick(content)}
                      >
                        <i
                          className={`action-btn fa-regular fa-heart 
                          ${
                            props.wishList.find(
                              (item) => item.productID === content.productID
                            )
                              ? "active-like fa-solid"
                              : ""
                          }`}
                        ></i>
                      </button>
                    </span>
                  </div>
                </div>
                <div className="product-desc-container">
                  <h3 className="topseller-category">{content.category}</h3>
                  <h4 className="topseller-name">{content.productName}</h4>
                  <h4 className="topseller-price">{content.productPrice}</h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="modal-title">{productDetails.productName}</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body">
            <div className="modal-image-container">
              <img className="modal-image" src={productDetails.productImageFront}/>
            </div>
            <div className="modal-desc-container">
              <h3 className="product-category">{productDetails.category}</h3>
              <h3 className="product-name">{productDetails.productName}</h3>
              <p className="product-detail">{productDetails.detail}</p>
              <h4 className="product-detail">{productDetails.productPrice}</h4>
              <button className="modal-btn">Move to wishlist <i className="fa-solid fa-heart"></i></button>
             { <button className="modal-btn">Add to Cart <i className="fa-solid fa-cart-shopping"></i></button>}
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <div className="link-container">
        <a className="link-underline" href="#!">
          Discover more
        </a>
      </div>
    </div>
  );
}
