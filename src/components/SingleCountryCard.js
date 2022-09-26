import React from 'react';
import { CountryCardContainer } from './styles/SingleCountryCard.styled';

const SingleCountryCard = ({ flags, name, population, capital, region }) => {
  return (
    <CountryCardContainer onClick={() => console.log('hello')}>
      <img src={flags.png} alt={name.official} />
      <div>
        <h2>{name.official}</h2>
        <p>
          population: <span>{population}</span>
        </p>
        <p>
          region: <span>{region}</span>
        </p>
        <p>
          capital: <span>{capital}</span>
        </p>
      </div>
    </CountryCardContainer>
  );
};

export default SingleCountryCard;
