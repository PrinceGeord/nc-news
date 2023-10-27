import { useState } from "react";
import * as api from "../api";

const AddComment = ({ article_id, user }) => {
  const [formFilled, setFormFilled] = useState(false);
  const [warning, setWarning] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const body = event.target[0].value;

    if (body.length < 1) {
      setFormFilled(false);
      setWarning(true);
    } else {
      setFormFilled(true);
      api.postComment(article_id, user, body);
    }
  };

  const warningBody = (
    <p id="comment-warning">"Don't forget to write your comment!"</p>
  );

  if (!formFilled) {
    return (
      <div className="comment">
        <form onSubmit={handleSubmit}>
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
        {warning ? warningBody : null}
      </div>
    );
  } else {
    return <p className="comment">Thanks for your post!</p>;
  }
};

export default AddComment;
