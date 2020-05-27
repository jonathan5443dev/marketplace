import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  height: 100%;
  padding: 24px;
`;

export const ContainerFullWidth = styled.ScrollView`
  height: 100%;
`;

export const AdviceContainer = styled.View`
  margin-top: 16px;
  margin-bottom: 120px;
`;

export const SearchContainer = styled.View`
  padding-horizontal: 24px;
  padding-top: 16px;
`;

export const CameraImage = styled.Image`
  height: 90px;
  width: 90px;
  margin-bottom: 16px;
`;

export const SelectedImage = styled.Image`
  height: 220px;
  width: 220px;
  margin-vertical: 64px;
`;

export const EmptyInfo = styled.View`
  margin-vertical: 64px;
  max-width: 80%;
  justify-content: center;
  align-items: center;
`;

export const Link = styled.TouchableOpacity`
  align-items: center;
`;

export const ImageSelection = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ConfirmationItem = styled.View`
  justify-content: center;
  width: 100%;
  padding-vertical: 10px;
  padding-horizontal: 16px;
  border-bottom-width: 1px;
  border-color: ${({theme}) => theme.whiteBackground};
`;

export const PublishContainer = styled.View`
  margin-top: 50px;
  padding-horizontal: 16px;
`;

export const PhotoCarousel = styled.View`
  height: 100px;
  width: 100%;
  flex-direction: row;
`;
export const PhotoItem = styled.Image`
  height: 100px;
  margin-right: 2px;
  border-radius: 15px
  width: 100px;
`;
