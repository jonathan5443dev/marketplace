import styled from 'styled-components/native';
import {hasNotch} from 'react-native-device-info';
import {Platform} from 'react-native';

const height = () => {
  if (Platform.OS === 'ios' && hasNotch()) {
    return 140;
  }
  return 70;
};

export const Scroll = styled.ScrollView``;

export const Back = styled.TouchableOpacity``;

export const ShoppingCart = styled.TouchableOpacity`
  background-color: white;
  border-radius: 15px;
  width: 30px;
  height: 30px;
  shadow-color: #000;
  shadow-offset: 1px 2px;
  shadow-opacity: 0.05;
  shadow-radius: 4.84px;
  elevation: 5;
  justify-content: center;
  align-items: center;
`;

export const TagsContainer = styled.View`
  height: 30px;
`;

export const ProductsContainer = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
`;

export const Address = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  height: ${height()}px;
  padding-bottom: 32px;
`;
