import React, { JSX } from "react";
import InfiniteScrollList from "../../components/InfinityScroll/InfinityScroll";
import Card from "../../components/Card/Card";
import { useFetchDragons } from "../../hooks/useFetchDragons";
import * as S from "./DragonsPage.style";
import Alert from "../../components/Alert/Alert";
import Spinner from "../../components/Spinner/Spinner";
import { useDeleteDragon } from "../../hooks/useMutations";

const DragonsPage: React.FC = (): JSX.Element => {
  const { data: dragons, isLoading, error } = useFetchDragons();
  const { mutate: deleteDragon } = useDeleteDragon();

  return (
    <>
      <S.PageTitle>Dragons</S.PageTitle>
      {<Spinner isLoading={isLoading} />}
      {error && <Alert message="Error loading Dragons data, please reload the page" type="error" />}
      {dragons && (
        <InfiniteScrollList
          data={dragons}
          pageSize={8}
          renderItem={(dragon) => (
            <Card
              key={dragon.id}
              title={dragon.name}
              subtitle={dragon.type}
              image={dragon.imageUrl as string}
              id={dragon.id}
              onDelete={(id) => deleteDragon(id)}
            />
          )}
        />
      )}
    </>
  );
};

export default DragonsPage;
