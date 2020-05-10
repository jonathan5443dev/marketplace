import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import Text from '../text/text';
import {
  Container,
  SupplierContainerImage,
  SupplierImage,
  SupplierDescription,
  Likes,
} from './styles';

import theme from '../../config/themes/default';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSignLanguage} from '@fortawesome/free-solid-svg-icons';

import productActions from '../../redux/reducers/product';

const SupplierCard = ({supplier}) => {
  const dispatch = useDispatch();

  return (
    <Container
      onPress={() => dispatch(productActions.startProductDetailFlow(supplier))}>
      <SupplierContainerImage>
        <SupplierImage source={{uri: supplier.image}} resizeMode="cover" />
      </SupplierContainerImage>
      <SupplierDescription>
        <Text type="highlight">{supplier.name}</Text>
        <Text color="gray">{supplier.description}</Text>
      </SupplierDescription>
      <Likes>
        <FontAwesomeIcon icon={faSignLanguage} style={{color: theme.primary}} />
        <Text>48</Text>
      </Likes>
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
