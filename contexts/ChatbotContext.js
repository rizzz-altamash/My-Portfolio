// contexts/ChatbotContext.js
'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const ChatbotContext = createContext();

export function ChatbotProvider({ children }) {
  // All chatbot states moved here
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMinimized, setChatMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [hasAwakened, setHasAwakened] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);

  // Auto-open chat after 3 seconds (only once)
  useEffect(() => {
    if (!hasInitialized) {
      const timer = setTimeout(() => {
        setChatOpen(true);
        setHasInitialized(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [hasInitialized]);

  const value = {
    chatOpen,
    setChatOpen,
    chatMinimized,
    setChatMinimized,
    messages,
    setMessages,
    currentMessage,
    setCurrentMessage,
    isTyping,
    setIsTyping,
    userInput,
    setUserInput,
    hasAwakened,
    setHasAwakened,
    hasInitialized,
    setHasInitialized
  };

  return (
    <ChatbotContext.Provider value={value}>
      {children}
    </ChatbotContext.Provider>
  );
}

export function useChatbot() {
  const context = useContext(ChatbotContext);
  if (!context) {
    throw new Error('useChatbot must be used within ChatbotProvider');
  }
  return context;
}