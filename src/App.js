import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./Formik/components/Main";


import Pagination from "./Pagination/Pagination";
class App extends Component {
  render() {
    return (
      <div className="">
        <Routes>
         
          <Route path="/" element={<Pagination />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </div>
    );
  }
}

export default App;
