import React from 'react';
import {Header, Back, ShoppingCart, Address} from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft, faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const HeaderSupplierDetail = () => {
  return (
    <Header>
      <Back onPress={() => {}}>
        <FontAwesomeIcon icon={faArrowLeft} style={{color: 'white'}} />
      </Back>
      <ShoppingCart onPress={() => {}}>
        <FontAwesomeIcon icon={faShoppingCart} style={{color: 'gray'}} />
      </ShoppingCart>
    </Header>
  );
};

export default HeaderSupplierDetail;
