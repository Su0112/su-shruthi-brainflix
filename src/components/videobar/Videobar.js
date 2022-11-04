//import { useState } from "react";

import "./videobar.scss";

//use map() for translating array of data into array of html tags
export default function Videobar({ videos, onVideoClick }) {
  return (
    <aside className="videobar">
      {videos.map((video) => (
        <img
          src={video.image}
          alt={video.title}
          className="videobar__img"
          key={video.title + video.id}
          onClick={(event) => onVideoClick(event, video.id)}
        />
      ))}
    </aside>
  );
}
