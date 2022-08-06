import React from "react";
import S from "./style";
import icon from "../../../../assets/Delete.png";
import { useRevewContext } from "../../../../hooks/useRevewContext";

function Review({ item, index }) {
  const { title, description } = item;
  const [getters, setters] = useRevewContext();
  const { data, isIcon } = getters;
  const { setData, setIsIcon } = setters;

  const handleDeleteReview = async (index) => {
    const filterID = data.filter((item, indexItem) => indexItem === index);
    const response = await fetch(`/api/delete/${filterID[0]._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      data.forEach((item, indexItem) => {
        if (indexItem === index) {
          data.splice(index, 1);
          setData([...data]);
        }
      });
    }
  };

  return (
    <S.Box
      onMouseEnter={() => {
        const icon = true;
        isIcon[index] = icon;
        setIsIcon([...isIcon]);
      }}
      onMouseLeave={() => {
        const icon = false;
        isIcon[index] = icon;
        setIsIcon([...isIcon]);
      }}
    >
      <S.BoxDiv>
        <S.Title>{title}</S.Title>
        {isIcon[index] ? (
          <S.DeleteContainer onClick={() => handleDeleteReview(index)}>
            <S.Icon src={icon} />
          </S.DeleteContainer>
        ) : null}
      </S.BoxDiv>
      <S.Content>{description}</S.Content>
    </S.Box>
  );
}

export default Review;
