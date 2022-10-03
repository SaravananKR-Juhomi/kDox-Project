import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

const BButton = ({ variant, children, background, ...props }) => {
  console.log("backgroundColor", background);
  const btnStyle = {
    background,
  };

  return (
    <Button variant={variant} style={btnStyle} {...props}>
      {children}
    </Button>
  );
};

BButton.defaultProps = {
  children: "Submit",
  active: true,
  disabled: false,
  onClick: undefined,
  background: "white",
  color: "black",
  variant: "default",
};

BButton.propTypes = {
  children: PropTypes.any,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  background: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.string,
};

export default BButton;
