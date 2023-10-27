import { useState } from "react";
import * as api from "../api";

const AddComment = ({ article_id, user }) => {
  const [formFilled, setFormFilled] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const body = event.target[0].value;

    if (body.length < 1) {
      setFormFilled(false);
    } else {
      setFormFilled(true);
      api.postComment(article_id, user, body);
    }
  };

  if (!formFilled) {
    return (
      <>
        <form
          // method="post"
          onSubmit={handleSubmit}
          className="comment"
        >
          <label>
            {user}:
            <input
              type="text"
              name="body"
              className="comment-field"
            />
          </label>
          <button type="submit" value="body">
            Post comment!
          </button>
        </form>
      </>
    );
  } else {
    return <p className="comment">Thanks for your post!</p>;
  }
};

export default AddComment;
