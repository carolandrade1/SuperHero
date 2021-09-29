import React from 'react';
import Head from 'next/head';

function IndexHead() {
  return (
    <>
      <Head>
        <link rel="icon" sizes="32x32" href="https://static.billboard.com/files/media/superhero-drawing-2017-billboard-1548-compressed.jpg" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600&display=swap" rel="stylesheet" />
      </Head>
    </>
  );
}

export default IndexHead;
