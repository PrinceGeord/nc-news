import { useState } from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  const [articleSelection, setArticleSelection] = useState;

  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <ArticleResults articleSelection={articleSelection} />
          }
        />
      </Routes>
      <div></div>
    </>
  );
}

export default App;
