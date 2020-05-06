import React from 'react';
import Text from '../../components/text/text';
import Container from '../../components/container/container';
import Search from '../../components/search/search';
import Header from './header';
import gradient from '../../assets/images/gradient.png';
import {Category, CategoryImage, Tag, Overlay} from './styles';

const Home = ({navigation}) => {
  const categories = navigation.state.params.categories;
  return (
    <Container>
      <Header />
      <Search placeholder={'Què quieres hoy?'} />
      {categories.map(category => (
        <Category>
          <CategoryImage source={{uri: category.image}}>
            <Overlay source={gradient} />
            <Text type="headline 2" color="white">
              {category.name}
            </Text>
            <Text color="white">{category.count} productos y servicios</Text>
            {category.isNew && (
              <Tag>
                <Text>Nueva</Text>
              </Tag>
            )}
          </CategoryImage>
        </Category>
      ))}
    </Container>
  );
};

export default Home;
