import React, { useState, useEffect } from "react";
import { FaPaperPlane, FaRobot } from 'react-icons/fa';
import "./Chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Welcome to Einfratech Systems India! How can I assist you?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [showCategories, setShowCategories] = useState(true);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [hoverMessage, setHoverMessage] = useState("Hi INFRA here");
  const [isTyping, setIsTyping] = useState(false);
  

  useEffect(() => {
    const messageContainer = document.querySelector('.chatbot-messages');
    if (messageContainer) {
      messageContainer.scrollTop = messageContainer.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    let messageTimer;
    if (isHovering) {
      messageTimer = setTimeout(() => {
        setHoverMessage("How can I help you today?");
      }, 1500);
    } else {
      setHoverMessage("Hi INFRA here");
    }
    return () => clearTimeout(messageTimer);
  }, [isHovering]);

  const categories = {
    "Products & Services": [
      "What products or solutions do you offer?",
      "Can you provide details about your specific product/service?",
      "What are the key benefits of using your solutions?",
      "Do you offer customized solutions?",
      "What technologies do you use in your products/services?"
    ],
    "Pricing & Quotes": [
      "How can I get a price quote?",
      "Do you offer free consultations or demos?",
      "Are there any discounts for bulk orders?",
      "What payment methods do you accept?"
    ],
    "Support & Troubleshooting": [
      "How can I get technical support?",
      "What is your warranty policy?",
      "Do you provide on-site support or remote assistance?",
      "Where can I find product manuals or guides?"
    ],
    "Partnerships & Careers": [
      "How can I become a partner or distributor?",
      "Are you hiring?",
      "How can I apply for a job at Einfratech?"
    ]
  };

  const generateBotReply = (userText) => {
    const replies = {
      "what products or solutions do you offer?": "We offer a range of products and services including global connectivity tools, AV equipment rentals, and expert electrical repairs.",
      "can you provide details about your specific product/service?": "Our services include AV solutions, electrical systems, network infrastructure, and facility management tools. Which specific service would you like to know more about?",
      "what are the key benefits of using your solutions?": "Our solutions offer enhanced efficiency, reliable performance, 24/7 support, and customized implementations to meet your specific needs.",
      "do you offer customized solutions?": "Yes, we specialize in creating tailored solutions that match your specific requirements and business goals.",
      "what technologies do you use in your products/services?": "We utilize cutting-edge technologies including IoT, cloud computing, advanced AV systems, and smart building solutions.",
      "how can i get a price quote?": "To obtain a price quote, please contact us at sales@einfratech.com or call 080-4377 3134.",
      "do you offer free consultations or demos?": "Yes, we offer free initial consultations and product demonstrations. Contact us to schedule one.",
      "are there any discounts for bulk orders?": "Yes, we offer special pricing for bulk orders. Please contact our sales team for details.",
      "what payment methods do you accept?": "We accept various payment methods including bank transfer, credit cards, and corporate purchase orders.",
      "how can i get technical support?": "For technical support, you can reach us 24/7 at our helpdesk: 080-4377 3134 or email support@einfratech.com",
      "what is your warranty policy?": "We offer comprehensive warranty coverage on all our products and services. Duration varies by product.",
      "do you provide on-site support or remote assistance?": "We provide both on-site support and remote assistance, depending on your needs and the situation.",
      "where can i find product manuals or guides?": "Product manuals and guides are available in our customer portal or can be requested from our support team.",
      "how can i become a partner or distributor?": "For partnership opportunities, please email us at partnerships@einfratech.com with your company details.",
      "are you hiring?": "Yes, we're always looking for talented individuals! Please visit our careers page for current openings.",
      "how can i apply for a job at einfratech?": "Visit our careers page at einfratech.com/careers to view openings and submit your application."
    };
    return replies[userText.toLowerCase()] || "I'll connect you with our team for more specific information about this. You can also reach us at sales@einfratech.com";
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 500);
  };

  

  const handleUserMessage = (text) => {
    if (!text.trim()) return;
    
    const userMessage = { id: messages.length + 1, text, sender: "user" };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botMessage = { 
        id: messages.length + 2, 
        text: generateBotReply(text), 
        sender: "bot" 
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleCategorySelect = (category) => {
    setCurrentCategory(category);
    setShowCategories(false);
  };

  const handleBackToCategories = () => {
    setShowCategories(true);
    setCurrentCategory(null);
  };

  return (
    <>

    
      <div 
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{ position: 'relative' }}
      >
        {isHovering && !isOpen && (
          <div className="floating-message">
            {hoverMessage}
          </div>
        )}
        <button 
          className="chatbot-toggle" 
          onClick={() => {
            setIsOpen(!isOpen);
            setIsHovering(false);
          }}
        >
          <img 
            src="/images/1.png" 
            alt="Chat" 
            style={{ width: '60px', height: '60px' }}
          />
        </button>
      </div>

      {isOpen && (
                <div className="chatbot-container">
                <div className="chatbot-header">
                  <div style={{ flex: 1 }}></div>
                  <span style={{ flex: 1, textAlign: 'center' }}>INFRA</span>
                  <button 
                    className="close-button"
                    style={{ flex: 1, justifyContent: 'flex-end' }}
                    onClick={() => setIsOpen(false)}
                  >
                    ✕
                  </button>
                </div>

          <div className="chatbot-messages">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`chatbot-message ${msg.sender}-message`}
              >
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div className="bot-typing">
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
              </div>
            )}
          </div>

          <div className="predefined-questions">
            {showCategories ? (
              Object.keys(categories).map((category) => (
                <button
                  key={category}
                  className="category-btn"
                  onClick={() => handleCategorySelect(category)}
                >
                  {category}
                </button>
              ))
            ) : (
              <>
                <button 
                  className="back-btn"
                  onClick={handleBackToCategories}
                >
                  ← Back to Categories
                </button>
                {categories[currentCategory].map((question) => (
                  <button
                    key={question}
                    className="question-btn"
                    onClick={() => handleUserMessage(question)}
                  >
                    {question}
                  </button>
                ))}
              </>
            )}
          </div>

          <div className="chatbot-input-container">
            <input
              type="text"
              className="chatbot-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleUserMessage(input)}
              placeholder="Type your message..."
            />
            <button 
              className="chatbot-send-btn"
              onClick={() => handleUserMessage(input)}
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;