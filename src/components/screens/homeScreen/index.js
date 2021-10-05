/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import Link from 'next/link';
import { GlobalContext } from '../../context';
import Header, { Form, UlContainer } from './style';

export default function HomeScreen({ data }) {
  const { addHero } = useContext(GlobalContext);

  const [searchHero, setSearchHero] = React.useState('');

  return (
    <section>
      <Header>
        <Form>
          <div>
            <input
              aria-label="Procurar herói"
              type="search"
              placeholder="Procurar herói"
              onChange={(event) => {
                setSearchHero(event.target.value);
              }}
            />
            <img src="https://static.thenounproject.com/png/1272983-200.png" alt="" />
          </div>
        </Form>
        <Link href="/favoritos">
          <a>
            Favoritos
          </a>
        </Link>
      </Header>
      <UlContainer>
        {data.filter((value) => {
          if (searchHero === '') {
            return value;
          } if (value.id.toString().includes(searchHero.toString())) {
            return value;
          } if (value.name.toLowerCase().includes(searchHero.toLowerCase())) {
            return value;
          }
        }).map((item) => (
          <li key={item.id}>
            <Link href={`/superhero/${item.id}`}>
              <a>
                <img src={item.images.sm} alt={`Imagem do herói ${item.name}`} loading="lazy" />
              </a>
            </Link>
            <div>
              <h2>{item.name}</h2>
              <button
                type="button"
                onClick={() => addHero(item)}
                title="Adicionar aos favoritos"
              >
                +
              </button>
            </div>
          </li>
        ))}
      </UlContainer>
    </section>
  );
}
