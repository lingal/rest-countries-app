import styled from 'styled-components';

export const BorderCountriesStyled = styled.div`
  display: flex;
  margin-top: 2rem;
  gap: 0.5em;
  h3 {
    flex-shrink: 0;
  }
  div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
    span {
      padding-inline: 1.5em;
      background-color: var(${({ theme }) => theme.ec});
      box-shadow: 0px 0px 3px 3px rgba(43, 56, 69, 0.1);
      -webkit-box-shadow: 0px 0px 3px 3px rgba(43, 56, 69, 0.1);
      -moz-box-shadow: 0px 0px 3px 3px rgba(43, 56, 69, 0.1);
    }
  }
`;
