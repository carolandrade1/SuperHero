/* eslint-disable react/prop-types */
import React from 'react';
import SEO from '../src/components/common/SEO';
import Footer from '../src/components/common/footer';
import Menu from '../src/components/common/menu';
import NotFoundScreen from '../src/components/screens/notFoundScreen';

export default function NotFoundPage() {
  return (
    <>
      <SEO headTitle="Home" />
      <Menu />
      <NotFoundScreen />
      <Footer />
    </>
  );
}
