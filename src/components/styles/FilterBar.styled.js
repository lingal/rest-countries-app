import styled from 'styled-components';

export const FilterBarContainer = styled.div`
  select {
    background-color: var(${({ theme }) => theme.ec});

    padding-inline: 2rem;
    padding-block: 1rem;
    color: var(${({ theme }) => theme.ic});
    border: none;
    outline: none;
    box-shadow: 0px 0px 3px 3px rgba(43, 56, 69, 0.1);
    -webkit-box-shadow: 0px 0px 3px 3px rgba(43, 56, 69, 0.1);
    -moz-box-shadow: 0px 0px 3px 3px rgba(43, 56, 69, 0.1);
    option {
      background-color: var(${({ theme }) => theme.ec});
    }
  }
`;
