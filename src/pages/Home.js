import React from "react";
import { Link } from "react-router-dom";

// Sample featured milk products
const featuredProducts = [
  { id: 1, name: "Full Cream Milk", price: 120, image: "/images/full-cream.jpg" },
  { id: 2, name: "Toned Milk", price: 100, image: "/images/toned-milk.jpg" },
  { id: 3, name: "Flavored Milk", price: 150, image: "/images/flavored-milk.jpg" },
];

const Home = () => {
  return (
    <div className="bg-yellow-50 min-h-screen">

      {/* Hero Section */}
      <section className="text-center py-20 bg-green-100">
        <h1 className="text-5xl font-extrabold text-green-900 mb-4">
          Hajvery Milk Shop
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Fresh and healthy milk delivered straight to your doorstep.
        </p>
        <Link
          to="/order-online"
          className="bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:bg-green-800 transition duration-300"
        >
          Order Now
        </Link>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-green-900">Why Choose Us?</h2>
        <p className="text-gray-700 mb-10">
          We provide only the freshest milk and dairy products, sourced directly from trusted farms. 
          Purity, quality, and freshness guaranteed in every pack.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Fresh & Pure</h3>
            <p>Delivered from farm to your doorstep.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Healthy Options</h3>
            <p>Full cream, toned, and flavored milk available.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Reliable Service</h3>
            <p>Fast delivery and customer satisfaction guaranteed.</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 bg-green-50 text-center max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-green-900">Featured Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-lg transition p-6">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-green-700 font-bold mb-2">Rs. {product.price}</p>
              <Link
                to={`/products/${product.id}`}
                className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
              >
                Buy Now
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-200 text-center">
        <h2 className="text-3xl font-bold mb-4 text-green-900">Get Fresh Milk Delivered Today!</h2>
        <Link
          to="/order-online"
          className="bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:bg-green-800 transition duration-300"
        >
          Order Now
        </Link>
      </section>
    </div>
  );
};

export default Home;
