import React from "react";
import { Container } from "./style";
import Card from "../../ProductCardH";
import { card } from "../../../mock/card";

export const Body = () => {
  return (
    <Container>
      {card.yangi.map((value) => (
        <Card value={value} />
      ))}
    </Container>
  );
};

export default Body;
