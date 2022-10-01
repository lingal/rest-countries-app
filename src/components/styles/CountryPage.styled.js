import styled from 'styled-components';

export const CountryPageContainer = styled.section`
  width: 90vw;
  max-width: 1400px;
  margin-inline: auto;
  font-size: clamp(0.875rem, 1.25vw, 1rem);
  padding-bottom: 2rem;

  button {
    justify-self: left;
    width: max-content;
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
    margin-top: 2.5rem;
    margin-bottom: 3rem;
    span {
      height: 100%;
      margin-right: 0.75rem;
    }
  }

  & > div:first-of-type {
    display: grid;
    grid-template-columns: minmax(10rem, 27rem);
    justify-content: center;
    .image-container {
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    @media screen and (min-width: 1000px) {
      grid-template-columns: repeat(2, minmax(10rem, 35rem));
      grid-template-rows: minmax(0rem, 50vh);
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
    }
  }

  h2 {
    font-size: 1.75em;
    margin-block: 1em;
  }

  .desc {
    display: flex;
    column-gap: clamp(1.5em, 3vw, 2.5em);
    justify-content: space-between;
    row-gap: 1em;
    h3 {
      line-height: 2;
    }

    & > * span {
      font-weight: initial;
    }

    @media screen and (max-width: 800px) {
      flex-direction: column;
    }

    .right-side {
      & > :nth-child(1) span {
        text-transform: lowercase;
      }
    }
  }
`;
