import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  width: 100%;
  justify-items: center;
`;
