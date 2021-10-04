/* eslint-disable react/prop-types */
import React from 'react';
import SEO from '../src/components/common/SEO';
import Footer from '../src/components/common/footer';
import HomeScreen from '../src/components/screens/homeScreen';
import Menu from '../src/components/common/menu';

export async function getStaticProps() {
  async function GetHeroes(id) {
    const TOKEN = process.env.TOKEN_SUPERHERO_API;
    const res = await fetch(`https://superheroapi.com/api/${TOKEN}/${id}`);
    const data = await res.json();
    return data;
  }

  const heroes = [];
  for (let id = process.env.FIRST_HERO; id < process.env.LAST_HERO; id += 1) {
    // eslint-disable-next-line no-await-in-loop
    const hero = await GetHeroes(id);
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
      <HomeScreen data={data} />
      <Footer />
    </>
  );
}
