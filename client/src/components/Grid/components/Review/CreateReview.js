import React from "react";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import S from "./style";
import { useRevewContext } from "../../../../hooks/useRevewContext";
function CreateReview() {
  const [getters, setters] = useRevewContext();
  const { data, title, description, charArray } = getters;
  const { setData, setTitle, setDescription, setCharArray } = setters;

  const handleTitel = (e) => {
    const { value } = e.target;
    if (value && charArray.length <= 255) {
      setTitle(value);
      setCharArray(value);
    } else {
      setCharArray([]);
    }
  };
  const handleDecsription = (e) => {
    const { value } = e.target;
    setDescription(value);
  };

  const createReview = async () => {
    const createObject = {
      title,
      description,
    };
    const response = await fetch("/api/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createObject),
    });
    if (response.ok) {
      setData([...data, createObject]);
      setDescription("");
      setTitle("");
    }
  };
  return (
    <S.Container>
      <S.Card>
        <TextField
          placeholder={"Enter review title"}
          value={title}
          weight={700}
          onChange={handleTitel}
        />
        <S.Span>{charArray.length}/255</S.Span>
      </S.Card>
      <TextField
        placeholder={"Write your review text..."}
        value={description}
        weight={400}
        onChange={handleDecsription}
      />
      <Button
        disabled={title && description ? false : true}
        onClick={createReview}
      />
    </S.Container>
  );
}

export default CreateReview;
