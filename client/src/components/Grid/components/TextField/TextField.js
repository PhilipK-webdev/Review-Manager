import React from "react";
import S from "./style";
function TextField({ placeholder, weight }) {
  return (
    <S.Container>
      <S.TextField placeholder={placeholder} weight={weight}></S.TextField>
    </S.Container>
  );
}

export default TextField;
