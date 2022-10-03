import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const styles = {
  color(props) {
    return props.color;
  },
  backgroundColor(props) {
    if (props.kind === "filled") {
      return props.backgroundColor;
    }
    if (props.kind === "outlined") {
      return "white";
    }
    return "";
  },

  borderColor(props) {
    if (props.borderColor) return props.borderColor;
    return props.backgroundColor;
  },
  borderRadius(props) {
    if (props.borderRadius) {
      return props.borderRadius;
    }
    if (props.shape === "bluntEdged") {
      return "2px";
    }
    if (props.shape === "sharpEdged") {
      return "0";
    }
    if (props.shape === "capsular") {
      return "10px";
    }
    if (props.shape === "circular") {
      return "100%";
    }
    return "";
  },

  borderSize(props) {
    return props.borderSize;
  },
  borderStyle(props) {
    return props.borderStyle;
  },
  fontWeight(props) {
    if (props.size === "xs") {
      return "10px";
    } else if (props.size === "sm") {
      return "12px";
    } else if (props.size === "md") {
      return "14px";
    } else if (props.size === "lg") {
      return "16px";
    }
    return "";
  },
  padding(props) {
    if (props.size === "xs") {
      // return "[1,2]";
      return "2.5px 15px";
    } else if (props.size === "sm") {
      // return "[1,2]";
      return "5px 20px";
    } else if (props.size === "md") {
      // return "[1.5, 2]";
      return "10px 25px";
    } else if (props.size === "lg") {
      return "15px 30px";
    }
    return "";
  },

  hover: {
    color(props) {
      return "red";
    },
    // backgroundColor(props) {
    //   return props.backgroundColor;
    // },
    borderSize(props) {
      return "10px";
    },
  },
};

const StyledButton = styled(
  ({
    label,
    size,
    backgroundColor,
    color,
    borderSize,
    borderStyle,
    borderColor,
    shape,
    fontWeight,
    icon,
    iconPosition,
    borderRadius,
    padding,
    children,
    ...props
  }) => <button {...props}>{children ? children : label}</button>
)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-transform: uppercase;
  color: ${styles.color};
  font-size: ${styles.fontWeight};
  background-color: ${styles.backgroundColor};
  border-width: ${styles.borderSize};
  border-style: ${styles.borderStyle};
  border-color: ${styles.borderColor};
  border-radius: ${styles.borderRadius};
  padding: ${styles.padding};
  &:hover {
    transition: 0.3s;
    opacity: 0.9;
    border-width: 2px;
  }
`;

const Button = (props) => <StyledButton {...props} />;

Button.propTypes = {
  backgroundColor: PropTypes.string,
  kind: PropTypes.oneOf(["filled", "outlined"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  onClick: PropTypes.func,
  color: PropTypes.string,
  borderSize: PropTypes.string,
  borderStyle: PropTypes.oneOf(["dotted", "dashed", "solid"]),
  borderColor: PropTypes.string,
  shape: PropTypes.oneOf(["bluntEdged", "sharpEdged", "capsular", "circular"]),
  fontWeight: PropTypes.string,
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(["right", "left"]),
  borderRadius: PropTypes.string,
  padding: PropTypes.string,
};

Button.defaultProps = {
  backgroundColor: "white",
  size: "md",
  kind: "filled",
  color: "black",
  borderSize: "1px",
  borderStyle: "solid",
  borderColor: "black",
  shape: "capsular",
  fontWeight: "16px",
  padding: "10px",
  iconPosition: "left",
};

export default Button;
