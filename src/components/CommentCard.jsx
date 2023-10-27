import { useState } from "react";

import DeleteComment from "./DeleteComment";

const CommentCard = ({ comment, user }) => {
  const postedAt = new Date(comment.created_at).toString();
  const dateArray = postedAt.split(" ");
  const [isDelete, setIsDelete] = useState(false);

  let deleteButton;
  const handleClick = (event) => {
    event.preventDefault();
    console.dir(event.target.value);
    setIsDelete(true);
  };
  if (isDelete) {
    return <DeleteComment comment_id={comment.comment_id} />;
  }

  if (user === comment.author) {
    deleteButton = (
      <button value={comment.comment_id} onClick={handleClick}>
        Delete Comment
      </button>
    );
  }
  return (
    <section className="comment">
      <h4>{comment.author}</h4>
      <h5>{`${dateArray[0]}, ${dateArray[2]}-${dateArray[1]}-${dateArray[3]} ${dateArray[4]}`}</h5>
      <p>{comment.body}</p>
      <h4>Votes: {comment.votes}</h4>
      {deleteButton}
    </section>
  );
};

export default CommentCard;
