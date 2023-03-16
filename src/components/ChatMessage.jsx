import React from 'react';

function ChatMessage({ message }) {
  const { text, sender } = message;

  return (
    <div className={`chat-message ${sender}-message`}>
      <p>{text}</p>
    </div>
  );
}

export default ChatMessage;