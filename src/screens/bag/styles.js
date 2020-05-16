import styled from 'styled-components/native';
import theme from '../../config/themes/default';
import {hasNotch} from 'react-native-device-info';
import {Platform} from 'react-native';

const height = () => {
  if (Platform.OS === 'ios' && hasNotch()) {
    return 140;
  }
  return 70;
};

export const Back = styled.TouchableOpacity`
  padding-bottom: 16px;
`;

export const Header = styled.View`
  flex-direction: column;
  justify-content: flex-end;
  height: ${height()}px;
  z-index: 10;
  elevation: 5;
`;

export const SupplierName = styled.View`
  flex-direction: row;
  margin-vertical: 16px;
  align-items: center;
`;

export const Logo = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 10px;
  margin-right: 16px;
`;

export const ProductContainer = styled.View`
  margin-vertical: 16px;
  max-height: 100%;
`;

export const Empty = styled.View`
  align-items: center;
  padding: 30px;
`;

export const Footer = styled.View`
  width: 100%;
  padding-horizontal: 16px;
  bottom: 0;
  padding-bottom: 70px;
  background-color: ${theme.background};
`;

export const Total = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-vertical: 8px;
`;
