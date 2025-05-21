import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  ${({ theme }) => css`
    padding: 0.75rem;
    width: 100%;
    background: #ccc;
    color: black;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.2s ease;

    &:hover {
      background: ${theme.colors.secondary};
    }
  `}
`;
