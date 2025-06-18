import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import BuyCredit from "./Pages/BuyCredit";
import Result from "./Pages/Result";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<BuyCredit />} />
        <Route path="/result" element={<Result />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
