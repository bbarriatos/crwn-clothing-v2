import React from "react";

import SignUpForm from "../../components/sign-up-form/SignUpForm.jsx";
import SignInForm from "../../components/sign-in-form/SignInForm.jsx";

import "./authentication-styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
