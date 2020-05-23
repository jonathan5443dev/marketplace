import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {hasNotch} from 'react-native-device-info';
import {Platform} from 'react-native';

const deviceWidth = Dimensions.get('window').width;

const headerPaddingTop = () => {
  if (Platform.OS === 'ios' && hasNotch()) {
    return 60;
  }
  return 30;
};

export const MainContainer = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const Step = styled.View`
  flex-direction: column;
  width: ${deviceWidth};
  height: 100%;
`;

export const Header = styled.View`
  height: 186px;
  width: ${deviceWidth};
  padding: 16px;
  padding-top: ${headerPaddingTop};
  background-color: ${({theme}) => theme.primary};
`;

export const Content = styled.View``;

export const Back = styled.TouchableOpacity``;
