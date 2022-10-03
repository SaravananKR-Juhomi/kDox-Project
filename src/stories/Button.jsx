import React from "react";
import PropTypes from "prop-types";
import "./button.css";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary,
  backgroundColor,
  size,
  label,
  color,
  borderSize,
  borderType,
  borderColor,
  flatButton,
  ...props
}) => {
  // const mode = primary
  //   ? "storybook-button--primary"
  //   : "storybook-button--secondary";

  const btnStyle = {
    backgroundColor,
    color,
    height: "40px",
    width: "90px",
    border: `${borderSize} ${borderType} ${borderColor}`,
    borderRadius: !flatButton ? "20px" : "0px",
  };

  return (
    <button
      type="button"
      // className={["storybook-button", `storybook-button--${size}`, mode].join(
      //   " "
      // )}
      // // style={(backgroundColor && { backgroundColor }, color && { color })}
      style={btnStyle}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  color: PropTypes.string,
  borderSize: PropTypes.string,
  borderType: PropTypes.string,
  borderColor: PropTypes.string,
  flatButton: PropTypes.bool,
};

Button.defaultProps = {
  backgroundColor: "white",
  color: "black",
  primary: false,
  size: "medium",
  onClick: undefined,
  borderSize: "1px",
  borderType: "Solid",
  borderColor: "black",
  flatButton: false,
};
