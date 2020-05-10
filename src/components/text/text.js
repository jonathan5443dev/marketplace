import React from 'react';
import PropTypes from 'prop-types';

import {FancyText} from './styles.js';

const Text = ({children, numberOfLines, type, color}) => {
  return (
    <FancyText numberOfLines={numberOfLines} type={type} color={color}>
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
  numberOfLines: PropTypes.number,
};

Text.defaultProps = {
  type: 'body',
  color: 'black',
  numberOfLines: 10,
};

export default Text;
