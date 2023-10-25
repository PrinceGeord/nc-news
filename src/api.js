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

export const patchVotes = (article_id, value) => {
  return fetch(
    `https://bc-news-public-princegeord.onrender.com/api/articles/${article_id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inc_votes: value }),
    }
  ).then((response) => response.json());
};
