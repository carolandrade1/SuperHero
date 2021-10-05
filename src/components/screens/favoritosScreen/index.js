/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import Link from 'next/link';
import { GlobalContext } from '../../context';
import UlContainer from './style';

export default function FavotitosScreen() {
  const { favorites } = useContext(GlobalContext);
  return (
    <section>
      <UlContainer>
        {favorites.map((item) => (
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
                title="Deletar dos favoritos"
                // onClick={() => deleteHero(favorites)}
              >
                -
              </button>
            </div>
          </li>
        ))}
      </UlContainer>
    </section>
  );
}
