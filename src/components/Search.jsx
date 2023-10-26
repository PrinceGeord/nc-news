import * as api from "../api";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import Error from "./Error";
import { Link } from "react-router-dom";

const Search = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [topicSelection, setTopicSelection] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api
      .getTopics()
      .then(({ topics }) => {
        setTopicSelection(topics);
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
    return <Error />;
  }
  return (
    <>
      <form>
        <label>
          Search
          <input name="searchBar" placeholder="Does not work yet!" />
        </label>
      </form>
      <section className="topic-section">
        <ul>
          {topicSelection.map((topic, index) => {
            return (
              <li key={topic + index} className="topic">
                <h3>{topic.slug}</h3>
                <p>{topic.description}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Search;
