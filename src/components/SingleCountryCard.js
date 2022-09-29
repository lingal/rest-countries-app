import React from 'react';
import { CountryCardContainer } from './styles/SingleCountryCard.styled';
import { Link } from 'react-router-dom';

const SingleCountryCard = ({ flags, name, population, capital, region, alpha3Code }) => {

  return (
    <Link to={`/country/${alpha3Code}`}>
      <CountryCardContainer>
        <img src={flags.png} alt={name} />
        <div>
          <h2>{name}</h2>
          <p>
            population: <span>{population.toLocaleString()}</span>
          </p>
          <p>
            region: <span>{region}</span>
          </p>
          <p>
            capital: <span>{capital}</span>
          </p>
        </div>
      </CountryCardContainer>
    </Link>
  );
};

export default SingleCountryCard;
