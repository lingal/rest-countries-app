import styled from 'styled-components';

export const CountryCardContainer = styled.article`
height: 100%;
  background-color: var(${({ theme }) => theme.ec});
  border-radius: 10px;
  box-shadow: 0px 0px 3px 3px rgba(43, 56, 69, 0.1);
  -webkit-box-shadow: 0px 0px 3px 3px rgba(43, 56, 69, 0.1);
  -moz-box-shadow: 0px 0px 3px 3px rgba(43, 56, 69, 0.1);
  cursor: pointer;
  position: relative;

  &:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: hsla(0, 0%, 0%, 0.65);
    border-radius: 10px;
    z-index: 1000;
  }
  img {
    width: 100%;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    height: 11rem;
  }
  div {
    color: inherit;
    padding-inline: 1.5rem;
    padding-top: 1.25rem;
    padding-bottom: 2.25rem;
    h2 {
      font-size: 1.1rem;
      font-weight: var(--fw-800);
      margin-bottom: 1rem;
    }
    p {
      font-weight: var(--fw-600);
      & > span {
        font-weight: var(--fw-300);
      }
    }
  }
`;
