import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const pageSize = 6;
  const apikey = process.env.REACT_APP_NEWS_API;

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <News
              pageSize={pageSize}
              apikey={apikey}
              country="us"
              category="general"
            />
          }
        />
        <Route
          path="/business"
          element={
            <News
              pageSize={pageSize}
              apikey={apikey}
              country="us"
              category="business"
            />
          }
        />
        <Route
          path="/entertainment"
          element={
            <News
              pageSize={pageSize}
              apikey={apikey}
              country="us"
              category="entertainment"
            />
          }
        />
        <Route
          path="/health"
          element={
            <News
              pageSize={pageSize}
              apikey={apikey}
              country="us"
              category="health"
            />
          }
        />
        <Route
          path="/technology"
          element={
            <News
              pageSize={pageSize}
              apikey={apikey}
              country="us"
              category="technology"
            />
          }
        />
        <Route
          path="/sports"
          element={
            <News
              pageSize={pageSize}
              apikey={apikey}
              country="us"
              category="sports"
            />
          }
        />
        <Route
          path="/science"
          element={
            <News
              pageSize={pageSize}
              apikey={apikey}
              country="us"
              category="science"
            />
          }
        />
      </Routes>
    </div>
  );
};
export default App;
