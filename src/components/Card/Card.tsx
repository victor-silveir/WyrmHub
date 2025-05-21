import React, { JSX } from "react";
import { CardContainer, CardImage, CardContent, CardTitle, CardSubtitle } from "./Card.style";

interface CardProps {
  image?: string;
  title: string;
  subtitle: string;
}

const Card: React.FC<CardProps> = ({ image, title, subtitle }): JSX.Element => {
  return (
    <CardContainer>
      <CardImage src={image ? image : "/assets/notFoundDragon.png"} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
