import React from 'react';

import SupplierCard from '../../components/supplier-card/supplier-card';
import Container from '../../components/container/container';
import SubCategoriesCarousel from '../../components/subcategories-carousel/subcategories-carousel';

import Search from '../../components/search/search';
import {Scroll} from './styles';
import Text from '../../components/text/text';
import Header from './header';

const subCategories = [
  {
    id: 1,
    name: 'Hamburgers',
    image: 'https://picsum.photos/seed/hamrgers/50/50',
    quantity: 10,
  },
  {
    id: 1,
    name: 'Pizza',
    image: 'https://picsum.photos/seed/ploto/50/50',
    quantity: 24,
  },
  {
    id: 1,
    name: 'Italiana',
    image: 'https://picsum.photos/seed/tros/50/50',
    quantity: 2,
  },
  {
    id: 1,
    name: 'Postres',
    image: 'https://picsum.photos/seed/madis/50/50',
    quantity: 8,
  },
  {
    id: 1,
    name: 'Colombiana',
    image: 'https://picsum.photos/seed/split/50/50',
    quantity: 7,
  },
];

const suppliers = [
  {
    name: 'Starbucks',
    description:
      'lorem ipsum ammet dolor, potato magic random test,lorem ipsum ammet dolor, potato magic random test',
    image: 'https://picsum.photos/seed/hamburgers/300/300',
    isNew: true,
  },
  {
    name: 'Burger King',
    description: 'lorem ipsum ammet dolor, potato magic random test',
    image: 'https://picsum.photos/seed/potatos/300/300',
    isNew: true,
  },
  {
    name: 'Domino´s',
    description: 'lorem ipsum ammet dolor, potato magic random test',
    image: 'https://picsum.photos/seed/magics/300/300',
    isNew: true,
  },
  {
    name: 'Wendy´',
    description: 'lorem ipsum ammet dolor, potato magic random test',
    image: 'https://picsum.photos/seed/rudolf/300/300',
    isNew: true,
  },
];

const SuppliersList = () => {
  return (
    <Container>
      <Scroll>
        <Header />
        <Search placeholder={'Què quieres hoy?'} />
        <SubCategoriesCarousel subCategories={subCategories} />
        <Text type="headline 2">Restaurants</Text>
        {suppliers.map(supplier => (
          <SupplierCard supplier={supplier} />
        ))}
      </Scroll>
    </Container>
  );
};

export default SuppliersList;
