// app/contact/page.js
'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Mail, Globe, Lock, Github, Linkedin, Twitter } from 'lucide-react';
import { useTransition } from '../layout';
import ScrambledText from '@/components/ScrambledText';

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

export default function ContactPage() {
  const { isTransitioning } = useTransition();
  const titleText = useTextScramble("CONTACT.SH", 1500);
  const emailText = useTextScramble("nexus@hackermail.com", 2000);

  return (
    <div className="min-h-screen pt-32 px-6 relative flex items-center">
      <div className="max-w-4xl mx-auto w-full relative z-10">
        <h2 className="text-5xl font-mono font-bold text-green-400 mb-4">
          <span className="text-gray-400">&gt;</span> {titleText}
        </h2>
        <p className="text-gray-300 font-mono mb-12">
          Establishing secure communication channel...
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-black/40 backdrop-blur-sm border border-green-500/20 rounded-lg p-6 animate-fade-in">
              <h3 className="text-xl text-green-400 mb-4 font-mono flex items-center gap-2">
                <Terminal className="w-5 h-5" />
                DIRECT ACCESS
              </h3>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-4 h-4 text-green-400" />
                  <span>{emailText}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Globe className="w-4 h-4 text-green-400" />
                  <span>{isTransitioning ? 'nexus.hacker.io'.split('').map(() => '█').join('') : 'nexus.hacker.io'}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Lock className="w-4 h-4 text-green-400" />
                  <span>{isTransitioning ? 'PGP: 4096R/NEXUS2024'.split('').map(c => c === ' ' || c === ':' || c === '/' ? c : '█').join('') : 'PGP: 4096R/NEXUS2024'}</span>
                </div>
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-green-500/20 rounded-lg p-6 animate-fade-in" style={{animationDelay: '100ms'}}>
              <h3 className="text-xl text-green-400 mb-4 font-mono">SOCIAL CHANNELS</h3>
              <div className="flex gap-4">
                {[
                  { icon: Github, label: "Github" },
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Twitter, label: "Twitter" }
                ].map(({ icon: Icon, label }) => (
                  <button
                    key={label}
                    className="p-3 bg-green-950/20 border border-green-500/30 rounded-lg hover:bg-green-950/30 hover:border-green-500/50 transition-all duration-300 group"
                  >
                    <Icon className="w-6 h-6 text-green-400 group-hover:scale-110 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-green-500/20 rounded-lg p-6 animate-fade-in" style={{animationDelay: '200ms'}}>
            <h3 className="text-xl text-green-400 mb-4 font-mono">SEND ENCRYPTED MESSAGE</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Identifier"
                className="w-full px-4 py-3 bg-green-950/20 border border-green-500/30 rounded-lg text-green-400 placeholder-gray-500 font-mono focus:border-green-500/50 focus:outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="Return Address"
                className="w-full px-4 py-3 bg-green-950/20 border border-green-500/30 rounded-lg text-green-400 placeholder-gray-500 font-mono focus:border-green-500/50 focus:outline-none transition-colors"
              />
              <textarea
                placeholder="Message Content"
                rows={4}
                className="w-full px-4 py-3 bg-green-950/20 border border-green-500/30 rounded-lg text-green-400 placeholder-gray-500 font-mono focus:border-green-500/50 focus:outline-none transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full py-3 bg-green-400 text-black font-mono font-semibold rounded-lg hover:bg-green-300 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-green-400/30 flex items-center justify-center gap-2"
              >
                <Lock className="w-4 h-4" />
                {isTransitioning ? 'TRANSMIT SECURE MESSAGE'.split('').map(c => c === ' ' ? ' ' : '█').join('') : 'TRANSMIT SECURE MESSAGE'}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-4 font-mono text-sm animate-fade-in" style={{animationDelay: '300ms'}}>
          <div className="text-green-400">
            Connection Status: <span className="text-green-300">SECURE</span>
          </div>
          <div className="text-gray-400">
            Encryption: AES-256 | Protocol: TLS 1.3 | <span className="animate-pulse text-green-400">●</span> ONLINE
          </div>
        </div>
      </div>
    </div>
  );
}