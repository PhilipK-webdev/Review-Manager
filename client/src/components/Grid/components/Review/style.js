import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.8vh 0.5vw 2vh;
  gap: 15px;
  width: 21.5vw;
  height: 13.6vh;
  background: #ffffff;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 22vw;
`;
const Span = styled.div`
  width: 3.4vw;
  height: 2.3vh;
  font-family: "Assistant";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #64757e;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2vh;
  padding: 1vh 0.5vw;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px 10px 10px 2px;
  margin-bottom: 1vh;
  width: max-content;
`;

const Title = styled.div`
  font-family: "Assistant";
  font-style: normal;
  font-weight: 700;
  font-size: 0.8vw;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-right: 5vw;
`;
const Content = styled.div`
  font-family: "Assistant";
  font-style: normal;
  font-weight: 400;
  font-size: 0.8vw;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
  flex: none;
  order: 1;
  flex-grow: 0;
`;
const BoxDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const DeleteContainer = styled.div`
  width: 1vw;
  height: 2vh;
  margin-top: -2vh;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 1vw;
  height: 2vh;
`;
export default {
  Container,
  Span,
  Card,
  Box,
  Title,
  Content,
  DeleteContainer,
  BoxDiv,
  Icon,
};
