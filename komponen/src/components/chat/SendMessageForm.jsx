import React, { useState } from 'react';
import './ChatStyles.scss';

const SendMessageForm = ({ sendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      sendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="send-message-form flex mt-2">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 p-2 border border-gray-300 rounded-l-md"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-r-md">Send</button>
    </form>
  );
};

export default SendMessageForm;
