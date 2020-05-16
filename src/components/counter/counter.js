import React from 'react';
import PropTypes from 'prop-types';

import * as Tag from './styles';
import {useDispatch} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import theme from '../../config/themes/default';
import shoppingCartActions from '../../redux/reducers/shopping-cart';
import Text from '../text/text';

const Counter = ({product, color}) => {
  const dispatch = useDispatch();

  const setColor = () => {
    if (theme[color] === theme.primary) {
      return theme.pureWhite;
    }
    return theme.gray;
  };

  return (
    <Tag.Container>
      <Tag.Button
        color={color}
        onPress={() =>
          dispatch(shoppingCartActions.RemoveProductFlow(product))
        }>
        <FontAwesomeIcon style={{color: setColor()}} icon={faMinus} />
      </Tag.Button>
      <Tag.Quantity>
        <Text type="highlight">{`${product.quantity}`}</Text>
      </Tag.Quantity>
      <Tag.Button
        color={color}
        onPress={() => dispatch(shoppingCartActions.AddProductFlow(product))}>
        <FontAwesomeIcon style={{color: setColor()}} icon={faPlus} />
      </Tag.Button>
    </Tag.Container>
  );
};

Counter.propTypes = {
  product: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
};

Counter.defaultProps = {
  color: 'pureWhite',
};

export default Counter;
