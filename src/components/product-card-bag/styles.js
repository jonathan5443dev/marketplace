import styled from 'styled-components/native';

export const Container = styled.View`
  height: 118px;
  width: 100%;
  border-radius: 15px;
  margin-vertical: 8px;
  background-color: #ffffff;
  flex-direction: row;
  shadow-color: #000;
  shadow-offset: 1px 2px;
  shadow-opacity: 0.05;
  shadow-radius: 4.84px;
  elevation: 3;
`;
export const ImageContainer = styled.View`
  width: 30%;
  height: 118px;
`;

export const ProductImage = styled.Image`
  width: 100%;
  border-radius: 15px;
  height: 100%;
`;

export const DetailContainer = styled.View`
  flex-direction: row;
`;

export const Detail = styled.View`
  padding-vertical: 16px;
  padding-horizontal: 16px;
  width: 70%;
`;

export const CounterContainer = styled.View`
  align-items: flex-end;
`;

export const Options = styled.TouchableOpacity`
  position: absolute;
  right: 8px;
  top: 12px;
  opacity: 0.5;
`;
