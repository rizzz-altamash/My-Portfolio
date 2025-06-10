// app/layout.js
'use client';
import React, { useState, useEffect, createContext, useContext } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Terminal, Cpu, Code, Database, Mail, Shield, Crown } from 'lucide-react';
import { ChatbotProvider } from '@/contexts/ChatbotContext';
import './globals.css';

// Create transition context
const TransitionContext = createContext({
  isTransitioning: false,
  setIsTransitioning: () => {}
});

export const useTransition = () => useContext(TransitionContext);

// Navigation Component
const Navigation = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { isTransitioning, setIsTransitioning } = useTransition();
  
  const navItems = [
    { id: '/', label: 'Home', icon: <Terminal className="w-4 h-4" /> },
    { id: '/about', label: 'About', icon: <Cpu className="w-4 h-4" /> },
    { id: '/projects', label: 'Projects', icon: <Code className="w-4 h-4" /> },
    { id: '/skills', label: 'Skills', icon: <Database className="w-4 h-4" /> },
    { id: '/contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> }
  ];

  const handleNavigation = (path) => {
    if (path === pathname || isTransitioning) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      router.push(path);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 70); // [org-500]
    }, 150); // Page Transition timing [org-800]
  };
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/60 backdrop-blur-xl z-40 border-b border-green-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center border border-green-500/50 group hover:bg-green-500/30 transition-all duration-300">
              <Crown className="w-6 h-6 text-green-400 group-hover:text-green-300" />
            </div>
            <span className="text-xl font-bold font-mono text-green-400">
              <span className="glitch" data-text="NEXUS.H4CK3R">Rizwi</span>
            </span>
          </div>
          <div className="flex gap-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`px-4 py-2 text-sm font-mono transition-all duration-300 flex items-center gap-2 rounded-lg ${
                  pathname === item.id 
                    ? 'text-green-400 bg-green-500/10 border border-green-500/30' 
                    : 'text-gray-400 hover:text-green-400 hover:bg-green-500/5'
                }`}
              >
                {item.icon}
                <span className="hidden md:inline">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default function RootLayout({ children }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [progress, setProgress] = useState(0);
  
  const loadingPhrases = [
    'Initializing system...',
    'Accessing mainframe...',
    'Bypassing security protocols...',
    'Loading portfolio data...',
    'Decrypting files...',
    'Establishing secure connection...',
    'System ready'
  ];
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    if (isTransitioning) {
      document.body.classList.add('page-transitioning');
    } else {
      document.body.classList.remove('page-transitioning');
    }
  }, [isTransitioning]);

  useEffect(() => {
    // Check if it's the initial load
    const hasLoaded = sessionStorage.getItem('portfolioLoaded');
    if (hasLoaded) {
      setIsLoading(false);
      return;
    }

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 5;
      });
    }, 50);

    return () => {
      clearInterval(cursorInterval);
      clearInterval(progressInterval);
    };
  }, []);

  useEffect(() => {
    if (!isLoading) return;
    
    if (currentPhrase >= loadingPhrases.length) {
      setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('portfolioLoaded', 'true');
      }, 500);
      return;
    }

    const phrase = loadingPhrases[currentPhrase];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex <= phrase.length) {
        setLoadingText(phrase.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentPhrase(prev => prev + 1);
        }, 500);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [currentPhrase, isLoading]);

  if (isLoading) {
    return (
      <html lang="en">
        <body>
          <div className="fixed inset-0 bg-gradient-to-br from-black via-green-950/90 to-black z-50 flex items-center justify-center">
            <div className="text-green-400 font-mono">
              <div className="mb-8 text-6xl animate-pulse relative">
                <Terminal className="w-24 h-24 mx-auto" />
                {/* <div className="absolute inset-0 bg-green-400/20 blur-2xl"></div> */}
              </div>
              <div className="text-xl">
                {loadingText}
                <span className={`${showCursor ? 'opacity-100' : 'opacity-0'}`}>_</span>
              </div>
              <div className="mt-8 flex justify-center space-x-2">
                {[...Array(7)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 bg-green-500 rounded-full ${
                      i <= currentPhrase ? 'opacity-100' : 'opacity-30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white overflow-x-hidden">
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-green-950/20 to-black" />
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(0, 255, 65, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, rgba(0, 255, 65, 0.05) 0%, transparent 50%)`,
          }} />
          
          {/* Animated grid background */}
          <svg className="absolute inset-0 w-full h-full opacity-10">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#00ff41" strokeWidth="0.5" className="animate-pulse" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <TransitionContext.Provider value={{ isTransitioning, setIsTransitioning }}>
          <ChatbotProvider>
          <Navigation />
          
          <main className="relative z-10">
            {children}
          </main>

          </ChatbotProvider>
        </TransitionContext.Provider>
      </body>
    </html>
  );
}