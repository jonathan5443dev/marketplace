import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  InputField,
  ErrorMessage,
  InputContainer,
  Icon,
  IconContainer,
  Label,
  LabelContainer,
} from './styles';
import theme from '../../config/themes/default';

const Input = props => {
  const {error, icon} = props;
  const [isFocus, setIsFocus] = useState(false);

  const inputColor = () => {
    if (error) {
      return theme.primary;
    }
    if (isFocus) {
      return theme.white;
    }
    return theme.white;
  };

  const textColor = () => {
    if (error) {
      return theme.primary;
    }
    return theme.gray;
  };

  return (
    <>
      <InputContainer borderColor={inputColor()} multiline={props.multiline}>
        {icon && (
          <IconContainer borderColor={inputColor()}>
            <Icon source={icon} tintColor={inputColor()} />
          </IconContainer>
        )}
        <LabelContainer>
          <Label color={textColor()}>{props.label}</Label>
        </LabelContainer>
        <InputField
          {...props}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          placeholderTextColor={inputColor()}
          autoCapitalize="none"
          multiline={props.multiline}
          numberOfLines={4}
        />
      </InputContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
};

Input.propTypes = {
  error: PropTypes.string,
  icon: PropTypes.number,
  editable: PropTypes.bool,
  label: PropTypes.string.isRequired,
  multiline: PropTypes.bool,
};

Input.defaultProps = {
  error: undefined,
  icon: undefined,
  editable: true,
  multiline: false,
};

export default Input;
