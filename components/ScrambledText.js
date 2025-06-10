// components/ScrambledText.js
'use client';
import React from 'react';
import { useTextScramble } from '../hooks/useTextScramble'; // move the hook to a separate file

const ScrambledText = ({ text, duration }) => {
  const scrambled = useTextScramble(text, duration);
  return <>{scrambled}</>;
};

export default ScrambledText;