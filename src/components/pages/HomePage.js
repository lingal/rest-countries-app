import React from 'react';
import SearchBar from '../SearchBar';
import FilterBar from '../FilterBar';
import CountriesList from '../CountriesList';
import { HomeContainer } from '../styles/Home.styled';
import { FlexContainer } from '../styles/ControlBar.styled';

const Home = () => {
  return (
    <HomeContainer>
      <FlexContainer>
        <SearchBar />
        <FilterBar />
      </FlexContainer>
      <CountriesList />
    </HomeContainer>
  );
};

export default Home;
