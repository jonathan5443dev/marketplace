import React, {useState} from 'react';

import Text from '../../components/text/text';
import Button from '../../components/button/button';
import {useDispatch} from 'react-redux';
import Container from '../../components/container/container';
import ProductImageCarousel from '../../components/product-image-carousel/product-image-carousel';
import Counter from '../../components/counter/counter';
import shoppingCartActions from '../../redux/reducers/shopping-cart';
import * as Tags from './styles';

import product1 from '../../assets/images/product1.png';
import product2 from '../../assets/images/product2.png';
import product3 from '../../assets/images/product1.png';
import product4 from '../../assets/images/product2.png';

import {useTranslation} from 'react-i18next';

const images = [
  {id: 1, resource: product1},
  {id: 1, resource: product2},
  {id: 1, resource: product3},
  {id: 1, resource: product4},
];

const ProductDetail = ({navigation}) => {
  const product = navigation.state.params.product;
  const {t} = useTranslation();
  const dispatch = useDispatch();

  return (
    <>
      <ProductImageCarousel images={images} />
      <Container>
        <Tags.ContentScrollable>
          <Tags.BasicInformation>
            <Tags.NameAndBrand>
              <Text type="headline 2">{product.name}</Text>
            </Tags.NameAndBrand>
            <Tags.Price>
              <Text type="headline 3">$ {product.price}</Text>
            </Tags.Price>
          </Tags.BasicInformation>
          <Text type="description">{product.description}</Text>
        </Tags.ContentScrollable>
      </Container>
      <Tags.ContainerButton>
        <Counter product={product} />
        <Button
          onPress={() => dispatch(shoppingCartActions.AddProductFlow(product))}
          value={t('addToCart')}
        />
      </Tags.ContainerButton>
    </>
  );
};

export default ProductDetail;
