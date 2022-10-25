import React, { useContext, Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";
import { UserContext } from "../../context/UserContext";
import { CartContext } from "../../context/CartContext";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import "./navigation-styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo"></CrwnLogo>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon></CartIcon>
        </div>
        {isCartOpen && <CartDropdown></CartDropdown>}
      </div>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Navigation;
