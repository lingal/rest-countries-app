import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { CountryPageContainer } from '../styles/CountryPage.styled';
import { FaArrowLeft } from 'react-icons/fa';
import BorderCountriesContainer from '../BorderCountriesContainer';

const CountryPage = () => {
  const { id } = useParams();
  const [country, setCountry] = useState({});
  const [loading, setLoading] = useState(true);
  const getCountry = () => {
    axios
      .get(`https://restcountries.com/v2/alpha/${id}`)
      .then((resp) => {
        if (resp.data) {
          const data = resp.data;
          setCountry(data);
        } else {
          setCountry({});
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  const {
    name,
    nativeName,
    capital,
    flags,
    population,
    region,
    subregion,
    borders,
    currencies,
    topLevelDomain,
    languages
  } = country;

  useEffect(() => {
    getCountry();
  }, [id]);

  if (loading) {
    return <div className="loader"></div>;
  }

  if (!country) {
    return <h2>no country to display</h2>;
  }

  const languagesContainer = () => {
    const newLanguages = languages
      .map((item) => {
        return item.name;
      })
      .join(', ');
    return newLanguages;
  };

  const currenciesContainer = () => {
    const newCurrencies = currencies
      ?.map((item) => {
        return item.code;
      })
      .join(', ');
    return newCurrencies;
  };

  return (
    <CountryPageContainer>
      <Link to="/">
        <button>
          <span>
            <FaArrowLeft />
          </span>
          back
        </button>
      </Link>

      <div>
        <img src={flags.svg} alt={`a flag of ${name}`} />
        <div>
          <h2>{name}</h2>
          <div className="desc">
            <ul className="left-side">
              <li>
                <h3>
                  native name: <span>{nativeName}</span>
                </h3>
              </li>
              <li>
                <h3>
                  population: <span>{population.toLocaleString()}</span>
                </h3>
              </li>
              <li>
                <h3>
                  region: <span>{region}</span>
                </h3>
              </li>
              <li>
                <h3>
                  sub region: <span>{subregion}</span>
                </h3>
              </li>
              <li>
                <h3>
                  capital: <span>{capital}</span>
                </h3>
              </li>
            </ul>
            <ul className="right-side">
              <li>
                <h3>
                  top level domain: <span>{topLevelDomain}</span>
                </h3>
              </li>
              <li>
                <h3>
                  currencies: <span>{currenciesContainer()}</span>
                </h3>
              </li>
              <li>
                <h3>
                  languages: <span>{languagesContainer()}</span>
                </h3>
              </li>
            </ul>
          </div>
          <BorderCountriesContainer data={borders} />
        </div>
      </div>
    </CountryPageContainer>
  );
};

export default CountryPage;
