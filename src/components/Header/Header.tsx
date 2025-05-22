import React, { JSX, useState } from "react";
import * as S from "./Header.style";
import { useAuth } from "../../contexts/AuthContext";

const Header: React.FC = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { logout } = useAuth();

  const handleLogout = (): void => {
    logout();
    setMenuOpen(false);
  };

  return (
    <S.HeaderContainer>
      <S.StyledLink to={"/"}>
        <S.Logo>
          <img src="/assets/icon.png" alt="Dragon Logo" />
          <span>WyrmHub</span>
        </S.Logo>
      </S.StyledLink>
      <S.MenuToggle onClick={() => setMenuOpen((prev) => !prev)}>☰</S.MenuToggle>
      <S.Nav $isOpen={menuOpen}>
        <S.NavItem to="/" onClick={() => setMenuOpen(false)}>
          Home
        </S.NavItem>
        <S.NavItem to="/dragons-form" onClick={() => setMenuOpen(false)}>
          New Dragon
        </S.NavItem>
        <S.NavItem to="/" onClick={() => handleLogout()}>
          Logout
        </S.NavItem>
      </S.Nav>
    </S.HeaderContainer>
  );
};

export default Header;
