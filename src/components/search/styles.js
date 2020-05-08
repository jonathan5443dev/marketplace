import styled from 'styled-components/native';
import theme from '../../config/themes/default';

export const InputContainer = styled.View`
  width: 100%;
  height: 37px;
  background-color: white;
  border-radius: 16px;
  margin-bottom: 6px;
  padding-bottom: 5px;
  background-color: ${theme.whiteBackground};
`;
export const IconContainer = styled.View`
  position: absolute;
  left: 16px;
  top: 10px;
`;

export const Icon = styled.Image`
  height: 16px;
  width: 16px;
  resize-mode: contain;
`;

export const InputField = styled.TextInput`
  flex: 1;
  width: 100%;
  font-family: ${theme.fontFamily}
  padding-horizontal: 10px;
  padding-top: 6px;
  padding-left: 40px;
`;
