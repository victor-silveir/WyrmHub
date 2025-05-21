import styled from "styled-components";

type AlertProps = {
  $type: "success" | "error";
};

export const AlertBox = styled.div<AlertProps>`
  padding: 1rem 1.5rem;
  border-radius: 8px;
  margin: 1rem auto;
  max-width: 600px;
  color: white;
  background-color: ${({ $type }) => ($type === "success" ? "#28a745" : "#dc3545")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: flex-start;
  font-weight: 500;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  margin-left: 1rem;
`;
