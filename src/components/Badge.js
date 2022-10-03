import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const styles = {
  color(props) {
    if (props.color) {
      return props.color;
    } 
    return "black"
  },
  backgroundColor(props) {
    if (props.backgroundColor) {
      return props.backgroundColor;
    } 
    return "black"
  },
  borderRadius(props) {
    if (props.borderRadius) {
      return props.borderRadius;
    }
    if (props.shape === "roundedEdge") {
      return '4px';
    }
    if (props.shape === "rounded")
    return "10px"
  },
  fontSize(props) {
    if(props.fontSize) {
      return props.fontSize
    }
   return "12px"
  },
  padding(props) {
    if(props.padding) {
      return props.padding
    } 
    return '2px 12px';
  }
};

const Badge = styled(({ color, kind, shape, size, ...props }) => (
  <div {...props} />
))`
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    color: ${styles.color};
    background-color: ${styles.backgroundColor};
    border: none;
    border-radius: ${styles.borderRadius};
    font-size: ${styles.fontSize};
    font-weight: 600;
    padding: ${styles.padding}
`;

Badge.propTypes = {
  color: PropTypes.string,
  shape: PropTypes.oneOf(["roundedEdge", "rounded"]),
  fontSize: PropTypes.string,
  backgroundColor: PropTypes.string,
  padding: PropTypes.string
};

Badge.defaultProps = {
  backgroundColor: "#ffa553",
  color: "black",
  shape: "roundedEdge",
  fontSize: "12px",
};

export default Badge;