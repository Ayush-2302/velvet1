// src/EcommercePage.js
import React, { useState } from "react";

const productsData = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1612858249937-1cc0852093dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lyZWxlc3MlMjBoZWFkcGhvbmVzfGVufDB8MHwwfHx8MA%3D%3D",
    description: "Experience high-quality sound with our noise-cancelling wireless headphones.",
    category: "Electronics",
  },
  {
    id: 2,
    title: "Smartphone",
    price: 699.99,
    image: "https://images.unsplash.com/photo-1517765371796-5bd3a7d30a29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNtYXJ0cGhvbmV8ZW58MHwwfDB8fHww",
    description: "Stay connected with the latest smartphone featuring a stunning display.",
    category: "Electronics",
  },
  {
    id: 3,
    title: "Yoga Mat",
    price: 29.99,
    image: "https://plus.unsplash.com/premium_photo-1682142243512-0e0d132adf58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWF0fGVufDB8MHwwfHx8MA%3D%3D",
    description: "Comfortable and durable yoga mat for all your workout needs.",
    category: "Fitness",
  },
  {
    id: 4,
    title: "Bluetooth Speaker",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1529359744902-86b2ab9edaea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNwZWFrZXJ8ZW58MHwwfDB8fHww",
    description: "Portable Bluetooth speaker with rich sound quality and long battery life.",
    category: "Electronics",
  },
  {
    id: 5,
    title: "Running Shoes",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1724921196393-40031963427c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHJ1bm5pbmclMjBzaG9lc3xlbnwwfDB8MHx8fDA%3D",
    description: "Lightweight running shoes designed for maximum comfort and performance.",
    category: "Footwear",
  },
  {
    id: 6,
    title: "Coffee Maker",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1616662707932-350e6e599ea8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmVlbWFrZXJ8ZW58MHwwfDB8fHww",
    description: "Brew your perfect cup of coffee with our easy-to-use coffee maker.",
    category: "Home Appliances",
  },
  {
    id: 7,
    title: "Backpack",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1536584754829-12214d404f32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFja3BhY2t8ZW58MHwwfDB8fHww",
    description: "Stylish and spacious backpack perfect for school or travel.",
    category: "Fashion",
  },
  {
    id: 8,
    title: "Smart Watch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523395451704-22c6fb0522cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c21hcnR3YXRjaHxlbnwwfDB8MHx8fDA%3D",
    description: "Track your fitness and stay connected with our advanced smart watch.",
    category: "Electronics",
  },
];

const EcommercePage = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.title} has been added to your cart!`);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">E-Commerce Store</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productsData.map((product) => (
          <div key={product.id} className="border rounded-lg shadow-lg p-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-gray-700">${product.price.toFixed(2)}</p>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-gray-500 italic">{product.category}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 mt-4"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Shopping Cart</h2>
        <ul className="mt-4">
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <li key={index} className="border-b py-2">
                {item.title} - ${item.price.toFixed(2)}
              </li>
            ))
          ) : (
            <p className="text-gray-600">Your cart is empty.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default EcommercePage;
