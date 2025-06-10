// app/page.js
'use client';
import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Terminal, Lock, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useTransition } from './layout';
import ScrambledText from '@/components/ScrambledText';

// Text Scramble Hook
const useTextScramble = (text, duration = 2000) => {
  const [scrambledText, setScrambledText] = useState(text);
  const [displayText, setDisplayText] = useState(text);
  const chars = '!<>-_\\/[]{}—=+*^?#_____';
  const intervalRef = useRef(null);
  const { isTransitioning } = useTransition();

  // Handle scramble in effect
  useEffect(() => {
    if (isTransitioning) return;
    
    let iteration = 0;
    const originalText = text;
    const textLength = originalText.length;
    
    intervalRef.current = setInterval(() => {
      setScrambledText(
        originalText
          .split('')
          .map((char, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            if (char === ' ') return ' ';
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iteration >= textLength) {
        clearInterval(intervalRef.current);
      }
      iteration += 1/3;
    }, 30);

    return () => clearInterval(intervalRef.current);
  }, [text, isTransitioning]);

  // Handle scramble out effect
  useEffect(() => {
    if (!isTransitioning) {
      setDisplayText(scrambledText);
      return;
    }

    let iteration = 0;
    const currentText = scrambledText;
    const textLength = currentText.length;
    
    const scrambleOut = setInterval(() => {
      setDisplayText(
        currentText
          .split('')
          .map((char, index) => {
            if (index >= textLength - iteration) {
              return chars[Math.floor(Math.random() * chars.length)];
            }
            return char;
          })
          .join('')
      );

      if (iteration >= textLength) {
        clearInterval(scrambleOut);
      }
      iteration += 2;
    }, 20);

    return () => clearInterval(scrambleOut);
  }, [isTransitioning, scrambledText]);

  return displayText;
};

// Floating Orb Component
const FloatingOrb = ({ scrollY }) => {
  const { isTransitioning } = useTransition();
  
  return (
    <div 
      className={`w-64 h-64 md:w-96 md:h-96 pointer-events-none ${isTransitioning ? 'opacity-0' : 'opacity-100'} transition-opacity duration-700`}
      style={{
        transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`,
        right: '10%',
        top: '20%',
      }}
    >
      <div className="relative w-full h-full">
        <div className="absolute inset-0 bg-green-400 rounded-full blur-3xl opacity-20 animate-pulse" />
        
        <div className="absolute inset-4 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-full backdrop-blur-xl border border-white shadow-2xl shadow-green-400/20 overflow-hidden">
          {/* Profile Image Layer */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <Image
              src="/portfolio.jpg" // Replace with your image path
              alt="Profile"
              fill
              className="object-cover opacity-99"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function HomePage() {
  const { isTransitioning } = useTransition();
  // const titleText = useTextScramble("WELCOME TO MY PORTFOLIO", 2000);
  // const subtitleText = useTextScramble("Full Stack Developer | Ethical Hacker | System Architect", 2500);
  const [showElements, setShowElements] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    if (!isTransitioning) {
      setTimeout(() => setShowElements(true), 2500);
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isTransitioning]);

  useEffect(() => {
    if (isTransitioning) {
      setShowElements(false);
    }
  }, [isTransitioning]);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden pt-16 px-4 md:px-8 lg:px-12">
      {/* <FloatingOrb scrollY={scrollY} /> */}

      <div className="flex-1 flex items-center justify-center">
      <div className="relative z-10 max-w-7xl px-8 md:px-12 lg:px-16">
        <div className="mb-8">
          <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6">
            <span className="text-green-400 font-mono text-sm flex items-center gap-2">
              <Lock className="w-4 h-4" />
              SECURE CONNECTION ESTABLISHED
            </span>
          </div>
        </div>

        <ScrambledText text="" />
        
        <div className="flex flex-wrap items-center justify-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-mono">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-white">
                <ScrambledText text="WELCOME TO MY " />
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-500 via-amber-300 to-orange-300">
                <ScrambledText text="PORTFOLIO" />
              </span>
            </h1>
        
            <p className="text-xl md:text-2xl mb-12 text-gray-300 font-mono">
              <span className="text-green-400">&gt;</span> <ScrambledText text="Full Stack Developer | Ethical Hacker | System Architect" />
              <span className="animate-blink">_</span>
            </p>
          </div>

          <FloatingOrb scrollY={scrollY} />

        </div>

        {/* {showElements && ( */}
          <div className={`mt-7 lg:mt-1 mb-7 flex flex-col xl:flex-row gap-4 animate-fade-in ${isTransitioning ? 'opacity-0' : ''}`}>
            <Link 
              href="/projects" 
              className="px-8 py-4 bg-transparent border-2 border-green-400 text-green-400 font-mono rounded-lg hover:bg-green-400 hover:text-black transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-400/30 flex items-center justify-center gap-2 group"
            >
              <Terminal className="w-5 h-5 group-hover:scale-130 transition-transform" />
              ACCESS PROJECTS
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-green-400/20 border-2 border-green-400/50 text-green-400 font-mono rounded-lg hover:bg-green-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-400/20 flex items-center justify-center gap-2"
            >
              GET IN TOUCH
            </Link>
          </div>
        {/* )} */}
      </div>
      </div>
      
      <div className="pb-8 flex justify-center gap-4">
        {[Github, Linkedin, Twitter].map((Icon, i) => (
          <a 
            key={i} 
            href="#" 
            className="text-green-400/70 hover:text-green-400 transition-all duration-300 hover:scale-110 hover:rotate-12"
          >
            <Icon className="w-6 h-6" />
          </a>
        ))}
      </div>

      {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-green-400/70 text-sm font-mono">SCROLL TO DECRYPT</div>
      </div> */}
    </div>
  );
}