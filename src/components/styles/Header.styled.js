import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: var(${({ theme }) => theme.ec});
  padding-block: 2rem;
  box-shadow: -2px 5px 5px 0px rgba(43, 56, 69, 0.1);
  -webkit-box-shadow: -2px 5px 5px 0px rgba(43, 56, 69, 0.1);
  -moz-box-shadow: -2px 5px 5px 0px rgba(43, 56, 69, 0.1);
  div {
    display: flex;
    justify-content: space-between;
    width: 90vw;
    max-width: 1400px;
    margin-inline: auto;
    h1 {
      font-size: 1rem;
      font-weight: var(--fw-800);
      text-transform: none;
    }
    button {
      font-size: 1rem;
      background: transparent;
      border: none;
      cursor: pointer;
      text-transform: capitalize;
      & > span {
        margin-left: 0.35em;
        @media screen and (max-width: 400px) {
          display: none;
        }
      }
    }
  }
`;
