import React, { useState } from 'react';
import ChatMessage from './ChatMessage';

function Chatbot({ addMessage, messages }) {
  const [currentMessage, setCurrentMessage] = useState('');

  const handleChange = (event) => {
    setCurrentMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addMessage(currentMessage);
    setCurrentMessage('');
  };

  return (
    <div className="chat-container">
      {messages.map((message, index) => (
        <ChatMessage key={index} message={message} />
      ))}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type a message..."
          value={currentMessage}
          onChange={handleChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chatbot;