import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cartSelector.js";

import { setIsCartOpen } from "../../store/cart/cartAction.js";

import {
  ShoppingIcon,
  CartIconContainer,
  ItemCount,
} from "./cartIcon-styles.jsx";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon></ShoppingIcon>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
