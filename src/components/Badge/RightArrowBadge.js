import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const styles = {
  color(props) {
    if (props.color) {
      return props.color;
    } 
    return ''
  },
  backgroundColor(props) {
    if (props.backgroundColor) {
      return props.backgroundColor;
    } 
    return ''
  },
};


const RightArrowBadge = styled(({ children, ...props }) => (
  <div {...props}>{children}</div>
))`
    background-color: ${styles.backgroundColor};
    display: inline-flex;
    margin: 10px;
    position: relative;
    display: inline-flex;
    padding: 3px;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: 600;
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
    &:before {
        top: 0px;
        background: linear-gradient(to top right, ${styles.backgroundColor} 50%, transparent 51%);
    }
    &:after {
        bottom: 0px;
        background: linear-gradient(to bottom right, ${styles.backgroundColor} 50%, transparent 51%);
    }
    &:after,
    &:before {
        content: "";
        position: absolute;
        left: 100%;
        width: 8px;
        height: 50%;
    }
`;

RightArrowBadge.propTypes = {
    color: PropTypes.string,
    backgroundColor: PropTypes.string
};

RightArrowBadge.defaultProps = {
    color: "#0d3d6f",
    backgroundColor: "#bed9f4"
};

export default RightArrowBadge;