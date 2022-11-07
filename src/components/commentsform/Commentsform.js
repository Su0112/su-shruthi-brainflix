import React from "react";
import "./commentsform.scss";
import Btn from "../../assets/Icons/add_comment.svg";
import { convertTime } from "../../utils/Utils";
//number of comments changes depending on the videos
export default function Commentsform({ videoDetails }) {
  return (
    <section>
      <p className="form__tag">{videoDetails.comments.length} Comments</p>
      <div className="form">
        <div className="form__avatar"></div>
        <form className="form__container">
          <div className="form__container-main">
            <label className="form__container-section">
              JOIN THE CONVERSATION
            </label>
            <textarea
              type="text"
              className="form__container-text"
              name="formName"
              placeholder="Add a new comment"
              required
            ></textarea>
          </div>
          <button className="form__container-btn">
            <img className="header__container-btn-img" alt="upload" src={Btn} />
            COMMENT
          </button>
        </form>
      </div>
      <div class="comments__line"></div>

      {videoDetails.comments.length > 0 ? (
        <section className="comments__container">
          {videoDetails.comments.map((comments) => (
            <section key={comments.name}>
              <div className="comments__details">
                <div className="comments__avatar"></div>
                <div className="comments__description">
                  <div className="comments__name-date">
                    <p className="comments__name">{comments.name}</p>
                    <p className="comments__date">
                      {convertTime(comments.timestamp)}
                    </p>
                  </div>
                  <p className="comments__comment">{comments.comment}</p>
                </div>
              </div>
              <div className="comments__line"></div>
            </section>
          ))}
        </section>
      ) : (
        <div>
          <p className="comments__no-data">No Comments</p>
        </div>
      )}
    </section>
  );
}
