import styled from 'styled-components/native';
import theme from '../../config/themes/default';

export const Content = styled.Modal`
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding-vertical: 50px;
  padding-horizontal: 5px;
  background-color: ${theme.pureWhite};
`;

export const TopContent = styled.View`
  width: 80%;
  justify-content: space-around;
  align-items: center;
  align-self: center;
`;

export const Description = styled.View`
  align-items: center;
`;

export const BagsImages = styled.Image`
  height: 50%;
  width: 100%;
  resize-mode: contain;
`;

export const CloseButton = styled.TouchableOpacity``;

export const HeaderContainer = styled.View`
  background-color: transparent;
  padding-top: 50px;
  flex-direction: row;
  justify-content: flex-end;
`;
