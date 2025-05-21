import styled, { css } from "styled-components";

type StyledInputProps = {
  $hasError?: boolean;
};

export const StyledInput = styled.input<StyledInputProps>`
  ${({ theme, $hasError }) => css`
    padding: 0.75rem 1rem;
    width: 100%;
    background-color: ${theme.colors.darkPrimary};
    color: ${theme.colors.secondary};
    border-radius: 4px;
    outline: none;
    border: 2px solid transparent;
    transition: border-color 0.2s ease;

    &::placeholder {
      color: #ccc;
    }

    &:focus {
      border: 2px solid ${theme.colors.secondary};
      color: ${theme.colors.secondary};
    }

    ${$hasError &&
    css`
      border: 2px solid red;
    `}
  `}
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 0.85rem;
  margin-bottom: 1rem;
  display: block;
`;
