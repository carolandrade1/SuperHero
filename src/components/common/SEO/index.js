import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

function SEO({ headTitle }) {
  const pageTitleDefault = 'Super Hero';
  const hasHeadTitle = Boolean(headTitle);
  const title = hasHeadTitle
    ? (`${headTitle} | ${pageTitleDefault}`)
    : (pageTitleDefault);
  const url = 'https://super-hero-beta.vercel.app/';
  const image = 'https://i.postimg.cc/3xGXctTv/heroes.png';
  const description = 'SuperHero';

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Super Hero Page" />
      <meta name="author" content="Carol Andrade Santos" />
      <meta name="keywords" content="Next.js, React, SuperHeroAPI" />
      <meta httpEquiv="content-language" content="pt-br" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
}

SEO.defaultProps = {
  headTitle: '',
};

SEO.propTypes = {
  headTitle: PropTypes.string,
};

export default SEO;
