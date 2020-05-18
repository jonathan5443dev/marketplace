import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import {useTranslation} from 'react-i18next';
import theme from '../../config/themes/default';
import Text from '../text/text';

import * as Tags from './styles';

const ShippingAddressCard = ({name, address, email, phone}) => {
  const {t} = useTranslation();
  return (
    <Tags.Container>
      <Tags.AddressCard>
        <Text type="smallBold" color="gray">
          {t('checkout.contact')}
        </Text>
        <Tags.Check>
          <FontAwesomeIcon
            style={{color: theme.primary}}
            icon={faCheckCircle}
          />
        </Tags.Check>
        <Text type="highlight">{name}</Text>
        <Tags.Address>
          <Text type="small" color="gray">
            {address}
          </Text>
          <Text type="small" color="gray">
            {email}
          </Text>
          <Text type="small" color="gray">
            {phone}
          </Text>
        </Tags.Address>
        <Tags.ChangeLink>
          <Text color="white">{t('checkout.change')}</Text>
        </Tags.ChangeLink>
      </Tags.AddressCard>
    </Tags.Container>
  );
};

ShippingAddressCard.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  country: PropTypes.string,
};

ShippingAddressCard.defaultProps = {
  country: '',
};

export default ShippingAddressCard;
