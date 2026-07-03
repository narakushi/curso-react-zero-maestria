import "./App.css";

// 1 - config react router

import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import NavBar from "./components/NavBar";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";

function App() {
  return (
    <div className="app">
      <h1>React Router</h1>
      <BrowserRouter>
        {/* 2 - links com react router*/}
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/** 4-  rota dinâmica */}
          <Route path="/products/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
