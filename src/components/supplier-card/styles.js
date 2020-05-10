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
  justify-content: space-around;
  elevation: 5;
`;

export const SupplierContainerImage = styled.View`
  flex: 2;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
`;

export const SupplierImage = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 15px;
`;

export const SupplierDescription = styled.View`
  flex: 5;
`;

export const Likes = styled.View`
  width: 40px;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
