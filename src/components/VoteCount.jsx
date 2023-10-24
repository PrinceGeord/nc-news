import * as api from "../api";
import { useState, useEffect, useRef } from "react";
import Loader from "./Loader";
import Error from "./Error";

const VoteCount = ({ votes, article_id }) => {
  const [voteCount, setVoteCount] = useState(votes);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const imageCounter = useRef(0);
  const imageLoaded = () => {
    imageCounter.current += 1;
    if (imageCounter.current >= urls.length) {
      setIsLoading(false);
    }
  };
  const urls = [
    "https://www.clipartmax.com/png/small/223-2235237_owl-emoji-png.png",
    "https://www.emoji.co.uk/files/twitter-emojis/smileys-people-twitter/10633-athletic-shoe.png",
  ];

  if (error) {
    <Error status={error.status} message={error.msg} />;
  }

  return (
    <>
      <section className="vote-section">
        <input
          style={{ display: isLoading ? "block" : "none" }}
          className="button-img"
          type="button"
          alt="click here to upvote this article"
          onClick={(event) => {
            api.upVote(article_id);
            event.currentTarget.disabled = true;
            setVoteCount(voteCount + 1);
          }}
        />
        <input
          style={{ display: isLoading ? "none" : "block" }}
          className="button-img"
          type="image"
          alt="click here to upvote this article"
          src="https://www.clipartmax.com/png/small/223-2235237_owl-emoji-png.png"
          onLoad={imageLoaded}
          onClick={(event) => {
            api.upVote(article_id);
            event.currentTarget.disabled = true;
            setVoteCount(voteCount + 1);
          }}
        />

        <input
          style={{ display: isLoading ? "block" : "none" }}
          className="button-img"
          type="button"
          alt="click here to downvote this article"
          onClick={(event) => {
            api.downVote(article_id);
            event.currentTarget.disabled = true;
            setVoteCount(voteCount - 1);
          }}
        />
        <input
          style={{ display: isLoading ? "none" : "block" }}
          className="button-img"
          type="image"
          alt="click here to downvote this article"
          src="https://www.emoji.co.uk/files/twitter-emojis/smileys-people-twitter/10633-athletic-shoe.png"
          onLoad={imageLoaded}
          onClick={(event) => {
            api.downVote(article_id);
            event.currentTarget.disabled = true;
            setVoteCount(voteCount - 1);
          }}
        />
      </section>
      <h3>Votes: {voteCount}</h3>
    </>
  );
};

export default VoteCount;
