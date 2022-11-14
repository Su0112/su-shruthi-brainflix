import React from "react";
import "./herovideo.scss";

export default function Herovideo({ videoDetails }) {
  return (
    <section className="hero">
      <video
        className="hero__video"
        alt="video"
        controls
        poster={videoDetails?.image}
      ></video>
      <div className="hero__video-controls"></div>
    </section>
  );
}
