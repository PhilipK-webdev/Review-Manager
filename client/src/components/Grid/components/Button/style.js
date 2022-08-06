import styled from "styled-components";

const Button = styled.button`
  position: relative;
  width: 3.4vw;
  height: 4.7vh;
  background: ${(props) => (props.disbaled ? "#39454C" : "#DDE7F0")};
  border-radius: 10px;
  margin-left: auto;
  border: none;
  color: white;
  font-family: "Assistant";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  cursor: ${(props) => (props.disbaled ? "none" : "cursor")};
`;

export default { Button };
