/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import SEO from '../src/components/common/SEO';
import Footer from '../src/components/common/footer';
import HomeScreen from '../src/components/screens/homeScreen';
import Menu from '../src/components/common/menu';
import SearchBox from '../src/components/common/form';

async function sduiaffsduia(id) {
  const TOKEN = process.env.TOKEN_SUPERHERO_API;

  const res = await fetch(`https://superheroapi.com/api/${TOKEN}/${id}`);
  const data = await res.json();
  console.log(data);
  return data;
}

export async function getStaticProps() {
  const heroes = [];
  for (let id = 1; id < 10; id++) {
    // eslint-disable-next-line no-await-in-loop
    const hero = await sduiaffsduia(id);
    heroes.push(hero);
  }

  return {
    props: {
      data: heroes,
    },
  };
}

export default function Home({ data }) {
  return (
    <>
      <SEO headTitle="Home" />
      <Menu />
      <SearchBox />
      <HomeScreen data={data} />
      <Footer />
    </>
  );
}
