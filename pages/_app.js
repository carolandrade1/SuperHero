import React from 'react';
import PropTypes from 'prop-types';

import GlobalStyle from '../src/theme/GlobalStyles';
import IndexHead from '../src/components/common/head';
import { GlobalProvider } from '../src/components/context';

export default function App({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <IndexHead />
      <GlobalStyle />
      <Component
      // eslint-disable-next-line react/jsx-props-no-spreading
        {...pageProps}
      />
    </GlobalProvider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};
