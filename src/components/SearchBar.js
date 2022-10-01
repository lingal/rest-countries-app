import React, { useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FormContainer } from './styles/SearchBar.styled';
import { useGlobalContext } from '../context';

const SearchBar = () => {
  const { setSearchCountry } = useGlobalContext();
  const searchValue = useRef('');

  const handleSearch = () => {
    setSearchCountry(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FaSearch />
        <input
          type="text"
          ref={searchValue}
          placeholder="Search for a country..."
          onChange={handleSearch}
        />
      </form>
    </FormContainer>
  );
};

export default SearchBar;
