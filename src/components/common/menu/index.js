import React from 'react';
import Link from 'next/link';
import Navbar from './style';

export default function Menu() {
  return (
    <Navbar>
      <h1>SUPERHERO</h1>
      <Link href="/">
        <a href="/" title="Home">Home</a>
      </Link>
    </Navbar>
  );
}
