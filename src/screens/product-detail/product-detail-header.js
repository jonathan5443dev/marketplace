import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

import * as Tags from './styles';

const iconStyle = {
  marginHorizontal: 20,
  marginBottom: 20,
  color: 'white',
};

const ProductDetailHeader = () => (
  <Tags.HeaderContainer>
    <Tags.CloseButton>
      <FontAwesomeIcon icon={faTimes} style={iconStyle} />
    </Tags.CloseButton>
    <Tags.ShareButton>
      <FontAwesomeIcon icon={faTimes} style={iconStyle} />
    </Tags.ShareButton>
  </Tags.HeaderContainer>
);

export default ProductDetailHeader;
