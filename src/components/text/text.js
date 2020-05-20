import React from 'react';
import PropTypes from 'prop-types';

import {FancyText} from './styles.js';

const Text = ({children, align, numberOfLines, type, color, underline}) => {
  return (
    <FancyText
      numberOfLines={numberOfLines}
      type={type}
      underline={underline}
      align={align}
      color={color}>
      {children}
    </FancyText>
  );
};

Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.string,
  ]),
  type: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  color: PropTypes.string,
  align: PropTypes.string,
  numberOfLines: PropTypes.number,
};

Text.defaultProps = {
  type: 'body',
  color: 'black',
  align: 'left',
  numberOfLines: 10,
};

export default Text;
