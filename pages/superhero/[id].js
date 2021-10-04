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

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
}

export default function SuperHeroPage({ data }) {
  return (
    <>
      <SEO headTitle="Hero" />
      <Menu />
      <SuperHeroScreen data={data} />
      <Footer />
    </>
  );
}

SuperHeroPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
