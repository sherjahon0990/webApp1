import React from "react";
import styled from "styled-components";
import Cleson from "../Cleson/index.";
export default () => {
  const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 20px;
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(2, auto);
    }
    @media screen and (max-width: 520px) {
      grid-template-columns: repeat(1, auto);
    }
  `;
  return (
    <div>
      <Cleson />
    </div>
  );
};
