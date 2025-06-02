import React from "react";
import styled from "styled-components";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KurslarCards from "../KurslarCards";

export default () => {
  const Container = styled.div`
    width: 100%;
    margin: auto;
  `;

  return (
    <div>
      <h2 style={{ margin: "20px 0", display: "flex", alignItems: "center" }}>
        Kurslar
        <span style={{ color: "#3B82F6", marginTop: "10px" }}>
          <KeyboardArrowRightIcon />
        </span>
      </h2>
      <Container>
        <KurslarCards />
      </Container>
    </div>
  );
};
