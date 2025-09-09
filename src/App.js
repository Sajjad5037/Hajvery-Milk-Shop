import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";



import OrderOnline from "./pages/OrderOnline";

function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />

      {/* Main content area */}
      <div className="bg-gray-50 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/order-online" element={<OrderOnline />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* Footer */}
      <div className="bg-green-800 text-white">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
