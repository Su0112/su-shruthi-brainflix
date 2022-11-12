import React from "react";
import Header from "../../components/header/Header";
import Button from "../../assets/Icons/upload.svg";

function VideoUpload() {
  return (
    <div>
      <Header />

      <section className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <div className="upload__divider"></div>
        <div className="upload__container">
          <div className="upload__hero">
            <p className="upload__hero-title">VIDEO THUMBNAIL</p>
            <img
              src={"../../assets/Images/Upload-video-preview.jpg"}
              alt="video"
              className="upload__hero-img"
            />
          </div>
          <div className="upload__details">
            <div className="upload__details-title">
              <p className="upload__details-title-name">TITLE YOUR VIDEO</p>
              <textarea
                type="text"
                className="upload__details-title-fill"
                name="videoName"
                placeholder="Add a title to your video"
                required
              ></textarea>
            </div>
            <div className="upload__details-description">
              <p className="upload__details-description-name">
                ADD A VIDEO DESCRIPTION
              </p>
              <textarea
                type="text"
                className="upload__details-description-fill"
                name="videoName"
                placeholder="Add a description to your video"
                required
              ></textarea>
            </div>
          </div>
        </div>
        <div className="upload__divider"></div>
        {/*border bottom for the container is better than a div*/}
        <div className="publish">
          <div className="publish__cancel">CANCEL</div>
          <div className="publish__button">
            <button className="publish__button-box">
              <img className="publish__button-icon" alt="upload" src={Button} />
              <p className="publish__button-title">PUBLISH</p>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VideoUpload;