import React from "react";
import "./commentsform.scss";
//number of comments changes depending on the videos
const Commentsform = () => {
  return (
    <section>
      <p className="comments__tag">3 Comments</p>
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
          <button>COMMENT</button>
        </form>
      </div>
      <div class="comments__line"></div>
    </section>
  );
};

export default Commentsform;

/*<input
            class="comments__form-button-input"
            type="submit"
            value="comment"
          /> */
