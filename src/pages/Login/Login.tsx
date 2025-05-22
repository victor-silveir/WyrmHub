import React, { JSX, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import * as S from "./Login.style";

const LoginPage: React.FC = (): JSX.Element => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(username, password);
    if (!success) setError("Invalid username or password");
  };

  return (
    <S.Layout>
      <S.Container>
        <S.Logo>
          <img src="/assets/icon.png" alt="logo" style={{ width: 100 }} />
        </S.Logo>
        <S.Description>WyrmHub - Forge Legends. One Dragon at a Time</S.Description>
        <S.Title>Login</S.Title>
        <form style={{ width: "100%" }} onSubmit={handleSubmit}>
          <S.FormContainer>
            <Input
              type="text"
              placeholder="Username:"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Password:"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p style={{ color: "red", fontSize: "0.9rem" }}>{error}</p>}
            <Button type="submit">Login</Button>
          </S.FormContainer>
        </form>
      </S.Container>
      <S.Background />
    </S.Layout>
  );
};

export default LoginPage;
