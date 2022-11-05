import React from "react";
import "./videoheader.scss";
import { convertTime } from "../../utils/Utils";
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
      <div class="comments__line"></div>
      <section className="details__info">
        <div className="details__info-left">
          <p className="details__info-left-channel">By {channel}</p>
          <p className="details__info-left-date">{convertTime(timestamp)}</p>
        </div>
        <div className="details__info-right">
          <div className="details__info-right-views">
            <div className="details__info-right-views-icon"></div>

            <p className="details__info-right-views-p">{views}</p>
          </div>
          <div className="details__info-right-likes">
            <div className="details__info-right-likes-icon"></div>
            <p className="details__info-right-likes-p">{likes}</p>
          </div>
        </div>
      </section>
      <div class="comments__line"></div>

      <p className="description">{description}</p>
    </main>
  );
}
