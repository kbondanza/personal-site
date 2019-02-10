import React from "react";
import styled from "styled-components";

const Wrap = styled.main`
  text-align: center;
`;

const ConstructionMessage = () => {
  return (
    <Wrap>
      <h1>Welcome, this site is under construction.</h1>
      <p>Please come back later.</p>
    </Wrap>
  );
};

export default ConstructionMessage;
