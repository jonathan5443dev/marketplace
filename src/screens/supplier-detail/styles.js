import styled from 'styled-components/native';
import {hasNotch} from 'react-native-device-info';
import {Platform} from 'react-native';

const height = () => {
  if (Platform.OS === 'ios' && hasNotch()) {
    return 140;
  }
  return 70;
};

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

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: ${height()}px;
  padding-bottom: 32px;
  z-index: 10;
  elevation: 5;
`;

export const Banner = styled.ImageBackground`
  position: absolute;
  width: 110%;
  height: 215px;
  top: 0;
`;
export const Detail = styled.View`
  background-color: white;
  border-radius: 15px;
  padding: 24px;
  margin-bottom: 16px;
  shadow-color: #000;
  shadow-offset: 1px 4px;
  shadow-opacity: 0.05;
  shadow-radius: 4.84px;
  elevation: 5;
`;
export const Icons = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 32px;
`;

export const IconContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.View`
  height: 38px;
  width: 38px;
  background-color: ${({theme}) => theme.grayLight};
  border-radius: 19px;
  justify-content: center;
  align-items: center;
`;

export const Products = styled.View``;
