import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 80vh;
  margin-top: 10vh;
  margin-left: auto;
  margin-right: auto;
`;

const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 20px 0px;
  width: 23.5vw;
  height: 56.7vh;
  background: linear-gradient(72.2deg, #39454c 0%, #64757e 100%);
  border-radius: 20px 0px 0px 20px;
  flex: none;
  order: 0;
  align-self: center;
  flex-grow: 0;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.5);
  }
`;
const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 0px;
  gap: 40px;
  width: 23.5vw;
  height: 56.7vh;
  background: #ffffff;
  border-radius: 0px 20px 20px 0px;
  flex: none;
  order: 1;
  align-self: center;
  flex-grow: 0;
  text-align: center;
`;

export default { Container, ReviewsContainer, MenuContainer };
