import React from 'react';
import FooterContainer from './style';

export default function Footer() {
  return (
    <FooterContainer>
      ©
      {new Date().getFullYear()}
      {' '}
      -
      <a href="https://github.com/carolandrade1" target="_blank" rel="noopener noreferrer">
        Carol Andrade
      </a>
    </FooterContainer>
  );
}
