import { useEffect, useState } from "react";
//import { useParams } from "react-router-dom";
import axios from "axios";
//scss
import "./home.scss";
// components
import Header from "../../components/header/Header";
import Herovideo from "../../components/herovideo/Herovideo";
import Commentsform from "../../components/commentsform/Commentsform";
import Videoheader from "../../components/videoheader/Videoheader";
import Videobar from "../../components/videobar/Videobar";

//const apiKey = "fff0792b-b4bc-4557-9ae5-25025cd2533e";
//const url = "https://project-2-api.herokuapp.com";
const defaultVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";

function Home() {
  const [currentId, setCurrentId] = useState(defaultVideoId);
  const [videos, setVideos] = useState([]);
  const [videoDetails, setVideoDetails] = useState();
  //`${url}+ "/videos"+ "?api_key="+ ${apiKey}`

  const videoClicked = (videoId) =>
    `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=fff0792b-b4bc-4557-9ae5-25025cd2533e`;

  const handleClick = async (videoId) => {
    const { data } = await axios.get(videoClicked(videoId));
    setVideoDetails(data);
  };

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const { data } = await axios.get(
          `https://project-2-api.herokuapp.com/videos/${currentId}?api_key=fff0792b-b4bc-4557-9ae5-25025cd2533e`
        );
        setVideoDetails(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideoDetails();
  }, [currentId]);
  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const { data } = await axios.get(
          `https://project-2-api.herokuapp.com/videos/?api_key=fff0792b-b4bc-4557-9ae5-25025cd2533e`
        );
        setVideos(data);
        //console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideo();
  }, []);
  return (
    <div className="app">
      <Header />
      <section className="app__container">
        <Herovideo videoDetails={videoDetails} />
        <div className="app__container-bottom">
          <section className="app__container-left">
            <Videoheader
              videoDetails={videoDetails}
              currentId={currentId}
              handleClick={handleClick}
            />
            <Commentsform videoDetails={videoDetails} />
          </section>
          <section className="app__container-right">
            <Videobar videos={videos} videoDetails={videoDetails} />
          </section>
        </div>
      </section>
    </div>
  );
}

export default Home;
