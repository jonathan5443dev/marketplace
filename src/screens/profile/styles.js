import styled from 'styled-components/native';
import {Wrapper} from '../../components/container/styles';
import theme from '../../config/themes/default';

export const List = styled.FlatList`
  width: 100%;
`;

export const Option = styled.TouchableOpacity`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: #e6e6e6;
  padding-vertical: 10px;
`;

export const Header = styled.View`
  flex-direction: row;
  margin-vertical: 24px;
  justify-content: space-between;
  padding-horizontal: 20px;
`;

export const Information = styled.View``;

export const Avatar = styled.Image`
  width: 94px;
  height: 94px;
  border-radius: 62px;
`;

export const SafeArea = styled.SafeAreaView``;

export const OptionsContainer = styled.View`
  margin-bottom: 20px;
  background-color: white;
  elevation: 3;
  shadow-color: #000;
  shadow-offset: 1px 2px;
  shadow-opacity: 0.1;
  padding-horizontal: 20px;
  padding-top: 10px;
`;

export const Container = styled(Wrapper)`
  padding: 0;
`;

export const CloseSession = styled.TouchableOpacity`
  padding-horizontal: 20px;
  color: ${theme.redLigth};
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
