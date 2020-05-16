import React from 'react';
import Text from '../text/text';
import Counter from '../counter/counter';
import {useTranslation} from 'react-i18next';
import productDemo from '../../assets/images/product-1.png';

import {
  Container,
  ImageContainer,
  Detail,
  CounterContainer,
  ProductImage,
} from './styles';

const ProductCardBag = ({product}) => {
  const {t} = useTranslation();
  return (
    <Container>
      <ImageContainer>
        <ProductImage source={productDemo} resizeMode="cover" />
      </ImageContainer>
      <Detail>
        <Text type="highlight">{product.name}</Text>
        <CounterContainer>
          <Counter product={product} color="primary" />
        </CounterContainer>
        <Text type="highlight">{`${product.price * product.quantity}$`}</Text>
      </Detail>
    </Container>
  );
};

export default ProductCardBag;
