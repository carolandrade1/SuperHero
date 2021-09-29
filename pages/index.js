/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import SEO from '../src/components/common/SEO';
import Footer from '../src/components/common/footer';
import HomeScreen from '../src/components/screens/homeScreen';

export async function getStaticProps() {
  const TOKEN = process.env.TOKEN_SUPERHERO_API;
  const id = 50;

  const res = await fetch(`https://superheroapi.com/api/${TOKEN}/${id}`);
  const data = await res.json();
  // console.log(data);

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
      <HomeScreen data={data} />
      <Footer />
    </>
  );
}
