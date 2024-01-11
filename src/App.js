import React, {useState} from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
const App = () => {
  
 const pagesize = 12;
 const apiKey = process.env.REACT_APP_NEWS_API;
  
  const [progress, setprogress] = useState(0);
  
  
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar color="#f11946" progress={progress} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News apiKey = {apiKey}
                  setProgress={setprogress}
                  pagesize={pagesize}
                  country="us"
                  key="general"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News apiKey = {apiKey}
                  setProgress={setprogress}
                  pagesize={pagesize}
                  country="us"
                  key="business"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News apiKey = {apiKey}
                  setProgress={setprogress}
                  pagesize={pagesize}
                  country="us"
                  key="entertainment"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News apiKey = {apiKey}
                  setProgress={setprogress}
                  pagesize={pagesize}
                  country="us"
                  key="health"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News apiKey = {apiKey}
                  setProgress={setprogress}
                  pagesize={pagesize}
                  country="us"
                  key="science"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News apiKey = {apiKey}
                  setProgress={setprogress}
                  pagesize={pagesize}
                  country="us"
                  key="sports"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News apiKey = {apiKey}
                  setProgress={setprogress}
                  pagesize={pagesize}
                  country="us"
                  key="technology"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  

  };
export default App;