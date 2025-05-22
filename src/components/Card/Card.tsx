import React, { JSX } from "react";
import * as S from "./Card.style";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

import { useNavigate } from "react-router-dom";

type CardProps = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  onDelete?: (id: string) => void;
};

const Card: React.FC<CardProps> = ({ id, title, subtitle, image, onDelete }): JSX.Element => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/dragons/${id}`);
  };

  const EditIcon = FiEdit2 as unknown as React.FC;
  const TrashIcon = FiTrash2 as unknown as React.FC;

  return (
    <S.CardContainer onClick={handleClick}>
      <S.CardActions onClick={(e) => e.stopPropagation()}>
        <S.IconButton onClick={() => navigate(`/dragons-form/${id}`)}>
          <EditIcon />
        </S.IconButton>
        <S.IconButton onClick={() => onDelete?.(id)}>
          <TrashIcon />
        </S.IconButton>
      </S.CardActions>
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
