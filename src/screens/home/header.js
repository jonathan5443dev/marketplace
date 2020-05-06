import React from 'react';
import {Header, Avatar, Information, Welcome, Address} from './styles';
import Text from '../../components/text/text';
import AvatarImage from '../../assets/images/product-1.png';

const HeaderHome = () => {
  return (
    <Header>
      <Avatar source={AvatarImage} />
      <Information>
        <Welcome>
          <Text type="headline 2">Hola </Text>
          <Text type="headline 2" color="primary">
            Vanessa
          </Text>
        </Welcome>
        <Address>
          <Text type="highlight"> Carrera 16 # 96 - 71 </Text>
          <Text type="small">&#9660;</Text>
        </Address>
      </Information>
    </Header>
  );
};

export default HeaderHome;
