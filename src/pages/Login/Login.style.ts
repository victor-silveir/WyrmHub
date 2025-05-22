import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 580px;
  padding: 4rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    z-index: 2;
    background-color: rgb(51, 12, 47, 0.95);
    border-radius: 12px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
`;

export const Background = styled.div`
  flex: 1;
  background: url("/assets/ugin.jpg") center/cover no-repeat;
  filter: grayscale(100%) brightness(0.6);

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
  }
`;

export const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

export const Description = styled.div`
  font-size: 1rem;
  margin-bottom: 2rem;
  color: #ccc;
  text-align: center;
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.secondary};
`;
