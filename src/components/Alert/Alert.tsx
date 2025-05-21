import React, { JSX, useState } from "react";
import * as S from "./Alert.style";

export type AlertProps = {
  type: "success" | "error";
  message: string;
};

const Alert: React.FC<AlertProps> = ({ message, type }): JSX.Element | null => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <S.AlertBox $type={type}>
      <span>{message}</span>
      <S.CloseButton onClick={() => setVisible(false)}>&times;</S.CloseButton>
    </S.AlertBox>
  );
};

export default Alert;
