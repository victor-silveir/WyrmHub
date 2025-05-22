import styled, { css } from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.darkPrimary};

  display: flex;
  padding: 4rem 2rem;

  flex-direction: row;
  align-items: flex-start;
  max-width: 1000px;
  width: 100%;
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const DragonPreview = styled.img`
  width: 400px;
  height: auto;
  object-fit: contain;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FormFields = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.text};
  width: 100%;
`;

export const Label = styled.label`
  font-weight: bold;
  font-size: 0.95rem;
`;

export const Textarea = styled.textarea`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.darkSecondary};
    padding: 0.75rem;
    border-radius: 8px;
    font-size: 1rem;
    resize: vertical;

    &:focus {
      border: 2px solid ${theme.colors.darkSecondary};
      color: ${theme.colors.darkSecondary};
    }
  `}
`;

export const SubmitButton = styled.button`
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkSecondary};
  }
`;
