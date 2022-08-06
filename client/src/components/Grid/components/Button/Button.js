import React from "react";
import S from "./style";
export default function Button({ disabled, onClick }) {
  return (
    <S.Button disabled={disabled} onClick={onClick}>
      Add
    </S.Button>
  );
}
