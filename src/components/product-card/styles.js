import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 180px;
  width: 100%;
  flex-direction: row;
  background-color: white;
  margin-vertical: 8px;
  padding-left: 16px;
  align-items: center;
  shadow-color: #000;
  shadow-offset: 1px 4px;
  shadow-opacity: 0.05;
  shadow-radius: 4.84px;
  justify-content: space-around;
  elevation: 5;
`;

export const ProductContainerImage = styled.View`
  flex: 2;
  align-items: flex-end;
  justify-content: flex-start;
  padding-top: 10px
  height: 100%;
`;

export const ProductImage = styled.Image`
  width: 100px;
  height: 110px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
`;

export const ProductDescription = styled.View`
  flex: 5;
`;

export const ButtonContainer = styled.View`
  width: 105px;
`;
