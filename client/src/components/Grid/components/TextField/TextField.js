import React from "react";
import S from "./style";
function TextField({ placeholder, weight, onChange, value }) {
  return (
    <S.Container>
      <S.TextField
        placeholder={placeholder}
        weight={weight}
        onChange={onChange}
        value={value}
      ></S.TextField>
    </S.Container>
  );
}

export default TextField;
