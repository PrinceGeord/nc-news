import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CommentCard = ({ comment }) => {
  const postedAt = new Date(comment.created_at).toString();
  const dateArray = postedAt.split(" ");

  return (
    <section className="comment">
      <h4>{comment.author}</h4>
      <h5>{`${dateArray[0]}, ${dateArray[2]}-${dateArray[1]}-${dateArray[3]} ${dateArray[4]}`}</h5>
      <p>{comment.body}</p>
      <h4>Votes: {comment.votes}</h4>
    </section>
  );
};

export default CommentCard;
