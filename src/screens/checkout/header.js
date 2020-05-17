import React from 'react';
import {Header, Back} from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import Text from '../../components/text/text';

const HeaderBag = () => {
  return (
    <Header>
      <Back onPress={() => {}}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </Back>
      <Text type="headline 2">Confirmar Pedidos</Text>
    </Header>
  );
};

export default HeaderBag;
