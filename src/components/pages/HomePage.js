import React from 'react';
import SearchBar from '../SearchBar';
import FilterBar from '../FilterBar';
import CountriesList from '../CountriesList';
import { HomeContainer } from '../styles/Home.styled';

const Home = () => {
  return (
    <HomeContainer>
      <SearchBar />
      <FilterBar />
      <CountriesList />
    </HomeContainer>
  );
};

export default Home;
