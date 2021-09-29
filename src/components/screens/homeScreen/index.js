/* eslint-disable react/prop-types */
import React from 'react';
import UlContainer from './style';

export default function HomeScreen({ data }) {
  return (
    <UlContainer>
      <li>
        <a href="/">
          <img src={data.image.url} alt={data.name} />
          <h3>{data.id}</h3>
          <h2>{data.name}</h2>
        </a>
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
