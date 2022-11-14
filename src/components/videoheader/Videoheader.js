import React from "react";
import "./videoheader.scss";
import { convertTime } from "../../utils/Utils";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
export default function VideoHeader({ videoDetails, currentId, handleClick }) {
  const params = useParams();
  const videoId = params.videoId ? params.videoId : currentId;
  useEffect(() => {
    handleClick(videoId);
  }, [videoId]);

  return (
    <main className="details">
      <h1 className="details__heading">{videoDetails?.title}</h1>
      <div className="details__comments__line details__comments__line-active"></div>
      <section className="details__info">
        <div className="details__info-left">
          <p className="details__info-left-channel">
            By {videoDetails?.channel}
          </p>
          <p className="details__info-left-date">
            {convertTime(videoDetails?.timestamp)}
          </p>
        </div>
        <div className="details__info-right">
          <div className="details__info-right-views">
            <div className="details__info-right-views-icon"></div>

            <p className="details__info-right-views-p">{videoDetails?.views}</p>
          </div>
          <div className="details__info-right-likes">
            <div className="details__info-right-likes-icon"></div>
            <p className="details__info-right-likes-p">{videoDetails?.likes}</p>
          </div>
        </div>
      </section>
      <div className="details__comments__line"></div>
      <p className="details__description">{videoDetails?.description}</p>
    </main>
  );
}
