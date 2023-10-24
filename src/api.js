export const getArticles = () => {
  return fetch(
    "https://bc-news-public-princegeord.onrender.com/api/articles"
  ).then((response) => {
    return response.json();
  });
};

export const getArticle = (article_id) => {
  return fetch(
    `https://bc-news-public-princegeord.onrender.com/api/articles/${article_id}`
  ).then((response) => {
    return response.json();
  });
};

export const getArticleComments = (article_id) => {
  return fetch(
    `https://bc-news-public-princegeord.onrender.com/api/articles/${article_id}/comments`
  ).then((response) => {
    return response.json();
  });
};
