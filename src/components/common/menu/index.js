/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import Navbar from './style';

export default function Menu() {
  return (
    <Navbar>
      <h1>SUPER HERO</h1>
      <Link href="/" title="Home">
        <a>
          Home
        </a>
      </Link>
    </Navbar>
  );
}
