import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import Text from '../text/text';
import Button from '../button/button';

import {
  Container,
  ProductContainerImage,
  ProductImage,
  ProductDescription,
  ButtonContainer,
} from './styles';

const ProductCard = ({product, onPress}) => {
  return (
    <Container onPress={onPress}>
      <ProductDescription>
        <Text type="highlight">{product.name}</Text>
        <Text color="gray" type="small">
          {product.description}
        </Text>
        <Text type="small">${product.price}</Text>
        <ButtonContainer>
          <Button value="Agregar" />
        </ButtonContainer>
      </ProductDescription>
      <ProductContainerImage>
        <ProductImage source={{uri: product.image}} resizeMode="cover" />
      </ProductContainerImage>
    </Container>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    isNew: PropTypes.bool,
    likes: PropTypes.number,
  }),
  onPress: PropTypes.func.isRequired,
};

ProductCard.defaultProps = {
  isNew: false,
  likes: 0,
};

export default ProductCard;
