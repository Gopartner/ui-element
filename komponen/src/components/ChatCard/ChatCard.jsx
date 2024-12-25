// src/components/ChatCard.jsx
import React from 'react';
import './ChatCard.scss'; // Impor file Sass

const ChatCard = ({ sender, message, time, isRead }) => {
  return (
    <div className="chat-card">
      <div className="chat-card-header">
        <span className="sender-name">{sender}</span>
        <span className="time">{time}</span>
      </div>
      <div className="chat-card-message">
        <p>{message}</p>
        {isRead && <span className="read-status">✓✓</span>}
      </div>
    </div>
  );
};

export default ChatCard;
