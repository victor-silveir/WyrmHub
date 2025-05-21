import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.darkPrimary};
  display: flex;
  justify-content: center;
`;

export const Container = styled.main`
  width: 100%;
  max-width: 1920px;
  padding: 2rem;
`;
