import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import theme from '../../config/themes/default';

import * as Tags from './styles';

const dotStyle = {
  width: 20,
  height: 20,
  borderRadius: 10,
  borderColor: theme.grayLight,
  borderWidth: 5,
  marginHorizontal: 8,
  backgroundColor: theme.primary,
};

const inactiveDotStyle = {
  width: 20,
  height: 20,
  borderRadius: 10,
  marginHorizontal: 8,
  borderWidth: 0,
  backgroundColor: theme.gray,
};

const ProducImageCarousel = ({images}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const renderPagination = () => (
    <Pagination
      activeDotIndex={activeSlide}
      dotsLength={images.length}
      dotStyle={dotStyle}
      inactiveDotScale={0.7}
      inactiveDotStyle={inactiveDotStyle}
      inactiveDotOpacity={0.5}
    />
  );

  return (
    <Tags.ProductImageCarouselContainer>
      <Carousel
        data={images}
        keyExtractor={item => `image-carousel-${item.id}`}
        horizontal={true}
        pagingEnabled={true}
        renderItem={({item}) => <Tags.Image source={item.resource} />}
        sliderWidth={200}
        itemWidth={images.length * 200}
        onSnapToItem={index => setActiveSlide(index)}
      />
      {renderPagination()}
    </Tags.ProductImageCarouselContainer>
  );
};

ProducImageCarousel.propTypes = {
  images: PropTypes.shape({
    id: PropTypes.number.isRequired,
    resource: PropTypes.node.isRequired,
  }).isRequired,
};

export default ProducImageCarousel;
