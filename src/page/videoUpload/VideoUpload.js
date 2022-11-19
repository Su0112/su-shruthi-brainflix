import React from "react";
import Header from "../../components/header/Header";
import Publish from "../../assets/Icons/publish.svg";
import { Link } from "react-router-dom";
import Img from "../../assets/Images/Upload-video-preview.jpg";
import "./videoupload.scss";
import axios from "axios";

function VideoUpload() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const newVideo = {
      title: event.target.title.value,
      description: event.target.description.value,
    };
    console.log(event.target.title.value);
    axios.post(`http://localhost:8080/videos`, newVideo).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <Header />

      <section className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <div className="upload__divider"></div>
        <form onSubmit={handleSubmit}>
          <div className="upload__container">
            <div className="upload__hero">
              <p className="upload__hero-title">VIDEO THUMBNAIL</p>
              <img src={Img} alt="video" className="upload__hero-img" />
            </div>
            <div className="upload__details">
              <div className="upload__details-title">
                <p className="upload__details-title-name">TITLE YOUR VIDEO</p>
                <input
                  type="text"
                  className="upload__details-title-fill"
                  name="videoName"
                  placeholder=" Add a title to your video"
                  required
                />
              </div>
              <div className="upload__details-description">
                <p className="upload__details-description-name">
                  ADD A VIDEO DESCRIPTION
                </p>
                <textarea
                  type="text"
                  className="upload__details-description-fill"
                  name="videoName"
                  placeholder=" Add a description to your video"
                  required
                ></textarea>
              </div>
            </div>
          </div>
        </form>
        <div className="upload__divider"></div>

        <div className="publish">
          <div className="publish__button">
            <Link to="/publish">
              <button className="publish__button-box">
                <img
                  className="publish__button-icon"
                  alt="upload"
                  src={Publish}
                />
                <p className="publish__button-title">PUBLISH</p>
              </button>
            </Link>
          </div>
          <div className="publish__cancel">
            <button className="publish__cancel-box">
              <p className="publish__button-title">CANCEL</p>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VideoUpload;
