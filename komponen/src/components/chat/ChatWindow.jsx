// src/components/chat/ChatWindow.js
import React, { useEffect } from 'react';
import SendMessageForm from './SendMessageForm';

const ChatWindow = ({ messages, onSend }) => {
  useEffect(() => {
    const chatMessages = document.querySelector('.chat-messages');
    chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll ke bawah saat pesan baru diterima
  }, [messages]);

  return (
    <div>
      <h2>Chat</h2>
      <div className="chat-messages" style={{ maxHeight: '300px', overflowY: 'auto' }}>
        {messages.map((msg, index) => (
          <div key={index} className="chat-message">
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <SendMessageForm onSend={onSend} />
    </div>
  );
};

export default ChatWindow;
