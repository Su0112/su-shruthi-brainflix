//react built-in imports
import { useState } from "react";
//scss
import "./app.scss";
// components
import Header from "./components/header/Header";
import Herovideo from "./components/herovideo/Herovideo";
import Commentsform from "./components/commentsform/Commentsform";
import Comments from "./components/comments/Comments";
import Videoheader from "./components/videoheader/Videoheader";
import Videobar from "./components/videobar/Videobar";
import Videocard from "./components/videocard/Videocard";

//named imports from utils
//default imports -> does not require curly braces
//named import-> requires curly beaces
import getVideos, { getVideoDetails } from "./utils/Utils";

export default function App() {
  const [videoId, setVideoId] = useState(
    "84e96018-4022-434e-80bf-000ce4cd12b8"
  );

  const [videos, setVideos] = useState(getVideos(videoId));
  const [videoDetails, setVideoDetails] = useState(getVideoDetails(videoId));

  const handleClick = (event, videoId) => {
    event.preventDefault();
    setVideoId(videoId);
    setVideos(getVideos(videoId));
    setVideoDetails(getVideoDetails(videoId));
  };

  return (
    <div className="app">
      <Header />
      <section className="app__container">
        <Herovideo videoDetails={videoDetails} />
        <div className="app__container-bottom">
          <section className="app__container-left">
            <Videoheader video={videoDetails} />
            <Commentsform videoDetails={videoDetails} />
            <Comments />
          </section>

          <section className="app__container-right">
            <Videobar videos={videos} onVideoClick={handleClick} />
            <Videocard />
          </section>
        </div>
      </section>
    </div>
  );
}
