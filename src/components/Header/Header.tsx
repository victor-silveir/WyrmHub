import React, { JSX, useState } from "react";
import { HeaderContainer, Logo, Nav, NavItem, MenuToggle } from "./Header.style";

const Header: React.FC = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (uri: string) => {};

  return (
    <HeaderContainer>
      <Logo>
        <img src="/assets/icon.png" alt="Dragon Logo" />
        <span>WyrmHub</span>
      </Logo>
      <MenuToggle onClick={() => setMenuOpen((prev) => !prev)}>☰</MenuToggle>
      <Nav $isOpen={menuOpen}>
        <NavItem to="/" onClick={() => setMenuOpen(false)}>
          Home
        </NavItem>
        <NavItem to="/dragons-form" onClick={() => setMenuOpen(false)}>
          New Dragon
        </NavItem>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
