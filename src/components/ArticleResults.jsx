import { Link } from "react-router-dom";
import * as api from "../api";
import { useState, useEffect } from "react";
import Loader from "./Loader";

const ArticleResults = ({
  articleSelection,
  setArticleSelection,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://bc-news-public-princegeord.onrender.com/api/articles"
    )
      .then((response) => response.json())
      .then((body) => {
        console.log(body.articles);
        setArticleSelection(body.articles);
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

  if (isLoading) return <Loader />;
  if (error)
    return <Error status={error.status} message={error.msg} />;

  const topFour = [
    articleSelection[0],
    articleSelection[1],
    articleSelection[2],
    articleSelection[3],
  ];

  return (
    <section className="article-selection">
      {topFour.map((article, index) => {
        return (
          <div
            key={article.article_id}
            className={`article-card card${index}`}
          >
            <h3>{article.title}</h3>
            <img
              className="article-card-img"
              src={article.article_img_url}
              alt={`Picture of ${article.title}`}
            />
          </div>
        );
      })}
      <Link to="/articles">See full list of articles</Link>
    </section>
  );
};

export default ArticleResults;
