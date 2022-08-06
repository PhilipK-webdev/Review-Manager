import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.header`
  font-family: "Assistant";
  font-style: normal;
  font-weight: 700;
  font-size: 1.3vw;
  line-height: 29px;
  display: flex;
  align-items: center;
  color: #39454c;
`;

const Paragraph = styled.div`
  font-family: "Assistant";
  font-style: normal;
  font-weight: 400;
  font-size: 1vw;
  line-height: 18px;
  width: 14.5vw;
  height: 5.6vh;
  margin-top: 2vh;
  display: flex;
  align-items: flex-start;
  color: #64757e;
`;

export default { Title, Container, Paragraph };
