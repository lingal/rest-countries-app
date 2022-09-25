import React from 'react';
import SearchBar from '../SearchBar';
import FilterBar from '../FilterBar';
import CountriesList from '../CountriesList';

const Home = () => {
  return (
    <>
      <SearchBar />
      <FilterBar />
      <CountriesList />
    </>
  );
};

export default Home;
