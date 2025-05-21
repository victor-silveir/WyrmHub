import React, { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./Button.style";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
