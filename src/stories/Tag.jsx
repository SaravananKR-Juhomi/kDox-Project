import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const styles = {
  color(props) {
    if (props.kind === "filled") {
      return "white";
    }
    if (props.kind === "outlined") {
      return props.color;
    }
    return props.color ? props.color : "";
  },
  background(props) {
    if (props.backgroundColor) {
      return props.backgroundColor;
    }
    if (props.kind === "filled") {
      return props.color;
    }
    if (props.kind === "outlined") {
      return `${props.color}Lighter`;
    }
    return "";
  },
  borderRadius(props) {
    if (props.borderRadius) {
      return props.borderRadius;
    }
    if (props.shape === "bluntEdged") {
      return props.theme.borderRadius;
    }
    if (props.shape === "sharpEdged") {
      return "0";
    }
    if (props.shape === "capsular") {
      return 10;
    }
    if (props.shape === "circular") {
      return "100%";
    }
    return "";
  },
  fontSize(props) {
    if (props.size === "small") {
      return "10px";
    }
    if (props.size === "medium") {
      return "20px";
    }
    return "";
  },
  padding(props) {
    if (props.size === "small") {
      return "2px";
    }
    if (props.size === "medium") {
      return "6px";
    }
    return "";
  },
  textTransform(props) {
    if (props.size === "small") {
      return "uppercase";
    }
    return "none";
  },
};

const Tag = styled(({ color, kind, shape, size, ...props }) => (
  <div {...props} />
))`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${styles.color};
  background-color: ${styles.background};
  background-image: ${(props) => `url(${props.backgroundImage})`};
  border: 1px solid ${(props) => props.border || props.color};
  border-radius: ${styles.borderRadius};
  font-size: ${styles.fontSize};
  font-weight: 500;
  padding: ${styles.padding};
  text-transform: ${styles.textTransform};
  box-shadow: ${(props) =>
    props.borderOuter ? `0px 0px 0px 1.3px ${props.borderOuter}` : "none"};
`;

Tag.propTypes = {
  color: PropTypes.string,
  kind: PropTypes.oneOf(["filled", "outlined"]),
  shape: PropTypes.oneOf(["bluntEdged", "sharpEdged", "capsular"]),
  size: PropTypes.oneOf(["small", "medium"]),
  backgroundColor: PropTypes.string,
  border: PropTypes.string,
  borderOuter: PropTypes.string,
};

Tag.defaultProps = {
  color: "primary",
  kind: "filled",
  shape: "bluntEdged",
  size: "medium",
};

export default Tag;
