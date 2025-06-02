// src/components/Cards.jsx
import React from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { Link } from "react-router-dom";
import img1 from "../../Assets/card-img.webp";

const lessons = Array.from({ length: 9 }, (_, i) => i + 1);

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

export default function Cards(props) {
  return (
    <div>
      <Row>
        {lessons.map((num) => (
          <Card key={num}>
            <Link to={`/lesson/${num}`} style={{ textDecoration: "none" }}>
              <CardActionArea>
                <CardMedia component="img" image={img1} alt={`Dars ${num}`} />
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  {num}-Bo'lim
                </Button>
              </CardActions>
            </Link>
          </Card>
        ))}
      </Row>
    </div>
  );
}
