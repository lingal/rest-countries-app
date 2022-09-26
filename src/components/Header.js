import React from 'react';
import { useGlobalContext } from '../context';
import { FaMoon } from 'react-icons/fa';
import { StyledHeader } from './styles/Header.styled';

const Header = () => {
  const { setIsDarkMode } = useGlobalContext();

  const handleDarkMode = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  return (
    <StyledHeader>
      <div>
        <h1>Where in the world?</h1>
        <button onClick={handleDarkMode}>
          <span>
            <FaMoon />
          </span>
          dark mode
        </button>
      </div>
    </StyledHeader>
  );
};

export default Header;
