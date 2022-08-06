import React from "react";
import S from "./style";
import icon from "../../../../assets/Delete.png";
function Review({ item }) {
  const { title, description } = item;
  return (
    <S.Box onMouseEnter={() => console.log("IM HERE")}>
      <S.BoxDiv>
        <S.Title>{title}</S.Title>
        <S.DeleteContainer>
          <S.Icon src={icon} />
        </S.DeleteContainer>
      </S.BoxDiv>
      <S.Content>{description}</S.Content>
    </S.Box>
  );
}

export default Review;
