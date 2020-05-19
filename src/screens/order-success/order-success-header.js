import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

import * as Tags from './styles';

const iconStyle = {
  marginHorizontal: 20,
  marginBottom: 20,
  color: 'black',
};

const ProductDetailHeader = () => (
  <Tags.HeaderContainer>
    <Tags.CloseButton onPress={() => {}}>
      <FontAwesomeIcon icon={faTimes} style={iconStyle} size={20} />
    </Tags.CloseButton>
  </Tags.HeaderContainer>
);

export default ProductDetailHeader;
