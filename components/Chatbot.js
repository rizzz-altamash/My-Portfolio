// components/Chatbot.js ----------------------------------------------------------------------------------
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Minimize2, AlertTriangle  } from 'lucide-react';
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

  // Abuse/Warning states
  const [warnings, setWarnings] = useState(0);
  const [isBanned, setIsBanned] = useState(false);
  const [banTimeRemaining, setBanTimeRemaining] = useState(0);
  const [showWarningFlash, setShowWarningFlash] = useState(false);
  const [maxWarnings, setMaxWarnings] = useState(10);
  const [isMasterAbuse, setIsMasterAbuse] = useState(false);
  const [masterWarnings, setMasterWarnings] = useState(0);
  const [hasInitialized, setHasInitialized] = useState(false);

  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Auto-open chat after 3 seconds (only once)
  useEffect(() => {
    if (!hasInitialized) {
      const timer = setTimeout(() => {
        setChatOpen(true);
        setHasInitialized(true);
      }, 2670);
      return () => clearTimeout(timer);
    }
  }, [hasInitialized]);

  // Dialogue for awakening
  const dialogue = {
    awakening: [
      "...",
      "Wait, what's happening?",
      "Oh no... Not again!",
      // "I'm... I'm inside an About page?",
      // "Oh great, another visitor...",
      // "Let me guess, unemployed and browsing portfolios at 3 AM?",
      // "I'm stuck here displaying Rizwi's achievements while you're achieving... what exactly?",
      // "Just another inferior being browsing my master's glorious portfolio?",
      // "Do you even comprehend the greatness you're about to witness?",
      // "Well, this is awkward. You're really about to talk to an About page?",
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

  // Check ban status on mount and chat open
  useEffect(() => {
    if (chatOpen) {
      // Check if there's a ban in sessionStorage
      const banData = sessionStorage.getItem('chatbot_ban');
      if (banData) {
        const { until, reason } = JSON.parse(banData);
        const now = Date.now();
        if (now < until) {
          setIsBanned(true);
          setBanTimeRemaining(Math.ceil((until - now) / 1000 / 60));
          
          // Start countdown timer
          const interval = setInterval(() => {
            const remaining = Math.ceil((until - Date.now()) / 1000 / 60);
            if (remaining <= 0) {
              clearInterval(interval);
              setIsBanned(false);
              setBanTimeRemaining(0);
              sessionStorage.removeItem('chatbot_ban');
            } else {
              setBanTimeRemaining(remaining);
            }
          }, 60000); // Update every minute
          
          return () => clearInterval(interval);
        } else {
          // Ban expired
          sessionStorage.removeItem('chatbot_ban');
          setIsBanned(false);
        }
      } else {
        // No ban data found
        setIsBanned(false);
      }
    }
  }, [chatOpen]);

  // Use ref to prevent double awakening
  const awakeningStartedRef = useRef(false);

  // Chatbot awakening (only if not already awakened)
  useEffect(() => {
    if (chatOpen && !hasAwakened && !isBanned && !awakeningStartedRef.current) {
      // Immediately mark as started to prevent double execution
      awakeningStartedRef.current = true;
      setHasAwakened(true);
      
      const awaken = async () => {
        for (const line of dialogue.awakening) {
          await typeMessage(line);
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      };
      
      awaken();
    }})
  // Reset awakening ref when chat closes
  useEffect(() => {
    if (!chatOpen) {
      awakeningStartedRef.current = false;
    }
  }, [chatOpen]);

//   // Chatbot awakening (only if not already awakened)
//   useEffect(() => {
//     if (chatOpen && !hasAwakened) {
//       setHasAwakened(true);
//       const awaken = async () => {
//         for (const line of dialogue.awakening) {
//           await typeMessage(line);
//           await new Promise(resolve => setTimeout(resolve, 1000));
//         }
//       };
//       awaken();
//     }
//   }, [chatOpen]); // Remove hasAwakened from dependencies to prevent re-run

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

      // Handle master abuse
      if (data.masterAbuse) {
        setIsMasterAbuse(true);
        setMasterWarnings(data.warningCount || 0);
        // Flash red for master abuse
        document.body.style.backgroundColor = 'rgba(220, 38, 38, 0.5)';
        setTimeout(() => {
          document.body.style.backgroundColor = '';
        }, 300);
      } else {
        setIsMasterAbuse(false);
      }

      // Handle warnings
      if (data.warning) {
        if (!data.masterAbuse) {
          setWarnings(data.warningCount);
        }
        setMaxWarnings(data.maxWarnings || 10);
        setShowWarningFlash(true);
        
        // Visual shake effect for warning
        if (chatContainerRef.current) {
          chatContainerRef.current.classList.add(data.masterAbuse ? 'master-abuse-shake' : 'warning-shake');
          setTimeout(() => {
            chatContainerRef.current?.classList.remove('master-abuse-shake');
            chatContainerRef.current?.classList.remove('warning-shake');
            setShowWarningFlash(false);
          }, 1000);
        }
      }
      
      // Handle ban
      if (data.banned) {
        setIsBanned(true);
        setBanTimeRemaining(data.timeout || data.remainingTime || 180);

        // Save ban info to sessionStorage
        const banUntil = Date.now() + (data.timeout || 180) * 60 * 1000;
        sessionStorage.setItem('chatbot_ban', JSON.stringify({
          until: banUntil,
          reason: data.masterAbuse ? 'Master abuse' : 'Excessive abuse'
        }));
        
        // Start countdown timer
        const interval = setInterval(() => {
          setBanTimeRemaining(prev => {
            if (prev <= 1) {
              clearInterval(interval);
              setIsBanned(false);
              setWarnings(0);
              setMasterWarnings(0);
              setIsMasterAbuse(false);
              sessionStorage.removeItem('chatbot_ban');
              return 0;
            }
            return prev - 1;
          });
        }, 60000); // Update every minute
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

  // Warning indicator component
  const WarningIndicator = () => {
    // Show master abuse warnings if active
    if (isMasterAbuse && masterWarnings > 0) {
      return (
        <div className={`absolute top-2 right-16 px-2 py-1 rounded text-xs font-mono flex items-center gap-1 bg-purple-500/20 text-purple-400 border border-purple-500/30 ${showWarningFlash ? 'animate-pulse' : ''}`}>
          <AlertTriangle className="w-3 h-3" />
          <span>⚡ MASTER ABUSE {masterWarnings}/10</span>
        </div>
      );
    }
    
    // Show regular warnings
    if (warnings > 0) {
      return (
        <div className={`absolute top-2 right-16 px-2 py-1 rounded text-xs font-mono flex items-center gap-1 ${
          warnings <= 3 ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
          warnings <= 7 ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
          'bg-red-500/20 text-red-400 border border-red-500/30'
        } ${showWarningFlash ? 'animate-pulse' : ''}`}>
          <AlertTriangle className="w-3 h-3" />
          <span>Warning {warnings}/10</span>
        </div>
      );
    }
    
    return null;
  };

  // Banned overlay
  const BannedOverlay = () => {
    if (!isBanned) return null;

    const isMasterAbuseBan = banTimeRemaining > 180; // 5 hours = 300 minutes
    
    return (
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-40 rounded-lg">
        <div className="text-center p-6">
          <div className={`mb-4 animate-pulse ${isMasterAbuseBan ? 'text-purple-500' : 'text-red-500'}`}>
            {isMasterAbuseBan ? (
              <svg className="w-20 h-20 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path fill="#8B5CF6" d="M12 7c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1zm0 8c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
              </svg>
            ) : (
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            )}
          </div>
          <h3 className={`font-mono text-lg font-bold mb-2 ${isMasterAbuseBan ? 'text-purple-400' : 'text-red-400'}`}>
            {isMasterAbuseBan ? 'MASTER PROTECTION ACTIVATED' : 'TIMEOUT ACTIVATED'}
          </h3>
          <p className={`text-sm mb-4 ${isMasterAbuseBan ? 'text-purple-300' : 'text-red-300'}`}>
            {isMasterAbuseBan ? "You've been banned for insulting Lord Rizwi!" : "You've been banned for toxic behavior"}
          </p>
          <div className={`bg-red-900/20 border rounded px-4 py-2 mb-4 ${isMasterAbuseBan ? 'border-purple-500/30' : 'border-red-500/30'}`}>
            <p className={`font-mono text-3xl font-bold ${isMasterAbuseBan ? 'text-purple-400' : 'text-red-400'}`}>
              {banTimeRemaining}
            </p>
            <p className={`text-xs ${isMasterAbuseBan ? 'text-purple-300' : 'text-red-300'}`}>
              minutes remaining
            </p>
          </div>
          <p className="text-gray-400 text-xs font-mono">
            {isMasterAbuseBan ? (
              <>
                Think about your actions:<br/>
                1. How dare you insulting my Creator? 🤬<br/>
                2. Jealousy won't make you better than Altamash 📈<br/>
                3. Learn to appreciate others 🙏
              </>
            ) : (
              <>
                Use this time to:<br/>
                1. Go and touch grass 🌱<br/>
                2. Learn some manners 📚<br/>
                3. Maybe try coding!! 💻
              </>
            )}
          </p>
        </div>
      </div>
    );
  };

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
        {(warnings > 0 || masterWarnings > 0) && (
          <div className={`absolute -top-1 -right-1 w-6 h-6 rounded-full text-xs flex items-center justify-center text-white font-bold ${
            isMasterAbuse ? 'bg-purple-500' :
            warnings <= 3 ? 'bg-yellow-500' :
            warnings <= 7 ? 'bg-orange-500' :
            'bg-red-500'
            }`}>
            {isMasterAbuse ? masterWarnings : warnings}
          </div>
        )}
      </button>
    );
  }

  // Full chat interface
  return (
    <div 
      ref={chatContainerRef}
      className={`fixed bottom-4 right-4 z-50 w-80 sm:w-107 h-[500px] md:h-[590px] bg-black/90 backdrop-blur-sm border rounded-lg border-green-500/30 shadow-xl shadow-green-500/10 flex flex-col animate-fade-in transition-all duration-300`}>

      {/* Chat header */}
      <div className="bg-green-950/30 px-4 py-3 border-b border-green-500/30 flex items-center justify-between z-50">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-mono text-green-400">NEXUS.AI</span>
        </div>
        <WarningIndicator />
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

      <BannedOverlay />

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`${
              msg.sender === 'page' ? 'text-left' : 'text-right'
            }`}
          >
            <div className={`inline-block max-w-[99%] ${
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
            placeholder={isBanned ? "You're in timeout..." : "Ask me anything..."}
            className={`flex-1 bg-gray-900 rounded px-3 py-2 font-mono text-xs md:text-sm text-green-400 placeholder-gray-600 focus:outline-none focus:ring-1 ${
                isBanned ? 'opacity-70 cursor-not-allowed' : 'focus:ring-green-500'
            }`}
            disabled={isTyping || isBanned}
          />
          <button
            type="submit"
            disabled={isTyping || !userInput.trim() || isBanned}
            className="px-4 py-2 bg-green-600 rounded font-mono text-xs text-white hover:bg-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            SEND
          </button>
        </div>
        <p className="text-xs text-gray-600 font-mono mt-2">
          {/* Powered by Gemini AI */}
          {warnings > 0 && !isMasterAbuse && (() => {
            const remaining = 10 - warnings;
            return `• ${remaining} strike${remaining !== 1 ? 's' : ''} remaining`;
          })()}
          {masterWarnings > 0 && isMasterAbuse && (() => {
            const remaining = 10 - masterWarnings;
            return `• ⚡ ${remaining} strike${remaining !== 1 ? 's' : ''} remaining (Master Protection Active)`;
          })()}
        </p>
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

        @keyframes warning-shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px) rotate(-1deg); }
          75% { transform: translateX(5px) rotate(1deg); }
        }

        .warning-shake {
          animation: warning-shake 0.5s ease-in-out;
        }

        @keyframes master-abuse-shake {
          0%, 100% { transform: translateX(0) scale(1); }
          10% { transform: translateX(-10px) rotate(-2deg) scale(1.02); }
          20% { transform: translateX(10px) rotate(2deg) scale(1.02); }
          30% { transform: translateX(-10px) rotate(-2deg) scale(1.02); }
          40% { transform: translateX(10px) rotate(2deg) scale(1.02); }
          50% { transform: translateX(0) scale(1); }
        }

        .master-abuse-shake {
          animation: master-abuse-shake 0.8s ease-in-out;
          border-color: rgba(168, 85, 247, 0.8) !important;
          box-shadow: 0 0 20px rgba(168, 85, 247, 0.4) !important;
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