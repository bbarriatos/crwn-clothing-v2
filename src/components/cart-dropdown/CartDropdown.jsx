import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectCartItems } from "../../store/cart/cartSelector";

import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import CartItem from "../cart-item/CartItem";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cartDropdown.styles.jsx";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item}></CartItem>
          ))
        ) : (
          <EmptyMessage>Your cart is empty.</EmptyMessage>
        )}
      </CartItems>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.base}
        onClick={goToCheckoutHandler}>
        GO TO CHECKOUT
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
