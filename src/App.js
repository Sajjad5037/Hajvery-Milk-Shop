import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ShopOnline from "./pages/ShopOnline";

function App() {
  return (
    <Router>
      {/* Main content area */}
      <div className="bg-gray-50 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />          
          <Route path="/order-online" element={<ShopOnline />} />      
          
          
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
