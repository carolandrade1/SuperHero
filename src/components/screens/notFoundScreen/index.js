/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import NotFoundContainer, { Erro } from './style';

export default function NotFoundScreen() {
  return (
    <NotFoundContainer>
      <Erro>
        <img src="https://i.postimg.cc/Ghs0XTX5/Error-TV-1.png" alt="TV com a tela 404" />
      </Erro>
      <Link href="/">
        <a>
          Voltar ao inicio
        </a>
      </Link>
    </NotFoundContainer>
  );
}
