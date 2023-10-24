import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import * as api from "../api";
import Error from "./Error";

const FullArticleList = ({
  articleSelection,
  setArticleSelection,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    api.getArticles().then(({ articles }) => {
      setArticleSelection(articles);
      setIsLoading(false);
      setError(null);
    });
  }, []);

  if (isLoading) return <Loader />;
  if (error)
    return <Error status={error.status} message={error.msg} />;

  return (
    <section>
      {articleSelection.map((article, index) => {
        return (
          <Link
            to={`/articles/${article.article_id}`}
            key={article.article_id}
            className={`article-card card${index}`}
          >
            <h3>{article.title}</h3>
            <h4>Topic: {article.topic}</h4>
            <img
              className="article-card-img"
              src={article.article_img_url}
              alt={`Picture relating to ${article.topic}`}
            />
          </Link>
        );
      })}
    </section>
  );
};

export default FullArticleList;
