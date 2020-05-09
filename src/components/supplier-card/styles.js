import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 100px;
  width: 100%;
  border-radius: 15px;
  flex-direction: row;
  background-color: white;
  margin-vertical: 8px;
  padding: 16px;
  align-items: center;
  shadow-color: #000;
  shadow-offset: 1px 4px;
  shadow-opacity: 0.05;
  shadow-radius: 4.84px;
  elevation: 5;
`;

export const SupplierImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 15px;
`;

export const SupplierDescription = styled.View`
  padding: 16px;
`;
