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
  const [voteChange, setVoteChange] = useState(false);
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
      <section className="vote-section">
        <input
          className="button-img"
          type="image"
          alt="click here to upvote this article"
          src="https://www.clipartmax.com/png/middle/223-2235237_owl-emoji-png.png"
          onClick={(event) => {
            api.upVote(article_id);
            event.currentTarget.disabled = true;
            setVoteChange(true);
          }}
        />
        <input
          className="button-img"
          type="image"
          alt="click here to downvote this article"
          src="https://www.emoji.co.uk/files/twitter-emojis/smileys-people-twitter/10633-athletic-shoe.png"
          onClick={(event) => {
            api.downVote(article_id);
            event.currentTarget.disabled = true;
            setVoteChange(true);
          }}
        />
      </section>
      <h3>Votes: {articleChoice.votes}</h3>
      <VoteCount
        votes={articleChoice.votes}
        voteChange={voteChange}
        setVoteChange={setVoteChange}
      />
      <h3>Comments: {articleChoice.comment_count}</h3>
      <CommentSection article_id={articleChoice.article_id} />
    </>
  );
};

export default ViewArticle;
