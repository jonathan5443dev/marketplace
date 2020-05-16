import React from 'react';
import {useTranslation} from 'react-i18next';
import Text from '../../components/text/text';
import Button from '../../components/button/button';
import Container from '../../components/container/container';
import ProductCardBag from '../../components/product-card-bag/product-card-bag';
import {
  ProductContainer,
  Footer,
  Total,
  Empty,
  SupplierName,
  Logo,
} from './styles.js';
import Header from './header';

const Bag = () => {
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

  const renderProductsBySupplier = supplier => (
    <>
      <SupplierName>
        <Logo source={{uri: shoppingCart.suppliers[supplier].logo}} />
        <Text type="highlight">{supplier}</Text>
      </SupplierName>
      {shoppingCart.suppliers[supplier].products.map(product => (
        <ProductCardBag product={product} />
      ))}
    </>
  );

  const isEmpty = Object.keys(shoppingCart.suppliers).length === 0;
  return (
    <Container>
      <Header />
      <ProductContainer>
        {!isEmpty ? (
          Object.keys(shoppingCart.suppliers).map(supplier =>
            renderProductsBySupplier(supplier),
          )
        ) : (
          <Empty>
            <Text color="gray">{t('bag.empty')}</Text>
          </Empty>
        )}
      </ProductContainer>
      <Footer>
        <Total>
          <Text color="gray">{t('bag.total')}</Text>
          <Text type="headline 3">{shoppingCart.total}$</Text>
        </Total>
        <Button disabled={isEmpty} value={t('bag.checkout')} />
      </Footer>
    </Container>
  );
};

export default Bag;
