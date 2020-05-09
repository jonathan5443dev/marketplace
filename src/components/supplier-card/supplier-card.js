import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import Text from '../text/text';
import {Container, SupplierImage, SupplierDescription} from './styles';

import productActions from '../../redux/reducers/product';

const SupplierCard = ({supplier}) => {
  const dispatch = useDispatch();

  return (
    <Container
      onPress={() => dispatch(productActions.startProductDetailFlow(supplier))}>
      <SupplierImage source={{uri: supplier.image}} resizeMode="cover" />
      <SupplierDescription>
        <Text type="highlight">{supplier.name}</Text>
        <Text>{supplier.description}</Text>
      </SupplierDescription>
    </Container>
  );
};

SupplierCard.propTypes = {
  supplier: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    isNew: PropTypes.bool,
    likes: PropTypes.number,
  }),
};

SupplierCard.defaultProps = {
  isNew: false,
  likes: 0,
};

export default SupplierCard;
