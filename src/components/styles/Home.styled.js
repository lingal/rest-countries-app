import styled from 'styled-components';

export const HomeContainer = styled.main`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: minmax(10rem, 1400px);
  justify-content: center;
  row-gap: 3rem;

  @media screen and (max-width: 1400px) {
    grid-template-columns: 90vw;
  }
`;
