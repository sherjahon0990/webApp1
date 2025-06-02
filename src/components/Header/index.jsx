import React from "react";
import styled from "styled-components";
import Img2 from "../../Assets/7831a7c5-c9a8-4cc0-af02-2f944a994ec5_removalai_preview.png";
import { Link, useNavigate } from "react-router";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import Cards from "../Cards";

export default ({ darkMode, setDarkMode }) => {
  const toggleDarkMode = () => setDarkMode();

  const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-content: center;
    box-shadow: 1px 1px 10px 0.1px #ada8a8;
    border-radius: 10px;
    @media screen and (max-width: 768px) {
      display: grid;
      grid-template-columns: 1fr;
      justify-content: center;
    }
  `;
  const Col = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;
  const Col2 = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px) {
      display: none;
    }
  `;
  const BtnBox = styled.div`
    display: flex;
    gap: 30px;
  `;

  const Button = styled.button`
    padding: 10px;
    width: 30%;
  `;
  const navigate = useNavigate();

  const Grid = styled.div`
    display: flex;
    gap: 20px;
    padding-top: 20px;
  `;

  return (
    <div style={{ width: "100%" }}>
      <Row style={{ background: darkMode ? "transparent" : "#FDFDFD" }}>
        <Col>
          <h2 style={{ textAlign: "start" }}>Sammi - dasturlash kurslari</h2>
          <p
            style={{
              color: "#71717A",
              marginBottom: "20px",
            }}
          >
            Sammi - bu sizga dasturlashni o'rganishda yordam beradigan
            platforma. Pullik darslardagi ma'lumotlarni bepul olishingiz mumkin.
            Barchasi bir joyda!
          </p>
          {/* btn box */}
          <BtnBox>
            <Button
              onClick={() => {
                navigate("/duolar");
              }}
              style={{
                borderRadius: "50px",
                background: darkMode ? "#fff" : "#18181B",
                color: darkMode ? "#000" : "#fff",
                border: "none",
              }}
            >
              Duolar
            </Button>
            <Button
              onClick={() => {
                navigate("/kurslar");
              }}
              style={{
                borderRadius: "50px",
                border: darkMode ? "1px solid #fff" : "1px solid #000",
                background: darkMode ? "#18181B" : "#fff",
                color: darkMode ? "#fff" : "#000",
              }}
            >
              Kurslar
            </Button>
          </BtnBox>
          {/* col and col */}
        </Col>
        <Col2>
          <img src={Img2} alt="" style={{ width: "100%" }} />
        </Col2>
      </Row>
      <h2 style={{ margin: "20px 0", display: "flex", alignItems: "center" }}>
        Kurslar
        <span style={{ color: "#3B82F6", marginTop: "10px" }}>
          <KeyboardArrowRightIcon />
        </span>
      </h2>
      <Cards darkMode={darkMode} setDarkMode={setDarkMode} />
      <h2 style={{ margin: "20px 0", display: "flex", alignItems: "center" }}>
        Tarmoqlar
        <span style={{ color: "#3B82F6", marginTop: "10px" }}>
          <KeyboardArrowRightIcon />
        </span>
      </h2>
      <Grid>
        <Link
          to={"https://www.instagram.com/burhanacademyuz?igsh=YzljYTk1ODg3Zg=="}
          style={{
            textDecoration: "none",
            color: darkMode ? "#fff" : "#000",
            border: darkMode ? "1px solid #fff" : "1px solid #000",
            width: "50px",
            height: "50px",
            borderRadius: "360px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <InstagramIcon />
        </Link>
        <Link
          to={"https://www.facebook.com/BurhanAcademyUZ?mibextid=kFxxJD"}
          style={{
            textDecoration: "none",
            color: darkMode ? "#fff" : "#000",
            border: darkMode ? "1px solid #fff" : "1px solid #000",
            width: "50px",
            height: "50px",
            borderRadius: "360px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <FaFacebookF />
        </Link>
        <Link
          to={"https://t.me/BurhanAcademyUz"}
          style={{
            textDecoration: "none",
            color: darkMode ? "#fff" : "#000",
            border: darkMode ? "1px solid #fff" : "1px solid #000",
            width: "50px",
            height: "50px",
            borderRadius: "360px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <FaTelegramPlane />
        </Link>
        <Link
          to={"https://www.youtube.com/@BurhanAcademyUZ"}
          style={{
            textDecoration: "none",
            color: darkMode ? "#fff" : "#000",
            border: darkMode ? "1px solid #fff" : "1px solid #000",
            width: "50px",
            height: "50px",
            borderRadius: "360px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <FaYoutube />
        </Link>
      </Grid>
    </div>
  );
};
