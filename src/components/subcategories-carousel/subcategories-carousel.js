import React from 'react';
import PropTypes from 'prop-types';
import {useTranslation} from 'react-i18next';

import Text from '../text/text';

import {
  SubcategoryImage,
  ScrollContainer,
  SubCategory,
  SubcategoriesContainer,
} from './styles';

const SubCategoriesCarousel = ({subCategories}) => {
  const {t} = useTranslation();

  return (
    <ScrollContainer horizontal={true}>
      <SubcategoriesContainer>
        {subCategories.map(subCategory => (
          <SubCategory>
            <SubcategoryImage source={{uri: subCategory.image}} />
            <Text numberOfLines={1}>{subCategory.name}</Text>
            <Text numberOfLines={1} type="small">
              {subCategory.quantity} restaurantes
            </Text>
          </SubCategory>
        ))}
      </SubcategoriesContainer>
    </ScrollContainer>
  );
};

SubCategoriesCarousel.propTypes = {
  title: PropTypes.string,
  titleDescription: PropTypes.string,
};

SubCategoriesCarousel.defaultProps = {
  title: 'Sale',
  titleDescription: 'Super summer sale',
};

export default SubCategoriesCarousel;
