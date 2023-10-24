import * as api from "../api";
import { useState } from "react";

const VoteCount = ({ votes, article_id }) => {
  const [voteCount, setVoteCount] = useState(votes);

  return (
    <>
      <section className="vote-section">
        <input
          className="button-img"
          type="image"
          alt="click here to upvote this article"
          src="https://www.clipartmax.com/png/middle/223-2235237_owl-emoji-png.png"
          onClick={(event) => {
            api.upVote(article_id);
            event.currentTarget.disabled = true;
            setVoteCount(voteCount + 1);
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
            setVoteCount(voteCount - 1);
          }}
        />
      </section>
      <h3>Votes: {voteCount}</h3>
    </>
  );
};

export default VoteCount;
