import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import * as api from "../api";
import Error from "./Error";

const FullArticleList = ({
  articleSelection,
  setArticleSelection,
  topicSelection,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [order, setOrder] = useState(0);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    setIsLoading(true);
    api
      .getArticles(topicSelection, sortBy, order)
      .then(({ articles }) => {
        setArticleSelection(articles);
        setIsLoading(false);
        setError(null);
      });
  }, [order]);

  const toggleOrder = (event) => {
    event.preventDefault();
    if (order === 0) {
      setOrder(1);
    } else setOrder(0);
  };
  const handleChange = (event) => {
    event.preventDefault();
    setSortBy(event.target.value);
  };
  const sortByObj = {
    date: ["Newest to oldest", "Oldest to newest"],
    comment_count: [
      "Most commented to least commented",
      "Least commented to most commented",
    ],
    votes: ["Most hoots given 🦉", "Most booted 👟"],
  };

  if (isLoading) return <Loader />;
  if (error)
    return <Error status={error.status} message={error.msg} />;

  return (
    <section>
      <select onChange={handleChange}>
        <option value="date">{sortByObj.date[order]}</option>
        <option value="comment_count">
          {sortByObj.comment_count[order]}
        </option>
        <option value="votes">{sortByObj.votes[order]}</option>
      </select>
      <button onClick={toggleOrder}>Toggle order</button>
      {articleSelection.map((article, index) => {
        return (
          <Link
            to={`/articles/${article.article_id}`}
            key={article.article_id}
            className={`article-card card${index}`}
          >
            <h3>{article.title}</h3>
            <h4>Topic: {article.topic}</h4>
            <h5>
              Votes: {article.votes} Comments: {article.comment_count}
            </h5>
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
