import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { ErrorPageStyled } from '../styles/ErrorPage.styled';

const ErrorPage = () => {
  return (
    <ErrorPageStyled>
      <h1>ooops! This section doesn't exist</h1>
      <Link to="/">
        <button>
          <span>
            <FaArrowLeft />
          </span>
          back
        </button>
      </Link>
    </ErrorPageStyled>
  );
};

export default ErrorPage;
