// src/components/PageTemplate/PageTemplate.tsx
import React, { JSX } from "react";
import Header from "../Header/Header";
import { Container, Wrapper, HeaderWrapper } from "./PageTemplate.style";
import { Outlet } from "react-router-dom";

const PageTemplate: React.FC = (): JSX.Element => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <Container>
        <Outlet />
      </Container>
    </Wrapper>
  );
};

export default PageTemplate;
