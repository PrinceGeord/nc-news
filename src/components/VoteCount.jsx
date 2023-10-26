import * as api from "../api";
import { useState, useEffect, useRef } from "react";
import Loader from "./Loader";
import Error from "./Error";

const VoteCount = ({ votes, article_id }) => {
  const [voteDiff, setVoteDiff] = useState(0);
  const [error, setError] = useState(null);

  const updateVote = (value) => {
    setVoteDiff((currentVote) => {
      return currentVote + value;
    });
    api.patchVotes(article_id, value).catch(() => {
      setVoteDiff(0);
      setError({ msg: "failed patching of votes" });
    });
  };

  return (
    <>
      <p style={{ visibility: error ? "visible" : "hidden" }}>
        Vote failed to process, please try again
      </p>
      <section className="vote-section">
        <input
          className="button-img"
          type="image"
          alt="click here to upvote this article"
          src="https://www.clipartmax.com/png/small/223-2235237_owl-emoji-png.png"
          disabled={voteDiff === 1}
          onClick={() => {
            if (voteDiff === -1) {
              updateVote(2);
            } else updateVote(1);
          }}
        />
        <input
          className="button-img"
          type="image"
          alt="click here to downvote this article"
          src="https://www.emoji.co.uk/files/twitter-emojis/smileys-people-twitter/10633-athletic-shoe.png"
          disabled={voteDiff === -1}
          onClick={() => {
            if (voteDiff === 1) {
              updateVote(-2);
            } else updateVote(-1);
          }}
        />
      </section>
      <h3>Votes: {votes + voteDiff}</h3>
    </>
  );
};

export default VoteCount;
