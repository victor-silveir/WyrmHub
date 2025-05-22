import React, { JSX } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./DragonsDetailsPage.style";
import { useFetchDragonById } from "../../../hooks/useFetchDragons";
import Button from "../../../components/Button/Button";
import Alert from "../../../components/Alert/Alert";
import Spinner from "../../../components/Spinner/Spinner";

const DragonDetailsPage: React.FC = (): JSX.Element => {
  const { id } = useParams();
  const { data: dragon, isLoading, error } = useFetchDragonById(id);
  const navigate = useNavigate();

  if (isLoading) return <Spinner isLoading={isLoading} />;
  if (error || !dragon)
    return <Alert message="Error loading Dragons data, please reload the page" type="error" />;

  return (
    <>
      <S.Title>Dragon Details</S.Title>
      <S.DragonDetailsWrapper>
        <S.DragonDetailsContainer>
          <S.DragonImage
            src={dragon.imageUrl ? dragon.imageUrl : "/assets/notFoundDragon.png"}
            alt={dragon.name}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = "/assets/notFoundDragon.png";
            }}
          />
          <S.InfoColumn>
            <S.InfoTitle>{dragon.name}</S.InfoTitle>
            <S.InfoType>Type: {dragon.type}</S.InfoType>
            {dragon.histories && dragon.histories.length > 0 ? (
              dragon.histories.map((entry, index) => (
                <S.InfoHistories key={index}>• {entry}</S.InfoHistories>
              ))
            ) : (
              <S.InfoHistories>No history available.</S.InfoHistories>
            )}
            <Button onClick={() => navigate(`/dragons-form/${id}`)}>Change informations</Button>
          </S.InfoColumn>
        </S.DragonDetailsContainer>
      </S.DragonDetailsWrapper>
    </>
  );
};

export default DragonDetailsPage;
