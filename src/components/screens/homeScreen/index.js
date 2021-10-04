/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import Link from 'next/link';
import UlContainer from './style';

export default function HomeScreen({ data }) {
  return (
    <UlContainer>
      {data.map((item) => (
        <li key={item.id}>
          <Link href={`/superhero/${item.id}`}>
            <a>
              <img src={item.image.url} alt={item.name} />
              <div>
                <span>
                  #
                  {item.id}
                </span>
                <h2>{item.name}</h2>
              </div>
            </a>
          </Link>
        </li>
      ))}
    </UlContainer>
  );
}
