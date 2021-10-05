/* eslint-disable react/prop-types */
import React from 'react';
import SEO from '../src/components/common/SEO';
import Footer from '../src/components/common/footer';
import Menu from '../src/components/common/menu';
import FavotitosScreen from '../src/components/screens/favoritosScreen';

export default function NotFoundPage() {
  return (
    <>
      <SEO headTitle="Favoritos" />
      <Menu />
      <FavotitosScreen />
      <Footer />
    </>
  );
}
