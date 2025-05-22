import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.darkPrimary};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  max-width: 320px;
  height: auto;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const CardContent = styled.div`
  padding: 1rem;
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.darkSecondary};
`;

export const CardSubtitle = styled.p`
  font-size: 1rem;
`;
