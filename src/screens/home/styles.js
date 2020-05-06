import styled from 'styled-components/native';
import {hasNotch} from 'react-native-device-info';
import {Platform} from 'react-native';

const height = () => {
  if (Platform.OS === 'ios' && hasNotch()) {
    return 140;
  }
  return 70;
};

export const Welcome = styled.TouchableOpacity`
  flex-direction: row;
`;

export const Address = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: flex-end;
  height: ${height()}px;
  padding-bottom: 16px;
`;

export const Information = styled.View`
  padding-left: 16px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
`;

export const Category = styled.TouchableOpacity`
  height: 140px;
  margin-vertical: 12px;
  border-radius: 15px;
  overflow: hidden;
`;

export const CategoryImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  resize-mode: contain;
  padding-horizontal: 16px;
  padding-vertical: 8px;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Overlay = styled.Image`
  left: 0;
  right: 0;
  height: 100%;
  width: 110%;
  bottom: 0;
  position: absolute;
  resize-mode: stretch;
`;

export const Tag = styled.View`
  height: 10px;
  position: absolute;
  right: 0;
  top: 16px;
  width: 100px;
`;
