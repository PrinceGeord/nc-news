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

export const upVote = (article_id) => {
  return fetch(
    `https://bc-news-public-princegeord.onrender.com/api/articles/${article_id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inc_votes: 1 }),
    }
  ).then((response) =>
    response.json().then((json) => console.log(json))
  );
};

export const downVote = (article_id) => {
  return fetch(
    `https://bc-news-public-princegeord.onrender.com/api/articles/${article_id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inc_votes: -1 }),
    }
  ).then((response) =>
    response.json().then((json) => console.log(json))
  );
};
