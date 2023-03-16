import React, { useState } from 'react';
import Chatbot from './components/ChatBot.jsx';
import './App.css';
import openai from 'openai';

function App() {
  const [messages, setMessages] = useState([]);

  const addMessage = async (newMessage) => {
    setMessages([...messages, { text: newMessage, sender: 'user' }]);

    try {
      const response = await openai.completions.create({
        engine: 'davinci',
        prompt: newMessage,
        maxTokens: 50,
        n: 1,
        stop: '\n',
      });

      const botMessage = response.choices[0].text.trim();

      setMessages([...messages, { text: botMessage, sender: 'bot' }]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <h1>OpenAI Chatbot</h1>
      <Chatbot addMessage={addMessage} messages={messages} />
    </div>
  );
}

export default App;