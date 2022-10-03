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
    if (props.backgroundcolor) {
      return props.backgroundcolor;
    } 
    return ''
  },
  borderRadius(props) {
    if (props.borderRadius) {
      return props.borderRadius;
    }
    if (props.shape === 'roundedEdge') {
      return '4px';
    }
    if (props.shape === 'rounded') {
      return '10px'
    }
  },
  fontSize(props) {
    if (props.fontSize === 'sm') {
      return '10px'
    }
    if (props.fontSize === 'md') {
      return '12px'
    }
    if (props.fontSize === 'lg') {
      return '14px'
    }
   return ''
  },
  padding(props) {
    if(props.padding) {
      return props.padding
    } 
    return '';
  }
};

const Badge = styled(({ children, ...props }) => (
  <div {...props}>{children}</div>
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
  shape: PropTypes.oneOf(['roundedEdge', 'rounded']),
  fontSize: PropTypes.oneOf(['sm', 'md', 'lg']),
  backgroundcolor: PropTypes.string,
  padding: PropTypes.string
};

Badge.defaultProps = {
  backgroundcolor: '#ffa553',
  color: 'black',
  shape: 'roundedEdge',
  fontSize: 'md',
  padding: '2px 12px'
};

export default Badge;