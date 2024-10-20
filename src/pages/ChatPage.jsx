// src/ChatPage.js
import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, id: messages.length }]);
      setInput("");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gradient-to-r from-purple-400 to-blue-500 rounded-lg shadow-lg">
      <img
        src="https://images.unsplash.com/photo-1494962155180-3ad765a04aac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGhhc2h0YWd8ZW58MHwwfDB8fHww"
        alt="Chat Background"
        className="rounded-lg mb-4 h-52 w-full object-cover"
      />
      <h1 className="text-3xl font-extrabold text-white text-center mb-6">
        ✨ Chat Room ✨
      </h1>

      <div className="bg-white rounded-lg p-4 h-64 overflow-y-scroll mb-4 shadow-md">
        {messages.map((message) => (
          <div key={message.id} className="flex my-2">
            <img
              src="https://images.unsplash.com/photo-1508773068480-2e2df9e1cc63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2luZ2xlJTIwaGFzaHRhZ3xlbnwwfDB8MHx8fDA%3D"
              alt="User Avatar"
              className="rounded-full mr-2 w-10 h-10"
            />
            <p className="bg-blue-100 p-2 rounded-lg shadow-sm transition-transform transform hover:scale-105">
              {message.text}
            </p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSendMessage} className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="border border-gray-300 rounded-lg p-3 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 transition flex items-center"
        >
          <FaPaperPlane className="mr-1" />
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatPage;
