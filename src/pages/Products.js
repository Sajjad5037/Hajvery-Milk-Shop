import React from "react";
import { Link } from "react-router-dom";

// Sample milk products
const products = [
  { id: 1, name: "Full Cream Milk", price: 120, image: "/images/full-cream.jpg" },
  { id: 2, name: "Toned Milk", price: 100, image: "/images/toned-milk.jpg" },
  { id: 3, name: "Flavored Milk", price: 150, image: "/images/flavored-milk.jpg" },
  { id: 4, name: "Butter Milk", price: 90, image: "/images/butter-milk.jpg" },
  { id: 5, name: "Lassi", price: 130, image: "/images/lassi.jpg" },
];

const Products = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-green-900 mb-8 text-center">Our Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-green-700 font-bold mb-4">Rs. {product.price}</p>
            <Link
              to={`/products/${product.id}`}
              className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
