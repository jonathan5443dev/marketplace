import React from 'react';
import {useTranslation} from 'react-i18next';

import Text from '../../components/text/text';
import OrderSuccessHeader from './order-success-header';

import * as Tags from './styles';

import SuccessImage from '../../assets/images/order-success.png';

const OrderSuccess = () => {
  const {t} = useTranslation();

  return (
    <Tags.Content>
      <OrderSuccessHeader />
      <Tags.TopContent>
        <Tags.BagsImages source={SuccessImage} />
        <Text type="headline 2" color="black" align="center">
          {t('orders.success')}
        </Text>
        <Tags.Description>
          <Text type="description" color="gray" align="center">
            {t('orders.deliverSoon')}
          </Text>
        </Tags.Description>
      </Tags.TopContent>
    </Tags.Content>
  );
};

export default OrderSuccess;
