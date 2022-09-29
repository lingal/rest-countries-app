import styled from 'styled-components';

export const FormContainer = styled.div`
  form {
    color: var(${({ theme }) => theme.ic});
    background-color: var(${({ theme }) => theme.ec});
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
      width: 80%;
      background: transparent;
      border: none;
      outline: none;
      color: currentColor;
    }
  }
`;
