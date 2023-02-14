import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Wishlist from "./components/Wishlist";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Cart from "./components/Cart";
import './App.css';

function App() {
  const [wishList, setWishList] = useState(
    JSON.parse(localStorage.getItem("wishList")) || []
  );
  const [cartItem, setCartItem] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );


  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(wishList));
  }, [wishList]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItem));
  }, [cartItem]);



  const removeProduct = (wishListItem) => {
    // console.log(wishListItem)
    const deleteProduct = wishList.filter((index) => {
      return index !== wishListItem;
    });

    setWishList(deleteProduct);
  };
  const removeCartProduct = (cartListItem) => {
    // console.log(wishListItem)
    const deleteProduct = cartItem.filter((index) => {
      return index !== cartListItem;
    });

    setCartItem(deleteProduct);
  };
  return (
    <>
      {/* HEADER */}
      <Header wishList={wishList} />

      <Routes>
        <Route
          path="/"
          element={<Homepage wishList={wishList} setWishList={setWishList} cartItem={cartItem} setCartItem={setCartItem}/>}
        ></Route>
        {/* <Route
          path="/homepage"
          element={<Homepage setCartCount={setCartCount} />}
        ></Route> */}
        <Route
          path="/wishlist"
          element={
            <Wishlist wishlitProduct={wishList} removeProduct={removeProduct} />
          }
        ></Route>
         <Route
          path="/cart"
          element={
            <Cart cartProduct={cartItem} removeProduct={removeCartProduct}/>
          }
        ></Route>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default App;
