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
















// BEST + AI ChatBot
// app/about/page.js
'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Terminal, User, Calendar, Target, Coffee, Code2, Zap, ChevronRight, Activity, Shield, Database, Globe, Brain, Cpu, Gamepad2, Music, BookOpen, Heart, Github, GitBranch, CalendarClock, Moon, MessageSquare } from 'lucide-react';
import { useTransition } from '../layout';
import Link from 'next/link';
import ScrambledText from '@/components/ScrambledText';
import Chatbot from '@/components/Chatbot';

// Matrix rain effect component
const MatrixRain = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");
    
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    
    const drops = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }
    
    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#00ff41';
      ctx.font = fontSize + 'px monospace';
      
      for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };
    
    const interval = setInterval(draw, 35);
    
    return () => clearInterval(interval);
  }, []);
  
  return <canvas ref={canvasRef} className="fixed inset-0 z-0 opacity-10" />;
};

export default function AboutPage() {
  const { isTransitioning } = useTransition();
  const [activeTab, setActiveTab] = useState('bio');
  const [terminalText, setTerminalText] = useState('');
  const [showBio, setShowBio] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [selectedYear, setSelectedYear] = useState('2024');
  const terminalRef = useRef(null);

  // Profile data
  const profile = {
    name: "Md Altamash Rizwi",
    alias: "Rizwi",
    title: "Full Stack MERN Developer",
    location: "Patna, Bihar, IN",
    status: "ACTIVE",
    clearance: "LEVEL 5",
    uptime: "21 years",
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
    { name: 'Web Dev', level: 97, color: '#ff41ff' },
    { name: 'App Dev', level: 90, color: '#00ff41' },
    { name: 'Blockchain', level: 65, color: '#ffaa41' }
  ];

  const hobbies = [
    { name: 'Gaming', icon: <Gamepad2 className="w-5 h-5" />, description: 'Stories, FPS & Strategy games', favorite: 'RDR 2, Chess' },
    { name: 'Music', icon: <Music className="w-5 h-5" />, description: 'Lo-fi & Electronic', favorite: 'Coding with beats' },
    { name: 'Reading', icon: <BookOpen className="w-5 h-5" />, description: 'Sci-fi & Tech blogs', favorite: 'The Pragmatic Programmer' },
    { name: 'Fitness', icon: <Heart className="w-5 h-5" />, description: 'Calisthenics & Running', favorite: 'Morning runs' }
  ];

  const stats = [
    { label: 'Commits', value: '300+', icon: <GitBranch className="w-4 h-4" />, change: '' },
    { label: 'Contributions', value: '100+', icon: <Github className="w-4 h-4" />, change: '' },
    { label: 'LeetCode', value: '150+', icon: <Zap className="w-4 h-4" />, change: '' },
    { label: 'Hours Coded', value: '3,000+', icon: <CalendarClock className="w-4 h-4" />, change: '' },
    { label: 'Lines of Code', value: '20,000+', icon: <Code2 className="w-4 h-4" />, change: '' },
    { label: 'Coffee Consumed', value: '92,786+', icon: <Coffee className="w-4 h-4" />, change: '' }, // ∞
    { label: 'Dark Mode', value: 'Always On', icon: <Moon className="w-4 h-4" />, change: '' },
  ];

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
      }, 50);
      return () => clearInterval(interval);
    }
  }, [activeTab, showBio, bio]);

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

  const tabs = [
    { id: 'bio', label: 'README.MD', icon: <Terminal className="w-4 h-4" /> },
    { id: 'profile', label: 'PROFILE.SYS', icon: <User className="w-4 h-4" /> },
    { id: 'timeline', label: 'EXPERIENCE.LOG', icon: <Calendar className="w-4 h-4" /> },
    { id: 'interests', label: 'INTERESTS.ENV', icon: <Target className="w-4 h-4" /> },
    { id: 'hobbies', label: 'HOBBIES.SH', icon: <Heart className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen pt-22 sm:pt-24 px-4 sm:px-6 relative">

      <MatrixRain />
      
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-green-400 mb-2">
            <span className="text-gray-400">&gt;</span> <ScrambledText text="ABOUT.EXE" />
          </h2>
          <div className="flex items-center gap-4 text-xs sm:text-sm font-mono text-gray-400">
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              STATUS: <ScrambledText text="ONLINE" />
            </span>
            <span>|</span>
            <span>ACCESS <ScrambledText text="GRANTED" /></span>
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
                    {['Full Stack Development', '3D Web Experience', 'UI/UX Design', 'DSA'].map(skill => (
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
                    <span className="text-xs text-green-400 font-mono">terminal.nexus</span>
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

            {activeTab === 'hobbies' && (
              <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-6 animate-fade-in">
                <h3 className="text-xl text-green-400 font-mono mb-6 flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  HOBBIES & INTERESTS
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {hobbies.map((hobby, index) => (
                    <div key={hobby.name} className="p-4 bg-green-950/10 rounded-lg border border-green-500/20 hover:border-green-500/40 transition-all">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
                          {hobby.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-green-400 font-mono text-sm font-semibold mb-1">{hobby.name}</h4>
                          <p className="text-gray-400 font-mono text-xs mb-2">{hobby.description}</p>
                          <p className="text-gray-500 font-mono text-xs">
                            <span className="text-green-400">→</span> {hobby.favorite}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-green-950/20 rounded-lg border border-green-500/20">
                  <p className="text-gray-400 font-mono text-xs text-center">
                    "All work and no play makes a developer's code gray"
                  </p>
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
            {/* <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-4">
              <h3 className="text-green-400 font-mono text-sm mb-4 flex items-center gap-2">
                <Brain className="w-4 h-4" />
                RANDOM ACCESS MEMORY
              </h3>
              <div className="space-y-2 font-mono text-xs">
                <p className="text-gray-400">• Favorite IDE: <span className="text-green-400">VS Code</span></p>
                <p className="text-gray-400">• Dark Mode: <span className="text-green-400">Always ON</span></p>
                <p className="text-gray-400">• Tabs vs Spaces: <span className="text-green-400">Spaces</span></p>
                <p className="text-gray-400">• Coffee Type: <span className="text-green-400">Mocha</span></p>
                <p className="text-gray-400">• Debug Method: <span className="text-green-400">console.log()</span></p>
              </div>
            </div> */}

            {/* Let's Connect */}
            <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-4">
              <h3 className="text-green-400 font-mono text-sm mb-4 flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                WANNA COLLAB?
              </h3>
              
              <div className="p-4 bg-green-950/20 rounded-lg border border-green-500/20">
                <p className="text-gray-400 font-mono text-xs text-center mb-3">
                  <span className="text-green-400"></span> Open for Collaborations
                </p>
                <p className="text-gray-500 font-mono text-xs text-center mb-4">
                  Let's build something amazing together!
                </p>
                
                <Link href="/contact" className="block w-full">
                  <button className="w-full px-4 py-2 bg-green-500/20 border border-green-500/40 rounded-lg font-mono text-sm text-green-400 hover:bg-green-500/30 hover:border-green-500/60 transition-all duration-300 flex items-center justify-center gap-2 group">
                    CONNECT.NOW
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Chatbot />

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