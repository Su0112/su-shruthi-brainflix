//import { useState } from "react";
import { Link } from "react-router-dom";
import "./videobar.scss";

//use map() for translating array of data into array of html tags
export default function Videobar({ videos, videoDetails }) {
  return (
    <aside className="videobar">
      <h3 className="videobar__title">NEXT VIDEOS</h3>
      {videos
        ?.filter((video) => video.id !== videoDetails.id)
        .map((video) => (
          <Link to={`/${video.id}`} key={video.id}>
            <div className="videobar__card">
              <img
                className="videobar__card-img"
                src={video.image}
                alt={video.title}
                key={video.title + video?.id}
              />
              <div className="videobar__description">
                <p className="videobar__description-title">{video.title}</p>
                <p className="videobar__description-channel">{video.channel}</p>
              </div>
            </div>
          </Link>
        ))}
    </aside>
  );
}
