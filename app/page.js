// app/page.js
'use client';
import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Terminal, Lock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useTransition } from './layout';
import ScrambledText from '@/components/ScrambledText';

const MyPhoto = () => {
  const { isTransitioning } = useTransition();
  
  return (
    <div className={`w-64 h-64 md:w-96 md:h-96 pointer-events-none ${isTransitioning ? 'opacity-0' : 'opacity-100'} transition-opacity duration-700`}>
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
  const [showElements, setShowElements] = useState(false);

  useEffect(() => {
    if (!isTransitioning) {
      setTimeout(() => setShowElements(true), 2500);
    }
  }, [isTransitioning]);

  useEffect(() => {
    if (isTransitioning) {
      setShowElements(false);
    }
  }, [isTransitioning]);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden pt-16 px-4 md:px-8 lg:px-12">
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

          <MyPhoto />

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

      {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-green-400/70 text-sm font-mono">SCROLL TO DECRYPT</div>
      </div> */}
    </div>
  );
}