import styled from "styled-components";

export const ErrorPageStyled = styled.section`
  margin-top: 5rem;
  text-align: center;
  padding-inline: 1em;
  h1 {
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }
  button {
    width: max-content;
    margin-inline: auto;
    display: flex;
    align-content: center;
    font-size: 1rem;
    text-transform: capitalize;
    line-height: 1;
    padding: 0.35rem 1.75rem;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 0px 3px 3px rgba(43, 56, 69, 0.1);
    -webkit-box-shadow: 0px 0px 3px 3px rgba(43, 56, 69, 0.1);
    -moz-box-shadow: 0px 0px 3px 3px rgba(43, 56, 69, 0.1);
    background-color: var(${({ theme }) => theme.ec});
    cursor: pointer;
    span {
      height: 100%;
      margin-right: 0.75rem;
    }
  }
`;