import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

//react built-in imports
import { useState } from "react";
//import axios from "axios";
//scss
import "./app.scss";
// components
import Header from "./components/header/Header";
import Herovideo from "./components/herovideo/Herovideo";
import Commentsform from "./components/commentsform/Commentsform";
import Videoheader from "./components/videoheader/Videoheader";
import Videobar from "./components/videobar/Videobar";

function Home() {
  const { paramsVideoId } = useParams();
  const apiKey = "8c7de154-ba2f-4d9d-b546-5d8a9da82177";
  const url = "https://project-2-api.herokuapp.com";

  //videobar list
  useEffect(() => {
    axios.get(`${url}+ "/videos" + ${apiKey}`).then((response) => {
      const data = response.data;
      console.log(response.data);
    });
  });

  //Filter the current video out of the videobar

  //

  return (
    <div className="app">
      <Header />
      <section className="app__container">
        <Herovideo videoDetails={videoDetails} />
        <div className="app__container-bottom">
          <section className="app__container-left">
            <Videoheader video={videoDetails} />
            <Commentsform videoDetails={videoDetails} />
          </section>
          <section className="app__container-right">
            <Videobar videos={videos} onVideoClick={handleClick} />
          </section>
        </div>
      </section>
    </div>
  );
}

export default Home;

//named imports from utils
//default imports -> does not require curly braces
//named import-> requires curly beaces
// import getVideos, { getVideoDetails } from "./utils/Utils";

// export default function App() {
//   const [videoId, setVideoId] = useState(
//     "84e96018-4022-434e-80bf-000ce4cd12b8"
//   );

//   const [videos, setVideos] = useState(getVideos(videoId));
//   const [videoDetails, setVideoDetails] = useState(getVideoDetails(videoId));

//   const handleClick = (event, videoId) => {
//     event.preventDefault();
//     setVideoId(videoId);
//     setVideos(getVideos(videoId));
//     setVideoDetails(getVideoDetails(videoId));
//   };

//   return (
//     <div className="app">
//       <Header />
//       {/*BrowserRouter and 3 routes and move app to home page, create routes in app.js or index.js*/}
//       <section className="app__container">
//         <Herovideo videoDetails={videoDetails} />
//         <div className="app__container-bottom">
//           <section className="app__container-left">
//             <Videoheader video={videoDetails} />
//             <Commentsform videoDetails={videoDetails} />
//           </section>

//           <section className="app__container-right">
//             <Videobar videos={videos} onVideoClick={handleClick} />
//           </section>
//         </div>
//       </section>
//     </div>
//   );
// }

//

// //
// export const videosApiData = () => {
//   axios
//     .get(`https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`)
//     .then((response) => {
//       const data = response.data;
//     })
//     .catch((error) => error);
// };
