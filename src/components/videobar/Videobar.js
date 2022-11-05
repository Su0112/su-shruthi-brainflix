//import { useState } from "react";

import "./videobar.scss";

//use map() for translating array of data into array of html tags
export default function Videobar({ videos, onVideoClick }) {
  return (
    <aside className="videobar">
      <h3>NEXT VIDEOS</h3>
      {videos.map((video) => (
        <div className="videobar__card" key={video.id}>
          <img
            className="videobar__card-img"
            src={video.image}
            alt={video.title}
            key={video.title + video.id}
            onClick={(event) => onVideoClick(event, video.id)}
          />
          <div className="videobar__description">
            <p className="videobar__description-title">{video.title}</p>
            <p className="videobar__description-channel">{video.channel}</p>
          </div>
        </div>
      ))}
    </aside>
  );
}
