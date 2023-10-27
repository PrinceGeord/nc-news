import { useState } from "react";
import ArticleList from "./ArticleList";
import OrderAndSorter from "./OrderAndSorter";

const FullArticleList = ({
  articleSelection,
  setArticleSelection,
  topicSelection,
}) => {
  const [order, setOrder] = useState(0);
  const [sortBy, setSortBy] = useState("");

  return (
    <section>
      <OrderAndSorter
        setOrder={setOrder}
        order={order}
        setSortBy={setSortBy}
      />
      <ArticleList
        order={order}
        sortBy={sortBy}
        topicSelection={topicSelection}
        articleSelection={articleSelection}
        setArticleSelection={setArticleSelection}
      />
    </section>
  );
};

export default FullArticleList;
