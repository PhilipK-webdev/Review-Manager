import React from "react";
import S from "./style";
function TextField({ placeholder, weight, onChange }) {
  return (
    <S.Container>
      <S.TextField
        placeholder={placeholder}
        weight={weight}
        onChange={onChange}
      ></S.TextField>
    </S.Container>
  );
}

export default TextField;
