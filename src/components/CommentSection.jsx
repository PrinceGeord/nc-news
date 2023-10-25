import CommentCard from "./CommentCard";
import { useEffect, useState } from "react";
import * as api from "../api";
import Loader from "./Loader";
import Error from "./Error";

import AddComment from "./AddComment";

const CommentSection = ({ article_id }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [commentSelection, setCommentSelection] = useState([]);
  const [users, setUsers] = useState([
    "tickle122",
    "grumpy19",
    "cooljmessy",
    "jessjelly",
    "happyamy2016",
  ]);

  useEffect(() => {
    setIsLoading(true);
    api
      .getArticleComments(article_id)
      .then(({ comments }) => {
        setCommentSelection(comments);
        setIsLoading(false);
        setError(null);
      })
      .catch(({ response: { status, data: msg } }) => {
        setError({ status, msg });
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <Error status={error.status} message={error.msg} />;
  }
  if (!commentSelection) {
    return (
      <>
        {" "}
        <AddComment article_id={article_id} users={users} />
        <section className="section-overlay">
          <h3>Comments</h3>
          <div className="comment-section">
            <h2> No comments yet. Be the first!</h2>
          </div>
        </section>
      </>
    );
  }
  return (
    <>
      <AddComment article_id={article_id} users={users} />{" "}
      <section className="section-overlay">
        <h3>Comments</h3>
        <div className="comment-section">
          <ul>
            {commentSelection.map((comment, index) => {
              return (
                <li key={comment.comment_id}>
                  <CommentCard comment={comment} />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default CommentSection;
