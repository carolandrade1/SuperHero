/* eslint-disable react/prop-types */
import React from 'react';
import SEO from '../src/components/common/SEO';
import Footer from '../src/components/common/footer';
import HomeScreen from '../src/components/screens/homeScreen';
import Menu from '../src/components/common/menu';

export async function getStaticProps() {
  const res = await fetch('https://akabab.github.io/superhero-api/api/all.json');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  return (
    <>
      <SEO headTitle="Home" />
      <Menu />
      <HomeScreen data={data} />
      <Footer />
    </>
  );
}
