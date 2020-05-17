import styled from 'styled-components/native';
import theme from '../../config/themes/default';

export const Container = styled.View`
  margin-vertical: 20px;
`;

export const AddressCard = styled.View`
  background-color: ${theme.pureWhite};
  min-height: 110px;
  width: 92%;
  align-self: center;
  margin-vertical: 15px;
  border-radius: 10px;
  padding-horizontal: 32px;
  padding-vertical: 24px;

  shadow-color: #000;
  shadow-offset: 1px 2px;
  shadow-opacity: 0.05;
  shadow-radius: 4.84px;
  elevation: 4;
`;

export const Check = styled.View`
  position: absolute;
  top: 24px;
  right: 24px;
`;

export const ChangeLink = styled.TouchableOpacity`
  background-color: ${props => props.theme.primary};
  position: absolute;
  right: 0;
  bottom: 0;
  border-top-left-radius: 180px;
  border-bottom-right-radius: 10px;
  width: 90px;
  justify-content: center;
  align-items: center;
  height: 30px;
`;

export const Name = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Address = styled.View`
  margin-top: 5px;
  min-height: 41px;
  justify-content: space-between;
`;
