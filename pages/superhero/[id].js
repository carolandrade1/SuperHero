import React from 'react';
import PropTypes from 'prop-types';
import SEO from '../../src/components/common/SEO';
import Footer from '../../src/components/common/footer';
import Menu from '../../src/components/common/menu';
import SuperHeroScreen from '../../src/components/screens/SuperHeroScreen';

export async function getStaticProps({ params }) {
  const TOKEN = process.env.TOKEN_SUPERHERO_API;

  const res = await fetch(`https://superheroapi.com/api/${TOKEN}/${params.id}`);
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      data,
    },
  };
}

export default function SuperHeroPage({ data }) {
  return (
    <>
      <SEO headTitle="Descrição" />
      <Menu />
      <SuperHeroScreen data={data} />
      <Footer />
    </>
  );
}

SuperHeroPage.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    sprites: PropTypes.shape({
      front_default: PropTypes.string,
    }),
  }).isRequired,
};

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: '1',
        },
      },
      {
        params: {
          id: '2',
        },
      },
      {
        params: {
          id: '3',
        },
      },
    ],
    fallback: false,
  };
}
