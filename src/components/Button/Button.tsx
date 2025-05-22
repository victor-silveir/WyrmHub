import React, { ButtonHTMLAttributes, JSX } from "react";
import * as S from "./Button.style";
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = (props): JSX.Element => {
  return <S.StyledButton {...props} />;
};

export default Button;
