import styled from "styled-components";

const Button = styled.button`
  position: relative;
  width: 3.4vw;
  height: 4.7vh;
  background: ${(props) => (props.disabled ? "#DDE7F0" : "#FF206F")};
  border-radius: 10px;
  margin-left: auto;
  border: none;
  color: white;
  font-family: "Assistant";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  pointer-events: : ${(props) => (props.disabled ? "allow" : "none")};
`;

export default { Button };
