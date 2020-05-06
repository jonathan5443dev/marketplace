import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {InputField, InputContainer, Icon, IconContainer} from './styles';
import theme from '../../config/themes/default';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const Search = props => {
  return (
    <>
      <InputContainer>
        <IconContainer>
          <FontAwesomeIcon style={{color: theme.gray}} icon={faSearch} />
        </IconContainer>
        <InputField {...props} autoCapitalize="none" />
      </InputContainer>
    </>
  );
};

Search.propTypes = {
  error: PropTypes.string,
  icon: PropTypes.number,
  editable: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

Search.defaultProps = {
  error: undefined,
  icon: undefined,
  editable: true,
};

export default Search;
