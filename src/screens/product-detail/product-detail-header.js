import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimes, faShareAlt} from '@fortawesome/free-solid-svg-icons';

import * as Tags from './styles';

const iconStyle = {
  marginHorizontal: 20,
  marginBottom: 20,
  color: 'white',
};

const ProductDetailHeader = ({onRequestClose, onShare}) => (
  <Tags.HeaderContainer>
    <Tags.CloseButton onPress={onRequestClose}>
      <FontAwesomeIcon icon={faTimes} style={iconStyle} size={30} />
    </Tags.CloseButton>
    <Tags.ShareButton onPress={onShare}>
      <FontAwesomeIcon icon={faShareAlt} style={iconStyle} size={30} />
    </Tags.ShareButton>
  </Tags.HeaderContainer>
);

ProductDetailHeader.propTypes = {
  onRequestClose: PropTypes.func.isRequired,
  onShare: PropTypes.func,
};

ProductDetailHeader.defaultProps = {
  onShare: () => {},
};

export default ProductDetailHeader;
