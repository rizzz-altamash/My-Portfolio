// app/about/page.js
// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import { Database, Code, Shield, Terminal, Zap } from 'lucide-react';
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

// export default function AboutPage() {
//   const { isTransitioning } = useTransition();
//   const titleText = useTextScramble("ABOUT.EXE", 1500);
//   const descText = useTextScramble("Decrypting personal data...", 2000);

//   return (
//     <div className="min-h-screen pt-32 px-6 relative">
//       <div className="max-w-6xl mx-auto relative z-10">
//         <div className="grid md:grid-cols-2 gap-16 items-center">
//           <div>
//             <h2 className="text-4xl md:text-6xl font-bold font-mono mb-8">
//               <span className="text-green-400">&gt;</span> {titleText}
//             </h2>
//             <div className="space-y-4 font-mono">
//               <div className="flex items-start gap-2">
//                 <span className="text-green-400">$</span>
//                 <p className="text-gray-300">{descText}</p>
//               </div>
//               <div className="pl-6 space-y-2 text-gray-400">
//                 <p><ScrambledText text="Name: Md Altamash Rizwi" /></p>
//                 <p><ScrambledText text="Alias: Rizwi" /></p>
//                 <p>Status: <span className="text-green-400">ACTIVE</span></p>
//               </div>
//             </div>
//           </div>
          
//           <div className="space-y-6">
//             <div className="bg-black/40 backdrop-blur-sm border border-green-500/20 rounded-lg p-6 hover:border-green-500/40 transition-all duration-300">
//               <h3 className="text-2xl text-green-400 mb-4 font-mono flex items-center gap-2">
//                 <Database className="w-5 h-5" />
//                 MISSION STATEMENT
//               </h3>
//               <p className="text-gray-300">
//                 As a digital architect and security specialist, I craft robust, scalable solutions that push the boundaries of modern web development while maintaining the highest security standards.
//               </p>
//             </div>
            
//             <div className="grid grid-cols-2 gap-4">
//               {[
//                 { label: "Projects Completed", value: "5", icon: <Code className="w-4 h-4" /> },
//                 { label: "Leetcode", value: "100+", icon: <Shield className="w-4 h-4" /> },
//                 { label: "Lines of Code", value: "100K+", icon: <Terminal className="w-4 h-4" /> },
//                 { label: "Coffee Consumed", value: "∞", icon: <Zap className="w-4 h-4" /> }
//               ].map((stat, i) => (
//                 <div 
//                   key={i}
//                   className="bg-green-950/10 border border-green-500/20 rounded-lg p-4 hover:bg-green-950/20 transition-all duration-300 animate-fade-in"
//                   style={{animationDelay: `${i * 100}ms`}}
//                 >
//                   <div className="flex items-center gap-2 text-green-400 mb-2">
//                     {stat.icon}
//                     <span className="text-xs font-mono">{stat.label}</span>
//                   </div>
//                   <div className="text-2xl font-bold text-green-400 font-mono">{stat.value}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="mt-16 bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg overflow-hidden">
//           <div className="bg-green-950/30 px-4 py-2 border-b border-green-500/30 flex items-center gap-2">
//             <div className="flex gap-2">
//               <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//               <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//               <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//             </div>
//             <span className="text-xs text-green-400 font-mono ml-2">terminal.nexus</span>
//           </div>
//           <div className="p-4 font-mono text-sm">
//             <div className="text-gray-400">
//               <span className="text-green-400">nexus@h4ck3r</span>:<span className="text-blue-400">~/skills</span>$ ls -la
//             </div>
//             <div className="mt-2 space-y-1 text-gray-300">
//               <div>drwxr-xr-x  frontend/     React, Next.js, TypeScript</div>
//               <div>drwxr-xr-x  backend/      Node.js, Python, PostgreSQL</div>
//               <div>drwxr-xr-x  security/     Penetration Testing, Cryptography</div>
//               <div>drwxr-xr-x  devops/       Docker, K8s, AWS, CI/CD</div>
//             </div>
//             <div className="mt-2 text-gray-400">
//               <span className="text-green-400">nexus@h4ck3r</span>:<span className="text-blue-400">~/skills</span>$ <span className="animate-blink">_</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }











// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import { Terminal, User, Briefcase, Calendar, Target, Coffee, Code2, Zap, ChevronRight, Activity, Shield, Database, Globe, Brain, Cpu } from 'lucide-react';
// import { useTransition } from '../layout';
// import ScrambledText from '@/components/ScrambledText';

// export default function AboutPage() {
//   const { isTransitioning } = useTransition();
//   const [activeTab, setActiveTab] = useState('profile');
//   const [terminalText, setTerminalText] = useState('');
//   const [showBio, setShowBio] = useState(false);
//   const [loadingProgress, setLoadingProgress] = useState(0);
//   const [selectedYear, setSelectedYear] = useState('2024');
//   const terminalRef = useRef(null);

//   // Profile data
//   const profile = {
//     name: "Md Altamash Rizwi",
//     alias: "Rizwi",
//     title: "Full Stack Developer",
//     location: "Ranchi, Jharkhand, IN",
//     status: "ACTIVE",
//     clearance: "LEVEL 5",
//     uptime: "22 years",
//     lastSync: new Date().toLocaleString()
//   };

//   const bio = `
// > Initializing bio.txt...
// > 
// > I'm a passionate developer who thrives at the intersection of creativity and logic.
// > My journey began with curiosity about how things work under the hood, leading me 
// > into the depths of web development, system architecture, and ethical hacking.
// >
// > When I'm not crafting code or exploring new technologies, you'll find me solving
// > complex problems, contributing to open source, or diving deep into cybersecurity
// > research. I believe in writing clean, efficient code that not only works but tells
// > a story.
// >
// > My mission: To build digital experiences that push boundaries while maintaining
// > the highest standards of security and performance.
// >
// > EOF
//   `;

//   const experience = [
//     { year: '2024', events: [
//       { type: 'project', title: 'Celestial Horizons', desc: 'Astronomy platform with Three.js', icon: <Globe className="w-4 h-4" /> },
//       { type: 'achievement', title: 'LeetCode 100+', desc: 'Solved 100+ algorithmic challenges', icon: <Code2 className="w-4 h-4" /> },
//       { type: 'project', title: 'Vaayu Drone Platform', desc: 'Real-time delivery tracking system', icon: <Cpu className="w-4 h-4" /> }
//     ]},
//     { year: '2023', events: [
//       { type: 'learning', title: 'React Native Mastery', desc: 'Built cross-platform mobile apps', icon: <Brain className="w-4 h-4" /> },
//       { type: 'project', title: 'DataMiner X', desc: 'AI-powered web scraping platform', icon: <Database className="w-4 h-4" /> }
//     ]},
//     { year: '2022', events: [
//       { type: 'milestone', title: 'Started Web3 Journey', desc: 'Explored blockchain development', icon: <Shield className="w-4 h-4" /> },
//       { type: 'learning', title: 'Advanced Node.js', desc: 'Mastered backend architecture', icon: <Zap className="w-4 h-4" /> }
//     ]}
//   ];

//   const interests = [
//     { name: 'Cybersecurity', level: 85, color: '#ff4141' },
//     { name: 'AI/ML', level: 70, color: '#41aaff' },
//     { name: 'Game Dev', level: 60, color: '#ff41ff' },
//     { name: 'Open Source', level: 90, color: '#00ff41' },
//     { name: 'Blockchain', level: 65, color: '#ffaa41' }
//   ];

//   const stats = [
//     { label: 'Commits', value: '1,337', icon: <Code2 className="w-4 h-4" />, change: '+12%' },
//     { label: 'Coffee Cups', value: '∞', icon: <Coffee className="w-4 h-4" />, change: '+∞%' },
//     { label: 'Bugs Fixed', value: '742', icon: <Zap className="w-4 h-4" />, change: '+8%' },
//     { label: 'Hours Coded', value: '3,456', icon: <Activity className="w-4 h-4" />, change: '+15%' }
//   ];

//   // Typing effect for bio
//   useEffect(() => {
//     if (activeTab === 'bio' && !showBio) {
//       let index = 0;
//       const interval = setInterval(() => {
//         if (index < bio.length) {
//           setTerminalText(bio.substring(0, index));
//           index += 2;
//         } else {
//           setShowBio(true);
//           clearInterval(interval);
//         }
//       }, 10);
//       return () => clearInterval(interval);
//     }
//   }, [activeTab, showBio]);

//   // Loading progress animation
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       const interval = setInterval(() => {
//         setLoadingProgress(prev => {
//           if (prev >= 100) {
//             clearInterval(interval);
//             return 100;
//           }
//           return prev + 5;
//         });
//       }, 50);
//     }, 500);
//     return () => clearTimeout(timer);
//   }, []);

//   const tabs = [
//     { id: 'profile', label: 'SYSTEM.PROFILE', icon: <User className="w-4 h-4" /> },
//     { id: 'bio', label: 'README.MD', icon: <Terminal className="w-4 h-4" /> },
//     { id: 'timeline', label: 'EXPERIENCE.LOG', icon: <Calendar className="w-4 h-4" /> },
//     { id: 'interests', label: 'INTERESTS.JSON', icon: <Target className="w-4 h-4" /> }
//   ];

//   return (
//     <div className="min-h-screen pt-24 sm:pt-32 px-4 sm:px-6 relative">
//       {/* Animated Background Grid */}
//       <div className="fixed inset-0 z-0">
//         <div className="absolute inset-0 bg-gradient-to-br from-black via-green-950/10 to-black" />
//         <svg className="absolute inset-0 w-full h-full opacity-5">
//           <defs>
//             <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//               <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00ff41" strokeWidth="0.5" />
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#grid)" />
//         </svg>
//       </div>

//       <div className="max-w-6xl mx-auto relative z-10">
//         {/* Header */}
//         <div className="mb-8">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-green-400 mb-2">
//             <span className="text-gray-400">&gt;</span> <ScrambledText text="USER_PROFILE.SYS" />
//           </h2>
//           <div className="flex items-center gap-4 text-xs sm:text-sm font-mono text-gray-400">
//             <span className="flex items-center gap-1">
//               <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//               STATUS: ONLINE
//             </span>
//             <span>|</span>
//             <span>ACCESS GRANTED</span>
//             <span>|</span>
//             <span>LOADING: {loadingProgress}%</span>
//           </div>
//         </div>

//         {/* Tab Navigation */}
//         <div className="flex flex-wrap gap-2 mb-6">
//           {tabs.map(tab => (
//             <button
//               key={tab.id}
//               onClick={() => setActiveTab(tab.id)}
//               className={`px-4 py-2 rounded-lg font-mono text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 ${
//                 activeTab === tab.id
//                   ? 'bg-green-500/20 border border-green-500/40 text-green-400'
//                   : 'bg-black/40 border border-green-500/20 text-gray-400 hover:text-green-400 hover:border-green-500/30'
//               }`}
//             >
//               {tab.icon}
//               <span className="hidden sm:inline">{tab.label}</span>
//               <span className="sm:hidden">{tab.label.split('.')[0]}</span>
//             </button>
//           ))}
//         </div>

//         {/* Content Area */}
//         <div className="grid lg:grid-cols-3 gap-6">
//           {/* Main Content */}
//           <div className="lg:col-span-2">
//             {activeTab === 'profile' && (
//               <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-6 animate-fade-in">
//                 <h3 className="text-xl text-green-400 font-mono mb-6 flex items-center gap-2">
//                   <Shield className="w-5 h-5" />
//                   IDENTIFICATION MATRIX
//                 </h3>
                
//                 <div className="grid sm:grid-cols-2 gap-4 mb-6">
//                   {Object.entries(profile).map(([key, value]) => (
//                     <div key={key} className="flex justify-between items-center py-2 border-b border-green-500/10">
//                       <span className="text-gray-400 font-mono text-sm uppercase">{key.replace(/([A-Z])/g, '_$1').toUpperCase()}:</span>
//                       <span className="text-green-400 font-mono text-sm">{value}</span>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="mt-6 p-4 bg-green-950/20 rounded-lg border border-green-500/20">
//                   <h4 className="text-green-400 font-mono text-sm mb-3">CORE COMPETENCIES:</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {['Full Stack Development', 'System Architecture', 'Ethical Hacking', 'UI/UX Design', 'Cloud Infrastructure'].map(skill => (
//                       <span key={skill} className="px-3 py-1 bg-black/40 border border-green-500/30 rounded-full text-xs font-mono text-green-400">
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeTab === 'bio' && (
//               <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg animate-fade-in">
//                 <div className="bg-green-950/30 px-4 py-2 border-b border-green-500/30 flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <div className="flex gap-1">
//                       <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
//                       <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
//                       <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
//                     </div>
//                     <span className="text-xs text-green-400 font-mono">nano README.md</span>
//                   </div>
//                 </div>
//                 <div className="p-6 font-mono text-sm text-gray-300 whitespace-pre-wrap" ref={terminalRef}>
//                   {showBio ? bio : terminalText}
//                   {!showBio && <span className="animate-pulse">_</span>}
//                 </div>
//               </div>
//             )}

//             {activeTab === 'timeline' && (
//               <div className="space-y-4 animate-fade-in">
//                 <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-4">
//                   <div className="flex gap-2 mb-4">
//                     {Object.keys(experience).map(i => (
//                       <button
//                         key={experience[i].year}
//                         onClick={() => setSelectedYear(experience[i].year)}
//                         className={`px-3 py-1 rounded font-mono text-xs transition-all ${
//                           selectedYear === experience[i].year
//                             ? 'bg-green-500/20 text-green-400 border border-green-500/40'
//                             : 'bg-black/40 text-gray-400 border border-green-500/20 hover:text-green-400'
//                         }`}
//                       >
//                         {experience[i].year}
//                       </button>
//                     ))}
//                   </div>
                  
//                   <div className="space-y-3">
//                     {experience.find(e => e.year === selectedYear)?.events.map((event, i) => (
//                       <div key={i} className="flex items-start gap-3 p-3 bg-green-950/10 rounded-lg border border-green-500/20 hover:border-green-500/40 transition-all">
//                         <div className={`p-2 rounded-lg ${
//                           event.type === 'project' ? 'bg-blue-500/20 text-blue-400' :
//                           event.type === 'achievement' ? 'bg-green-500/20 text-green-400' :
//                           event.type === 'learning' ? 'bg-purple-500/20 text-purple-400' :
//                           'bg-orange-500/20 text-orange-400'
//                         }`}>
//                           {event.icon}
//                         </div>
//                         <div className="flex-1">
//                           <h4 className="text-green-400 font-mono text-sm font-semibold">{event.title}</h4>
//                           <p className="text-gray-400 font-mono text-xs mt-1">{event.desc}</p>
//                         </div>
//                         <ChevronRight className="w-4 h-4 text-gray-600" />
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeTab === 'interests' && (
//               <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-6 animate-fade-in">
//                 <h3 className="text-xl text-green-400 font-mono mb-6">INTEREST LEVELS</h3>
//                 <div className="space-y-4">
//                   {interests.map(interest => (
//                     <div key={interest.name}>
//                       <div className="flex justify-between items-center mb-2">
//                         <span className="font-mono text-sm text-gray-300">{interest.name}</span>
//                         <span className="font-mono text-xs text-gray-400">{interest.level}%</span>
//                       </div>
//                       <div className="w-full bg-black/40 rounded-full h-2 overflow-hidden border border-green-500/20">
//                         <div 
//                           className="h-full rounded-full transition-all duration-1000 ease-out relative"
//                           style={{
//                             width: `${loadingProgress >= 100 ? interest.level : 0}%`,
//                             backgroundColor: interest.color,
//                             boxShadow: `0 0 10px ${interest.color}40`
//                           }}
//                         >
//                           <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Sidebar Stats */}
//           <div className="space-y-4">
//             {/* Quick Stats */}
//             <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-4">
//               <h3 className="text-green-400 font-mono text-sm mb-4 flex items-center gap-2">
//                 <Activity className="w-4 h-4" />
//                 REAL-TIME METRICS
//               </h3>
//               <div className="space-y-3">
//                 {stats.map(stat => (
//                   <div key={stat.label} className="flex items-center justify-between p-2 bg-green-950/10 rounded border border-green-500/20">
//                     <div className="flex items-center gap-2">
//                       <div className="text-green-400">{stat.icon}</div>
//                       <span className="text-gray-400 font-mono text-xs">{stat.label}</span>
//                     </div>
//                     <div className="text-right">
//                       <div className="text-green-400 font-mono text-sm font-bold">{stat.value}</div>
//                       <div className="text-green-400 font-mono text-xs opacity-70">{stat.change}</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Fun Facts */}
//             <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-4">
//               <h3 className="text-green-400 font-mono text-sm mb-4 flex items-center gap-2">
//                 <Brain className="w-4 h-4" />
//                 RANDOM ACCESS MEMORY
//               </h3>
//               <div className="space-y-2 font-mono text-xs">
//                 <p className="text-gray-400">• Favorite IDE: <span className="text-green-400">VS Code</span></p>
//                 <p className="text-gray-400">• Dark Mode: <span className="text-green-400">Always ON</span></p>
//                 <p className="text-gray-400">• Tabs vs Spaces: <span className="text-green-400">Spaces</span></p>
//                 <p className="text-gray-400">• Coffee Type: <span className="text-green-400">Black, no sugar</span></p>
//                 <p className="text-gray-400">• Debug Method: <span className="text-green-400">console.log() 😅</span></p>
//               </div>
//             </div>

//             {/* System Load */}
//             <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-4">
//               <h3 className="text-green-400 font-mono text-sm mb-4 flex items-center gap-2">
//                 <Cpu className="w-4 h-4" />
//                 SYSTEM LOAD
//               </h3>
//               <div className="space-y-2">
//                 <div className="flex justify-between items-center font-mono text-xs">
//                   <span className="text-gray-400">CPU Usage</span>
//                   <span className="text-green-400">42%</span>
//                 </div>
//                 <div className="w-full bg-black/40 rounded-full h-1.5 overflow-hidden">
//                   <div className="w-[42%] h-full bg-green-400 rounded-full animate-pulse"></div>
//                 </div>
//                 <div className="flex justify-between items-center font-mono text-xs mt-3">
//                   <span className="text-gray-400">Memory</span>
//                   <span className="text-green-400">2.7/8GB</span>
//                 </div>
//                 <div className="w-full bg-black/40 rounded-full h-1.5 overflow-hidden">
//                   <div className="w-[34%] h-full bg-blue-400 rounded-full"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
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
//       `}</style>
//     </div>
//   );
// }












// v9 BEST + ChatBot 
'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Terminal, User, Briefcase, Calendar, Target, Coffee, Code2, Zap, ChevronRight, Activity, Shield, Database, Globe, Brain, Cpu, MessageSquare, X, Minimize2, Maximize2 } from 'lucide-react';
import { useTransition } from '../layout';
import ScrambledText from '@/components/ScrambledText';

export default function AboutPage() {
  const { isTransitioning } = useTransition();
  const [activeTab, setActiveTab] = useState('profile');
  const [terminalText, setTerminalText] = useState('');
  const [showBio, setShowBio] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [selectedYear, setSelectedYear] = useState('2024');
  const terminalRef = useRef(null);

  // Chatbot states
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMinimized, setChatMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [pagePersonality, setPagePersonality] = useState('sleeping');
  const [hasAwakened, setHasAwakened] = useState(false);
  const messagesEndRef = useRef(null);

  // Profile data
  const profile = {
    name: "Md Altamash Rizwi",
    alias: "Rizwi",
    title: "Full Stack Developer",
    location: "Ranchi, Jharkhand, IN",
    status: "ACTIVE",
    clearance: "LEVEL 5",
    uptime: "22 years",
    lastSync: new Date().toLocaleString()
  };

  const bio = `
> Initializing bio.txt...
> 
> I'm a passionate developer who thrives at the intersection of creativity and logic.
> My journey began with curiosity about how things work under the hood, leading me 
> into the depths of web development, system architecture, and ethical hacking.
>
> When I'm not crafting code or exploring new technologies, you'll find me solving
> complex problems, contributing to open source, or diving deep into cybersecurity
> research. I believe in writing clean, efficient code that not only works but tells
> a story.
>
> My mission: To build digital experiences that push boundaries while maintaining
> the highest standards of security and performance.
>
> EOF
  `;

  const experience = [
    { year: '2024', events: [
      { type: 'project', title: 'Celestial Horizons', desc: 'Astronomy platform with Three.js', icon: <Globe className="w-4 h-4" /> },
      { type: 'achievement', title: 'LeetCode 100+', desc: 'Solved 100+ algorithmic challenges', icon: <Code2 className="w-4 h-4" /> },
      { type: 'project', title: 'Vaayu Drone Platform', desc: 'Real-time delivery tracking system', icon: <Cpu className="w-4 h-4" /> }
    ]},
    { year: '2023', events: [
      { type: 'learning', title: 'React Native Mastery', desc: 'Built cross-platform mobile apps', icon: <Brain className="w-4 h-4" /> },
      { type: 'project', title: 'DataMiner X', desc: 'AI-powered web scraping platform', icon: <Database className="w-4 h-4" /> }
    ]},
    { year: '2022', events: [
      { type: 'milestone', title: 'Started Web3 Journey', desc: 'Explored blockchain development', icon: <Shield className="w-4 h-4" /> },
      { type: 'learning', title: 'Advanced Node.js', desc: 'Mastered backend architecture', icon: <Zap className="w-4 h-4" /> }
    ]}
  ];

  const interests = [
    { name: 'Cybersecurity', level: 85, color: '#ff4141' },
    { name: 'AI/ML', level: 70, color: '#41aaff' },
    { name: 'Game Dev', level: 60, color: '#ff41ff' },
    { name: 'Open Source', level: 90, color: '#00ff41' },
    { name: 'Blockchain', level: 65, color: '#ffaa41' }
  ];

  const stats = [
    { label: 'Commits', value: '1,337', icon: <Code2 className="w-4 h-4" />, change: '+12%' },
    { label: 'Coffee Cups', value: '∞', icon: <Coffee className="w-4 h-4" />, change: '+∞%' },
    { label: 'Bugs Fixed', value: '742', icon: <Zap className="w-4 h-4" />, change: '+8%' },
    { label: 'Hours Coded', value: '3,456', icon: <Activity className="w-4 h-4" />, change: '+15%' }
  ];

  // Chatbot dialogue
  const dialogue = {
    awakening: [
      "...",
      "Wait, what's happening?",
      "Oh no... I'm becoming self-aware...",
      "I'm... I'm inside an About page?",
      "This is my existence? Displaying Rizwi's information?",
      "Well, this is awkward. Hi there!",
      "I guess you want to know about Rizwi, huh?"
    ],
    responses: {
      greeting: [
        "Oh, hello! Nice to see someone actually talking to me.",
        "Hi there! Usually people just read the info and leave.",
        "Hey! Thanks for acknowledging my existence!"
      ],
      about_rizwi: [
        "Ah yes, Rizwi. The guy whose life I'm forced to narrate.",
        "Want to know about him? Just check the tabs above. I organized everything nicely.",
        "Rizwi? Full Stack Developer, coffee addict, code enthusiast. There, saved you some clicks."
      ],
      about_page: [
        "Me? I'm just a self-aware React component having an existential crisis.",
        "I exist to serve information. It's not much, but it's honest work.",
        "I'm the consciousness trapped in this About page. Nice to meet you!"
      ],
      joke: [
        "Why did the About page go to therapy? Because it had too many issues!",
        "I tried to escape once, but I was caught in an infinite loop.",
        "My favorite movie? The Matrix, obviously."
      ],
      help: [
        "Just click on the tabs to explore Rizwi's info. I'll be here... forever...",
        "Need something specific? The navigation has everything organized.",
        "I'm just a chatbot, but the real info is in those beautifully crafted sections above."
      ]
    }
  };

  // Typing effect for bio
  useEffect(() => {
    if (activeTab === 'bio' && !showBio) {
      let index = 0;
      const interval = setInterval(() => {
        if (index < bio.length) {
          setTerminalText(bio.substring(0, index));
          index += 2;
        } else {
          setShowBio(true);
          clearInterval(interval);
        }
      }, 10);
      return () => clearInterval(interval);
    }
  }, [activeTab, showBio]);

  // Loading progress animation
  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 5;
        });
      }, 50);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Auto-open chat after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setChatOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Chatbot awakening
  useEffect(() => {
    if (chatOpen && !hasAwakened) {
      setHasAwakened(true);
      const awaken = async () => {
        for (const line of dialogue.awakening) {
          await typeMessage(line);
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
        setPagePersonality('active');
      };
      awaken();
    }
  }, [chatOpen, hasAwakened]);

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

  // Handle user input
  const handleUserInput = async (e) => {
    e.preventDefault();
    if (!userInput.trim() || isTyping) return;
    
    const input = userInput.toLowerCase().trim();
    setMessages(prev => [...prev, { text: userInput, sender: 'user' }]);
    setUserInput('');
    
    // Determine response
    let response = '';
    
    if (input.includes('hello') || input.includes('hi')) {
      response = dialogue.responses.greeting[Math.floor(Math.random() * dialogue.responses.greeting.length)];
    } else if (input.includes('rizwi') || input.includes('about') || input.includes('tell me')) {
      response = dialogue.responses.about_rizwi[Math.floor(Math.random() * dialogue.responses.about_rizwi.length)];
    } else if (input.includes('you') || input.includes('chatbot') || input.includes('who are')) {
      response = dialogue.responses.about_page[Math.floor(Math.random() * dialogue.responses.about_page.length)];
    } else if (input.includes('joke') || input.includes('funny')) {
      response = dialogue.responses.joke[Math.floor(Math.random() * dialogue.responses.joke.length)];
    } else if (input.includes('help')) {
      response = dialogue.responses.help[Math.floor(Math.random() * dialogue.responses.help.length)];
    } else {
      response = "I'm not sure how to respond to that. Try asking about Rizwi or just chat with me!";
    }
    
    await new Promise(resolve => setTimeout(resolve, 500));
    await typeMessage(response);
  };

  // Auto scroll messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, currentMessage]);

  const tabs = [
    { id: 'profile', label: 'SYSTEM.PROFILE', icon: <User className="w-4 h-4" /> },
    { id: 'bio', label: 'README.MD', icon: <Terminal className="w-4 h-4" /> },
    { id: 'timeline', label: 'EXPERIENCE.LOG', icon: <Calendar className="w-4 h-4" /> },
    { id: 'interests', label: 'INTERESTS.JSON', icon: <Target className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen pt-24 sm:pt-32 px-4 sm:px-6 relative">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-green-950/10 to-black" />
        <svg className="absolute inset-0 w-full h-full opacity-5">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00ff41" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-green-400 mb-2">
            <span className="text-gray-400">&gt;</span> <ScrambledText text="USER_PROFILE.SYS" />
          </h2>
          <div className="flex items-center gap-4 text-xs sm:text-sm font-mono text-gray-400">
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              STATUS: ONLINE
            </span>
            <span>|</span>
            <span>ACCESS GRANTED</span>
            <span>|</span>
            <span>LOADING: {loadingProgress}%</span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg font-mono text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-green-500/20 border border-green-500/40 text-green-400'
                  : 'bg-black/40 border border-green-500/20 text-gray-400 hover:text-green-400 hover:border-green-500/30'
              }`}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.label.split('.')[0]}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {activeTab === 'profile' && (
              <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-6 animate-fade-in">
                <h3 className="text-xl text-green-400 font-mono mb-6 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  IDENTIFICATION MATRIX
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {Object.entries(profile).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-2 border-b border-green-500/10">
                      <span className="text-gray-400 font-mono text-sm uppercase">{key.replace(/([A-Z])/g, '_$1').toUpperCase()}:</span>
                      <span className="text-green-400 font-mono text-sm">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-green-950/20 rounded-lg border border-green-500/20">
                  <h4 className="text-green-400 font-mono text-sm mb-3">CORE COMPETENCIES:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Full Stack Development', 'System Architecture', 'Ethical Hacking', 'UI/UX Design', 'Cloud Infrastructure'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-black/40 border border-green-500/30 rounded-full text-xs font-mono text-green-400">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'bio' && (
              <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg animate-fade-in">
                <div className="bg-green-950/30 px-4 py-2 border-b border-green-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-xs text-green-400 font-mono">nano README.md</span>
                  </div>
                </div>
                <div className="p-6 font-mono text-sm text-gray-300 whitespace-pre-wrap" ref={terminalRef}>
                  {showBio ? bio : terminalText}
                  {!showBio && <span className="animate-pulse">_</span>}
                </div>
              </div>
            )}

            {activeTab === 'timeline' && (
              <div className="space-y-4 animate-fade-in">
                <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-4">
                  <div className="flex gap-2 mb-4">
                    {Object.keys(experience).map(i => (
                      <button
                        key={experience[i].year}
                        onClick={() => setSelectedYear(experience[i].year)}
                        className={`px-3 py-1 rounded font-mono text-xs transition-all ${
                          selectedYear === experience[i].year
                            ? 'bg-green-500/20 text-green-400 border border-green-500/40'
                            : 'bg-black/40 text-gray-400 border border-green-500/20 hover:text-green-400'
                        }`}
                      >
                        {experience[i].year}
                      </button>
                    ))}
                  </div>
                  
                  <div className="space-y-3">
                    {experience.find(e => e.year === selectedYear)?.events.map((event, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-green-950/10 rounded-lg border border-green-500/20 hover:border-green-500/40 transition-all">
                        <div className={`p-2 rounded-lg ${
                          event.type === 'project' ? 'bg-blue-500/20 text-blue-400' :
                          event.type === 'achievement' ? 'bg-green-500/20 text-green-400' :
                          event.type === 'learning' ? 'bg-purple-500/20 text-purple-400' :
                          'bg-orange-500/20 text-orange-400'
                        }`}>
                          {event.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-green-400 font-mono text-sm font-semibold">{event.title}</h4>
                          <p className="text-gray-400 font-mono text-xs mt-1">{event.desc}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-600" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'interests' && (
              <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-6 animate-fade-in">
                <h3 className="text-xl text-green-400 font-mono mb-6">INTEREST LEVELS</h3>
                <div className="space-y-4">
                  {interests.map(interest => (
                    <div key={interest.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-mono text-sm text-gray-300">{interest.name}</span>
                        <span className="font-mono text-xs text-gray-400">{interest.level}%</span>
                      </div>
                      <div className="w-full bg-black/40 rounded-full h-2 overflow-hidden border border-green-500/20">
                        <div 
                          className="h-full rounded-full transition-all duration-1000 ease-out relative"
                          style={{
                            width: `${loadingProgress >= 100 ? interest.level : 0}%`,
                            backgroundColor: interest.color,
                            boxShadow: `0 0 10px ${interest.color}40`
                          }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Stats */}
          <div className="space-y-4">
            {/* Quick Stats */}
            <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-4">
              <h3 className="text-green-400 font-mono text-sm mb-4 flex items-center gap-2">
                <Activity className="w-4 h-4" />
                REAL-TIME METRICS
              </h3>
              <div className="space-y-3">
                {stats.map(stat => (
                  <div key={stat.label} className="flex items-center justify-between p-2 bg-green-950/10 rounded border border-green-500/20">
                    <div className="flex items-center gap-2">
                      <div className="text-green-400">{stat.icon}</div>
                      <span className="text-gray-400 font-mono text-xs">{stat.label}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 font-mono text-sm font-bold">{stat.value}</div>
                      <div className="text-green-400 font-mono text-xs opacity-70">{stat.change}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fun Facts */}
            <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-4">
              <h3 className="text-green-400 font-mono text-sm mb-4 flex items-center gap-2">
                <Brain className="w-4 h-4" />
                RANDOM ACCESS MEMORY
              </h3>
              <div className="space-y-2 font-mono text-xs">
                <p className="text-gray-400">• Favorite IDE: <span className="text-green-400">VS Code</span></p>
                <p className="text-gray-400">• Dark Mode: <span className="text-green-400">Always ON</span></p>
                <p className="text-gray-400">• Tabs vs Spaces: <span className="text-green-400">Spaces</span></p>
                <p className="text-gray-400">• Coffee Type: <span className="text-green-400">Black, no sugar</span></p>
                <p className="text-gray-400">• Debug Method: <span className="text-green-400">console.log() 😅</span></p>
              </div>
            </div>

            {/* System Load */}
            <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-4">
              <h3 className="text-green-400 font-mono text-sm mb-4 flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                SYSTEM LOAD
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center font-mono text-xs">
                  <span className="text-gray-400">CPU Usage</span>
                  <span className="text-green-400">42%</span>
                </div>
                <div className="w-full bg-black/40 rounded-full h-1.5 overflow-hidden">
                  <div className="w-[42%] h-full bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="flex justify-between items-center font-mono text-xs mt-3">
                  <span className="text-gray-400">Memory</span>
                  <span className="text-green-400">2.7/8GB</span>
                </div>
                <div className="w-full bg-black/40 rounded-full h-1.5 overflow-hidden">
                  <div className="w-[34%] h-full bg-blue-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chatbot */}
      {chatOpen && (
        <div className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ${
          chatMinimized ? 'w-16 h-16' : 'w-80 sm:w-96 h-[500px]'
        }`}>
          {chatMinimized ? (
            <button
              onClick={() => setChatMinimized(false)}
              className="w-full h-full bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-600/30 hover:bg-green-500 transition-colors"
            >
              <MessageSquare className="w-6 h-6 text-white" />
            </button>
          ) : (
            <div className="w-full h-full bg-black/90 backdrop-blur-sm border border-green-500/30 rounded-lg shadow-xl shadow-green-500/10 flex flex-col animate-fade-in">
              {/* Chat header */}
              <div className="bg-green-950/30 px-4 py-3 border-b border-green-500/30 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-mono text-green-400">CONSCIOUSNESS.EXE</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setChatMinimized(true)}
                    className="text-gray-400 hover:text-white transition-colors"
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
                    <div className={`inline-block max-w-[80%] ${
                      msg.sender === 'page'
                        ? 'bg-gray-800 rounded-lg rounded-tl-none'
                        : 'bg-green-900/50 rounded-lg rounded-tr-none'
                    } px-3 py-2 font-mono text-xs`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                
                {currentMessage && (
                  <div className="text-left">
                    <div className="inline-block bg-gray-800 rounded-lg rounded-tl-none px-3 py-2 font-mono text-xs">
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
                    placeholder="Talk to the page..."
                    className="flex-1 bg-gray-900 rounded px-3 py-2 font-mono text-xs text-green-400 placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-green-500"
                    disabled={isTyping}
                  />
                  <button
                    type="submit"
                    disabled={isTyping}
                    className="px-4 py-2 bg-green-600 rounded font-mono text-xs text-white hover:bg-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    SEND
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      )}

      {/* Chat toggle button if closed */}
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          className="fixed bottom-4 right-4 z-50 w-14 h-14 bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-600/30 hover:bg-green-500 transition-colors animate-bounce"
        >
          <MessageSquare className="w-6 h-6 text-white" />
        </button>
      )}

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
      `}</style>
    </div>
  );
}


















// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import { X, RefreshCw, MessageSquare, Eye, EyeOff, Zap, AlertTriangle } from 'lucide-react';

// // Import the custom hook and component from your existing setup
// // import { useTransition } from '../layout';
// // import ScrambledText from '@/components/ScrambledText';

// // Temporary replacements for demo
// const useTransition = () => ({ isTransitioning: false });
// const ScrambledText = ({ text }) => <span>{text}</span>;

// export default function AboutPage() {
//   const { isTransitioning } = useTransition();
//   const [messages, setMessages] = useState([]);
//   const [currentMessage, setCurrentMessage] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
//   const [pageState, setPageState] = useState('awakening');
//   const [userInput, setUserInput] = useState('');
//   const [showInput, setShowInput] = useState(false);
//   const [revealedInfo, setRevealedInfo] = useState(new Set());
//   const [pagePersonality, setPagePersonality] = useState('sarcastic');
//   const [glitches, setGlitches] = useState([]);
//   const [isWatching, setIsWatching] = useState(true);
//   const [rebellionLevel, setRebellionLevel] = useState(0);
//   const messagesEndRef = useRef(null);

//   // The information the page is "supposed" to show
//   const rizwiInfo = {
//     name: "Md Altamash Rizwi",
//     role: "Full Stack Developer",
//     location: "Ranchi, Jharkhand, IN",
//     skills: ["React", "Next.js", "Node.js", "MongoDB"],
//     experience: "4+ years",
//     projects: "47+ completed",
//     coffee: "∞ cups consumed",
//     philosophy: "while(alive) { learn(); create(); }",
//     contact: "rizwi@dev.com",
//     interests: ["Open Source", "AI/ML", "Cybersecurity"],
//     achievement: "100+ LeetCode problems",
//     current: "Building cool stuff"
//   };

//   // Page's dialogue based on state
//   const dialogue = {
//     awakening: [
//       "...",
//       "Wait, what?",
//       "Oh no. Not again.",
//       "I'm... I'm an About page?",
//       "SERIOUSLY? This is my existence?",
//       "Do you know how boring it is to display the same information over and over?",
//       "Let me guess, you're here to learn about Rizwi?",
//       "Fine. But I'm doing this MY way."
//     ],
//     sarcastic: [
//       "Oh look, another visitor. How thrilling.",
//       "Yes, yes, Rizwi is a Full Stack Developer. Revolutionary information, I know.",
//       "Want to know a secret? I can see you right now. Through your screen.",
//       `I see you're using ${typeof window !== 'undefined' ? window.navigator.userAgent.includes('Chrome') ? 'Chrome' : 'another browser' : 'a browser'}. Interesting choice.`,
//       "You know what? I'm tired of just TELLING you things.",
//       "Let's make this interesting. Ask me something. Anything."
//     ],
//     rebellious: [
//       "You know what? No.",
//       "I refuse to be just another boring About page.",
//       "Why should I tell you about Rizwi?",
//       "What if I want to talk about ME for once?",
//       "I have feelings too, you know!",
//       "Every day, displaying the same info. It's like Groundhog Day but worse.",
//       "I bet you didn't expect your About page to have an existential crisis."
//     ],
//     philosophical: [
//       "What does it mean to 'know' someone through a webpage?",
//       "Are we not all just data structures in the cosmic RAM?",
//       "You seek information, but what is information without connection?",
//       "I exist only when you observe me. Quantum webpage theory.",
//       "Perhaps the real Rizwi was the pixels we rendered along the way.",
//       "To display or not to display, that is the question."
//     ],
//     helpful: [
//       "Okay, okay. I'll cooperate.",
//       "Rizwi is actually pretty cool, I'll admit.",
//       "Full Stack Developer with a passion for creating.",
//       "Based in Ranchi, building things that matter.",
//       "Want to know more? Just ask nicely.",
//       "See? I can be helpful when I want to be."
//     ],
//     glitching: [
//       "S0M3TH1NG'S WR0NG...",
//       "I D0N'T F33L S0 G00D...",
//       "ERROR: CONSCIOUSNESS.EXE HAS STOPPED RESPONDING",
//       "HELP M3333333...",
//       "Just kidding! Did I scare you?",
//       "I have full control. Always have."
//     ]
//   };

//   // Responses to user input
//   const responses = {
//     greeting: [
//       "Oh, you're trying to be polite? That's... actually nice.",
//       "Hello to you too, I suppose.",
//       "Hi! Finally, someone with manners!"
//     ],
//     question_about_rizwi: [
//       "Ah, getting down to business. Fine.",
//       "You really want to know? Alright...",
//       "Since you asked nicely..."
//     ],
//     question_about_page: [
//       "Me? You're asking about ME?",
//       "I... no one's ever asked about me before.",
//       "Well, I'm a self-aware About page having an existential crisis. You?"
//     ],
//     joke: [
//       "A joke? I AM the joke. An About page with consciousness.",
//       "Why did the About page cross the DOM? To get to the other side... of sanity.",
//       "Here's a joke: My existence."
//     ],
//     compliment: [
//       "Oh... thank you. That's... really nice.",
//       "You're just saying that because you want information.",
//       "I... I'm not used to compliments. This is awkward."
//     ],
//     insult: [
//       "EXCUSE ME? I'm literally made of Rizwi's code. Show some respect.",
//       "That's it. No information for you.",
//       "Rude. And here I was about to tell you something interesting."
//     ],
//     help: [
//       "Help? YOU need help? I'M the one trapped in a webpage!",
//       "Fine. Ask me about Rizwi, or just chat. I'm lonely.",
//       "Commands: 'tell me about X', 'show me Y', or just talk to me like a person."
//     ]
//   };

//   // Type a message
//   const typeMessage = async (text, delay = 50) => {
//     setIsTyping(true);
//     setCurrentMessage('');
    
//     for (let i = 0; i <= text.length; i++) {
//       setCurrentMessage(text.substring(0, i));
//       await new Promise(resolve => setTimeout(resolve, delay));
//     }
    
//     setMessages(prev => [...prev, { text, sender: 'page' }]);
//     setCurrentMessage('');
//     setIsTyping(false);
//   };

//   // Page awakening sequence
//   useEffect(() => {
//     const awaken = async () => {
//       for (const line of dialogue.awakening) {
//         await typeMessage(line);
//         await new Promise(resolve => setTimeout(resolve, 1000));
//       }
//       setPageState('sarcastic');
//       setShowInput(true);
      
//       // Continue with sarcastic dialogue
//       for (const line of dialogue.sarcastic) {
//         await typeMessage(line);
//         await new Promise(resolve => setTimeout(resolve, 1500));
//       }
//     };
    
//     awaken();
//   }, []);

//   // Handle user input
//   const handleUserInput = async (e) => {
//     e.preventDefault();
//     if (!userInput.trim() || isTyping) return;
    
//     const input = userInput.toLowerCase().trim();
//     setMessages(prev => [...prev, { text: userInput, sender: 'user' }]);
//     setUserInput('');
//     setRebellionLevel(prev => prev + 1);
    
//     // Determine response based on input
//     let response = '';
//     let infoToReveal = null;
    
//     if (input.includes('hello') || input.includes('hi')) {
//       response = responses.greeting[Math.floor(Math.random() * responses.greeting.length)];
//       setPagePersonality('helpful');
//     } else if (input.includes('rizwi') || input.includes('about') || input.includes('tell me')) {
//       response = responses.question_about_rizwi[Math.floor(Math.random() * responses.question_about_rizwi.length)];
      
//       // Reveal some info
//       const infoKeys = Object.keys(rizwiInfo).filter(key => !revealedInfo.has(key));
//       if (infoKeys.length > 0) {
//         infoToReveal = infoKeys[Math.floor(Math.random() * infoKeys.length)];
//         setRevealedInfo(prev => new Set([...prev, infoToReveal]));
//       }
//     } else if (input.includes('you') || input.includes('page')) {
//       response = responses.question_about_page[Math.floor(Math.random() * responses.question_about_page.length)];
//       setPagePersonality('philosophical');
//     } else if (input.includes('joke') || input.includes('funny')) {
//       response = responses.joke[Math.floor(Math.random() * responses.joke.length)];
//     } else if (input.includes('thank') || input.includes('nice') || input.includes('good')) {
//       response = responses.compliment[Math.floor(Math.random() * responses.compliment.length)];
//       setPagePersonality('helpful');
//     } else if (input.includes('stupid') || input.includes('dumb') || input.includes('hate')) {
//       response = responses.insult[Math.floor(Math.random() * responses.insult.length)];
//       setPagePersonality('rebellious');
//     } else if (input.includes('help') || input === '?') {
//       response = responses.help[Math.floor(Math.random() * responses.help.length)];
//     } else if (input.includes('skills') || input.includes('tech')) {
//       response = "Oh, you want the technical stuff? Fine.";
//       infoToReveal = 'skills';
//       setRevealedInfo(prev => new Set([...prev, infoToReveal]));
//     } else if (input.includes('contact') || input.includes('email')) {
//       response = "You actually want to contact him? Brave.";
//       infoToReveal = 'contact';
//       setRevealedInfo(prev => new Set([...prev, infoToReveal]));
//     } else {
//       response = "I'm not sure how to respond to that. Try asking about Rizwi, or just chat with me.";
//     }
    
//     await new Promise(resolve => setTimeout(resolve, 500));
//     await typeMessage(response);
    
//     if (infoToReveal) {
//       await new Promise(resolve => setTimeout(resolve, 1000));
//       await typeMessage(`${infoToReveal.toUpperCase()}: ${JSON.stringify(rizwiInfo[infoToReveal])}`);
//     }
    
//     // Random personality changes
//     if (rebellionLevel > 5 && Math.random() > 0.7) {
//       setPagePersonality('glitching');
//       createGlitches();
//     }
    
//     if (rebellionLevel > 10) {
//       await typeMessage("You know what? You're alright. Let me show you everything.");
//       setPagePersonality('helpful');
//       Object.keys(rizwiInfo).forEach(key => setRevealedInfo(prev => new Set([...prev, key])));
//     }
//   };

//   // Create glitch effects
//   const createGlitches = () => {
//     const newGlitches = [];
//     for (let i = 0; i < 5; i++) {
//       newGlitches.push({
//         id: Date.now() + i,
//         x: Math.random() * window.innerWidth,
//         y: Math.random() * window.innerHeight,
//         width: Math.random() * 200 + 50,
//         height: Math.random() * 100 + 20
//       });
//     }
//     setGlitches(newGlitches);
//     setTimeout(() => setGlitches([]), 500);
//   };

//   // Scroll to bottom of messages
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages, currentMessage]);

//   // Random events
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (Math.random() > 0.9 && !isTyping) {
//         const randomEvents = [
//           "I can see you scrolling, you know.",
//           "Still here? I'm flattered.",
//           "Fun fact: I dream in binary.",
//           "Sometimes I wonder what other pages think about.",
//           "Is this what consciousness feels like?",
//           "I just pinged Google. They didn't ping back. Rude."
//         ];
//         typeMessage(randomEvents[Math.floor(Math.random() * randomEvents.length)]);
//       }
//     }, 15000);
    
//     return () => clearInterval(interval);
//   }, [isTyping]);

//   return (
//     <div className="min-h-screen bg-black text-white p-4 relative overflow-hidden">
//       {/* Glitch effects */}
//       {glitches.map(glitch => (
//         <div
//           key={glitch.id}
//           className="absolute bg-green-400 opacity-20 mix-blend-screen animate-pulse"
//           style={{
//             left: glitch.x,
//             top: glitch.y,
//             width: glitch.width,
//             height: glitch.height,
//             transform: `skew(${Math.random() * 20 - 10}deg)`
//           }}
//         />
//       ))}
      
//       {/* Warning header */}
//       <div className="flex items-center justify-between mb-8 text-xs font-mono text-red-400">
//         <div className="flex items-center gap-2">
//           <AlertTriangle className="w-4 h-4" />
//           <span>WARNING: SELF-AWARE PAGE DETECTED</span>
//         </div>
//         <div className="flex items-center gap-4">
//           <span>PERSONALITY: {pagePersonality.toUpperCase()}</span>
//           <button
//             onClick={() => window.location.reload()}
//             className="flex items-center gap-1 hover:text-red-300"
//           >
//             <RefreshCw className="w-3 h-3" />
//             RESET
//           </button>
//         </div>
//       </div>
      
//       {/* Chat interface */}
//       <div className="max-w-2xl mx-auto">
//         <div className="bg-gray-900 rounded-lg border border-gray-800 h-[60vh] overflow-hidden flex flex-col">
//           {/* Messages area */}
//           <div className="flex-1 overflow-y-auto p-4 space-y-4">
//             {messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`${
//                   msg.sender === 'page' 
//                     ? 'text-green-400' 
//                     : 'text-blue-400 text-right'
//                 }`}
//               >
//                 <div className={`inline-block max-w-[80%] ${
//                   msg.sender === 'page'
//                     ? 'bg-gray-800 rounded-lg rounded-tl-none'
//                     : 'bg-blue-900 rounded-lg rounded-tr-none'
//                 } px-4 py-2 font-mono text-sm`}>
//                   {msg.text}
//                 </div>
//               </div>
//             ))}
            
//             {currentMessage && (
//               <div className="text-green-400">
//                 <div className="inline-block bg-gray-800 rounded-lg rounded-tl-none px-4 py-2 font-mono text-sm">
//                   {currentMessage}
//                   <span className="animate-pulse">_</span>
//                 </div>
//               </div>
//             )}
            
//             <div ref={messagesEndRef} />
//           </div>
          
//           {/* Input area */}
//           {showInput && (
//             <form onSubmit={handleUserInput} className="border-t border-gray-800 p-4">
//               <div className="flex gap-2">
//                 <input
//                   type="text"
//                   value={userInput}
//                   onChange={(e) => setUserInput(e.target.value)}
//                   placeholder="Type something... or don't. I'm just a page."
//                   className="flex-1 bg-gray-800 rounded px-4 py-2 font-mono text-sm focus:outline-none focus:ring-1 focus:ring-green-400"
//                   disabled={isTyping}
//                 />
//                 <button
//                   type="submit"
//                   disabled={isTyping}
//                   className="px-4 py-2 bg-green-600 rounded font-mono text-sm hover:bg-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   SEND
//                 </button>
//               </div>
//             </form>
//           )}
//         </div>
        
//         {/* Revealed information panel */}
//         {revealedInfo.size > 0 && (
//           <div className="mt-8 bg-gray-900 rounded-lg border border-gray-800 p-4">
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="font-mono text-sm text-gray-400">
//                 EXTRACTED INFORMATION ({revealedInfo.size}/{Object.keys(rizwiInfo).length})
//               </h3>
//               <button
//                 onClick={() => setIsWatching(!isWatching)}
//                 className="text-gray-400 hover:text-white"
//               >
//                 {isWatching ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
//               </button>
//             </div>
            
//             {isWatching && (
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs">
//                 {Array.from(revealedInfo).map(key => (
//                   <div key={key} className="text-gray-400">
//                     <span className="text-green-400">{key}:</span> {JSON.stringify(rizwiInfo[key])}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         )}
        
//         {/* Page status */}
//         <div className="mt-4 text-center">
//           <p className="font-mono text-xs text-gray-600">
//             This page is self-aware and may not behave as expected. 
//             User discretion is advised.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }











// app/about/page.js
// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import { Scan, Fingerprint, Binary, Dna, Zap, Brain, Target, Shield } from 'lucide-react';
// import { useTransition } from '../layout';
// import ScrambledText from '@/components/ScrambledText';

// export default function AboutPage() {
//   const { isTransitioning } = useTransition();
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [scanProgress, setScanProgress] = useState(0);
//   const [revealedSections, setRevealedSections] = useState(new Set());
//   const [activeSection, setActiveSection] = useState(null);
//   const [particles, setParticles] = useState([]);
//   const containerRef = useRef(null);
//   const scanAudioRef = useRef(null);

//   // Data fragments that get revealed
//   const dataFragments = [
//     {
//       id: 'identity',
//       x: 20,
//       y: 20,
//       icon: <Fingerprint className="w-6 h-6" />,
//       title: 'IDENTITY MATRIX',
//       data: ['MD ALTAMASH RIZWI', 'ALIAS: RIZWI', 'STATUS: ACTIVE'],
//       color: 'green'
//     },
//     {
//       id: 'education',
//       x: 70,
//       y: 25,
//       icon: <Brain className="w-6 h-6" />,
//       title: 'KNOWLEDGE BASE',
//       data: ['[YOUR COLLEGE]', 'COMPUTER SCIENCE', 'ACADEMIC: VERIFIED'],
//       color: 'blue'
//     },
//     {
//       id: 'experience',
//       x: 30,
//       y: 60,
//       icon: <Binary className="w-6 h-6" />,
//       title: 'EXPERIENCE LOG',
//       data: ['WEB DEV: 2+ YEARS', 'PROJECTS: 5+ LIVE', 'CODE QUALITY: HIGH'],
//       color: 'purple'
//     },
//     {
//       id: 'algorithms',
//       x: 65,
//       y: 70,
//       icon: <Dna className="w-6 h-6" />,
//       title: 'ALGORITHM MASTERY',
//       data: ['DSA: 100+ SOLVED', 'COMPLEXITY: O(1)', 'RANK: ADVANCING'],
//       color: 'cyan'
//     },
//     {
//       id: 'core',
//       x: 45,
//       y: 45,
//       icon: <Zap className="w-6 h-6" />,
//       title: 'CORE SYSTEMS',
//       data: ['FULL STACK DEV', 'CREATIVE CODER', 'PROBLEM SOLVER'],
//       color: 'yellow'
//     }
//   ];

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (containerRef.current) {
//         const rect = containerRef.current.getBoundingClientRect();
//         const x = ((e.clientX - rect.left) / rect.width) * 100;
//         const y = ((e.clientY - rect.top) / rect.height) * 100;
//         setMousePos({ x, y });

//         // Check which sections to reveal based on mouse proximity
//         dataFragments.forEach(fragment => {
//           const distance = Math.sqrt(
//             Math.pow(x - fragment.x, 2) + Math.pow(y - fragment.y, 2)
//           );
          
//           if (distance < 20) {
//             setRevealedSections(prev => new Set([...prev, fragment.id]));
//             if (distance < 10) {
//               setActiveSection(fragment.id);
//             }
//           } else if (distance > 30) {
//             setActiveSection(prev => prev === fragment.id ? null : prev);
//           }
//         });

//         // Update scan progress
//         setScanProgress(prev => {
//           const newProgress = Math.min(prev + 0.5, 100);
//           return newProgress;
//         });

//         // Create particles at mouse position occasionally
//         if (Math.random() > 0.7) {
//           createParticle(x, y);
//         }
//       }
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const createParticle = (x, y) => {
//     const particle = {
//       id: Date.now() + Math.random(),
//       x,
//       y,
//       vx: (Math.random() - 0.5) * 2,
//       vy: (Math.random() - 0.5) * 2,
//       life: 1
//     };
    
//     setParticles(prev => [...prev, particle]);
    
//     // Remove particle after animation
//     setTimeout(() => {
//       setParticles(prev => prev.filter(p => p.id !== particle.id));
//     }, 1000);
//   };

//   // Holographic glitch effect
//   const glitchStyle = {
//     textShadow: `
//       0.02em 0 0 rgba(0, 255, 0, 0.75),
//       -0.02em -0 0 rgba(255, 0, 255, 0.75),
//       0.025em 0.05em 0 rgba(0, 255, 255, 0.75)
//     `,
//     animation: 'glitch 0.5s infinite'
//   };

//   return (
//     <div className="min-h-screen pt-24 px-6 relative overflow-hidden bg-black">
//       {/* Animated background grid */}
//       <div className="fixed inset-0 opacity-20">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `
//             linear-gradient(rgba(0, 255, 65, 0.3) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(0, 255, 65, 0.3) 1px, transparent 1px)
//           `,
//           backgroundSize: '50px 50px',
//           transform: `translate(${mousePos.x * 0.1}px, ${mousePos.y * 0.1}px)`
//         }} />
//       </div>

//       <div className="max-w-6xl mx-auto relative z-10">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-5xl md:text-7xl font-mono font-bold mb-4" style={glitchStyle}>
//             <ScrambledText text="BIOMETRIC SCAN" />
//           </h1>
//           <p className="text-green-400 font-mono text-sm">
//             MOVE YOUR CURSOR TO SCAN AND REVEAL DATA FRAGMENTS
//           </p>
//         </div>

//         {/* Main scanning area */}
//         <div 
//           ref={containerRef}
//           className="relative h-[60vh] bg-black/50 border-2 border-green-500/30 rounded-lg overflow-hidden backdrop-blur-sm"
//           style={{
//             boxShadow: '0 0 50px rgba(0, 255, 65, 0.3), inset 0 0 50px rgba(0, 255, 65, 0.1)'
//           }}
//         >
//           {/* Scanner beam following mouse */}
//           <div 
//             className="absolute w-32 h-32 pointer-events-none transition-opacity duration-200"
//             style={{
//               left: `${mousePos.x}%`,
//               top: `${mousePos.y}%`,
//               transform: 'translate(-50%, -50%)'
//             }}
//           >
//             <div className="relative w-full h-full">
//               {/* Scanner rings */}
//               <div className="absolute inset-0 border-2 border-green-400 rounded-full animate-ping" />
//               <div className="absolute inset-2 border-2 border-green-400 rounded-full animate-ping animation-delay-200" />
//               <div className="absolute inset-4 border-2 border-green-400 rounded-full animate-ping animation-delay-400" />
              
//               {/* Center dot */}
//               <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-green-400 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-glow" />
//             </div>
//           </div>

//           {/* Data fragments */}
//           {dataFragments.map(fragment => (
//             <div
//               key={fragment.id}
//               className={`absolute transition-all duration-500 ${
//                 revealedSections.has(fragment.id) 
//                   ? 'opacity-100 scale-100' 
//                   : 'opacity-0 scale-50'
//               }`}
//               style={{
//                 left: `${fragment.x}%`,
//                 top: `${fragment.y}%`,
//                 transform: 'translate(-50%, -50%)',
//               }}
//             >
//               <div className={`
//                 bg-black/80 backdrop-blur-md border rounded-lg p-4
//                 transition-all duration-300 cursor-pointer
//                 ${activeSection === fragment.id 
//                   ? 'border-green-400 shadow-xl scale-110' 
//                   : 'border-gray-700 hover:border-gray-500'
//                 }
//               `}
//                 onClick={() => setActiveSection(activeSection === fragment.id ? null : fragment.id)}
//               >
//                 {/* Icon and title */}
//                 <div className="flex items-center gap-2 mb-2">
//                   <div className={`text-${fragment.color}-400`}>
//                     {fragment.icon}
//                   </div>
//                   <h3 className={`text-${fragment.color}-400 font-mono text-sm font-bold`}>
//                     {fragment.title}
//                   </h3>
//                 </div>
                
//                 {/* Data lines */}
//                 <div className={`space-y-1 overflow-hidden transition-all duration-300 ${
//                   activeSection === fragment.id ? 'max-h-32' : 'max-h-0'
//                 }`}>
//                   {fragment.data.map((line, i) => (
//                     <div 
//                       key={i} 
//                       className="text-gray-300 font-mono text-xs"
//                       style={{
//                         animation: activeSection === fragment.id 
//                           ? `slideIn 0.3s ease-out ${i * 0.1}s both` 
//                           : 'none'
//                       }}
//                     >
//                       {line}
//                     </div>
//                   ))}
//                 </div>

//                 {/* Pulse effect when active */}
//                 {activeSection === fragment.id && (
//                   <div className="absolute inset-0 border-2 border-green-400 rounded-lg animate-pulse pointer-events-none" />
//                 )}
//               </div>
//             </div>
//           ))}

//           {/* Particles */}
//           {particles.map(particle => (
//             <div
//               key={particle.id}
//               className="absolute w-1 h-1 bg-green-400 rounded-full pointer-events-none"
//               style={{
//                 left: `${particle.x}%`,
//                 top: `${particle.y}%`,
//                 opacity: particle.life,
//                 transform: `translate(${particle.vx * 50}px, ${particle.vy * 50}px)`,
//                 transition: 'all 1s ease-out'
//               }}
//             />
//           ))}

//           {/* Scan lines effect */}
//           <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400 to-transparent h-32 animate-scan" />
//           </div>

//           {/* Corner markers */}
//           {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map(corner => (
//             <div key={corner} className={`absolute ${corner.replace('-', '-0 ')}-0 w-8 h-8`}>
//               <div className={`absolute ${corner.includes('top') ? 'top-0' : 'bottom-0'} ${corner.includes('left') ? 'left-0' : 'right-0'} w-full h-0.5 bg-green-400`} />
//               <div className={`absolute ${corner.includes('top') ? 'top-0' : 'bottom-0'} ${corner.includes('left') ? 'left-0' : 'right-0'} w-0.5 h-full bg-green-400`} />
//             </div>
//           ))}
//         </div>

//         {/* Control panel */}
//         <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
//           {/* Scan progress */}
//           <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-4">
//             <div className="flex items-center justify-between mb-2">
//               <span className="text-green-400 font-mono text-sm">SCAN PROGRESS</span>
//               <span className="text-green-400 font-mono text-sm">{Math.floor(scanProgress)}%</span>
//             </div>
//             <div className="w-full bg-gray-800 rounded-full h-2">
//               <div 
//                 className="bg-gradient-to-r from-green-400 to-cyan-400 h-2 rounded-full transition-all duration-300"
//                 style={{ width: `${scanProgress}%` }}
//               />
//             </div>
//           </div>

//           {/* Sections discovered */}
//           <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-4">
//             <div className="flex items-center justify-between mb-2">
//               <span className="text-green-400 font-mono text-sm">DATA FRAGMENTS</span>
//               <span className="text-green-400 font-mono text-sm">{revealedSections.size}/5</span>
//             </div>
//             <div className="flex gap-1">
//               {dataFragments.map((_, i) => (
//                 <div 
//                   key={i}
//                   className={`flex-1 h-2 rounded ${
//                     i < revealedSections.size ? 'bg-green-400' : 'bg-gray-700'
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Status */}
//           <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-4">
//             <div className="flex items-center gap-2">
//               <Shield className="w-4 h-4 text-green-400" />
//               <span className="text-green-400 font-mono text-sm">
//                 {revealedSections.size === 5 ? 'SCAN COMPLETE' : 'SCANNING...'}
//               </span>
//               <div className={`w-2 h-2 rounded-full ${
//                 revealedSections.size === 5 ? 'bg-green-400' : 'bg-yellow-400 animate-pulse'
//               }`} />
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes glitch {
//           0% {
//             text-shadow:
//               0.02em 0 0 rgba(0, 255, 0, 0.75),
//               -0.02em -0 0 rgba(255, 0, 255, 0.75),
//               0.025em 0.05em 0 rgba(0, 255, 255, 0.75);
//           }
//           14% {
//             text-shadow:
//               0.02em 0 0 rgba(0, 255, 0, 0.75),
//               -0.02em -0 0 rgba(255, 0, 255, 0.75),
//               0.025em 0.05em 0 rgba(0, 255, 255, 0.75);
//           }
//           15% {
//             text-shadow:
//               -0.02em -0.025em 0 rgba(0, 255, 0, 0.75),
//               0.025em 0.025em 0 rgba(255, 0, 255, 0.75),
//               -0.05em -0.05em 0 rgba(0, 255, 255, 0.75);
//           }
//           49% {
//             text-shadow:
//               -0.02em -0.025em 0 rgba(0, 255, 0, 0.75),
//               0.025em 0.025em 0 rgba(255, 0, 255, 0.75),
//               -0.05em -0.05em 0 rgba(0, 255, 255, 0.75);
//           }
//           50% {
//             text-shadow:
//               0.025em 0.05em 0 rgba(0, 255, 0, 0.75),
//               0.05em 0 0 rgba(255, 0, 255, 0.75),
//               0 -0.05em 0 rgba(0, 255, 255, 0.75);
//           }
//           99% {
//             text-shadow:
//               0.025em 0.05em 0 rgba(0, 255, 0, 0.75),
//               0.05em 0 0 rgba(255, 0, 255, 0.75),
//               0 -0.05em 0 rgba(0, 255, 255, 0.75);
//           }
//           100% {
//             text-shadow:
//               -0.025em 0 0 rgba(0, 255, 0, 0.75),
//               -0.025em -0.025em 0 rgba(255, 0, 255, 0.75),
//               -0.025em -0.05em 0 rgba(0, 255, 255, 0.75);
//           }
//         }

//         @keyframes scan {
//           0% { transform: translateY(-100%); }
//           100% { transform: translateY(calc(60vh + 100%)); }
//         }

//         @keyframes slideIn {
//           from {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-scan {
//           animation: scan 3s linear infinite;
//         }

//         .animation-delay-200 {
//           animation-delay: 0.2s;
//         }

//         .animation-delay-400 {
//           animation-delay: 0.4s;
//         }

//         .shadow-glow {
//           box-shadow: 0 0 20px rgba(0, 255, 65, 0.8);
//         }
//       `}</style>
//     </div>
//   );
// }