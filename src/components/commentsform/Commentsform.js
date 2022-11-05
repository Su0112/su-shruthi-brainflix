import React from "react";
import "./commentsform.scss";
import Btn from "../../assets/Icons/add_comment.svg";
import { convertTime } from "../../utils/Utils";
//number of comments changes depending on the videos
export default function Commentsform({ videoDetails }) {
  return (
    <section>
      <p className="comments__tag">{videoDetails.comments.length} Comments</p>
      <div className="form">
        <div className="form__avatar"></div>
        <form className="form__container">
          <div className="form__container-main">
            <label className="form__container-section">
              JOIN THE CONVERSATION
            </label>
            <input
              type="text"
              className="form__container-text"
              name="formName"
              placeholder="Add a new comment"
              required
            />
          </div>
          <button className="form__container-btn">
            <img
              className="header__container__btn-img"
              alt="upload"
              src={Btn}
            />
            COMMENT
          </button>
        </form>
      </div>
      <div class="comments__line"></div>

      {videoDetails.comments.length > 0 ? (
        <section className="comments__container">
          {videoDetails.comments.map((comments) => (
            <section key={comments.name}>
              <hr className="comments__divider" />
              <div className="comments__avatar--empty"></div>
              <p>{comments.name}</p>
              <p>{convertTime(comments.timestamp)}</p>
              <p>{comments.comment}</p>
            </section>
          ))}
        </section>
      ) : (
        <div>
          <p className="relatives__no-data">No Comments</p>
        </div>
      )}
    </section>
  );
}
