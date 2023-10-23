import { useState } from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ArticleResults from "./components/ArticleResults";
import FullArticleList from "./components/FullArticleList";
import * as api from "./api";

function App() {
  const initialSelection = api.fetchArticles();
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
            <FullArticleList articleSelection={articleSelection} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
