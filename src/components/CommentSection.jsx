import CommentCard from "./CommentCard";
import { useEffect, useState } from "react";
import * as api from "../api";
import Loader from "./Loader";
import Error from "./Error";

const CommentSection = ({ article_id }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [commentSelection, setCommentSelection] = useState([]);

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
  // const topFour = [
  //   commentSelection[0],
  //   commentSelection[1],
  //   commentSelection[2],
  //   commentSelection[3],
  // ];
  return (
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
  );
};

export default CommentSection;
