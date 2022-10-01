import styled from 'styled-components';

export const LoaderContainer = styled.div`
height: 80vh;
display: grid;
place-content: center;
  span {
    margin-inline: auto;
    border: 20px solid #eaf0f6;
    border-radius: 50%;
    border-top: 20px solid #ff7a59;
    width: 150px;
    height: 150px;
    animation: spinner 4s linear infinite;

    @keyframes spinner {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
