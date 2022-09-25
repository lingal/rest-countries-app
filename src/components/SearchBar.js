import React, { useContext } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FormContainer } from './styles/SearchBar.styled';
import { DataContext } from '../App';
import useFetch from './useFetch';

const SearchBar = () => {
  const { searchCountry, setSearchCountry } = useContext(DataContext);

  const { data, setData } = useFetch(
    'https://restcountries.com/v3.1/' +
      `${!searchCountry ? 'all' : 'name/' + searchCountry}`
  );

  return (
    <FormContainer>
      <form>
        <FaSearch />

        <input
          type="text"
          // value={searchCountry}
          placeholder="Search for a country..."
          // onChange={}
        />
      </form>
    </FormContainer>
  );
};

export default SearchBar;
