import React, { useState, createContext } from 'react';
import useFetch from './components/useFetch';

import Home from './components/pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './components/styles/GlobalStyle';
import Header from './components/Header';

const url = 'https://restcountries.com/v3.1/all';


const Colors = {
  baseColors: {
    bg: '--clr-light-200',
    fc: '--clr-dark-300'
  },
  darkColors: {
    bg: '--clr-dark-200',
    fc: '--clr-light-100'
  }
};

export const DataContext = React.createContext();

function App() {
  const { data, setData, isLoading } = useFetch(url);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [region, setRegion] = useState('');
  const [searchCountry, setSearchCountry] = useState('');

  if (isLoading) {
    return <h1>loading...</h1>;
  }
  const handleDarkMode = () => {
    setIsDarkMode((e) => !e);
  };


  return (
    <DataContext.Provider
      value={{ data, setRegion, searchCountry, setSearchCountry, setData }}
    >
      <ThemeProvider theme={Colors[isDarkMode ? 'darkColors' : 'baseColors']}>
        <Router>
          <GlobalStyle />
          <Header onClick={handleDarkMode} />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </DataContext.Provider>
  );
}

export default App;
