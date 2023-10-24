import { useState } from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ArticleResults from "./components/ArticleResults";
import FullArticleList from "./components/FullArticleList";
import ViewArticle from "./components/ViewArticle";
import * as api from "./api";

function App() {
  const initialSelection = api.getArticles().articles;
  const [articleSelection, setArticleSelection] =
    useState(initialSelection);

  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <ArticleResults
              articleSelection={articleSelection}
              setArticleSelection={setArticleSelection}
            />
          }
        />
        <Route
          path="/articles"
          element={
            <FullArticleList
              articleSelection={articleSelection}
              setArticleSelection={setArticleSelection}
            />
          }
        />
        <Route
          path="/articles/:article_id"
          element={<ViewArticle />}
        />
      </Routes>
    </>
  );
}

export default App;
