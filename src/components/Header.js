import React from 'react';
import { FaMoon } from 'react-icons/fa';
import { StyledHeader } from './styles/Header.styled';

const Header = ({ onClick }) => {
  return (
    <StyledHeader>
      <div>
        <h1>Where in the world?</h1>
        <button onClick={() => onClick(true)}>
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
