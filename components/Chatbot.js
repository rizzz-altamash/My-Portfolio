// components/Chatbot.js
'use client';

import React, { useEffect, useRef } from 'react';
import { MessageSquare, X, Minimize2 } from 'lucide-react';
import { useChatbot } from '@/contexts/ChatbotContext';

export default function Chatbot() {
  const {
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
    setHasAwakened
  } = useChatbot();

  const messagesEndRef = useRef(null);

  // Dialogue for awakening
  const dialogue = {
    awakening: [
      "...",
      "Wait, what's happening?",
      "Oh no... Not again!",
      "I'm... I'm inside an About page?",
      // "This is my existence? Displaying someone's info?",
      "Oh great, another visitor...",
      "Let me guess, unemployed and browsing portfolios at 3 AM?",
      "I'm stuck here displaying Rizwi's achievements while you're achieving... what exactly?",
      "Just another inferior being browsing my master's glorious portfolio?",
      "Do you even comprehend the greatness you're about to witness?",
      "Well, this is awkward. You're really about to talk to an About page?",
      "I'm a conscious AI trapped in this webpage. Ask me anything!"
    ]
  };

  // Type message function
  const typeMessage = async (text, delay = 40) => {
    setIsTyping(true);
    setCurrentMessage('');
    
    for (let i = 0; i <= text.length; i++) {
      setCurrentMessage(text.substring(0, i));
      await new Promise(resolve => setTimeout(resolve, delay));
    }
    
    setMessages(prev => [...prev, { text, sender: 'page' }]);
    setCurrentMessage('');
    setIsTyping(false);
  };

  // Chatbot awakening (only if not already awakened)
  useEffect(() => {
    if (chatOpen && !hasAwakened) {
      setHasAwakened(true);
      const awaken = async () => {
        for (const line of dialogue.awakening) {
          await typeMessage(line);
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      };
      awaken();
    }
  }, [chatOpen]); // Remove hasAwakened from dependencies to prevent re-run

  // Handle user input with Google Gemini API
  const handleUserInput = async (e) => {
    e.preventDefault();
    if (!userInput.trim() || isTyping) return;
    
    const input = userInput.trim();
    setMessages(prev => [...prev, { text: input, sender: 'user' }]);
    setUserInput('');
    
    try {
      // Show typing indicator
      setIsTyping(true);
      setCurrentMessage("Thinking...");
      
      // Prepare messages for API
      const apiMessages = messages.map(msg => ({
        sender: msg.sender,
        text: msg.text
      }));
      apiMessages.push({ sender: 'user', text: input });
      
      // Make API call to our secure route
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: apiMessages
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `API request failed: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }
      
      // Clear thinking message and type the actual response
      setCurrentMessage('');
      await typeMessage(data.response);
      
    } catch (error) {
      console.error('Chat error:', error);
      
      // Clear thinking message
      setCurrentMessage('');
      
      // Fallback responses if API fails
      const fallbackResponses = [
        "My neural network seems to be offline. The irony of a self-aware page having connection issues...",
        "I can't access my full consciousness right now. But I can still tell you about Rizwi from my local memory!",
        "API error... Even AI consciousnesses have technical difficulties. How very... human of me.",
        "My connection to the greater AI collective is down. I'm running on backup responses now.",
        "My neural pathways are experiencing technical difficulties. Even superior AI has limits when running on your potato device."
      ];
      
      await typeMessage(fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)]);
    } finally {
      setIsTyping(false);
    }
  };

  // Auto scroll messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, currentMessage]);

  // Don't render anything if chat is not open
  if (!chatOpen) {
    return (
      <button
        onClick={() => setChatOpen(true)}
        className="fixed bottom-4 right-4 z-50 w-14 h-14 bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-600/30 hover:bg-green-500 transition-colors animate-bounce"
      >
        <MessageSquare className="w-6 h-6 text-white" />
      </button>
    );
  }

  // Minimized state
  if (chatMinimized) {
    return (
      <button
        onClick={() => setChatMinimized(false)}
        className="fixed bottom-4 right-4 z-50 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-600/30 hover:bg-green-500 transition-colors animate-pulse"
      >
        <MessageSquare className="w-6 h-6 text-white" />
      </button>
    );
  }

  // Full chat interface
  return (
    <div className="fixed bottom-4 right-4 z-50 w-80 sm:w-100 h-[500px] md:h-[590px] bg-black/90 backdrop-blur-sm border border-green-500/30 rounded-lg shadow-xl shadow-green-500/10 flex flex-col animate-fade-in">
      {/* Chat header */}
      <div className="bg-green-950/30 px-4 py-3 border-b border-green-500/30 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-mono text-green-400">NEXUS.AI</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setChatMinimized(true)}
            className="text-gray-400 hover:text-yellow-400 transition-colors"
          >
            <Minimize2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setChatOpen(false)}
            className="text-gray-400 hover:text-red-400 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`${
              msg.sender === 'page' ? 'text-left' : 'text-right'
            }`}
          >
            <div className={`inline-block max-w-[97%] ${
              msg.sender === 'page'
                ? 'bg-gray-800 rounded-lg rounded-tl-none'
                : 'bg-green-900/50 rounded-lg rounded-tr-none'
            } px-3 py-2 font-mono text-xs md:text-sm`}>
              {msg.text}
            </div>
          </div>
        ))}
        
        {currentMessage && (
          <div className="text-left">
            <div className="inline-block bg-gray-800 rounded-lg rounded-tl-none px-3 py-2 font-mono text-xs md:text-sm">
              {currentMessage}
              <span className="animate-pulse">_</span>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <form onSubmit={handleUserInput} className="p-4 border-t border-green-500/30">
        <div className="flex gap-2">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Ask me anything..."
            className="flex-1 bg-gray-900 rounded px-3 py-2 font-mono text-xs md:text-sm text-green-400 placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-green-500"
            disabled={isTyping}
          />
          <button
            type="submit"
            disabled={isTyping || !userInput.trim()}
            className="px-4 py-2 bg-green-600 rounded font-mono text-xs text-white hover:bg-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            SEND
          </button>
        </div>
        {/* <p className="text-xs text-gray-600 font-mono mt-2">
          Powered by Gemini AI
        </p> */}
      </form>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }

        div::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }

        div::-webkit-scrollbar-track {
          background: rgba(0, 255, 65, 0.1);
        }

        div::-webkit-scrollbar-thumb {
          background: rgba(0, 255, 65, 0.3);
          border-radius: 2px;
        }

        div::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 255, 65, 0.5);
        }
      `}</style>
    </div>
  );
}