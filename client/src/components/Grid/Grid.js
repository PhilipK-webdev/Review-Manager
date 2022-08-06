import React from "react";
import CreateReview from "./components/Review/CreateReview";
import Review from "./components/Review/Review";
import S from "./style";
import { useRevewContext } from "../../hooks/useRevewContext";
import Menu from "./components/Menu/Menu";
function Grid() {
  const [getters, setters] = useRevewContext();
  const { data } = getters;
  return (
    <S.Container>
      <S.MenuContainer>
        <Menu />
      </S.MenuContainer>
      <S.ReviewsContainer>
        <CreateReview />
        {data.length > 0
          ? data.map((item, index) => {
              return <Review key={index} item={item} index={index} />;
            })
          : null}
      </S.ReviewsContainer>
    </S.Container>
  );
}

export default Grid;
