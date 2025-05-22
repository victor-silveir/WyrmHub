import React, { JSX } from "react";
import Header from "../Header/Header";
import * as S from "./PageTemplate.style";
import { Outlet } from "react-router-dom";

const PageTemplate: React.FC = (): JSX.Element => {
  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <Header />
      </S.HeaderWrapper>
      <S.Container>
        <Outlet />
      </S.Container>
    </S.Wrapper>
  );
};

export default PageTemplate;
