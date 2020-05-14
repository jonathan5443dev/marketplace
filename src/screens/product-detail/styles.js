import styled from 'styled-components/native';
import theme from '../../config/themes/default';

export const OpenModal = styled.TouchableOpacity`
  background-color: ${theme.white};
  padding-vertical: 10px;
  width: 138px;
  border-width: 1px;
  border-radius: 10px;
  padding-horizontal: 10px;
`;

export const FeatureContainer = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  margin-vertical: 10px;
`;

export const BasicInformation = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const NameAndBrand = styled.View`
  flex: 2;
`;

export const Price = styled.View`
  flex: 1;
`;

export const ContainerCounter = styled.View`
  position: absolute;
  bottom: 0;
  padding-horizontal: 20px;
  padding-vertical: 20px;
  flex-direction: row;
`;

export const ContainerButton = styled.View`
  margin-left: 10px;
  flex: 1;
`;

export const ContentScrollable = styled.ScrollView``;
