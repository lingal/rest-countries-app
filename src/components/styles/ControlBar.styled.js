import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  row-gap: 2.5rem;

  & > :first-child {
    flex-grow: 0.2;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
