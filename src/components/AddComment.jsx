import { useState } from "react";
import * as api from "../api";

const AddComment = ({ article_id, users }) => {
  const [formFilled, setFormFilled] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    if (formJson.body.length < 1) {
      setFormFilled(false);
    } else {
      setFormFilled(true);
      api.postComment(article_id, formJson);
    }
  };

  if (!formFilled) {
    return (
      <>
        <form
          method="post"
          onSubmit={handleSubmit}
          className="comment"
        >
          <label>
            username:
            <input
              type="text"
              name="username"
              maxLength="15"
              className="username-field"
            />
          </label>
          <label>
            post:{" "}
            <input
              type="text"
              name="body"
              className="comment-field"
            />
          </label>
          <button type="submit">Post comment!</button>
        </form>
      </>
    );
  } else {
    return <p className="comment">Thanks for your post!</p>;
  }
};

export default AddComment;
