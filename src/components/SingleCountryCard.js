import React from 'react';

const SingleCountryCard = ({ flags, name, population, capital, region }) => {
  return (
    <article>
      <img src={flags.png} alt="" />
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
    </article>
  );
};

export default SingleCountryCard;
