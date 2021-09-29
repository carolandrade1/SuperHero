/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import Link from 'next/link';
import UlContainer from './style';

export default function HomeScreen({ data }) {
  return (
    <UlContainer>
      <li key={data.id}>
        <Link href={`/superhero/${data.id}`}>
          <a>
            <img src={data.image.url} alt={data.name} />
            <h3>{data.id}</h3>
            <h2>{data.name}</h2>
          </a>
        </Link>
      </li>
      {/* {data.map((item) => (
        <li>
          <a href="/">
            <img src={item.image.url} alt={item.name} />
            <h3>{item.id}</h3>
            <h2>{item.name}</h2>
          </a>
        </li>
      ))} */}
    </UlContainer>
  );
}
