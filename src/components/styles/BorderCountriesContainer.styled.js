import styled from 'styled-components';

export const BorderCountriesStyled = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2rem;
  flex-wrap: wrap;
  gap: 0.5em;
  h3 {
    flex-shrink: 0;
  }
  span {
    padding-inline: 0.5em;
    background-color: var(${({ theme }) => theme.ec});
  }
`;
