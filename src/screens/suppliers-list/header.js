import React from 'react';
import {Header, Back, ShoppingCart, Address} from './styles';
import Text from '../../components/text/text';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft, faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const HeaderHome = () => {
  return (
    <Header>
      <Back onPress={() => {}}>
        <FontAwesomeIcon icon={faArrowLeft} style={{marginLeft: 16}} />
      </Back>
      <Address>
        <Text type="highlight"> Carrera 16 # 96 - 71 </Text>
        <Text type="small">&#9660;</Text>
      </Address>
      <ShoppingCart onPress={() => {}}>
        <FontAwesomeIcon icon={faShoppingCart} style={{color: 'gray'}} />
      </ShoppingCart>
    </Header>
  );
};

export default HeaderHome;
