import {
  useState,
  createContext,
  useContext,
  useEffect,
  useCallback
} from 'react';

import axios from 'axios';

const url = 'https://restcountries.com/v3.1/';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchCountry, setSearchCountry] = useState('');
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [region, setRegion] = useState('');

  const getData = () => {
    axios
      .get(`${url}${'/name/'}${searchCountry}`)
      .then((resp) => setCountries(resp.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getData();
  }, [searchCountry]);

  console.log(countries);

  return (
    <AppContext.Provider
      value={{
        countries,
        isDarkMode,
        setIsDarkMode,
        setSearchCountry,
        isLoading,
        setCountries,
        setIsLoading
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
