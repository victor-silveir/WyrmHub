import React, { JSX, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as S from "./DragonsFormPage.style";

import { useFetchDragonById } from "../../../hooks/useFetchDragons";
import { useCreateDragon, useUpdateDragonById } from "../../../hooks/useMutations";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";

const DragonFormPage: React.FC = (): JSX.Element => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = !!id;

  const { data: dragonData } = useFetchDragonById(id);
  const { mutate: createDragon } = useCreateDragon();
  const { mutate: updateDragon } = useUpdateDragonById();

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [histories, setHistories] = useState("");

  useEffect(() => {
    console.log(dragonData);
    if (isEditMode && dragonData) {
      setName(dragonData.name || "");
      setType(dragonData.type || "");
      setImageUrl(dragonData.imageUrl || "");
      setHistories((dragonData.histories || []).join("\n"));
    }
  }, [isEditMode, dragonData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      name,
      type,
      imageUrl,
      histories: histories.split("\n").filter((line) => line.trim() !== ""),
    };

    if (isEditMode && id) {
      updateDragon({ id, ...payload }, { onSuccess: () => navigate("/list") });
    } else {
      createDragon(payload, { onSuccess: () => navigate("/list") });
    }
  };

  return (
    <S.FormWrapper>
      <S.FormContainer>
        {imageUrl ? (
          <S.DragonPreview
            src={imageUrl}
            alt={name}
            onError={(e) => (e.currentTarget.src = "/assets/notFoundDragon.png")}
          />
        ) : (
          <S.DragonPreview src="/assets/notFoundDragon.png" alt="Preview" />
        )}
        <S.FormFields onSubmit={handleSubmit}>
          <S.Label>Name</S.Label>
          <Input
            bgColor={"#1F353F"}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <S.Label>Type</S.Label>
          <Input
            bgColor={"#1F353F"}
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />

          <S.Label>Image URL</S.Label>
          <Input
            bgColor={"#1F353F"}
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />

          <S.Label>Histories (one per line)</S.Label>
          <S.Textarea rows={5} value={histories} onChange={(e) => setHistories(e.target.value)} />

          <Button type="submit">{isEditMode ? "Update Dragon" : "Create Dragon"}</Button>
        </S.FormFields>
      </S.FormContainer>
    </S.FormWrapper>
  );
};

export default DragonFormPage;
