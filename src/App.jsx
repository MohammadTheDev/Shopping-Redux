import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Containers/Header";
import productListing from "./Containers/ProductListing";
import ProductDetail from "./Containers/ProductDetail";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact Component={productListing}></Route>
          <Route path="/product/:productId" Component={ProductDetail}></Route>
          <Route>404 Not Found</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
