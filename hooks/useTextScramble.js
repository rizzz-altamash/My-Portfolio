// hooks/useTextScramble.js
import { useState, useEffect, useRef } from 'react';
import { useTransition } from '../app/layout';

export const useTextScramble = (text, duration = 2000) => {
  const [scrambledText, setScrambledText] = useState(text);
  const [displayText, setDisplayText] = useState(text);
  const chars = '!<>-_\\/[]{}—=+*^?#_____';
  const intervalRef = useRef(null);
  const { isTransitioning } = useTransition();

  // Scramble In Effect 
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
            if (index < iteration) return originalText[index];
            if (char === ' ') return ' ';
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iteration >= textLength) {
        clearInterval(intervalRef.current);
      }
      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(intervalRef.current);
  }, [text, isTransitioning]);

  // Scramble Out Effect 
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