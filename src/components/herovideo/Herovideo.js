import React from "react";
import "./herovideo.scss";

export default function Herovideo({ videoDetails }) {
  const { image } = videoDetails;
  //console.log(image);

  return (
    <section className="hero">
      <video
        className="hero__video"
        alt="video"
        controls
        poster={image}
      ></video>
      <div className="hero__video-controls"></div>
    </section>
  );
}
