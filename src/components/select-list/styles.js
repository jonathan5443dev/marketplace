import styled from 'styled-components/native';

export const List = styled.View`
  width: 100%;
  background-color: white;
  shadow-color: #000;
  shadow-offset: 1px 2px;
  shadow-opacity: 0.05;
  shadow-radius: 4.84px;
  elevation: 4;
  margin-vertical: 16px;
`;

export const ListItem = styled.TouchableOpacity`
  width: 100%;
  height: 37px;
  padding-horizontal: 24px;
  border-bottom-width: 0.3px;
  justify-content: center;
  border-bottom-color: ${({theme}) => theme.gray};
`;
