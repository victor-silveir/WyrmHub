import React from "react";
import * as S from "./Card.style";
import { useNavigate } from "react-router-dom";

interface CardProps {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ id, title, subtitle, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/dragons/${id}`);
  };

  return (
    <S.CardContainer onClick={handleClick}>
      <S.CardImage
        src={image ? image : "/assets/notFoundDragon.png"}
        alt={title}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = "/assets/notFoundDragon.png";
        }}
      />
      <S.CardContent>
        <S.CardTitle>{title}</S.CardTitle>
        <S.CardSubtitle>{subtitle}</S.CardSubtitle>
      </S.CardContent>
    </S.CardContainer>
  );
};

export default Card;
