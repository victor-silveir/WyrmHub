import styled from "styled-components";

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const DragonDetailsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const DragonDetailsContainer = styled.div`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.colors.darkPrimary};
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  min-height: 605px;
  border-radius: 4px;
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const DragonImage = styled.img`
  width: 400px;
  height: auto;
  object-fit: contain;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 12px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const InfoColumn = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const InfoTitle = styled.h1`
  color: ${({ theme }) => theme.colors.darkSecondary};
  font-size: 2.5rem;
  font-weight: bold;
`;

export const InfoType = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
`;

export const InfoHistories = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;
