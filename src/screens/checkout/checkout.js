import React from 'react';
import {useTranslation} from 'react-i18next';
import Text from '../../components/text/text';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons';
import Container from '../../components/container/container';
import ShippingAddressCard from '../../components/shipping-address-card/shipping-address-card';

import Header from './header';
import Building from '../../assets/images/building.png';
import {
  BuildingImage,
  CheckoutContainer,
  CheckoutDescription,
  CheckoutIcon,
  SupplierName,
  Logo,
  Total,
  SupplierTotal,
  SupplierInfo,
} from './styles';

const mockAddress = {
  name: 'Apto',
  email: 'jonathan5443@gmail.com',
  phone: '3194926255',
  address: ' 3 Chino Hills, CA 91709, United States',
  paymentMethod: [
    {
      id: 'master',
      finalNumbers: '3947',
      entity: 'mastercard',
    },
  ],
};

const Checkout = () => {
  const {t} = useTranslation();
  const shoppingCart = {
    suppliers: {
      Starbucks: {
        logo: 'https://picsum.photos/700/300',
        products: [{name: 'Caffe mocha', quantity: 3, price: 2700}],
      },
      Dominos: {
        logo: 'https://picsum.photos/700/300',
        products: [
          {name: 'Pizza mocha', quantity: 1, price: 2700},
          {name: 'Roll mocha', quantity: 2, price: 700},
        ],
      },
    },
    total: 20000,
  };

  const renderSuppliers = () => {
    return Object.keys(shoppingCart.suppliers).map(supplier => (
      <SupplierName>
        <Logo source={{uri: shoppingCart.suppliers[supplier].logo}} />
        <SupplierInfo>
          <Text type="highlight">{supplier}</Text>
          <Text type="small" color="gray">
            2 productos
          </Text>
        </SupplierInfo>
        <SupplierTotal>
          <Text type="highlight">$5000</Text>
        </SupplierTotal>
      </SupplierName>
    ));
  };
  return (
    <Container>
      <Header />
      <BuildingImage source={Building} />
      {renderSuppliers()}
      <ShippingAddressCard
        name={mockAddress.name}
        address={mockAddress.address}
        email={mockAddress.email}
        phone={mockAddress.phone}
      />
      <Text>{t('checkout.provider')}</Text>
      <Total>
        <Text type="small" underline={true}>
          {t('bag.clear')}
        </Text>
        <Text type="headline 3">
          {t('bag.total')}
          {'     '}${shoppingCart.total}
        </Text>
      </Total>
      <CheckoutContainer>
        <CheckoutDescription>
          <Text color="white">Crearemos 2 pedidos</Text>
          <Text type="smallBold" color="white" underline={true}>
            {t('bag.send')}
          </Text>
        </CheckoutDescription>
        <CheckoutIcon>
          <FontAwesomeIcon style={{color: 'white'}} icon={faShoppingBag} />
          <Text color="white">6</Text>
        </CheckoutIcon>
      </CheckoutContainer>
    </Container>
  );
};

export default Checkout;
