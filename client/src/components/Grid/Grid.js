import React from "react";
import CreateReview from "./components/Review/CreateReview";
import Review from "./components/Review/Review";
import S from "./style";
function Grid() {
  return (
    <S.Container>
      <S.MenuContainer></S.MenuContainer>
      <S.ReviewsContainer>
        <CreateReview />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
      </S.ReviewsContainer>
    </S.Container>
  );
}

export default Grid;
