import React from 'react';
import Container from '../../components/container/container';
import Header from './header';
import Text from '../../components/text/text';
import ProductCard from '../../components/product-card/product-card';
import theme from '../../config/themes/default';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faSignLanguage,
  faShare,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import {Banner, Detail, Products, IconContainer, Icons, Icon} from './styles';

const products = [
  {
    name: 'Caffe Mocha',
    description:
      'lorem ipsum ammet dolor, potato magic random test,lorem ipsum ammet dolor, potato magic random test',
    image: 'https://picsum.photos/seed/hamburgers/300/300',
    price: 20000,
    isNew: true,
    quantity: 1,
  },
  {
    name: 'Passport series',
    description: 'lorem ipsum ammet dolor, potato magic random test',
    image: 'https://picsum.photos/seed/potatos/300/300',
    price: 20000,
    isNew: true,
    quantity: 1,
  },
  {
    name: 'Caffe Mocha',
    description: 'lorem ipsum ammet dolor, potato magic random test',
    image: 'https://picsum.photos/seed/magics/300/300',
    price: 20000,
    isNew: true,
    quantity: 1,
  },
  {
    name: 'Passport series',
    description: 'lorem ipsum ammet dolor, potato magic random test',
    image: 'https://picsum.photos/seed/rudolf/300/300',
    price: 20000,
    isNew: true,
    quantity: 1,
  },
];

const SupplierDetail = () => {
  return (
    <Container>
      <Header />
      <Banner source={{uri: 'https://picsum.photos/seed/potss/1024/300'}} />
      <Detail>
        <Text type="headline 3">
          Starbucks{'   '}
          <Text color="primary">Abierto</Text>
        </Text>
        <Text color="gray">
          Officia ea exercitation mollit do. Consectetur aute commodo
          adipisicing tempor et aute culpa adipisicing esse ex enim. Mollit
          aliqua minim deserunt occaecat non minim amet minim officia labore.
        </Text>
        <Icons>
          <IconContainer>
            <Icon>
              <FontAwesomeIcon icon={faPhone} style={{color: theme.primary}} />
            </Icon>
            <Text type="smallBold" color="grayDark">
              Llamar
            </Text>
          </IconContainer>
          <IconContainer>
            <Icon>
              <FontAwesomeIcon icon={faShare} style={{color: theme.primary}} />
            </Icon>
            <Text type="smallBold" color="grayDark">
              Compartir
            </Text>
          </IconContainer>
          <IconContainer>
            <Icon>
              <FontAwesomeIcon
                icon={faSignLanguage}
                style={{color: theme.primary}}
              />
            </Icon>
            <Text type="smallBold" color="grayDark">
              48
            </Text>
          </IconContainer>
        </Icons>
      </Detail>
      <Products>
        {products.map(product => (
          <ProductCard product={product} />
        ))}
      </Products>
    </Container>
  );
};

export default SupplierDetail;
