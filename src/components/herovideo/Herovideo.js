import React from "react";
import "./herovideo.scss";

export default function Herovideo({ props }) {
  //const { video, image } = video;

  return (
    <div className="herovideo__container">
      <video
        src="true"
        id="84e96018-4022-434e-80bf-000ce4cd12b8"
        controls
        poster="https://i.imgur.com/l2Xfgpl.jpg"
        className="herovideo__container-video"
      />
      <section className="herovideo__wrapper">
        <div className="herovideo__icon-container">
          <span className="herovideo__icon-play"></span>
        </div>
        <div className="herovideo__control-banner--container">
          <div className="herovideo__control-top"></div>
          <span className="herovideo__control-time">0:00/4:01</span>
        </div>
        <div className="herovideo__fullscreen"></div>
        <div className="herovideo__volume"></div>
      </section>
    </div>
  );
}

/* <div>
      <section className="hero">
        <video
          classname="hero__video"
          alt="video"
          controls
          src={props.video}
          poster={props.image}
        ></video>
        <div className="hero__video-controls"></div>
      </section>
    </div> */
