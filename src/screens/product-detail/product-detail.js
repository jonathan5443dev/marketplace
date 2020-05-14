import React from 'react';
import {useTranslation} from 'react-i18next';

import Text from '../../components/text/text';
import Button from '../../components/button/button';
import {useDispatch} from 'react-redux';
import Container from '../../components/container/container';
import ProductImageCarousel from '../../components/product-image-carousel/product-image-carousel';
import Counter from '../../components/counter/counter';
import shoppingCartActions from '../../redux/reducers/shopping-cart';
import * as Tags from './styles';

import product1 from '../../assets/images/product.png';
import product2 from '../../assets/images/product.png';
import product3 from '../../assets/images/product.png';

const images = [
  {id: 1, resource: product1},
  {id: 2, resource: product2},
  {id: 3, resource: product3},
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
          </Tags.BasicInformation>
          <Text type="description" color="gray">
            {product.description}
          </Text>
          <Text type="description" color="gray">
            {product.description}
          </Text>
          <Text type="description" color="gray">
            {product.description}
          </Text>
        </Tags.ContentScrollable>
      </Container>
      <Tags.ContainerCounter>
        <Counter product={product} color="primary" />
        <Tags.ContainerButton>
          <Button
            onPress={() =>
              dispatch(shoppingCartActions.AddProductFlow(product))
            }
            value={`${t('addToCart')} $ ${product.price}`}
          />
        </Tags.ContainerButton>
      </Tags.ContainerCounter>
    </>
  );
};

export default ProductDetail;
