import * as api from "../api";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import Error from "./Error";
import { useParams } from "react-router-dom";
import CommentSection from "./CommentSection";
import VoteCount from "./VoteCount";

const ViewArticle = () => {
  const [articleChoice, setArticleChoice] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    api
      .getArticle(article_id)
      .then(({ article }) => {
        setArticleChoice(article);
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

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <Error status={error.status} message={error.msg} />;
  }

  return (
    <>
      <h1>{articleChoice.title}</h1>
      <h3>Author: {articleChoice.author}</h3>

      <img
        src={articleChoice.article_img_url}
        alt={`Picture relating to ${articleChoice.topic}`}
      />
      <p>{articleChoice.body}</p>

      <VoteCount
        votes={articleChoice.votes}
        article_id={articleChoice.article_id}
      />
      <h3>Comments: {articleChoice.comment_count}</h3>
      <CommentSection article_id={articleChoice.article_id} />
    </>
  );
};

export default ViewArticle;
