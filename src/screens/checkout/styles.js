import styled from 'styled-components/native';
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

export const CheckoutContainer = styled.TouchableOpacity`
  background-color: ${props => props.theme.primary};
  flex-direction: row;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 16px;
  align-self: flex-end;
`;

export const CheckoutDescription = styled.View`
  flex: 5;
`;

export const CheckoutIcon = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const BuildingImage = styled.Image`
  width: 100%;
  height: 120px;
  resize-mode: contain;
  margin-top: 16px;
  margin-bottom: 8px;
`;

export const AmountContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SupplierName = styled.View`
  flex-direction: row;
  margin-vertical: 16px;
  align-items: center;
`;

export const Total = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 32px;
  margin-bottom: 24px;
  align-items: center;
`;

export const SupplierTotal = styled.View`
  flex: 1;
`;

export const SupplierInfo = styled.View`
  flex: 4;
`;

export const Logo = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 10px;
  margin-right: 16px;
`;
