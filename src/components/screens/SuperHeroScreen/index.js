/* eslint-disable react/prop-types */
import React from 'react';
import SuperHeroContainer, { ImageContainer, InfoContainer, SuperHeroCard } from './style';

export default function SuperHeroScreen({ data }) {
  return (
    <SuperHeroContainer>
      <SuperHeroCard>
        <InfoContainer>
          <div>
            <p>
              Nome
            </p>
            <span>
              {data.name}
            </span>
          </div>
          <div>
            <p>
              Nome Completo
            </p>
            <span>
              {data.biography['full-name']}
            </span>
          </div>
          <div>
            <p>
              Ocupação
            </p>
            <span>
              {data.work.occupation}
            </span>
          </div>
          <div>
            <p>
              Poder
            </p>
            <span>
              {data.powerstats.power}
            </span>
          </div>
          <div>
            <p>
              Inteligencia
            </p>
            <span>
              {data.powerstats.intelligence}
            </span>
          </div>
          <div>
            <p>
              Força
            </p>
            <span>
              {data.powerstats.strength}
            </span>
          </div>
          <div>
            <p>
              Velocidade
            </p>
            <span>
              {data.powerstats.speed}
            </span>
          </div>
        </InfoContainer>
        <ImageContainer>
          <img src={data.image.url} alt={data.name} />
        </ImageContainer>
      </SuperHeroCard>
    </SuperHeroContainer>
  );
}
