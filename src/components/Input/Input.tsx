import React, { InputHTMLAttributes, JSX } from "react";
import { StyledInput, ErrorMessage } from "./Input.style";

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
      <StyledInput $bgColor={bgColor} $hasError={hasError} {...props} />
      {hasError && errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};

export default Input;
