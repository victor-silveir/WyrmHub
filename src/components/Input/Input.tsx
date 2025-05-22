import React, { InputHTMLAttributes, JSX } from "react";
import * as S from "./Input.style";

type InputProps = {
  hasError?: boolean;
  errorMessage?: string;
  bgColor?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({
  hasError = false,
  errorMessage,
  bgColor,
  ...props
}): JSX.Element => {
  return (
    <div>
      <S.StyledInput $bgColor={bgColor} $hasError={hasError} {...props} />
      {hasError && errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </div>
  );
};

export default Input;
