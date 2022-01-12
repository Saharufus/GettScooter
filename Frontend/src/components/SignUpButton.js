import React, { useState } from "react";
import "./SignUpButton.css";
import { Link } from "react-router-dom";
import { Modal } from "../components/modal/Modal";

const STYLES = ["btn--primary", "btn--outline", "btn--test"];

const SIZES = ["btn--medium", "btn--large"];

export const SignUpButton = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  setVisible
}) => {

  

  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={() => {setVisible(true)}}
        type={type}
      >
        {children}
      </button>
    
  );
};