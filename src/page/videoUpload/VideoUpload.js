import React from "react";
import Header from "../../components/header/Header";
import Publish from "../../assets/Icons/publish.svg";
import { Link } from "react-router-dom";
import Img from "../../assets/Images/Upload-video-preview.jpg";
import "./videoupload.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function VideoUpload() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newVideo = {
      title: event.target.title.value,
      description: event.target.description.value,
      image: "http://localhost:8080/images/newImage9.jpg",
      channel: "Yumyum",
      views: "0",
      likes: "0",
      timestamp: Date.now(),
      comments: [
        {
          id: "ade82e25-6c87-4403-ba35-47bdff93a51c",
          name: "Mattie Casarez",
          comment:
            "This is exactly the kind of advice I’ve been looking for! One minute you’re packing your bags, the next you’re dancing around in the streets without a care in the world.",
          likes: 0,
          timestamp: 1625250720000,
        },
        {
          id: "bf704c76-cba9-462e-ac0a-166315df756c",
          name: "Taylor Jade",
          comment:
            "Excellent tips! Another idea is to keep all of your important belongings like your passport inside a waterproof bag. Perfect for those last minute trips to the beach, trust me.",
          likes: 0,
          timestamp: 1625238122000,
        },
        {
          id: "ec2bec8d-ea2b-458e-9d93-b7f929a8659b",
          name: "Adnan Natt",
          comment:
            "Who ever knew travel could be so easy? Looking forward to getting to put this into practice when I fly away in the near future. Wish me good luck!",
          likes: 0,
          timestamp: 1625177192000,
        },
      ],
    };
    axios
      .post(`http://localhost:8080/videos`, newVideo)
      .then((response) => {
        navigate("/publish");
      })
      .then((response) => {
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((err) => {
        console.log("There was an error");
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
                  name="title"
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
                  name="description"
                  placeholder=" Add a description to your video"
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <div className="upload__divider"></div>

          <div className="publish">
            <div className="publish__button">
              {/* <Link to="/publish"> */}
              <button className="publish__button-box">
                <img
                  className="publish__button-icon"
                  alt="upload"
                  src={Publish}
                />
                <p className="publish__button-title">PUBLISH</p>
              </button>
              {/* </Link> */}
            </div>
            <div className="publish__cancel">
              <button className="publish__cancel-box">
                <p className="publish__button-title">CANCEL</p>
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default VideoUpload;
