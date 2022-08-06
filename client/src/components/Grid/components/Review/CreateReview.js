import React from "react";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import S from "./style";
function CreateReview() {
  return (
    <S.Container>
      <S.Card>
        <TextField placeholder={"Enter review title"} weight={700} />
        <S.Span>0/255</S.Span>
      </S.Card>
      <TextField placeholder={"Write your review text..."} weight={400} />
      <Button />
    </S.Container>
  );
}

export default CreateReview;
