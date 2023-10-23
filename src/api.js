export const getArticles = () => {
  return fetch(
    "https://bc-news-public-princegeord.onrender.com/api/articles"
  ).then((response) => {
    return response.json();
  });
};
