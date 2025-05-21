import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.img`
  width: 48px;
  height: 48px;
  animation: ${spin} 1s linear infinite;
  margin: 2rem auto;
  display: block;
`;
