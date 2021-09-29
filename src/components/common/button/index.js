import React from 'react';
import PropTypes from 'prop-types';
import ButtonContainer from './style';

export default function Button({ name }) {
  return (
    <ButtonContainer>
      {name}
    </ButtonContainer>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};
