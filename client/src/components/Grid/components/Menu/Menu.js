import React from "react";
import S from "./style";
import { useRevewContext } from "../../../../hooks/useRevewContext";
import Info from "./components/Info/Info";
function Menu() {
  const [getters, setters] = useRevewContext();
  const { data } = getters;
  return (
    <S.Container>
      <S.Title>
        {
          <span style={{ color: "#FF206F", marginRight: "3px" }}>
            {data.length}
            {""}
          </span>
        }{" "}
        app reviews
      </S.Title>
      <S.Paragraph>
        Write the texts our accounts will use when reviewing your app on the App
        Store
      </S.Paragraph>
      <Info title={"Learn how to add reviews"} />
      <Info title={"Import from file"} />
      <Info title={"+10 generic reviews"} />
    </S.Container>
  );
}

export default Menu;
