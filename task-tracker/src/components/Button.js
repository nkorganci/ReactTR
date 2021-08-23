import React from "react";
import PropTypes from "prop-types";

const Button = ({ color, text }) => {
  return (
    <button 
    className="btn" 
    style={{ backgroundColor: color }}
    onClick={onclick}
    
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "Balck",
  text: "Default Text",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
