import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  width: 100%;
  max-width: 1920px;
  background-color: ${({ theme }) => theme.colors.darkPrimary};
  color: ${({ theme }) => theme.colors.secondary};
  position: relative;
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;

  span {
    font-size: 1.25rem;
    font-weight: bold;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  img {
    width: 60px;
    height: 60px;
  }
`;

export const Nav = styled.nav<{ $isOpen: boolean }>`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    right: 0;
    background-color: ${({ theme }) => theme.colors.darkPrimary};
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    padding: 1rem 2rem;
    gap: 1rem;
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  }
`;

export const NavItem = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.darkSecondary};
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;
