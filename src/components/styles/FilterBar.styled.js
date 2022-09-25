import styled from 'styled-components';

export const FilterBarContainer = styled.div`
  margin-top: 2rem;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  select {
    padding-inline: 2rem;
    padding-block: 1rem;
    color: var(--clr-light-300);
    background: transparent;
    border: none;
    outline: none;
    box-shadow: 0px 0px 3px 3px rgba(43, 56, 69, 0.1);
    -webkit-box-shadow: 0px 0px 3px 3px rgba(43, 56, 69, 0.1);
    -moz-box-shadow: 0px 0px 3px 3px rgba(43, 56, 69, 0.1);
    option {
      background: var(--clr-light-100);
    }
  }
`;
