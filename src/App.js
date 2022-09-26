import React from 'react';
import { useGlobalContext } from './context';
// import useFetch from './components/useFetch';

import Home from './components/pages/HomePage';
import CountryPage from './components/pages/CountryPage';
import ErrorPage from './components/pages/ErrorPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './components/styles/GlobalStyle';
import Header from './components/Header';

const url = 'https://restcountries.com/v3.1/all';

const Colors = {
  baseColors: {
    bg: '--clr-light-200',
    fc: '--clr-dark-100',
    ec: '--clr-light-100',
    ic: '--clr-light-300'
  },
  darkColors: {
    bg: '--clr-dark-200',
    fc: '--clr-light-100',
    ec: '--clr-dark-300',
    ic: '--clr-light-200'
  }
};



function App() {

  const { isDarkMode, isLoading } = useGlobalContext();

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  return (
    <>
      <ThemeProvider theme={Colors[!isDarkMode ? 'baseColors' : 'darkColors']}>
        <Router>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country/:id" element={<CountryPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
