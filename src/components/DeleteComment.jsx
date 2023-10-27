import { useState, useEffect } from "react";
import * as api from "../api";

const DeleteComment = ({ comment_id }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    api
      .deleteComment(comment_id)
      .then(() => {
        setIsLoading(false);
        setError(null);
      })
      .catch(
        ({
          response: {
            status,
            data: { msg },
          },
        }) => {
          setError({ status, msg });
          setIsLoading(false);
        }
      );
  }, []);

  if (isLoading) return <p>Deleting comment...</p>;
  if (error) {
    return (
      <p>
        uh oh, something went wrong! Please refresh the page and try
        again
      </p>
    );
  }
  return <p>Comment deleted</p>;
};

export default DeleteComment;
