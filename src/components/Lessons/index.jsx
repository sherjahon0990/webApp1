// src/components/Lessons.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import style from "./style.module.css";
import video1 from "../../Video/1-dars.mp4";

const videoUrls = {
  1: video1,
  2: video1,
  3: video1,
  4: video1,
  5: video1,
  6: video1,
  7: video1,
  8: video1,
  9: video1,
};

export default function Lessons() {
  const { id } = useParams();
  const currentId = parseInt(id); // id faqat son qismi bo‘ladi (lesson-1 -> 1)
  
  const nextId = currentId + 1;
  const totalLessons = Object.keys(videoUrls).length;

  const videoSrc = videoUrls[currentId];

  if (!videoSrc) return <h2>Bunday dars mavjud emas!</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{currentId}-Dars</h2>

      <video
        controls
        style={{ width: "100%", maxWidth: "800px" }}
        className={style.Video}
      >
        <source src={videoSrc} type="video/mp4" />
        Brauzeringiz video formatini qo‘llab-quvvatlamaydi.
      </video>

      <div style={{ marginTop: "20px" }}>
        {currentId < totalLessons && (
          <Link to={`/lesson/${nextId}`}>Next Lesson →</Link>
        )}
      </div>
    </div>
  );
}
