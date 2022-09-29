import styled from 'styled-components';

export const CountryPageContainer = styled.section`
  width: 90vw;
  max-width: 1400px;
  margin-inline: auto;
  font-size: 1rem;
  button {
    justify-self: left;
    width: max-content;
    display: flex;
    align-content: center;
    font-size: 1rem;
    line-height: 1;
    padding: 0.35rem 1.75rem;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 0px 3px 3px rgba(43, 56, 69, 0.1);
    -webkit-box-shadow: 0px 0px 3px 3px rgba(43, 56, 69, 0.1);
    -moz-box-shadow: 0px 0px 3px 3px rgba(43, 56, 69, 0.1);
    background-color: var(${({ theme }) => theme.ec});
    cursor: pointer;
    margin-top: 2.5rem;
    margin-bottom: 3rem;
    span {
      height: 100%;
      margin-right: 0.75rem;
    }
  }

  & > div:first-of-type {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    img {
      flex-grow: 0.3;
      height: 24rem;
    }
    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
  }

  h2 {
    font-size: 1.75em;
    margin-block: 1em;
  }

  .desc {
    display: grid;
    column-gap: 5em;
    row-gap: 1em;
    h3 {
      line-height: 2;
    }

    & > * span {
      font-weight: initial;
    }

    @media screen and (min-width: 1000px) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
