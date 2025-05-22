import styled, { css } from "styled-components";

type StyledInputProps = {
  $hasError?: boolean;
  $bgColor?: string;
};

export const StyledInput = styled.input<StyledInputProps>`
  ${({ theme, $hasError, $bgColor }) => css`
    padding: 0.75rem 1rem;
    width: 100%;
    background-color: ${$bgColor ? $bgColor : theme.colors.darkPrimary};
    color: ${theme.colors.darkSecondary};
    border-radius: 4px;
    outline: none;
    border: 2px solid transparent;
    transition: border-color 0.2s ease;

    &::placeholder {
      color: #ccc;
    }

    &:focus {
      border: 2px solid ${theme.colors.darkSecondary};
      color: ${theme.colors.darkSecondary};
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
