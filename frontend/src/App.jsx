import React from "react";
import "./App.css";
import Entry from "./components/Entry/Entry";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";



function App() {
  return (
      <div className="App">
          <Routes>
              <Route path={'/'} element={<Entry />} />
              <Route path={'/home'} element={<Home/>} />
          </Routes>
      </div>
  );
}

export default App;
