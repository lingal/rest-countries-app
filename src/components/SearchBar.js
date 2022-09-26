import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { FormContainer } from './styles/SearchBar.styled';
import { useGlobalContext } from '../context';

const SearchBar = () => {
  const { setSearchCountry } = useGlobalContext();

  const handleSearch = (e) => {
    setSearchCountry(e.target.value);
  };

  return (
    <FormContainer>
      <form>
        <FaSearch />
        <input
          type="text"
          // value={searchCountry}
          placeholder="Search for a country..."
          onChange={handleSearch}
        />
      </form>
    </FormContainer>
  );
};

export default SearchBar;
