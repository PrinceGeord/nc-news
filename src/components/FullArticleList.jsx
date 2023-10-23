const FullArticleList = ({ articleSelection }) => {
  return (
    <section>
      {articleSelection.map((article, index) => {
        return (
          <div
            key={article.article_id}
            className={`article-card card${index}`}
          >
            <h3>{article.title}</h3>
            <h4>Topic: {article.topic}</h4>
            <img
              className="article-card-img"
              src={article.article_img_url}
              alt={`Picture of ${article.title}`}
            />
          </div>
        );
      })}
    </section>
  );
};

export default FullArticleList;
