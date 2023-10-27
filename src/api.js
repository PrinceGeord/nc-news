export const getArticles = (topicSelection, sortBy, order) => {
  let query = "";
  let queries = [];
  if (topicSelection) {
    queries.push(`topic=${topicSelection}`);
  }
  if (sortBy) {
    queries.push(`sort_by=${sortBy}`);
  }
  if (order) {
    queries.push(`order=ASC`);
  }

  if (queries.length > 0) {
    query = `?${queries.join("&")}`;
  }
  return fetch(
    `https://bc-news-public-princegeord.onrender.com/api/articles${query}`
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

export const postComment = (article_id, user, body) => {
  const commentObj = { username: user, body };

  return fetch(
    `https://bc-news-public-princegeord.onrender.com/api/articles/${article_id}/comments`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentObj),
    }
  ).then((response) => {
    return response.json();
  });
};
export const deleteComment = (comment_id) => {
  return fetch(
    `https://bc-news-public-princegeord.onrender.com/api/comments/${comment_id}`,
    { method: "DELETE" }
  ).then((response) => {
    return "deleted";
  });
};

export const getUsers = () => {
  return fetch(
    `https://bc-news-public-princegeord.onrender.com/api/users`
  ).then((response) => {
    return response.json();
  });
};

export const getTopics = () => {
  return fetch(
    `https://bc-news-public-princegeord.onrender.com/api/topics`
  ).then((response) => {
    return response.json();
  });
};
