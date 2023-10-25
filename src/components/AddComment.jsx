import { useState } from "react";
import * as api from "../api";

const AddComment = ({ article_id, users }) => {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);

    api.postComment(article_id, formJson);
  };

  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
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
          post:
          <input type="text" name="body" className="comment-field" />
        </label>
        <button type="submit">Post comment!</button>
      </form>
    </>
  );
};

export default AddComment;
