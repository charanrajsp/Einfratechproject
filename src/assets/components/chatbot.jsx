import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Welcome to Einfratech Systems India! How can I assist you?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const faq = {
    "What services do you offer?": "We specialize in IT solutions, software development, and cloud services.",
    "Where is your company located?": "We are based in India with offices in multiple cities.",
    "How can I contact support?": "You can reach us at support@einfratech.com.",
    "What industries do you serve?": "We serve industries like finance, healthcare, and manufacturing.",
    "Do you provide custom software development?": "Yes, we offer tailored software solutions for businesses."
  };

  const handleUserMessage = (message) => {
    let botReply;

    if (message.toLowerCase() === "hi") {
      botReply = "Hello! I can answer the following questions:\n" + Object.keys(faq).join("\n");
    } else {
      botReply = faq[message] || "Sorry, I don't have an answer for that.";
    }

    setMessages((prev) => [
      ...prev,
      { id: prev.length + 1, text: message, sender: "user" },
      { id: prev.length + 2, text: botReply, sender: "bot" }
    ]);
  };

  const handleSendMessage = () => {
    if (input.trim() !== "") {
      handleUserMessage(input);
      setInput("");
    }
  };

  return (
    <div className="chatbot-container">
      {/ Chatbot Icon /}
      {!isOpen && (
        <button
          className="chatbot-icon"
          onClick={() => setIsOpen(true)}
        >
          <MessageCircle size={30} className="text-white" />
        </button>
      )}

      {/ Chatbot Window /}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="chatbot-window"
        >
          {/ Header /}
          <div className="chatbot-header">
            <h2>Einfratech Chatbot</h2>
            <button onClick={() => setIsOpen(false)}>
              <X size={24} />
            </button>
          </div>

          {/ Chat Messages /}
          <div className="chatbot-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>

          {/ Input Box /}
          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Chatbot;