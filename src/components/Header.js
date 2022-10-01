import React from 'react';
import { useGlobalContext } from '../context';
import { FaMoon, FaSun } from 'react-icons/fa';
import { StyledHeader } from './styles/Header.styled';

const Header = () => {
  const { setIsDarkMode, isDarkMode } = useGlobalContext();

  const handleDarkMode = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  return (
    <StyledHeader>
      <div>
        <h1>Where in the world?</h1>
        <button onClick={handleDarkMode}>
          {isDarkMode ? <FaSun /> : <FaMoon />}

          <span>dark mode</span>
        </button>
      </div>
    </StyledHeader>
  );
};

export default Header;
