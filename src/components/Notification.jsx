//This `Notification.jsx` component displays a temporary pop-up message in the top-right corner, automatically disappearing after 3 seconds using a `useEffect` timer, providing users with unobtrusive feedback for actions like reminders or updates.

import React, { useEffect } from 'react';

// Notification pop-up component
const Notification = ({ message, onClose }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Notification disappears after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!message) {
    return null;
  }

  return (
    <div className="fixed top-5 right-5 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-transform transform animate-bounce">
      <p>{message}</p>
    </div>
  );
};

export default Notification;

