import React from 'react'
import Bestpicks from './Bestpicks'
import Brand from './Brand'
import Features from './Features'
import Shopcategories from './Shopcategories'
import Timer from './Timer'
import Topsellers from './Topsellers'

export default function Homepage({setWishList, wishList, setCartItem, cartItem}) {
 
  console.log(cartItem)
  console.log(wishList)

   
  const handleClick = (content) => {
    if (!wishList.includes(content)) {
      setWishList([...wishList, content]);
      console.log(wishList);
    } else {
      const newWishListData = wishList.filter((item) => {
        return item !== content;
      });
      setWishList(newWishListData);
    }
  };

  const handleCartClick = (content) => {
      // console.log(content);
      
      // setCartItem([...cartItem, content]);
      // console.log(cartItem);
      
      if (!cartItem.includes(content)) {
        setCartItem([...cartItem, content]);
        console.log(cartItem);
      } else {
        const newWishListData = cartItem.filter((item) => {
          return item !== content;
        });
        setCartItem(newWishListData);
      }
    } 


   
    
  return (
    <div>
            {/* SHOPCATEGORIES */}
            <Shopcategories />
      {/* FEATURES */}
      <Features />
      {/* BESTPICKS */}
      <Bestpicks />
      {/* TOPSELLERS */}
      <Topsellers handleClick={handleClick} wishList={wishList} handleCartClick={handleCartClick} cartItem={cartItem}/>
      {/* TIMER */}
      <Timer />
      {/* BRAND */}
      <Brand />
    </div>
  )
}
