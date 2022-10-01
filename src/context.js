import { useState, createContext, useContext, useEffect } from 'react';

import axios from 'axios';

const url = 'https://restcountries.com/v2/';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchCountry, setSearchCountry] = useState('');
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [region, setRegion] = useState('');
  const [data, setData] = useState([]);


  const baseUrl = () => {
    if (searchCountry) {
      return `${url}${'/name/'}${searchCountry}`;
    }
 
    if (region && region !== 'All') {
      return `${url}${'/region/'}${region}`;
    }
    return 'https://restcountries.com/v2/all';
  };

  const getData = () => {
    axios
      .get(baseUrl())
      .then((resp) => {
        setCountries(resp.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  const getRegions = () => {
    axios
      .get('https://restcountries.com/v2/all')
      .then((resp) => {
        setData(resp.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getData();
  }, [searchCountry, region]);

  useEffect(() => {
    getRegions();
  }, []);

  return (
    <AppContext.Provider
      value={{
        countries,
        isDarkMode,
        setIsDarkMode,
        setSearchCountry,
        isLoading,
        setCountries,
        setIsLoading,
        setRegion,
        data
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
