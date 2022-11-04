import React from "react";
import "./videoheader.scss";

export default function VideoHeader({ video }) {
  const {
    title,
    channel,
    //image,
    description,
    views,
    likes,
    //duration,
    //video,
    timestamp,
    //comments,
  } = video;
  return (
    <main className="details">
      <h1 className="details__heading">{title}</h1>
      <section className="details__info">
        <div className="details__info-left">
          <p className="details__info-left-channel">{channel}</p>
          <p className="details__info-left-date">{timestamp}</p>
        </div>
        <div className="details__info-right">
          <div className="details__info-right-views">
            <img className="details__info-right-views-icon" alt="viewicon" />
            <p className="details__info-right-views-p">{views}</p>
          </div>
          <div className="details__info-right-likes">
            <img className="details__info-right-likes-icon" alt="likesicon" />
            <p className="details__info-right-likes-p">{likes}</p>
          </div>
        </div>
      </section>
      <section>
        <p>{description}</p>
      </section>
    </main>
  );
}
