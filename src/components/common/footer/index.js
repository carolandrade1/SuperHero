import React from 'react';

export default function Footer() {
  return (
    <footer>
      ©
      {new Date().getFullYear()}
      {' '}
      -
      {' '}
      <a href="https://github.com/carolandrade1">
        Carol
      </a>
    </footer>
  );
}
