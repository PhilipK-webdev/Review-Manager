import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 22vw;
`;

const TextField = styled.textarea`
  width: 15vw;
  height: 3vh;
  font-family: "Assistant";
  font-style: normal;
  font-weight: ${(props) => props.weight};
  font-size: 1vw;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #39454c;
  flex: none;
  order: 0;
  flex-grow: 0;
  border: none;
  resize: none;
  padding-top: 0.2vh;
  overflow: hidden;
  &::placeholder {
    padding-left: 0.5vw;
    padding-top: 0.2vh;
    color: #c4d2dc;
  }
  &:focus {
    outline: 0;
  }
`;

export default { Container, TextField };
