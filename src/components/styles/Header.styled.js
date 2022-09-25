import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.bg};
  padding-block: 2rem;
  box-shadow: -2px 5px 5px 0px rgba(43, 56, 69, 0.10);
  -webkit-box-shadow: -2px 5px 5px 0px rgba(43, 56, 69, 0.10);
  -moz-box-shadow: -2px 5px 5px 0px rgba(43, 56, 69, 0.10);
  div {
    display: flex;
    justify-content: space-between;
    width: 90vw;
    max-width: 1400px;
    margin-inline: auto;
    h1 {
      font-size: 1.15rem;
      font-weight: var(--fw-800);
      text-transform: none;
    }
    button {
      background: transparent;
      border: none;
      cursor: pointer;
      text-transform: capitalize;

      & > * {
        margin-right: 0.5em;
      }
    }
  }
`;
