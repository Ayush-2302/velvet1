import React from 'react';

const BlogPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">My Blog</h1>
        <p className="text-lg text-gray-600">Exploring Ideas, One Post at a Time</p>
      </header>

      {/* Featured Post */}
      <section className="mb-8">
        <div className="bg-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-semibold">The Latest Insights on [Topic]</h2>
          <p className="mt-2 text-gray-700">A brief summary of the featured post goes here...</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Read More</button>
        </div>
      </section>

      {/* Recent Posts */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Latest Articles</h3>
        <ul>
          {['Post 1', 'Post 2', 'Post 3'].map((post, index) => (
            <li key={index} className="mb-4">
              <h4 className="text-lg font-medium">{post}</h4>
              <p className="text-gray-600">Short excerpt of the post...</p>
              <button className="mt-2 text-blue-500">Read More</button>
            </li>
          ))}
        </ul>
      </section>

      {/* Categories */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Categories</h3>
        <div className="flex space-x-4">
          {['Category 1', 'Category 2', 'Category 3', 'Category 4'].map((category, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 py-1 px-3 rounded">
              {category}
            </span>
          ))}
        </div>
      </section>

      {/* Subscribe */}
      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
        <p>Join our newsletter for the latest updates!</p>
        <input
          type="email"
          placeholder="Your email"
          className="border border-gray-300 rounded px-4 py-2 mt-2"
        />
        <button className="ml-2 bg-blue-500 text-white py-2 px-4 rounded">Subscribe</button>
      </section>

      {/* Footer */}
      <footer className="mt-10 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} My Blog</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-blue-500">Facebook</a>
          <a href="#" className="text-blue-500">Twitter</a>
          <a href="#" className="text-blue-500">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default BlogPage;
