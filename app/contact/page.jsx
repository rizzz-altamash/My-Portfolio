// // app/contact/page.js
// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import { Terminal, Mail, Globe, Lock, Github, Linkedin, Twitter } from 'lucide-react';
// import { useTransition } from '../layout';
// import ScrambledText from '@/components/ScrambledText';

// const useTextScramble = (text, duration = 2000) => {
//   const [scrambledText, setScrambledText] = useState(text);
//   const [displayText, setDisplayText] = useState(text);
//   const chars = '!<>-_\\/[]{}—=+*^?#_____';
//   const intervalRef = useRef(null);
//   const { isTransitioning } = useTransition();

//   // Handle scramble in effect
//   useEffect(() => {
//     if (isTransitioning) return;
    
//     let iteration = 0;
//     const originalText = text;
//     const textLength = originalText.length;
    
//     intervalRef.current = setInterval(() => {
//       setScrambledText(
//         originalText
//           .split('')
//           .map((char, index) => {
//             if (index < iteration) {
//               return originalText[index];
//             }
//             if (char === ' ') return ' ';
//             return chars[Math.floor(Math.random() * chars.length)];
//           })
//           .join('')
//       );

//       if (iteration >= textLength) {
//         clearInterval(intervalRef.current);
//       }
//       iteration += 1/3;
//     }, 30);

//     return () => clearInterval(intervalRef.current);
//   }, [text, isTransitioning]);

//   // Handle scramble out effect
//   useEffect(() => {
//     if (!isTransitioning) {
//       setDisplayText(scrambledText);
//       return;
//     }

//     let iteration = 0;
//     const currentText = scrambledText;
//     const textLength = currentText.length;
    
//     const scrambleOut = setInterval(() => {
//       setDisplayText(
//         currentText
//           .split('')
//           .map((char, index) => {
//             if (index >= textLength - iteration) {
//               return chars[Math.floor(Math.random() * chars.length)];
//             }
//             return char;
//           })
//           .join('')
//       );

//       if (iteration >= textLength) {
//         clearInterval(scrambleOut);
//       }
//       iteration += 2;
//     }, 20);

//     return () => clearInterval(scrambleOut);
//   }, [isTransitioning, scrambledText]);

//   return displayText;
// };

// export default function ContactPage() {
//   const { isTransitioning } = useTransition();
//   const titleText = useTextScramble("CONTACT.SH", 1500);
//   const emailText = useTextScramble("nexus@hackermail.com", 2000);

//   return (
//     <div className="min-h-screen pt-32 px-6 relative flex items-center">
//       <div className="max-w-4xl mx-auto w-full relative z-10">
//         <h2 className="text-5xl font-mono font-bold text-green-400 mb-4">
//           <span className="text-gray-400">&gt;</span> {titleText}
//         </h2>
//         <p className="text-gray-300 font-mono mb-12">
//           Establishing secure communication channel...
//         </p>

//         <div className="grid md:grid-cols-2 gap-8">
//           <div className="space-y-6">
//             <div className="bg-black/40 backdrop-blur-sm border border-green-500/20 rounded-lg p-6 animate-fade-in">
//               <h3 className="text-xl text-green-400 mb-4 font-mono flex items-center gap-2">
//                 <Terminal className="w-5 h-5" />
//                 DIRECT ACCESS
//               </h3>
//               <div className="space-y-3 font-mono text-sm">
//                 <div className="flex items-center gap-3 text-gray-300">
//                   <Mail className="w-4 h-4 text-green-400" />
//                   <span>{emailText}</span>
//                 </div>
//                 <div className="flex items-center gap-3 text-gray-300">
//                   <Globe className="w-4 h-4 text-green-400" />
//                   <span>{isTransitioning ? 'nexus.hacker.io'.split('').map(() => '█').join('') : 'nexus.hacker.io'}</span>
//                 </div>
//                 <div className="flex items-center gap-3 text-gray-300">
//                   <Lock className="w-4 h-4 text-green-400" />
//                   <span>{isTransitioning ? 'PGP: 4096R/NEXUS2024'.split('').map(c => c === ' ' || c === ':' || c === '/' ? c : '█').join('') : 'PGP: 4096R/NEXUS2024'}</span>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-black/40 backdrop-blur-sm border border-green-500/20 rounded-lg p-6 animate-fade-in" style={{animationDelay: '100ms'}}>
//               <h3 className="text-xl text-green-400 mb-4 font-mono">SOCIAL CHANNELS</h3>
//               <div className="flex gap-4">
//                 {[
//                   { icon: Github, label: "Github" },
//                   { icon: Linkedin, label: "LinkedIn" },
//                   { icon: Twitter, label: "Twitter" }
//                 ].map(({ icon: Icon, label }) => (
//                   <button
//                     key={label}
//                     className="p-3 bg-green-950/20 border border-green-500/30 rounded-lg hover:bg-green-950/30 hover:border-green-500/50 transition-all duration-300 group"
//                   >
//                     <Icon className="w-6 h-6 text-green-400 group-hover:scale-110 transition-transform" />
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="bg-black/40 backdrop-blur-sm border border-green-500/20 rounded-lg p-6 animate-fade-in" style={{animationDelay: '200ms'}}>
//             <h3 className="text-xl text-green-400 mb-4 font-mono">SEND ENCRYPTED MESSAGE</h3>
//             <form className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Identifier"
//                 className="w-full px-4 py-3 bg-green-950/20 border border-green-500/30 rounded-lg text-green-400 placeholder-gray-500 font-mono focus:border-green-500/50 focus:outline-none transition-colors"
//               />
//               <input
//                 type="email"
//                 placeholder="Return Address"
//                 className="w-full px-4 py-3 bg-green-950/20 border border-green-500/30 rounded-lg text-green-400 placeholder-gray-500 font-mono focus:border-green-500/50 focus:outline-none transition-colors"
//               />
//               <textarea
//                 placeholder="Message Content"
//                 rows={4}
//                 className="w-full px-4 py-3 bg-green-950/20 border border-green-500/30 rounded-lg text-green-400 placeholder-gray-500 font-mono focus:border-green-500/50 focus:outline-none transition-colors resize-none"
//               />
//               <button
//                 type="submit"
//                 className="w-full py-3 bg-green-400 text-black font-mono font-semibold rounded-lg hover:bg-green-300 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-green-400/30 flex items-center justify-center gap-2"
//               >
//                 <Lock className="w-4 h-4" />
//                 {isTransitioning ? 'TRANSMIT SECURE MESSAGE'.split('').map(c => c === ' ' ? ' ' : '█').join('') : 'TRANSMIT SECURE MESSAGE'}
//               </button>
//             </form>
//           </div>
//         </div>

//         <div className="mt-8 bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-4 font-mono text-sm animate-fade-in" style={{animationDelay: '300ms'}}>
//           <div className="text-green-400">
//             Connection Status: <span className="text-green-300">SECURE</span>
//           </div>
//           <div className="text-gray-400">
//             Encryption: AES-256 | Protocol: TLS 1.3 | <span className="animate-pulse text-green-400">●</span> ONLINE
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }























// // app/contact/page.js
// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import { Send, Shield, Satellite, Radio, Wifi, Activity, Zap, Globe, Github, Linkedin, Twitter, Mail, MapPin, Clock, Lock, ChevronRight } from 'lucide-react';
// import { useTransition } from '../layout';
// import ScrambledText from '@/components/ScrambledText';

// export default function ContactPage() {
//   const { isTransitioning } = useTransition();
//   const [activeSignal, setActiveSignal] = useState(null);
//   const [scanProgress, setScanProgress] = useState(0);
//   const [isScanning, setIsScanning] = useState(true);
//   const [detectedSignals, setDetectedSignals] = useState([]);
//   const [selectedChannel, setSelectedChannel] = useState(null);
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [isTransmitting, setIsTransmitting] = useState(false);
//   const [glitchText, setGlitchText] = useState('');
//   const [dataStream, setDataStream] = useState([]);
//   const radarRef = useRef(null);
//   const audioContextRef = useRef(null);

//   // Contact channels with positions for radar
//   const channels = [
//     {
//       id: 'email',
//       type: 'Direct Link',
//       frequency: '2.4GHz',
//       signal: 'STRONG',
//       data: 'altamash@rizwi.dev',
//       icon: Mail,
//       position: { angle: 45, distance: 60 },
//       color: '#00ff41'
//     },
//     {
//       id: 'github',
//       type: 'Code Repository',
//       frequency: '5.0GHz',
//       signal: 'ACTIVE',
//       data: 'github.com/rizwi',
//       icon: Github,
//       position: { angle: 120, distance: 75 },
//       color: '#41ff00'
//     },
//     {
//       id: 'linkedin',
//       type: 'Professional Network',
//       frequency: '2.8GHz',
//       signal: 'STABLE',
//       data: 'linkedin.com/in/rizwi',
//       icon: Linkedin,
//       position: { angle: 200, distance: 65 },
//       color: '#00ff88'
//     },
//     {
//       id: 'twitter',
//       type: 'Social Stream',
//       frequency: '3.2GHz',
//       signal: 'LIVE',
//       data: '@rizwi_dev',
//       icon: Twitter,
//       position: { angle: 280, distance: 70 },
//       color: '#88ff00'
//     },
//     {
//       id: 'location',
//       type: 'Geo Coordinates',
//       frequency: 'GPS',
//       signal: 'LOCKED',
//       data: 'Ranchi, JH, India • GMT+5:30',
//       icon: MapPin,
//       position: { angle: 340, distance: 55 },
//       color: '#00ffaa'
//     }
//   ];

//   // Initialize audio context for radar sounds
//   useEffect(() => {
//     if (typeof window !== 'undefined' && window.AudioContext) {
//       audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
//     }
//   }, []);

//   // Radar scanning effect
//   useEffect(() => {
//     if (isScanning) {
//       const interval = setInterval(() => {
//         setScanProgress(prev => {
//           const next = (prev + 2) % 360;
          
//           // Check for signal detection
//           channels.forEach(channel => {
//             const diff = Math.abs(next - channel.position.angle);
//             if (diff < 5 || diff > 355) {
//               if (!detectedSignals.includes(channel.id)) {
//                 setDetectedSignals(prev => [...prev, channel.id]);
//                 playRadarPing();
//               }
//             }
//           });
          
//           // Stop scanning after one full rotation
//           if (next === 0 && detectedSignals.length === channels.length) {
//             setIsScanning(false);
//           }
          
//           return next;
//         });
//       }, 30);

//       return () => clearInterval(interval);
//     }
//   }, [isScanning, detectedSignals]);

//   // Data stream animation
//   useEffect(() => {
//     const streamChars = '01⟨⟩∅∆∇∂∫∑∏⊕⊗⊙√∞≈≠≤≥∈∉⊆⊇∪∩';
//     const interval = setInterval(() => {
//       const newLine = Array.from({ length: 50 }, () => 
//         streamChars[Math.floor(Math.random() * streamChars.length)]
//       ).join('');
      
//       setDataStream(prev => {
//         const updated = [...prev, newLine];
//         return updated.slice(-10); // Keep last 10 lines
//       });
//     }, 150);

//     return () => clearInterval(interval);
//   }, []);

//   // Glitch effect for selected channel
//   useEffect(() => {
//     if (selectedChannel) {
//       const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?█▓▒░';
//       let iterations = 0;
      
//       const interval = setInterval(() => {
//         const channel = channels.find(c => c.id === selectedChannel);
//         if (!channel) return;
        
//         setGlitchText(
//           channel.data
//             .split('')
//             .map((char, index) => {
//               if (index < iterations) return char;
//               return glitchChars[Math.floor(Math.random() * glitchChars.length)];
//             })
//             .join('')
//         );
        
//         iterations += 1;
//         if (iterations > channel.data.length) {
//           clearInterval(interval);
//           setGlitchText(channel.data);
//         }
//       }, 50);
      
//       return () => clearInterval(interval);
//     }
//   }, [selectedChannel]);

//   const playRadarPing = () => {
//     if (audioContextRef.current) {
//       const oscillator = audioContextRef.current.createOscillator();
//       const gainNode = audioContextRef.current.createGain();
      
//       oscillator.connect(gainNode);
//       gainNode.connect(audioContextRef.current.destination);
      
//       oscillator.frequency.value = 1000;
//       gainNode.gain.setValueAtTime(0.1, audioContextRef.current.currentTime);
//       gainNode.gain.exponentialRampToValueAtTime(0.01, audioContextRef.current.currentTime + 0.1);
      
//       oscillator.start(audioContextRef.current.currentTime);
//       oscillator.stop(audioContextRef.current.currentTime + 0.1);
//     }
//   };

//   const handleChannelSelect = (channelId) => {
//     setSelectedChannel(channelId);
//     setActiveSignal(channelId);
//     playRadarPing();
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.name || !formData.email || !formData.message) return;

//     setIsTransmitting(true);
    
//     // Simulate transmission
//     setTimeout(() => {
//       setIsTransmitting(false);
//       setFormData({ name: '', email: '', message: '' });
//       // Show success state
//     }, 3000);
//   };

//   return (
//     <div className="min-h-screen pt-24 sm:pt-32 px-4 sm:px-6 relative overflow-hidden">
//       {/* Animated background grid */}
//       <div className="fixed inset-0 z-0">
//         <div className="absolute inset-0 bg-gradient-to-br from-black via-green-950/10 to-black" />
//         <svg className="absolute inset-0 w-full h-full opacity-5">
//           <defs>
//             <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//               <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00ff41" strokeWidth="0.5" className="animate-pulse" />
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#grid)" />
//         </svg>
//       </div>

//       {/* Data streams in background */}
//       <div className="fixed inset-0 z-0 opacity-[0.03] font-mono text-green-400 text-xs overflow-hidden">
//         {dataStream.map((line, i) => (
//           <div 
//             key={i} 
//             className="absolute whitespace-nowrap"
//             style={{ 
//               top: `${i * 10}%`,
//               animation: `stream ${20 + i * 2}s linear infinite`,
//               animationDelay: `${i * 0.5}s`
//             }}
//           >
//             {line}
//           </div>
//         ))}
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header */}
//         <div className="mb-8 text-center">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-green-400 mb-4">
//             <ScrambledText text="SIGNAL DETECTION" />
//           </h2>
//           <p className="text-gray-400 font-mono text-sm">
//             <span className="text-green-400">◈</span> SCANNING COMMUNICATION CHANNELS <span className="text-green-400">◈</span>
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-8">
//           {/* Radar Interface */}
//           <div className="relative">
//             <div className="relative w-full max-w-[500px] mx-auto aspect-square" ref={radarRef}>
//               {/* Radar circles */}
//               <svg className="absolute inset-0 w-full h-full">
//                 <circle cx="50%" cy="50%" r="20%" fill="none" stroke="#00ff41" strokeWidth="1" opacity="0.2" />
//                 <circle cx="50%" cy="50%" r="40%" fill="none" stroke="#00ff41" strokeWidth="1" opacity="0.15" />
//                 <circle cx="50%" cy="50%" r="60%" fill="none" stroke="#00ff41" strokeWidth="1" opacity="0.1" />
//                 <circle cx="50%" cy="50%" r="80%" fill="none" stroke="#00ff41" strokeWidth="1" opacity="0.05" />
                
//                 {/* Cross lines */}
//                 <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#00ff41" strokeWidth="1" opacity="0.1" />
//                 <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#00ff41" strokeWidth="1" opacity="0.1" />
                
//                 {/* Scanning line */}
//                 {isScanning && (
//                   <line
//                     x1="50%"
//                     y1="50%"
//                     x2={`${50 + 40 * Math.cos((scanProgress - 90) * Math.PI / 180)}%`}
//                     y2={`${50 + 40 * Math.sin((scanProgress - 90) * Math.PI / 180)}%`}
//                     stroke="#00ff41"
//                     strokeWidth="2"
//                     opacity="0.6"
//                   >
//                     <animate
//                       attributeName="opacity"
//                       values="0.6;0.3;0.6"
//                       dur="2s"
//                       repeatCount="indefinite"
//                     />
//                   </line>
//                 )}
                
//                 {/* Scan trail effect */}
//                 {isScanning && Array.from({ length: 30 }, (_, i) => (
//                   <line
//                     key={i}
//                     x1="50%"
//                     y1="50%"
//                     x2={`${50 + 40 * Math.cos(((scanProgress - i * 3) - 90) * Math.PI / 180)}%`}
//                     y2={`${50 + 40 * Math.sin(((scanProgress - i * 3) - 90) * Math.PI / 180)}%`}
//                     stroke="#00ff41"
//                     strokeWidth="1"
//                     opacity={0.3 - (i * 0.01)}
//                   />
//                 ))}
//               </svg>
              
//               {/* Signal points */}
//               {channels.map(channel => {
//                 const x = 50 + (channel.position.distance * 0.4) * Math.cos((channel.position.angle - 90) * Math.PI / 180);
//                 const y = 50 + (channel.position.distance * 0.4) * Math.sin((channel.position.angle - 90) * Math.PI / 180);
//                 const isDetected = detectedSignals.includes(channel.id);
//                 const isActive = activeSignal === channel.id;
                
//                 return (
//                   <div
//                     key={channel.id}
//                     className={`absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
//                       isDetected ? 'opacity-100' : 'opacity-0'
//                     }`}
//                     style={{ left: `${x}%`, top: `${y}%` }}
//                     onClick={() => handleChannelSelect(channel.id)}
//                   >
//                     <div className={`relative w-full h-full ${isActive ? 'scale-125' : 'hover:scale-110'}`}>
//                       {/* Pulse effect */}
//                       <div className={`absolute inset-0 rounded-full ${isActive ? 'animate-ping' : ''}`} 
//                         style={{ backgroundColor: channel.color, opacity: 0.3 }} 
//                       />
                      
//                       {/* Icon container */}
//                       <div 
//                         className="relative w-full h-full rounded-full border-2 flex items-center justify-center transition-all"
//                         style={{ 
//                           borderColor: channel.color,
//                           backgroundColor: isActive ? `${channel.color}20` : 'rgba(0,0,0,0.8)',
//                           boxShadow: isActive ? `0 0 20px ${channel.color}` : 'none'
//                         }}
//                       >
//                         <channel.icon 
//                           className="w-5 h-5" 
//                           style={{ color: channel.color }}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
              
//               {/* Center point */}
//               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-green-400 rounded-full animate-pulse" />
//             </div>
            
//             {/* Status indicators */}
//             <div className="mt-6 flex justify-center gap-4 text-xs font-mono">
//               <div className="flex items-center gap-2">
//                 <Satellite className="w-4 h-4 text-green-400 animate-pulse" />
//                 <span className="text-gray-400">SCANNING: {isScanning ? 'ACTIVE' : 'COMPLETE'}</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Radio className="w-4 h-4 text-green-400" />
//                 <span className="text-gray-400">SIGNALS: {detectedSignals.length}/{channels.length}</span>
//               </div>
//             </div>
//           </div>

//           {/* Information Panel */}
//           <div className="space-y-6">
//             {/* Selected Channel Info */}
//             {selectedChannel && (
//               <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-6 animate-fade-in">
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="text-green-400 font-mono text-lg flex items-center gap-2">
//                     <Activity className="w-5 h-5 animate-pulse" />
//                     CHANNEL ESTABLISHED
//                   </h3>
//                   <span className="text-xs font-mono text-green-400 px-2 py-1 bg-green-500/10 rounded">
//                     {channels.find(c => c.id === selectedChannel)?.frequency}
//                   </span>
//                 </div>
                
//                 <div className="space-y-3">
//                   <div className="font-mono text-sm">
//                     <span className="text-gray-400">TYPE: </span>
//                     <span className="text-green-400">{channels.find(c => c.id === selectedChannel)?.type}</span>
//                   </div>
//                   <div className="font-mono text-sm">
//                     <span className="text-gray-400">SIGNAL: </span>
//                     <span className="text-green-400">{channels.find(c => c.id === selectedChannel)?.signal}</span>
//                   </div>
//                   <div className="font-mono text-sm">
//                     <span className="text-gray-400">DATA: </span>
//                     <span className="text-green-400 glitch" data-text={glitchText}>{glitchText}</span>
//                   </div>
//                 </div>
                
//                 <div className="mt-4 pt-4 border-t border-green-500/20">
//                   <a 
//                     href={selectedChannel === 'email' ? `mailto:${channels.find(c => c.id === 'email')?.data}` : '#'}
//                     className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-mono text-sm group"
//                   >
//                     ESTABLISH CONNECTION 
//                     <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                   </a>
//                 </div>
//               </div>
//             )}

//             {/* Message Transmitter */}
//             <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-6">
//               <h3 className="text-green-400 font-mono text-lg mb-4 flex items-center gap-2">
//                 <Zap className="w-5 h-5" />
//                 TRANSMIT MESSAGE
//               </h3>
              
//               <form onSubmit={handleFormSubmit} className="space-y-4">
//                 <div className="relative">
//                   <input
//                     type="text"
//                     placeholder="CALLSIGN"
//                     value={formData.name}
//                     onChange={(e) => setFormData({...formData, name: e.target.value})}
//                     className="w-full px-4 py-3 bg-black/40 border border-green-500/30 rounded text-green-400 placeholder-gray-500 font-mono text-sm focus:border-green-500/50 focus:outline-none transition-colors"
//                     disabled={isTransmitting}
//                   />
//                   <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//                 </div>
                
//                 <div className="relative">
//                   <input
//                     type="email"
//                     placeholder="RETURN FREQUENCY"
//                     value={formData.email}
//                     onChange={(e) => setFormData({...formData, email: e.target.value})}
//                     className="w-full px-4 py-3 bg-black/40 border border-green-500/30 rounded text-green-400 placeholder-gray-500 font-mono text-sm focus:border-green-500/50 focus:outline-none transition-colors"
//                     disabled={isTransmitting}
//                   />
//                   <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//                 </div>
                
//                 <div className="relative">
//                   <textarea
//                     placeholder="MESSAGE PAYLOAD..."
//                     rows={4}
//                     value={formData.message}
//                     onChange={(e) => setFormData({...formData, message: e.target.value})}
//                     className="w-full px-4 py-3 bg-black/40 border border-green-500/30 rounded text-green-400 placeholder-gray-500 font-mono text-sm focus:border-green-500/50 focus:outline-none transition-colors resize-none"
//                     disabled={isTransmitting}
//                   />
//                   <div className="absolute right-3 top-3 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//                 </div>
                
//                 <button
//                   type="submit"
//                   disabled={isTransmitting || !formData.name || !formData.email || !formData.message}
//                   className={`w-full py-3 font-mono font-semibold rounded transition-all duration-300 flex items-center justify-center gap-2 ${
//                     isTransmitting 
//                       ? 'bg-green-950/30 border border-green-500/30 text-gray-400 cursor-not-allowed' 
//                       : 'bg-green-400 text-black hover:bg-green-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-green-400/30'
//                   }`}
//                 >
//                   {isTransmitting ? (
//                     <>
//                       <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
//                       TRANSMITTING...
//                     </>
//                   ) : (
//                     <>
//                       <Send className="w-4 h-4" />
//                       INITIATE TRANSMISSION
//                     </>
//                   )}
//                 </button>
//               </form>
//             </div>

//             {/* Encryption Status */}
//             <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-4">
//               <div className="flex items-center justify-between font-mono text-xs">
//                 <div className="flex items-center gap-2 text-gray-400">
//                   <Shield className="w-4 h-4 text-green-400" />
//                   <span>ENCRYPTION: AES-256</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-gray-400">
//                   <Lock className="w-4 h-4 text-green-400" />
//                   <span>TLS 1.3</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Wifi className="w-4 h-4 text-green-400 animate-pulse" />
//                   <span className="text-green-400">SECURE</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes stream {
//           from {
//             transform: translateX(-100%);
//           }
//           to {
//             transform: translateX(200%);
//           }
//         }

//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-in {
//           animation: fade-in 0.5s ease-out;
//         }

//         .glitch {
//           position: relative;
//           display: inline-block;
//         }

//         .glitch::before,
//         .glitch::after {
//           content: attr(data-text);
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//         }

//         .glitch::before {
//           animation: glitch-1 0.3s infinite;
//           color: #00ff41;
//           z-index: -1;
//         }

//         .glitch::after {
//           animation: glitch-2 0.3s infinite;
//           color: #00ff88;
//           z-index: -2;
//         }

//         @keyframes glitch-1 {
//           0% {
//             clip: rect(44px, 450px, 56px, 0);
//             transform: translate(0);
//           }
//           20% {
//             clip: rect(16px, 450px, 88px, 0);
//             transform: translate(-2px, -2px);
//           }
//           40% {
//             clip: rect(63px, 450px, 12px, 0);
//             transform: translate(2px, 2px);
//           }
//           60% {
//             clip: rect(25px, 450px, 78px, 0);
//             transform: translate(-1px, 1px);
//           }
//           80% {
//             clip: rect(91px, 450px, 34px, 0);
//             transform: translate(1px, -1px);
//           }
//           100% {
//             clip: rect(44px, 450px, 56px, 0);
//             transform: translate(0);
//           }
//         }

//         @keyframes glitch-2 {
//           0% {
//             clip: rect(65px, 450px, 119px, 0);
//             transform: translate(0);
//           }
//           20% {
//             clip: rect(34px, 450px, 89px, 0);
//             transform: translate(2px, 2px);
//           }
//           40% {
//             clip: rect(78px, 450px, 23px, 0);
//             transform: translate(-2px, -2px);
//           }
//           60% {
//             clip: rect(12px, 450px, 91px, 0);
//             transform: translate(1px, -1px);
//           }
//           80% {
//             clip: rect(56px, 450px, 45px, 0);
//             transform: translate(-1px, 1px);
//           }
//           100% {
//             clip: rect(65px, 450px, 119px, 0);
//             transform: translate(0);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }










// BEST -----------------------------------------------------------------------------------------------------------------------
// app/contact/page.js
// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import { Send, Shield, Satellite, Radio, Wifi, Activity, Zap, Globe, Github, Linkedin, Twitter, Mail, MapPin, Clock, Lock, ChevronRight, Instagram, Facebook, Volume2, VolumeX, Loader } from 'lucide-react';
// import { useTransition } from '../layout';
// import ScrambledText from '@/components/ScrambledText';

// export default function ContactPage() {
//   const { isTransitioning } = useTransition();
//   const [activeSignal, setActiveSignal] = useState(null);
//   const [scanProgress, setScanProgress] = useState(0);
//   const [isScanning, setIsScanning] = useState(true);
//   const [detectedSignals, setDetectedSignals] = useState([]);
//   const [selectedChannel, setSelectedChannel] = useState(null);
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [isTransmitting, setIsTransmitting] = useState(false);
//   const [transmissionProgress, setTransmissionProgress] = useState(0);
//   const [glitchText, setGlitchText] = useState('');
//   const [dataStream, setDataStream] = useState([]);
//   const [soundEnabled, setSoundEnabled] = useState(true);
//   const [signalStrength, setSignalStrength] = useState({});
//   const [interference, setInterference] = useState(0);
//   const [connectionQuality, setConnectionQuality] = useState(100);
//   const [hoveredSignal, setHoveredSignal] = useState(null);
//   const radarRef = useRef(null);
//   const audioContextRef = useRef(null);

//   // Social channels with enhanced data
//   const channels = [
//     {
//       id: 'linkedin',
//       type: 'Professional Network',
//       frequency: '2.4GHz',
//       bandwidth: 'HIGH',
//       signal: 'STABLE',
//       strength: 95,
//       data: 'linkedin.com/in/rizwi',
//       icon: Linkedin,
//       position: { angle: 72, distance: 70 },
//       color: '#00ff41',
//       glowColor: '#00ff88',
//       description: 'Professional connections and career updates'
//     },
//     {
//       id: 'github',
//       type: 'Code Repository',
//       frequency: '5.0GHz',
//       bandwidth: 'ULTRA',
//       signal: 'ACTIVE',
//       strength: 98,
//       data: 'github.com/rizwi',
//       icon: Github,
//       position: { angle: 144, distance: 75 },
//       color: '#00ff41',
//       glowColor: '#00ff88',
//       description: 'Open source projects and code contributions'
//     },
//     {
//       id: 'twitter',
//       type: 'Micro Blog',
//       frequency: '3.6GHz',
//       bandwidth: 'MEDIUM',
//       signal: 'LIVE',
//       strength: 88,
//       data: 'twitter.com/rizwi_dev',
//       icon: Twitter,
//       position: { angle: 216, distance: 65 },
//       color: '#00ff41',
//       glowColor: '#00ff88',
//       description: 'Tech thoughts and real-time updates'
//     },
//     {
//       id: 'instagram',
//       type: 'Visual Stream',
//       frequency: '2.8GHz',
//       bandwidth: 'HIGH',
//       signal: 'STREAMING',
//       strength: 92,
//       data: 'instagram.com/rizwi.dev',
//       icon: Instagram,
//       position: { angle: 288, distance: 68 },
//       color: '#00ff41',
//       glowColor: '#00ff88',
//       description: 'Visual journey and creative moments'
//     },
//     {
//       id: 'facebook',
//       type: 'Social Hub',
//       frequency: '3.2GHz',
//       bandwidth: 'STANDARD',
//       signal: 'CONNECTED',
//       strength: 85,
//       data: 'facebook.com/rizwi.developer',
//       icon: Facebook,
//       position: { angle: 360, distance: 72 },
//       color: '#00ff41',
//       glowColor: '#00ff88',
//       description: 'Community engagement and updates'
//     }
//   ];

//   // Initialize audio context
//   useEffect(() => {
//     if (typeof window !== 'undefined' && window.AudioContext) {
//       audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
//     }
//   }, []);

//   // Enhanced radar scanning with interference
//   useEffect(() => {
//     if (isScanning) {
//       const interval = setInterval(() => {
//         setScanProgress(prev => {
//           const next = (prev + 1.5) % 360;
          
//           // Random interference
//           if (Math.random() > 0.98) {
//             setInterference(Math.random() * 30 + 70);
//             setTimeout(() => setInterference(0), 300);
//           }
          
//           // Check for signal detection with proximity effect
//           channels.forEach(channel => {
//             const diff = Math.abs(next - channel.position.angle);
//             const proximity = Math.min(diff, 360 - diff);
            
//             // Update signal strength based on proximity
//             if (proximity < 30) {
//               const strength = channel.strength * (1 - proximity / 30);
//               setSignalStrength(prev => ({ ...prev, [channel.id]: strength }));
//             }
            
//             if (proximity < 3) {
//               if (!detectedSignals.includes(channel.id)) {
//                 setDetectedSignals(prev => [...prev, channel.id]);
//                 if (soundEnabled) playRadarPing(channel.position.distance);
                
//                 // Add detection animation
//                 const el = document.getElementById(`signal-${channel.id}`);
//                 if (el) {
//                   el.classList.add('signal-detected');
//                   setTimeout(() => el.classList.remove('signal-detected'), 1000);
//                 }
//               }
//             }
//           });
          
//           // Stop scanning after two full rotations
//           if (next === 0 && detectedSignals.length === channels.length) {
//             setTimeout(() => setIsScanning(false), 500);
//           }
          
//           return next;
//         });
//       }, 25);

//       return () => clearInterval(interval);
//     }
//   }, [isScanning, detectedSignals, soundEnabled]);

//   // Enhanced data stream with patterns
//   useEffect(() => {
//     const patterns = [
//       '◊◊◊◊◊◊◊◊◊◊',
//       '▓▒░▒▓▒░▒▓▒',
//       '⟨⟨⟨⟨⟨⟨⟨⟨⟨⟨',
//       '∆∇∆∇∆∇∆∇∆∇',
//       '○●○●○●○●○●',
//       '⊕⊗⊕⊗⊕⊗⊕⊗⊕⊗',
//       '▪▫▪▫▪▫▪▫▪▫',
//       '█▄▀█▄▀█▄▀█'
//     ];
    
//     const interval = setInterval(() => {
//       const usePattern = Math.random() > 0.7;
//       const newLine = usePattern 
//         ? patterns[Math.floor(Math.random() * patterns.length)].repeat(5)
//         : Array.from({ length: 50 }, () => {
//             const chars = '01⟨⟩∅∆∇∂∫∑∏⊕⊗⊙√∞≈≠≤≥∈∉⊆⊇∪∩░▒▓█';
//             return chars[Math.floor(Math.random() * chars.length)];
//           }).join('');
      
//       setDataStream(prev => {
//         const updated = [...prev, newLine];
//         return updated.slice(-15);
//       });
//     }, 150);

//     return () => clearInterval(interval);
//   }, []);

//   // Enhanced glitch effect
//   useEffect(() => {
//     if (selectedChannel) {
//       const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?█▓▒░╚═╩╦╠╬╣╗╝┤┐└┴┬├─┼';
//       let iterations = 0;
      
//       const channel = channels.find(c => c.id === selectedChannel);
//       if (!channel) return;
      
//       const glitchInterval = setInterval(() => {
//         setGlitchText(
//           channel.data
//             .split('')
//             .map((char, index) => {
//               if (index < iterations) return char;
//               if (Math.random() > 0.8 && iterations > index - 3) {
//                 return channel.data[index]; // Occasional correct character
//               }
//               return glitchChars[Math.floor(Math.random() * glitchChars.length)];
//             })
//             .join('')
//         );
        
//         iterations += 0.5;
//         if (iterations > channel.data.length + 2) {
//           clearInterval(glitchInterval);
//           setGlitchText(channel.data);
//         }
//       }, 40);
      
//       return () => clearInterval(glitchInterval);
//     }
//   }, [selectedChannel]);

//   // Connection quality fluctuation
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setConnectionQuality(prev => {
//         const change = (Math.random() - 0.5) * 10;
//         const newQuality = prev + change;
//         return Math.max(85, Math.min(100, newQuality));
//       });
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const playRadarPing = (distance) => {
//     if (audioContextRef.current && soundEnabled) {
//       const oscillator = audioContextRef.current.createOscillator();
//       const gainNode = audioContextRef.current.createGain();
//       const filter = audioContextRef.current.createBiquadFilter();
      
//       oscillator.connect(filter);
//       filter.connect(gainNode);
//       gainNode.connect(audioContextRef.current.destination);
      
//       filter.type = 'bandpass';
//       filter.frequency.value = 800 + (distance * 10);
      
//       oscillator.frequency.value = 1200 - (distance * 5);
//       gainNode.gain.setValueAtTime(0.15, audioContextRef.current.currentTime);
//       gainNode.gain.exponentialRampToValueAtTime(0.01, audioContextRef.current.currentTime + 0.2);
      
//       oscillator.start(audioContextRef.current.currentTime);
//       oscillator.stop(audioContextRef.current.currentTime + 0.2);
//     }
//   };

//   const handleChannelSelect = (channelId) => {
//     setSelectedChannel(channelId);
//     setActiveSignal(channelId);
//     if (soundEnabled) playRadarPing(50);
    
//     // Trigger connection animation
//     const channel = channels.find(c => c.id === channelId);
//     if (channel) {
//       setConnectionQuality(channel.strength);
//     }
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.name || !formData.email || !formData.message) return;

//     setIsTransmitting(true);
//     setTransmissionProgress(0);
    
//     // Simulate transmission with progress
//     const progressInterval = setInterval(() => {
//       setTransmissionProgress(prev => {
//         if (prev >= 100) {
//           clearInterval(progressInterval);
//           setTimeout(() => {
//             setIsTransmitting(false);
//             setFormData({ name: '', email: '', message: '' });
//             setTransmissionProgress(0);
//           }, 500);
//           return 100;
//         }
//         return prev + Math.random() * 15 + 5;
//       });
//     }, 200);
//   };

//   return (
//     <div className="min-h-screen pt-24 sm:pt-32 px-4 sm:px-6 relative overflow-hidden">
//       {/* Enhanced animated background */}
//       <div className="fixed inset-0 z-0">
//         <div className="absolute inset-0 bg-gradient-to-br from-black via-green-950/10 to-black" />
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,65,0.1)_0%,transparent_70%)]" />
        
//         {/* Animated grid with perspective */}
//         <div className="absolute inset-0 opacity-10" style={{
//           backgroundImage: `linear-gradient(rgba(0,255,65,0.3) 1px, transparent 1px),
//                            linear-gradient(90deg, rgba(0,255,65,0.3) 1px, transparent 1px)`,
//           backgroundSize: '50px 50px',
//           transform: 'perspective(500px) rotateX(60deg) translateY(-50%)',
//           transformOrigin: 'center'
//         }} />
//       </div>

//       {/* Enhanced data streams */}
//       <div className="fixed inset-0 z-0 opacity-[0.03] font-mono text-green-400 text-xs overflow-hidden">
//         {dataStream.map((line, i) => (
//           <div 
//             key={i} 
//             className="absolute whitespace-nowrap"
//             style={{ 
//               top: `${i * 6.66}%`,
//               left: '-100%',
//               animation: `stream ${15 + i * 1.5}s linear infinite`,
//               animationDelay: `${i * 0.3}s`,
//               filter: i % 3 === 0 ? 'blur(1px)' : 'none',
//               opacity: 1 - (i * 0.05)
//             }}
//           >
//             {line}
//           </div>
//         ))}
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header - Left aligned like other pages */}
//         <div className="mb-8">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-green-400 mb-4">
//             <span className="text-gray-400">&gt;</span> <ScrambledText text="SIGNAL_DETECTION.SYS" />
//           </h2>
//           <div className="flex items-center gap-4 text-gray-400 font-mono text-sm">
//             <span className="flex items-center gap-2">
//               <Activity className={`w-4 h-4 ${isScanning ? 'text-green-400 animate-pulse' : 'text-gray-600'}`} />
//               {isScanning ? 'SCANNING' : 'IDLE'}
//             </span>
//             <span className="text-green-400">◈</span>
//             <span className="flex items-center gap-2">
//               <Radio className="w-4 h-4 text-green-400" />
//               {detectedSignals.length}/{channels.length} CHANNELS
//             </span>
//             <span className="text-green-400">◈</span>
//             <button
//               onClick={() => setSoundEnabled(!soundEnabled)}
//               className="flex items-center gap-2 hover:text-green-400 transition-colors"
//             >
//               {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
//               AUDIO
//             </button>
//           </div>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-8">
//           {/* Enhanced Radar Interface */}
//           <div className="relative">
//             <div className="relative w-full max-w-[500px] mx-auto aspect-square" ref={radarRef}>
//               {/* Radar background effects */}
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent rounded-full animate-pulse" />
              
//               {/* Radar SVG */}
//               <svg className="absolute inset-0 w-full h-full">
//                 {/* Grid lines */}
//                 {[30, 60, 90, 120, 150].map(angle => (
//                   <line
//                     key={angle}
//                     x1="50%"
//                     y1="50%"
//                     x2={`${50 + 40 * Math.cos((angle - 90) * Math.PI / 180)}%`}
//                     y2={`${50 + 40 * Math.sin((angle - 90) * Math.PI / 180)}%`}
//                     stroke="#00ff41"
//                     strokeWidth="0.5"
//                     opacity="0.1"
//                   />
//                 ))}
                
//                 {/* Concentric circles with labels */}
//                 {[20, 40, 60, 80].map((radius, i) => (
//                   <g key={radius}>
//                     <circle 
//                       cx="50%" 
//                       cy="50%" 
//                       r={`${radius}%`} 
//                       fill="none" 
//                       stroke="#00ff41" 
//                       strokeWidth="1" 
//                       opacity={0.2 - i * 0.03}
//                       strokeDasharray={i % 2 === 0 ? "5,5" : "none"}
//                     />
//                     <text
//                       x="50%"
//                       y={`${50 - radius + 2}%`}
//                       textAnchor="middle"
//                       fill="#00ff41"
//                       fontSize="10"
//                       opacity="0.3"
//                     >
//                       {radius}km
//                     </text>
//                   </g>
//                 ))}
                
//                 {/* Cross lines */}
//                 <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#00ff41" strokeWidth="1" opacity="0.15" />
//                 <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#00ff41" strokeWidth="1" opacity="0.15" />
                
//                 {/* Interference effect */}
//                 {interference > 0 && (
//                   <circle
//                     cx="50%"
//                     cy="50%"
//                     r={`${interference}%`}
//                     fill="none"
//                     stroke="#ff0000"
//                     strokeWidth="2"
//                     opacity={interference / 100}
//                     strokeDasharray="2,4"
//                   >
//                     <animate
//                       attributeName="r"
//                       values={`${interference}%;${interference + 10}%;${interference}%`}
//                       dur="0.3s"
//                       repeatCount="indefinite"
//                     />
//                   </circle>
//                 )}
                
//                 {/* Enhanced scanning line */}
//                 {isScanning && (
//                   <>
//                     <line
//                       x1="50%"
//                       y1="50%"
//                       x2={`${50 + 40 * Math.cos((scanProgress - 90) * Math.PI / 180)}%`}
//                       y2={`${50 + 40 * Math.sin((scanProgress - 90) * Math.PI / 180)}%`}
//                       stroke="#00ff41"
//                       strokeWidth="2"
//                       opacity="0.8"
//                       filter="url(#glow)"
//                     />
                    
//                     {/* Scan trail with gradient */}
//                     {Array.from({ length: 60 }, (_, i) => (
//                       <line
//                         key={i}
//                         x1="50%"
//                         y1="50%"
//                         x2={`${50 + 40 * Math.cos(((scanProgress - i * 1.5) - 90) * Math.PI / 180)}%`}
//                         y2={`${50 + 40 * Math.sin(((scanProgress - i * 1.5) - 90) * Math.PI / 180)}%`}
//                         stroke="#00ff41"
//                         strokeWidth="1"
//                         opacity={0.5 - (i * 0.008)}
//                       />
//                     ))}
//                   </>
//                 )}
                
//                 {/* SVG Filters */}
//                 <defs>
//                   <filter id="glow">
//                     <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
//                     <feMerge>
//                       <feMergeNode in="coloredBlur"/>
//                       <feMergeNode in="SourceGraphic"/>
//                     </feMerge>
//                   </filter>
//                 </defs>
//               </svg>
              
//               {/* Enhanced signal points */}
//               {channels.map(channel => {
//                 const x = 50 + (channel.position.distance * 0.4) * Math.cos((channel.position.angle - 90) * Math.PI / 180);
//                 const y = 50 + (channel.position.distance * 0.4) * Math.sin((channel.position.angle - 90) * Math.PI / 180);
//                 const isDetected = detectedSignals.includes(channel.id);
//                 const isActive = activeSignal === channel.id;
//                 const isHovered = hoveredSignal === channel.id;
//                 const strength = signalStrength[channel.id] || 0;
                
//                 return (
//                   <div
//                     key={channel.id}
//                     id={`signal-${channel.id}`}
//                     className={`absolute w-14 h-14 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
//                       isDetected ? 'opacity-100' : 'opacity-0'
//                     }`}
//                     style={{ 
//                       left: `${x}%`, 
//                       top: `${y}%`,
//                       transform: `translate(-50%, -50%) scale(${isActive ? 1.3 : isHovered ? 1.15 : 1})`
//                     }}
//                     onClick={() => handleChannelSelect(channel.id)}
//                     onMouseEnter={() => setHoveredSignal(channel.id)}
//                     onMouseLeave={() => setHoveredSignal(null)}
//                   >
//                     {/* Multiple pulse rings */}
//                     {(isActive || strength > 50) && (
//                       <>
//                         <div 
//                           className="absolute inset-0 rounded-full animate-ping"
//                           style={{ 
//                             backgroundColor: channel.glowColor,
//                             opacity: 0.3,
//                             animationDuration: '1.5s'
//                           }} 
//                         />
//                         <div 
//                           className="absolute inset-0 rounded-full animate-ping"
//                           style={{ 
//                             backgroundColor: channel.glowColor,
//                             opacity: 0.2,
//                             animationDuration: '2s',
//                             animationDelay: '0.5s'
//                           }} 
//                         />
//                       </>
//                     )}
                    
//                     {/* Signal strength indicator */}
//                     {strength > 0 && (
//                       <div 
//                         className="absolute inset-0 rounded-full"
//                         style={{
//                           background: `radial-gradient(circle, ${channel.glowColor}40 0%, transparent 70%)`,
//                           transform: `scale(${1 + strength / 100})`
//                         }}
//                       />
//                     )}
                    
//                     {/* Icon container with gradient border */}
//                     <div 
//                       className="relative w-full h-full rounded-full border-2 flex items-center justify-center transition-all backdrop-blur-sm"
//                       style={{ 
//                         borderColor: isActive ? channel.glowColor : channel.color,
//                         backgroundColor: isActive ? `${channel.color}30` : 'rgba(0,0,0,0.7)',
//                         boxShadow: isActive ? `0 0 30px ${channel.glowColor}, inset 0 0 20px ${channel.glowColor}40` : 
//                                   isHovered ? `0 0 20px ${channel.glowColor}60` : 'none'
//                       }}
//                     >
//                       <channel.icon 
//                         className="w-6 h-6 transition-all" 
//                         style={{ 
//                           color: isActive ? '#ffffff' : channel.color,
//                           filter: isActive ? `drop-shadow(0 0 8px ${channel.glowColor})` : 'none'
//                         }}
//                       />
                      
//                       {/* Animated signal strength bars */}
//                       {isHovered && (
//                         <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-0.5">
//                           {[...Array(5)].map((_, i) => (
//                             <div
//                               key={i}
//                               className="signal-bar"
//                               style={{
//                                 backgroundColor: i < channel.strength / 20 ? channel.color : '#333',
//                                 opacity: i < channel.strength / 20 ? 1 : 0.3,
//                                 animationDelay: `${i * 0.1}s`
//                               }}
//                             />
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 );
//               })}
              
//               {/* Center beacon */}
//               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//                 <div className="w-6 h-6 bg-green-400 rounded-full animate-pulse relative">
//                   <div className="absolute inset-0 bg-green-400 rounded-full animate-ping" />
//                   <div className="absolute inset-[-4px] border-2 border-green-400 rounded-full opacity-50" />
//                 </div>
//               </div>
//             </div>
            
//             {/* Control buttons and status indicators */}
//             <div className="mt-6 space-y-4">
//               <div className="flex gap-2">
//                 <button
//                   onClick={() => {
//                     setIsScanning(true);
//                     setDetectedSignals([]);
//                     setScanProgress(0);
//                   }}
//                   disabled={isScanning}
//                   className={`flex-1 py-2 px-4 rounded font-mono text-xs transition-all ${
//                     isScanning 
//                       ? 'bg-green-950/30 border border-green-500/30 text-gray-500 cursor-not-allowed' 
//                       : 'bg-green-500/20 border border-green-500/40 text-green-400 hover:bg-green-500/30 hover:border-green-500/60'
//                   }`}
//                 >
//                   {isScanning ? (
//                     <span className="flex items-center justify-center gap-2">
//                       <Loader className="w-3 h-3 animate-spin" />
//                       SCANNING...
//                     </span>
//                   ) : (
//                     'RESCAN CHANNELS'
//                   )}
//                 </button>
                
//                 <button
//                   onClick={() => setSelectedChannel(null)}
//                   className="px-4 py-2 bg-red-500/20 border border-red-500/40 text-red-400 rounded font-mono text-xs hover:bg-red-500/30 hover:border-red-500/60 transition-all"
//                 >
//                   CLEAR
//                 </button>
//               </div>
              
//               {/* Status indicators */}
//               <div className="flex justify-center gap-4 text-xs font-mono">
//                 <div className="flex items-center gap-2">
//                   <Satellite className="w-4 h-4 text-green-400 animate-pulse" />
//                   <span className="text-gray-400">SCANNING: {isScanning ? 'ACTIVE' : 'COMPLETE'}</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Radio className="w-4 h-4 text-green-400" />
//                   <span className="text-gray-400">SIGNALS: {detectedSignals.length}/{channels.length}</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Information Panel */}
//           <div className="space-y-6">
//             {/* Selected Channel Info - Reduced height and content */}
//             {selectedChannel && (
//               <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-4 animate-fade-in relative overflow-hidden">
//                 <div className="relative z-10">
//                   <div className="flex items-center justify-between mb-3">
//                     <h3 className="text-green-400 font-mono text-sm flex items-center gap-2">
//                       <Activity className="w-4 h-4 animate-pulse" />
//                       CHANNEL LOCKED
//                     </h3>
//                     <span className="text-xs font-mono text-green-400 px-2 py-1 bg-green-500/10 rounded">
//                       {channels.find(c => c.id === selectedChannel)?.frequency}
//                     </span>
//                   </div>
                  
//                   <div className="space-y-2">
//                     <div className="flex items-center justify-between">
//                       <span className="text-xs font-mono text-gray-500 uppercase">Platform:</span>
//                       <span className="font-mono text-xs text-green-400">{channels.find(c => c.id === selectedChannel)?.type}</span>
//                     </div>
                    
//                     <div className="flex items-center justify-between">
//                       <span className="text-xs font-mono text-gray-500 uppercase">Connection:</span>
//                       <span className="font-mono text-xs text-green-400 glitch" data-text={glitchText}>
//                         {glitchText}
//                       </span>
//                     </div>
                    
//                     <div className="mt-3 pt-3 border-t border-green-500/20">
//                       <a 
//                         href={`https://${channels.find(c => c.id === selectedChannel)?.data}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-mono text-xs group"
//                       >
//                         ESTABLISH CONNECTION 
//                         <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Enhanced Message Transmitter */}
//             <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-6 relative overflow-hidden">
//               <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full filter blur-3xl" />
              
//               <h3 className="text-green-400 font-mono text-lg mb-4 flex items-center gap-2">
//                 <Zap className="w-5 h-5" />
//                 DIRECT TRANSMISSION
//               </h3>
              
//               <form onSubmit={handleFormSubmit} className="space-y-4">
//                 <div className="relative">
//                   <input
//                     type="text"
//                     placeholder="CALLSIGN"
//                     value={formData.name}
//                     onChange={(e) => setFormData({...formData, name: e.target.value})}
//                     className="w-full px-4 py-3 bg-black/40 border border-green-500/30 rounded text-green-400 placeholder-gray-500 font-mono text-sm focus:border-green-500/50 focus:outline-none transition-all"
//                     disabled={isTransmitting}
//                   />
//                   <div className={`absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${formData.name ? 'bg-green-400' : 'bg-gray-600'} transition-colors`} />
//                 </div>
                
//                 <div className="relative">
//                   <input
//                     type="email"
//                     placeholder="RETURN FREQUENCY"
//                     value={formData.email}
//                     onChange={(e) => setFormData({...formData, email: e.target.value})}
//                     className="w-full px-4 py-3 bg-black/40 border border-green-500/30 rounded text-green-400 placeholder-gray-500 font-mono text-sm focus:border-green-500/50 focus:outline-none transition-all"
//                     disabled={isTransmitting}
//                   />
//                   <div className={`absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${formData.email ? 'bg-green-400' : 'bg-gray-600'} transition-colors`} />
//                 </div>
                
//                 <div className="relative">
//                   <textarea
//                     placeholder="MESSAGE PAYLOAD..."
//                     rows={4}
//                     value={formData.message}
//                     onChange={(e) => setFormData({...formData, message: e.target.value})}
//                     className="w-full px-4 py-3 bg-black/40 border border-green-500/30 rounded text-green-400 placeholder-gray-500 font-mono text-sm focus:border-green-500/50 focus:outline-none transition-all resize-none"
//                     disabled={isTransmitting}
//                   />
//                   <div className={`absolute right-3 top-3 w-2 h-2 rounded-full ${formData.message ? 'bg-green-400' : 'bg-gray-600'} transition-colors`} />
//                   <div className="absolute bottom-2 right-3 text-xs font-mono text-gray-500">
//                     {formData.message.length}/500
//                   </div>
//                 </div>
                
//                 {/* Transmission progress */}
//                 {isTransmitting && (
//                   <div className="space-y-2">
//                     <div className="flex justify-between text-xs font-mono text-gray-400">
//                       <span>TRANSMITTING...</span>
//                       <span>{Math.floor(transmissionProgress)}%</span>
//                     </div>
//                     <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden">
//                       <div 
//                         className="h-full bg-green-400 rounded-full transition-all duration-300 relative"
//                         style={{ width: `${transmissionProgress}%` }}
//                       >
//                         <div className="absolute inset-0 bg-white/20 animate-pulse" />
//                       </div>
//                     </div>
//                   </div>
//                 )}
                
//                 <button
//                   type="submit"
//                   disabled={isTransmitting || !formData.name || !formData.email || !formData.message}
//                   className={`w-full py-3 font-mono font-semibold rounded transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden ${
//                     isTransmitting 
//                       ? 'bg-green-950/30 border border-green-500/30 text-gray-400 cursor-not-allowed' 
//                       : 'bg-green-400 text-black hover:bg-green-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-green-400/30'
//                   }`}
//                 >
//                   {isTransmitting ? (
//                     <>
//                       <Loader className="w-4 h-4 animate-spin" />
//                       TRANSMITTING... {Math.floor(transmissionProgress)}%
//                     </>
//                   ) : (
//                     <>
//                       <Send className="w-4 h-4" />
//                       INITIATE TRANSMISSION
//                     </>
//                   )}
                  
//                   {/* Button shine effect */}
//                   {!isTransmitting && (
//                     <div className="absolute inset-0 -top-full bg-gradient-to-b from-white/20 to-transparent transform skew-y-12 group-hover:translate-y-full transition-transform duration-700" />
//                   )}
//                 </button>
//               </form>
//             </div>

//             {/* Network Status Grid */}
//             <div className="grid grid-cols-2 gap-4">
//               <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-4">
//                 <div className="flex items-center justify-between mb-2">
//                   <Shield className="w-4 h-4 text-green-400" />
//                   <span className="text-xs font-mono text-gray-400">SECURITY</span>
//                 </div>
//                 <p className="text-green-400 font-mono text-sm">AES-256</p>
//                 <div className="mt-2 flex gap-1">
//                   {[...Array(4)].map((_, i) => (
//                     <div key={i} className="flex-1 h-1 bg-green-400 rounded-full" />
//                   ))}
//                 </div>
//               </div>
              
//               <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-4">
//                 <div className="flex items-center justify-between mb-2">
//                   <Wifi className="w-4 h-4 text-green-400" />
//                   <span className="text-xs font-mono text-gray-400">BANDWIDTH</span>
//                 </div>
//                 <p className="text-green-400 font-mono text-sm">1.21 GB/s</p>
//                 <div className="mt-2 h-1 bg-gray-700 rounded-full overflow-hidden">
//                   <div className="h-full bg-green-400 rounded-full animate-pulse" style={{ width: '85%' }} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes stream {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(300%);
//           }
//         }

//         @keyframes slide {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(20px);
//           }
//         }

//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-in {
//           animation: fade-in 0.5s ease-out;
//         }

//         .signal-detected {
//           animation: detection-pulse 1s ease-out;
//         }

//         @keyframes detection-pulse {
//           0% {
//             transform: translate(-50%, -50%) scale(1);
//           }
//           50% {
//             transform: translate(-50%, -50%) scale(1.5);
//           }
//           100% {
//             transform: translate(-50%, -50%) scale(1);
//           }
//         }

//         .signal-bar {
//           width: 4px;
//           height: 14px;
//           border-radius: 2px;
//           transition: all 0.3s ease;
//           animation: audioWave 1s ease-in-out infinite;
//         }

//         @keyframes audioWave {
//           0%, 100% {
//             transform: scaleY(0.7);
//           }
//           50% {
//             transform: scaleY(1);
//           }
//         }

//         .glitch {
//           position: relative;
//           display: inline-block;
//         }

//         .glitch::before,
//         .glitch::after {
//           content: attr(data-text);
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//         }

//         .glitch::before {
//           animation: glitch-1 0.5s infinite;
//           color: #00ff41;
//           z-index: -1;
//           text-shadow: -2px 0 #ff00ff;
//         }

//         .glitch::after {
//           animation: glitch-2 0.5s infinite;
//           color: #00ffff;
//           z-index: -2;
//           text-shadow: 2px 0 #ffff00;
//         }

//         @keyframes glitch-1 {
//           0%, 100% {
//             clip: rect(42px, 9999px, 44px, 0);
//             transform: skew(0.5deg);
//           }
//           20% {
//             clip: rect(20px, 9999px, 30px, 0);
//             transform: skew(0.8deg);
//           }
//           40% {
//             clip: rect(60px, 9999px, 80px, 0);
//             transform: skew(0.2deg);
//           }
//           60% {
//             clip: rect(10px, 9999px, 90px, 0);
//             transform: skew(0.9deg);
//           }
//           80% {
//             clip: rect(50px, 9999px, 70px, 0);
//             transform: skew(0.3deg);
//           }
//         }

//         @keyframes glitch-2 {
//           0%, 100% {
//             clip: rect(65px, 9999px, 119px, 0);
//             transform: skew(-0.5deg);
//           }
//           20% {
//             clip: rect(30px, 9999px, 60px, 0);
//             transform: skew(-0.8deg);
//           }
//           40% {
//             clip: rect(80px, 9999px, 95px, 0);
//             transform: skew(-0.2deg);
//           }
//           60% {
//             clip: rect(25px, 9999px, 45px, 0);
//             transform: skew(-0.9deg);
//           }
//           80% {
//             clip: rect(70px, 9999px, 85px, 0);
//             transform: skew(-0.3deg);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }





























// app/contact/page.js
// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import { Send, Shield, Satellite, Radio, Wifi, Activity, Zap, Globe, Github, Linkedin, Twitter, Mail, MapPin, Clock, Lock, ChevronRight, Instagram, Facebook, Volume2, VolumeX, Loader, Sparkles, Binary, Cpu } from 'lucide-react';
// import { useTransition } from '../layout';
// import ScrambledText from '@/components/ScrambledText';

// export default function ContactPage() {
//   const { isTransitioning } = useTransition();
//   const [activeSignal, setActiveSignal] = useState(null);
//   const [scanProgress, setScanProgress] = useState(0);
//   const [isScanning, setIsScanning] = useState(true);
//   const [detectedSignals, setDetectedSignals] = useState([]);
//   const [selectedChannel, setSelectedChannel] = useState(null);
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [isTransmitting, setIsTransmitting] = useState(false);
//   const [transmissionProgress, setTransmissionProgress] = useState(0);
//   const [glitchText, setGlitchText] = useState('');
//   const [dataStream, setDataStream] = useState([]);
//   const [soundEnabled, setSoundEnabled] = useState(true);
//   const [signalStrength, setSignalStrength] = useState({});
//   const [interference, setInterference] = useState(0);
//   const [connectionQuality, setConnectionQuality] = useState(100);
//   const [hoveredSignal, setHoveredSignal] = useState(null);
//   const [particles, setParticles] = useState([]);
//   const [matrixDrops, setMatrixDrops] = useState([]);
//   const [constellationLines, setConstellationLines] = useState([]);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [energyField, setEnergyField] = useState([]);
//   const [pulseWave, setPulseWave] = useState(0);
//   const radarRef = useRef(null);
//   const audioContextRef = useRef(null);
//   const canvasRef = useRef(null);
//   const particleCanvasRef = useRef(null);

//   // Social channels with enhanced data
//   const channels = [
//     {
//       id: 'linkedin',
//       type: 'Professional Network',
//       frequency: '2.4GHz',
//       bandwidth: 'HIGH',
//       signal: 'STABLE',
//       strength: 95,
//       data: 'linkedin.com/in/rizwi',
//       icon: Linkedin,
//       position: { angle: 72, distance: 70 },
//       color: '#00ff41',
//       glowColor: '#00ff88',
//       description: 'Professional connections and career updates'
//     },
//     {
//       id: 'github',
//       type: 'Code Repository',
//       frequency: '5.0GHz',
//       bandwidth: 'ULTRA',
//       signal: 'ACTIVE',
//       strength: 98,
//       data: 'github.com/rizwi',
//       icon: Github,
//       position: { angle: 144, distance: 75 },
//       color: '#00ff41',
//       glowColor: '#00ff88',
//       description: 'Open source projects and code contributions'
//     },
//     {
//       id: 'twitter',
//       type: 'Micro Blog',
//       frequency: '3.6GHz',
//       bandwidth: 'MEDIUM',
//       signal: 'LIVE',
//       strength: 88,
//       data: 'twitter.com/rizwi_dev',
//       icon: Twitter,
//       position: { angle: 216, distance: 65 },
//       color: '#00ff41',
//       glowColor: '#00ff88',
//       description: 'Tech thoughts and real-time updates'
//     },
//     {
//       id: 'instagram',
//       type: 'Visual Stream',
//       frequency: '2.8GHz',
//       bandwidth: 'HIGH',
//       signal: 'STREAMING',
//       strength: 92,
//       data: 'instagram.com/rizwi.dev',
//       icon: Instagram,
//       position: { angle: 288, distance: 68 },
//       color: '#00ff41',
//       glowColor: '#00ff88',
//       description: 'Visual journey and creative moments'
//     },
//     {
//       id: 'facebook',
//       type: 'Social Hub',
//       frequency: '3.2GHz',
//       bandwidth: 'STANDARD',
//       signal: 'CONNECTED',
//       strength: 85,
//       data: 'facebook.com/rizwi.developer',
//       icon: Facebook,
//       position: { angle: 360, distance: 72 },
//       color: '#00ff41',
//       glowColor: '#00ff88',
//       description: 'Community engagement and updates'
//     }
//   ];

//   // Initialize particles
//   useEffect(() => {
//     const particleCount = 100;
//     const newParticles = Array(particleCount).fill(null).map(() => ({
//       x: Math.random() * window.innerWidth,
//       y: Math.random() * window.innerHeight,
//       vx: (Math.random() - 0.5) * 0.5,
//       vy: (Math.random() - 0.5) * 0.5,
//       size: Math.random() * 3 + 1,
//       opacity: Math.random() * 0.5 + 0.2,
//       pulseSpeed: Math.random() * 0.02 + 0.01,
//       pulsePhase: Math.random() * Math.PI * 2,
//       color: Math.random() > 0.8 ? '#00ff41' : '#00ff8850',
//       connections: []
//     }));
//     setParticles(newParticles);

//     // Initialize matrix rain
//     const columns = Math.floor(window.innerWidth / 20);
//     const drops = Array(columns).fill(null).map((_, i) => ({
//       x: i * 20,
//       y: Math.random() * -window.innerHeight,
//       speed: Math.random() * 20 + 10,
//       opacity: Math.random() * 0.8 + 0.2,
//       trail: Array(15).fill(null).map(() => ({
//         char: String.fromCharCode(0x30A0 + Math.random() * 96),
//         opacity: 1
//       }))
//     }));
//     setMatrixDrops(drops);

//     // Initialize energy field
//     const fieldPoints = Array(20).fill(null).map(() => ({
//       x: Math.random() * window.innerWidth,
//       y: Math.random() * window.innerHeight,
//       radius: Math.random() * 100 + 50,
//       intensity: Math.random() * 0.5 + 0.5,
//       pulseSpeed: Math.random() * 0.02 + 0.01,
//       color: Math.random() > 0.5 ? '#00ff41' : '#00ff88'
//     }));
//     setEnergyField(fieldPoints);
//   }, []);

//   // Mouse tracking
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   // Particle animation with mouse interaction
//   useEffect(() => {
//     const animateParticles = () => {
//       setParticles(prevParticles => {
//         return prevParticles.map(particle => {
//           // Mouse influence
//           const dx = mousePosition.x - particle.x;
//           const dy = mousePosition.y - particle.y;
//           const distance = Math.sqrt(dx * dx + dy * dy);
//           const maxDistance = 150;
          
//           if (distance < maxDistance) {
//             const force = (1 - distance / maxDistance) * 0.1;
//             particle.vx += (dx / distance) * force;
//             particle.vy += (dy / distance) * force;
//           }

//           // Update position
//           particle.x += particle.vx;
//           particle.y += particle.vy;

//           // Damping
//           particle.vx *= 0.98;
//           particle.vy *= 0.98;

//           // Boundary check
//           if (particle.x < 0 || particle.x > window.innerWidth) particle.vx *= -1;
//           if (particle.y < 0 || particle.y > window.innerHeight) particle.vy *= -1;

//           // Find nearby particles for connections
//           particle.connections = prevParticles
//             .filter(other => {
//               const dist = Math.sqrt(
//                 Math.pow(particle.x - other.x, 2) + 
//                 Math.pow(particle.y - other.y, 2)
//               );
//               return dist < 100 && dist > 0;
//             })
//             .slice(0, 3); // Max 3 connections per particle

//           return particle;
//         });
//       });
//     };

//     const interval = setInterval(animateParticles, 16);
//     return () => clearInterval(interval);
//   }, [mousePosition]);

//   // Pulse wave animation
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPulseWave(prev => (prev + 0.05) % (Math.PI * 2));
//     }, 50);
//     return () => clearInterval(interval);
//   }, []);

//   // Initialize audio context
//   useEffect(() => {
//     if (typeof window !== 'undefined' && window.AudioContext) {
//       audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
//     }
//   }, []);

//   // Enhanced radar scanning with interference
//   useEffect(() => {
//     if (isScanning) {
//       const interval = setInterval(() => {
//         setScanProgress(prev => {
//           const next = (prev + 1.5) % 360;
          
//           // Random interference
//           if (Math.random() > 0.98) {
//             setInterference(Math.random() * 30 + 70);
//             setTimeout(() => setInterference(0), 300);
//           }
          
//           // Check for signal detection with proximity effect
//           channels.forEach(channel => {
//             const diff = Math.abs(next - channel.position.angle);
//             const proximity = Math.min(diff, 360 - diff);
            
//             // Update signal strength based on proximity
//             if (proximity < 30) {
//               const strength = channel.strength * (1 - proximity / 30);
//               setSignalStrength(prev => ({ ...prev, [channel.id]: strength }));
//             }
            
//             if (proximity < 3) {
//               if (!detectedSignals.includes(channel.id)) {
//                 setDetectedSignals(prev => [...prev, channel.id]);
//                 if (soundEnabled) playRadarPing(channel.position.distance);
                
//                 // Add detection animation
//                 const el = document.getElementById(`signal-${channel.id}`);
//                 if (el) {
//                   el.classList.add('signal-detected');
//                   setTimeout(() => el.classList.remove('signal-detected'), 1000);
//                 }
//               }
//             }
//           });
          
//           // Stop scanning after two full rotations
//           if (next === 0 && detectedSignals.length === channels.length) {
//             setTimeout(() => setIsScanning(false), 500);
//           }
          
//           return next;
//         });
//       }, 25);

//       return () => clearInterval(interval);
//     }
//   }, [isScanning, detectedSignals, soundEnabled]);

//   // Enhanced data stream with patterns
//   useEffect(() => {
//     const patterns = [
//       '◊◊◊◊◊◊◊◊◊◊',
//       '▓▒░▒▓▒░▒▓▒',
//       '⟨⟨⟨⟨⟨⟨⟨⟨⟨⟨',
//       '∆∇∆∇∆∇∆∇∆∇',
//       '○●○●○●○●○●',
//       '⊕⊗⊕⊗⊕⊗⊕⊗⊕⊗',
//       '▪▫▪▫▪▫▪▫▪▫',
//       '█▄▀█▄▀█▄▀█'
//     ];
    
//     const interval = setInterval(() => {
//       const usePattern = Math.random() > 0.7;
//       const newLine = usePattern 
//         ? patterns[Math.floor(Math.random() * patterns.length)].repeat(5)
//         : Array.from({ length: 50 }, () => {
//             const chars = '01⟨⟩∅∆∇∂∫∑∏⊕⊗⊙√∞≈≠≤≥∈∉⊆⊇∪∩░▒▓█';
//             return chars[Math.floor(Math.random() * chars.length)];
//           }).join('');
      
//       setDataStream(prev => {
//         const updated = [...prev, newLine];
//         return updated.slice(-15);
//       });
//     }, 150);

//     return () => clearInterval(interval);
//   }, []);

//   // Enhanced glitch effect
//   useEffect(() => {
//     if (selectedChannel) {
//       const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?█▓▒░╚═╩╦╠╬╣╗╝┤┐└┴┬├─┼';
//       let iterations = 0;
      
//       const channel = channels.find(c => c.id === selectedChannel);
//       if (!channel) return;
      
//       const glitchInterval = setInterval(() => {
//         setGlitchText(
//           channel.data
//             .split('')
//             .map((char, index) => {
//               if (index < iterations) return char;
//               if (Math.random() > 0.8 && iterations > index - 3) {
//                 return channel.data[index]; // Occasional correct character
//               }
//               return glitchChars[Math.floor(Math.random() * glitchChars.length)];
//             })
//             .join('')
//         );
        
//         iterations += 0.5;
//         if (iterations > channel.data.length + 2) {
//           clearInterval(glitchInterval);
//           setGlitchText(channel.data);
//         }
//       }, 40);
      
//       return () => clearInterval(glitchInterval);
//     }
//   }, [selectedChannel]);

//   // Connection quality fluctuation
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setConnectionQuality(prev => {
//         const change = (Math.random() - 0.5) * 10;
//         const newQuality = prev + change;
//         return Math.max(85, Math.min(100, newQuality));
//       });
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const playRadarPing = (distance) => {
//     if (audioContextRef.current && soundEnabled) {
//       const oscillator = audioContextRef.current.createOscillator();
//       const gainNode = audioContextRef.current.createGain();
//       const filter = audioContextRef.current.createBiquadFilter();
      
//       oscillator.connect(filter);
//       filter.connect(gainNode);
//       gainNode.connect(audioContextRef.current.destination);
      
//       filter.type = 'bandpass';
//       filter.frequency.value = 800 + (distance * 10);
      
//       oscillator.frequency.value = 1200 - (distance * 5);
//       gainNode.gain.setValueAtTime(0.15, audioContextRef.current.currentTime);
//       gainNode.gain.exponentialRampToValueAtTime(0.01, audioContextRef.current.currentTime + 0.2);
      
//       oscillator.start(audioContextRef.current.currentTime);
//       oscillator.stop(audioContextRef.current.currentTime + 0.2);
//     }
//   };

//   const handleChannelSelect = (channelId) => {
//     setSelectedChannel(channelId);
//     setActiveSignal(channelId);
//     if (soundEnabled) playRadarPing(50);
    
//     // Trigger connection animation
//     const channel = channels.find(c => c.id === channelId);
//     if (channel) {
//       setConnectionQuality(channel.strength);
//     }
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.name || !formData.email || !formData.message) return;

//     setIsTransmitting(true);
//     setTransmissionProgress(0);
    
//     // Simulate transmission with progress
//     const progressInterval = setInterval(() => {
//       setTransmissionProgress(prev => {
//         if (prev >= 100) {
//           clearInterval(progressInterval);
//           setTimeout(() => {
//             setIsTransmitting(false);
//             setFormData({ name: '', email: '', message: '' });
//             setTransmissionProgress(0);
//           }, 500);
//           return 100;
//         }
//         return prev + Math.random() * 15 + 5;
//       });
//     }, 200);
//   };

//   return (
//     <div className="min-h-screen pt-24 sm:pt-32 px-4 sm:px-6 relative overflow-hidden">
//       {/* Enhanced animated background */}
//       <div className="fixed inset-0 z-0">
//         <div className="absolute inset-0 bg-gradient-to-br from-black via-green-950/10 to-black" />
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,65,0.1)_0%,transparent_70%)]" />
        
//         {/* Animated grid with perspective */}
//         <div className="absolute inset-0 opacity-10" style={{
//           backgroundImage: `linear-gradient(rgba(0,255,65,0.3) 1px, transparent 1px),
//                            linear-gradient(90deg, rgba(0,255,65,0.3) 1px, transparent 1px)`,
//           backgroundSize: '50px 50px',
//           transform: 'perspective(500px) rotateX(60deg) translateY(-50%)',
//           transformOrigin: 'center'
//         }} />

//         {/* Energy field visualization */}
//         {energyField.map((field, i) => (
//           <div
//             key={i}
//             className="absolute rounded-full"
//             style={{
//               left: field.x,
//               top: field.y,
//               width: field.radius * 2,
//               height: field.radius * 2,
//               transform: 'translate(-50%, -50%)',
//               background: `radial-gradient(circle, ${field.color}10 0%, transparent 70%)`,
//               opacity: field.intensity * (0.5 + 0.5 * Math.sin(pulseWave + i)),
//               filter: 'blur(30px)',
//               pointerEvents: 'none'
//             }}
//           />
//         ))}
//       </div>

//       {/* Particle system */}
//       <svg className="fixed inset-0 z-0 pointer-events-none" style={{ width: '100%', height: '100%' }}>
//         {/* Particle connections */}
//         {particles.map((particle, i) => 
//           particle.connections.map((connected, j) => {
//             const distance = Math.sqrt(
//               Math.pow(particle.x - connected.x, 2) + 
//               Math.pow(particle.y - connected.y, 2)
//             );
//             const opacity = (1 - distance / 100) * 0.3;
            
//             return (
//               <line
//                 key={`${i}-${j}`}
//                 x1={particle.x}
//                 y1={particle.y}
//                 x2={connected.x}
//                 y2={connected.y}
//                 stroke="#00ff41"
//                 strokeWidth="0.5"
//                 opacity={opacity}
//               />
//             );
//           })
//         )}
        
//         {/* Particles */}
//         {particles.map((particle, i) => (
//           <circle
//             key={i}
//             cx={particle.x}
//             cy={particle.y}
//             r={particle.size * (1 + 0.3 * Math.sin(pulseWave + particle.pulsePhase))}
//             fill={particle.color}
//             opacity={particle.opacity}
//           >
//             <animate
//               attributeName="opacity"
//               values={`${particle.opacity};${particle.opacity * 0.5};${particle.opacity}`}
//               dur="3s"
//               repeatCount="indefinite"
//             />
//           </circle>
//         ))}
//       </svg>

//       {/* Enhanced data streams */}
//       <div className="fixed inset-0 z-0 opacity-[0.03] font-mono text-green-400 text-xs overflow-hidden">
//         {dataStream.map((line, i) => (
//           <div 
//             key={i} 
//             className="absolute whitespace-nowrap"
//             style={{ 
//               top: `${i * 6.66}%`,
//               left: '-100%',
//               animation: `stream ${15 + i * 1.5}s linear infinite`,
//               animationDelay: `${i * 0.3}s`,
//               filter: i % 3 === 0 ? 'blur(1px)' : 'none',
//               opacity: 1 - (i * 0.05)
//             }}
//           >
//             {line}
//           </div>
//         ))}
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header - Left aligned like other pages */}
//         <div className="mb-8">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-green-400 mb-4">
//             <span className="text-gray-400">&gt;</span> <ScrambledText text="SIGNAL_DETECTION.SYS" />
//           </h2>
//           <div className="flex items-center gap-4 text-gray-400 font-mono text-sm">
//             <span className="flex items-center gap-2">
//               <Activity className={`w-4 h-4 ${isScanning ? 'text-green-400 animate-pulse' : 'text-gray-600'}`} />
//               {isScanning ? 'SCANNING' : 'IDLE'}
//             </span>
//             <span className="text-green-400">◈</span>
//             <span className="flex items-center gap-2">
//               <Radio className="w-4 h-4 text-green-400" />
//               {detectedSignals.length}/{channels.length} CHANNELS
//             </span>
//             <span className="text-green-400">◈</span>
//             <button
//               onClick={() => setSoundEnabled(!soundEnabled)}
//               className="flex items-center gap-2 hover:text-green-400 transition-colors"
//             >
//               {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
//               AUDIO
//             </button>
//             <span className="text-green-400">◈</span>
//             <span className="flex items-center gap-2">
//               <Sparkles className="w-4 h-4 text-green-400 animate-pulse" />
//               QUANTUM FIELD ACTIVE
//             </span>
//           </div>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-8">
//           {/* Enhanced Radar Interface with Constellation */}
//           <div className="relative">
//             <div className="relative w-full max-w-[500px] mx-auto aspect-square" ref={radarRef}>
//               {/* Radar background effects */}
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent rounded-full animate-pulse" />
              
//               {/* Radar SVG */}
//               <svg className="absolute inset-0 w-full h-full">
//                 {/* Grid lines */}
//                 {[30, 60, 90, 120, 150].map(angle => (
//                   <line
//                     key={angle}
//                     x1="50%"
//                     y1="50%"
//                     x2={`${50 + 40 * Math.cos((angle - 90) * Math.PI / 180)}%`}
//                     y2={`${50 + 40 * Math.sin((angle - 90) * Math.PI / 180)}%`}
//                     stroke="#00ff41"
//                     strokeWidth="0.5"
//                     opacity="0.1"
//                   />
//                 ))}
                
//                 {/* Concentric circles with labels */}
//                 {[20, 40, 60, 80].map((radius, i) => (
//                   <g key={radius}>
//                     <circle 
//                       cx="50%" 
//                       cy="50%" 
//                       r={`${radius}%`} 
//                       fill="none" 
//                       stroke="#00ff41" 
//                       strokeWidth="1" 
//                       opacity={0.2 - i * 0.03}
//                       strokeDasharray={i % 2 === 0 ? "5,5" : "none"}
//                     />
//                     <text
//                       x="50%"
//                       y={`${50 - radius + 2}%`}
//                       textAnchor="middle"
//                       fill="#00ff41"
//                       fontSize="10"
//                       opacity="0.3"
//                     >
//                       {radius}km
//                     </text>
//                   </g>
//                 ))}
                
//                 {/* Cross lines */}
//                 <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#00ff41" strokeWidth="1" opacity="0.15" />
//                 <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#00ff41" strokeWidth="1" opacity="0.15" />
                
//                 {/* Dynamic constellation lines */}
//                 {constellationLines.map(line => (
//                   <line
//                     key={line.id}
//                     x1={`${line.x1}%`}
//                     y1={`${line.y1}%`}
//                     x2={`${line.x2}%`}
//                     y2={`${line.y2}%`}
//                     stroke="#00ff41"
//                     strokeWidth="1"
//                     opacity={line.opacity * (0.5 + 0.5 * Math.sin(pulseWave * line.pulseSpeed))}
//                     strokeDasharray="5,10"
//                     className="constellation-line"
//                   >
//                     <animate
//                       attributeName="stroke-dashoffset"
//                       from="0"
//                       to="15"
//                       dur="2s"
//                       repeatCount="indefinite"
//                     />
//                   </line>
//                 ))}
                
//                 {/* Interference effect */}
//                 {interference > 0 && (
//                   <circle
//                     cx="50%"
//                     cy="50%"
//                     r={`${interference}%`}
//                     fill="none"
//                     stroke="#ff0000"
//                     strokeWidth="2"
//                     opacity={interference / 100}
//                     strokeDasharray="2,4"
//                   >
//                     <animate
//                       attributeName="r"
//                       values={`${interference}%;${interference + 10}%;${interference}%`}
//                       dur="0.3s"
//                       repeatCount="indefinite"
//                     />
//                   </circle>
//                 )}
                
//                 {/* Enhanced scanning line */}
//                 {isScanning && (
//                   <>
//                     <line
//                       x1="50%"
//                       y1="50%"
//                       x2={`${50 + 40 * Math.cos((scanProgress - 90) * Math.PI / 180)}%`}
//                       y2={`${50 + 40 * Math.sin((scanProgress - 90) * Math.PI / 180)}%`}
//                       stroke="#00ff41"
//                       strokeWidth="2"
//                       opacity="0.8"
//                       filter="url(#glow)"
//                     />
                    
//                     {/* Scan trail with gradient */}
//                     {Array.from({ length: 60 }, (_, i) => (
//                       <line
//                         key={i}
//                         x1="50%"
//                         y1="50%"
//                         x2={`${50 + 40 * Math.cos(((scanProgress - i * 1.5) - 90) * Math.PI / 180)}%`}
//                         y2={`${50 + 40 * Math.sin(((scanProgress - i * 1.5) - 90) * Math.PI / 180)}%`}
//                         stroke="#00ff41"
//                         strokeWidth="1"
//                         opacity={0.5 - (i * 0.008)}
//                       />
//                     ))}
//                   </>
//                 )}
                
//                 {/* SVG Filters */}
//                 <defs>
//                   <filter id="glow">
//                     <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
//                     <feMerge>
//                       <feMergeNode in="coloredBlur"/>
//                       <feMergeNode in="SourceGraphic"/>
//                     </feMerge>
//                   </filter>
//                   <filter id="turbulence">
//                     <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="turbulence"/>
//                     <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="2" xChannelSelector="R" yChannelSelector="G"/>
//                   </filter>
//                 </defs>
//               </svg>
              
//               {/* Enhanced signal points with quantum effects */}
//               {channels.map(channel => {
//                 const x = 50 + (channel.position.distance * 0.4) * Math.cos((channel.position.angle - 90) * Math.PI / 180);
//                 const y = 50 + (channel.position.distance * 0.4) * Math.sin((channel.position.angle - 90) * Math.PI / 180);
//                 const isDetected = detectedSignals.includes(channel.id);
//                 const isActive = activeSignal === channel.id;
//                 const isHovered = hoveredSignal === channel.id;
//                 const strength = signalStrength[channel.id] || 0;
                
//                 return (
//                   <div
//                     key={channel.id}
//                     id={`signal-${channel.id}`}
//                     className={`absolute w-14 h-14 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
//                       isDetected ? 'opacity-100' : 'opacity-0'
//                     }`}
//                     style={{ 
//                       left: `${x}%`, 
//                       top: `${y}%`,
//                       transform: `translate(-50%, -50%) scale(${isActive ? 1.3 : isHovered ? 1.15 : 1})`
//                     }}
//                     onClick={() => handleChannelSelect(channel.id)}
//                     onMouseEnter={() => setHoveredSignal(channel.id)}
//                     onMouseLeave={() => setHoveredSignal(null)}
//                   >
//                     {/* Multiple pulse rings with quantum effect */}
//                     {(isActive || strength > 50) && (
//                       <>
//                         <div 
//                           className="absolute inset-0 rounded-full animate-ping"
//                           style={{ 
//                             backgroundColor: channel.glowColor,
//                             opacity: 0.3,
//                             animationDuration: '1.5s'
//                           }} 
//                         />
//                         <div 
//                           className="absolute inset-0 rounded-full animate-ping"
//                           style={{ 
//                             backgroundColor: channel.glowColor,
//                             opacity: 0.2,
//                             animationDuration: '2s',
//                             animationDelay: '0.5s'
//                           }} 
//                         />
//                         {/* Quantum particle effect */}
//                         <div 
//                           className="absolute inset-[-20px] rounded-full"
//                           style={{
//                             background: `conic-gradient(from ${pulseWave * 180 / Math.PI}deg, transparent, ${channel.glowColor}40, transparent)`,
//                             animation: 'rotate 3s linear infinite'
//                           }}
//                         />
//                       </>
//                     )}
                    
//                     {/* Signal strength indicator */}
//                     {strength > 0 && (
//                       <div 
//                         className="absolute inset-0 rounded-full"
//                         style={{
//                           background: `radial-gradient(circle, ${channel.glowColor}40 0%, transparent 70%)`,
//                           transform: `scale(${1 + strength / 100})`,
//                           filter: 'blur(2px)'
//                         }}
//                       />
//                     )}
                    
//                     {/* Icon container with gradient border */}
//                     <div 
//                       className="relative w-full h-full rounded-full border-2 flex items-center justify-center transition-all backdrop-blur-sm"
//                       style={{ 
//                         borderColor: isActive ? channel.glowColor : channel.color,
//                         backgroundColor: isActive ? `${channel.color}30` : 'rgba(0,0,0,0.7)',
//                         boxShadow: isActive ? `0 0 30px ${channel.glowColor}, inset 0 0 20px ${channel.glowColor}40` : 
//                                   isHovered ? `0 0 20px ${channel.glowColor}60` : 'none'
//                       }}
//                     >
//                       <channel.icon 
//                         className="w-6 h-6 transition-all" 
//                         style={{ 
//                           color: isActive ? '#ffffff' : channel.color,
//                           filter: isActive ? `drop-shadow(0 0 8px ${channel.glowColor})` : 'none'
//                         }}
//                       />
                      
//                       {/* Animated signal strength bars */}
//                       {isHovered && (
//                         <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-0.5">
//                           {[...Array(5)].map((_, i) => (
//                             <div
//                               key={i}
//                               className="signal-bar"
//                               style={{
//                                 backgroundColor: i < channel.strength / 20 ? channel.color : '#333',
//                                 opacity: i < channel.strength / 20 ? 1 : 0.3,
//                                 animationDelay: `${i * 0.1}s`
//                               }}
//                             />
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 );
//               })}
              
//               {/* Center beacon with quantum core */}
//               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//                 <div className="w-6 h-6 bg-green-400 rounded-full animate-pulse relative">
//                   <div className="absolute inset-0 bg-green-400 rounded-full animate-ping" />
//                   <div className="absolute inset-[-4px] border-2 border-green-400 rounded-full opacity-50" />
//                   {/* Quantum core effect */}
//                   <div className="absolute inset-[-10px] rounded-full" style={{
//                     background: `radial-gradient(circle, transparent 30%, ${Math.sin(pulseWave) > 0 ? '#00ff41' : '#00ff88'}20 50%, transparent 70%)`,
//                     animation: 'rotate 4s linear infinite reverse'
//                   }} />
//                 </div>
//               </div>
//             </div>
            
//             {/* Control buttons and status indicators */}
//             <div className="mt-6 space-y-4">
//               <div className="flex gap-2">
//                 <button
//                   onClick={() => {
//                     setIsScanning(true);
//                     setDetectedSignals([]);
//                     setScanProgress(0);
//                     setConstellationLines([]);
//                   }}
//                   disabled={isScanning}
//                   className={`flex-1 py-2 px-4 rounded font-mono text-xs transition-all ${
//                     isScanning 
//                       ? 'bg-green-950/30 border border-green-500/30 text-gray-500 cursor-not-allowed' 
//                       : 'bg-green-500/20 border border-green-500/40 text-green-400 hover:bg-green-500/30 hover:border-green-500/60'
//                   }`}
//                 >
//                   {isScanning ? (
//                     <span className="flex items-center justify-center gap-2">
//                       <Loader className="w-3 h-3 animate-spin" />
//                       SCANNING...
//                     </span>
//                   ) : (
//                     'RESCAN CHANNELS'
//                   )}
//                 </button>
                
//                 <button
//                   onClick={() => {
//                     setSelectedChannel(null);
//                     setActiveSignal(null);
//                   }}
//                   className="px-4 py-2 bg-red-500/20 border border-red-500/40 text-red-400 rounded font-mono text-xs hover:bg-red-500/30 hover:border-red-500/60 transition-all"
//                 >
//                   CLEAR
//                 </button>
//               </div>
              
//               {/* Status indicators */}
//               <div className="flex justify-center gap-4 text-xs font-mono">
//                 <div className="flex items-center gap-2">
//                   <Satellite className="w-4 h-4 text-green-400 animate-pulse" />
//                   <span className="text-gray-400">SCANNING: {isScanning ? 'ACTIVE' : 'COMPLETE'}</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Radio className="w-4 h-4 text-green-400" />
//                   <span className="text-gray-400">SIGNALS: {detectedSignals.length}/{channels.length}</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Information Panel */}
//           <div className="space-y-6">
//             {/* Selected Channel Info - Reduced height and content */}
//             {selectedChannel && (
//               <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-4 animate-fade-in relative overflow-hidden">
//                 {/* Animated background pattern */}
//                 <div className="absolute inset-0 opacity-5">
//                   <div className="absolute inset-0" style={{
//                     backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,255,65,0.1) 10px, rgba(0,255,65,0.1) 20px)`,
//                     animation: 'slide 20s linear infinite'
//                   }} />
//                 </div>
                
//                 <div className="relative z-10">
//                   <div className="flex items-center justify-between mb-3">
//                     <h3 className="text-green-400 font-mono text-sm flex items-center gap-2">
//                       <Activity className="w-4 h-4 animate-pulse" />
//                       CHANNEL LOCKED
//                     </h3>
//                     <span className="text-xs font-mono text-green-400 px-2 py-1 bg-green-500/10 rounded">
//                       {channels.find(c => c.id === selectedChannel)?.frequency}
//                     </span>
//                   </div>
                  
//                   <div className="space-y-2">
//                     <div className="flex items-center justify-between">
//                       <span className="text-xs font-mono text-gray-500 uppercase">Platform:</span>
//                       <span className="font-mono text-xs text-green-400">{channels.find(c => c.id === selectedChannel)?.type}</span>
//                     </div>
                    
//                     <div className="flex items-center justify-between">
//                       <span className="text-xs font-mono text-gray-500 uppercase">Connection:</span>
//                       <span className="font-mono text-xs text-green-400 glitch" data-text={glitchText}>
//                         {glitchText}
//                       </span>
//                     </div>
                    
//                     <div className="mt-3 pt-3 border-t border-green-500/20">
//                       <a 
//                         href={`https://${channels.find(c => c.id === selectedChannel)?.data}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-mono text-xs group"
//                       >
//                         ESTABLISH CONNECTION 
//                         <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Enhanced Message Transmitter */}
//             <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-6 relative overflow-hidden">
//               <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full filter blur-3xl" />
              
//               <h3 className="text-green-400 font-mono text-lg mb-4 flex items-center gap-2">
//                 <Zap className="w-5 h-5" />
//                 DIRECT TRANSMISSION
//               </h3>
              
//               <form onSubmit={handleFormSubmit} className="space-y-4">
//                 <div className="relative">
//                   <input
//                     type="text"
//                     placeholder="CALLSIGN"
//                     value={formData.name}
//                     onChange={(e) => setFormData({...formData, name: e.target.value})}
//                     className="w-full px-4 py-3 bg-black/40 border border-green-500/30 rounded text-green-400 placeholder-gray-500 font-mono text-sm focus:border-green-500/50 focus:outline-none transition-all"
//                     disabled={isTransmitting}
//                   />
//                   <div className={`absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${formData.name ? 'bg-green-400' : 'bg-gray-600'} transition-colors`} />
//                 </div>
                
//                 <div className="relative">
//                   <input
//                     type="email"
//                     placeholder="RETURN FREQUENCY"
//                     value={formData.email}
//                     onChange={(e) => setFormData({...formData, email: e.target.value})}
//                     className="w-full px-4 py-3 bg-black/40 border border-green-500/30 rounded text-green-400 placeholder-gray-500 font-mono text-sm focus:border-green-500/50 focus:outline-none transition-all"
//                     disabled={isTransmitting}
//                   />
//                   <div className={`absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${formData.email ? 'bg-green-400' : 'bg-gray-600'} transition-colors`} />
//                 </div>
                
//                 <div className="relative">
//                   <textarea
//                     placeholder="MESSAGE PAYLOAD..."
//                     rows={4}
//                     value={formData.message}
//                     onChange={(e) => setFormData({...formData, message: e.target.value})}
//                     className="w-full px-4 py-3 bg-black/40 border border-green-500/30 rounded text-green-400 placeholder-gray-500 font-mono text-sm focus:border-green-500/50 focus:outline-none transition-all resize-none"
//                     disabled={isTransmitting}
//                   />
//                   <div className={`absolute right-3 top-3 w-2 h-2 rounded-full ${formData.message ? 'bg-green-400' : 'bg-gray-600'} transition-colors`} />
//                   <div className="absolute bottom-2 right-3 text-xs font-mono text-gray-500">
//                     {formData.message.length}/500
//                   </div>
//                 </div>
                
//                 {/* Transmission progress */}
//                 {isTransmitting && (
//                   <div className="space-y-2">
//                     <div className="flex justify-between text-xs font-mono text-gray-400">
//                       <span>TRANSMITTING...</span>
//                       <span>{Math.floor(transmissionProgress)}%</span>
//                     </div>
//                     <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden">
//                       <div 
//                         className="h-full bg-green-400 rounded-full transition-all duration-300 relative"
//                         style={{ width: `${transmissionProgress}%` }}
//                       >
//                         <div className="absolute inset-0 bg-white/20 animate-pulse" />
//                       </div>
//                     </div>
//                   </div>
//                 )}
                
//                 <button
//                   type="submit"
//                   disabled={isTransmitting || !formData.name || !formData.email || !formData.message}
//                   className={`w-full py-3 font-mono font-semibold rounded transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden ${
//                     isTransmitting 
//                       ? 'bg-green-950/30 border border-green-500/30 text-gray-400 cursor-not-allowed' 
//                       : 'bg-green-400 text-black hover:bg-green-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-green-400/30'
//                   }`}
//                 >
//                   {isTransmitting ? (
//                     <>
//                       <Loader className="w-4 h-4 animate-spin" />
//                       TRANSMITTING... {Math.floor(transmissionProgress)}%
//                     </>
//                   ) : (
//                     <>
//                       <Send className="w-4 h-4" />
//                       INITIATE TRANSMISSION
//                     </>
//                   )}
                  
//                   {/* Button shine effect */}
//                   {!isTransmitting && (
//                     <div className="absolute inset-0 -top-full bg-gradient-to-b from-white/20 to-transparent transform skew-y-12 group-hover:translate-y-full transition-transform duration-700" />
//                   )}
//                 </button>
//               </form>
//             </div>

//             {/* Network Status Grid with visual effects */}
//             <div className="grid grid-cols-2 gap-4">
//               <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-4 relative overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent" />
//                 <div className="flex items-center justify-between mb-2 relative z-10">
//                   <Shield className="w-4 h-4 text-green-400" />
//                   <span className="text-xs font-mono text-gray-400">SECURITY</span>
//                 </div>
//                 <p className="text-green-400 font-mono text-sm relative z-10">AES-256</p>
//                 <div className="mt-2 flex gap-1 relative z-10">
//                   {[...Array(4)].map((_, i) => (
//                     <div 
//                       key={i} 
//                       className="flex-1 h-1 bg-green-400 rounded-full"
//                       style={{
//                         opacity: 0.8 + 0.2 * Math.sin(pulseWave + i),
//                         transform: `scaleX(${0.9 + 0.1 * Math.sin(pulseWave + i)})`
//                       }}
//                     />
//                   ))}
//                 </div>
//               </div>
              
//               <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-4 relative overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-bl from-green-500/5 to-transparent" />
//                 <div className="flex items-center justify-between mb-2 relative z-10">
//                   <Wifi className="w-4 h-4 text-green-400" />
//                   <span className="text-xs font-mono text-gray-400">BANDWIDTH</span>
//                 </div>
//                 <p className="text-green-400 font-mono text-sm relative z-10">1.21 GB/s</p>
//                 <div className="mt-2 h-1 bg-gray-700 rounded-full overflow-hidden relative z-10">
//                   <div 
//                     className="h-full bg-green-400 rounded-full animate-pulse" 
//                     style={{ 
//                       width: `${80 + 15 * Math.sin(pulseWave)}%`,
//                       transition: 'width 0.3s ease'
//                     }} 
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes stream {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(300%);
//           }
//         }

//         @keyframes slide {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(20px);
//           }
//         }

//         @keyframes rotate {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }

//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-in {
//           animation: fade-in 0.5s ease-out;
//         }

//         .signal-detected {
//           animation: detection-pulse 1s ease-out;
//         }

//         @keyframes detection-pulse {
//           0% {
//             transform: translate(-50%, -50%) scale(1);
//           }
//           50% {
//             transform: translate(-50%, -50%) scale(1.5);
//           }
//           100% {
//             transform: translate(-50%, -50%) scale(1);
//           }
//         }

//         .signal-bar {
//           width: 4px;
//           height: 14px;
//           border-radius: 2px;
//           transition: all 0.3s ease;
//           animation: audioWave 1s ease-in-out infinite;
//         }

//         @keyframes audioWave {
//           0%, 100% {
//             transform: scaleY(0.7);
//           }
//           50% {
//             transform: scaleY(1);
//           }
//         }

//         .glitch {
//           position: relative;
//           display: inline-block;
//         }

//         .glitch::before,
//         .glitch::after {
//           content: attr(data-text);
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//         }

//         .glitch::before {
//           animation: glitch-1 0.5s infinite;
//           color: #00ff41;
//           z-index: -1;
//           text-shadow: -2px 0 #ff00ff;
//         }

//         .glitch::after {
//           animation: glitch-2 0.5s infinite;
//           color: #00ffff;
//           z-index: -2;
//           text-shadow: 2px 0 #ffff00;
//         }

//         @keyframes glitch-1 {
//           0%, 100% {
//             clip: rect(42px, 9999px, 44px, 0);
//             transform: skew(0.5deg);
//           }
//           20% {
//             clip: rect(20px, 9999px, 30px, 0);
//             transform: skew(0.8deg);
//           }
//           40% {
//             clip: rect(60px, 9999px, 80px, 0);
//             transform: skew(0.2deg);
//           }
//           60% {
//             clip: rect(10px, 9999px, 90px, 0);
//             transform: skew(0.9deg);
//           }
//           80% {
//             clip: rect(50px, 9999px, 70px, 0);
//             transform: skew(0.3deg);
//           }
//         }

//         @keyframes glitch-2 {
//           0%, 100% {
//             clip: rect(65px, 9999px, 119px, 0);
//             transform: skew(-0.5deg);
//           }
//           20% {
//             clip: rect(30px, 9999px, 60px, 0);
//             transform: skew(-0.8deg);
//           }
//           40% {
//             clip: rect(80px, 9999px, 95px, 0);
//             transform: skew(-0.2deg);
//           }
//           60% {
//             clip: rect(25px, 9999px, 45px, 0);
//             transform: skew(-0.9deg);
//           }
//           80% {
//             clip: rect(70px, 9999px, 85px, 0);
//             transform: skew(-0.3deg);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }
































// app/contact/page.js
// 'use client';
// import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
// import { Send, Shield, Satellite, Radio, Wifi, Activity, Zap, Globe, Github, Linkedin, Twitter, Mail, MapPin, Clock, Lock, ChevronRight, Instagram, Facebook, Volume2, VolumeX, Loader, Sparkles, Binary, Cpu } from 'lucide-react';
// import { useTransition } from '../layout';
// import ScrambledText from '@/components/ScrambledText';

// // Memoized channel component to prevent unnecessary re-renders
// const ChannelSignal = React.memo(({ channel, x, y, isDetected, isActive, isHovered, strength, onSelect, onHover, onLeave, pulseWave }) => {
//   return (
//     <div
//       id={`signal-${channel.id}`}
//       className={`absolute w-14 h-14 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
//         isDetected ? 'opacity-100' : 'opacity-0'
//       }`}
//       style={{ 
//         left: `${x}%`, 
//         top: `${y}%`,
//         transform: `translate(-50%, -50%) scale(${isActive ? 1.3 : isHovered ? 1.15 : 1})`
//       }}
//       onClick={() => onSelect(channel.id)}
//       onMouseEnter={() => onHover(channel.id)}
//       onMouseLeave={onLeave}
//     >
//       {(isActive || strength > 50) && (
//         <>
//           <div 
//             className="absolute inset-0 rounded-full animate-ping"
//             style={{ 
//               backgroundColor: channel.glowColor,
//               opacity: 0.3,
//               animationDuration: '1.5s'
//             }} 
//           />
//           <div 
//             className="absolute inset-0 rounded-full animate-ping"
//             style={{ 
//               backgroundColor: channel.glowColor,
//               opacity: 0.2,
//               animationDuration: '2s',
//               animationDelay: '0.5s'
//             }} 
//           />
//           <div 
//             className="absolute inset-[-20px] rounded-full"
//             style={{
//               background: `conic-gradient(from ${pulseWave * 180 / Math.PI}deg, transparent, ${channel.glowColor}40, transparent)`,
//               animation: 'rotate 3s linear infinite'
//             }}
//           />
//         </>
//       )}
      
//       {strength > 0 && (
//         <div 
//           className="absolute inset-0 rounded-full"
//           style={{
//             background: `radial-gradient(circle, ${channel.glowColor}40 0%, transparent 70%)`,
//             transform: `scale(${1 + strength / 100})`,
//             filter: 'blur(2px)'
//           }}
//         />
//       )}
      
//       <div 
//         className="relative w-full h-full rounded-full border-2 flex items-center justify-center transition-all backdrop-blur-sm"
//         style={{ 
//           borderColor: isActive ? channel.glowColor : channel.color,
//           backgroundColor: isActive ? `${channel.color}30` : 'rgba(0,0,0,0.7)',
//           boxShadow: isActive ? `0 0 30px ${channel.glowColor}, inset 0 0 20px ${channel.glowColor}40` : 
//                     isHovered ? `0 0 20px ${channel.glowColor}60` : 'none'
//         }}
//       >
//         <channel.icon 
//           className="w-6 h-6 transition-all" 
//           style={{ 
//             color: isActive ? '#ffffff' : channel.color,
//             filter: isActive ? `drop-shadow(0 0 8px ${channel.glowColor})` : 'none'
//           }}
//         />
        
//         {isHovered && (
//           <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-0.5">
//             {[...Array(5)].map((_, i) => (
//               <div
//                 key={i}
//                 className="signal-bar"
//                 style={{
//                   backgroundColor: i < channel.strength / 20 ? channel.color : '#333',
//                   opacity: i < channel.strength / 20 ? 1 : 0.3,
//                   animationDelay: `${i * 0.1}s`
//                 }}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// });

// export default function ContactPage() {
//   const { isTransitioning } = useTransition();
//   const [activeSignal, setActiveSignal] = useState(null);
//   const [scanProgress, setScanProgress] = useState(0);
//   const [isScanning, setIsScanning] = useState(true); // Always keep scanning active
//   const [detectedSignals, setDetectedSignals] = useState([]);
//   const [selectedChannel, setSelectedChannel] = useState(null);
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [isTransmitting, setIsTransmitting] = useState(false);
//   const [transmissionProgress, setTransmissionProgress] = useState(0);
//   const [glitchText, setGlitchText] = useState('');
//   const [dataStream, setDataStream] = useState([]);
//   const [soundEnabled, setSoundEnabled] = useState(true);
//   const [signalStrength, setSignalStrength] = useState({});
//   const [interference, setInterference] = useState(0);
//   const [connectionQuality, setConnectionQuality] = useState(100);
//   const [hoveredSignal, setHoveredSignal] = useState(null);
//   const [particles, setParticles] = useState([]);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [energyField, setEnergyField] = useState([]);
//   const [pulseWave, setPulseWave] = useState(0);
  
//   const radarRef = useRef(null);
//   const audioContextRef = useRef(null);
//   const animationFrameRef = useRef(null);
//   const lastFrameTimeRef = useRef(0);
//   const mousePositionRef = useRef({ x: 0, y: 0 });

//   // Memoized channels data
//   const channels = useMemo(() => [
//     {
//       id: 'linkedin',
//       type: 'Professional Network',
//       frequency: '2.4GHz',
//       bandwidth: 'HIGH',
//       signal: 'STABLE',
//       strength: 95,
//       data: 'linkedin.com/in/rizwi',
//       icon: Linkedin,
//       position: { angle: 72, distance: 70 },
//       color: '#00ff41',
//       glowColor: '#00ff88',
//       description: 'Professional connections and career updates'
//     },
//     {
//       id: 'github',
//       type: 'Code Repository',
//       frequency: '5.0GHz',
//       bandwidth: 'ULTRA',
//       signal: 'ACTIVE',
//       strength: 98,
//       data: 'github.com/rizwi',
//       icon: Github,
//       position: { angle: 144, distance: 75 },
//       color: '#00ff41',
//       glowColor: '#00ff88',
//       description: 'Open source projects and code contributions'
//     },
//     {
//       id: 'twitter',
//       type: 'Micro Blog',
//       frequency: '3.6GHz',
//       bandwidth: 'MEDIUM',
//       signal: 'LIVE',
//       strength: 88,
//       data: 'twitter.com/rizwi_dev',
//       icon: Twitter,
//       position: { angle: 216, distance: 65 },
//       color: '#00ff41',
//       glowColor: '#00ff88',
//       description: 'Tech thoughts and real-time updates'
//     },
//     {
//       id: 'instagram',
//       type: 'Visual Stream',
//       frequency: '2.8GHz',
//       bandwidth: 'HIGH',
//       signal: 'STREAMING',
//       strength: 92,
//       data: 'instagram.com/rizwi.dev',
//       icon: Instagram,
//       position: { angle: 288, distance: 68 },
//       color: '#00ff41',
//       glowColor: '#00ff88',
//       description: 'Visual journey and creative moments'
//     },
//     {
//       id: 'facebook',
//       type: 'Social Hub',
//       frequency: '3.2GHz',
//       bandwidth: 'STANDARD',
//       signal: 'CONNECTED',
//       strength: 85,
//       data: 'facebook.com/rizwi.developer',
//       icon: Facebook,
//       position: { angle: 360, distance: 72 },
//       color: '#00ff41',
//       glowColor: '#00ff88',
//       description: 'Community engagement and updates'
//     }
//   ], []);

//   // Initialize particles with optimized data structure
//   useEffect(() => {
//     const particleCount = 100;
//     const newParticles = Array(particleCount).fill(null).map((_, i) => ({
//       id: i,
//       x: Math.random() * window.innerWidth,
//       y: Math.random() * window.innerHeight,
//       vx: (Math.random() - 0.5) * 0.5,
//       vy: (Math.random() - 0.5) * 0.5,
//       size: Math.random() * 3 + 1,
//       opacity: Math.random() * 0.5 + 0.2,
//       pulseSpeed: Math.random() * 0.02 + 0.01,
//       pulsePhase: Math.random() * Math.PI * 2,
//       color: Math.random() > 0.8 ? '#00ff41' : '#00ff8850',
//       gridX: 0,
//       gridY: 0
//     }));
//     setParticles(newParticles);

//     // Initialize energy field
//     const fieldPoints = Array(20).fill(null).map(() => ({
//       x: Math.random() * window.innerWidth,
//       y: Math.random() * window.innerHeight,
//       radius: Math.random() * 100 + 50,
//       intensity: Math.random() * 0.5 + 0.5,
//       pulseSpeed: Math.random() * 0.02 + 0.01,
//       color: Math.random() > 0.5 ? '#00ff41' : '#00ff88'
//     }));
//     setEnergyField(fieldPoints);
//   }, []);

//   // Optimized mouse tracking with ref
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       mousePositionRef.current = { x: e.clientX, y: e.clientY };
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   // Initialize audio context
//   useEffect(() => {
//     if (typeof window !== 'undefined' && window.AudioContext) {
//       audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
//     }
//   }, []);

//   // Unified animation loop using requestAnimationFrame
//   useEffect(() => {
//     let scanLastUpdate = 0;
//     let pulseLastUpdate = 0;
//     let particleLastUpdate = 0;
//     let dataStreamLastUpdate = 0;
//     let connectionQualityLastUpdate = 0;
    
//     const animate = (currentTime) => {
//       // Particle animation (60 FPS)
//       if (currentTime - particleLastUpdate > 16) {
//         setParticles(prevParticles => {
//           // Create spatial grid for optimization
//           const gridSize = 100;
//           const grid = {};
          
//           // First pass: assign particles to grid cells
//           prevParticles.forEach(particle => {
//             particle.gridX = Math.floor(particle.x / gridSize);
//             particle.gridY = Math.floor(particle.y / gridSize);
//             const key = `${particle.gridX},${particle.gridY}`;
//             if (!grid[key]) grid[key] = [];
//             grid[key].push(particle);
//           });
          
//           return prevParticles.map(particle => {
//             const newParticle = { ...particle };
            
//             // Mouse influence
//             const dx = mousePositionRef.current.x - particle.x;
//             const dy = mousePositionRef.current.y - particle.y;
//             const distance = Math.sqrt(dx * dx + dy * dy);
//             const maxDistance = 150;
            
//             if (distance < maxDistance) {
//               const force = (1 - distance / maxDistance) * 0.1;
//               newParticle.vx += (dx / distance) * force;
//               newParticle.vy += (dy / distance) * force;
//             }

//             // Update position
//             newParticle.x += newParticle.vx;
//             newParticle.y += newParticle.vy;

//             // Damping
//             newParticle.vx *= 0.98;
//             newParticle.vy *= 0.98;

//             // Boundary check
//             if (newParticle.x < 0 || newParticle.x > window.innerWidth) newParticle.vx *= -1;
//             if (newParticle.y < 0 || newParticle.y > window.innerHeight) newParticle.vy *= -1;

//             // Find nearby particles using spatial grid
//             const nearbyParticles = [];
//             for (let gx = particle.gridX - 1; gx <= particle.gridX + 1; gx++) {
//               for (let gy = particle.gridY - 1; gy <= particle.gridY + 1; gy++) {
//                 const key = `${gx},${gy}`;
//                 if (grid[key]) {
//                   grid[key].forEach(other => {
//                     if (other.id !== particle.id) {
//                       const dist = Math.sqrt(
//                         Math.pow(particle.x - other.x, 2) + 
//                         Math.pow(particle.y - other.y, 2)
//                       );
//                       if (dist < 100) {
//                         nearbyParticles.push(other);
//                       }
//                     }
//                   });
//                 }
//               }
//             }
            
//             newParticle.connections = nearbyParticles.slice(0, 3);
//             return newParticle;
//           });
//         });
//         particleLastUpdate = currentTime;
//       }
      
//       // Pulse wave animation (20 FPS)
//       if (currentTime - pulseLastUpdate > 50) {
//         setPulseWave(prev => (prev + 0.05) % (Math.PI * 2));
//         pulseLastUpdate = currentTime;
//       }
      
//       // Radar scanning (40 FPS) - Always active
//       if (currentTime - scanLastUpdate > 25) {
//         setScanProgress(prev => {
//           const next = (prev + 1.5) % 360;
          
//           // Random interference
//           if (Math.random() > 0.98) {
//             setInterference(Math.random() * 30 + 70);
//             setTimeout(() => setInterference(0), 300);
//           }
          
//           // Check for signal detection
//           channels.forEach(channel => {
//             const diff = Math.abs(next - channel.position.angle);
//             const proximity = Math.min(diff, 360 - diff);
            
//             if (proximity < 30) {
//               const strength = channel.strength * (1 - proximity / 30);
//               setSignalStrength(prev => ({ ...prev, [channel.id]: strength }));
//             }
            
//             if (proximity < 3) {
//               setDetectedSignals(prev => {
//                 if (!prev.includes(channel.id)) {
//                   if (soundEnabled) playRadarPing(channel.position.distance);
                  
//                   const el = document.getElementById(`signal-${channel.id}`);
//                   if (el) {
//                     el.classList.add('signal-detected');
//                     setTimeout(() => el.classList.remove('signal-detected'), 1000);
//                   }
                  
//                   return [...prev, channel.id];
//                 }
//                 return prev;
//               });
//             }
//           });
          
//           // Don't stop scanning - keep rotating continuously
//           return next;
//         });
//         scanLastUpdate = currentTime;
//       }
      
//       // Data stream animation (6.67 FPS)
//       if (currentTime - dataStreamLastUpdate > 150) {
//         const patterns = [
//           '◊◊◊◊◊◊◊◊◊◊',
//           '▓▒░▒▓▒░▒▓▒',
//           '⟨⟨⟨⟨⟨⟨⟨⟨⟨⟨',
//           '∆∇∆∇∆∇∆∇∆∇',
//           '○●○●○●○●○●',
//           '⊕⊗⊕⊗⊕⊗⊕⊗⊕⊗',
//           '▪▫▪▫▪▫▪▫▪▫',
//           '█▄▀█▄▀█▄▀█'
//         ];
        
//         const usePattern = Math.random() > 0.7;
//         const newLine = usePattern 
//           ? patterns[Math.floor(Math.random() * patterns.length)].repeat(5)
//           : Array.from({ length: 50 }, () => {
//               const chars = '01⟨⟩∅∆∇∂∫∑∏⊕⊗⊙√∞≈≠≤≥∈∉⊆⊇∪∩░▒▓█';
//               return chars[Math.floor(Math.random() * chars.length)];
//             }).join('');
        
//         setDataStream(prev => [...prev.slice(-14), newLine]);
//         dataStreamLastUpdate = currentTime;
//       }
      
//       // Connection quality (1 FPS)
//       if (currentTime - connectionQualityLastUpdate > 1000) {
//         setConnectionQuality(prev => {
//           const change = (Math.random() - 0.5) * 10;
//           return Math.max(85, Math.min(100, prev + change));
//         });
//         connectionQualityLastUpdate = currentTime;
//       }
      
//       animationFrameRef.current = requestAnimationFrame(animate);
//     };
    
//     animationFrameRef.current = requestAnimationFrame(animate);
    
//     return () => {
//       if (animationFrameRef.current) {
//         cancelAnimationFrame(animationFrameRef.current);
//       }
//     };
//   }, [channels, soundEnabled]);

//   // Memoized glitch effect
//   useEffect(() => {
//     if (selectedChannel) {
//       const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?█▓▒░╚═╩╦╠╬╣╗╝┤┐└┴┬├─┼';
//       let iterations = 0;
      
//       const channel = channels.find(c => c.id === selectedChannel);
//       if (!channel) return;
      
//       const glitchInterval = setInterval(() => {
//         setGlitchText(
//           channel.data
//             .split('')
//             .map((char, index) => {
//               if (index < iterations) return char;
//               if (Math.random() > 0.8 && iterations > index - 3) {
//                 return channel.data[index];
//               }
//               return glitchChars[Math.floor(Math.random() * glitchChars.length)];
//             })
//             .join('')
//         );
        
//         iterations += 0.5;
//         if (iterations > channel.data.length + 2) {
//           clearInterval(glitchInterval);
//           setGlitchText(channel.data);
//         }
//       }, 40);
      
//       return () => clearInterval(glitchInterval);
//     }
//   }, [selectedChannel, channels]);

//   const playRadarPing = useCallback((distance) => {
//     if (audioContextRef.current && soundEnabled) {
//       const oscillator = audioContextRef.current.createOscillator();
//       const gainNode = audioContextRef.current.createGain();
//       const filter = audioContextRef.current.createBiquadFilter();
      
//       oscillator.connect(filter);
//       filter.connect(gainNode);
//       gainNode.connect(audioContextRef.current.destination);
      
//       filter.type = 'bandpass';
//       filter.frequency.value = 800 + (distance * 10);
      
//       oscillator.frequency.value = 1200 - (distance * 5);
//       gainNode.gain.setValueAtTime(0.15, audioContextRef.current.currentTime);
//       gainNode.gain.exponentialRampToValueAtTime(0.01, audioContextRef.current.currentTime + 0.2);
      
//       oscillator.start(audioContextRef.current.currentTime);
//       oscillator.stop(audioContextRef.current.currentTime + 0.2);
//     }
//   }, [soundEnabled]);

//   const handleChannelSelect = useCallback((channelId) => {
//     setSelectedChannel(channelId);
//     setActiveSignal(channelId);
//     if (soundEnabled) playRadarPing(50);
    
//     const channel = channels.find(c => c.id === channelId);
//     if (channel) {
//       setConnectionQuality(channel.strength);
//     }
//   }, [soundEnabled, playRadarPing, channels]);

//   const handleFormSubmit = useCallback((e) => {
//     e.preventDefault();
//     if (!formData.name || !formData.email || !formData.message) return;

//     setIsTransmitting(true);
//     setTransmissionProgress(0);
    
//     const progressInterval = setInterval(() => {
//       setTransmissionProgress(prev => {
//         if (prev >= 100) {
//           clearInterval(progressInterval);
//           setTimeout(() => {
//             setIsTransmitting(false);
//             setFormData({ name: '', email: '', message: '' });
//             setTransmissionProgress(0);
//           }, 500);
//           return 100;
//         }
//         return prev + Math.random() * 15 + 5;
//       });
//     }, 200);
//   }, [formData]);

//   const handleHoverSignal = useCallback((id) => setHoveredSignal(id), []);
//   const handleLeaveSignal = useCallback(() => setHoveredSignal(null), []);

//   // Memoized particle connections for rendering
//   const particleConnections = useMemo(() => {
//     const connections = [];
//     particles.forEach((particle, i) => {
//       if (particle.connections) {
//         particle.connections.forEach((connected, j) => {
//           const distance = Math.sqrt(
//             Math.pow(particle.x - connected.x, 2) + 
//             Math.pow(particle.y - connected.y, 2)
//           );
//           const opacity = (1 - distance / 100) * 0.3;
          
//           connections.push({
//             key: `${i}-${j}`,
//             x1: particle.x,
//             y1: particle.y,
//             x2: connected.x,
//             y2: connected.y,
//             opacity
//           });
//         });
//       }
//     });
//     return connections;
//   }, [particles]);

//   return (
//     <div className="min-h-screen pt-24 sm:pt-32 px-4 sm:px-6 relative overflow-hidden">
//       {/* Enhanced animated background */}
//       <div className="fixed inset-0 z-0">
//         <div className="absolute inset-0 bg-gradient-to-br from-black via-green-950/10 to-black" />
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,65,0.1)_0%,transparent_70%)]" />
        
//         {/* Animated grid with perspective */}
//         <div className="absolute inset-0 opacity-10" style={{
//           backgroundImage: `linear-gradient(rgba(0,255,65,0.3) 1px, transparent 1px),
//                            linear-gradient(90deg, rgba(0,255,65,0.3) 1px, transparent 1px)`,
//           backgroundSize: '50px 50px',
//           transform: 'perspective(500px) rotateX(60deg) translateY(-50%)',
//           transformOrigin: 'center'
//         }} />

//         {/* Energy field visualization */}
//         {energyField.map((field, i) => (
//           <div
//             key={i}
//             className="absolute rounded-full"
//             style={{
//               left: field.x,
//               top: field.y,
//               width: field.radius * 2,
//               height: field.radius * 2,
//               transform: 'translate(-50%, -50%)',
//               background: `radial-gradient(circle, ${field.color}10 0%, transparent 70%)`,
//               opacity: field.intensity * (0.5 + 0.5 * Math.sin(pulseWave + i)),
//               filter: 'blur(30px)',
//               pointerEvents: 'none'
//             }}
//           />
//         ))}
//       </div>

//       {/* Particle system */}
//       <svg className="fixed inset-0 z-0 pointer-events-none" style={{ width: '100%', height: '100%' }}>
//         {/* Particle connections */}
//         {particleConnections.map(conn => (
//           <line
//             key={conn.key}
//             x1={conn.x1}
//             y1={conn.y1}
//             x2={conn.x2}
//             y2={conn.y2}
//             stroke="#00ff41"
//             strokeWidth="0.5"
//             opacity={conn.opacity}
//           />
//         ))}
        
//         {/* Particles */}
//         {particles.map((particle) => (
//           <circle
//             key={particle.id}
//             cx={particle.x}
//             cy={particle.y}
//             r={particle.size * (1 + 0.3 * Math.sin(pulseWave + particle.pulsePhase))}
//             fill={particle.color}
//             opacity={particle.opacity}
//           >
//             <animate
//               attributeName="opacity"
//               values={`${particle.opacity};${particle.opacity * 0.5};${particle.opacity}`}
//               dur="3s"
//               repeatCount="indefinite"
//             />
//           </circle>
//         ))}
//       </svg>

//       {/* Enhanced data streams */}
//       <div className="fixed inset-0 z-0 opacity-[0.03] font-mono text-green-400 text-xs overflow-hidden">
//         {dataStream.map((line, i) => (
//           <div 
//             key={i} 
//             className="absolute whitespace-nowrap"
//             style={{ 
//               top: `${i * 6.66}%`,
//               left: '-100%',
//               animation: `stream ${15 + i * 1.5}s linear infinite`,
//               animationDelay: `${i * 0.3}s`,
//               filter: i % 3 === 0 ? 'blur(1px)' : 'none',
//               opacity: 1 - (i * 0.05)
//             }}
//           >
//             {line}
//           </div>
//         ))}
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header - Left aligned like other pages */}
//         <div className="mb-8">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-green-400 mb-4">
//             <span className="text-gray-400">&gt;</span> <ScrambledText text="SIGNAL_DETECTION.SYS" />
//           </h2>
//           <div className="flex items-center gap-4 text-gray-400 font-mono text-sm">
//             <span className="flex items-center gap-2">
//               <Activity className="w-4 h-4 text-green-400 animate-pulse" />
//               SCANNING
//             </span>
//             <span className="text-green-400">◈</span>
//             <span className="flex items-center gap-2">
//               <Radio className="w-4 h-4 text-green-400" />
//               {detectedSignals.length}/{channels.length} CHANNELS
//             </span>
//             <span className="text-green-400">◈</span>
//             <button
//               onClick={() => setSoundEnabled(!soundEnabled)}
//               className="flex items-center gap-2 hover:text-green-400 transition-colors"
//             >
//               {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
//               AUDIO
//             </button>
//             <span className="text-green-400">◈</span>
//             <span className="flex items-center gap-2">
//               <Sparkles className="w-4 h-4 text-green-400 animate-pulse" />
//               QUANTUM FIELD ACTIVE
//             </span>
//           </div>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-8">
//           {/* Enhanced Radar Interface with Constellation */}
//           <div className="relative">
//             <div className="relative w-full max-w-[500px] mx-auto aspect-square" ref={radarRef}>
//               {/* Radar background effects */}
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent rounded-full animate-pulse" />
              
//               {/* Radar SVG */}
//               <svg className="absolute inset-0 w-full h-full">
//                 {/* Grid lines */}
//                 {[30, 60, 90, 120, 150].map(angle => (
//                   <line
//                     key={angle}
//                     x1="50%"
//                     y1="50%"
//                     x2={`${50 + 40 * Math.cos((angle - 90) * Math.PI / 180)}%`}
//                     y2={`${50 + 40 * Math.sin((angle - 90) * Math.PI / 180)}%`}
//                     stroke="#00ff41"
//                     strokeWidth="0.5"
//                     opacity="0.1"
//                   />
//                 ))}
                
//                 {/* Concentric circles with labels */}
//                 {[20, 40, 60, 80].map((radius, i) => (
//                   <g key={radius}>
//                     <circle 
//                       cx="50%" 
//                       cy="50%" 
//                       r={`${radius}%`} 
//                       fill="none" 
//                       stroke="#00ff41" 
//                       strokeWidth="1" 
//                       opacity={0.2 - i * 0.03}
//                       strokeDasharray={i % 2 === 0 ? "5,5" : "none"}
//                     />
//                     <text
//                       x="50%"
//                       y={`${50 - radius + 2}%`}
//                       textAnchor="middle"
//                       fill="#00ff41"
//                       fontSize="10"
//                       opacity="0.3"
//                     >
//                       {radius}km
//                     </text>
//                   </g>
//                 ))}
                
//                 {/* Cross lines */}
//                 <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#00ff41" strokeWidth="1" opacity="0.15" />
//                 <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#00ff41" strokeWidth="1" opacity="0.15" />
                
//                 {/* Interference effect */}
//                 {interference > 0 && (
//                   <circle
//                     cx="50%"
//                     cy="50%"
//                     r={`${interference}%`}
//                     fill="none"
//                     stroke="#ff0000"
//                     strokeWidth="2"
//                     opacity={interference / 100}
//                     strokeDasharray="2,4"
//                   >
//                     <animate
//                       attributeName="r"
//                       values={`${interference}%;${interference + 10}%;${interference}%`}
//                       dur="0.3s"
//                       repeatCount="indefinite"
//                     />
//                   </circle>
//                 )}
                
//                 {/* Enhanced scanning line - Always active */}
//                 <>
//                   <line
//                     x1="50%"
//                     y1="50%"
//                     x2={`${50 + 40 * Math.cos((scanProgress - 90) * Math.PI / 180)}%`}
//                     y2={`${50 + 40 * Math.sin((scanProgress - 90) * Math.PI / 180)}%`}
//                     stroke="#00ff41"
//                     strokeWidth="2"
//                     opacity="0.8"
//                     filter="url(#glow)"
//                   />
                  
//                   {/* Scan trail with gradient */}
//                   {Array.from({ length: 60 }, (_, i) => (
//                     <line
//                       key={i}
//                       x1="50%"
//                       y1="50%"
//                       x2={`${50 + 40 * Math.cos(((scanProgress - i * 1.5) - 90) * Math.PI / 180)}%`}
//                       y2={`${50 + 40 * Math.sin(((scanProgress - i * 1.5) - 90) * Math.PI / 180)}%`}
//                       stroke="#00ff41"
//                       strokeWidth="1"
//                       opacity={0.5 - (i * 0.008)}
//                     />
//                   ))}
//                 </>
                
//                 {/* SVG Filters */}
//                 <defs>
//                   <filter id="glow">
//                     <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
//                     <feMerge>
//                       <feMergeNode in="coloredBlur"/>
//                       <feMergeNode in="SourceGraphic"/>
//                     </feMerge>
//                   </filter>
//                   <filter id="turbulence">
//                     <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="turbulence"/>
//                     <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="2" xChannelSelector="R" yChannelSelector="G"/>
//                   </filter>
//                 </defs>
//               </svg>
              
//               {/* Enhanced signal points with quantum effects */}
//               {channels.map(channel => {
//                 const x = 50 + (channel.position.distance * 0.4) * Math.cos((channel.position.angle - 90) * Math.PI / 180);
//                 const y = 50 + (channel.position.distance * 0.4) * Math.sin((channel.position.angle - 90) * Math.PI / 180);
//                 const isDetected = detectedSignals.includes(channel.id);
//                 const isActive = activeSignal === channel.id;
//                 const isHovered = hoveredSignal === channel.id;
//                 const strength = signalStrength[channel.id] || 0;
                
//                 return (
//                   <ChannelSignal
//                     key={channel.id}
//                     channel={channel}
//                     x={x}
//                     y={y}
//                     isDetected={isDetected}
//                     isActive={isActive}
//                     isHovered={isHovered}
//                     strength={strength}
//                     onSelect={handleChannelSelect}
//                     onHover={handleHoverSignal}
//                     onLeave={handleLeaveSignal}
//                     pulseWave={pulseWave}
//                   />
//                 );
//               })}
              
//               {/* Center beacon with quantum core */}
//               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//                 <div className="w-6 h-6 bg-green-400 rounded-full animate-pulse relative">
//                   <div className="absolute inset-0 bg-green-400 rounded-full animate-ping" />
//                   <div className="absolute inset-[-4px] border-2 border-green-400 rounded-full opacity-50" />
//                   {/* Quantum core effect */}
//                   <div className="absolute inset-[-10px] rounded-full" style={{
//                     background: `radial-gradient(circle, transparent 30%, ${Math.sin(pulseWave) > 0 ? '#00ff41' : '#00ff88'}20 50%, transparent 70%)`,
//                     animation: 'rotate 4s linear infinite reverse'
//                   }} />
//                 </div>
//               </div>
//             </div>
            
//             {/* Control buttons and status indicators */}
//             <div className="mt-6 space-y-4">
//               <div className="flex gap-2">
//                 <button
//                   onClick={() => {
//                     setDetectedSignals([]);
//                     setScanProgress(0);
//                   }}
//                   className="flex-1 py-2 px-4 rounded font-mono text-xs transition-all bg-green-500/20 border border-green-500/40 text-green-400 hover:bg-green-500/30 hover:border-green-500/60"
//                 >
//                   RESET SCAN
//                 </button>
                
//                 <button
//                   onClick={() => {
//                     setSelectedChannel(null);
//                     setActiveSignal(null);
//                   }}
//                   className="px-4 py-2 bg-red-500/20 border border-red-500/40 text-red-400 rounded font-mono text-xs hover:bg-red-500/30 hover:border-red-500/60 transition-all"
//                 >
//                   CLEAR
//                 </button>
//               </div>
              
//               {/* Status indicators */}
//               <div className="flex justify-center gap-4 text-xs font-mono">
//                 <div className="flex items-center gap-2">
//                   <Satellite className="w-4 h-4 text-green-400 animate-pulse" />
//                   <span className="text-gray-400">SCANNING: ACTIVE</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Radio className="w-4 h-4 text-green-400" />
//                   <span className="text-gray-400">SIGNALS: {detectedSignals.length}/{channels.length}</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Information Panel */}
//           <div className="space-y-6">
//             {/* Selected Channel Info - Reduced height and content */}
//             {selectedChannel && (
//               <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-4 animate-fade-in relative overflow-hidden">
//                 {/* Animated background pattern */}
//                 <div className="absolute inset-0 opacity-5">
//                   <div className="absolute inset-0" style={{
//                     backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,255,65,0.1) 10px, rgba(0,255,65,0.1) 20px)`,
//                     animation: 'slide 20s linear infinite'
//                   }} />
//                 </div>
                
//                 <div className="relative z-10">
//                   <div className="flex items-center justify-between mb-3">
//                     <h3 className="text-green-400 font-mono text-sm flex items-center gap-2">
//                       <Activity className="w-4 h-4 animate-pulse" />
//                       CHANNEL LOCKED
//                     </h3>
//                     <span className="text-xs font-mono text-green-400 px-2 py-1 bg-green-500/10 rounded">
//                       {channels.find(c => c.id === selectedChannel)?.frequency}
//                     </span>
//                   </div>
                  
//                   <div className="space-y-2">
//                     <div className="flex items-center justify-between">
//                       <span className="text-xs font-mono text-gray-500 uppercase">Platform:</span>
//                       <span className="font-mono text-xs text-green-400">{channels.find(c => c.id === selectedChannel)?.type}</span>
//                     </div>
                    
//                     <div className="flex items-center justify-between">
//                       <span className="text-xs font-mono text-gray-500 uppercase">Connection:</span>
//                       <span className="font-mono text-xs text-green-400 glitch" data-text={glitchText}>
//                         {glitchText}
//                       </span>
//                     </div>
                    
//                     <div className="mt-3 pt-3 border-t border-green-500/20">
//                       <a 
//                         href={`https://${channels.find(c => c.id === selectedChannel)?.data}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-mono text-xs group"
//                       >
//                         ESTABLISH CONNECTION 
//                         <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Enhanced Message Transmitter */}
//             <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-6 relative overflow-hidden">
//               <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full filter blur-3xl" />
              
//               <h3 className="text-green-400 font-mono text-lg mb-4 flex items-center gap-2">
//                 <Zap className="w-5 h-5" />
//                 DIRECT TRANSMISSION
//               </h3>
              
//               <form onSubmit={handleFormSubmit} className="space-y-4">
//                 <div className="relative">
//                   <input
//                     type="text"
//                     placeholder="CALLSIGN"
//                     value={formData.name}
//                     onChange={(e) => setFormData({...formData, name: e.target.value})}
//                     className="w-full px-4 py-3 bg-black/40 border border-green-500/30 rounded text-green-400 placeholder-gray-500 font-mono text-sm focus:border-green-500/50 focus:outline-none transition-all"
//                     disabled={isTransmitting}
//                   />
//                   <div className={`absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${formData.name ? 'bg-green-400' : 'bg-gray-600'} transition-colors`} />
//                 </div>
                
//                 <div className="relative">
//                   <input
//                     type="email"
//                     placeholder="RETURN FREQUENCY"
//                     value={formData.email}
//                     onChange={(e) => setFormData({...formData, email: e.target.value})}
//                     className="w-full px-4 py-3 bg-black/40 border border-green-500/30 rounded text-green-400 placeholder-gray-500 font-mono text-sm focus:border-green-500/50 focus:outline-none transition-all"
//                     disabled={isTransmitting}
//                   />
//                   <div className={`absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${formData.email ? 'bg-green-400' : 'bg-gray-600'} transition-colors`} />
//                 </div>
                
//                 <div className="relative">
//                   <textarea
//                     placeholder="MESSAGE PAYLOAD..."
//                     rows={4}
//                     value={formData.message}
//                     onChange={(e) => setFormData({...formData, message: e.target.value})}
//                     className="w-full px-4 py-3 bg-black/40 border border-green-500/30 rounded text-green-400 placeholder-gray-500 font-mono text-sm focus:border-green-500/50 focus:outline-none transition-all resize-none"
//                     disabled={isTransmitting}
//                   />
//                   <div className={`absolute right-3 top-3 w-2 h-2 rounded-full ${formData.message ? 'bg-green-400' : 'bg-gray-600'} transition-colors`} />
//                   <div className="absolute bottom-2 right-3 text-xs font-mono text-gray-500">
//                     {formData.message.length}/500
//                   </div>
//                 </div>
                
//                 {/* Transmission progress */}
//                 {isTransmitting && (
//                   <div className="space-y-2">
//                     <div className="flex justify-between text-xs font-mono text-gray-400">
//                       <span>TRANSMITTING...</span>
//                       <span>{Math.floor(transmissionProgress)}%</span>
//                     </div>
//                     <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden">
//                       <div 
//                         className="h-full bg-green-400 rounded-full transition-all duration-300 relative"
//                         style={{ width: `${transmissionProgress}%` }}
//                       >
//                         <div className="absolute inset-0 bg-white/20 animate-pulse" />
//                       </div>
//                     </div>
//                   </div>
//                 )}
                
//                 <button
//                   type="submit"
//                   disabled={isTransmitting || !formData.name || !formData.email || !formData.message}
//                   className={`w-full py-3 font-mono font-semibold rounded transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden ${
//                     isTransmitting 
//                       ? 'bg-green-950/30 border border-green-500/30 text-gray-400 cursor-not-allowed' 
//                       : 'bg-green-400 text-black hover:bg-green-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-green-400/30'
//                   }`}
//                 >
//                   {isTransmitting ? (
//                     <>
//                       <Loader className="w-4 h-4 animate-spin" />
//                       TRANSMITTING... {Math.floor(transmissionProgress)}%
//                     </>
//                   ) : (
//                     <>
//                       <Send className="w-4 h-4" />
//                       INITIATE TRANSMISSION
//                     </>
//                   )}
                  
//                   {/* Button shine effect */}
//                   {!isTransmitting && (
//                     <div className="absolute inset-0 -top-full bg-gradient-to-b from-white/20 to-transparent transform skew-y-12 group-hover:translate-y-full transition-transform duration-700" />
//                   )}
//                 </button>
//               </form>
//             </div>

//             {/* Network Status Grid with visual effects */}
//             <div className="grid grid-cols-2 gap-4">
//               <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-4 relative overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent" />
//                 <div className="flex items-center justify-between mb-2 relative z-10">
//                   <Shield className="w-4 h-4 text-green-400" />
//                   <span className="text-xs font-mono text-gray-400">SECURITY</span>
//                 </div>
//                 <p className="text-green-400 font-mono text-sm relative z-10">AES-256</p>
//                 <div className="mt-2 flex gap-1 relative z-10">
//                   {[...Array(4)].map((_, i) => (
//                     <div 
//                       key={i} 
//                       className="flex-1 h-1 bg-green-400 rounded-full"
//                       style={{
//                         opacity: 0.8 + 0.2 * Math.sin(pulseWave + i),
//                         transform: `scaleX(${0.9 + 0.1 * Math.sin(pulseWave + i)})`
//                       }}
//                     />
//                   ))}
//                 </div>
//               </div>
              
//               <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-4 relative overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-bl from-green-500/5 to-transparent" />
//                 <div className="flex items-center justify-between mb-2 relative z-10">
//                   <Wifi className="w-4 h-4 text-green-400" />
//                   <span className="text-xs font-mono text-gray-400">BANDWIDTH</span>
//                 </div>
//                 <p className="text-green-400 font-mono text-sm relative z-10">1.21 GB/s</p>
//                 <div className="mt-2 h-1 bg-gray-700 rounded-full overflow-hidden relative z-10">
//                   <div 
//                     className="h-full bg-green-400 rounded-full animate-pulse" 
//                     style={{ 
//                       width: `${80 + 15 * Math.sin(pulseWave)}%`,
//                       transition: 'width 0.3s ease'
//                     }} 
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes stream {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(300%);
//           }
//         }

//         @keyframes slide {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(20px);
//           }
//         }

//         @keyframes rotate {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }

//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-in {
//           animation: fade-in 0.5s ease-out;
//         }

//         .signal-detected {
//           animation: detection-pulse 1s ease-out;
//         }

//         @keyframes detection-pulse {
//           0% {
//             transform: translate(-50%, -50%) scale(1);
//           }
//           50% {
//             transform: translate(-50%, -50%) scale(1.5);
//           }
//           100% {
//             transform: translate(-50%, -50%) scale(1);
//           }
//         }

//         .signal-bar {
//           width: 4px;
//           height: 14px;
//           border-radius: 2px;
//           transition: all 0.3s ease;
//           animation: audioWave 1s ease-in-out infinite;
//         }

//         @keyframes audioWave {
//           0%, 100% {
//             transform: scaleY(0.7);
//           }
//           50% {
//             transform: scaleY(1);
//           }
//         }

//         .glitch {
//           position: relative;
//           display: inline-block;
//         }

//         .glitch::before,
//         .glitch::after {
//           content: attr(data-text);
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//         }

//         .glitch::before {
//           animation: glitch-1 0.5s infinite;
//           color: #00ff41;
//           z-index: -1;
//           text-shadow: -2px 0 #ff00ff;
//         }

//         .glitch::after {
//           animation: glitch-2 0.5s infinite;
//           color: #00ffff;
//           z-index: -2;
//           text-shadow: 2px 0 #ffff00;
//         }

//         @keyframes glitch-1 {
//           0%, 100% {
//             clip: rect(42px, 9999px, 44px, 0);
//             transform: skew(0.5deg);
//           }
//           20% {
//             clip: rect(20px, 9999px, 30px, 0);
//             transform: skew(0.8deg);
//           }
//           40% {
//             clip: rect(60px, 9999px, 80px, 0);
//             transform: skew(0.2deg);
//           }
//           60% {
//             clip: rect(10px, 9999px, 90px, 0);
//             transform: skew(0.9deg);
//           }
//           80% {
//             clip: rect(50px, 9999px, 70px, 0);
//             transform: skew(0.3deg);
//           }
//         }

//         @keyframes glitch-2 {
//           0%, 100% {
//             clip: rect(65px, 9999px, 119px, 0);
//             transform: skew(-0.5deg);
//           }
//           20% {
//             clip: rect(30px, 9999px, 60px, 0);
//             transform: skew(-0.8deg);
//           }
//           40% {
//             clip: rect(80px, 9999px, 95px, 0);
//             transform: skew(-0.2deg);
//           }
//           60% {
//             clip: rect(25px, 9999px, 45px, 0);
//             transform: skew(-0.9deg);
//           }
//           80% {
//             clip: rect(70px, 9999px, 85px, 0);
//             transform: skew(-0.3deg);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }
































// v10 
// app/contact/page.js
// 'use client';
// import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
// import { Send, Satellite, Radio, Activity, Zap, Github, Linkedin, Twitter, ChevronRight, Instagram, Facebook, Loader, Sparkles } from 'lucide-react';
// import { useTransition } from '../layout';
// import ScrambledText from '@/components/ScrambledText';

// // Memoized channel component to prevent unnecessary re-renders
// const ChannelSignal = React.memo(({ channel, x, y, isDetected, isActive, isHovered, strength, onSelect, onHover, onLeave, pulseWave }) => {
//   return (
//     <div
//       id={`signal-${channel.id}`}
//       className={`absolute w-14 h-14 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
//         isDetected ? 'opacity-100' : 'opacity-0'
//       }`}
//       style={{ 
//         left: `${x}%`, 
//         top: `${y}%`,
//         transform: `translate(-50%, -50%) scale(${isActive ? 1.3 : isHovered ? 1.15 : 1})`
//       }}
//       onClick={() => onSelect(channel.id)}
//       onMouseEnter={() => onHover(channel.id)}
//       onMouseLeave={onLeave}
//     >
//       {(isActive || strength > 50) && (
//         <>
//           <div 
//             className="absolute inset-0 rounded-full animate-ping"
//             style={{ 
//               backgroundColor: channel.glowColor,
//               opacity: 0.3,
//               animationDuration: '1.5s'
//             }} 
//           />
//           <div 
//             className="absolute inset-0 rounded-full animate-ping"
//             style={{ 
//               backgroundColor: channel.glowColor,
//               opacity: 0.2,
//               animationDuration: '2s',
//               animationDelay: '0.5s'
//             }} 
//           />
//           <div 
//             className="absolute inset-[-20px] rounded-full"
//             style={{
//               background: `conic-gradient(from ${pulseWave * 180 / Math.PI}deg, transparent, ${channel.glowColor}40, transparent)`,
//               animation: 'rotate 3s linear infinite'
//             }}
//           />
//         </>
//       )}
      
//       {strength > 0 && (
//         <div 
//           className="absolute inset-0 rounded-full"
//           style={{
//             background: `radial-gradient(circle, ${channel.glowColor}40 0%, transparent 70%)`,
//             transform: `scale(${1 + strength / 100})`,
//             filter: 'blur(2px)'
//           }}
//         />
//       )}
      
//       <div 
//         className="relative w-full h-full rounded-full border-2 flex items-center justify-center transition-all backdrop-blur-sm"
//         style={{ 
//           borderColor: isActive ? channel.glowColor : channel.color,
//           backgroundColor: isActive ? `${channel.color}30` : 'rgba(0,0,0,0.7)',
//           boxShadow: isActive ? `0 0 30px ${channel.glowColor}, inset 0 0 20px ${channel.glowColor}40` : 
//                     isHovered ? `0 0 20px ${channel.glowColor}60` : 'none'
//         }}
//       >
//         <channel.icon 
//           className="w-6 h-6 transition-all" 
//           style={{ 
//             color: isActive ? '#ffffff' : channel.color,
//             filter: isActive ? `drop-shadow(0 0 8px ${channel.glowColor})` : 'none'
//           }}
//         />
        
//         {isHovered && (
//           <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-0.5">
//             {[...Array(5)].map((_, i) => (
//               <div
//                 key={i}
//                 className="signal-bar"
//                 style={{
//                   backgroundColor: i < channel.strength / 20 ? channel.color : '#333',
//                   opacity: i < channel.strength / 20 ? 1 : 0.3,
//                   animationDelay: `${i * 0.1}s`
//                 }}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// });

// export default function ContactPage() {
//   const { isTransitioning } = useTransition();
//   const [activeSignal, setActiveSignal] = useState(null);
//   const [scanProgress, setScanProgress] = useState(0);
//   const [isScanning, setIsScanning] = useState(true); // Always keep scanning active
//   const [detectedSignals, setDetectedSignals] = useState([]);
//   const [selectedChannel, setSelectedChannel] = useState(null);
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [isTransmitting, setIsTransmitting] = useState(false);
//   const [transmissionProgress, setTransmissionProgress] = useState(0);
//   const [signalStrength, setSignalStrength] = useState({});
//   const [interference, setInterference] = useState(0);
//   const [connectionQuality, setConnectionQuality] = useState(100);
//   const [hoveredSignal, setHoveredSignal] = useState(null);
//   const [particles, setParticles] = useState([]);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [energyField, setEnergyField] = useState([]);
//   const [pulseWave, setPulseWave] = useState(0);

  
//   const radarRef = useRef(null);
//   const animationFrameRef = useRef(null);
//   const lastFrameTimeRef = useRef(0);
//   const mousePositionRef = useRef({ x: 0, y: 0 });

//   // Memoized channels data
//   const channels = useMemo(() => [
//     {
//       id: 'linkedin',
//       type: 'Professional Network',
//       frequency: '2.4GHz',
//       bandwidth: 'HIGH',
//       signal: 'STABLE',
//       strength: 95,
//       data: 'linkedin.com/in/rizwi',
//       icon: Linkedin,
//       position: { angle: 72, distance: 70 },
//       color: '#00ff41',
//       glowColor: '#00ff88',
//       description: 'Professional connections and career updates'
//     },
//     {
//       id: 'github',
//       type: 'Code Repository',
//       frequency: '5.0GHz',
//       bandwidth: 'ULTRA',
//       signal: 'ACTIVE',
//       strength: 98,
//       data: 'github.com/rizwi',
//       icon: Github,
//       position: { angle: 144, distance: 75 },
//       color: '#00ff41',
//       glowColor: '#00ff88',
//       description: 'Open source projects and code contributions'
//     },
//     {
//       id: 'twitter',
//       type: 'Micro Blog',
//       frequency: '3.6GHz',
//       bandwidth: 'MEDIUM',
//       signal: 'LIVE',
//       strength: 88,
//       data: 'twitter.com/rizwi_dev',
//       icon: Twitter,
//       position: { angle: 216, distance: 65 },
//       color: '#00ff41',
//       glowColor: '#00ff88',
//       description: 'Tech thoughts and real-time updates'
//     },
//     {
//       id: 'instagram',
//       type: 'Visual Stream',
//       frequency: '2.8GHz',
//       bandwidth: 'HIGH',
//       signal: 'STREAMING',
//       strength: 92,
//       data: 'instagram.com/rizwi.dev',
//       icon: Instagram,
//       position: { angle: 288, distance: 68 },
//       color: '#00ff41',
//       glowColor: '#00ff88',
//       description: 'Visual journey and creative moments'
//     },
//     {
//       id: 'facebook',
//       type: 'Social Hub',
//       frequency: '3.2GHz',
//       bandwidth: 'STANDARD',
//       signal: 'CONNECTED',
//       strength: 85,
//       data: 'facebook.com/rizwi.developer',
//       icon: Facebook,
//       position: { angle: 360, distance: 72 },
//       color: '#00ff41',
//       glowColor: '#00ff88',
//       description: 'Community engagement and updates'
//     }
//   ], []);

//   // Initialize particles with optimized data structure
//   useEffect(() => {
//     const particleCount = 100;
//     const newParticles = Array(particleCount).fill(null).map((_, i) => ({
//       id: i,
//       x: Math.random() * window.innerWidth,
//       y: Math.random() * window.innerHeight,
//       vx: (Math.random() - 0.5) * 0.5,
//       vy: (Math.random() - 0.5) * 0.5,
//       size: Math.random() * 3 + 1,
//       opacity: Math.random() * 0.5 + 0.2,
//       pulseSpeed: Math.random() * 0.02 + 0.01,
//       pulsePhase: Math.random() * Math.PI * 2,
//       color: Math.random() > 0.8 ? '#00ff41' : '#00ff8850',
//       gridX: 0,
//       gridY: 0
//     }));
//     setParticles(newParticles);

//     // Initialize energy field
//     const fieldPoints = Array(20).fill(null).map(() => ({
//       x: Math.random() * window.innerWidth,
//       y: Math.random() * window.innerHeight,
//       radius: Math.random() * 100 + 50,
//       intensity: Math.random() * 0.5 + 0.5,
//       pulseSpeed: Math.random() * 0.02 + 0.01,
//       color: Math.random() > 0.5 ? '#00ff41' : '#00ff88'
//     }));
//     setEnergyField(fieldPoints);
//   }, []);

//   // Optimized mouse tracking with ref
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       mousePositionRef.current = { x: e.clientX, y: e.clientY };
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   // Unified animation loop using requestAnimationFrame
//   useEffect(() => {
//     let scanLastUpdate = 0;
//     let pulseLastUpdate = 0;
//     let particleLastUpdate = 0;
//     let connectionQualityLastUpdate = 0;
    
//     const animate = (currentTime) => {
//       // Particle animation (60 FPS)
//       if (currentTime - particleLastUpdate > 16) {
//         setParticles(prevParticles => {
//           // Create spatial grid for optimization
//           const gridSize = 100;
//           const grid = {};
          
//           // First pass: assign particles to grid cells
//           prevParticles.forEach(particle => {
//             particle.gridX = Math.floor(particle.x / gridSize);
//             particle.gridY = Math.floor(particle.y / gridSize);
//             const key = `${particle.gridX},${particle.gridY}`;
//             if (!grid[key]) grid[key] = [];
//             grid[key].push(particle);
//           });
          
//           return prevParticles.map(particle => {
//             const newParticle = { ...particle };
            
//             // Mouse influence
//             const dx = mousePositionRef.current.x - particle.x;
//             const dy = mousePositionRef.current.y - particle.y;
//             const distance = Math.sqrt(dx * dx + dy * dy);
//             const maxDistance = 150;
            
//             if (distance < maxDistance) {
//               const force = (1 - distance / maxDistance) * 0.1;
//               newParticle.vx += (dx / distance) * force;
//               newParticle.vy += (dy / distance) * force;
//             }

//             // Update position
//             newParticle.x += newParticle.vx;
//             newParticle.y += newParticle.vy;

//             // Damping
//             newParticle.vx *= 0.98;
//             newParticle.vy *= 0.98;

//             // Boundary check
//             if (newParticle.x < 0 || newParticle.x > window.innerWidth) newParticle.vx *= -1;
//             if (newParticle.y < 0 || newParticle.y > window.innerHeight) newParticle.vy *= -1;

//             // Find nearby particles using spatial grid
//             const nearbyParticles = [];
//             for (let gx = particle.gridX - 1; gx <= particle.gridX + 1; gx++) {
//               for (let gy = particle.gridY - 1; gy <= particle.gridY + 1; gy++) {
//                 const key = `${gx},${gy}`;
//                 if (grid[key]) {
//                   grid[key].forEach(other => {
//                     if (other.id !== particle.id) {
//                       const dist = Math.sqrt(
//                         Math.pow(particle.x - other.x, 2) + 
//                         Math.pow(particle.y - other.y, 2)
//                       );
//                       if (dist < 100) {
//                         nearbyParticles.push(other);
//                       }
//                     }
//                   });
//                 }
//               }
//             }
            
//             newParticle.connections = nearbyParticles.slice(0, 3);
//             return newParticle;
//           });
//         });
//         particleLastUpdate = currentTime;
//       }
      
//       // Pulse wave animation (20 FPS)
//       if (currentTime - pulseLastUpdate > 50) {
//         setPulseWave(prev => (prev + 0.05) % (Math.PI * 2));
//         pulseLastUpdate = currentTime;
//       }
      
//       // Radar scanning (40 FPS) - Always active
//       if (currentTime - scanLastUpdate > 25) {
//         setScanProgress(prev => {
//           const next = (prev + 1.5) % 360;
          
//           // Random interference
//           if (Math.random() > 0.98) {
//             setInterference(Math.random() * 30 + 70);
//             setTimeout(() => setInterference(0), 300);
//           }
          
//           // Check for signal detection
//           channels.forEach(channel => {
//             const diff = Math.abs(next - channel.position.angle);
//             const proximity = Math.min(diff, 360 - diff);
            
//             if (proximity < 30) {
//               const strength = channel.strength * (1 - proximity / 30);
//               setSignalStrength(prev => ({ ...prev, [channel.id]: strength }));
//             }
            
//             if (proximity < 3) {
//               setDetectedSignals(prev => {
//                 if (!prev.includes(channel.id)) {
//                   return [...prev, channel.id];
//                 }
//                 return prev;
//               });
//             }
//           });
          
//           // Don't stop scanning - keep rotating continuously
//           return next;
//         });
//         scanLastUpdate = currentTime;
//       }
      
//       // Connection quality (1 FPS)
//       if (currentTime - connectionQualityLastUpdate > 1000) {
//         setConnectionQuality(prev => {
//           const change = (Math.random() - 0.5) * 10;
//           return Math.max(85, Math.min(100, prev + change));
//         });
//         connectionQualityLastUpdate = currentTime;
//       }
      
//       animationFrameRef.current = requestAnimationFrame(animate);
//     };
    
//     animationFrameRef.current = requestAnimationFrame(animate);
    
//     return () => {
//       if (animationFrameRef.current) {
//         cancelAnimationFrame(animationFrameRef.current);
//       }
//     };
//   }, [channels]);

//   const handleChannelSelect = useCallback((channelId) => {
//     setSelectedChannel(channelId);
//     setActiveSignal(channelId);
    
//     const channel = channels.find(c => c.id === channelId);
//     if (channel) {
//       setConnectionQuality(channel.strength);
//     }
//   }, [channels]);

//   const handleFormSubmit = useCallback((e) => {
//     e.preventDefault();
//     if (!formData.name || !formData.email || !formData.message) return;

//     setIsTransmitting(true);
//     setTransmissionProgress(0);
    
//     const progressInterval = setInterval(() => {
//       setTransmissionProgress(prev => {
//         if (prev >= 100) {
//           clearInterval(progressInterval);
//           setTimeout(() => {
//             setIsTransmitting(false);
//             setFormData({ name: '', email: '', message: '' });
//             setTransmissionProgress(0);
//           }, 500);
//           return 100;
//         }
//         return prev + Math.random() * 15 + 5;
//       });
//     }, 200);
//   }, [formData]);

//   const handleHoverSignal = useCallback((id) => setHoveredSignal(id), []);
//   const handleLeaveSignal = useCallback(() => setHoveredSignal(null), []);

//   // Memoized particle connections for rendering
//   const particleConnections = useMemo(() => {
//     const connections = [];
//     particles.forEach((particle, i) => {
//       if (particle.connections) {
//         particle.connections.forEach((connected, j) => {
//           const distance = Math.sqrt(
//             Math.pow(particle.x - connected.x, 2) + 
//             Math.pow(particle.y - connected.y, 2)
//           );
//           const opacity = (1 - distance / 100) * 0.3;
          
//           connections.push({
//             key: `${i}-${j}`,
//             x1: particle.x,
//             y1: particle.y,
//             x2: connected.x,
//             y2: connected.y,
//             opacity
//           });
//         });
//       }
//     });
//     return connections;
//   }, [particles]);

//   return (
//     <div className="min-h-screen pt-24 sm:pt-32 px-4 sm:px-6 relative overflow-hidden">
//       {/* Enhanced animated background */}
//       <div className="fixed inset-0 z-0">
//         <div className="absolute inset-0 bg-gradient-to-br from-black via-green-950/10 to-black" />
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,65,0.1)_0%,transparent_70%)]" />
        
//         {/* Animated grid with perspective */}
//         <div className="absolute inset-0 opacity-10" style={{
//           backgroundImage: `linear-gradient(rgba(0,255,65,0.3) 1px, transparent 1px),
//                            linear-gradient(90deg, rgba(0,255,65,0.3) 1px, transparent 1px)`,
//           backgroundSize: '50px 50px',
//           transform: 'perspective(500px) rotateX(60deg) translateY(-50%)',
//           transformOrigin: 'center'
//         }} />

//         {/* Energy field visualization */}
//         {energyField.map((field, i) => (
//           <div
//             key={i}
//             className="absolute rounded-full"
//             style={{
//               left: field.x,
//               top: field.y,
//               width: field.radius * 2,
//               height: field.radius * 2,
//               transform: 'translate(-50%, -50%)',
//               background: `radial-gradient(circle, ${field.color}10 0%, transparent 70%)`,
//               opacity: field.intensity * (0.5 + 0.5 * Math.sin(pulseWave + i)),
//               filter: 'blur(30px)',
//               pointerEvents: 'none'
//             }}
//           />
//         ))}
//       </div>

//       {/* Particle system */}
//       <svg className="fixed inset-0 z-0 pointer-events-none" style={{ width: '100%', height: '100%' }}>
//         {/* Particle connections */}
//         {particleConnections.map(conn => (
//           <line
//             key={conn.key}
//             x1={conn.x1}
//             y1={conn.y1}
//             x2={conn.x2}
//             y2={conn.y2}
//             stroke="#00ff41"
//             strokeWidth="0.5"
//             opacity={conn.opacity}
//           />
//         ))}
        
//         {/* Particles */}
//         {particles.map((particle) => (
//           <circle
//             key={particle.id}
//             cx={particle.x}
//             cy={particle.y}
//             r={particle.size * (1 + 0.3 * Math.sin(pulseWave + particle.pulsePhase))}
//             fill={particle.color}
//             opacity={particle.opacity}
//           >
//             <animate
//               attributeName="opacity"
//               values={`${particle.opacity};${particle.opacity * 0.5};${particle.opacity}`}
//               dur="3s"
//               repeatCount="indefinite"
//             />
//           </circle>
//         ))}
//       </svg>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header - Left aligned like other pages */}
//         <div className="mb-8">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-green-400 mb-4">
//             <span className="text-gray-400">&gt;</span> <ScrambledText text="SIGNAL_DETECTION.SYS" />
//           </h2>
//           <div className="flex items-center gap-4 text-gray-400 font-mono text-sm">
//             <span className="flex items-center gap-2">
//               <Activity className="w-4 h-4 text-green-400 animate-pulse" />
//               SCANNING
//             </span>
//             <span className="text-green-400">◈</span>
//             <span className="flex items-center gap-2">
//               <Radio className="w-4 h-4 text-green-400" />
//               {detectedSignals.length}/{channels.length} CHANNELS
//             </span>
//             <span className="text-green-400">◈</span>
//             <span className="flex items-center gap-2">
//               <Sparkles className="w-4 h-4 text-green-400 animate-pulse" />
//               QUANTUM FIELD ACTIVE
//             </span>
//           </div>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-8">
//           {/* Enhanced Radar Interface with Constellation */}
//           <div className="relative">
//             <div className="relative w-full max-w-[500px] mx-auto aspect-square" ref={radarRef}>
//               {/* Radar background effects */}
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent rounded-full animate-pulse" />
              
//               {/* Radar SVG */}
//               <svg className="absolute inset-0 w-full h-full">
//                 {/* Grid lines */}
//                 {[30, 60, 90, 120, 150].map(angle => (
//                   <line
//                     key={angle}
//                     x1="50%"
//                     y1="50%"
//                     x2={`${50 + 40 * Math.cos((angle - 90) * Math.PI / 180)}%`}
//                     y2={`${50 + 40 * Math.sin((angle - 90) * Math.PI / 180)}%`}
//                     stroke="#00ff41"
//                     strokeWidth="0.5"
//                     opacity="0.1"
//                   />
//                 ))}
                
//                 {/* Concentric circles with labels */}
//                 {[20, 40, 60, 80].map((radius, i) => (
//                   <g key={radius}>
//                     <circle 
//                       cx="50%" 
//                       cy="50%" 
//                       r={`${radius}%`} 
//                       fill="none" 
//                       stroke="#00ff41" 
//                       strokeWidth="1" 
//                       opacity={0.2 - i * 0.03}
//                       strokeDasharray={i % 2 === 0 ? "5,5" : "none"}
//                     />
//                     <text
//                       x="50%"
//                       y={`${50 - radius + 2}%`}
//                       textAnchor="middle"
//                       fill="#00ff41"
//                       fontSize="10"
//                       opacity="0.3"
//                     >
//                       {radius}km
//                     </text>
//                   </g>
//                 ))}
                
//                 {/* Cross lines */}
//                 <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#00ff41" strokeWidth="1" opacity="0.15" />
//                 <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#00ff41" strokeWidth="1" opacity="0.15" />
                
//                 {/* Interference effect */}
//                 {interference > 0 && (
//                   <circle
//                     cx="50%"
//                     cy="50%"
//                     r={`${interference}%`}
//                     fill="none"
//                     stroke="#ff0000"
//                     strokeWidth="2"
//                     opacity={interference / 100}
//                     strokeDasharray="2,4"
//                   >
//                     <animate
//                       attributeName="r"
//                       values={`${interference}%;${interference + 10}%;${interference}%`}
//                       dur="0.3s"
//                       repeatCount="indefinite"
//                     />
//                   </circle>
//                 )}
                
//                 {/* Enhanced scanning line - Always active */}
//                 <>
//                   <line
//                     x1="50%"
//                     y1="50%"
//                     x2={`${50 + 40 * Math.cos((scanProgress - 90) * Math.PI / 180)}%`}
//                     y2={`${50 + 40 * Math.sin((scanProgress - 90) * Math.PI / 180)}%`}
//                     stroke="#00ff41"
//                     strokeWidth="2"
//                     opacity="0.8"
//                     filter="url(#glow)"
//                   />
                  
//                   {/* Scan trail with gradient */}
//                   {Array.from({ length: 60 }, (_, i) => (
//                     <line
//                       key={i}
//                       x1="50%"
//                       y1="50%"
//                       x2={`${50 + 40 * Math.cos(((scanProgress - i * 1.5) - 90) * Math.PI / 180)}%`}
//                       y2={`${50 + 40 * Math.sin(((scanProgress - i * 1.5) - 90) * Math.PI / 180)}%`}
//                       stroke="#00ff41"
//                       strokeWidth="1"
//                       opacity={0.5 - (i * 0.008)}
//                     />
//                   ))}
//                 </>
                
//                 {/* SVG Filters */}
//                 <defs>
//                   <filter id="glow">
//                     <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
//                     <feMerge>
//                       <feMergeNode in="coloredBlur"/>
//                       <feMergeNode in="SourceGraphic"/>
//                     </feMerge>
//                   </filter>
//                   <filter id="turbulence">
//                     <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="turbulence"/>
//                     <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="2" xChannelSelector="R" yChannelSelector="G"/>
//                   </filter>
//                 </defs>
//               </svg>
              
//               {/* Enhanced signal points with quantum effects */}
//               {channels.map(channel => {
//                 const x = 50 + (channel.position.distance * 0.4) * Math.cos((channel.position.angle - 90) * Math.PI / 180);
//                 const y = 50 + (channel.position.distance * 0.4) * Math.sin((channel.position.angle - 90) * Math.PI / 180);
//                 const isDetected = detectedSignals.includes(channel.id);
//                 const isActive = activeSignal === channel.id;
//                 const isHovered = hoveredSignal === channel.id;
//                 const strength = signalStrength[channel.id] || 0;
                
//                 return (
//                   <ChannelSignal
//                     key={channel.id}
//                     channel={channel}
//                     x={x}
//                     y={y}
//                     isDetected={isDetected}
//                     isActive={isActive}
//                     isHovered={isHovered}
//                     strength={strength}
//                     onSelect={handleChannelSelect}
//                     onHover={handleHoverSignal}
//                     onLeave={handleLeaveSignal}
//                     pulseWave={pulseWave}
//                   />
//                 );
//               })}
              
//               {/* Center beacon with quantum core */}
//               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//                 <div className="w-6 h-6 bg-green-400 rounded-full animate-pulse relative">
//                   <div className="absolute inset-0 bg-green-400 rounded-full animate-ping" />
//                   <div className="absolute inset-[-4px] border-2 border-green-400 rounded-full opacity-50" />
//                   {/* Quantum core effect */}
//                   <div className="absolute inset-[-10px] rounded-full" style={{
//                     background: `radial-gradient(circle, transparent 30%, ${Math.sin(pulseWave) > 0 ? '#00ff41' : '#00ff88'}20 50%, transparent 70%)`,
//                     animation: 'rotate 4s linear infinite reverse'
//                   }} />
//                 </div>
//               </div>
//             </div>
            
//             {/* Control buttons and status indicators */}
//             <div className="mt-6 space-y-4">
//               <div className="flex gap-2">
//                 <button
//                   onClick={() => {
//                     setDetectedSignals([]);
//                     setScanProgress(0);
//                   }}
//                   className="flex-1 py-2 px-4 rounded font-mono text-xs transition-all bg-green-500/20 border border-green-500/40 text-green-400 hover:bg-green-500/30 hover:border-green-500/60"
//                 >
//                   RESET SCAN
//                 </button>
                
//                 <button
//                   onClick={() => {
//                     setSelectedChannel(null);
//                     setActiveSignal(null);
//                   }}
//                   className="px-4 py-2 bg-red-500/20 border border-red-500/40 text-red-400 rounded font-mono text-xs hover:bg-red-500/30 hover:border-red-500/60 transition-all"
//                 >
//                   CLEAR
//                 </button>
//               </div>
              
//               {/* Status indicators */}
//               <div className="flex justify-center gap-4 text-xs font-mono">
//                 <div className="flex items-center gap-2">
//                   <Satellite className="w-4 h-4 text-green-400 animate-pulse" />
//                   <span className="text-gray-400">SCANNING: ACTIVE</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Radio className="w-4 h-4 text-green-400" />
//                   <span className="text-gray-400">SIGNALS: {detectedSignals.length}/{channels.length}</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Information Panel */}
//           <div className="space-y-6">
//             {/* Selected Channel Info - Reduced height and content */}
//             {selectedChannel && (
//               <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-4 animate-fade-in relative overflow-hidden">
//                 {/* Animated background pattern */}
//                 <div className="absolute inset-0 opacity-5">
//                   <div className="absolute inset-0" style={{
//                     backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,255,65,0.1) 10px, rgba(0,255,65,0.1) 20px)`,
//                     animation: 'slide 20s linear infinite'
//                   }} />
//                 </div>
                
//                 <div className="relative z-10">
//                   <div className="flex items-center justify-between mb-3">
//                     <h3 className="text-green-400 font-mono text-sm flex items-center gap-2">
//                       <Activity className="w-4 h-4 animate-pulse" />
//                       CHANNEL LOCKED
//                     </h3>
//                     <span className="text-xs font-mono text-green-400 px-2 py-1 bg-green-500/10 rounded">
//                       {channels.find(c => c.id === selectedChannel)?.frequency}
//                     </span>
//                   </div>
                  
//                   <div className="space-y-2">
//                     <div className="flex items-center justify-between">
//                       <span className="text-xs font-mono text-gray-500 uppercase">Platform:</span>
//                       <span className="font-mono text-xs text-green-400">{channels.find(c => c.id === selectedChannel)?.type}</span>
//                     </div>
                    
//                     <div className="flex items-center justify-between">
//                       <span className="text-xs font-mono text-gray-500 uppercase">Connection:</span>
//                       <span className="font-mono text-xs text-green-400">
//                         {channels.find(c => c.id === selectedChannel)?.data}
//                       </span>
//                     </div>
                    
//                     <div className="mt-3 pt-3 border-t border-green-500/20">
//                       <a 
//                         href={`https://${channels.find(c => c.id === selectedChannel)?.data}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-mono text-xs group"
//                       >
//                         ESTABLISH CONNECTION 
//                         <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Enhanced Message Transmitter */}
//             <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-6 relative overflow-hidden">
//               <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full filter blur-3xl" />
              
//               <h3 className="text-green-400 font-mono text-lg mb-4 flex items-center gap-2">
//                 <Zap className="w-5 h-5" />
//                 DIRECT TRANSMISSION
//               </h3>
              
//               <form onSubmit={handleFormSubmit} className="space-y-4">
//                 <div className="relative">
//                   <input
//                     type="text"
//                     placeholder="CALLSIGN"
//                     value={formData.name}
//                     onChange={(e) => setFormData({...formData, name: e.target.value})}
//                     className="w-full px-4 py-3 bg-black/40 border border-green-500/30 rounded text-green-400 placeholder-gray-500 font-mono text-sm focus:border-green-500/50 focus:outline-none transition-all"
//                     disabled={isTransmitting}
//                   />
//                   <div className={`absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${formData.name ? 'bg-green-400' : 'bg-gray-600'} transition-colors`} />
//                 </div>
                
//                 <div className="relative">
//                   <input
//                     type="email"
//                     placeholder="RETURN FREQUENCY"
//                     value={formData.email}
//                     onChange={(e) => setFormData({...formData, email: e.target.value})}
//                     className="w-full px-4 py-3 bg-black/40 border border-green-500/30 rounded text-green-400 placeholder-gray-500 font-mono text-sm focus:border-green-500/50 focus:outline-none transition-all"
//                     disabled={isTransmitting}
//                   />
//                   <div className={`absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${formData.email ? 'bg-green-400' : 'bg-gray-600'} transition-colors`} />
//                 </div>
                
//                 <div className="relative">
//                   <textarea
//                     placeholder="MESSAGE PAYLOAD..."
//                     rows={4}
//                     value={formData.message}
//                     onChange={(e) => setFormData({...formData, message: e.target.value})}
//                     className="w-full px-4 py-3 bg-black/40 border border-green-500/30 rounded text-green-400 placeholder-gray-500 font-mono text-sm focus:border-green-500/50 focus:outline-none transition-all resize-none"
//                     disabled={isTransmitting}
//                   />
//                   <div className={`absolute right-3 top-3 w-2 h-2 rounded-full ${formData.message ? 'bg-green-400' : 'bg-gray-600'} transition-colors`} />
//                   <div className="absolute bottom-2 right-3 text-xs font-mono text-gray-500">
//                     {formData.message.length}/500
//                   </div>
//                 </div>
                
//                 {/* Transmission progress */}
//                 {isTransmitting && (
//                   <div className="space-y-2">
//                     <div className="flex justify-between text-xs font-mono text-gray-400">
//                       <span>TRANSMITTING...</span>
//                       <span>{Math.floor(transmissionProgress)}%</span>
//                     </div>
//                     <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden">
//                       <div 
//                         className="h-full bg-green-400 rounded-full transition-all duration-300 relative"
//                         style={{ width: `${transmissionProgress}%` }}
//                       >
//                         <div className="absolute inset-0 bg-white/20 animate-pulse" />
//                       </div>
//                     </div>
//                   </div>
//                 )}
                
//                 <button
//                   type="submit"
//                   disabled={isTransmitting || !formData.name || !formData.email || !formData.message}
//                   className={`w-full py-3 font-mono font-semibold rounded transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden ${
//                     isTransmitting 
//                       ? 'bg-green-950/30 border border-green-500/30 text-gray-400 cursor-not-allowed' 
//                       : 'bg-green-400 text-black hover:bg-green-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-green-400/30'
//                   }`}
//                 >
//                   {isTransmitting ? (
//                     <>
//                       <Loader className="w-4 h-4 animate-spin" />
//                       TRANSMITTING... {Math.floor(transmissionProgress)}%
//                     </>
//                   ) : (
//                     <>
//                       <Send className="w-4 h-4" />
//                       INITIATE TRANSMISSION
//                     </>
//                   )}
                  
//                   {/* Button shine effect */}
//                   {!isTransmitting && (
//                     <div className="absolute inset-0 -top-full bg-gradient-to-b from-white/20 to-transparent transform skew-y-12 group-hover:translate-y-full transition-transform duration-700" />
//                   )}
//                 </button>
//               </form>
//             </div>

//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes slide {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(20px);
//           }
//         }

//         @keyframes rotate {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }

//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-in {
//           animation: fade-in 0.5s ease-out;
//         }

//         .signal-bar {
//           width: 4px;
//           height: 14px;
//           border-radius: 2px;
//           transition: all 0.3s ease;
//           animation: audioWave 1s ease-in-out infinite;
//         }

//         @keyframes audioWave {
//           0%, 100% {
//             transform: scaleY(0.7);
//           }
//           50% {
//             transform: scaleY(1);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }
































// app/contact/page.js
// 'use client';
// import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
// import { Send, Satellite, Radio, Activity, Zap, Github, Linkedin, Twitter, ChevronRight, Instagram, Facebook, Loader, Sparkles } from 'lucide-react';
// import { useTransition } from '../layout';
// import ScrambledText from '@/components/ScrambledText';

// // Memoized channel component to prevent unnecessary re-renders
// const ChannelSignal = React.memo(({ channel, x, y, isDetected, isActive, isHovered, onSelect, onHover, onLeave }) => {
//   return (
//     <div
//       id={`signal-${channel.id}`}
//       className={`absolute w-14 h-14 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
//         isDetected ? 'opacity-100' : 'opacity-0'
//       }`}
//       style={{ 
//         left: `${x}%`, 
//         top: `${y}%`,
//         transform: `translate(-50%, -50%) scale(${isActive ? 1.3 : isHovered ? 1.15 : 1})`
//       }}
//       onClick={() => onSelect(channel.id)}
//       onMouseEnter={() => onHover(channel.id)}
//       onMouseLeave={onLeave}
//     >
//       <div 
//         className="relative w-full h-full rounded-full border-2 flex items-center justify-center transition-all backdrop-blur-sm"
//         style={{ 
//           borderColor: isActive ? channel.glowColor : channel.color,
//           backgroundColor: isActive ? `${channel.color}30` : 'rgba(0,0,0,0.7)',
//           boxShadow: isActive ? `0 0 30px ${channel.glowColor}, inset 0 0 20px ${channel.glowColor}40` : 
//                     isHovered ? `0 0 20px ${channel.glowColor}60` : 'none'
//         }}
//       >
//         <channel.icon 
//           className="w-6 h-6 transition-all" 
//           style={{ 
//             color: isActive ? '#ffffff' : channel.color,
//             filter: isActive ? `drop-shadow(0 0 8px ${channel.glowColor})` : 'none'
//           }}
//         />
        
//         {isHovered && (
//           <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-0.5">
//             {[...Array(5)].map((_, i) => (
//               <div
//                 key={i}
//                 className="signal-bar"
//                 style={{
//                   backgroundColor: i < channel.strength / 20 ? channel.color : '#333',
//                   opacity: i < channel.strength / 20 ? 1 : 0.3,
//                   animationDelay: `${i * 0.1}s`
//                 }}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// });

// export default function ContactPage() {
//   const { isTransitioning } = useTransition();
//   const [activeSignal, setActiveSignal] = useState(null);
//   const [scanProgress, setScanProgress] = useState(0);
//   const [isScanning, setIsScanning] = useState(true); // Always keep scanning active
//   const [detectedSignals, setDetectedSignals] = useState([]);
//   const [selectedChannel, setSelectedChannel] = useState(null);
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [isTransmitting, setIsTransmitting] = useState(false);
//   const [transmissionProgress, setTransmissionProgress] = useState(0);
//   const [interference, setInterference] = useState(0);
//   const [connectionQuality, setConnectionQuality] = useState(100);
//   const [hoveredSignal, setHoveredSignal] = useState(null);
//   const [particles, setParticles] = useState([]);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [energyField, setEnergyField] = useState([]);
//   const [pulseWave, setPulseWave] = useState(0);

  
//   const radarRef = useRef(null);
//   const animationFrameRef = useRef(null);
//   const lastFrameTimeRef = useRef(0);
//   const mousePositionRef = useRef({ x: 0, y: 0 });

//   // Memoized channels data
//   const channels = useMemo(() => [
//     {
//       id: 'linkedin',
//       type: 'Professional Network',
//       frequency: '2.4GHz',
//       bandwidth: 'HIGH',
//       signal: 'STABLE',
//       strength: 95,
//       data: 'linkedin.com/in/rizwi',
//       icon: Linkedin,
//       position: { angle: 72, distance: 70 },
//       color: '#00ff41',
//       glowColor: '#00ff88',
//       description: 'Professional connections and career updates'
//     },
//     {
//       id: 'github',
//       type: 'Code Repository',
//       frequency: '5.0GHz',
//       bandwidth: 'ULTRA',
//       signal: 'ACTIVE',
//       strength: 98,
//       data: 'github.com/rizwi',
//       icon: Github,
//       position: { angle: 144, distance: 75 },
//       color: '#00ff41',
//       glowColor: '#00ff88',
//       description: 'Open source projects and code contributions'
//     },
//     {
//       id: 'twitter',
//       type: 'Micro Blog',
//       frequency: '3.6GHz',
//       bandwidth: 'MEDIUM',
//       signal: 'LIVE',
//       strength: 88,
//       data: 'twitter.com/rizwi_dev',
//       icon: Twitter,
//       position: { angle: 216, distance: 65 },
//       color: '#00ff41',
//       glowColor: '#00ff88',
//       description: 'Tech thoughts and real-time updates'
//     },
//     {
//       id: 'instagram',
//       type: 'Visual Stream',
//       frequency: '2.8GHz',
//       bandwidth: 'HIGH',
//       signal: 'STREAMING',
//       strength: 92,
//       data: 'instagram.com/rizwi.dev',
//       icon: Instagram,
//       position: { angle: 288, distance: 68 },
//       color: '#00ff41',
//       glowColor: '#00ff88',
//       description: 'Visual journey and creative moments'
//     },
//     {
//       id: 'facebook',
//       type: 'Social Hub',
//       frequency: '3.2GHz',
//       bandwidth: 'STANDARD',
//       signal: 'CONNECTED',
//       strength: 85,
//       data: 'facebook.com/rizwi.developer',
//       icon: Facebook,
//       position: { angle: 360, distance: 72 },
//       color: '#00ff41',
//       glowColor: '#00ff88',
//       description: 'Community engagement and updates'
//     }
//   ], []);

//   // Initialize particles with optimized data structure
//   useEffect(() => {
//     const particleCount = 100;
//     const newParticles = Array(particleCount).fill(null).map((_, i) => ({
//       id: i,
//       x: Math.random() * window.innerWidth,
//       y: Math.random() * window.innerHeight,
//       vx: (Math.random() - 0.5) * 0.5,
//       vy: (Math.random() - 0.5) * 0.5,
//       size: Math.random() * 3 + 1,
//       opacity: Math.random() * 0.5 + 0.2,
//       pulseSpeed: Math.random() * 0.02 + 0.01,
//       pulsePhase: Math.random() * Math.PI * 2,
//       color: Math.random() > 0.8 ? '#00ff41' : '#00ff8850',
//       gridX: 0,
//       gridY: 0
//     }));
//     setParticles(newParticles);

//     // Initialize energy field
//     const fieldPoints = Array(20).fill(null).map(() => ({
//       x: Math.random() * window.innerWidth,
//       y: Math.random() * window.innerHeight,
//       radius: Math.random() * 100 + 50,
//       intensity: Math.random() * 0.5 + 0.5,
//       pulseSpeed: Math.random() * 0.02 + 0.01,
//       color: Math.random() > 0.5 ? '#00ff41' : '#00ff88'
//     }));
//     setEnergyField(fieldPoints);
//   }, []);

//   // Optimized mouse tracking with ref
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       mousePositionRef.current = { x: e.clientX, y: e.clientY };
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   // Unified animation loop using requestAnimationFrame
//   useEffect(() => {
//     let scanLastUpdate = 0;
//     let pulseLastUpdate = 0;
//     let particleLastUpdate = 0;
//     let connectionQualityLastUpdate = 0;
    
//     const animate = (currentTime) => {
//       // Particle animation (60 FPS)
//       if (currentTime - particleLastUpdate > 16) {
//         setParticles(prevParticles => {
//           // Create spatial grid for optimization
//           const gridSize = 100;
//           const grid = {};
          
//           // First pass: assign particles to grid cells
//           prevParticles.forEach(particle => {
//             particle.gridX = Math.floor(particle.x / gridSize);
//             particle.gridY = Math.floor(particle.y / gridSize);
//             const key = `${particle.gridX},${particle.gridY}`;
//             if (!grid[key]) grid[key] = [];
//             grid[key].push(particle);
//           });
          
//           return prevParticles.map(particle => {
//             const newParticle = { ...particle };
            
//             // Mouse influence
//             const dx = mousePositionRef.current.x - particle.x;
//             const dy = mousePositionRef.current.y - particle.y;
//             const distance = Math.sqrt(dx * dx + dy * dy);
//             const maxDistance = 150;
            
//             if (distance < maxDistance) {
//               const force = (1 - distance / maxDistance) * 0.1;
//               newParticle.vx += (dx / distance) * force;
//               newParticle.vy += (dy / distance) * force;
//             }

//             // Update position
//             newParticle.x += newParticle.vx;
//             newParticle.y += newParticle.vy;

//             // Damping
//             newParticle.vx *= 0.98;
//             newParticle.vy *= 0.98;

//             // Boundary check
//             if (newParticle.x < 0 || newParticle.x > window.innerWidth) newParticle.vx *= -1;
//             if (newParticle.y < 0 || newParticle.y > window.innerHeight) newParticle.vy *= -1;

//             // Find nearby particles using spatial grid
//             const nearbyParticles = [];
//             for (let gx = particle.gridX - 1; gx <= particle.gridX + 1; gx++) {
//               for (let gy = particle.gridY - 1; gy <= particle.gridY + 1; gy++) {
//                 const key = `${gx},${gy}`;
//                 if (grid[key]) {
//                   grid[key].forEach(other => {
//                     if (other.id !== particle.id) {
//                       const dist = Math.sqrt(
//                         Math.pow(particle.x - other.x, 2) + 
//                         Math.pow(particle.y - other.y, 2)
//                       );
//                       if (dist < 100) {
//                         nearbyParticles.push(other);
//                       }
//                     }
//                   });
//                 }
//               }
//             }
            
//             newParticle.connections = nearbyParticles.slice(0, 3);
//             return newParticle;
//           });
//         });
//         particleLastUpdate = currentTime;
//       }
      
//       // Pulse wave animation (20 FPS)
//       if (currentTime - pulseLastUpdate > 50) {
//         setPulseWave(prev => (prev + 0.05) % (Math.PI * 2));
//         pulseLastUpdate = currentTime;
//       }
      
//       // Radar scanning (40 FPS) - Always active
//       if (currentTime - scanLastUpdate > 25) {
//         setScanProgress(prev => {
//           const next = (prev + 1.5) % 360;
          
//           // Random interference
//           if (Math.random() > 0.98) {
//             setInterference(Math.random() * 30 + 70);
//             setTimeout(() => setInterference(0), 300);
//           }
          
//           // Check for signal detection
//           channels.forEach(channel => {
//             const diff = Math.abs(next - channel.position.angle);
//             const proximity = Math.min(diff, 360 - diff);
            
//             if (proximity < 3) {
//               setDetectedSignals(prev => {
//                 if (!prev.includes(channel.id)) {
//                   return [...prev, channel.id];
//                 }
//                 return prev;
//               });
//             }
//           });
          
//           // Don't stop scanning - keep rotating continuously
//           return next;
//         });
//         scanLastUpdate = currentTime;
//       }
      
//       // Connection quality (1 FPS)
//       if (currentTime - connectionQualityLastUpdate > 1000) {
//         setConnectionQuality(prev => {
//           const change = (Math.random() - 0.5) * 10;
//           return Math.max(85, Math.min(100, prev + change));
//         });
//         connectionQualityLastUpdate = currentTime;
//       }
      
//       animationFrameRef.current = requestAnimationFrame(animate);
//     };
    
//     animationFrameRef.current = requestAnimationFrame(animate);
    
//     return () => {
//       if (animationFrameRef.current) {
//         cancelAnimationFrame(animationFrameRef.current);
//       }
//     };
//   }, [channels]);

//   const handleChannelSelect = useCallback((channelId) => {
//     setSelectedChannel(channelId);
//     setActiveSignal(channelId);
    
//     const channel = channels.find(c => c.id === channelId);
//     if (channel) {
//       setConnectionQuality(channel.strength);
//     }
//   }, [channels]);

//   const handleFormSubmit = useCallback((e) => {
//     e.preventDefault();
//     if (!formData.name || !formData.email || !formData.message) return;

//     setIsTransmitting(true);
//     setTransmissionProgress(0);
    
//     const progressInterval = setInterval(() => {
//       setTransmissionProgress(prev => {
//         if (prev >= 100) {
//           clearInterval(progressInterval);
//           setTimeout(() => {
//             setIsTransmitting(false);
//             setFormData({ name: '', email: '', message: '' });
//             setTransmissionProgress(0);
//           }, 500);
//           return 100;
//         }
//         return prev + Math.random() * 15 + 5;
//       });
//     }, 200);
//   }, [formData]);

//   const handleHoverSignal = useCallback((id) => setHoveredSignal(id), []);
//   const handleLeaveSignal = useCallback(() => setHoveredSignal(null), []);

//   // Memoized particle connections for rendering
//   const particleConnections = useMemo(() => {
//     const connections = [];
//     particles.forEach((particle, i) => {
//       if (particle.connections) {
//         particle.connections.forEach((connected, j) => {
//           const distance = Math.sqrt(
//             Math.pow(particle.x - connected.x, 2) + 
//             Math.pow(particle.y - connected.y, 2)
//           );
//           const opacity = (1 - distance / 100) * 0.3;
          
//           connections.push({
//             key: `${i}-${j}`,
//             x1: particle.x,
//             y1: particle.y,
//             x2: connected.x,
//             y2: connected.y,
//             opacity
//           });
//         });
//       }
//     });
//     return connections;
//   }, [particles]);

//   return (
//     <div className="min-h-screen pt-24 sm:pt-32 px-4 sm:px-6 relative overflow-hidden">
//       {/* Enhanced animated background */}
//       <div className="fixed inset-0 z-0">
//         <div className="absolute inset-0 bg-gradient-to-br from-black via-green-950/10 to-black" />
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,65,0.1)_0%,transparent_70%)]" />
        
//         {/* Animated grid with perspective */}
//         <div className="absolute inset-0 opacity-10" style={{
//           backgroundImage: `linear-gradient(rgba(0,255,65,0.3) 1px, transparent 1px),
//                            linear-gradient(90deg, rgba(0,255,65,0.3) 1px, transparent 1px)`,
//           backgroundSize: '50px 50px',
//           transform: 'perspective(500px) rotateX(60deg) translateY(-50%)',
//           transformOrigin: 'center'
//         }} />

//         {/* Energy field visualization */}
//         {energyField.map((field, i) => (
//           <div
//             key={i}
//             className="absolute rounded-full"
//             style={{
//               left: field.x,
//               top: field.y,
//               width: field.radius * 2,
//               height: field.radius * 2,
//               transform: 'translate(-50%, -50%)',
//               background: `radial-gradient(circle, ${field.color}10 0%, transparent 70%)`,
//               opacity: field.intensity * (0.5 + 0.5 * Math.sin(pulseWave + i)),
//               filter: 'blur(30px)',
//               pointerEvents: 'none'
//             }}
//           />
//         ))}
//       </div>

//       {/* Particle system */}
//       <svg className="fixed inset-0 z-0 pointer-events-none" style={{ width: '100%', height: '100%' }}>
//         {/* Particle connections */}
//         {particleConnections.map(conn => (
//           <line
//             key={conn.key}
//             x1={conn.x1}
//             y1={conn.y1}
//             x2={conn.x2}
//             y2={conn.y2}
//             stroke="#00ff41"
//             strokeWidth="0.5"
//             opacity={conn.opacity}
//           />
//         ))}
        
//         {/* Particles */}
//         {particles.map((particle) => (
//           <circle
//             key={particle.id}
//             cx={particle.x}
//             cy={particle.y}
//             r={particle.size * (1 + 0.3 * Math.sin(pulseWave + particle.pulsePhase))}
//             fill={particle.color}
//             opacity={particle.opacity}
//           >
//             <animate
//               attributeName="opacity"
//               values={`${particle.opacity};${particle.opacity * 0.5};${particle.opacity}`}
//               dur="3s"
//               repeatCount="indefinite"
//             />
//           </circle>
//         ))}
//       </svg>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header - Left aligned like other pages */}
//         <div className="mb-8">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-green-400 mb-4">
//             <span className="text-gray-400">&gt;</span> <ScrambledText text="SIGNAL_DETECTION.SYS" />
//           </h2>
//           <div className="flex items-center gap-4 text-gray-400 font-mono text-sm">
//             <span className="flex items-center gap-2">
//               <Activity className="w-4 h-4 text-green-400 animate-pulse" />
//               SCANNING
//             </span>
//             <span className="text-green-400">◈</span>
//             <span className="flex items-center gap-2">
//               <Radio className="w-4 h-4 text-green-400" />
//               {detectedSignals.length}/{channels.length} CHANNELS
//             </span>
//             <span className="text-green-400">◈</span>
//             <span className="flex items-center gap-2">
//               <Sparkles className="w-4 h-4 text-green-400 animate-pulse" />
//               QUANTUM FIELD ACTIVE
//             </span>
//           </div>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-8">
//           {/* Enhanced Radar Interface with Constellation */}
//           <div className="relative">
//             <div className="relative w-full max-w-[500px] mx-auto aspect-square" ref={radarRef}>
//               {/* Radar background effects */}
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent rounded-full animate-pulse" />
              
//               {/* Radar SVG */}
//               <svg className="absolute inset-0 w-full h-full">
//                 {/* Grid lines */}
//                 {[30, 60, 90, 120, 150].map(angle => (
//                   <line
//                     key={angle}
//                     x1="50%"
//                     y1="50%"
//                     x2={`${50 + 40 * Math.cos((angle - 90) * Math.PI / 180)}%`}
//                     y2={`${50 + 40 * Math.sin((angle - 90) * Math.PI / 180)}%`}
//                     stroke="#00ff41"
//                     strokeWidth="0.5"
//                     opacity="0.1"
//                   />
//                 ))}
                
//                 {/* Concentric circles with labels */}
//                 {[20, 40, 60, 80].map((radius, i) => (
//                   <g key={radius}>
//                     <circle 
//                       cx="50%" 
//                       cy="50%" 
//                       r={`${radius}%`} 
//                       fill="none" 
//                       stroke="#00ff41" 
//                       strokeWidth="1" 
//                       opacity={0.2 - i * 0.03}
//                       strokeDasharray={i % 2 === 0 ? "5,5" : "none"}
//                     />
//                     <text
//                       x="50%"
//                       y={`${50 - radius + 2}%`}
//                       textAnchor="middle"
//                       fill="#00ff41"
//                       fontSize="10"
//                       opacity="0.3"
//                     >
//                       {radius}km
//                     </text>
//                   </g>
//                 ))}
                
//                 {/* Cross lines */}
//                 <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#00ff41" strokeWidth="1" opacity="0.15" />
//                 <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#00ff41" strokeWidth="1" opacity="0.15" />
                
//                 {/* Interference effect */}
//                 {interference > 0 && (
//                   <circle
//                     cx="50%"
//                     cy="50%"
//                     r={`${interference}%`}
//                     fill="none"
//                     stroke="#ff0000"
//                     strokeWidth="2"
//                     opacity={interference / 100}
//                     strokeDasharray="2,4"
//                   >
//                     <animate
//                       attributeName="r"
//                       values={`${interference}%;${interference + 10}%;${interference}%`}
//                       dur="0.3s"
//                       repeatCount="indefinite"
//                     />
//                   </circle>
//                 )}
                
//                 {/* Enhanced scanning line - Always active */}
//                 <>
//                   <line
//                     x1="50%"
//                     y1="50%"
//                     x2={`${50 + 40 * Math.cos((scanProgress - 90) * Math.PI / 180)}%`}
//                     y2={`${50 + 40 * Math.sin((scanProgress - 90) * Math.PI / 180)}%`}
//                     stroke="#00ff41"
//                     strokeWidth="2"
//                     opacity="0.8"
//                     filter="url(#glow)"
//                   />
                  
//                   {/* Scan trail with gradient */}
//                   {Array.from({ length: 60 }, (_, i) => (
//                     <line
//                       key={i}
//                       x1="50%"
//                       y1="50%"
//                       x2={`${50 + 40 * Math.cos(((scanProgress - i * 1.5) - 90) * Math.PI / 180)}%`}
//                       y2={`${50 + 40 * Math.sin(((scanProgress - i * 1.5) - 90) * Math.PI / 180)}%`}
//                       stroke="#00ff41"
//                       strokeWidth="1"
//                       opacity={0.5 - (i * 0.008)}
//                     />
//                   ))}
//                 </>
                
//                 {/* SVG Filters */}
//                 <defs>
//                   <filter id="glow">
//                     <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
//                     <feMerge>
//                       <feMergeNode in="coloredBlur"/>
//                       <feMergeNode in="SourceGraphic"/>
//                     </feMerge>
//                   </filter>
//                   <filter id="turbulence">
//                     <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="turbulence"/>
//                     <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="2" xChannelSelector="R" yChannelSelector="G"/>
//                   </filter>
//                 </defs>
//               </svg>
              
//               {/* Enhanced signal points with quantum effects */}
//               {channels.map(channel => {
//                 const x = 50 + (channel.position.distance * 0.4) * Math.cos((channel.position.angle - 90) * Math.PI / 180);
//                 const y = 50 + (channel.position.distance * 0.4) * Math.sin((channel.position.angle - 90) * Math.PI / 180);
//                 const isDetected = detectedSignals.includes(channel.id);
//                 const isActive = activeSignal === channel.id;
//                 const isHovered = hoveredSignal === channel.id;
                
//                 return (
//                   <ChannelSignal
//                     key={channel.id}
//                     channel={channel}
//                     x={x}
//                     y={y}
//                     isDetected={isDetected}
//                     isActive={isActive}
//                     isHovered={isHovered}
//                     onSelect={handleChannelSelect}
//                     onHover={handleHoverSignal}
//                     onLeave={handleLeaveSignal}
//                   />
//                 );
//               })}
              
//               {/* Center beacon with quantum core */}
//               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//                 <div className="w-6 h-6 bg-green-400 rounded-full animate-pulse relative">
//                   <div className="absolute inset-0 bg-green-400 rounded-full animate-ping" />
//                   <div className="absolute inset-[-4px] border-2 border-green-400 rounded-full opacity-50" />
//                   {/* Quantum core effect */}
//                   <div className="absolute inset-[-10px] rounded-full" style={{
//                     background: `radial-gradient(circle, transparent 30%, ${Math.sin(pulseWave) > 0 ? '#00ff41' : '#00ff88'}20 50%, transparent 70%)`,
//                     animation: 'rotate 4s linear infinite reverse'
//                   }} />
//                 </div>
//               </div>
//             </div>
            
//             {/* Control buttons and status indicators */}
//             <div className="mt-6 space-y-4">
//               <div className="flex gap-2">
//                 <button
//                   onClick={() => {
//                     setDetectedSignals([]);
//                     setScanProgress(0);
//                   }}
//                   className="flex-1 py-2 px-4 rounded font-mono text-xs transition-all bg-green-500/20 border border-green-500/40 text-green-400 hover:bg-green-500/30 hover:border-green-500/60"
//                 >
//                   RESET SCAN
//                 </button>
                
//                 <button
//                   onClick={() => {
//                     setSelectedChannel(null);
//                     setActiveSignal(null);
//                   }}
//                   className="px-4 py-2 bg-red-500/20 border border-red-500/40 text-red-400 rounded font-mono text-xs hover:bg-red-500/30 hover:border-red-500/60 transition-all"
//                 >
//                   CLEAR
//                 </button>
//               </div>
              
//               {/* Status indicators */}
//               <div className="flex justify-center gap-4 text-xs font-mono">
//                 <div className="flex items-center gap-2">
//                   <Satellite className="w-4 h-4 text-green-400 animate-pulse" />
//                   <span className="text-gray-400">SCANNING: ACTIVE</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Radio className="w-4 h-4 text-green-400" />
//                   <span className="text-gray-400">SIGNALS: {detectedSignals.length}/{channels.length}</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Information Panel */}
//           <div className="space-y-6">
//             {/* Selected Channel Info - Reduced height and content */}
//             {selectedChannel && (
//               <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-4 animate-fade-in relative overflow-hidden">
//                 {/* Animated background pattern */}
//                 <div className="absolute inset-0 opacity-5">
//                   <div className="absolute inset-0" style={{
//                     backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,255,65,0.1) 10px, rgba(0,255,65,0.1) 20px)`,
//                     animation: 'slide 20s linear infinite'
//                   }} />
//                 </div>
                
//                 <div className="relative z-10">
//                   <div className="flex items-center justify-between mb-3">
//                     <h3 className="text-green-400 font-mono text-sm flex items-center gap-2">
//                       <Activity className="w-4 h-4 animate-pulse" />
//                       CHANNEL LOCKED
//                     </h3>
//                     <span className="text-xs font-mono text-green-400 px-2 py-1 bg-green-500/10 rounded">
//                       {channels.find(c => c.id === selectedChannel)?.frequency}
//                     </span>
//                   </div>
                  
//                   <div className="space-y-2">
//                     <div className="flex items-center justify-between">
//                       <span className="text-xs font-mono text-gray-500 uppercase">Platform:</span>
//                       <span className="font-mono text-xs text-green-400">{channels.find(c => c.id === selectedChannel)?.type}</span>
//                     </div>
                    
//                     <div className="flex items-center justify-between">
//                       <span className="text-xs font-mono text-gray-500 uppercase">Connection:</span>
//                       <span className="font-mono text-xs text-green-400">
//                         {channels.find(c => c.id === selectedChannel)?.data}
//                       </span>
//                     </div>
                    
//                     <div className="mt-3 pt-3 border-t border-green-500/20">
//                       <a 
//                         href={`https://${channels.find(c => c.id === selectedChannel)?.data}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-mono text-xs group"
//                       >
//                         ESTABLISH CONNECTION 
//                         <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Enhanced Message Transmitter */}
//             <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-6 relative overflow-hidden">
//               <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full filter blur-3xl" />
              
//               <h3 className="text-green-400 font-mono text-lg mb-4 flex items-center gap-2">
//                 <Zap className="w-5 h-5" />
//                 DIRECT TRANSMISSION
//               </h3>
              
//               <form onSubmit={handleFormSubmit} className="space-y-4">
//                 <div className="relative">
//                   <input
//                     type="text"
//                     placeholder="CALLSIGN"
//                     value={formData.name}
//                     onChange={(e) => setFormData({...formData, name: e.target.value})}
//                     className="w-full px-4 py-3 bg-black/40 border border-green-500/30 rounded text-green-400 placeholder-gray-500 font-mono text-sm focus:border-green-500/50 focus:outline-none transition-all"
//                     disabled={isTransmitting}
//                   />
//                   <div className={`absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${formData.name ? 'bg-green-400' : 'bg-gray-600'} transition-colors`} />
//                 </div>
                
//                 <div className="relative">
//                   <input
//                     type="email"
//                     placeholder="RETURN FREQUENCY"
//                     value={formData.email}
//                     onChange={(e) => setFormData({...formData, email: e.target.value})}
//                     className="w-full px-4 py-3 bg-black/40 border border-green-500/30 rounded text-green-400 placeholder-gray-500 font-mono text-sm focus:border-green-500/50 focus:outline-none transition-all"
//                     disabled={isTransmitting}
//                   />
//                   <div className={`absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${formData.email ? 'bg-green-400' : 'bg-gray-600'} transition-colors`} />
//                 </div>
                
//                 <div className="relative">
//                   <textarea
//                     placeholder="MESSAGE PAYLOAD..."
//                     rows={4}
//                     value={formData.message}
//                     onChange={(e) => setFormData({...formData, message: e.target.value})}
//                     className="w-full px-4 py-3 bg-black/40 border border-green-500/30 rounded text-green-400 placeholder-gray-500 font-mono text-sm focus:border-green-500/50 focus:outline-none transition-all resize-none"
//                     disabled={isTransmitting}
//                   />
//                   <div className={`absolute right-3 top-3 w-2 h-2 rounded-full ${formData.message ? 'bg-green-400' : 'bg-gray-600'} transition-colors`} />
//                   <div className="absolute bottom-2 right-3 text-xs font-mono text-gray-500">
//                     {formData.message.length}/500
//                   </div>
//                 </div>
                
//                 {/* Transmission progress */}
//                 {isTransmitting && (
//                   <div className="space-y-2">
//                     <div className="flex justify-between text-xs font-mono text-gray-400">
//                       <span>TRANSMITTING...</span>
//                       <span>{Math.floor(transmissionProgress)}%</span>
//                     </div>
//                     <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden">
//                       <div 
//                         className="h-full bg-green-400 rounded-full transition-all duration-300 relative"
//                         style={{ width: `${transmissionProgress}%` }}
//                       >
//                         <div className="absolute inset-0 bg-white/20 animate-pulse" />
//                       </div>
//                     </div>
//                   </div>
//                 )}
                
//                 <button
//                   type="submit"
//                   disabled={isTransmitting || !formData.name || !formData.email || !formData.message}
//                   className={`w-full py-3 font-mono font-semibold rounded transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden ${
//                     isTransmitting 
//                       ? 'bg-green-950/30 border border-green-500/30 text-gray-400 cursor-not-allowed' 
//                       : 'bg-green-400 text-black hover:bg-green-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-green-400/30'
//                   }`}
//                 >
//                   {isTransmitting ? (
//                     <>
//                       <Loader className="w-4 h-4 animate-spin" />
//                       TRANSMITTING... {Math.floor(transmissionProgress)}%
//                     </>
//                   ) : (
//                     <>
//                       <Send className="w-4 h-4" />
//                       INITIATE TRANSMISSION
//                     </>
//                   )}
                  
//                   {/* Button shine effect */}
//                   {!isTransmitting && (
//                     <div className="absolute inset-0 -top-full bg-gradient-to-b from-white/20 to-transparent transform skew-y-12 group-hover:translate-y-full transition-transform duration-700" />
//                   )}
//                 </button>
//               </form>
//             </div>

//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes slide {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(20px);
//           }
//         }

//         @keyframes rotate {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }

//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-in {
//           animation: fade-in 0.5s ease-out;
//         }

//         .signal-bar {
//           width: 4px;
//           height: 14px;
//           border-radius: 2px;
//           transition: all 0.3s ease;
//           animation: audioWave 1s ease-in-out infinite;
//         }

//         @keyframes audioWave {
//           0%, 100% {
//             transform: scaleY(0.7);
//           }
//           50% {
//             transform: scaleY(1);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }
































// app/contact/page.js
// 'use client';
// import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
// import { Send, Satellite, Radio, Activity, Zap, Github, Linkedin, Twitter, ChevronRight, Instagram, Facebook, Loader, Sparkles } from 'lucide-react';
// import { useTransition } from '../layout';
// import ScrambledText from '@/components/ScrambledText';

// // Memoized channel component to prevent unnecessary re-renders
// const ChannelSignal = React.memo(({ channel, x, y, isDetected, isActive, isHovered, onSelect, onHover, onLeave }) => {
//   return (
//     <div
//       id={`signal-${channel.id}`}
//       className={`absolute w-14 h-14 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
//         isDetected ? 'opacity-100' : 'opacity-0'
//       }`}
//       style={{ 
//         left: `${x}%`, 
//         top: `${y}%`,
//         transform: `translate(-50%, -50%) scale(${isActive ? 1.3 : isHovered ? 1.15 : 1})`
//       }}
//       onClick={() => onSelect(channel.id)}
//       onMouseEnter={() => onHover(channel.id)}
//       onMouseLeave={onLeave}
//     >
//       <div 
//         className="relative w-full h-full rounded-full border-2 flex items-center justify-center transition-all backdrop-blur-sm"
//         style={{ 
//           borderColor: isActive ? channel.glowColor : channel.color,
//           backgroundColor: isActive ? `${channel.color}30` : 'rgba(0,0,0,0.7)',
//           boxShadow: isActive ? `0 0 30px ${channel.glowColor}, inset 0 0 20px ${channel.glowColor}40` : 
//                     isHovered ? `0 0 20px ${channel.glowColor}60` : 'none'
//         }}
//       >
//         <channel.icon 
//           className="w-6 h-6 transition-all" 
//           style={{ 
//             color: isActive ? '#ffffff' : channel.color,
//             filter: isActive ? `drop-shadow(0 0 8px ${channel.glowColor})` : 'none'
//           }}
//         />
        
//         {isHovered && (
//           <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-0.5">
//             {[...Array(5)].map((_, i) => (
//               <div
//                 key={i}
//                 className="signal-bar"
//                 style={{
//                   backgroundColor: i < channel.strength / 20 ? channel.color : '#333',
//                   opacity: i < channel.strength / 20 ? 1 : 0.3,
//                   animationDelay: `${i * 0.1}s`
//                 }}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// });

// export default function ContactPage() {
//   const { isTransitioning } = useTransition();
//   const [activeSignal, setActiveSignal] = useState(null);
//   const [scanProgress, setScanProgress] = useState(0);
//   const [isScanning, setIsScanning] = useState(true); // Always keep scanning active
//   const [detectedSignals, setDetectedSignals] = useState([]);
//   const [selectedChannel, setSelectedChannel] = useState(null);
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [isTransmitting, setIsTransmitting] = useState(false);
//   const [transmissionProgress, setTransmissionProgress] = useState(0);
//   const [interference, setInterference] = useState(0);
//   const [connectionQuality, setConnectionQuality] = useState(100);
//   const [hoveredSignal, setHoveredSignal] = useState(null);
//   const [particles, setParticles] = useState([]);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [energyField, setEnergyField] = useState([]);
//   const [pulseWave, setPulseWave] = useState(0);

  
//   const radarRef = useRef(null);
//   const animationFrameRef = useRef(null);
//   const lastFrameTimeRef = useRef(0);
//   const mousePositionRef = useRef({ x: 0, y: 0 });

//   // Memoized channels data
//   const channels = useMemo(() => [
//     {
//       id: 'linkedin',
//       type: 'Professional Network',
//       frequency: '2.4GHz',
//       bandwidth: 'HIGH',
//       signal: 'STABLE',
//       strength: 95,
//       data: 'linkedin.com/in/rizwi',
//       icon: Linkedin,
//       position: { angle: 72, distance: 75 },
//       color: '#00ff41',
//       glowColor: '#00ff88',
//       description: 'Professional connections and career updates'
//     },
//     {
//       id: 'github',
//       type: 'Code Repository',
//       frequency: '5.0GHz',
//       bandwidth: 'ULTRA',
//       signal: 'ACTIVE',
//       strength: 98,
//       data: 'github.com/rizwi',
//       icon: Github,
//       position: { angle: 134, distance: 60 },
//       color: '#00ff41',
//       glowColor: '#00ff88',
//       description: 'Open source projects and code contributions'
//     },
//     {
//       id: 'twitter',
//       type: 'Micro Blog',
//       frequency: '3.6GHz',
//       bandwidth: 'MEDIUM',
//       signal: 'LIVE',
//       strength: 88,
//       data: 'twitter.com/rizwi_dev',
//       icon: Twitter,
//       position: { angle: 350, distance: 65 },
//       color: '#00ff41',
//       glowColor: '#00ff88',
//       description: 'Tech thoughts and real-time updates'
//     },
//     {
//       id: 'instagram',
//       type: 'Visual Stream',
//       frequency: '2.8GHz',
//       bandwidth: 'HIGH',
//       signal: 'STREAMING',
//       strength: 92,
//       data: 'instagram.com/rizwi.dev',
//       icon: Instagram,
//       position: { angle: 200, distance: 80 },
//       color: '#00ff41',
//       glowColor: '#00ff88',
//       description: 'Visual journey and creative moments'
//     },
//     {
//       id: 'facebook',
//       type: 'Social Hub',
//       frequency: '3.2GHz',
//       bandwidth: 'STANDARD',
//       signal: 'CONNECTED',
//       strength: 85,
//       data: 'facebook.com/rizwi.developer',
//       icon: Facebook,
//       position: { angle: 280, distance: 40 },
//       color: '#00ff41',
//       glowColor: '#00ff88',
//       description: 'Community engagement and updates'
//     }
//   ], []);

//   // Initialize particles with optimized data structure
//   useEffect(() => {
//     const particleCount = 100;
//     const newParticles = Array(particleCount).fill(null).map((_, i) => ({
//       id: i,
//       x: Math.random() * window.innerWidth,
//       y: Math.random() * window.innerHeight,
//       vx: (Math.random() - 0.5) * 0.5,
//       vy: (Math.random() - 0.5) * 0.5,
//       size: Math.random() * 3 + 1,
//       opacity: Math.random() * 0.5 + 0.2,
//       pulseSpeed: Math.random() * 0.02 + 0.01,
//       pulsePhase: Math.random() * Math.PI * 2,
//       color: Math.random() > 0.8 ? '#00ff41' : '#00ff8850',
//       gridX: 0,
//       gridY: 0
//     }));
//     setParticles(newParticles);

//     // Initialize energy field
//     const fieldPoints = Array(20).fill(null).map(() => ({
//       x: Math.random() * window.innerWidth,
//       y: Math.random() * window.innerHeight,
//       radius: Math.random() * 100 + 50,
//       intensity: Math.random() * 0.5 + 0.5,
//       pulseSpeed: Math.random() * 0.02 + 0.01,
//       color: Math.random() > 0.5 ? '#00ff41' : '#00ff88'
//     }));
//     setEnergyField(fieldPoints);
//   }, []);

//   // Optimized mouse tracking with ref
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       mousePositionRef.current = { x: e.clientX, y: e.clientY };
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   // Unified animation loop using requestAnimationFrame
//   useEffect(() => {
//     let scanLastUpdate = 0;
//     let pulseLastUpdate = 0;
//     let particleLastUpdate = 0;
//     let connectionQualityLastUpdate = 0;
    
//     const animate = (currentTime) => {
//       // Particle animation (60 FPS)
//       if (currentTime - particleLastUpdate > 16) {
//         setParticles(prevParticles => {
//           // Create spatial grid for optimization
//           const gridSize = 100;
//           const grid = {};
          
//           // First pass: assign particles to grid cells
//           prevParticles.forEach(particle => {
//             particle.gridX = Math.floor(particle.x / gridSize);
//             particle.gridY = Math.floor(particle.y / gridSize);
//             const key = `${particle.gridX},${particle.gridY}`;
//             if (!grid[key]) grid[key] = [];
//             grid[key].push(particle);
//           });
          
//           return prevParticles.map(particle => {
//             const newParticle = { ...particle };
            
//             // Mouse influence
//             const dx = mousePositionRef.current.x - particle.x;
//             const dy = mousePositionRef.current.y - particle.y;
//             const distance = Math.sqrt(dx * dx + dy * dy);
//             const maxDistance = 150;
            
//             if (distance < maxDistance) {
//               const force = (1 - distance / maxDistance) * 0.1;
//               newParticle.vx += (dx / distance) * force;
//               newParticle.vy += (dy / distance) * force;
//             }

//             // Update position
//             newParticle.x += newParticle.vx;
//             newParticle.y += newParticle.vy;

//             // Damping
//             newParticle.vx *= 0.98;
//             newParticle.vy *= 0.98;

//             // Boundary check
//             if (newParticle.x < 0 || newParticle.x > window.innerWidth) newParticle.vx *= -1;
//             if (newParticle.y < 0 || newParticle.y > window.innerHeight) newParticle.vy *= -1;

//             // Find nearby particles using spatial grid
//             const nearbyParticles = [];
//             for (let gx = particle.gridX - 1; gx <= particle.gridX + 1; gx++) {
//               for (let gy = particle.gridY - 1; gy <= particle.gridY + 1; gy++) {
//                 const key = `${gx},${gy}`;
//                 if (grid[key]) {
//                   grid[key].forEach(other => {
//                     if (other.id !== particle.id) {
//                       const dist = Math.sqrt(
//                         Math.pow(particle.x - other.x, 2) + 
//                         Math.pow(particle.y - other.y, 2)
//                       );
//                       if (dist < 100) {
//                         nearbyParticles.push(other);
//                       }
//                     }
//                   });
//                 }
//               }
//             }
            
//             newParticle.connections = nearbyParticles.slice(0, 3);
//             return newParticle;
//           });
//         });
//         particleLastUpdate = currentTime;
//       }
      
//       // Pulse wave animation (20 FPS)
//       if (currentTime - pulseLastUpdate > 50) {
//         setPulseWave(prev => (prev + 0.05) % (Math.PI * 2));
//         pulseLastUpdate = currentTime;
//       }
      
//       // Radar scanning (40 FPS) - Always active
//       if (currentTime - scanLastUpdate > 25) {
//         setScanProgress(prev => {
//           const next = (prev + 1.5) % 360;
          
//           // Random interference
//           if (Math.random() > 0.98) {
//             setInterference(Math.random() * 30 + 70);
//             setTimeout(() => setInterference(0), 300);
//           }
          
//           // Check for signal detection
//           channels.forEach(channel => {
//             const diff = Math.abs(next - channel.position.angle);
//             const proximity = Math.min(diff, 360 - diff);
            
//             if (proximity < 3) {
//               setDetectedSignals(prev => {
//                 if (!prev.includes(channel.id)) {
//                   return [...prev, channel.id];
//                 }
//                 return prev;
//               });
//             }
//           });
          
//           // Don't stop scanning - keep rotating continuously
//           return next;
//         });
//         scanLastUpdate = currentTime;
//       }
      
//       // Connection quality (1 FPS)
//       if (currentTime - connectionQualityLastUpdate > 1000) {
//         setConnectionQuality(prev => {
//           const change = (Math.random() - 0.5) * 10;
//           return Math.max(85, Math.min(100, prev + change));
//         });
//         connectionQualityLastUpdate = currentTime;
//       }
      
//       animationFrameRef.current = requestAnimationFrame(animate);
//     };
    
//     animationFrameRef.current = requestAnimationFrame(animate);
    
//     return () => {
//       if (animationFrameRef.current) {
//         cancelAnimationFrame(animationFrameRef.current);
//       }
//     };
//   }, [channels]);

//   const handleChannelSelect = useCallback((channelId) => {
//     setSelectedChannel(channelId);
//     setActiveSignal(channelId);
    
//     const channel = channels.find(c => c.id === channelId);
//     if (channel) {
//       setConnectionQuality(channel.strength);
//     }
//   }, [channels]);

//   const handleFormSubmit = useCallback((e) => {
//     e.preventDefault();
//     if (!formData.name || !formData.email || !formData.message) return;

//     setIsTransmitting(true);
//     setTransmissionProgress(0);
    
//     const progressInterval = setInterval(() => {
//       setTransmissionProgress(prev => {
//         if (prev >= 100) {
//           clearInterval(progressInterval);
//           setTimeout(() => {
//             setIsTransmitting(false);
//             setFormData({ name: '', email: '', message: '' });
//             setTransmissionProgress(0);
//           }, 500);
//           return 100;
//         }
//         return prev + Math.random() * 15 + 5;
//       });
//     }, 200);
//   }, [formData]);

//   const handleHoverSignal = useCallback((id) => setHoveredSignal(id), []);
//   const handleLeaveSignal = useCallback(() => setHoveredSignal(null), []);

//   // Memoized particle connections for rendering
//   const particleConnections = useMemo(() => {
//     const connections = [];
//     particles.forEach((particle, i) => {
//       if (particle.connections) {
//         particle.connections.forEach((connected, j) => {
//           const distance = Math.sqrt(
//             Math.pow(particle.x - connected.x, 2) + 
//             Math.pow(particle.y - connected.y, 2)
//           );
//           const opacity = (1 - distance / 100) * 0.3;
          
//           connections.push({
//             key: `${i}-${j}`,
//             x1: particle.x,
//             y1: particle.y,
//             x2: connected.x,
//             y2: connected.y,
//             opacity
//           });
//         });
//       }
//     });
//     return connections;
//   }, [particles]);

//   return (
//     <div className="min-h-screen pt-24 sm:pt-32 px-4 sm:px-6 relative overflow-hidden">
//       {/* Enhanced animated background */}
//       <div className="fixed inset-0 z-0">
//         <div className="absolute inset-0 bg-gradient-to-br from-black via-green-950/10 to-black" />
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,65,0.1)_0%,transparent_70%)]" />
        
//         {/* Animated grid with perspective */}
//         <div className="absolute inset-0 opacity-10" style={{
//           backgroundImage: `linear-gradient(rgba(0,255,65,0.3) 1px, transparent 1px),
//                            linear-gradient(90deg, rgba(0,255,65,0.3) 1px, transparent 1px)`,
//           backgroundSize: '50px 50px',
//           transform: 'perspective(500px) rotateX(60deg) translateY(-50%)',
//           transformOrigin: 'center'
//         }} />

//         {/* Energy field visualization */}
//         {energyField.map((field, i) => (
//           <div
//             key={i}
//             className="absolute rounded-full"
//             style={{
//               left: field.x,
//               top: field.y,
//               width: field.radius * 2,
//               height: field.radius * 2,
//               transform: 'translate(-50%, -50%)',
//               background: `radial-gradient(circle, ${field.color}10 0%, transparent 70%)`,
//               opacity: field.intensity * (0.5 + 0.5 * Math.sin(pulseWave + i)),
//               filter: 'blur(30px)',
//               pointerEvents: 'none'
//             }}
//           />
//         ))}
//       </div>

//       {/* Particle system */}
//       <svg className="fixed inset-0 z-0 pointer-events-none" style={{ width: '100%', height: '100%' }}>
//         {/* Particle connections */}
//         {particleConnections.map(conn => (
//           <line
//             key={conn.key}
//             x1={conn.x1}
//             y1={conn.y1}
//             x2={conn.x2}
//             y2={conn.y2}
//             stroke="#00ff41"
//             strokeWidth="0.5"
//             opacity={conn.opacity}
//           />
//         ))}
        
//         {/* Particles */}
//         {particles.map((particle) => (
//           <circle
//             key={particle.id}
//             cx={particle.x}
//             cy={particle.y}
//             r={particle.size * (1 + 0.3 * Math.sin(pulseWave + particle.pulsePhase))}
//             fill={particle.color}
//             opacity={particle.opacity}
//           >
//             <animate
//               attributeName="opacity"
//               values={`${particle.opacity};${particle.opacity * 0.5};${particle.opacity}`}
//               dur="3s"
//               repeatCount="indefinite"
//             />
//           </circle>
//         ))}
//       </svg>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header - Left aligned like other pages */}
//         <div className="mb-8">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-green-400 mb-4">
//             <span className="text-gray-400">&gt;</span> <ScrambledText text="SIGNAL_DETECTION.SYS" />
//           </h2>
//           <div className="flex items-center gap-4 text-gray-400 font-mono text-sm">
//             <span className="flex items-center gap-2">
//               <Activity className="w-4 h-4 text-green-400 animate-pulse" />
//               SCANNING
//             </span>
//             <span className="text-green-400">◈</span>
//             <span className="flex items-center gap-2">
//               <Radio className="w-4 h-4 text-green-400" />
//               {detectedSignals.length}/{channels.length} CHANNELS
//             </span>
//             <span className="text-green-400">◈</span>
//             <span className="flex items-center gap-2">
//               <Sparkles className="w-4 h-4 text-green-400 animate-pulse" />
//               QUANTUM FIELD ACTIVE
//             </span>
//           </div>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-8">
//           {/* Enhanced Radar Interface with Constellation */}
//           <div className="relative">
//             <div className="relative w-full max-w-[500px] mx-auto aspect-square" ref={radarRef}>
//               {/* Radar background effects */}
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent rounded-full animate-pulse" />
              
//               {/* Radar SVG */}
//               <svg className="absolute inset-0 w-full h-full">
//                 {/* Grid lines */}
//                 {[30, 60, 90, 120, 150].map(angle => (
//                   <line
//                     key={angle}
//                     x1="50%"
//                     y1="50%"
//                     x2={`${50 + 40 * Math.cos((angle - 90) * Math.PI / 180)}%`}
//                     y2={`${50 + 40 * Math.sin((angle - 90) * Math.PI / 180)}%`}
//                     stroke="#00ff41"
//                     strokeWidth="0.5"
//                     opacity="0.1"
//                   />
//                 ))}
                
//                 {/* Concentric circles with labels */}
//                 {[20, 40, 60, 80].map((radius, i) => (
//                   <g key={radius}>
//                     <circle 
//                       cx="50%" 
//                       cy="50%" 
//                       r={`${radius}%`} 
//                       fill="none" 
//                       stroke="#00ff41" 
//                       strokeWidth="1" 
//                       opacity={0.2 - i * 0.03}
//                       strokeDasharray={i % 2 === 0 ? "5,5" : "none"}
//                     />
//                     <text
//                       x="50%"
//                       y={`${50 - radius + 2}%`}
//                       textAnchor="middle"
//                       fill="#00ff41"
//                       fontSize="10"
//                       opacity="0.3"
//                     >
//                       {radius}km
//                     </text>
//                   </g>
//                 ))}
                
//                 {/* Cross lines */}
//                 <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#00ff41" strokeWidth="1" opacity="0.15" />
//                 <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#00ff41" strokeWidth="1" opacity="0.15" />
                
//                 {/* Interference effect */}
//                 {interference > 0 && (
//                   <circle
//                     cx="50%"
//                     cy="50%"
//                     r={`${interference}%`}
//                     fill="none"
//                     stroke="#ff0000"
//                     strokeWidth="2"
//                     opacity={interference / 100}
//                     strokeDasharray="2,4"
//                   >
//                     <animate
//                       attributeName="r"
//                       values={`${interference}%;${interference + 10}%;${interference}%`}
//                       dur="0.3s"
//                       repeatCount="indefinite"
//                     />
//                   </circle>
//                 )}
                
//                 {/* Enhanced scanning line - Always active */}
//                 <>
//                   <line
//                     x1="50%"
//                     y1="50%"
//                     x2={`${50 + 40 * Math.cos((scanProgress - 90) * Math.PI / 180)}%`}
//                     y2={`${50 + 40 * Math.sin((scanProgress - 90) * Math.PI / 180)}%`}
//                     stroke="#00ff41"
//                     strokeWidth="2"
//                     opacity="0.8"
//                     filter="url(#glow)"
//                   />
                  
//                   {/* Scan trail with gradient */}
//                   {Array.from({ length: 60 }, (_, i) => (
//                     <line
//                       key={i}
//                       x1="50%"
//                       y1="50%"
//                       x2={`${50 + 40 * Math.cos(((scanProgress - i * 1.5) - 90) * Math.PI / 180)}%`}
//                       y2={`${50 + 40 * Math.sin(((scanProgress - i * 1.5) - 90) * Math.PI / 180)}%`}
//                       stroke="#00ff41"
//                       strokeWidth="1"
//                       opacity={0.5 - (i * 0.008)}
//                     />
//                   ))}
//                 </>
                
//                 {/* SVG Filters */}
//                 <defs>
//                   <filter id="glow">
//                     <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
//                     <feMerge>
//                       <feMergeNode in="coloredBlur"/>
//                       <feMergeNode in="SourceGraphic"/>
//                     </feMerge>
//                   </filter>
//                   <filter id="turbulence">
//                     <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="turbulence"/>
//                     <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="2" xChannelSelector="R" yChannelSelector="G"/>
//                   </filter>
//                 </defs>
//               </svg>
              
//               {/* Enhanced signal points with quantum effects */}
//               {channels.map(channel => {
//                 const x = 50 + (channel.position.distance * 0.4) * Math.cos((channel.position.angle - 90) * Math.PI / 180);
//                 const y = 50 + (channel.position.distance * 0.4) * Math.sin((channel.position.angle - 90) * Math.PI / 180);
//                 const isDetected = detectedSignals.includes(channel.id);
//                 const isActive = activeSignal === channel.id;
//                 const isHovered = hoveredSignal === channel.id;
                
//                 return (
//                   <ChannelSignal
//                     key={channel.id}
//                     channel={channel}
//                     x={x}
//                     y={y}
//                     isDetected={isDetected}
//                     isActive={isActive}
//                     isHovered={isHovered}
//                     onSelect={handleChannelSelect}
//                     onHover={handleHoverSignal}
//                     onLeave={handleLeaveSignal}
//                   />
//                 );
//               })}
              
//               {/* Center beacon with quantum core */}
//               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//                 <div className="w-6 h-6 bg-green-400 rounded-full animate-pulse relative">
//                   <div className="absolute inset-0 bg-green-400 rounded-full animate-ping" />
//                   <div className="absolute inset-[-4px] border-2 border-green-400 rounded-full opacity-50" />
//                   {/* Quantum core effect */}
//                   <div className="absolute inset-[-10px] rounded-full" style={{
//                     background: `radial-gradient(circle, transparent 30%, ${Math.sin(pulseWave) > 0 ? '#00ff41' : '#00ff88'}20 50%, transparent 70%)`,
//                     animation: 'rotate 4s linear infinite reverse'
//                   }} />
//                 </div>
//               </div>
//             </div>
            
//             {/* Control buttons and status indicators */}
//             <div className="mt-6 space-y-4">
//               <div className="flex gap-2">
//                 <button
//                   onClick={() => {
//                     setDetectedSignals([]);
//                     setScanProgress(0);
//                   }}
//                   className="flex-1 py-2 px-4 rounded font-mono text-xs transition-all bg-green-500/20 border border-green-500/40 text-green-400 hover:bg-green-500/30 hover:border-green-500/60"
//                 >
//                   RESET SCAN
//                 </button>
                
//                 <button
//                   onClick={() => {
//                     setSelectedChannel(null);
//                     setActiveSignal(null);
//                   }}
//                   className="px-4 py-2 bg-red-500/20 border border-red-500/40 text-red-400 rounded font-mono text-xs hover:bg-red-500/30 hover:border-red-500/60 transition-all"
//                 >
//                   CLEAR
//                 </button>
//               </div>
              
//               {/* Status indicators */}
//               <div className="flex justify-center gap-4 text-xs font-mono">
//                 <div className="flex items-center gap-2">
//                   <Satellite className="w-4 h-4 text-green-400 animate-pulse" />
//                   <span className="text-gray-400">SCANNING: ACTIVE</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Radio className="w-4 h-4 text-green-400" />
//                   <span className="text-gray-400">SIGNALS: {detectedSignals.length}/{channels.length}</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Information Panel */}
//           <div className="flex flex-col space-y-5">
//             {/* Selected Channel Info - Reduced height and content */}
//             {selectedChannel && (
//               <div className="bg-black/60 backdrop-blur-sm mt-5 border border-green-500/30 rounded-lg p-4 animate-fade-in relative overflow-hidden order-1 lg:order-2">
//                 {/* Animated background pattern */}
//                 <div className="absolute inset-0 opacity-5">
//                   <div className="absolute inset-0" style={{
//                     backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,255,65,0.1) 10px, rgba(0,255,65,0.1) 20px)`,
//                     animation: 'slide 20s linear infinite'
//                   }} />
//                 </div>
                
//                 <div className="relative z-10">
//                   <div className="flex items-center justify-between mb-3">
//                     <h3 className="text-green-400 font-mono text-sm flex items-center gap-2">
//                       <Activity className="w-4 h-4 animate-pulse" />
//                       CHANNEL LOCKED
//                     </h3>
//                     <span className="text-xs font-mono text-green-400 px-2 py-1 bg-green-500/10 rounded">
//                       {channels.find(c => c.id === selectedChannel)?.frequency}
//                     </span>
//                   </div>
                  
//                   <div className="space-y-2">
//                     <div className="flex items-center justify-between">
//                       <span className="text-xs font-mono text-gray-500 uppercase">Platform:</span>
//                       <span className="font-mono text-xs text-green-400">{channels.find(c => c.id === selectedChannel)?.type}</span>
//                     </div>
                    
//                     <div className="flex items-center justify-between">
//                       <span className="text-xs font-mono text-gray-500 uppercase">Connection:</span>
//                       <span className="font-mono text-xs text-green-400">
//                         {channels.find(c => c.id === selectedChannel)?.data}
//                       </span>
//                     </div>
                    
//                     <div className="mt-3 pt-3 border-t border-green-500/20">
//                       <a 
//                         href={`https://${channels.find(c => c.id === selectedChannel)?.data}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-mono text-xs group"
//                       >
//                         ESTABLISH CONNECTION 
//                         <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Enhanced Message Transmitter */}
//             <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-6 relative overflow-hidden order-2 lg:order-1">
//               <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full filter blur-3xl" />
              
//               <h3 className="text-green-400 font-mono text-lg mb-4 flex items-center gap-2">
//                 <Zap className="w-5 h-5" />
//                 DIRECT TRANSMISSION
//               </h3>
              
//               <form onSubmit={handleFormSubmit} className="space-y-4">
//                 <div className="relative">
//                   <input
//                     type="text"
//                     placeholder="CALLSIGN"
//                     value={formData.name}
//                     onChange={(e) => setFormData({...formData, name: e.target.value})}
//                     className="w-full px-4 py-3 bg-black/40 border border-green-500/30 rounded text-green-400 placeholder-gray-500 font-mono text-sm focus:border-green-500/50 focus:outline-none transition-all"
//                     disabled={isTransmitting}
//                   />
//                   <div className={`absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${formData.name ? 'bg-green-400' : 'bg-gray-600'} transition-colors`} />
//                 </div>
                
//                 <div className="relative">
//                   <input
//                     type="email"
//                     placeholder="RETURN FREQUENCY"
//                     value={formData.email}
//                     onChange={(e) => setFormData({...formData, email: e.target.value})}
//                     className="w-full px-4 py-3 bg-black/40 border border-green-500/30 rounded text-green-400 placeholder-gray-500 font-mono text-sm focus:border-green-500/50 focus:outline-none transition-all"
//                     disabled={isTransmitting}
//                   />
//                   <div className={`absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${formData.email ? 'bg-green-400' : 'bg-gray-600'} transition-colors`} />
//                 </div>
                
//                 <div className="relative">
//                   <textarea
//                     placeholder="MESSAGE PAYLOAD..."
//                     rows={4}
//                     value={formData.message}
//                     onChange={(e) => setFormData({...formData, message: e.target.value})}
//                     className="w-full px-4 py-3 bg-black/40 border border-green-500/30 rounded text-green-400 placeholder-gray-500 font-mono text-sm focus:border-green-500/50 focus:outline-none transition-all resize-none"
//                     disabled={isTransmitting}
//                   />
//                   <div className={`absolute right-3 top-3 w-2 h-2 rounded-full ${formData.message ? 'bg-green-400' : 'bg-gray-600'} transition-colors`} />
//                   <div className="absolute bottom-2 right-3 text-xs font-mono text-gray-500">
//                     {formData.message.length}/500
//                   </div>
//                 </div>
                
//                 {/* Transmission progress */}
//                 {isTransmitting && (
//                   <div className="space-y-2">
//                     <div className="flex justify-between text-xs font-mono text-gray-400">
//                       <span>TRANSMITTING...</span>
//                       <span>{Math.floor(transmissionProgress)}%</span>
//                     </div>
//                     <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden">
//                       <div 
//                         className="h-full bg-green-400 rounded-full transition-all duration-300 relative"
//                         style={{ width: `${transmissionProgress}%` }}
//                       >
//                         <div className="absolute inset-0 bg-white/20 animate-pulse" />
//                       </div>
//                     </div>
//                   </div>
//                 )}
                
//                 <button
//                   type="submit"
//                   disabled={isTransmitting || !formData.name || !formData.email || !formData.message}
//                   className={`w-full py-3 font-mono font-semibold rounded transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden ${
//                     isTransmitting 
//                       ? 'bg-green-950/30 border border-green-500/30 text-gray-400 cursor-not-allowed' 
//                       : 'bg-green-400 text-black hover:bg-green-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-green-400/30'
//                   }`}
//                 >
//                   {isTransmitting ? (
//                     <>
//                       <Loader className="w-4 h-4 animate-spin" />
//                       TRANSMITTING... {Math.floor(transmissionProgress)}%
//                     </>
//                   ) : (
//                     <>
//                       <Send className="w-4 h-4" />
//                       INITIATE TRANSMISSION
//                     </>
//                   )}
                  
//                   {/* Button shine effect */}
//                   {!isTransmitting && (
//                     <div className="absolute inset-0 -top-full bg-gradient-to-b from-white/20 to-transparent transform skew-y-12 group-hover:translate-y-full transition-transform duration-700" />
//                   )}
//                 </button>
//               </form>
//             </div>

//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes slide {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(20px);
//           }
//         }

//         @keyframes rotate {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }

//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-in {
//           animation: fade-in 0.5s ease-out;
//         }

//         .signal-bar {
//           width: 4px;
//           height: 14px;
//           border-radius: 2px;
//           transition: all 0.3s ease;
//           animation: audioWave 1s ease-in-out infinite;
//         }

//         @keyframes audioWave {
//           0%, 100% {
//             transform: scaleY(0.7);
//           }
//           50% {
//             transform: scaleY(1);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }




















// app/contact/page.js
// 'use client';
// import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
// import { Send, Satellite, Radio, Activity, Zap, Github, Linkedin, Twitter, ChevronRight, Instagram, Facebook, Loader, Sparkles } from 'lucide-react';
// import { useTransition } from '../layout';
// import ScrambledText from '@/components/ScrambledText';

// // Memoized channel component to prevent unnecessary re-renders
// const ChannelSignal = React.memo(({ channel, x, y, isDetected, isActive, isHovered, onSelect, onHover, onLeave, isMobile }) => {
//   return (
//     <div
//       id={`signal-${channel.id}`}
//       className={`absolute w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
//         isDetected ? 'opacity-100' : 'opacity-0'
//       }`}
//       style={{ 
//         left: `${x}%`, 
//         top: `${y}%`,
//         transform: `translate(-50%, -50%) scale(${isActive ? (isMobile ? 1.2 : 1.3) : isHovered && !isMobile ? 1.15 : 1})`
//       }}
//       onClick={() => onSelect(channel.id)}
//       onMouseEnter={() => !isMobile && onHover(channel.id)}
//       onMouseLeave={() => !isMobile && onLeave()}
//     >
//       <div 
//         className="relative w-full h-full rounded-full border-2 flex items-center justify-center transition-all backdrop-blur-sm"
//         style={{ 
//           borderColor: isActive ? channel.glowColor : channel.color,
//           backgroundColor: isActive ? `${channel.color}30` : 'rgba(0,0,0,0.7)',
//           boxShadow: isActive ? `0 0 30px ${channel.glowColor}, inset 0 0 20px ${channel.glowColor}40` : 
//                     (isHovered && !isMobile) ? `0 0 20px ${channel.glowColor}60` : 'none'
//         }}
//       >
//         <channel.icon 
//           className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-all" 
//           style={{ 
//             color: isActive ? '#ffffff' : channel.color,
//             filter: isActive ? `drop-shadow(0 0 8px ${channel.glowColor})` : 'none'
//           }}
//         />
        
//         {isHovered && !isMobile && (
//           <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-0.5">
//             {[...Array(5)].map((_, i) => (
//               <div
//                 key={i}
//                 className="signal-bar"
//                 style={{
//                   backgroundColor: i < channel.strength / 20 ? channel.color : '#333',
//                   opacity: i < channel.strength / 20 ? 1 : 0.3,
//                   animationDelay: `${i * 0.1}s`
//                 }}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// });

// export default function ContactPage() {
//   const { isTransitioning } = useTransition();
//   const [activeSignal, setActiveSignal] = useState(null);
//   const [scanProgress, setScanProgress] = useState(0);
//   const [isScanning, setIsScanning] = useState(true);
//   const [detectedSignals, setDetectedSignals] = useState([]);
//   const [selectedChannel, setSelectedChannel] = useState(null);
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [isTransmitting, setIsTransmitting] = useState(false);
//   const [transmissionProgress, setTransmissionProgress] = useState(0);
//   const [interference, setInterference] = useState(0);
//   const [connectionQuality, setConnectionQuality] = useState(100);
//   const [hoveredSignal, setHoveredSignal] = useState(null);
//   const [particles, setParticles] = useState([]);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [energyField, setEnergyField] = useState([]);
//   const [pulseWave, setPulseWave] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);

//   const radarRef = useRef(null);
//   const animationFrameRef = useRef(null);
//   const lastFrameTimeRef = useRef(0);
//   const mousePositionRef = useRef({ x: 0, y: 0 });

//   // Check if mobile
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
    
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   // Memoized channels data
//   const channels = useMemo(() => [
//     {
//       id: 'linkedin',
//       type: 'Professional Network',
//       frequency: '2.4GHz',
//       bandwidth: 'HIGH',
//       signal: 'STABLE',
//       strength: 95,
//       data: 'linkedin.com/in/rizwi',
//       icon: Linkedin,
//       position: { angle: 72, distance: 75 },
//       color: '#00ff41',
//       glowColor: '#00ff88',
//       description: 'Professional connections and career updates'
//     },
//     {
//       id: 'github',
//       type: 'Code Repository',
//       frequency: '5.0GHz',
//       bandwidth: 'ULTRA',
//       signal: 'ACTIVE',
//       strength: 98,
//       data: 'github.com/rizwi',
//       icon: Github,
//       position: { angle: 134, distance: 60 },
//       color: '#00ff41',
//       glowColor: '#00ff88',
//       description: 'Open source projects and code contributions'
//     },
//     {
//       id: 'twitter',
//       type: 'Micro Blog',
//       frequency: '3.6GHz',
//       bandwidth: 'MEDIUM',
//       signal: 'LIVE',
//       strength: 88,
//       data: 'twitter.com/rizwi_dev',
//       icon: Twitter,
//       position: { angle: 350, distance: 65 },
//       color: '#00ff41',
//       glowColor: '#00ff88',
//       description: 'Tech thoughts and real-time updates'
//     },
//     {
//       id: 'instagram',
//       type: 'Visual Stream',
//       frequency: '2.8GHz',
//       bandwidth: 'HIGH',
//       signal: 'STREAMING',
//       strength: 92,
//       data: 'instagram.com/rizwi.dev',
//       icon: Instagram,
//       position: { angle: 200, distance: 80 },
//       color: '#00ff41',
//       glowColor: '#00ff88',
//       description: 'Visual journey and creative moments'
//     },
//     {
//       id: 'facebook',
//       type: 'Social Hub',
//       frequency: '3.2GHz',
//       bandwidth: 'STANDARD',
//       signal: 'CONNECTED',
//       strength: 85,
//       data: 'facebook.com/rizwi.developer',
//       icon: Facebook,
//       position: { angle: 280, distance: 40 },
//       color: '#00ff41',
//       glowColor: '#00ff88',
//       description: 'Community engagement and updates'
//     }
//   ], []);

//   // Initialize particles with optimized data structure
//   useEffect(() => {
//     const particleCount = isMobile ? 50 : 100; // 50 particles for mobile, 100 for desktop
//     const newParticles = Array(particleCount).fill(null).map((_, i) => ({
//       id: i,
//       x: Math.random() * window.innerWidth,
//       y: Math.random() * window.innerHeight,
//       vx: (Math.random() - 0.5) * 0.5,
//       vy: (Math.random() - 0.5) * 0.5,
//       size: Math.random() * 3 + 1,
//       opacity: Math.random() * 0.5 + 0.2,
//       pulseSpeed: Math.random() * 0.02 + 0.01,
//       pulsePhase: Math.random() * Math.PI * 2,
//       color: Math.random() > 0.8 ? '#00ff41' : '#00ff8850',
//       gridX: 0,
//       gridY: 0
//     }));
//     setParticles(newParticles);

//     // Initialize energy field (reduced for mobile)
//     const fieldCount = isMobile ? 10 : 20;
//     const fieldPoints = Array(fieldCount).fill(null).map(() => ({
//       x: Math.random() * window.innerWidth,
//       y: Math.random() * window.innerHeight,
//       radius: Math.random() * (isMobile ? 50 : 100) + 50,
//       intensity: Math.random() * 0.5 + 0.5,
//       pulseSpeed: Math.random() * 0.02 + 0.01,
//       color: Math.random() > 0.5 ? '#00ff41' : '#00ff88'
//     }));
//     setEnergyField(fieldPoints);
//   }, [isMobile]);

//   // Optimized mouse tracking with ref (desktop only)
//   useEffect(() => {
//     if (isMobile) return; // Skip mouse tracking on mobile
    
//     const handleMouseMove = (e) => {
//       mousePositionRef.current = { x: e.clientX, y: e.clientY };
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, [isMobile]);

//   // Unified animation loop using requestAnimationFrame
//   useEffect(() => {
//     let scanLastUpdate = 0;
//     let pulseLastUpdate = 0;
//     let particleLastUpdate = 0;
//     let connectionQualityLastUpdate = 0;
    
//     const animate = (currentTime) => {
//       // Particle animation (60 FPS on desktop, 30 FPS on mobile)
//       const particleFrameTime = isMobile ? 33 : 16;
//       if (currentTime - particleLastUpdate > particleFrameTime) {
//         setParticles(prevParticles => {
//           // Create spatial grid for optimization
//           const gridSize = 100;
//           const grid = {};
          
//           // First pass: assign particles to grid cells
//           prevParticles.forEach(particle => {
//             particle.gridX = Math.floor(particle.x / gridSize);
//             particle.gridY = Math.floor(particle.y / gridSize);
//             const key = `${particle.gridX},${particle.gridY}`;
//             if (!grid[key]) grid[key] = [];
//             grid[key].push(particle);
//           });
          
//           return prevParticles.map(particle => {
//             const newParticle = { ...particle };
            
//             // Mouse influence (desktop only)
//             if (!isMobile) {
//               const dx = mousePositionRef.current.x - particle.x;
//               const dy = mousePositionRef.current.y - particle.y;
//               const distance = Math.sqrt(dx * dx + dy * dy);
//               const maxDistance = 150;
              
//               if (distance < maxDistance) {
//                 const force = (1 - distance / maxDistance) * 0.1;
//                 newParticle.vx += (dx / distance) * force;
//                 newParticle.vy += (dy / distance) * force;
//               }
//             }

//             // Update position
//             newParticle.x += newParticle.vx;
//             newParticle.y += newParticle.vy;

//             // Damping
//             newParticle.vx *= 0.98;
//             newParticle.vy *= 0.98;

//             // Boundary check
//             if (newParticle.x < 0 || newParticle.x > window.innerWidth) newParticle.vx *= -1;
//             if (newParticle.y < 0 || newParticle.y > window.innerHeight) newParticle.vy *= -1;

//             // Find nearby particles using spatial grid (reduce connections on mobile)
//             const maxConnections = isMobile ? 2 : 3;
//             const searchRadius = isMobile ? 50 : 100;
//             const nearbyParticles = [];
            
//             for (let gx = particle.gridX - 1; gx <= particle.gridX + 1; gx++) {
//               for (let gy = particle.gridY - 1; gy <= particle.gridY + 1; gy++) {
//                 const key = `${gx},${gy}`;
//                 if (grid[key]) {
//                   grid[key].forEach(other => {
//                     if (other.id !== particle.id) {
//                       const dist = Math.sqrt(
//                         Math.pow(particle.x - other.x, 2) + 
//                         Math.pow(particle.y - other.y, 2)
//                       );
//                       if (dist < searchRadius) {
//                         nearbyParticles.push(other);
//                       }
//                     }
//                   });
//                 }
//               }
//             }
            
//             newParticle.connections = nearbyParticles.slice(0, maxConnections);
//             return newParticle;
//           });
//         });
//         particleLastUpdate = currentTime;
//       }
      
//       // Pulse wave animation (20 FPS)
//       if (currentTime - pulseLastUpdate > 50) {
//         setPulseWave(prev => (prev + 0.05) % (Math.PI * 2));
//         pulseLastUpdate = currentTime;
//       }
      
//       // Radar scanning (40 FPS) - Always active
//       if (currentTime - scanLastUpdate > 25) {
//         setScanProgress(prev => {
//           const next = (prev + 1.5) % 360;
          
//           // Random interference
//           if (Math.random() > 0.98) {
//             setInterference(Math.random() * 30 + 70);
//             setTimeout(() => setInterference(0), 300);
//           }
          
//           // Check for signal detection
//           channels.forEach(channel => {
//             const diff = Math.abs(next - channel.position.angle);
//             const proximity = Math.min(diff, 360 - diff);
            
//             if (proximity < 3) {
//               setDetectedSignals(prev => {
//                 if (!prev.includes(channel.id)) {
//                   return [...prev, channel.id];
//                 }
//                 return prev;
//               });
//             }
//           });
          
//           return next;
//         });
//         scanLastUpdate = currentTime;
//       }
      
//       // Connection quality (1 FPS)
//       if (currentTime - connectionQualityLastUpdate > 1000) {
//         setConnectionQuality(prev => {
//           const change = (Math.random() - 0.5) * 10;
//           return Math.max(85, Math.min(100, prev + change));
//         });
//         connectionQualityLastUpdate = currentTime;
//       }
      
//       animationFrameRef.current = requestAnimationFrame(animate);
//     };
    
//     animationFrameRef.current = requestAnimationFrame(animate);
    
//     return () => {
//       if (animationFrameRef.current) {
//         cancelAnimationFrame(animationFrameRef.current);
//       }
//     };
//   }, [channels, isMobile]);

//   const handleChannelSelect = useCallback((channelId) => {
//     setSelectedChannel(channelId);
//     setActiveSignal(channelId);
    
//     const channel = channels.find(c => c.id === channelId);
//     if (channel) {
//       setConnectionQuality(channel.strength);
//     }
//   }, [channels]);

//   const handleFormSubmit = useCallback((e) => {
//     e.preventDefault();
//     if (!formData.name || !formData.email || !formData.message) return;

//     setIsTransmitting(true);
//     setTransmissionProgress(0);
    
//     const progressInterval = setInterval(() => {
//       setTransmissionProgress(prev => {
//         if (prev >= 100) {
//           clearInterval(progressInterval);
//           setTimeout(() => {
//             setIsTransmitting(false);
//             setFormData({ name: '', email: '', message: '' });
//             setTransmissionProgress(0);
//           }, 500);
//           return 100;
//         }
//         return prev + Math.random() * 15 + 5;
//       });
//     }, 200);
//   }, [formData]);

//   const handleHoverSignal = useCallback((id) => setHoveredSignal(id), []);
//   const handleLeaveSignal = useCallback(() => setHoveredSignal(null), []);

//   // Memoized particle connections for rendering
//   const particleConnections = useMemo(() => {
//     const connections = [];
//     particles.forEach((particle, i) => {
//       if (particle.connections) {
//         particle.connections.forEach((connected, j) => {
//           const distance = Math.sqrt(
//             Math.pow(particle.x - connected.x, 2) + 
//             Math.pow(particle.y - connected.y, 2)
//           );
//           const opacity = (1 - distance / (isMobile ? 50 : 100)) * 0.3;
          
//           connections.push({
//             key: `${i}-${j}`,
//             x1: particle.x,
//             y1: particle.y,
//             x2: connected.x,
//             y2: connected.y,
//             opacity
//           });
//         });
//       }
//     });
//     return connections;
//   }, [particles, isMobile]);

//   return (
//     <div className="min-h-screen pt-20 sm:pt-24 px-4 sm:px-6 relative overflow-hidden">
//       {/* Enhanced animated background */}
//       <div className="fixed inset-0 z-0">
//         <div className="absolute inset-0 bg-gradient-to-br from-black via-green-950/10 to-black" />
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,65,0.1)_0%,transparent_70%)]" />
        
//         {/* Animated grid with perspective (hide on small mobile) */}
//         <div className="absolute inset-0 opacity-10 hidden sm:block" style={{
//           backgroundImage: `linear-gradient(rgba(0,255,65,0.3) 1px, transparent 1px),
//                            linear-gradient(90deg, rgba(0,255,65,0.3) 1px, transparent 1px)`,
//           backgroundSize: '50px 50px',
//           transform: 'perspective(500px) rotateX(60deg) translateY(-50%)',
//           transformOrigin: 'center'
//         }} />

//         {/* Energy field visualization (reduced on mobile) */}
//         {!isMobile && energyField.map((field, i) => (
//           <div
//             key={i}
//             className="absolute rounded-full"
//             style={{
//               left: field.x,
//               top: field.y,
//               width: field.radius * 2,
//               height: field.radius * 2,
//               transform: 'translate(-50%, -50%)',
//               background: `radial-gradient(circle, ${field.color}10 0%, transparent 70%)`,
//               opacity: field.intensity * (0.5 + 0.5 * Math.sin(pulseWave + i)),
//               filter: 'blur(30px)',
//               pointerEvents: 'none'
//             }}
//           />
//         ))}
//       </div>

//       {/* Particle system */}
//       <svg className="fixed inset-0 z-0 pointer-events-none" style={{ width: '100%', height: '100%' }}>
//         {/* Particle connections */}
//         {particleConnections.map(conn => (
//           <line
//             key={conn.key}
//             x1={conn.x1}
//             y1={conn.y1}
//             x2={conn.x2}
//             y2={conn.y2}
//             stroke="#00ff41"
//             strokeWidth="0.5"
//             opacity={conn.opacity}
//           />
//         ))}
        
//         {/* Particles */}
//         {particles.map((particle) => (
//           <circle
//             key={particle.id}
//             cx={particle.x}
//             cy={particle.y}
//             r={particle.size * (1 + 0.3 * Math.sin(pulseWave + particle.pulsePhase))}
//             fill={particle.color}
//             opacity={particle.opacity}
//           >
//             <animate
//               attributeName="opacity"
//               values={`${particle.opacity};${particle.opacity * 0.5};${particle.opacity}`}
//               dur="3s"
//               repeatCount="indefinite"
//             />
//           </circle>
//         ))}
//       </svg>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header - Responsive text sizes */}
//         <div className="mb-6 sm:mb-8">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-green-400 mb-3 sm:mb-4">
//             <span className="text-gray-400">&gt;</span> <ScrambledText text="SIGNAL_DETECTION.SYS" />
//           </h2>
//           <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-gray-400 font-mono text-xs sm:text-sm">
//             <span className="flex items-center gap-1 sm:gap-2">
//               <Activity className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 animate-pulse" />
//               SCANNING
//             </span>
//             <span className="text-green-400 hidden sm:inline">◈</span>
//             <span className="flex items-center gap-1 sm:gap-2">
//               <Radio className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
//               {detectedSignals.length}/{channels.length} CHANNELS
//             </span>
//             <span className="text-green-400 hidden sm:inline">◈</span>
//             <span className="flex items-center gap-1 sm:gap-2 hidden sm:flex">
//               <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 animate-pulse" />
//               QUANTUM FIELD ACTIVE
//             </span>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
//           {/* Enhanced Radar Interface with Constellation */}
//           <div className="relative order-1">
//             <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] mx-auto aspect-square" ref={radarRef}>
//               {/* Radar background effects */}
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent rounded-full animate-pulse" />
              
//               {/* Radar SVG */}
//               <svg className="absolute inset-0 w-full h-full">
//                 {/* Grid lines (reduce on mobile) */}
//                 {(isMobile ? [30, 90, 150] : [30, 60, 90, 120, 150]).map(angle => (
//                   <line
//                     key={angle}
//                     x1="50%"
//                     y1="50%"
//                     x2={`${50 + 40 * Math.cos((angle - 90) * Math.PI / 180)}%`}
//                     y2={`${50 + 40 * Math.sin((angle - 90) * Math.PI / 180)}%`}
//                     stroke="#00ff41"
//                     strokeWidth="0.5"
//                     opacity="0.1"
//                   />
//                 ))}
                
//                 {/* Concentric circles with labels */}
//                 {(isMobile ? [20, 40, 60, 80] : [20, 40, 60, 80]).map((radius, i) => (
//                   <g key={radius}>
//                     <circle 
//                       cx="50%" 
//                       cy="50%" 
//                       r={`${radius}%`} 
//                       fill="none" 
//                       stroke="#00ff41" 
//                       strokeWidth="1" 
//                       opacity={0.2 - i * 0.03}
//                       strokeDasharray={i % 2 === 0 ? "5,5" : "none"}
//                     />
//                     {!isMobile && (
//                       <text
//                         x="50%"
//                         y={`${50 - radius + 2}%`}
//                         textAnchor="middle"
//                         fill="#00ff41"
//                         fontSize="10"
//                         opacity="0.3"
//                       >
//                         {radius}km
//                       </text>
//                     )}
//                   </g>
//                 ))}
                
//                 {/* Cross lines */}
//                 <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#00ff41" strokeWidth="1" opacity="0.15" />
//                 <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#00ff41" strokeWidth="1" opacity="0.15" />
                
//                 {/* Interference effect */}
//                 {interference > 0 && (
//                   <circle
//                     cx="50%"
//                     cy="50%"
//                     r={`${interference}%`}
//                     fill="none"
//                     stroke="#ff0000"
//                     strokeWidth="2"
//                     opacity={interference / 100}
//                     strokeDasharray="2,4"
//                   >
//                     <animate
//                       attributeName="r"
//                       values={`${interference}%;${interference + 10}%;${interference}%`}
//                       dur="0.3s"
//                       repeatCount="indefinite"
//                     />
//                   </circle>
//                 )}
                
//                 {/* Enhanced scanning line - Always active */}
//                 <>
//                   <line
//                     x1="50%"
//                     y1="50%"
//                     x2={`${50 + 40 * Math.cos((scanProgress - 90) * Math.PI / 180)}%`}
//                     y2={`${50 + 40 * Math.sin((scanProgress - 90) * Math.PI / 180)}%`}
//                     stroke="#00ff41"
//                     strokeWidth="2"
//                     opacity="0.8"
//                     filter="url(#glow)"
//                   />
                  
//                   {/* Scan trail with gradient (reduce on mobile) */}
//                   {Array.from({ length: isMobile ? 30 : 60 }, (_, i) => (
//                     <line
//                       key={i}
//                       x1="50%"
//                       y1="50%"
//                       x2={`${50 + 40 * Math.cos(((scanProgress - i * 1.5) - 90) * Math.PI / 180)}%`}
//                       y2={`${50 + 40 * Math.sin(((scanProgress - i * 1.5) - 90) * Math.PI / 180)}%`}
//                       stroke="#00ff41"
//                       strokeWidth="1"
//                       opacity={0.5 - (i * 0.008)}
//                     />
//                   ))}
//                 </>
                
//                 {/* SVG Filters */}
//                 <defs>
//                   <filter id="glow">
//                     <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
//                     <feMerge>
//                       <feMergeNode in="coloredBlur"/>
//                       <feMergeNode in="SourceGraphic"/>
//                     </feMerge>
//                   </filter>
//                   <filter id="turbulence">
//                     <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="turbulence"/>
//                     <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="2" xChannelSelector="R" yChannelSelector="G"/>
//                   </filter>
//                 </defs>
//               </svg>
              
//               {/* Enhanced signal points with quantum effects */}
//               {channels.map(channel => {
//                 const x = 50 + (channel.position.distance * 0.4) * Math.cos((channel.position.angle - 90) * Math.PI / 180);
//                 const y = 50 + (channel.position.distance * 0.4) * Math.sin((channel.position.angle - 90) * Math.PI / 180);
//                 const isDetected = detectedSignals.includes(channel.id);
//                 const isActive = activeSignal === channel.id;
//                 const isHovered = hoveredSignal === channel.id;
                
//                 return (
//                   <ChannelSignal
//                     key={channel.id}
//                     channel={channel}
//                     x={x}
//                     y={y}
//                     isDetected={isDetected}
//                     isActive={isActive}
//                     isHovered={isHovered}
//                     onSelect={handleChannelSelect}
//                     onHover={handleHoverSignal}
//                     onLeave={handleLeaveSignal}
//                     isMobile={isMobile}
//                   />
//                 );
//               })}
              
//               {/* Center beacon with quantum core */}
//               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//                 <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-green-400 rounded-full animate-pulse relative">
//                   <div className="absolute inset-0 bg-green-400 rounded-full animate-ping" />
//                   <div className="absolute inset-[-4px] border-2 border-green-400 rounded-full opacity-50" />
//                   {/* Quantum core effect (hide on mobile) */}
//                   {!isMobile && (
//                     <div className="absolute inset-[-10px] rounded-full" style={{
//                       background: `radial-gradient(circle, transparent 30%, ${Math.sin(pulseWave) > 0 ? '#00ff41' : '#00ff88'}20 50%, transparent 70%)`,
//                       animation: 'rotate 4s linear infinite reverse'
//                     }} />
//                   )}
//                 </div>
//               </div>
//             </div>
            
//             {/* Control buttons and status indicators */}
//             <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
//               <div className="flex gap-2">
//                 <button
//                   onClick={() => {
//                     setDetectedSignals([]);
//                     setScanProgress(0);
//                   }}
//                   className="flex-1 py-2 px-3 sm:px-4 rounded font-mono text-xs transition-all bg-green-500/20 border border-green-500/40 text-green-400 hover:bg-green-500/30 hover:border-green-500/60"
//                 >
//                   RESET SCAN
//                 </button>
                
//                 <button
//                   onClick={() => {
//                     setSelectedChannel(null);
//                     setActiveSignal(null);
//                   }}
//                   className="px-3 sm:px-4 py-2 bg-red-500/20 border border-red-500/40 text-red-400 rounded font-mono text-xs hover:bg-red-500/30 hover:border-red-500/60 transition-all"
//                 >
//                   CLEAR
//                 </button>
//               </div>
              
//               {/* Status indicators */}
//               <div className="flex justify-center gap-3 sm:gap-4 text-xs font-mono">
//                 <div className="flex items-center gap-1 sm:gap-2">
//                   <Satellite className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 animate-pulse" />
//                   <span className="text-gray-400">SCAN: ON</span>
//                 </div>
//                 <div className="flex items-center gap-1 sm:gap-2">
//                   <Radio className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
//                   <span className="text-gray-400">{detectedSignals.length}/{channels.length}</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Information Panel */}
//           <div className="flex flex-col space-y-4 sm:space-y-5 order-2">
//             {/* Selected Channel Info */}
//             {selectedChannel && (
//               <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-3 sm:p-4 animate-fade-in relative overflow-hidden">
//                 {/* Animated background pattern */}
//                 <div className="absolute inset-0 opacity-5">
//                   <div className="absolute inset-0" style={{
//                     backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,255,65,0.1) 10px, rgba(0,255,65,0.1) 20px)`,
//                     animation: 'slide 20s linear infinite'
//                   }} />
//                 </div>
                
//                 <div className="relative z-10">
//                   <div className="flex items-center justify-between mb-3">
//                     <h3 className="text-green-400 font-mono text-xs sm:text-sm flex items-center gap-1 sm:gap-2">
//                       <Activity className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
//                       CHANNEL LOCKED
//                     </h3>
//                     <span className="text-xs font-mono text-green-400 px-2 py-1 bg-green-500/10 rounded">
//                       {channels.find(c => c.id === selectedChannel)?.frequency}
//                     </span>
//                   </div>
                  
//                   <div className="space-y-2">
//                     <div className="flex items-center justify-between">
//                       <span className="text-xs font-mono text-gray-500 uppercase">Platform:</span>
//                       <span className="font-mono text-xs text-green-400">{channels.find(c => c.id === selectedChannel)?.type}</span>
//                     </div>
                    
//                     <div className="flex items-center justify-between">
//                       <span className="text-xs font-mono text-gray-500 uppercase">Connection:</span>
//                       <span className="font-mono text-xs text-green-400 truncate max-w-[150px] sm:max-w-none">
//                         {channels.find(c => c.id === selectedChannel)?.data}
//                       </span>
//                     </div>
                    
//                     <div className="mt-3 pt-3 border-t border-green-500/20">
//                       <a 
//                         href={`https://${channels.find(c => c.id === selectedChannel)?.data}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center gap-1 sm:gap-2 text-green-400 hover:text-green-300 font-mono text-xs group"
//                       >
//                         ESTABLISH CONNECTION 
//                         <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Enhanced Message Transmitter */}
//             <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-4 sm:p-6 relative overflow-hidden">
//               <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-green-500/10 rounded-full filter blur-3xl" />
              
//               <h3 className="text-green-400 font-mono text-base sm:text-lg mb-3 sm:mb-4 flex items-center gap-2">
//                 <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
//                 DIRECT TRANSMISSION
//               </h3>
              
//               <form onSubmit={handleFormSubmit} className="space-y-3 sm:space-y-4">
//                 <div className="relative">
//                   <input
//                     type="text"
//                     placeholder="CALLSIGN"
//                     value={formData.name}
//                     onChange={(e) => setFormData({...formData, name: e.target.value})}
//                     className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black/40 border border-green-500/30 rounded text-green-400 placeholder-gray-500 font-mono text-xs sm:text-sm focus:border-green-500/50 focus:outline-none transition-all"
//                     disabled={isTransmitting}
//                   />
//                   <div className={`absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${formData.name ? 'bg-green-400' : 'bg-gray-600'} transition-colors`} />
//                 </div>
                
//                 <div className="relative">
//                   <input
//                     type="email"
//                     placeholder="RETURN FREQUENCY"
//                     value={formData.email}
//                     onChange={(e) => setFormData({...formData, email: e.target.value})}
//                     className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black/40 border border-green-500/30 rounded text-green-400 placeholder-gray-500 font-mono text-xs sm:text-sm focus:border-green-500/50 focus:outline-none transition-all"
//                     disabled={isTransmitting}
//                   />
//                   <div className={`absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${formData.email ? 'bg-green-400' : 'bg-gray-600'} transition-colors`} />
//                 </div>
                
//                 <div className="relative">
//                   <textarea
//                     placeholder="MESSAGE PAYLOAD..."
//                     rows={3}
//                     value={formData.message}
//                     onChange={(e) => setFormData({...formData, message: e.target.value})}
//                     className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black/40 border border-green-500/30 rounded text-green-400 placeholder-gray-500 font-mono text-xs sm:text-sm focus:border-green-500/50 focus:outline-none transition-all resize-none"
//                     disabled={isTransmitting}
//                   />
//                   <div className={`absolute right-3 top-3 w-2 h-2 rounded-full ${formData.message ? 'bg-green-400' : 'bg-gray-600'} transition-colors`} />
//                   <div className="absolute bottom-2 right-3 text-xs font-mono text-gray-500">
//                     {formData.message.length}/500
//                   </div>
//                 </div>
                
//                 {/* Transmission progress */}
//                 {isTransmitting && (
//                   <div className="space-y-2">
//                     <div className="flex justify-between text-xs font-mono text-gray-400">
//                       <span>TRANSMITTING...</span>
//                       <span>{Math.floor(transmissionProgress)}%</span>
//                     </div>
//                     <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden">
//                       <div 
//                         className="h-full bg-green-400 rounded-full transition-all duration-300 relative"
//                         style={{ width: `${transmissionProgress}%` }}
//                       >
//                         <div className="absolute inset-0 bg-white/20 animate-pulse" />
//                       </div>
//                     </div>
//                   </div>
//                 )}
                
//                 <button
//                   type="submit"
//                   disabled={isTransmitting || !formData.name || !formData.email || !formData.message}
//                   className={`w-full py-2.5 sm:py-3 font-mono font-semibold rounded transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 relative overflow-hidden text-xs sm:text-base ${
//                     isTransmitting 
//                       ? 'bg-green-950/30 border border-green-500/30 text-gray-400 cursor-not-allowed' 
//                       : 'bg-green-400 text-black hover:bg-green-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-green-400/30'
//                   }`}
//                 >
//                   {isTransmitting ? (
//                     <>
//                       <Loader className="w-3 h-3 sm:w-4 sm:h-4 animate-spin" />
//                       <span className="hidden sm:inline">TRANSMITTING...</span>
//                       <span className="sm:hidden">TX...</span>
//                       {Math.floor(transmissionProgress)}%
//                     </>
//                   ) : (
//                     <>
//                       <Send className="w-3 h-3 sm:w-4 sm:h-4" />
//                       <span className="hidden sm:inline">INITIATE TRANSMISSION</span>
//                       <span className="sm:hidden">SEND MESSAGE</span>
//                     </>
//                   )}
                  
//                   {/* Button shine effect */}
//                   {!isTransmitting && (
//                     <div className="absolute inset-0 -top-full bg-gradient-to-b from-white/20 to-transparent transform skew-y-12 group-hover:translate-y-full transition-transform duration-700" />
//                   )}
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes slide {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(20px);
//           }
//         }

//         @keyframes rotate {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }

//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-in {
//           animation: fade-in 0.5s ease-out;
//         }

//         .signal-bar {
//           width: 4px;
//           height: 14px;
//           border-radius: 2px;
//           transition: all 0.3s ease;
//           animation: audioWave 1s ease-in-out infinite;
//         }

//         @keyframes audioWave {
//           0%, 100% {
//             transform: scaleY(0.7);
//           }
//           50% {
//             transform: scaleY(1);
//           }
//         }

//         /* Hide scrollbar on mobile for better experience */
//         @media (max-width: 640px) {
//           ::-webkit-scrollbar {
//             width: 2px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }
























// app/contact/page.js
// 'use client';
// import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
// import { Send, Satellite, Radio, Activity, Zap, Github, Linkedin, Twitter, ChevronRight, Instagram, Facebook, Loader, Sparkles } from 'lucide-react';
// import { useTransition } from '../layout';
// import ScrambledText from '@/components/ScrambledText';

// // Memoized channel component to prevent unnecessary re-renders
// const ChannelSignal = React.memo(({ channel, x, y, isDetected, isActive, isHovered, onSelect, onHover, onLeave, isMobile }) => {
//   return (
//     <div
//       id={`signal-${channel.id}`}
//       className={`absolute w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
//         isDetected ? 'opacity-100' : 'opacity-0'
//       }`}
//       style={{ 
//         left: `${x}%`, 
//         top: `${y}%`,
//         transform: `translate(-50%, -50%) scale(${isActive ? (isMobile ? 1.2 : 1.3) : isHovered && !isMobile ? 1.15 : 1})`
//       }}
//       onClick={() => onSelect(channel.id)}
//       onMouseEnter={() => !isMobile && onHover(channel.id)}
//       onMouseLeave={() => !isMobile && onLeave()}
//     >
//       <div 
//         className="relative w-full h-full rounded-full border-2 flex items-center justify-center transition-all backdrop-blur-sm"
//         style={{ 
//           borderColor: isActive ? channel.glowColor : channel.color,
//           backgroundColor: isActive ? `${channel.color}30` : 'rgba(0,0,0,0.7)',
//           boxShadow: isActive ? `0 0 30px ${channel.glowColor}, inset 0 0 20px ${channel.glowColor}40` : 
//                     (isHovered && !isMobile) ? `0 0 20px ${channel.glowColor}60` : 'none'
//         }}
//       >
//         <channel.icon 
//           className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-all" 
//           style={{ 
//             color: isActive ? '#ffffff' : channel.color,
//             filter: isActive ? `drop-shadow(0 0 8px ${channel.glowColor})` : 'none'
//           }}
//         />
        
//         {isHovered && !isMobile && (
//           <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-0.5">
//             {[...Array(5)].map((_, i) => (
//               <div
//                 key={i}
//                 className="signal-bar"
//                 style={{
//                   backgroundColor: i < channel.strength / 20 ? channel.color : '#333',
//                   opacity: i < channel.strength / 20 ? 1 : 0.3,
//                   animationDelay: `${i * 0.1}s`
//                 }}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// });

// export default function ContactPage() {
//   const { isTransitioning } = useTransition();
//   const [activeSignal, setActiveSignal] = useState(null);
//   const [scanProgress, setScanProgress] = useState(0);
//   const [isScanning, setIsScanning] = useState(true);
//   const [detectedSignals, setDetectedSignals] = useState([]);
//   const [selectedChannel, setSelectedChannel] = useState(null);
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [isTransmitting, setIsTransmitting] = useState(false);
//   const [transmissionProgress, setTransmissionProgress] = useState(0);
//   const [interference, setInterference] = useState(0);
//   const [connectionQuality, setConnectionQuality] = useState(100);
//   const [hoveredSignal, setHoveredSignal] = useState(null);
//   const [particles, setParticles] = useState([]);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [energyField, setEnergyField] = useState([]);
//   const [pulseWave, setPulseWave] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);

//   const radarRef = useRef(null);
//   const animationFrameRef = useRef(null);
//   const lastFrameTimeRef = useRef(0);
//   const mousePositionRef = useRef({ x: 0, y: 0 });

//   // Check if mobile
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
    
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   // Memoized channels data
//   const channels = useMemo(() => [
//     {
//       id: 'linkedin',
//       type: 'Professional Network',
//       frequency: '2.4GHz',
//       bandwidth: 'HIGH',
//       signal: 'STABLE',
//       strength: 95,
//       data: 'linkedin.com/in/rizwi',
//       icon: Linkedin,
//       position: { angle: 72, distance: 75 },
//       color: '#00ff41',
//       glowColor: '#00ff88',
//       description: 'Professional connections and career updates'
//     },
//     {
//       id: 'github',
//       type: 'Code Repository',
//       frequency: '5.0GHz',
//       bandwidth: 'ULTRA',
//       signal: 'ACTIVE',
//       strength: 98,
//       data: 'github.com/rizwi',
//       icon: Github,
//       position: { angle: 134, distance: 60 },
//       color: '#00ff41',
//       glowColor: '#00ff88',
//       description: 'Open source projects and code contributions'
//     },
//     {
//       id: 'twitter',
//       type: 'Micro Blog',
//       frequency: '3.6GHz',
//       bandwidth: 'MEDIUM',
//       signal: 'LIVE',
//       strength: 88,
//       data: 'twitter.com/rizwi_dev',
//       icon: Twitter,
//       position: { angle: 350, distance: 65 },
//       color: '#00ff41',
//       glowColor: '#00ff88',
//       description: 'Tech thoughts and real-time updates'
//     },
//     {
//       id: 'instagram',
//       type: 'Visual Stream',
//       frequency: '2.8GHz',
//       bandwidth: 'HIGH',
//       signal: 'STREAMING',
//       strength: 92,
//       data: 'instagram.com/rizwi.dev',
//       icon: Instagram,
//       position: { angle: 200, distance: 80 },
//       color: '#00ff41',
//       glowColor: '#00ff88',
//       description: 'Visual journey and creative moments'
//     },
//     {
//       id: 'facebook',
//       type: 'Social Hub',
//       frequency: '3.2GHz',
//       bandwidth: 'STANDARD',
//       signal: 'CONNECTED',
//       strength: 85,
//       data: 'facebook.com/rizwi.developer',
//       icon: Facebook,
//       position: { angle: 280, distance: 40 },
//       color: '#00ff41',
//       glowColor: '#00ff88',
//       description: 'Community engagement and updates'
//     }
//   ], []);

//   // Initialize particles with optimized data structure
//   useEffect(() => {
//     const particleCount = isMobile ? 70 : 100; // 70 particles for mobile, 100 for desktop
//     const newParticles = Array(particleCount).fill(null).map((_, i) => ({
//       id: i,
//       x: Math.random() * window.innerWidth,
//       y: Math.random() * window.innerHeight,
//       vx: (Math.random() - 0.5) * 0.5,
//       vy: (Math.random() - 0.5) * 0.5,
//       size: Math.random() * 3 + 1,
//       opacity: Math.random() * 0.5 + 0.2,
//       pulseSpeed: Math.random() * 0.02 + 0.01,
//       pulsePhase: Math.random() * Math.PI * 2,
//       color: Math.random() > 0.8 ? '#00ff41' : '#00ff8850',
//       gridX: 0,
//       gridY: 0
//     }));
//     setParticles(newParticles);

//     // Initialize energy field (reduced for mobile)
//     const fieldCount = isMobile ? 10 : 20;
//     const fieldPoints = Array(fieldCount).fill(null).map(() => ({
//       x: Math.random() * window.innerWidth,
//       y: Math.random() * window.innerHeight,
//       radius: Math.random() * (isMobile ? 50 : 100) + 50,
//       intensity: Math.random() * 0.5 + 0.5,
//       pulseSpeed: Math.random() * 0.02 + 0.01,
//       color: Math.random() > 0.5 ? '#00ff41' : '#00ff88'
//     }));
//     setEnergyField(fieldPoints);
//   }, [isMobile]);

//   // Optimized mouse tracking with ref (desktop only)
//   useEffect(() => {
//     if (isMobile) return; // Skip mouse tracking on mobile
    
//     const handleMouseMove = (e) => {
//       mousePositionRef.current = { x: e.clientX, y: e.clientY };
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, [isMobile]);

//   // Unified animation loop using requestAnimationFrame
//   useEffect(() => {
//     let scanLastUpdate = 0;
//     let pulseLastUpdate = 0;
//     let particleLastUpdate = 0;
//     let connectionQualityLastUpdate = 0;
    
//     const animate = (currentTime) => {
//       // Particle animation (60 FPS on desktop, 30 FPS on mobile)
//       const particleFrameTime = isMobile ? 33 : 16;
//       if (currentTime - particleLastUpdate > particleFrameTime) {
//         setParticles(prevParticles => {
//           // Create spatial grid for optimization
//           const gridSize = 100;
//           const grid = {};
          
//           // First pass: assign particles to grid cells
//           prevParticles.forEach(particle => {
//             particle.gridX = Math.floor(particle.x / gridSize);
//             particle.gridY = Math.floor(particle.y / gridSize);
//             const key = `${particle.gridX},${particle.gridY}`;
//             if (!grid[key]) grid[key] = [];
//             grid[key].push(particle);
//           });
          
//           return prevParticles.map(particle => {
//             const newParticle = { ...particle };
            
//             // Mouse influence (desktop only)
//             if (!isMobile) {
//               const dx = mousePositionRef.current.x - particle.x;
//               const dy = mousePositionRef.current.y - particle.y;
//               const distance = Math.sqrt(dx * dx + dy * dy);
//               const maxDistance = 150;
              
//               if (distance < maxDistance) {
//                 const force = (1 - distance / maxDistance) * 0.1;
//                 newParticle.vx += (dx / distance) * force;
//                 newParticle.vy += (dy / distance) * force;
//               }
//             }

//             // Update position
//             newParticle.x += newParticle.vx;
//             newParticle.y += newParticle.vy;

//             // Damping
//             newParticle.vx *= 0.98;
//             newParticle.vy *= 0.98;

//             // Boundary check
//             if (newParticle.x < 0 || newParticle.x > window.innerWidth) newParticle.vx *= -1;
//             if (newParticle.y < 0 || newParticle.y > window.innerHeight) newParticle.vy *= -1;

//             // Find nearby particles using spatial grid (reduce connections on mobile)
//             const maxConnections = 3; // Same for both mobile and desktop
//             const searchRadius = isMobile ? 70 : 90;
//             const nearbyParticles = [];
            
//             for (let gx = particle.gridX - 1; gx <= particle.gridX + 1; gx++) {
//               for (let gy = particle.gridY - 1; gy <= particle.gridY + 1; gy++) {
//                 const key = `${gx},${gy}`;
//                 if (grid[key]) {
//                   grid[key].forEach(other => {
//                     if (other.id !== particle.id) {
//                       const dist = Math.sqrt(
//                         Math.pow(particle.x - other.x, 2) + 
//                         Math.pow(particle.y - other.y, 2)
//                       );
//                       if (dist < searchRadius) {
//                         nearbyParticles.push(other);
//                       }
//                     }
//                   });
//                 }
//               }
//             }
            
//             newParticle.connections = nearbyParticles.slice(0, maxConnections);
//             return newParticle;
//           });
//         });
//         particleLastUpdate = currentTime;
//       }
      
//       // Pulse wave animation (20 FPS)
//       if (currentTime - pulseLastUpdate > 50) {
//         setPulseWave(prev => (prev + 0.05) % (Math.PI * 2));
//         pulseLastUpdate = currentTime;
//       }
      
//       // Radar scanning (40 FPS) - Always active
//       if (currentTime - scanLastUpdate > 25) {
//         setScanProgress(prev => {
//           const next = (prev + 1.5) % 360;
          
//           // Random interference
//           if (Math.random() > 0.98) {
//             setInterference(Math.random() * 30 + 70);
//             setTimeout(() => setInterference(0), 300);
//           }
          
//           // Check for signal detection
//           channels.forEach(channel => {
//             const diff = Math.abs(next - channel.position.angle);
//             const proximity = Math.min(diff, 360 - diff);
            
//             if (proximity < 3) {
//               setDetectedSignals(prev => {
//                 if (!prev.includes(channel.id)) {
//                   return [...prev, channel.id];
//                 }
//                 return prev;
//               });
//             }
//           });
          
//           return next;
//         });
//         scanLastUpdate = currentTime;
//       }
      
//       // Connection quality (1 FPS)
//       if (currentTime - connectionQualityLastUpdate > 1000) {
//         setConnectionQuality(prev => {
//           const change = (Math.random() - 0.5) * 10;
//           return Math.max(85, Math.min(100, prev + change));
//         });
//         connectionQualityLastUpdate = currentTime;
//       }
      
//       animationFrameRef.current = requestAnimationFrame(animate);
//     };
    
//     animationFrameRef.current = requestAnimationFrame(animate);
    
//     return () => {
//       if (animationFrameRef.current) {
//         cancelAnimationFrame(animationFrameRef.current);
//       }
//     };
//   }, [channels, isMobile]);

//   const handleChannelSelect = useCallback((channelId) => {
//     setSelectedChannel(channelId);
//     setActiveSignal(channelId);
    
//     const channel = channels.find(c => c.id === channelId);
//     if (channel) {
//       setConnectionQuality(channel.strength);
//     }
//   }, [channels]);

//   const handleFormSubmit = useCallback((e) => {
//     e.preventDefault();
//     if (!formData.name || !formData.email || !formData.message) return;

//     setIsTransmitting(true);
//     setTransmissionProgress(0);
    
//     const progressInterval = setInterval(() => {
//       setTransmissionProgress(prev => {
//         if (prev >= 100) {
//           clearInterval(progressInterval);
//           setTimeout(() => {
//             setIsTransmitting(false);
//             setFormData({ name: '', email: '', message: '' });
//             setTransmissionProgress(0);
//           }, 500);
//           return 100;
//         }
//         return prev + Math.random() * 15 + 5;
//       });
//     }, 200);
//   }, [formData]);

//   const handleHoverSignal = useCallback((id) => setHoveredSignal(id), []);
//   const handleLeaveSignal = useCallback(() => setHoveredSignal(null), []);

//   // Memoized particle connections for rendering
//   const particleConnections = useMemo(() => {
//     const connections = [];
//     particles.forEach((particle, i) => {
//       if (particle.connections) {
//         particle.connections.forEach((connected, j) => {
//           const distance = Math.sqrt(
//             Math.pow(particle.x - connected.x, 2) + 
//             Math.pow(particle.y - connected.y, 2)
//           );
//           const opacity = (1 - distance / (isMobile ? 70 : 100)) * 0.3;
          
//           connections.push({
//             key: `${i}-${j}`,
//             x1: particle.x,
//             y1: particle.y,
//             x2: connected.x,
//             y2: connected.y,
//             opacity
//           });
//         });
//       }
//     });
//     return connections;
//   }, [particles, isMobile]);

//   return (
//     <div className="min-h-screen pt-20 sm:pt-24 px-4 sm:px-6 relative overflow-hidden">
//       {/* Enhanced animated background */}
//       <div className="fixed inset-0 z-0">
//         <div className="absolute inset-0 bg-gradient-to-br from-black via-green-950/10 to-black" />
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,65,0.1)_0%,transparent_70%)]" />
        
//         {/* Animated grid with perspective (hide on small mobile) */}
//         <div className="absolute inset-0 opacity-10 hidden sm:block" style={{
//           backgroundImage: `linear-gradient(rgba(0,255,65,0.3) 1px, transparent 1px),
//                            linear-gradient(90deg, rgba(0,255,65,0.3) 1px, transparent 1px)`,
//           backgroundSize: '50px 50px',
//           transform: 'perspective(500px) rotateX(60deg) translateY(-50%)',
//           transformOrigin: 'center'
//         }} />

//         {/* Energy field visualization (reduced on mobile) */}
//         {!isMobile && energyField.map((field, i) => (
//           <div
//             key={i}
//             className="absolute rounded-full"
//             style={{
//               left: field.x,
//               top: field.y,
//               width: field.radius * 2,
//               height: field.radius * 2,
//               transform: 'translate(-50%, -50%)',
//               background: `radial-gradient(circle, ${field.color}10 0%, transparent 70%)`,
//               opacity: field.intensity * (0.5 + 0.5 * Math.sin(pulseWave + i)),
//               filter: 'blur(30px)',
//               pointerEvents: 'none'
//             }}
//           />
//         ))}
//       </div>

//       {/* Particle system */}
//       <svg className="fixed inset-0 z-0 pointer-events-none" style={{ width: '100%', height: '100%' }}>
//         {/* Particle connections */}
//         {particleConnections.map(conn => (
//           <line
//             key={conn.key}
//             x1={conn.x1}
//             y1={conn.y1}
//             x2={conn.x2}
//             y2={conn.y2}
//             stroke="#00ff41"
//             strokeWidth="0.5"
//             opacity={conn.opacity}
//           />
//         ))}
        
//         {/* Particles */}
//         {particles.map((particle) => (
//           <circle
//             key={particle.id}
//             cx={particle.x}
//             cy={particle.y}
//             r={particle.size * (1 + 0.3 * Math.sin(pulseWave + particle.pulsePhase))}
//             fill={particle.color}
//             opacity={particle.opacity}
//           >
//             <animate
//               attributeName="opacity"
//               values={`${particle.opacity};${particle.opacity * 0.5};${particle.opacity}`}
//               dur="3s"
//               repeatCount="indefinite"
//             />
//           </circle>
//         ))}
//       </svg>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header - Responsive text sizes */}
//         <div className="mb-6 sm:mb-8">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-green-400 mb-3 sm:mb-4">
//             <span className="text-gray-400">&gt;</span> <ScrambledText text="SIGNAL_DETECTION.SYS" />
//           </h2>
//           <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-gray-400 font-mono text-xs sm:text-sm">
//             <span className="flex items-center gap-1 sm:gap-2">
//               <Activity className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 animate-pulse" />
//               SCANNING
//             </span>
//             <span className="text-green-400 hidden sm:inline">◈</span>
//             <span className="flex items-center gap-1 sm:gap-2">
//               <Radio className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 animate-pulse" />
//               {detectedSignals.length}/{channels.length} CHANNELS
//             </span>
//             <span className="text-green-400 hidden sm:inline">◈</span>
//             <span className="flex items-center gap-1 sm:gap-2 sm:flex">
//               <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 animate-pulse" />
//               QUANTUM FIELD ACTIVE
//             </span>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
//           {/* Enhanced Radar Interface with Constellation */}
//           <div className="relative order-1">
//             <div className="relative w-full max-w-[350px] sm:max-w-[400px] md:max-w-[500px] mx-auto aspect-square" ref={radarRef}>
//               {/* Radar background effects */}
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent rounded-full animate-pulse" />
              
//               {/* Radar SVG */}
//               <svg className="absolute inset-0 w-full h-full">
//                 {/* Grid lines (reduce on mobile) */}
//                 {(isMobile ? [30, 90, 150] : [30, 60, 90, 120, 150]).map(angle => (
//                   <line
//                     key={angle}
//                     x1="50%"
//                     y1="50%"
//                     x2={`${50 + 40 * Math.cos((angle - 90) * Math.PI / 180)}%`}
//                     y2={`${50 + 40 * Math.sin((angle - 90) * Math.PI / 180)}%`}
//                     stroke="#00ff41"
//                     strokeWidth="0.5"
//                     opacity="0.1"
//                   />
//                 ))}
                
//                 {/* Concentric circles with labels */}
//                 {(isMobile ? [20, 40, 60, 80] : [20, 40, 60, 80]).map((radius, i) => (
//                   <g key={radius}>
//                     <circle 
//                       cx="50%" 
//                       cy="50%" 
//                       r={`${radius}%`} 
//                       fill="none" 
//                       stroke="#00ff41" 
//                       strokeWidth="1" 
//                       opacity={0.2 - i * 0.03}
//                       strokeDasharray={i % 2 === 0 ? "5,5" : "none"}
//                     />
//                     {!isMobile && (
//                       <text
//                         x="50%"
//                         y={`${50 - radius + 2}%`}
//                         textAnchor="middle"
//                         fill="#00ff41"
//                         fontSize="10"
//                         opacity="0.3"
//                       >
//                         {radius}km
//                       </text>
//                     )}
//                   </g>
//                 ))}
                
//                 {/* Cross lines */}
//                 <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#00ff41" strokeWidth="1" opacity="0.15" />
//                 <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#00ff41" strokeWidth="1" opacity="0.15" />
                
//                 {/* Interference effect */}
//                 {interference > 0 && (
//                   <circle
//                     cx="50%"
//                     cy="50%"
//                     r={`${interference}%`}
//                     fill="none"
//                     stroke="#ff0000"
//                     strokeWidth="2"
//                     opacity={interference / 100}
//                     strokeDasharray="2,4"
//                   >
//                     <animate
//                       attributeName="r"
//                       values={`${interference}%;${interference + 10}%;${interference}%`}
//                       dur="0.3s"
//                       repeatCount="indefinite"
//                     />
//                   </circle>
//                 )}
                
//                 {/* Enhanced scanning line - Always active */}
//                 <>
//                   <line
//                     x1="50%"
//                     y1="50%"
//                     x2={`${50 + 40 * Math.cos((scanProgress - 90) * Math.PI / 180)}%`}
//                     y2={`${50 + 40 * Math.sin((scanProgress - 90) * Math.PI / 180)}%`}
//                     stroke="#00ff41"
//                     strokeWidth="2"
//                     opacity="0.8"
//                     filter="url(#glow)"
//                   />
                  
//                   {/* Scan trail with gradient (reduce on mobile) */}
//                   {Array.from({ length: isMobile ? 45 : 60 }, (_, i) => (
//                     <line
//                       key={i}
//                       x1="50%"
//                       y1="50%"
//                       x2={`${50 + 40 * Math.cos(((scanProgress - i * 1.5) - 90) * Math.PI / 180)}%`}
//                       y2={`${50 + 40 * Math.sin(((scanProgress - i * 1.5) - 90) * Math.PI / 180)}%`}
//                       stroke="#00ff41"
//                       strokeWidth="1"
//                       opacity={0.5 - (i * 0.008)}
//                     />
//                   ))}
//                 </>
                
//                 {/* SVG Filters */}
//                 <defs>
//                   <filter id="glow">
//                     <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
//                     <feMerge>
//                       <feMergeNode in="coloredBlur"/>
//                       <feMergeNode in="SourceGraphic"/>
//                     </feMerge>
//                   </filter>
//                   <filter id="turbulence">
//                     <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="turbulence"/>
//                     <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="2" xChannelSelector="R" yChannelSelector="G"/>
//                   </filter>
//                 </defs>
//               </svg>
              
//               {/* Enhanced signal points with quantum effects */}
//               {channels.map(channel => {
//                 const x = 50 + (channel.position.distance * 0.4) * Math.cos((channel.position.angle - 90) * Math.PI / 180);
//                 const y = 50 + (channel.position.distance * 0.4) * Math.sin((channel.position.angle - 90) * Math.PI / 180);
//                 const isDetected = detectedSignals.includes(channel.id);
//                 const isActive = activeSignal === channel.id;
//                 const isHovered = hoveredSignal === channel.id;
                
//                 return (
//                   <ChannelSignal
//                     key={channel.id}
//                     channel={channel}
//                     x={x}
//                     y={y}
//                     isDetected={isDetected}
//                     isActive={isActive}
//                     isHovered={isHovered}
//                     onSelect={handleChannelSelect}
//                     onHover={handleHoverSignal}
//                     onLeave={handleLeaveSignal}
//                     isMobile={isMobile}
//                   />
//                 );
//               })}
              
//               {/* Center beacon with quantum core */}
//               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//                 <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-green-400 rounded-full animate-pulse relative">
//                   <div className="absolute inset-0 bg-green-400 rounded-full animate-ping" />
//                   <div className="absolute inset-[-4px] border-2 border-green-400 rounded-full opacity-50" />
//                   {/* Quantum core effect (hide on mobile) */}
//                   {!isMobile && (
//                     <div className="absolute inset-[-10px] rounded-full" style={{
//                       background: `radial-gradient(circle, transparent 30%, ${Math.sin(pulseWave) > 0 ? '#00ff41' : '#00ff88'}20 50%, transparent 70%)`,
//                       animation: 'rotate 4s linear infinite reverse'
//                     }} />
//                   )}
//                 </div>
//               </div>
//             </div>
            
//             {/* Control buttons and status indicators */}
//             <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
//               <div className="flex gap-2">
//                 <button
//                   onClick={() => {
//                     setDetectedSignals([]);
//                     setScanProgress(0);
//                   }}
//                   className="flex-1 py-2 px-3 sm:px-4 rounded font-mono text-xs transition-all bg-green-500/20 border border-green-500/40 text-green-400 hover:bg-green-500/30 hover:border-green-500/60"
//                 >
//                   RESET SCAN
//                 </button>
                
//                 <button
//                   onClick={() => {
//                     setSelectedChannel(null);
//                     setActiveSignal(null);
//                   }}
//                   className="px-3 sm:px-4 py-2 bg-red-500/20 border border-red-500/40 text-red-400 rounded font-mono text-xs hover:bg-red-500/30 hover:border-red-500/60 transition-all"
//                 >
//                   CLEAR
//                 </button>
//               </div>
              
//               {/* Status indicators */}
//               <div className="flex justify-center gap-3 sm:gap-4 text-xs font-mono">
//                 <div className="flex items-center gap-1 sm:gap-2">
//                   <Satellite className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 animate-pulse" />
//                   <span className="text-gray-400">SCAN: ON</span>
//                 </div>
//                 <div className="flex items-center gap-1 sm:gap-2">
//                   <Radio className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
//                   <span className="text-gray-400">{detectedSignals.length}/{channels.length}</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Information Panel */}
//           <div className="flex flex-col space-y-4 sm:space-y-5 order-2">
//             {/* Selected Channel Info */}
//             {selectedChannel && (
//               <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-3 sm:p-4 animate-fade-in relative overflow-hidden">
//                 {/* Animated background pattern */}
//                 <div className="absolute inset-0 opacity-5">
//                   <div className="absolute inset-0" style={{
//                     backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,255,65,0.1) 10px, rgba(0,255,65,0.1) 20px)`,
//                     animation: 'slide 20s linear infinite'
//                   }} />
//                 </div>
                
//                 <div className="relative z-10">
//                   <div className="flex items-center justify-between mb-3">
//                     <h3 className="text-green-400 font-mono text-xs sm:text-sm flex items-center gap-1 sm:gap-2">
//                       <Activity className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
//                       CHANNEL LOCKED
//                     </h3>
//                     <span className="text-xs font-mono text-green-400 px-2 py-1 bg-green-500/10 rounded">
//                       {channels.find(c => c.id === selectedChannel)?.frequency}
//                     </span>
//                   </div>
                  
//                   <div className="space-y-2">
//                     <div className="flex items-center justify-between">
//                       <span className="text-xs font-mono text-gray-500 uppercase">Platform:</span>
//                       <span className="font-mono text-xs text-green-400">{channels.find(c => c.id === selectedChannel)?.type}</span>
//                     </div>
                    
//                     <div className="flex items-center justify-between">
//                       <span className="text-xs font-mono text-gray-500 uppercase">Connection:</span>
//                       <span className="font-mono text-xs text-green-400 truncate max-w-[150px] sm:max-w-none">
//                         {channels.find(c => c.id === selectedChannel)?.data}
//                       </span>
//                     </div>
                    
//                     <div className="mt-3 pt-3 border-t border-green-500/20">
//                       <a 
//                         href={`https://${channels.find(c => c.id === selectedChannel)?.data}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center gap-1 sm:gap-2 text-green-400 hover:text-green-300 font-mono text-xs group"
//                       >
//                         ESTABLISH CONNECTION 
//                         <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Enhanced Message Transmitter */}
//             <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-4 sm:p-6 relative overflow-hidden">
//               <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-green-500/10 rounded-full filter blur-3xl" />
              
//               <h3 className="text-green-400 font-mono text-base sm:text-lg mb-3 sm:mb-4 flex items-center gap-2">
//                 <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
//                 DIRECT TRANSMISSION
//               </h3>
              
//               <form onSubmit={handleFormSubmit} className="space-y-3 sm:space-y-4">
//                 <div className="relative">
//                   <input
//                     type="text"
//                     placeholder="CALLSIGN"
//                     value={formData.name}
//                     onChange={(e) => setFormData({...formData, name: e.target.value})}
//                     className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black/40 border border-green-500/30 rounded text-green-400 placeholder-gray-500 font-mono text-xs sm:text-sm focus:border-green-500/50 focus:outline-none transition-all"
//                     disabled={isTransmitting}
//                   />
//                   <div className={`absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${formData.name ? 'bg-green-400' : 'bg-gray-600'} transition-colors`} />
//                 </div>
                
//                 <div className="relative">
//                   <input
//                     type="email"
//                     placeholder="RETURN FREQUENCY"
//                     value={formData.email}
//                     onChange={(e) => setFormData({...formData, email: e.target.value})}
//                     className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black/40 border border-green-500/30 rounded text-green-400 placeholder-gray-500 font-mono text-xs sm:text-sm focus:border-green-500/50 focus:outline-none transition-all"
//                     disabled={isTransmitting}
//                   />
//                   <div className={`absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${formData.email ? 'bg-green-400' : 'bg-gray-600'} transition-colors`} />
//                 </div>
                
//                 <div className="relative">
//                   <textarea
//                     placeholder="MESSAGE PAYLOAD..."
//                     rows={3}
//                     value={formData.message}
//                     onChange={(e) => setFormData({...formData, message: e.target.value})}
//                     className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black/40 border border-green-500/30 rounded text-green-400 placeholder-gray-500 font-mono text-xs sm:text-sm focus:border-green-500/50 focus:outline-none transition-all resize-none"
//                     disabled={isTransmitting}
//                   />
//                   <div className={`absolute right-3 top-3 w-2 h-2 rounded-full ${formData.message ? 'bg-green-400' : 'bg-gray-600'} transition-colors`} />
//                   <div className="absolute bottom-2 right-3 text-xs font-mono text-gray-500">
//                     {formData.message.length}/500
//                   </div>
//                 </div>
                
//                 {/* Transmission progress */}
//                 {isTransmitting && (
//                   <div className="space-y-2">
//                     <div className="flex justify-between text-xs font-mono text-gray-400">
//                       <span>TRANSMITTING...</span>
//                       <span>{Math.floor(transmissionProgress)}%</span>
//                     </div>
//                     <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden">
//                       <div 
//                         className="h-full bg-green-400 rounded-full transition-all duration-300 relative"
//                         style={{ width: `${transmissionProgress}%` }}
//                       >
//                         <div className="absolute inset-0 bg-white/20 animate-pulse" />
//                       </div>
//                     </div>
//                   </div>
//                 )}
                
//                 <button
//                   type="submit"
//                   disabled={isTransmitting || !formData.name || !formData.email || !formData.message}
//                   className={`w-full py-2.5 sm:py-3 font-mono font-semibold rounded transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 relative overflow-hidden text-xs sm:text-base ${
//                     isTransmitting 
//                       ? 'bg-green-950/30 border border-green-500/30 text-gray-400 cursor-not-allowed' 
//                       : 'bg-green-400 text-black hover:bg-green-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-green-400/30'
//                   }`}
//                 >
//                   {isTransmitting ? (
//                     <>
//                       <Loader className="w-3 h-3 sm:w-4 sm:h-4 animate-spin" />
//                       <span className="hidden sm:inline">TRANSMITTING...</span>
//                       <span className="sm:hidden">TX...</span>
//                       {Math.floor(transmissionProgress)}%
//                     </>
//                   ) : (
//                     <>
//                       <Send className="w-3 h-3 sm:w-4 sm:h-4" />
//                       <span className="hidden sm:inline">INITIATE TRANSMISSION</span>
//                       <span className="sm:hidden">SEND MESSAGE</span>
//                     </>
//                   )}
                  
//                   {/* Button shine effect */}
//                   {!isTransmitting && (
//                     <div className="absolute inset-0 -top-full bg-gradient-to-b from-white/20 to-transparent transform skew-y-12 group-hover:translate-y-full transition-transform duration-700" />
//                   )}
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes slide {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(20px);
//           }
//         }

//         @keyframes rotate {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }

//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-in {
//           animation: fade-in 0.5s ease-out;
//         }

//         .signal-bar {
//           width: 4px;
//           height: 14px;
//           border-radius: 2px;
//           transition: all 0.3s ease;
//           animation: audioWave 1s ease-in-out infinite;
//         }

//         @keyframes audioWave {
//           0%, 100% {
//             transform: scaleY(0.7);
//           }
//           50% {
//             transform: scaleY(1);
//           }
//         }

//         /* Hide scrollbar on mobile for better experience */
//         @media (max-width: 640px) {
//           ::-webkit-scrollbar {
//             width: 2px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }
























// BESTTT ---------------------------------------------------------------------------------------------------------------
// app/contact/page.js
'use client';
import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import toast from 'react-hot-toast';
import { Send, Satellite, Radio, Activity, Zap, Github, Linkedin, Twitter, ChevronRight, Instagram, Facebook, Loader, Radar } from 'lucide-react';
import { useTransition } from '../layout';
import ScrambledText from '@/components/ScrambledText';

// Memoized channel component to prevent unnecessary re-renders
const ChannelSignal = React.memo(({ channel, x, y, isDetected, isActive, isHovered, onSelect, onHover, onLeave, isMobile }) => {
  return (
    <div
      id={`signal-${channel.id}`}
      className={`absolute w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
        isDetected ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ 
        left: `${x}%`, 
        top: `${y}%`,
        transform: `translate(-50%, -50%) scale(${isActive ? (isMobile ? 1.2 : 1.3) : isHovered && !isMobile ? 1.15 : 1})`
      }}
      onClick={() => onSelect(channel.id)}
      onMouseEnter={() => !isMobile && onHover(channel.id)}
      onMouseLeave={() => !isMobile && onLeave()}
    >
      <div 
        className="relative w-full h-full rounded-full border-2 flex items-center justify-center transition-all backdrop-blur-sm"
        style={{ 
          borderColor: isActive ? channel.glowColor : channel.color,
          backgroundColor: isActive ? `${channel.color}30` : 'rgba(0,0,0,0.7)',
          boxShadow: isActive ? `0 0 30px ${channel.glowColor}, inset 0 0 20px ${channel.glowColor}40` : 
                    (isHovered && !isMobile) ? `0 0 20px ${channel.glowColor}60` : 'none'
        }}
      >
        <channel.icon 
          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-all" 
          style={{ 
            color: isActive ? '#ffffff' : channel.color,
            filter: isActive ? `drop-shadow(0 0 8px ${channel.glowColor})` : 'none'
          }}
        />
        
        {isHovered && !isMobile && (
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="signal-bar"
                style={{
                  backgroundColor: i < channel.strength / 20 ? channel.color : '#333',
                  opacity: i < channel.strength / 20 ? 1 : 0.3,
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
});

export default function ContactPage() {
  const { isTransitioning } = useTransition();
  const [activeSignal, setActiveSignal] = useState(null);
  const [scanProgress, setScanProgress] = useState(0);
  const [detectedSignals, setDetectedSignals] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [transmissionProgress, setTransmissionProgress] = useState(0);
  const [interference, setInterference] = useState(0);
  const [connectionQuality, setConnectionQuality] = useState(100);
  const [hoveredSignal, setHoveredSignal] = useState(null);
  const [particles, setParticles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [pulseWave, setPulseWave] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const radarRef = useRef(null);
  const animationFrameRef = useRef(null);
  const lastFrameTimeRef = useRef(0);
  const mousePositionRef = useRef({ x: 0, y: 0 });

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Memoized channels data
  const channels = useMemo(() => [
    {
      id: 'linkedin',
      type: 'Professional Network',
      username: 'Md Altamash Rizwi',
      frequency: '2.4GHz',
      bandwidth: 'HIGH',
      signal: 'STABLE',
      strength: 95,
      link: 'https://www.linkedin.com/in/md-altamash-rizwi-1865b2322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      icon: Linkedin,
      position: { angle: 72, distance: 75 },
      color: '#00ff41',
      glowColor: '#00ff88',
      description: 'Professional connections and career updates'
    },
    {
      id: 'github',
      type: 'Code Repository',
      username: 'rizzz-altamash',
      frequency: '5.0GHz',
      bandwidth: 'ULTRA',
      signal: 'ACTIVE',
      strength: 98,
      link: 'https://github.com/rizzz-altamash',
      icon: Github,
      position: { angle: 134, distance: 60 },
      color: '#00ff41',
      glowColor: '#00ff88',
      description: 'Open source projects and code contributions'
    },
    {
      id: 'twitter',
      type: 'Micro Blog',
      username: 'rizzz_altamash',
      frequency: '3.6GHz',
      bandwidth: 'MEDIUM',
      signal: 'LIVE',
      strength: 88,
      link: 'https://x.com/rizzz_altamash?t=gZN05h6DQszTe1p9NcGD2g&s=09',
      icon: Twitter,
      position: { angle: 350, distance: 65 },
      color: '#00ff41',
      glowColor: '#00ff88',
      description: 'Tech thoughts and real-time updates'
    },
    {
      id: 'instagram',
      type: 'Visual Stream',
      username: 'rizzzaltamash',
      frequency: '2.8GHz',
      bandwidth: 'HIGH',
      signal: 'STREAMING',
      strength: 92,
      link: 'https://instagram.com/rizzz_altamash',
      icon: Instagram,
      position: { angle: 200, distance: 75 },
      color: '#00ff41',
      glowColor: '#00ff88',
      description: 'Visual journey and creative moments'
    },
    {
      id: 'facebook',
      type: 'Social Hub',
      username: 'Altamash Rizwi',
      frequency: '3.2GHz',
      bandwidth: 'STANDARD',
      signal: 'CONNECTED',
      strength: 85,
      link: 'https://www.facebook.com/share/1HKBT7CbJq',
      icon: Facebook,
      position: { angle: 280, distance: 40 },
      color: '#00ff41',
      glowColor: '#00ff88',
      description: 'Community engagement and updates'
    }
  ], []);

  const getButtonText = (channelId) => {
    const buttonTexts = {
      linkedin: 'CONNECT ON LINKEDIN',
      github: 'VIEW REPOSITORIES',
      twitter: 'FOLLOW ON X',
      instagram: 'STALK ON INSTA',
      facebook: 'ADD AS A FRIEND'
    };
    return buttonTexts[channelId] || 'ESTABLISH CONNECTION';
  };

  // Initialize particles with optimized data structure
  useEffect(() => {
    const particleCount = isMobile ? 70 : 100; // 70 particles for mobile, 100 for desktop
    const newParticles = Array(particleCount).fill(null).map((_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      pulsePhase: Math.random() * Math.PI * 2,
      color: Math.random() > 0.8 ? '#00ff41' : '#00ff8850',
      gridX: 0,
      gridY: 0
    }));
    setParticles(newParticles);
  }, [isMobile]);

  // Optimized mouse tracking with ref (desktop only)
  useEffect(() => {
    if (isMobile) return; // Skip mouse tracking on mobile
    
    const handleMouseMove = (e) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY };
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  // Unified animation loop using requestAnimationFrame
  useEffect(() => {
    let scanLastUpdate = 0;
    let pulseLastUpdate = 0;
    let particleLastUpdate = 0;
    let connectionQualityLastUpdate = 0;
    
    const animate = (currentTime) => {
      // Particle animation (60 FPS on desktop, 30 FPS on mobile)
      const particleFrameTime = isMobile ? 33 : 16;
      if (currentTime - particleLastUpdate > particleFrameTime) {
        setParticles(prevParticles => {
          // Create spatial grid for optimization
          const gridSize = 100;
          const grid = {};
          
          // First pass: assign particles to grid cells
          prevParticles.forEach(particle => {
            particle.gridX = Math.floor(particle.x / gridSize);
            particle.gridY = Math.floor(particle.y / gridSize);
            const key = `${particle.gridX},${particle.gridY}`;
            if (!grid[key]) grid[key] = [];
            grid[key].push(particle);
          });
          
          return prevParticles.map(particle => {
            const newParticle = { ...particle };
            
            // Mouse influence (desktop only)
            if (!isMobile) {
              const dx = mousePositionRef.current.x - particle.x;
              const dy = mousePositionRef.current.y - particle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              const maxDistance = 150;
              
              if (distance < maxDistance) {
                const force = (1 - distance / maxDistance) * 0.1;
                newParticle.vx += (dx / distance) * force;
                newParticle.vy += (dy / distance) * force;
              }
            }

            // Update position
            newParticle.x += newParticle.vx;
            newParticle.y += newParticle.vy;

            // Damping
            newParticle.vx *= 0.98;
            newParticle.vy *= 0.98;

            // Boundary check
            if (newParticle.x < 0 || newParticle.x > window.innerWidth) newParticle.vx *= -1;
            if (newParticle.y < 0 || newParticle.y > window.innerHeight) newParticle.vy *= -1;

            // Find nearby particles using spatial grid (reduce connections on mobile)
            const maxConnections = 3; // Same for both mobile and desktop
            const searchRadius = isMobile ? 70 : 100;
            const nearbyParticles = [];
            
            for (let gx = particle.gridX - 1; gx <= particle.gridX + 1; gx++) {
              for (let gy = particle.gridY - 1; gy <= particle.gridY + 1; gy++) {
                const key = `${gx},${gy}`;
                if (grid[key]) {
                  grid[key].forEach(other => {
                    if (other.id !== particle.id) {
                      const dist = Math.sqrt(
                        Math.pow(particle.x - other.x, 2) + 
                        Math.pow(particle.y - other.y, 2)
                      );
                      if (dist < searchRadius) {
                        nearbyParticles.push(other);
                      }
                    }
                  });
                }
              }
            }
            
            newParticle.connections = nearbyParticles.slice(0, maxConnections);
            return newParticle;
          });
        });
        particleLastUpdate = currentTime;
      }
      
      // Pulse wave animation (20 FPS)
      if (currentTime - pulseLastUpdate > 50) {
        setPulseWave(prev => (prev + 0.05) % (Math.PI * 2));
        pulseLastUpdate = currentTime;
      }
      
      // Radar scanning (30 FPS) - Always active
      if (currentTime - scanLastUpdate > 33) { // 25 = 40fps 
        setScanProgress(prev => {
          const next = (prev + 1.5) % 360;
          
          // Random interference
          if (Math.random() > 0.98) {
            setInterference(Math.random() * 30 + 70);
            setTimeout(() => setInterference(0), 300);
          }
          
          // Check for signal detection
          channels.forEach(channel => {
            const diff = Math.abs(next - channel.position.angle);
            const proximity = Math.min(diff, 360 - diff);
            
            if (proximity < 3) {
              setDetectedSignals(prev => {
                if (!prev.includes(channel.id)) {
                  return [...prev, channel.id];
                }
                return prev;
              });
            }
          });
          
          return next;
        });
        scanLastUpdate = currentTime;
      }
      
      // Connection quality (1 FPS)
      if (currentTime - connectionQualityLastUpdate > 1000) {
        setConnectionQuality(prev => {
          const change = (Math.random() - 0.5) * 10;
          return Math.max(85, Math.min(100, prev + change));
        });
        connectionQualityLastUpdate = currentTime;
      }
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animationFrameRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [channels, isMobile]);

  const handleChannelSelect = useCallback((channelId) => {
    setSelectedChannel(channelId);
    setActiveSignal(channelId);
    
    const channel = channels.find(c => c.id === channelId);
    if (channel) {
      setConnectionQuality(channel.strength);
    }
  }, [channels]);

  const handleFormSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsTransmitting(true);
    setTransmissionProgress(0);
    
    // Progress animation
    let progress = 0;
    const progressInterval = setInterval(() => {
      progress += Math.random() * 15 + 5;
      if (progress > 90) {
        progress = 90;
        clearInterval(progressInterval);
      }
      setTransmissionProgress(progress);
    }, 200);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Complete progress
        setTransmissionProgress(100);
        
        // Show success message
        toast.success('TRANSMISSION SUCCESSFUL!', {
          duration: 5000,
          icon: '🚀',
        });
        
        // Reset form after animation
        setTimeout(() => {
          setIsTransmitting(false);
          setFormData({ name: '', email: '', message: '' });
          setTransmissionProgress(0);
        }, 500);
        
      } else if (response.status === 429) {
        // Rate limited
        throw new Error(data.error || 'Too many requests. Please try again later.');
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
      
    } catch (error) {
      console.error('Error:', error);
      clearInterval(progressInterval);
      setTransmissionProgress(0);
      setIsTransmitting(false);
      
      // Show error message
      toast.error(error.message || 'TRANSMISSION FAILED', {
        duration: 5000,
        icon: '❌',
      });
    }
  }, [formData]);

  const handleHoverSignal = useCallback((id) => setHoveredSignal(id), []);
  const handleLeaveSignal = useCallback(() => setHoveredSignal(null), []);

  // Memoized particle connections for rendering
  const particleConnections = useMemo(() => {
    const connections = [];
    particles.forEach((particle, i) => {
      if (particle.connections) {
        particle.connections.forEach((connected, j) => {
          const distance = Math.sqrt(
            Math.pow(particle.x - connected.x, 2) + 
            Math.pow(particle.y - connected.y, 2)
          );
          const opacity = (1 - distance / (isMobile ? 70 : 100)) * 0.3;
          
          connections.push({
            key: `${i}-${j}`,
            x1: particle.x,
            y1: particle.y,
            x2: connected.x,
            y2: connected.y,
            opacity
          });
        });
      }
    });
    return connections;
  }, [particles, isMobile]);

  return (
    <div className="min-h-screen pt-22 sm:pt-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-green-950/10 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,65,0.1)_0%,transparent_70%)]" />
      </div>

      {/* Particle system */}
      <svg className="fixed inset-0 z-0 pointer-events-none" style={{ width: '100%', height: '100%' }}>
        {/* Particle connections */}
        {particleConnections.map(conn => (
          <line
            key={conn.key}
            x1={conn.x1}
            y1={conn.y1}
            x2={conn.x2}
            y2={conn.y2}
            stroke="#00ff41"
            strokeWidth="0.5"
            opacity={conn.opacity}
          />
        ))}
        
        {/* Particles */}
        {particles.map((particle) => (
          <circle
            key={particle.id}
            cx={particle.x}
            cy={particle.y}
            r={particle.size * (1 + 0.3 * Math.sin(pulseWave + particle.pulsePhase))}
            fill={particle.color}
            opacity={particle.opacity}
          >
            <animate
              attributeName="opacity"
              values={`${particle.opacity};${particle.opacity * 0.5};${particle.opacity}`}
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - Responsive text sizes */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-green-400 mb-3 sm:mb-4">
            <span className="text-gray-400">&gt;</span> <ScrambledText text="CONTACT.ME" />
          </h2>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-gray-400 font-mono text-xs sm:text-sm">
            <span className="flex items-center gap-1 sm:gap-2">
              <Activity className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 animate-pulse" />
              SCANNING
            </span>
            <span className="text-green-400 hidden sm:inline">◈</span>
            <span className="flex items-center gap-1 sm:gap-2">
              <Radio className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 animate-pulse" />
              {detectedSignals.length}/{channels.length} CHANNELS
            </span>
            <span className="text-green-400 hidden sm:inline">◈</span>
            <span className="flex items-center gap-1 sm:gap-2 sm:flex">
              <Radar className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 animate-pulse" />
              SONAR DETECTOR ACTIVE
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Radar Interface */}
          <div className="relative order-1">
            <div className="relative w-full max-w-[350px] sm:max-w-[400px] md:max-w-[500px] mx-auto aspect-square" ref={radarRef}>
              {/* Radar background effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent rounded-full animate-pulse" />
              
              {/* Radar SVG */}
              <svg className="absolute inset-0 w-full h-full">
                {/* Grid lines (reduce on mobile) */}
                {(isMobile ? [30, 120] : [30, 60, 120, 150]).map(angle => (
                  <line
                    key={angle}
                    x1="50%"
                    y1="50%"
                    x2={`${50 + 40 * Math.cos((angle - 90) * Math.PI / 180)}%`}
                    y2={`${50 + 40 * Math.sin((angle - 90) * Math.PI / 180)}%`}
                    stroke="#00ff41"
                    strokeWidth="0.5"
                    opacity="0.1"
                  />
                ))}
                
                {/* Concentric circles with labels */}
                {(isMobile ? [20, 40, 60, 80] : [20, 40, 60, 80]).map((radius, i) => (
                  <g key={radius}>
                    <circle 
                      cx="50%" 
                      cy="50%" 
                      r={`${radius}%`} 
                      fill="none" 
                      stroke="#00ff41" 
                      strokeWidth="1" 
                      opacity={0.2 - i * 0.03}
                      strokeDasharray={i % 2 === 0 ? "5,5" : "none"}
                    />
                    {!isMobile && (
                      <text
                        x="50%"
                        y={`${50 - radius + 2}%`}
                        textAnchor="middle"
                        fill="#00ff41"
                        fontSize="10"
                        opacity="0.3"
                      >
                        {radius}km
                      </text>
                    )}
                  </g>
                ))}
                
                {/* Cross lines */}
                <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#00ff41" strokeWidth="1" opacity="0.15" />
                <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#00ff41" strokeWidth="1" opacity="0.15" />
                
                {/* Interference effect */}
                {interference > 0 && (
                  <circle
                    cx="50%"
                    cy="50%"
                    r={`${interference}%`}
                    fill="none"
                    stroke="#ff0000"
                    strokeWidth="2"
                    opacity={interference / 100}
                    strokeDasharray="2,4"
                  >
                    <animate
                      attributeName="r"
                      values={`${interference}%;${interference + 10}%;${interference}%`}
                      dur="0.3s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
                
                {/* Enhanced scanning line - Always active */}
                <>
                  <line
                    x1="50%"
                    y1="50%"
                    x2={`${50 + 40 * Math.cos((scanProgress - 90) * Math.PI / 180)}%`}
                    y2={`${50 + 40 * Math.sin((scanProgress - 90) * Math.PI / 180)}%`}
                    stroke="#00ff41"
                    strokeWidth="2"
                    opacity="0.8"
                    filter="url(#glow)"
                  />
                  
                  {/* Scan trail with gradient (reduce on mobile) */}
                  {Array.from({ length: isMobile ? 45 : 60 }, (_, i) => (
                    <line
                      key={i}
                      x1="50%"
                      y1="50%"
                      x2={`${50 + 40 * Math.cos(((scanProgress - i * 1.5) - 90) * Math.PI / 180)}%`}
                      y2={`${50 + 40 * Math.sin(((scanProgress - i * 1.5) - 90) * Math.PI / 180)}%`}
                      stroke="#00ff41"
                      strokeWidth="1"
                      opacity={0.5 - (i * 0.008)}
                    />
                  ))}
                </>
                
                {/* SVG Filters */}
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <filter id="turbulence">
                    <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="turbulence"/>
                    <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="2" xChannelSelector="R" yChannelSelector="G"/>
                  </filter>
                </defs>
              </svg>
              
              {/* Enhanced signal points with quantum effects */}
              {channels.map(channel => {
                const x = 50 + (channel.position.distance * 0.4) * Math.cos((channel.position.angle - 90) * Math.PI / 180);
                const y = 50 + (channel.position.distance * 0.4) * Math.sin((channel.position.angle - 90) * Math.PI / 180);
                const isDetected = detectedSignals.includes(channel.id);
                const isActive = activeSignal === channel.id;
                const isHovered = hoveredSignal === channel.id;
                
                return (
                  <ChannelSignal
                    key={channel.id}
                    channel={channel}
                    x={x}
                    y={y}
                    isDetected={isDetected}
                    isActive={isActive}
                    isHovered={isHovered}
                    onSelect={handleChannelSelect}
                    onHover={handleHoverSignal}
                    onLeave={handleLeaveSignal}
                    isMobile={isMobile}
                  />
                );
              })}
              
              {/* Center beacon with quantum core */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-green-400 rounded-full animate-pulse relative">
                  <div className="absolute inset-0 bg-green-400 rounded-full animate-ping" />
                  <div className="absolute inset-[-4px] border-2 border-green-400 rounded-full opacity-50" />
                  {/* Quantum core effect (hide on mobile) */}
                  {!isMobile && (
                    <div className="absolute inset-[-10px] rounded-full" style={{
                      background: `radial-gradient(circle, transparent 30%, #00ff4120 50%, transparent 70%)`,
                      animation: 'rotate 4s linear infinite reverse'
                    }} />
                  )}
                </div>
              </div>
            </div>
            
            {/* Control buttons and status indicators */}
            <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setDetectedSignals([]);
                    setScanProgress(0);
                  }}
                  className="flex-1 py-2 px-3 sm:px-4 rounded font-mono text-xs transition-all bg-green-500/20 border border-green-500/40 text-green-400 hover:bg-green-500/30 hover:border-green-500/60"
                >
                  RESET SCAN
                </button>
                
                <button
                  onClick={() => {
                    setSelectedChannel(null);
                    setActiveSignal(null);
                  }}
                  className="px-3 sm:px-4 py-2 bg-red-500/20 border border-red-500/40 text-red-400 rounded font-mono text-xs hover:bg-red-500/30 hover:border-red-500/60 transition-all"
                >
                  CLEAR
                </button>
              </div>
              
              {/* Status indicators */}
              <div className="flex justify-center gap-3 sm:gap-4 text-xs font-mono">
                <div className="flex items-center gap-1 sm:gap-2">
                  <Satellite className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 animate-pulse" />
                  <span className="text-gray-400">SCAN: ON</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <Radio className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 animate-pulse" />
                  <span className="text-gray-400">{detectedSignals.length}/{channels.length}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Information Panel */}
          <div className="flex flex-col space-y-4 sm:space-y-5 order-2">
            {/* Selected Channel Info */}
            {selectedChannel && (
              <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-3 sm:p-4 animate-fade-in relative overflow-hidden">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,255,65,0.1) 10px, rgba(0,255,65,0.1) 20px)`,
                    animation: 'slide 20s linear infinite'
                  }} />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-green-400 font-mono text-xs sm:text-sm flex items-center gap-1 sm:gap-2">
                      {(() => {
                        const channel = channels.find(c => c.id === selectedChannel);
                        return (
                          <>
                            <channel.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                            {selectedChannel.toUpperCase()}
                          </>
                        );
                      })()}
                    </h3>
                    <span className="text-xs font-mono text-green-400 px-2 py-1 bg-green-500/10 rounded">
                      {channels.find(c => c.id === selectedChannel)?.frequency}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-gray-500 uppercase">Platform:</span>
                      <span className="font-mono text-xs text-green-400">{channels.find(c => c.id === selectedChannel)?.type}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-gray-500 uppercase">Username:</span>
                      <span className="font-mono text-xs text-green-400 truncate max-w-[150px] sm:max-w-none">
                        {channels.find(c => c.id === selectedChannel)?.username}
                      </span>
                    </div>
                    
                    <div className="mt-3 pt-3 border-t border-green-500/20">
                      <a 
                        href={`${channels.find(c => c.id === selectedChannel)?.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 sm:gap-2 text-green-400 hover:text-green-300 font-mono text-xs group"
                      >
                        {getButtonText(selectedChannel)} 
                        <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Enhanced Message Transmitter */}
            <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-4 sm:p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-green-500/10 rounded-full filter blur-3xl" />
              
              <h3 className="text-green-400 font-mono text-base sm:text-lg mb-3 sm:mb-4 flex items-center gap-2">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                DIRECT TRANSMISSION
              </h3>
              
              <form onSubmit={handleFormSubmit} className="space-y-3 sm:space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="cin >> Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black/40 border border-green-500/30 rounded text-green-400 placeholder-gray-500 font-mono text-xs sm:text-sm focus:border-green-500/50 focus:outline-none transition-all"
                    disabled={isTransmitting}
                  />
                  <div className={`absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${formData.name ? 'bg-green-400' : 'bg-gray-600'} transition-colors`} />
                </div>
                
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Return Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black/40 border border-green-500/30 rounded text-green-400 placeholder-gray-500 font-mono text-xs sm:text-sm focus:border-green-500/50 focus:outline-none transition-all"
                    disabled={isTransmitting}
                  />
                  <div className={`absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${formData.email ? 'bg-green-400' : 'bg-gray-600'} transition-colors`} />
                </div>
                
                <div className="relative">
                  <textarea
                    placeholder="Type your encrypted message here..."
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black/40 border border-green-500/30 rounded text-green-400 placeholder-gray-500 font-mono text-xs sm:text-sm focus:border-green-500/50 focus:outline-none transition-all resize-none"
                    disabled={isTransmitting}
                  />
                  <div className={`absolute right-3 top-3 w-2 h-2 rounded-full ${formData.message ? 'bg-green-400' : 'bg-gray-600'} transition-colors`} />
                  <div className="absolute bottom-2 right-3 text-xs font-mono text-gray-500">
                    {formData.message.length}/500
                  </div>
                </div>
                
                {/* Transmission progress */}
                {isTransmitting && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono text-gray-400">
                      <span>TRANSMITTING...</span>
                      <span>{Math.floor(transmissionProgress)}%</span>
                    </div>
                    <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-green-400 rounded-full transition-all duration-300 relative"
                        style={{ width: `${transmissionProgress}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </div>
                    </div>
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isTransmitting || !formData.name || !formData.email || !formData.message}
                  className={`w-full py-2.5 sm:py-3 font-mono font-semibold rounded transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 relative overflow-hidden text-xs sm:text-base ${
                    isTransmitting 
                      ? 'bg-green-950/30 border border-green-500/30 text-gray-400 cursor-not-allowed' 
                      : 'bg-green-400 text-black hover:bg-green-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-green-400/30'
                  }`}
                >
                  {isTransmitting ? (
                    <>
                      <Loader className="w-3 h-3 sm:w-4 sm:h-4 animate-spin" />
                      <span className="">TRANSMITTING...</span>
                      {Math.floor(transmissionProgress)}%
                    </>
                  ) : (
                    <>
                      <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="">INITIATE TRANSMISSION</span>
                    </>
                  )}
                  
                  {/* Button shine effect */}
                  {!isTransmitting && (
                    <div className="absolute inset-0 -top-full bg-gradient-to-b from-white/20 to-transparent transform skew-y-12 group-hover:translate-y-full transition-transform duration-700" />
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(20px);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

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

        .signal-bar {
          width: 4px;
          height: 14px;
          border-radius: 2px;
          transition: all 0.3s ease;
          animation: audioWave 1s ease-in-out infinite;
        }

        @keyframes audioWave {
          0%, 100% {
            transform: scaleY(0.7);
          }
          50% {
            transform: scaleY(1);
          }
        }

        /* Hide scrollbar on mobile for better experience */
        @media (max-width: 640px) {
          ::-webkit-scrollbar {
            width: 2px;
          }
        }
      `}</style>
    </div>
  );
}