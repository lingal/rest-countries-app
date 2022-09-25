import styled from 'styled-components';

export const FormContainer = styled.div`
  margin-top: 2rem;
  max-width: 90%;
  margin-inline: auto;

  form {
    color: var(--clr-light-300);
    padding-inline: 2rem;
    padding-block: 1rem;
    border-radius: 5px;
    box-shadow: 0px 0px 3px 3px rgba(43, 56, 69, 0.1);
    -webkit-box-shadow: 0px 0px 3px 3px rgba(43, 56, 69, 0.1);
    -moz-box-shadow: 0px 0px 3px 3px rgba(43, 56, 69, 0.1);
    svg {
      margin-right: 1rem;
      color: inherit;
    }

    input {
      border: none;
      outline: none;
      background: transparent;
      color: inherit;
    }
  }
`;
