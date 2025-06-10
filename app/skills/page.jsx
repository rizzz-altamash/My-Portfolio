// // app/skills/page.js
// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import { Layers, Database, Shield, Cpu } from 'lucide-react';
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

// export default function SkillsPage() {
//   const { isTransitioning } = useTransition();
//   const titleText = useTextScramble("SKILLS.CONFIG", 1500);
//   const chars = '!<>-_\\/[]{}—=+*^?#________';
//   const skills = {
//     "Frontend Systems": {
//       items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js"],
//       icon: <Layers className="w-5 h-5" />
//     },
//     "Backend Architecture": {
//       items: ["Node.js", "Express", "Python", "Django", "PostgreSQL"],
//       icon: <Database className="w-5 h-5" />
//     },
//     "Security Protocols": {
//       items: ["Penetration Testing", "Cryptography", "OWASP", "Burp Suite", "Metasploit"],
//       icon: <Shield className="w-5 h-5" />
//     },
//     "DevOps Infrastructure": {
//       items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Linux"],
//       icon: <Cpu className="w-5 h-5" />
//     }
//   };

//   return (
//     <div className="min-h-screen pt-32 px-6 relative">
//       <div className="max-w-6xl mx-auto relative z-10">
//         <h2 className="text-5xl font-mono font-bold text-green-400 mb-12">
//           <span className="text-gray-400">&gt;</span> {titleText}
//         </h2>
        
//         <div className="grid md:grid-cols-2 gap-6">
//           {Object.entries(skills).map(([category, data], index) => (
//             <div
//               key={category}
//               className="bg-black/40 backdrop-blur-sm border border-green-500/20 rounded-lg p-6 hover:border-green-500/40 transition-all duration-300 group animate-fade-in"
//               style={{animationDelay: `${index * 150}ms`}}
//             >
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center border border-green-500/30 group-hover:bg-green-500/20 transition-colors">
//                   {React.cloneElement(data.icon, { className: "w-5 h-5 text-green-400" })}
//                 </div>
//                 <h3 className="text-2xl text-green-400 font-mono">
//                   {isTransitioning ? category.split('').map(() => chars[Math.floor(Math.random() * chars.length)]).join('') : category}
//                 </h3>
//               </div>
              
//               <div className="space-y-3">
//                 {data.items.map((skill, i) => {
//                   const percentage = Math.floor(Math.random() * 20) + 80;
//                   return (
//                     <div key={skill} className="relative">
//                       <div className="flex justify-between text-gray-300 font-mono text-sm mb-2">
//                         <span>{isTransitioning ? skill.split('').map(() => chars[Math.floor(Math.random() * chars.length)]).join('') : skill}</span>
//                         <span className="text-green-400">{isTransitioning ? '██%' : `${percentage}%`}</span>
//                       </div>
//                       <div className="w-full bg-green-950/30 rounded-full h-2 overflow-hidden">
//                         <div
//                           className="bg-gradient-to-r from-green-600 to-green-400 h-2 rounded-full skill-bar relative"
//                           style={{width: `${percentage}%`}}
//                         >
//                           <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-12 bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-6 overflow-hidden">
//           <h3 className="text-xl font-mono text-green-400 mb-4">SKILL MATRIX ANALYSIS</h3>
//           <div className="grid grid-cols-8 gap-1">
//             {[...Array(64)].map((_, i) => (
//               <div
//                 key={i}
//                 className="aspect-square bg-green-500/10 rounded animate-pulse"
//                 style={{
//                   animationDelay: `${i * 50}ms`,
//                   opacity: Math.random() > 0.3 ? 1 : 0.3
//                 }}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



















// // app/skills/page.js
// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import { Terminal, Code, Database, Shield, Cpu, Zap, GitBranch, Globe, Lock, Server, Cloud, Layers } from 'lucide-react';
// import { useTransition } from '../layout';
// import ScrambledText from '@/components/ScrambledText';

// // Hexagon Component
// const Hexagon = ({ skill, level, icon, delay, isActive, onClick }) => {
//   const [isHovered, setIsHovered] = useState(false);
  
//   return (
//     <div
//       className={`hexagon-wrapper animate-fade-in cursor-pointer ${isActive ? 'active' : ''}`}
//       style={{ animationDelay: `${delay}ms` }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       onClick={onClick}
//     >
//       <div className={`hexagon ${isHovered ? 'hover' : ''} ${isActive ? 'active' : ''}`}>
//         <div className="hexagon-inner">
//           <div className="hexagon-content">
//             <div className="icon-wrapper">
//               {icon}
//             </div>
//             <div className="skill-name">{skill}</div>
//             <div className="skill-level">LVL {level}</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Terminal Output Component
// const TerminalOutput = ({ selectedSkill, skills }) => {
//   const [output, setOutput] = useState([]);
//   const [currentLine, setCurrentLine] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
  
//   useEffect(() => {
//     if (!selectedSkill) {
//       setOutput(['> Select a skill node to analyze...']);
//       return;
//     }
    
//     const skillData = skills[selectedSkill];
//     if (!skillData) return;
    
//     setIsTyping(true);
//     const lines = [
//       `> Analyzing ${selectedSkill}...`,
//       `> Skill Level: ${skillData.level}/10`,
//       `> Experience: ${skillData.experience}`,
//       `> Status: ${skillData.status}`,
//       `> Related Tools: ${skillData.tools.join(', ')}`,
//       `> Last Updated: ${skillData.lastUpdated}`,
//       `> Proficiency: ${skillData.proficiency}%`,
//       '> Analysis complete.'
//     ];
    
//     setOutput([]);
//     let lineIndex = 0;
    
//     const typeNextLine = () => {
//       if (lineIndex < lines.length) {
//         const line = lines[lineIndex];
//         let charIndex = 0;
        
//         const typeChar = () => {
//           if (charIndex <= line.length) {
//             setCurrentLine(line.substring(0, charIndex));
//             charIndex++;
//             setTimeout(typeChar, 20);
//           } else {
//             setOutput(prev => [...prev, line]);
//             setCurrentLine('');
//             lineIndex++;
//             setTimeout(typeNextLine, 100);
//           }
//         };
        
//         typeChar();
//       } else {
//         setIsTyping(false);
//       }
//     };
    
//     typeNextLine();
//   }, [selectedSkill, skills]);
  
//   return (
//     <div className="terminal-output">
//       {output.map((line, i) => (
//         <div key={i} className="terminal-line">{line}</div>
//       ))}
//       {currentLine && <div className="terminal-line">{currentLine}<span className="cursor">_</span></div>}
//     </div>
//   );
// };

// export default function SkillsPage() {
//   const { isTransitioning } = useTransition();
//   const [selectedSkill, setSelectedSkill] = useState(null);
//   const [commandInput, setCommandInput] = useState('');
//   const [matrixRain, setMatrixRain] = useState([]);
  
//   const skills = {
//     "React": {
//       level: 9,
//       icon: <Code className="w-6 h-6" />,
//       category: "frontend",
//       experience: "4+ years",
//       status: "EXPERT",
//       tools: ["Next.js", "Redux", "React Query"],
//       lastUpdated: "2024.12.15",
//       proficiency: 90
//     },
//     "Node.js": {
//       level: 8,
//       icon: <Server className="w-6 h-6" />,
//       category: "backend",
//       experience: "3+ years",
//       status: "ADVANCED",
//       tools: ["Express", "NestJS", "Socket.io"],
//       lastUpdated: "2024.12.10",
//       proficiency: 85
//     },
//     "TypeScript": {
//       level: 8,
//       icon: <Code className="w-6 h-6" />,
//       category: "language",
//       experience: "3+ years",
//       status: "ADVANCED",
//       tools: ["TSX", "Type Guards", "Generics"],
//       lastUpdated: "2024.12.20",
//       proficiency: 85
//     },
//     "Python": {
//       level: 7,
//       icon: <Terminal className="w-6 h-6" />,
//       category: "language",
//       experience: "3+ years",
//       status: "PROFICIENT",
//       tools: ["Django", "FastAPI", "NumPy"],
//       lastUpdated: "2024.11.30",
//       proficiency: 75
//     },
//     "PostgreSQL": {
//       level: 7,
//       icon: <Database className="w-6 h-6" />,
//       category: "database",
//       experience: "3+ years",
//       status: "PROFICIENT",
//       tools: ["Prisma", "TypeORM", "Raw SQL"],
//       lastUpdated: "2024.12.05",
//       proficiency: 75
//     },
//     "Security": {
//       level: 8,
//       icon: <Shield className="w-6 h-6" />,
//       category: "security",
//       experience: "4+ years",
//       status: "ADVANCED",
//       tools: ["OWASP", "Burp Suite", "Metasploit"],
//       lastUpdated: "2024.12.18",
//       proficiency: 80
//     },
//     "Docker": {
//       level: 7,
//       icon: <Layers className="w-6 h-6" />,
//       category: "devops",
//       experience: "2+ years",
//       status: "PROFICIENT",
//       tools: ["Kubernetes", "Docker Compose", "Swarm"],
//       lastUpdated: "2024.11.25",
//       proficiency: 70
//     },
//     "AWS": {
//       level: 6,
//       icon: <Cloud className="w-6 h-6" />,
//       category: "cloud",
//       experience: "2+ years",
//       status: "INTERMEDIATE",
//       tools: ["EC2", "S3", "Lambda", "RDS"],
//       lastUpdated: "2024.10.15",
//       proficiency: 65
//     },
//     "Git": {
//       level: 9,
//       icon: <GitBranch className="w-6 h-6" />,
//       category: "tools",
//       experience: "5+ years",
//       status: "EXPERT",
//       tools: ["GitHub", "GitLab", "CI/CD"],
//       lastUpdated: "2024.12.22",
//       proficiency: 95
//     },
//     "Linux": {
//       level: 8,
//       icon: <Terminal className="w-6 h-6" />,
//       category: "system",
//       experience: "4+ years",
//       status: "ADVANCED",
//       tools: ["Bash", "Ubuntu", "Arch", "Shell"],
//       lastUpdated: "2024.12.01",
//       proficiency: 85
//     },
//     "Three.js": {
//       level: 6,
//       icon: <Globe className="w-6 h-6" />,
//       category: "frontend",
//       experience: "1+ years",
//       status: "INTERMEDIATE",
//       tools: ["WebGL", "React Three Fiber", "GLSL"],
//       lastUpdated: "2024.09.20",
//       proficiency: 60
//     },
//     "Cryptography": {
//       level: 7,
//       icon: <Lock className="w-6 h-6" />,
//       category: "security",
//       experience: "3+ years",
//       status: "PROFICIENT",
//       tools: ["OpenSSL", "bcrypt", "JWT", "OAuth"],
//       lastUpdated: "2024.11.10",
//       proficiency: 75
//     }
//   };
  
//   // Matrix rain effect
//   useEffect(() => {
//     const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789";
//     const columns = 20;
//     const rain = [];
    
//     for (let i = 0; i < columns; i++) {
//       rain.push({
//         x: i * 50,
//         y: Math.random() * -100,
//         speed: Math.random() * 2 + 1,
//         chars: Array.from({ length: 15 }, () => chars[Math.floor(Math.random() * chars.length)])
//       });
//     }
    
//     setMatrixRain(rain);
//   }, []);
  
//   const handleCommand = (e) => {
//     if (e.key === 'Enter' && commandInput.trim()) {
//       const cmd = commandInput.toLowerCase().trim();
//       if (cmd === 'list all') {
//         // Show all skills
//       } else if (cmd.startsWith('analyze ')) {
//         const skillName = cmd.replace('analyze ', '');
//         const matchedSkill = Object.keys(skills).find(s => s.toLowerCase() === skillName);
//         if (matchedSkill) {
//           setSelectedSkill(matchedSkill);
//         }
//       } else if (cmd === 'clear') {
//         setSelectedSkill(null);
//       }
//       setCommandInput('');
//     }
//   };
  
//   const hexagonPositions = [
//     { top: '10%', left: '20%' },
//     { top: '5%', left: '40%' },
//     { top: '10%', left: '60%' },
//     { top: '25%', left: '10%' },
//     { top: '25%', left: '30%' },
//     { top: '25%', left: '50%' },
//     { top: '25%', left: '70%' },
//     { top: '40%', left: '20%' },
//     { top: '40%', left: '40%' },
//     { top: '40%', left: '60%' },
//     { top: '55%', left: '30%' },
//     { top: '55%', left: '50%' },
//   ];

//   return (
//     <div className="min-h-screen pt-32 px-6 relative overflow-hidden">
//       {/* Matrix Rain Background */}
//       <div className="matrix-rain">
//         {matrixRain.map((column, i) => (
//           <div
//             key={i}
//             className="matrix-column"
//             style={{
//               left: `${column.x}px`,
//               animationDuration: `${10 / column.speed}s`
//             }}
//           >
//             {column.chars.map((char, j) => (
//               <span
//                 key={j}
//                 style={{
//                   opacity: 1 - (j / column.chars.length),
//                   color: j === 0 ? '#00ff41' : '#00ff4140'
//                 }}
//               >
//                 {char}
//               </span>
//             ))}
//           </div>
//         ))}
//       </div>
      
//       <div className="max-w-7xl mx-auto relative z-10">
//         <h2 className="text-5xl font-mono font-bold text-green-400 mb-4">
//           <span className="text-gray-400">&gt;</span> <ScrambledText text="SKILL_MATRIX.EXE" />
//         </h2>
//         <p className="text-gray-400 font-mono mb-8">
//           <ScrambledText text="Click nodes to analyze skill data | Use terminal for advanced queries" />
//         </p>
        
//         <div className="grid lg:grid-cols-2 gap-8">
//           {/* Hexagonal Skill Grid */}
//           <div className="relative h-[600px] skill-grid">
//             {Object.entries(skills).map(([skillName, skillData], index) => (
//               <div
//                 key={skillName}
//                 className="absolute"
//                 style={hexagonPositions[index]}
//               >
//                 <Hexagon
//                   skill={skillName}
//                   level={skillData.level}
//                   icon={skillData.icon}
//                   delay={index * 100}
//                   isActive={selectedSkill === skillName}
//                   onClick={() => setSelectedSkill(skillName)}
//                 />
//               </div>
//             ))}
//           </div>
          
//           {/* Terminal Interface */}
//           <div className="terminal-container">
//             <div className="terminal-header">
//               <div className="terminal-buttons">
//                 <div className="terminal-button red"></div>
//                 <div className="terminal-button yellow"></div>
//                 <div className="terminal-button green"></div>
//               </div>
//               <span className="terminal-title">skill_analyzer.sh</span>
//             </div>
//             <div className="terminal-body">
//               <TerminalOutput selectedSkill={selectedSkill} skills={skills} />
//               <div className="terminal-input-line">
//                 <span className="prompt">nexus@skills:~$</span>
//                 <input
//                   type="text"
//                   value={commandInput}
//                   onChange={(e) => setCommandInput(e.target.value)}
//                   onKeyDown={handleCommand}
//                   className="terminal-input"
//                   placeholder="list all | analyze [skill] | clear"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Skill Categories Legend */}
//         <div className="mt-12 flex flex-wrap gap-4 justify-center">
//           {['frontend', 'backend', 'language', 'database', 'security', 'devops', 'cloud', 'tools', 'system'].map(category => (
//             <div key={category} className="category-badge">
//               <span className="category-dot" style={{ backgroundColor: 
//                 category === 'frontend' ? '#00ff41' :
//                 category === 'backend' ? '#00ffaa' :
//                 category === 'security' ? '#ff4141' :
//                 category === 'database' ? '#41aaff' :
//                 category === 'devops' ? '#ffaa41' :
//                 '#aaaaaa'
//               }}></span>
//               <span className="category-name">{category.toUpperCase()}</span>
//             </div>
//           ))}
//         </div>
//       </div>
      
//       <style jsx>{`
//         .matrix-rain {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           overflow: hidden;
//           opacity: 0.1;
//           z-index: 1;
//         }
        
//         .matrix-column {
//           position: absolute;
//           font-family: monospace;
//           font-size: 20px;
//           animation: matrix-fall linear infinite;
//         }
        
//         @keyframes matrix-fall {
//           0% { transform: translateY(-100%); }
//           100% { transform: translateY(100vh); }
//         }
        
//         .hexagon-wrapper {
//           width: 100px;
//           height: 110px;
//           position: relative;
//           transition: transform 0.3s ease;
//         }
        
//         .hexagon-wrapper:hover {
//           transform: scale(1.1);
//           z-index: 10;
//         }
        
//         .hexagon {
//           width: 100px;
//           height: 57.74px;
//           background: rgba(0, 255, 65, 0.1);
//           position: relative;
//           border: 2px solid rgba(0, 255, 65, 0.3);
//           margin: 28.87px 0;
//           transition: all 0.3s ease;
//         }
        
//         .hexagon:before,
//         .hexagon:after {
//           content: "";
//           position: absolute;
//           width: 0;
//           border-left: 50px solid transparent;
//           border-right: 50px solid transparent;
//           transition: all 0.3s ease;
//         }
        
//         .hexagon:before {
//           bottom: 100%;
//           border-bottom: 28.87px solid rgba(0, 255, 65, 0.1);
//           border-bottom-color: inherit;
//         }
        
//         .hexagon:after {
//           top: 100%;
//           border-top: 28.87px solid rgba(0, 255, 65, 0.1);
//           border-top-color: inherit;
//         }
        
//         .hexagon.hover {
//           background: rgba(0, 255, 65, 0.2);
//           border-color: rgba(0, 255, 65, 0.6);
//           box-shadow: 0 0 30px rgba(0, 255, 65, 0.5);
//         }
        
//         .hexagon.active {
//           background: rgba(0, 255, 65, 0.3);
//           border-color: rgba(0, 255, 65, 0.8);
//           box-shadow: 0 0 40px rgba(0, 255, 65, 0.7);
//         }
        
//         .hexagon-inner {
//           width: 100%;
//           height: 100%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }
        
//         .hexagon-content {
//           text-align: center;
//           color: #00ff41;
//           font-family: monospace;
//         }
        
//         .icon-wrapper {
//           margin-bottom: 4px;
//         }
        
//         .skill-name {
//           font-size: 12px;
//           font-weight: bold;
//         }
        
//         .skill-level {
//           font-size: 10px;
//           opacity: 0.8;
//         }
        
//         .terminal-container {
//           background: rgba(0, 0, 0, 0.8);
//           border: 1px solid rgba(0, 255, 65, 0.3);
//           border-radius: 8px;
//           overflow: hidden;
//           height: 600px;
//           display: flex;
//           flex-direction: column;
//         }
        
//         .terminal-header {
//           background: rgba(0, 255, 65, 0.1);
//           padding: 8px 12px;
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           border-bottom: 1px solid rgba(0, 255, 65, 0.3);
//         }
        
//         .terminal-buttons {
//           display: flex;
//           gap: 6px;
//         }
        
//         .terminal-button {
//           width: 12px;
//           height: 12px;
//           border-radius: 50%;
//         }
        
//         .terminal-button.red { background: #ff5f56; }
//         .terminal-button.yellow { background: #ffbd2e; }
//         .terminal-button.green { background: #27c93f; }
        
//         .terminal-title {
//           font-family: monospace;
//           font-size: 12px;
//           color: rgba(0, 255, 65, 0.8);
//         }
        
//         .terminal-body {
//           flex: 1;
//           padding: 16px;
//           overflow-y: auto;
//           font-family: monospace;
//         }
        
//         .terminal-output {
//           margin-bottom: 16px;
//         }
        
//         .terminal-line {
//           color: #00ff41;
//           margin-bottom: 4px;
//           font-size: 14px;
//         }
        
//         .cursor {
//           animation: blink 1s infinite;
//         }
        
//         @keyframes blink {
//           0%, 50% { opacity: 1; }
//           51%, 100% { opacity: 0; }
//         }
        
//         .terminal-input-line {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           margin-top: 8px;
//         }
        
//         .prompt {
//           color: #00ff41;
//           font-size: 14px;
//         }
        
//         .terminal-input {
//           flex: 1;
//           background: transparent;
//           border: none;
//           color: #00ff41;
//           font-family: monospace;
//           font-size: 14px;
//           outline: none;
//         }
        
//         .category-badge {
//           display: flex;
//           align-items: center;
//           gap: 6px;
//           padding: 4px 12px;
//           background: rgba(0, 0, 0, 0.6);
//           border: 1px solid rgba(0, 255, 65, 0.2);
//           border-radius: 20px;
//           font-family: monospace;
//           font-size: 12px;
//         }
        
//         .category-dot {
//           width: 8px;
//           height: 8px;
//           border-radius: 50%;
//         }
        
//         .category-name {
//           color: rgba(0, 255, 65, 0.8);
//         }
//       `}</style>
//     </div>
//   );
// }





















// // app/skills/page.js
// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import { Terminal, Code, Database, Shield, Cpu, Zap, GitBranch, Globe, Lock, Server, Cloud, Layers } from 'lucide-react';
// import { useTransition } from '../layout';
// import ScrambledText from '@/components/ScrambledText';

// // Hexagon Component
// const Hexagon = ({ skill, level, icon, delay, isActive, onClick }) => {
//   const [isHovered, setIsHovered] = useState(false);
  
//   return (
//     <div
//       className={`hexagon-wrapper animate-fade-in cursor-pointer ${isActive ? 'active' : ''}`}
//       style={{ animationDelay: `${delay}ms` }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       onClick={onClick}
//     >
//       <div className={`hexagon ${isHovered ? 'hover' : ''} ${isActive ? 'active' : ''}`}>
//         <div className="hexagon-inner">
//           <div className="hexagon-content">
//             <div className="icon-wrapper">
//               {icon}
//             </div>
//             <div className="skill-name">{skill}</div>
//             <div className="skill-level">LVL {level}</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Terminal Output Component
// const TerminalOutput = ({ selectedSkill, skills }) => {
//   const [output, setOutput] = useState([]);
//   const [currentLine, setCurrentLine] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
  
//   useEffect(() => {
//     if (!selectedSkill) {
//       setOutput(['> Select a skill node to analyze...']);
//       return;
//     }
    
//     const skillData = skills[selectedSkill];
//     if (!skillData) return;
    
//     setIsTyping(true);
//     const lines = [
//       `> Analyzing ${selectedSkill}...`,
//       `> Skill Level: ${skillData.level}/10`,
//       `> Experience: ${skillData.experience}`,
//       `> Status: ${skillData.status}`,
//       `> Related Tools: ${skillData.tools.join(', ')}`,
//       `> Last Updated: ${skillData.lastUpdated}`,
//       `> Proficiency: ${skillData.proficiency}%`,
//       '> Analysis complete.'
//     ];
    
//     setOutput([]);
//     let lineIndex = 0;
    
//     const typeNextLine = () => {
//       if (lineIndex < lines.length) {
//         const line = lines[lineIndex];
//         let charIndex = 0;
        
//         const typeChar = () => {
//           if (charIndex <= line.length) {
//             setCurrentLine(line.substring(0, charIndex));
//             charIndex++;
//             setTimeout(typeChar, 20);
//           } else {
//             setOutput(prev => [...prev, line]);
//             setCurrentLine('');
//             lineIndex++;
//             setTimeout(typeNextLine, 100);
//           }
//         };
        
//         typeChar();
//       } else {
//         setIsTyping(false);
//       }
//     };
    
//     typeNextLine();
//   }, [selectedSkill, skills]);
  
//   return (
//     <div className="terminal-output">
//       {output.map((line, i) => (
//         <div key={i} className="terminal-line">{line}</div>
//       ))}
//       {currentLine && <div className="terminal-line">{currentLine}<span className="cursor">_</span></div>}
//     </div>
//   );
// };

// export default function SkillsPage() {
//   const { isTransitioning } = useTransition();
//   const [selectedSkill, setSelectedSkill] = useState(null);
//   const [commandInput, setCommandInput] = useState('');
//   const [matrixRain, setMatrixRain] = useState([]);
  
//   const skills = {
//     "HTML": {
//       level: 9,
//       icon: <Code className="w-6 h-6" />,
//       category: "frontend",
//       experience: "5+ years",
//       status: "EXPERT",
//       tools: ["HTML5", "Semantic HTML", "SEO", "Accessibility"],
//       lastUpdated: "2024.12.20",
//       proficiency: 95
//     },
//     "CSS": {
//       level: 9,
//       icon: <Layers className="w-6 h-6" />,
//       category: "frontend",
//       experience: "5+ years",
//       status: "EXPERT",
//       tools: ["Flexbox", "Grid", "Animations", "Responsive"],
//       lastUpdated: "2024.12.20",
//       proficiency: 90
//     },
//     "JavaScript": {
//       level: 8,
//       icon: <Terminal className="w-6 h-6" />,
//       category: "language",
//       experience: "4+ years",
//       status: "ADVANCED",
//       tools: ["ES6+", "Async/Await", "DOM API", "Modules"],
//       lastUpdated: "2024.12.22",
//       proficiency: 85
//     },
//     "Tailwind": {
//       level: 8,
//       icon: <Zap className="w-6 h-6" />,
//       category: "frontend",
//       experience: "2+ years",
//       status: "ADVANCED",
//       tools: ["JIT", "Custom Config", "Plugins", "DaisyUI"],
//       lastUpdated: "2024.12.15",
//       proficiency: 85
//     },
//     "Node.js": {
//       level: 7,
//       icon: <Server className="w-6 h-6" />,
//       category: "backend",
//       experience: "3+ years",
//       status: "PROFICIENT",
//       tools: ["NPM", "REST APIs", "File System", "Streams"],
//       lastUpdated: "2024.12.10",
//       proficiency: 75
//     },
//     "Express.js": {
//       level: 7,
//       icon: <Server className="w-6 h-6" />,
//       category: "backend",
//       experience: "3+ years",
//       status: "PROFICIENT",
//       tools: ["Middleware", "Routing", "Error Handling", "JWT"],
//       lastUpdated: "2024.12.10",
//       proficiency: 75
//     },
//     "MongoDB": {
//       level: 7,
//       icon: <Database className="w-6 h-6" />,
//       category: "database",
//       experience: "2+ years",
//       status: "PROFICIENT",
//       tools: ["Mongoose", "Aggregation", "Indexing", "Atlas"],
//       lastUpdated: "2024.12.05",
//       proficiency: 70
//     },
//     "Auth.js": {
//       level: 6,
//       icon: <Lock className="w-6 h-6" />,
//       category: "security",
//       experience: "1+ years",
//       status: "INTERMEDIATE",
//       tools: ["NextAuth", "OAuth", "JWT", "Session Management"],
//       lastUpdated: "2024.11.30",
//       proficiency: 65
//     },
//     "R3F": {
//       level: 7,
//       icon: <Globe className="w-6 h-6" />,
//       category: "frontend",
//       experience: "2+ years",
//       status: "PROFICIENT",
//       tools: ["Three.js", "3D Graphics", "WebGL", "Drei"],
//       lastUpdated: "2024.12.18",
//       proficiency: 70
//     },
//     "React Native": {
//       level: 6,
//       icon: <Code className="w-6 h-6" />,
//       category: "mobile",
//       experience: "1+ years",
//       status: "INTERMEDIATE",
//       tools: ["Expo", "Navigation", "Native APIs", "StyleSheet"],
//       lastUpdated: "2024.11.15",
//       proficiency: 60
//     },
//     "GSAP": {
//       level: 8,
//       icon: <Zap className="w-6 h-6" />,
//       category: "animation",
//       experience: "3+ years",
//       status: "ADVANCED",
//       tools: ["Timeline", "ScrollTrigger", "Morphing", "Easing"],
//       lastUpdated: "2024.12.12",
//       proficiency: 80
//     },
//     "Framer Motion": {
//       level: 7,
//       icon: <Zap className="w-6 h-6" />,
//       category: "animation",
//       experience: "2+ years",
//       status: "PROFICIENT",
//       tools: ["Gestures", "Variants", "Layout", "AnimatePresence"],
//       lastUpdated: "2024.12.08",
//       proficiency: 75
//     },
//     "Git & GitHub": {
//       level: 8,
//       icon: <GitBranch className="w-6 h-6" />,
//       category: "tools",
//       experience: "4+ years",
//       status: "ADVANCED",
//       tools: ["Branching", "Pull Requests", "Actions", "Pages"],
//       lastUpdated: "2024.12.22",
//       proficiency: 85
//     },
//     "C++": {
//       level: 6,
//       icon: <Cpu className="w-6 h-6" />,
//       category: "language",
//       experience: "2+ years",
//       status: "INTERMEDIATE",
//       tools: ["STL", "OOP", "Pointers", "Data Structures"],
//       lastUpdated: "2024.10.20",
//       proficiency: 60
//     }
//   };
  
//   // Matrix rain effect
//   useEffect(() => {
//     const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789";
//     const columns = 20;
//     const rain = [];
    
//     for (let i = 0; i < columns; i++) {
//       rain.push({
//         x: i * 50,
//         y: Math.random() * -100,
//         speed: Math.random() * 2 + 1,
//         chars: Array.from({ length: 15 }, () => chars[Math.floor(Math.random() * chars.length)])
//       });
//     }
    
//     setMatrixRain(rain);
//   }, []);
  
//   const handleCommand = (e) => {
//     if (e.key === 'Enter' && commandInput.trim()) {
//       const cmd = commandInput.toLowerCase().trim();
//       if (cmd === 'list all') {
//         // Show all skills
//       } else if (cmd.startsWith('analyze ')) {
//         const skillName = cmd.replace('analyze ', '');
//         const matchedSkill = Object.keys(skills).find(s => s.toLowerCase() === skillName);
//         if (matchedSkill) {
//           setSelectedSkill(matchedSkill);
//         }
//       } else if (cmd === 'clear') {
//         setSelectedSkill(null);
//       }
//       setCommandInput('');
//     }
//   };
  
//   const hexagonPositions = [
//     { top: '5%', left: '15%' },    // Row 1
//     { top: '5%', left: '35%' },
//     { top: '5%', left: '55%' },
//     { top: '5%', left: '75%' },
//     { top: '20%', left: '5%' },    // Row 2
//     { top: '20%', left: '25%' },
//     { top: '20%', left: '45%' },
//     { top: '20%', left: '65%' },
//     { top: '20%', left: '85%' },
//     { top: '35%', left: '15%' },   // Row 3
//     { top: '35%', left: '35%' },
//     { top: '35%', left: '55%' },
//     { top: '35%', left: '75%' },
//     { top: '50%', left: '25%' },   // Row 4
//   ];

//   return (
//     <div className="min-h-screen pt-32 px-6 relative overflow-hidden">
//       {/* Matrix Rain Background */}
//       <div className="matrix-rain">
//         {matrixRain.map((column, i) => (
//           <div
//             key={i}
//             className="matrix-column"
//             style={{
//               left: `${column.x}px`,
//               animationDuration: `${10 / column.speed}s`
//             }}
//           >
//             {column.chars.map((char, j) => (
//               <span
//                 key={j}
//                 style={{
//                   opacity: 1 - (j / column.chars.length),
//                   color: j === 0 ? '#00ff41' : '#00ff4140'
//                 }}
//               >
//                 {char}
//               </span>
//             ))}
//           </div>
//         ))}
//       </div>
      
//       <div className="max-w-7xl mx-auto relative z-10">
//         <h2 className="text-5xl font-mono font-bold text-green-400 mb-4">
//           <span className="text-gray-400">&gt;</span> <ScrambledText text="SKILL_MATRIX.EXE" />
//         </h2>
//         <p className="text-gray-400 font-mono mb-8">
//           <ScrambledText text="Click nodes to analyze skill data | Use terminal for advanced queries" />
//         </p>
        
//         <div className="grid lg:grid-cols-2 gap-8">
//           {/* Hexagonal Skill Grid */}
//           <div className="relative h-[600px] skill-grid">
//             {Object.entries(skills).map(([skillName, skillData], index) => (
//               <div
//                 key={skillName}
//                 className="absolute"
//                 style={hexagonPositions[index]}
//               >
//                 <Hexagon
//                   skill={skillName}
//                   level={skillData.level}
//                   icon={skillData.icon}
//                   delay={index * 100}
//                   isActive={selectedSkill === skillName}
//                   onClick={() => setSelectedSkill(skillName)}
//                 />
//               </div>
//             ))}
//           </div>
          
//           {/* Terminal Interface */}
//           <div className="terminal-container">
//             <div className="terminal-header">
//               <div className="terminal-buttons">
//                 <div className="terminal-button red"></div>
//                 <div className="terminal-button yellow"></div>
//                 <div className="terminal-button green"></div>
//               </div>
//               <span className="terminal-title">skill_analyzer.sh</span>
//             </div>
//             <div className="terminal-body">
//               <TerminalOutput selectedSkill={selectedSkill} skills={skills} />
//               <div className="terminal-input-line">
//                 <span className="prompt">nexus@skills:~$</span>
//                 <input
//                   type="text"
//                   value={commandInput}
//                   onChange={(e) => setCommandInput(e.target.value)}
//                   onKeyDown={handleCommand}
//                   className="terminal-input"
//                   placeholder="list all | analyze [skill] | clear"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Skill Categories Legend */}
//         <div className="mt-12 flex flex-wrap gap-4 justify-center">
//           {['frontend', 'backend', 'language', 'database', 'security', 'mobile', 'animation', 'tools'].map(category => (
//             <div key={category} className="category-badge">
//               <span className="category-dot" style={{ backgroundColor: 
//                 category === 'frontend' ? '#00ff41' :
//                 category === 'backend' ? '#00ffaa' :
//                 category === 'security' ? '#ff4141' :
//                 category === 'database' ? '#41aaff' :
//                 category === 'mobile' ? '#ff41ff' :
//                 category === 'animation' ? '#ffff41' :
//                 category === 'tools' ? '#41ffff' :
//                 '#aaaaaa'
//               }}></span>
//               <span className="category-name">{category.toUpperCase()}</span>
//             </div>
//           ))}
//         </div>
//       </div>
      
//       <style jsx>{`
//         .matrix-rain {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           overflow: hidden;
//           opacity: 0.1;
//           z-index: 1;
//         }
        
//         .matrix-column {
//           position: absolute;
//           font-family: monospace;
//           font-size: 20px;
//           animation: matrix-fall linear infinite;
//         }
        
//         @keyframes matrix-fall {
//           0% { transform: translateY(-100%); }
//           100% { transform: translateY(100vh); }
//         }
        
//         .hexagon-wrapper {
//           width: 100px;
//           height: 110px;
//           position: relative;
//           transition: transform 0.3s ease;
//         }
        
//         .hexagon-wrapper:hover {
//           transform: scale(1.1);
//           z-index: 10;
//         }
        
//         .hexagon {
//           width: 100px;
//           height: 57.74px;
//           background: rgba(0, 255, 65, 0.1);
//           position: relative;
//           border: 2px solid rgba(0, 255, 65, 0.3);
//           margin: 28.87px 0;
//           transition: all 0.3s ease;
//         }
        
//         .hexagon:before,
//         .hexagon:after {
//           content: "";
//           position: absolute;
//           width: 0;
//           border-left: 50px solid transparent;
//           border-right: 50px solid transparent;
//           transition: all 0.3s ease;
//         }
        
//         .hexagon:before {
//           bottom: 100%;
//           border-bottom: 28.87px solid rgba(0, 255, 65, 0.1);
//           border-bottom-color: inherit;
//         }
        
//         .hexagon:after {
//           top: 100%;
//           border-top: 28.87px solid rgba(0, 255, 65, 0.1);
//           border-top-color: inherit;
//         }
        
//         .hexagon.hover {
//           background: rgba(0, 255, 65, 0.2);
//           border-color: rgba(0, 255, 65, 0.6);
//           box-shadow: 0 0 30px rgba(0, 255, 65, 0.5);
//         }
        
//         .hexagon.active {
//           background: rgba(0, 255, 65, 0.3);
//           border-color: rgba(0, 255, 65, 0.8);
//           box-shadow: 0 0 40px rgba(0, 255, 65, 0.7);
//         }
        
//         .hexagon-inner {
//           width: 100%;
//           height: 100%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }
        
//         .hexagon-content {
//           text-align: center;
//           color: #00ff41;
//           font-family: monospace;
//         }
        
//         .icon-wrapper {
//           margin-bottom: 4px;
//         }
        
//         .skill-name {
//           font-size: 12px;
//           font-weight: bold;
//         }
        
//         .skill-level {
//           font-size: 10px;
//           opacity: 0.8;
//         }
        
//         .terminal-container {
//           background: rgba(0, 0, 0, 0.8);
//           border: 1px solid rgba(0, 255, 65, 0.3);
//           border-radius: 8px;
//           overflow: hidden;
//           height: 600px;
//           display: flex;
//           flex-direction: column;
//         }
        
//         .terminal-header {
//           background: rgba(0, 255, 65, 0.1);
//           padding: 8px 12px;
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           border-bottom: 1px solid rgba(0, 255, 65, 0.3);
//         }
        
//         .terminal-buttons {
//           display: flex;
//           gap: 6px;
//         }
        
//         .terminal-button {
//           width: 12px;
//           height: 12px;
//           border-radius: 50%;
//         }
        
//         .terminal-button.red { background: #ff5f56; }
//         .terminal-button.yellow { background: #ffbd2e; }
//         .terminal-button.green { background: #27c93f; }
        
//         .terminal-title {
//           font-family: monospace;
//           font-size: 12px;
//           color: rgba(0, 255, 65, 0.8);
//         }
        
//         .terminal-body {
//           flex: 1;
//           padding: 16px;
//           overflow-y: auto;
//           font-family: monospace;
//         }
        
//         .terminal-output {
//           margin-bottom: 16px;
//         }
        
//         .terminal-line {
//           color: #00ff41;
//           margin-bottom: 4px;
//           font-size: 14px;
//         }
        
//         .cursor {
//           animation: blink 1s infinite;
//         }
        
//         @keyframes blink {
//           0%, 50% { opacity: 1; }
//           51%, 100% { opacity: 0; }
//         }
        
//         .terminal-input-line {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           margin-top: 8px;
//         }
        
//         .prompt {
//           color: #00ff41;
//           font-size: 14px;
//         }
        
//         .terminal-input {
//           flex: 1;
//           background: transparent;
//           border: none;
//           color: #00ff41;
//           font-family: monospace;
//           font-size: 14px;
//           outline: none;
//         }
        
//         .category-badge {
//           display: flex;
//           align-items: center;
//           gap: 6px;
//           padding: 4px 12px;
//           background: rgba(0, 0, 0, 0.6);
//           border: 1px solid rgba(0, 255, 65, 0.2);
//           border-radius: 20px;
//           font-family: monospace;
//           font-size: 12px;
//         }
        
//         .category-dot {
//           width: 8px;
//           height: 8px;
//           border-radius: 50%;
//         }
        
//         .category-name {
//           color: rgba(0, 255, 65, 0.8);
//         }
//       `}</style>
//     </div>
//   );
// }
















// // app/skills/page.js
// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import { Terminal, Code, Database, Shield, Cpu, Zap, GitBranch, Globe, Lock, Server, Cloud, Layers } from 'lucide-react';
// import { useTransition } from '../layout';
// import ScrambledText from '@/components/ScrambledText';

// // Hexagon Component
// const Hexagon = ({ skill, level, icon, delay, isActive, onClick }) => {
//   const [isHovered, setIsHovered] = useState(false);
  
//   return (
//     <div
//       className={`hexagon-wrapper animate-fade-in cursor-pointer ${isActive ? 'active' : ''}`}
//       style={{ animationDelay: `${delay}ms` }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       onClick={onClick}
//     >
//       <div className={`hexagon ${isHovered ? 'hover' : ''} ${isActive ? 'active' : ''}`}>
//         <div className="hexagon-inner">
//           <div className="hexagon-content">
//             <div className="icon-wrapper">
//               {icon}
//             </div>
//             <div className="skill-name">{skill}</div>
//             <div className="skill-level">LVL {level}</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Terminal Output Component
// const TerminalOutput = ({ selectedSkill, skills }) => {
//   const [output, setOutput] = useState([]);
//   const [currentLine, setCurrentLine] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
  
//   useEffect(() => {
//     if (!selectedSkill) {
//       setOutput(['> Select a skill node to analyze...']);
//       return;
//     }
    
//     const skillData = skills[selectedSkill];
//     if (!skillData) return;
    
//     setIsTyping(true);
//     const lines = [
//       `> Analyzing ${selectedSkill}...`,
//       `> Skill Level: ${skillData.level}/10`,
//       `> Experience: ${skillData.experience}`,
//       `> Status: ${skillData.status}`,
//       `> Related Tools: ${skillData.tools.join(', ')}`,
//       `> Last Updated: ${skillData.lastUpdated}`,
//       `> Proficiency: ${skillData.proficiency}%`,
//       '> Analysis complete.'
//     ];
    
//     setOutput([]);
//     let lineIndex = 0;
    
//     const typeNextLine = () => {
//       if (lineIndex < lines.length) {
//         const line = lines[lineIndex];
//         let charIndex = 0;
        
//         const typeChar = () => {
//           if (charIndex <= line.length) {
//             setCurrentLine(line.substring(0, charIndex));
//             charIndex++;
//             setTimeout(typeChar, 20);
//           } else {
//             setOutput(prev => [...prev, line]);
//             setCurrentLine('');
//             lineIndex++;
//             setTimeout(typeNextLine, 100);
//           }
//         };
        
//         typeChar();
//       } else {
//         setIsTyping(false);
//       }
//     };
    
//     typeNextLine();
//   }, [selectedSkill, skills]);
  
//   return (
//     <div className="terminal-output">
//       {output.map((line, i) => (
//         <div key={i} className="terminal-line">{line}</div>
//       ))}
//       {currentLine && <div className="terminal-line">{currentLine}<span className="cursor">_</span></div>}
//     </div>
//   );
// };

// export default function SkillsPage() {
//   const { isTransitioning } = useTransition();
//   const [selectedSkill, setSelectedSkill] = useState(null);
//   const [commandInput, setCommandInput] = useState('');
//   const [matrixRain, setMatrixRain] = useState([]);
  
// // Custom Logo Components
// const TailwindLogo = () => (
//   <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
//     <path fillRule="evenodd" clipRule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345-.98-.99-2.114-2.134-4.594-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C8.387 16.855 9.522 18 12 18c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z" fill="#00ff41"/>
//   </svg>
// );

// const NodeLogo = () => (
//   <svg viewBox="0 0 24 24" className="w-6 h-6">
//     <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.602.065-.037.151-.023.218.016l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.135-.141.135-.241V6.921c0-.103-.055-.198-.137-.246l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.075 6.68c-.084.048-.139.144-.139.245v10.142c0 .1.055.194.137.241l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.924-.943-.924-1.609V6.921c0-.665.355-1.283.924-1.611L11.073.236a1.882 1.882 0 0 1 1.85 0l8.794 5.074c.57.329.924.946.924 1.611v10.145c0 .666-.354 1.278-.924 1.609l-8.794 5.078c-.28.163-.599.247-.925.247zm2.718-6.993c-3.848 0-4.653-1.766-4.653-3.25 0-.14.114-.254.256-.254h1.135c.128 0 .235.093.253.219.173 1.17.691 1.761 3.01 1.761 1.851 0 2.639-.419 2.639-1.402 0-.565-.225-1.007-3.103-1.296-2.408-.243-3.896-.77-3.896-2.697 0-1.778 1.5-2.836 4.012-2.836 2.823 0 4.218.98 4.394 3.083a.256.256 0 0 1-.255.278h-1.143a.252.252 0 0 1-.247-.199c-.275-1.22-.94-1.611-2.749-1.611-2.024 0-2.26.705-2.26 1.234 0 .641.277.828 3.006 1.19 2.7.358 3.985.865 3.985 2.773 0 1.921-1.603 3.022-4.397 3.022z" fill="#00ff41"/>
//   </svg>
// );

// const ExpressLogo = () => (
//   <svg viewBox="0 0 24 24" className="w-6 h-6">
//     <path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" fill="#00ff41"/>
//   </svg>
// );

// const FramerLogo = () => (
//   <svg viewBox="0 0 24 24" className="w-6 h-6">
//     <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill="#00ff41"/>
//   </svg>
// );

// const skills = {
//     "HTML": {
//       level: 9,
//       icon: <Code className="w-6 h-6" />,
//       category: "frontend",
//       experience: "5+ years",
//       status: "EXPERT",
//       tools: ["HTML5", "Semantic HTML", "SEO", "Accessibility"],
//       lastUpdated: "2024.12.20",
//       proficiency: 95
//     },
//     "CSS": {
//       level: 9,
//       icon: <Layers className="w-6 h-6" />,
//       category: "frontend",
//       experience: "5+ years",
//       status: "EXPERT",
//       tools: ["Flexbox", "Grid", "Animations", "Responsive"],
//       lastUpdated: "2024.12.20",
//       proficiency: 90
//     },
//     "JavaScript": {
//       level: 8,
//       icon: <Terminal className="w-6 h-6" />,
//       category: "language",
//       experience: "4+ years",
//       status: "ADVANCED",
//       tools: ["ES6+", "Async/Await", "DOM API", "Modules"],
//       lastUpdated: "2024.12.22",
//       proficiency: 85
//     },
//     "Tailwind": {
//       level: 8,
//       icon: <TailwindLogo />,
//       category: "frontend",
//       experience: "2+ years",
//       status: "ADVANCED",
//       tools: ["JIT", "Custom Config", "Plugins", "DaisyUI"],
//       lastUpdated: "2024.12.15",
//       proficiency: 85
//     },
//     "Node.js": {
//       level: 7,
//       icon: <NodeLogo />,
//       category: "backend",
//       experience: "3+ years",
//       status: "PROFICIENT",
//       tools: ["NPM", "REST APIs", "File System", "Streams"],
//       lastUpdated: "2024.12.10",
//       proficiency: 75
//     },
//     "Express.js": {
//       level: 7,
//       icon: <ExpressLogo />,
//       category: "backend",
//       experience: "3+ years",
//       status: "PROFICIENT",
//       tools: ["Middleware", "Routing", "Error Handling", "JWT"],
//       lastUpdated: "2024.12.10",
//       proficiency: 75
//     },
//     "MongoDB": {
//       level: 7,
//       icon: <Database className="w-6 h-6" />,
//       category: "database",
//       experience: "2+ years",
//       status: "PROFICIENT",
//       tools: ["Mongoose", "Aggregation", "Indexing", "Atlas"],
//       lastUpdated: "2024.12.05",
//       proficiency: 70
//     },
//     "Auth.js": {
//       level: 6,
//       icon: <Lock className="w-6 h-6" />,
//       category: "security",
//       experience: "1+ years",
//       status: "INTERMEDIATE",
//       tools: ["NextAuth", "OAuth", "JWT", "Session Management"],
//       lastUpdated: "2024.11.30",
//       proficiency: 65
//     },
//     "R3F": {
//       level: 7,
//       icon: <Globe className="w-6 h-6" />,
//       category: "frontend",
//       experience: "2+ years",
//       status: "PROFICIENT",
//       tools: ["Three.js", "3D Graphics", "WebGL", "Drei"],
//       lastUpdated: "2024.12.18",
//       proficiency: 70
//     },
//     "React Native": {
//       level: 6,
//       icon: <Code className="w-6 h-6" />,
//       category: "mobile",
//       experience: "1+ years",
//       status: "INTERMEDIATE",
//       tools: ["Expo", "Navigation", "Native APIs", "StyleSheet"],
//       lastUpdated: "2024.11.15",
//       proficiency: 60
//     },
//     "GSAP": {
//       level: 8,
//       icon: <Zap className="w-6 h-6" />,
//       category: "animation",
//       experience: "3+ years",
//       status: "ADVANCED",
//       tools: ["Timeline", "ScrollTrigger", "Morphing", "Easing"],
//       lastUpdated: "2024.12.12",
//       proficiency: 80
//     },
//     "Framer Motion": {
//       level: 7,
//       icon: <FramerLogo />,
//       category: "animation",
//       experience: "2+ years",
//       status: "PROFICIENT",
//       tools: ["Gestures", "Variants", "Layout", "AnimatePresence"],
//       lastUpdated: "2024.12.08",
//       proficiency: 75
//     },
//     "Git & GitHub": {
//       level: 8,
//       icon: <GitBranch className="w-6 h-6" />,
//       category: "tools",
//       experience: "4+ years",
//       status: "ADVANCED",
//       tools: ["Branching", "Pull Requests", "Actions", "Pages"],
//       lastUpdated: "2024.12.22",
//       proficiency: 85
//     },
//     "C++": {
//       level: 6,
//       icon: <Cpu className="w-6 h-6" />,
//       category: "language",
//       experience: "2+ years",
//       status: "INTERMEDIATE",
//       tools: ["STL", "OOP", "Pointers", "Data Structures"],
//       lastUpdated: "2024.10.20",
//       proficiency: 60
//     }
//   };
  
//   // Matrix rain effect
//   useEffect(() => {
//     const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789";
//     const columns = 20;
//     const rain = [];
    
//     for (let i = 0; i < columns; i++) {
//       rain.push({
//         x: i * 50,
//         y: Math.random() * -100,
//         speed: Math.random() * 2 + 1,
//         chars: Array.from({ length: 15 }, () => chars[Math.floor(Math.random() * chars.length)])
//       });
//     }
    
//     setMatrixRain(rain);
//   }, []);
  
//   const handleCommand = (e) => {
//     if (e.key === 'Enter' && commandInput.trim()) {
//       const cmd = commandInput.toLowerCase().trim();
//       if (cmd === 'list all') {
//         // Show all skills
//       } else if (cmd.startsWith('analyze ')) {
//         const skillName = cmd.replace('analyze ', '');
//         const matchedSkill = Object.keys(skills).find(s => s.toLowerCase() === skillName);
//         if (matchedSkill) {
//           setSelectedSkill(matchedSkill);
//         }
//       } else if (cmd === 'clear') {
//         setSelectedSkill(null);
//       }
//       setCommandInput('');
//     }
//   };
  
//   const hexagonPositions = [
//     { top: '5%', left: '15%' },    // Row 1
//     { top: '5%', left: '35%' },
//     { top: '5%', left: '55%' },
//     { top: '5%', left: '75%' },
//     { top: '20%', left: '5%' },    // Row 2
//     { top: '20%', left: '25%' },
//     { top: '20%', left: '45%' },
//     { top: '20%', left: '65%' },
//     { top: '20%', left: '85%' },
//     { top: '35%', left: '15%' },   // Row 3
//     { top: '35%', left: '35%' },
//     { top: '35%', left: '55%' },
//     { top: '35%', left: '75%' },
//     { top: '50%', left: '25%' },   // Row 4
//   ];

//   return (
//     <div className="min-h-screen pt-32 px-6 relative overflow-hidden">
//       {/* Matrix Rain Background */}
//       <div className="matrix-rain">
//         {matrixRain.map((column, i) => (
//           <div
//             key={i}
//             className="matrix-column"
//             style={{
//               left: `${column.x}px`,
//               animationDuration: `${10 / column.speed}s`
//             }}
//           >
//             {column.chars.map((char, j) => (
//               <span
//                 key={j}
//                 style={{
//                   opacity: 1 - (j / column.chars.length),
//                   color: j === 0 ? '#00ff41' : '#00ff4140'
//                 }}
//               >
//                 {char}
//               </span>
//             ))}
//           </div>
//         ))}
//       </div>
      
//       <div className="max-w-7xl mx-auto relative z-10">
//         <h2 className="text-5xl font-mono font-bold text-green-400 mb-4">
//           <span className="text-gray-400">&gt;</span> <ScrambledText text="SKILL_MATRIX.EXE" />
//         </h2>
//         <p className="text-gray-400 font-mono mb-8">
//           <ScrambledText text="Click nodes to analyze skill data | Use terminal for advanced queries" />
//         </p>
        
//         <div className="grid lg:grid-cols-2 gap-8">
//           {/* Hexagonal Skill Grid */}
//           <div className="relative h-[600px] skill-grid">
//             {Object.entries(skills).map(([skillName, skillData], index) => (
//               <div
//                 key={skillName}
//                 className="absolute"
//                 style={hexagonPositions[index]}
//               >
//                 <Hexagon
//                   skill={skillName}
//                   level={skillData.level}
//                   icon={skillData.icon}
//                   delay={index * 100}
//                   isActive={selectedSkill === skillName}
//                   onClick={() => setSelectedSkill(skillName)}
//                 />
//               </div>
//             ))}
//           </div>
          
//           {/* Terminal Interface */}
//           <div className="terminal-container">
//             <div className="terminal-header">
//               <div className="terminal-buttons">
//                 <div className="terminal-button red"></div>
//                 <div className="terminal-button yellow"></div>
//                 <div className="terminal-button green"></div>
//               </div>
//               <span className="terminal-title">skill_analyzer.sh</span>
//             </div>
//             <div className="terminal-body">
//               <TerminalOutput selectedSkill={selectedSkill} skills={skills} />
//               <div className="terminal-input-line">
//                 <span className="prompt">nexus@skills:~$</span>
//                 <input
//                   type="text"
//                   value={commandInput}
//                   onChange={(e) => setCommandInput(e.target.value)}
//                   onKeyDown={handleCommand}
//                   className="terminal-input"
//                   placeholder="list all | analyze [skill] | clear"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Skill Categories Legend */}
//         <div className="mt-12 flex flex-wrap gap-4 justify-center">
//           {['frontend', 'backend', 'language', 'database', 'security', 'mobile', 'animation', 'tools'].map(category => (
//             <div key={category} className="category-badge">
//               <span className="category-dot" style={{ backgroundColor: 
//                 category === 'frontend' ? '#00ff41' :
//                 category === 'backend' ? '#00ffaa' :
//                 category === 'security' ? '#ff4141' :
//                 category === 'database' ? '#41aaff' :
//                 category === 'mobile' ? '#ff41ff' :
//                 category === 'animation' ? '#ffff41' :
//                 category === 'tools' ? '#41ffff' :
//                 '#aaaaaa'
//               }}></span>
//               <span className="category-name">{category.toUpperCase()}</span>
//             </div>
//           ))}
//         </div>
//       </div>
      
//       <style jsx>{`
//         .matrix-rain {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           overflow: hidden;
//           opacity: 0.1;
//           z-index: 1;
//         }
        
//         .matrix-column {
//           position: absolute;
//           font-family: monospace;
//           font-size: 20px;
//           animation: matrix-fall linear infinite;
//         }
        
//         @keyframes matrix-fall {
//           0% { transform: translateY(-100%); }
//           100% { transform: translateY(100vh); }
//         }
        
//         .hexagon-wrapper {
//           width: 100px;
//           height: 110px;
//           position: relative;
//           transition: transform 0.3s ease;
//         }
        
//         .hexagon-wrapper:hover {
//           transform: scale(1.1);
//           z-index: 10;
//         }
        
//         .hexagon {
//           width: 100px;
//           height: 57.74px;
//           background: rgba(0, 255, 65, 0.1);
//           position: relative;
//           border: 2px solid rgba(0, 255, 65, 0.3);
//           margin: 28.87px 0;
//           transition: all 0.3s ease;
//         }
        
//         .hexagon:before,
//         .hexagon:after {
//           content: "";
//           position: absolute;
//           width: 0;
//           border-left: 50px solid transparent;
//           border-right: 50px solid transparent;
//           transition: all 0.3s ease;
//         }
        
//         .hexagon:before {
//           bottom: 100%;
//           border-bottom: 28.87px solid rgba(0, 255, 65, 0.1);
//           border-bottom-color: inherit;
//         }
        
//         .hexagon:after {
//           top: 100%;
//           border-top: 28.87px solid rgba(0, 255, 65, 0.1);
//           border-top-color: inherit;
//         }
        
//         .hexagon.hover {
//           background: rgba(0, 255, 65, 0.2);
//           border-color: rgba(0, 255, 65, 0.6);
//           box-shadow: 0 0 30px rgba(0, 255, 65, 0.5);
//         }
        
//         .hexagon.active {
//           background: rgba(0, 255, 65, 0.3);
//           border-color: rgba(0, 255, 65, 0.8);
//           box-shadow: 0 0 40px rgba(0, 255, 65, 0.7);
//         }
        
//         .hexagon-inner {
//           width: 100%;
//           height: 100%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }
        
//         .hexagon-content {
//           text-align: center;
//           color: #00ff41;
//           font-family: monospace;
//         }
        
//         .icon-wrapper {
//           margin-bottom: 4px;
//         }
        
//         .skill-name {
//           font-size: 12px;
//           font-weight: bold;
//         }
        
//         .skill-level {
//           font-size: 10px;
//           opacity: 0.8;
//         }
        
//         .terminal-container {
//           background: rgba(0, 0, 0, 0.8);
//           border: 1px solid rgba(0, 255, 65, 0.3);
//           border-radius: 8px;
//           overflow: hidden;
//           height: 600px;
//           display: flex;
//           flex-direction: column;
//         }
        
//         .terminal-header {
//           background: rgba(0, 255, 65, 0.1);
//           padding: 8px 12px;
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           border-bottom: 1px solid rgba(0, 255, 65, 0.3);
//         }
        
//         .terminal-buttons {
//           display: flex;
//           gap: 6px;
//         }
        
//         .terminal-button {
//           width: 12px;
//           height: 12px;
//           border-radius: 50%;
//         }
        
//         .terminal-button.red { background: #ff5f56; }
//         .terminal-button.yellow { background: #ffbd2e; }
//         .terminal-button.green { background: #27c93f; }
        
//         .terminal-title {
//           font-family: monospace;
//           font-size: 12px;
//           color: rgba(0, 255, 65, 0.8);
//         }
        
//         .terminal-body {
//           flex: 1;
//           padding: 16px;
//           overflow-y: auto;
//           font-family: monospace;
//         }
        
//         .terminal-output {
//           margin-bottom: 16px;
//         }
        
//         .terminal-line {
//           color: #00ff41;
//           margin-bottom: 4px;
//           font-size: 14px;
//         }
        
//         .cursor {
//           animation: blink 1s infinite;
//         }
        
//         @keyframes blink {
//           0%, 50% { opacity: 1; }
//           51%, 100% { opacity: 0; }
//         }
        
//         .terminal-input-line {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           margin-top: 8px;
//         }
        
//         .prompt {
//           color: #00ff41;
//           font-size: 14px;
//         }
        
//         .terminal-input {
//           flex: 1;
//           background: transparent;
//           border: none;
//           color: #00ff41;
//           font-family: monospace;
//           font-size: 14px;
//           outline: none;
//         }
        
//         .category-badge {
//           display: flex;
//           align-items: center;
//           gap: 6px;
//           padding: 4px 12px;
//           background: rgba(0, 0, 0, 0.6);
//           border: 1px solid rgba(0, 255, 65, 0.2);
//           border-radius: 20px;
//           font-family: monospace;
//           font-size: 12px;
//         }
        
//         .category-dot {
//           width: 8px;
//           height: 8px;
//           border-radius: 50%;
//         }
        
//         .category-name {
//           color: rgba(0, 255, 65, 0.8);
//         }
//       `}</style>
//     </div>
//   );
// }

































// // app/skills/page.js
// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import { Terminal, Code, Database, Shield, Cpu, Zap, GitBranch, Globe, Lock, Server, Cloud, Layers } from 'lucide-react';
// import { useTransition } from '../layout';
// import ScrambledText from '@/components/ScrambledText';

// // Hexagon Component
// const Hexagon = ({ skill, level, icon, delay, isActive, onClick }) => {
//   const [isHovered, setIsHovered] = useState(false);
  
//   return (
//     <div
//       className={`hexagon-wrapper animate-fade-in cursor-pointer ${isActive ? 'active' : ''}`}
//       style={{ animationDelay: `${delay}ms` }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       onClick={onClick}
//     >
//       <div className={`hexagon ${isHovered ? 'hover' : ''} ${isActive ? 'active' : ''}`}>
//         <div className="hexagon-inner">
//           <div className="hexagon-content">
//             <div className="icon-wrapper">
//               {icon}
//             </div>
//             <div className="skill-name">{skill}</div>
//             <div className="skill-level">LVL {level}</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Terminal Output Component
// const TerminalOutput = ({ selectedSkill, skills }) => {
//   const [output, setOutput] = useState([]);
//   const [currentLine, setCurrentLine] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
  
//   useEffect(() => {
//     if (!selectedSkill) {
//       setOutput(['> Select a skill node to analyze...']);
//       return;
//     }
    
//     const skillData = skills[selectedSkill];
//     if (!skillData) return;
    
//     setIsTyping(true);
//     const lines = [
//       `> Analyzing ${selectedSkill}...`,
//       `> Skill Level: ${skillData.level}/10`,
//       `> Experience: ${skillData.experience}`,
//       `> Status: ${skillData.status}`,
//       `> Related Tools: ${skillData.tools.join(', ')}`,
//       `> Last Updated: ${skillData.lastUpdated}`,
//       `> Proficiency: ${skillData.proficiency}%`,
//       '> Analysis complete.'
//     ];
    
//     setOutput([]);
//     let lineIndex = 0;
    
//     const typeNextLine = () => {
//       if (lineIndex < lines.length) {
//         const line = lines[lineIndex];
//         let charIndex = 0;
        
//         const typeChar = () => {
//           if (charIndex <= line.length) {
//             setCurrentLine(line.substring(0, charIndex));
//             charIndex++;
//             setTimeout(typeChar, 20);
//           } else {
//             setOutput(prev => [...prev, line]);
//             setCurrentLine('');
//             lineIndex++;
//             setTimeout(typeNextLine, 100);
//           }
//         };
        
//         typeChar();
//       } else {
//         setIsTyping(false);
//       }
//     };
    
//     typeNextLine();
//   }, [selectedSkill, skills]);
  
//   return (
//     <div className="terminal-output">
//       {output.map((line, i) => (
//         <div key={i} className="terminal-line">{line}</div>
//       ))}
//       {currentLine && <div className="terminal-line">{currentLine}<span className="cursor">_</span></div>}
//     </div>
//   );
// };

// export default function SkillsPage() {
//   const { isTransitioning } = useTransition();
//   const [selectedSkill, setSelectedSkill] = useState(null);
//   const [commandInput, setCommandInput] = useState('');
//   const [matrixRain, setMatrixRain] = useState([]);
  
// // Custom Logo Components
// const TailwindLogo = () => (
//   <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
//     <path fillRule="evenodd" clipRule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345-.98-.99-2.114-2.134-4.594-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C8.387 16.855 9.522 18 12 18c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z" fill="#00ff41"/>
//   </svg>
// );

// const NodeLogo = () => (
//   <svg viewBox="0 0 24 24" className="w-6 h-6">
//     <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.602.065-.037.151-.023.218.016l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.135-.141.135-.241V6.921c0-.103-.055-.198-.137-.246l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.075 6.68c-.084.048-.139.144-.139.245v10.142c0 .1.055.194.137.241l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.924-.943-.924-1.609V6.921c0-.665.355-1.283.924-1.611L11.073.236a1.882 1.882 0 0 1 1.85 0l8.794 5.074c.57.329.924.946.924 1.611v10.145c0 .666-.354 1.278-.924 1.609l-8.794 5.078c-.28.163-.599.247-.925.247zm2.718-6.993c-3.848 0-4.653-1.766-4.653-3.25 0-.14.114-.254.256-.254h1.135c.128 0 .235.093.253.219.173 1.17.691 1.761 3.01 1.761 1.851 0 2.639-.419 2.639-1.402 0-.565-.225-1.007-3.103-1.296-2.408-.243-3.896-.77-3.896-2.697 0-1.778 1.5-2.836 4.012-2.836 2.823 0 4.218.98 4.394 3.083a.256.256 0 0 1-.255.278h-1.143a.252.252 0 0 1-.247-.199c-.275-1.22-.94-1.611-2.749-1.611-2.024 0-2.26.705-2.26 1.234 0 .641.277.828 3.006 1.19 2.7.358 3.985.865 3.985 2.773 0 1.921-1.603 3.022-4.397 3.022z" fill="#00ff41"/>
//   </svg>
// );

// const ExpressLogo = () => (
//   <svg viewBox="0 0 24 24" className="w-6 h-6">
//     <path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" fill="#00ff41"/>
//   </svg>
// );

// const FramerLogo = () => (
//   <svg viewBox="0 0 24 24" className="w-6 h-6">
//     <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill="#00ff41"/>
//   </svg>
// );

// const skills = {
//     "HTML": {
//       level: 9,
//       icon: <Code className="w-6 h-6 text-green-400" />,
//       category: "frontend",
//       experience: "5+ years",
//       status: "EXPERT",
//       tools: ["HTML5", "Semantic HTML", "SEO", "Accessibility"],
//       lastUpdated: "2024.12.20",
//       proficiency: 95
//     },
//     "CSS": {
//       level: 9,
//       icon: <Layers className="w-6 h-6 text-green-400" />,
//       category: "frontend",
//       experience: "5+ years",
//       status: "EXPERT",
//       tools: ["Flexbox", "Grid", "Animations", "Responsive"],
//       lastUpdated: "2024.12.20",
//       proficiency: 90
//     },
//     "JavaScript": {
//       level: 8,
//       icon: <Terminal className="w-6 h-6 text-green-400" />,
//       category: "language",
//       experience: "4+ years",
//       status: "ADVANCED",
//       tools: ["ES6+", "Async/Await", "DOM API", "Modules"],
//       lastUpdated: "2024.12.22",
//       proficiency: 85
//     },
//     "Tailwind": {
//       level: 8,
//       icon: <TailwindLogo />,
//       category: "frontend",
//       experience: "2+ years",
//       status: "ADVANCED",
//       tools: ["JIT", "Custom Config", "Plugins", "DaisyUI"],
//       lastUpdated: "2024.12.15",
//       proficiency: 85
//     },
//     "Node.js": {
//       level: 7,
//       icon: <NodeLogo />,
//       category: "backend",
//       experience: "3+ years",
//       status: "PROFICIENT",
//       tools: ["NPM", "REST APIs", "File System", "Streams"],
//       lastUpdated: "2024.12.10",
//       proficiency: 75
//     },
//     "Express.js": {
//       level: 7,
//       icon: <ExpressLogo />,
//       category: "backend",
//       experience: "3+ years",
//       status: "PROFICIENT",
//       tools: ["Middleware", "Routing", "Error Handling", "JWT"],
//       lastUpdated: "2024.12.10",
//       proficiency: 75
//     },
//     "MongoDB": {
//       level: 7,
//       icon: <Database className="w-6 h-6 text-green-400" />,
//       category: "database",
//       experience: "2+ years",
//       status: "PROFICIENT",
//       tools: ["Mongoose", "Aggregation", "Indexing", "Atlas"],
//       lastUpdated: "2024.12.05",
//       proficiency: 70
//     },
//     "Auth.js": {
//       level: 6,
//       icon: <Lock className="w-6 h-6 text-green-400" />,
//       category: "security",
//       experience: "1+ years",
//       status: "INTERMEDIATE",
//       tools: ["NextAuth", "OAuth", "JWT", "Session Management"],
//       lastUpdated: "2024.11.30",
//       proficiency: 65
//     },
//     "R3F": {
//       level: 7,
//       icon: <Globe className="w-6 h-6 text-green-400" />,
//       category: "frontend",
//       experience: "2+ years",
//       status: "PROFICIENT",
//       tools: ["Three.js", "3D Graphics", "WebGL", "Drei"],
//       lastUpdated: "2024.12.18",
//       proficiency: 70
//     },
//     "React Native": {
//       level: 6,
//       icon: <Code className="w-6 h-6 text-green-400" />,
//       category: "mobile",
//       experience: "1+ years",
//       status: "INTERMEDIATE",
//       tools: ["Expo", "Navigation", "Native APIs", "StyleSheet"],
//       lastUpdated: "2024.11.15",
//       proficiency: 60
//     },
//     "GSAP": {
//       level: 8,
//       icon: <Zap className="w-6 h-6 text-green-400" />,
//       category: "animation",
//       experience: "3+ years",
//       status: "ADVANCED",
//       tools: ["Timeline", "ScrollTrigger", "Morphing", "Easing"],
//       lastUpdated: "2024.12.12",
//       proficiency: 80
//     },
//     "Framer Motion": {
//       level: 7,
//       icon: <FramerLogo />,
//       category: "animation",
//       experience: "2+ years",
//       status: "PROFICIENT",
//       tools: ["Gestures", "Variants", "Layout", "AnimatePresence"],
//       lastUpdated: "2024.12.08",
//       proficiency: 75
//     },
//     "Git & GitHub": {
//       level: 8,
//       icon: <GitBranch className="w-6 h-6 text-green-400" />,
//       category: "tools",
//       experience: "4+ years",
//       status: "ADVANCED",
//       tools: ["Branching", "Pull Requests", "Actions", "Pages"],
//       lastUpdated: "2024.12.22",
//       proficiency: 85
//     },
//     "C++": {
//       level: 6,
//       icon: <Cpu className="w-6 h-6 text-green-400" />,
//       category: "language",
//       experience: "2+ years",
//       status: "INTERMEDIATE",
//       tools: ["STL", "OOP", "Pointers", "Data Structures"],
//       lastUpdated: "2024.10.20",
//       proficiency: 60
//     }
//   };
  
//   // Matrix rain effect
//   useEffect(() => {
//     const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789";
//     const columns = 20;
//     const rain = [];
    
//     for (let i = 0; i < columns; i++) {
//       rain.push({
//         x: i * 50,
//         y: Math.random() * -100,
//         speed: Math.random() * 2 + 1,
//         chars: Array.from({ length: 15 }, () => chars[Math.floor(Math.random() * chars.length)])
//       });
//     }
    
//     setMatrixRain(rain);
//   }, []);
  
//   const handleCommand = (e) => {
//     if (e.key === 'Enter' && commandInput.trim()) {
//       const cmd = commandInput.toLowerCase().trim();
//       if (cmd === 'list all') {
//         // Show all skills
//       } else if (cmd.startsWith('analyze ')) {
//         const skillName = cmd.replace('analyze ', '');
//         const matchedSkill = Object.keys(skills).find(s => s.toLowerCase() === skillName);
//         if (matchedSkill) {
//           setSelectedSkill(matchedSkill);
//         }
//       } else if (cmd === 'clear') {
//         setSelectedSkill(null);
//       }
//       setCommandInput('');
//     }
//   };
  
//   const hexagonPositions = [
//     { top: '5%', left: '15%' },    // Row 1
//     { top: '5%', left: '35%' },
//     { top: '5%', left: '55%' },
//     { top: '5%', left: '75%' },
//     { top: '20%', left: '5%' },    // Row 2
//     { top: '20%', left: '25%' },
//     { top: '20%', left: '45%' },
//     { top: '20%', left: '65%' },
//     { top: '20%', left: '85%' },
//     { top: '35%', left: '15%' },   // Row 3
//     { top: '35%', left: '35%' },
//     { top: '35%', left: '55%' },
//     { top: '35%', left: '75%' },
//     { top: '50%', left: '25%' },   // Row 4
//   ];

//   return (
//     <div className="min-h-screen pt-32 px-6 relative overflow-hidden">
//       {/* Matrix Rain Background */}
//       <div className="matrix-rain">
//         {matrixRain.map((column, i) => (
//           <div
//             key={i}
//             className="matrix-column"
//             style={{
//               left: `${column.x}px`,
//               animationDuration: `${10 / column.speed}s`
//             }}
//           >
//             {column.chars.map((char, j) => (
//               <span
//                 key={j}
//                 style={{
//                   opacity: 1 - (j / column.chars.length),
//                   color: j === 0 ? '#00ff41' : '#00ff4140'
//                 }}
//               >
//                 {char}
//               </span>
//             ))}
//           </div>
//         ))}
//       </div>
      
//       <div className="max-w-7xl mx-auto relative z-10">
//         <h2 className="text-5xl font-mono font-bold text-green-400 mb-4">
//           <span className="text-gray-400">&gt;</span> <ScrambledText text="SKILL_MATRIX.EXE" />
//         </h2>
//         <p className="text-gray-400 font-mono mb-8">
//           <ScrambledText text="Click nodes to analyze skill data | Use terminal for advanced queries" />
//         </p>
        
//         <div className="grid lg:grid-cols-2 gap-8">
//           {/* Hexagonal Skill Grid */}
//           <div className="relative h-[600px] skill-grid">
//             {Object.entries(skills).map(([skillName, skillData], index) => (
//               <div
//                 key={skillName}
//                 className="absolute"
//                 style={hexagonPositions[index]}
//               >
//                 <Hexagon
//                   skill={skillName}
//                   level={skillData.level}
//                   icon={skillData.icon}
//                   delay={index * 100}
//                   isActive={selectedSkill === skillName}
//                   onClick={() => setSelectedSkill(skillName)}
//                 />
//               </div>
//             ))}
//           </div>
          
//           {/* Terminal Interface */}
//           <div className="terminal-container">
//             <div className="terminal-header">
//               <div className="terminal-buttons">
//                 <div className="terminal-button red"></div>
//                 <div className="terminal-button yellow"></div>
//                 <div className="terminal-button green"></div>
//               </div>
//               <span className="terminal-title">skill_analyzer.sh</span>
//             </div>
//             <div className="terminal-body">
//               <TerminalOutput selectedSkill={selectedSkill} skills={skills} />
//               <div className="terminal-input-line">
//                 <span className="prompt">nexus@skills:~$</span>
//                 <input
//                   type="text"
//                   value={commandInput}
//                   onChange={(e) => setCommandInput(e.target.value)}
//                   onKeyDown={handleCommand}
//                   className="terminal-input"
//                   placeholder="list all | analyze [skill] | clear"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Skill Categories Legend */}
//         <div className="mt-12 flex flex-wrap gap-4 justify-center">
//           {['frontend', 'backend', 'language', 'database', 'security', 'mobile', 'animation', 'tools'].map(category => (
//             <div key={category} className="category-badge">
//               <span className="category-dot" style={{ backgroundColor: 
//                 category === 'frontend' ? '#00ff41' :
//                 category === 'backend' ? '#00ffaa' :
//                 category === 'security' ? '#ff4141' :
//                 category === 'database' ? '#41aaff' :
//                 category === 'mobile' ? '#ff41ff' :
//                 category === 'animation' ? '#ffff41' :
//                 category === 'tools' ? '#41ffff' :
//                 '#aaaaaa'
//               }}></span>
//               <span className="category-name">{category.toUpperCase()}</span>
//             </div>
//           ))}
//         </div>
//       </div>
      
//       <style jsx>{`
//         .matrix-rain {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           overflow: hidden;
//           opacity: 0.1;
//           z-index: 1;
//         }
        
//         .matrix-column {
//           position: absolute;
//           font-family: monospace;
//           font-size: 20px;
//           animation: matrix-fall linear infinite;
//         }
        
//         @keyframes matrix-fall {
//           0% { transform: translateY(-100%); }
//           100% { transform: translateY(100vh); }
//         }
        
//         .hexagon-wrapper {
//           width: 100px;
//           height: 110px;
//           position: relative;
//           transition: transform 0.3s ease;
//         }
        
//         .hexagon-wrapper:hover {
//           transform: scale(1.1);
//           z-index: 10;
//         }
        
//         .hexagon {
//           width: 100px;
//           height: 57.74px;
//           background: rgba(0, 255, 65, 0.1);
//           position: relative;
//           border: 2px solid rgba(0, 255, 65, 0.3);
//           margin: 28.87px 0;
//           transition: all 0.3s ease;
//         }
        
//         .hexagon:before,
//         .hexagon:after {
//           content: "";
//           position: absolute;
//           width: 0;
//           border-left: 50px solid transparent;
//           border-right: 50px solid transparent;
//           transition: all 0.3s ease;
//         }
        
//         .hexagon:before {
//           bottom: 100%;
//           border-bottom: 28.87px solid rgba(0, 255, 65, 0.1);
//           border-bottom-color: inherit;
//         }
        
//         .hexagon:after {
//           top: 100%;
//           border-top: 28.87px solid rgba(0, 255, 65, 0.1);
//           border-top-color: inherit;
//         }
        
//         .hexagon.hover {
//           background: rgba(0, 255, 65, 0.2);
//           border-color: rgba(0, 255, 65, 0.6);
//           box-shadow: 0 0 30px rgba(0, 255, 65, 0.5);
//         }
        
//         .hexagon.active {
//           background: rgba(0, 255, 65, 0.3);
//           border-color: rgba(0, 255, 65, 0.8);
//           box-shadow: 0 0 40px rgba(0, 255, 65, 0.7);
//         }
        
//         .hexagon-inner {
//           width: 100%;
//           height: 100%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }
        
//         .hexagon-content {
//           text-align: center;
//           color: #00ff41;
//           font-family: monospace;
//         }
        
//         .icon-wrapper {
//           margin-bottom: 4px;
//           color: #00ff41;
//         }
        
//         .icon-wrapper svg {
//           color: #00ff41 !important;
//         }
        
//         .skill-name {
//           font-size: 12px;
//           font-weight: bold;
//         }
        
//         .skill-level {
//           font-size: 10px;
//           opacity: 0.8;
//         }
        
//         .terminal-container {
//           background: rgba(0, 0, 0, 0.8);
//           border: 1px solid rgba(0, 255, 65, 0.3);
//           border-radius: 8px;
//           overflow: hidden;
//           height: 600px;
//           display: flex;
//           flex-direction: column;
//         }
        
//         .terminal-header {
//           background: rgba(0, 255, 65, 0.1);
//           padding: 8px 12px;
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           border-bottom: 1px solid rgba(0, 255, 65, 0.3);
//         }
        
//         .terminal-buttons {
//           display: flex;
//           gap: 6px;
//         }
        
//         .terminal-button {
//           width: 12px;
//           height: 12px;
//           border-radius: 50%;
//         }
        
//         .terminal-button.red { background: #ff5f56; }
//         .terminal-button.yellow { background: #ffbd2e; }
//         .terminal-button.green { background: #27c93f; }
        
//         .terminal-title {
//           font-family: monospace;
//           font-size: 12px;
//           color: rgba(0, 255, 65, 0.8);
//         }
        
//         .terminal-body {
//           flex: 1;
//           padding: 16px;
//           overflow-y: auto;
//           font-family: monospace;
//         }
        
//         .terminal-output {
//           margin-bottom: 16px;
//         }
        
//         .terminal-line {
//           color: #00ff41;
//           margin-bottom: 4px;
//           font-size: 14px;
//         }
        
//         .cursor {
//           animation: blink 1s infinite;
//         }
        
//         @keyframes blink {
//           0%, 50% { opacity: 1; }
//           51%, 100% { opacity: 0; }
//         }
        
//         .terminal-input-line {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           margin-top: 8px;
//         }
        
//         .prompt {
//           color: #00ff41;
//           font-size: 14px;
//         }
        
//         .terminal-input {
//           flex: 1;
//           background: transparent;
//           border: none;
//           color: #00ff41;
//           font-family: monospace;
//           font-size: 14px;
//           outline: none;
//         }
        
//         .category-badge {
//           display: flex;
//           align-items: center;
//           gap: 6px;
//           padding: 4px 12px;
//           background: rgba(0, 0, 0, 0.6);
//           border: 1px solid rgba(0, 255, 65, 0.2);
//           border-radius: 20px;
//           font-family: monospace;
//           font-size: 12px;
//         }
        
//         .category-dot {
//           width: 8px;
//           height: 8px;
//           border-radius: 50%;
//         }
        
//         .category-name {
//           color: rgba(0, 255, 65, 0.8);
//         }
//       `}</style>
//     </div>
//   );
// }
































// // app/skills/page.js
// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import { Terminal, Code, Database, Shield, Cpu, Zap, GitBranch, Globe, Lock, Server, Cloud, Layers } from 'lucide-react';
// import { useTransition } from '../layout';
// import ScrambledText from '@/components/ScrambledText';

// // Hexagon Component
// const Hexagon = ({ skill, level, icon, delay, isActive, onClick }) => {
//   const [isHovered, setIsHovered] = useState(false);
  
//   return (
//     <div
//       className={`hexagon-wrapper animate-fade-in cursor-pointer ${isActive ? 'active' : ''}`}
//       style={{ animationDelay: `${delay}ms` }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       onClick={onClick}
//     >
//       <div className={`hexagon ${isHovered ? 'hover' : ''} ${isActive ? 'active' : ''}`}>
//         <div className="hexagon-inner">
//           <div className="hexagon-content">
//             <div className="icon-wrapper">
//               {React.cloneElement(icon, { className: "w-5 h-5" })}
//             </div>
//             <div className="skill-name">{skill}</div>
//             <div className="skill-level">LVL {level}</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Terminal Output Component
// const TerminalOutput = ({ selectedSkill, skills }) => {
//   const [output, setOutput] = useState([]);
//   const [currentLine, setCurrentLine] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
  
//   useEffect(() => {
//     if (!selectedSkill) {
//       setOutput(['> Select a skill node to analyze...']);
//       return;
//     }
    
//     const skillData = skills[selectedSkill];
//     if (!skillData) return;
    
//     setIsTyping(true);
//     const lines = [
//       `> Analyzing ${selectedSkill}...`,
//       `> Skill Level: ${skillData.level}/10`,
//       `> Experience: ${skillData.experience}`,
//       `> Status: ${skillData.status}`,
//       `> Related Tools: ${skillData.tools.join(', ')}`,
//       `> Last Updated: ${skillData.lastUpdated}`,
//       `> Proficiency: ${skillData.proficiency}%`,
//       '> Analysis complete.'
//     ];
    
//     setOutput([]);
//     let lineIndex = 0;
    
//     const typeNextLine = () => {
//       if (lineIndex < lines.length) {
//         const line = lines[lineIndex];
//         let charIndex = 0;
        
//         const typeChar = () => {
//           if (charIndex <= line.length) {
//             setCurrentLine(line.substring(0, charIndex));
//             charIndex++;
//             setTimeout(typeChar, 20);
//           } else {
//             setOutput(prev => [...prev, line]);
//             setCurrentLine('');
//             lineIndex++;
//             setTimeout(typeNextLine, 100);
//           }
//         };
        
//         typeChar();
//       } else {
//         setIsTyping(false);
//       }
//     };
    
//     typeNextLine();
//   }, [selectedSkill, skills]);
  
//   return (
//     <div className="terminal-output">
//       {output.map((line, i) => (
//         <div key={i} className="terminal-line">{line}</div>
//       ))}
//       {currentLine && <div className="terminal-line">{currentLine}<span className="cursor">_</span></div>}
//     </div>
//   );
// };

// export default function SkillsPage() {
//   const { isTransitioning } = useTransition();
//   const [selectedSkill, setSelectedSkill] = useState(null);
//   const [commandInput, setCommandInput] = useState('');
//   const [matrixRain, setMatrixRain] = useState([]);
  
// // Custom Logo Components
// const TailwindLogo = () => (
//   <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
//     <path fillRule="evenodd" clipRule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345-.98-.99-2.114-2.134-4.594-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C8.387 16.855 9.522 18 12 18c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z" fill="#00ff41"/>
//   </svg>
// );

// const ReactLogo = () => (
//   <svg viewBox="0 0 24 24" className="w-5 h-5">
//     <g fill="#00ff41">
//       <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.62c1.714-1.628 3.312-2.526 4.11-2.526zm-8.753.001c.801 0 2.396.89 4.115 2.517a23.897 23.897 0 0 0-2.045 2.522 23.366 23.366 0 0 0-3.096.538c-.108-.498-.2-.982-.254-1.442-.225-1.865.059-3.314.721-3.698.147-.09.335-.136.56-.136zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-.803 0-2.396-.89-4.116-2.518a26.37 26.37 0 0 0 2.045-2.522 23.361 23.361 0 0 0 3.095-.537zm-11.83.001a23.32 23.32 0 0 0 3.097.538 23.802 23.802 0 0 0 2.045 2.525c-1.715 1.63-3.313 2.527-4.11 2.527-.225 0-.406-.042-.558-.128-.666-.382-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
//     </g>
//   </svg>
// );

// const NextLogo = () => (
//   <svg viewBox="0 0 24 24" className="w-5 h-5">
//     <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c2.04 0 3.959-.51 5.642-1.41l-7.927-10.923v7.548H7.5V6.75h.214L16.5 19.665A11.943 11.943 0 0024 12c0-6.627-5.373-12-12-12zm4.286 16.465l-6.571-9.047v9.047h6.571z" fill="#00ff41"/>
//   </svg>
// );

// const CanvaLogo = () => (
//   <svg viewBox="0 0 24 24" className="w-5 h-5">
//     <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.02 17.31c-.85 1.01-2.3 1.91-3.96 1.91-1.51 0-2.8-.75-3.51-1.72-.61-.82-.93-1.86-.93-3.02 0-2.86 2-5.18 4.46-5.18 1.2 0 2.28.44 3.03 1.24.41.44.72.98.91 1.61H14.9c-.19-.36-.47-.68-.85-.88-.36-.19-.77-.29-1.2-.29-1.36 0-2.47 1.29-2.47 2.88 0 .73.21 1.39.59 1.87.41.52 1.02.82 1.65.82.93 0 1.74-.52 2.14-1.33h-2.19v-1.5h4.58c0 1.03-.29 2.03-.95 2.89z" fill="#00ff41"/>
//   </svg>
// );

// const NodeLogo = () => (
//   <svg viewBox="0 0 24 24" className="w-5 h-5">
//     <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.602.065-.037.151-.023.218.016l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.135-.141.135-.241V6.921c0-.103-.055-.198-.137-.246l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.075 6.68c-.084.048-.139.144-.139.245v10.142c0 .1.055.194.137.241l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.924-.943-.924-1.609V6.921c0-.665.355-1.283.924-1.611L11.073.236a1.882 1.882 0 0 1 1.85 0l8.794 5.074c.57.329.924.946.924 1.611v10.145c0 .666-.354 1.278-.924 1.609l-8.794 5.078c-.28.163-.599.247-.925.247zm2.718-6.993c-3.848 0-4.653-1.766-4.653-3.25 0-.14.114-.254.256-.254h1.135c.128 0 .235.093.253.219.173 1.17.691 1.761 3.01 1.761 1.851 0 2.639-.419 2.639-1.402 0-.565-.225-1.007-3.103-1.296-2.408-.243-3.896-.77-3.896-2.697 0-1.778 1.5-2.836 4.012-2.836 2.823 0 4.218.98 4.394 3.083a.256.256 0 0 1-.255.278h-1.143a.252.252 0 0 1-.247-.199c-.275-1.22-.94-1.611-2.749-1.611-2.024 0-2.26.705-2.26 1.234 0 .641.277.828 3.006 1.19 2.7.358 3.985.865 3.985 2.773 0 1.921-1.603 3.022-4.397 3.022z" fill="#00ff41"/>
//   </svg>
// );

// const ExpressLogo = () => (
//   <svg viewBox="0 0 24 24" className="w-5 h-5">
//     <path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" fill="#00ff41"/>
//   </svg>
// );

// const FramerLogo = () => (
//   <svg viewBox="0 0 24 24" className="w-5 h-5">
//     <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill="#00ff41"/>
//   </svg>
// );

// const skills = {
//     "HTML": {
//       level: 9,
//       icon: <Code className="w-5 h-5 text-green-400" />,
//       category: "frontend",
//       experience: "5+ years",
//       status: "EXPERT",
//       tools: ["HTML5", "Semantic HTML", "SEO", "Accessibility"],
//       lastUpdated: "2024.12.20",
//       proficiency: 95
//     },
//     "CSS": {
//       level: 9,
//       icon: <Layers className="w-5 h-5 text-green-400" />,
//       category: "frontend",
//       experience: "5+ years",
//       status: "EXPERT",
//       tools: ["Flexbox", "Grid", "Animations", "Responsive"],
//       lastUpdated: "2024.12.20",
//       proficiency: 90
//     },
//     "JavaScript": {
//       level: 8,
//       icon: <Terminal className="w-5 h-5 text-green-400" />,
//       category: "language",
//       experience: "4+ years",
//       status: "ADVANCED",
//       tools: ["ES6+", "Async/Await", "DOM API", "Modules"],
//       lastUpdated: "2024.12.22",
//       proficiency: 85
//     },
//     "Tailwind": {
//       level: 8,
//       icon: <TailwindLogo />,
//       category: "frontend",
//       experience: "2+ years",
//       status: "ADVANCED",
//       tools: ["JIT", "Custom Config", "Plugins", "DaisyUI"],
//       lastUpdated: "2024.12.15",
//       proficiency: 85
//     },
//     "React": {
//       level: 8,
//       icon: <ReactLogo />,
//       category: "frontend",
//       experience: "3+ years",
//       status: "ADVANCED",
//       tools: ["Hooks", "Context API", "Redux", "React Router"],
//       lastUpdated: "2024.12.20",
//       proficiency: 85
//     },
//     "Node.js": {
//       level: 7,
//       icon: <NodeLogo />,
//       category: "backend",
//       experience: "3+ years",
//       status: "PROFICIENT",
//       tools: ["NPM", "REST APIs", "File System", "Streams"],
//       lastUpdated: "2024.12.10",
//       proficiency: 75
//     },
//     "Express.js": {
//       level: 7,
//       icon: <ExpressLogo />,
//       category: "backend",
//       experience: "3+ years",
//       status: "PROFICIENT",
//       tools: ["Middleware", "Routing", "Error Handling", "JWT"],
//       lastUpdated: "2024.12.10",
//       proficiency: 75
//     },
//     "MongoDB": {
//       level: 7,
//       icon: <Database className="w-5 h-5 text-green-400" />,
//       category: "database",
//       experience: "2+ years",
//       status: "PROFICIENT",
//       tools: ["Mongoose", "Aggregation", "Indexing", "Atlas"],
//       lastUpdated: "2024.12.05",
//       proficiency: 70
//     },
//     "Next.js": {
//       level: 7,
//       icon: <NextLogo />,
//       category: "frontend",
//       experience: "2+ years",
//       status: "PROFICIENT",
//       tools: ["App Router", "SSR", "SSG", "API Routes"],
//       lastUpdated: "2024.12.18",
//       proficiency: 75
//     },
//     "Auth.js": {
//       level: 6,
//       icon: <Lock className="w-5 h-5 text-green-400" />,
//       category: "security",
//       experience: "1+ years",
//       status: "INTERMEDIATE",
//       tools: ["NextAuth", "OAuth", "JWT", "Session Management"],
//       lastUpdated: "2024.11.30",
//       proficiency: 65
//     },
//     "R3F": {
//       level: 7,
//       icon: <Globe className="w-5 h-5 text-green-400" />,
//       category: "frontend",
//       experience: "2+ years",
//       status: "PROFICIENT",
//       tools: ["Three.js", "3D Graphics", "WebGL", "Drei"],
//       lastUpdated: "2024.12.18",
//       proficiency: 70
//     },
//     "React Native": {
//       level: 6,
//       icon: <Code className="w-5 h-5 text-green-400" />,
//       category: "mobile",
//       experience: "1+ years",
//       status: "INTERMEDIATE",
//       tools: ["Expo", "Navigation", "Native APIs", "StyleSheet"],
//       lastUpdated: "2024.11.15",
//       proficiency: 60
//     },
//     "GSAP": {
//       level: 8,
//       icon: <Zap className="w-5 h-5 text-green-400" />,
//       category: "animation",
//       experience: "3+ years",
//       status: "ADVANCED",
//       tools: ["Timeline", "ScrollTrigger", "Morphing", "Easing"],
//       lastUpdated: "2024.12.12",
//       proficiency: 80
//     },
//     "Framer Motion": {
//       level: 7,
//       icon: <FramerLogo />,
//       category: "animation",
//       experience: "2+ years",
//       status: "PROFICIENT",
//       tools: ["Gestures", "Variants", "Layout", "AnimatePresence"],
//       lastUpdated: "2024.12.08",
//       proficiency: 75
//     },
//     "Git & GitHub": {
//       level: 8,
//       icon: <GitBranch className="w-5 h-5 text-green-400" />,
//       category: "tools",
//       experience: "4+ years",
//       status: "ADVANCED",
//       tools: ["Branching", "Pull Requests", "Actions", "Pages"],
//       lastUpdated: "2024.12.22",
//       proficiency: 85
//     },
//     "Canva": {
//       level: 7,
//       icon: <CanvaLogo />,
//       category: "design",
//       experience: "3+ years",
//       status: "PROFICIENT",
//       tools: ["Templates", "Brand Kit", "Video Editing", "Presentations"],
//       lastUpdated: "2024.12.15",
//       proficiency: 75
//     },
//     "C++": {
//       level: 6,
//       icon: <Cpu className="w-5 h-5 text-green-400" />,
//       category: "language",
//       experience: "2+ years",
//       status: "INTERMEDIATE",
//       tools: ["STL", "OOP", "Pointers", "Data Structures"],
//       lastUpdated: "2024.10.20",
//       proficiency: 60
//     }
//   };
  
//   // Matrix rain effect
//   useEffect(() => {
//     const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
//     const columns = 20;
//     const rain = [];
    
//     for (let i = 0; i < columns; i++) {
//       rain.push({
//         x: i * 50,
//         y: Math.random() * -100,
//         speed: Math.random() * 2 + 1,
//         chars: Array.from({ length: 15 }, () => chars[Math.floor(Math.random() * chars.length)])
//       });
//     }
    
//     setMatrixRain(rain);
//   }, []);
  
//   const handleCommand = (e) => {
//     if (e.key === 'Enter' && commandInput.trim()) {
//       const cmd = commandInput.toLowerCase().trim();
//       if (cmd === 'list all') {
//         // Show all skills
//       } else if (cmd.startsWith('analyze ')) {
//         const skillName = cmd.replace('analyze ', '');
//         const matchedSkill = Object.keys(skills).find(s => s.toLowerCase() === skillName);
//         if (matchedSkill) {
//           setSelectedSkill(matchedSkill);
//         }
//       } else if (cmd === 'clear') {
//         setSelectedSkill(null);
//       }
//       setCommandInput('');
//     }
//   };
  
//   const hexagonPositions = [
//     { top: '5%', left: '10%' },    // Row 1 - 4 skills
//     { top: '5%', left: '30%' },
//     { top: '5%', left: '50%' },
//     { top: '5%', left: '70%' },
//     { top: '18%', left: '0%' },    // Row 2 - 5 skills  
//     { top: '18%', left: '20%' },
//     { top: '18%', left: '40%' },
//     { top: '18%', left: '60%' },
//     { top: '18%', left: '80%' },
//     { top: '31%', left: '10%' },   // Row 3 - 4 skills
//     { top: '31%', left: '30%' },
//     { top: '31%', left: '50%' },
//     { top: '31%', left: '70%' },
//     { top: '44%', left: '20%' },   // Row 4 - 4 skills
//     { top: '44%', left: '40%' },
//     { top: '44%', left: '60%' },
//     { top: '57%', left: '40%' },   // Row 5 - 1 skill (centered)
//   ];

//   return (
//     <div className="min-h-screen pt-32 px-6 relative overflow-hidden">
//       {/* Matrix Rain Background */}
//       <div className="matrix-rain">
//         {matrixRain.map((column, i) => (
//           <div
//             key={i}
//             className="matrix-column"
//             style={{
//               left: `${column.x}px`,
//               animationDuration: `${10 / column.speed}s`
//             }}
//           >
//             {column.chars.map((char, j) => (
//               <span
//                 key={j}
//                 style={{
//                   opacity: 1 - (j / column.chars.length),
//                   color: j === 0 ? '#00ff41' : '#00ff4140'
//                 }}
//               >
//                 {char}
//               </span>
//             ))}
//           </div>
//         ))}
//       </div>
      
//       <div className="max-w-7xl mx-auto relative z-10">
//         <h2 className="text-5xl font-mono font-bold text-green-400 mb-4">
//           <span className="text-gray-400">&gt;</span> <ScrambledText text="SKILL_MATRIX.EXE" />
//         </h2>
//         <p className="text-gray-400 font-mono mb-8">
//           <ScrambledText text="Click nodes to analyze skill data | Use terminal for advanced queries" />
//         </p>
        
//         <div className="grid lg:grid-cols-2 gap-8">
//           {/* Hexagonal Skill Grid */}
//           <div className="relative h-[600px] skill-grid">
//             {Object.entries(skills).map(([skillName, skillData], index) => (
//               <div
//                 key={skillName}
//                 className="absolute"
//                 style={hexagonPositions[index]}
//               >
//                 <Hexagon
//                   skill={skillName}
//                   level={skillData.level}
//                   icon={skillData.icon}
//                   delay={index * 100}
//                   isActive={selectedSkill === skillName}
//                   onClick={() => setSelectedSkill(skillName)}
//                 />
//               </div>
//             ))}
//           </div>
          
//           {/* Terminal Interface */}
//           <div className="terminal-container">
//             <div className="terminal-header">
//               <div className="terminal-buttons">
//                 <div className="terminal-button red"></div>
//                 <div className="terminal-button yellow"></div>
//                 <div className="terminal-button green"></div>
//               </div>
//               <span className="terminal-title">skill_analyzer.sh</span>
//             </div>
//             <div className="terminal-body">
//               <TerminalOutput selectedSkill={selectedSkill} skills={skills} />
//               <div className="terminal-input-line">
//                 <span className="prompt">nexus@skills:~$</span>
//                 <input
//                   type="text"
//                   value={commandInput}
//                   onChange={(e) => setCommandInput(e.target.value)}
//                   onKeyDown={handleCommand}
//                   className="terminal-input"
//                   placeholder="list all | analyze [skill] | clear"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Skill Categories Legend */}
//         <div className="mt-12 flex flex-wrap gap-4 justify-center">
//           {['frontend', 'backend', 'language', 'database', 'security', 'mobile', 'animation', 'design', 'tools'].map(category => (
//             <div key={category} className="category-badge">
//               <span className="category-dot" style={{ backgroundColor: 
//                 category === 'frontend' ? '#00ff41' :
//                 category === 'backend' ? '#00ffaa' :
//                 category === 'security' ? '#ff4141' :
//                 category === 'database' ? '#41aaff' :
//                 category === 'mobile' ? '#ff41ff' :
//                 category === 'animation' ? '#ffff41' :
//                 category === 'design' ? '#ff9141' :
//                 category === 'tools' ? '#41ffff' :
//                 '#aaaaaa'
//               }}></span>
//               <span className="category-name">{category.toUpperCase()}</span>
//             </div>
//           ))}
//         </div>
//       </div>
      
//       <style jsx>{`
//         .matrix-rain {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           overflow: hidden;
//           opacity: 0.1;
//           z-index: 1;
//         }
        
//         .matrix-column {
//           position: absolute;
//           font-family: monospace;
//           font-size: 20px;
//           animation: matrix-fall linear infinite;
//         }
        
//         @keyframes matrix-fall {
//           0% { transform: translateY(-100%); }
//           100% { transform: translateY(100vh); }
//         }
        
//         .hexagon-wrapper {
//           width: 90px;
//           height: 100px;
//           position: relative;
//           transition: transform 0.3s ease;
//         }
        
//         .hexagon-wrapper:hover {
//           transform: scale(1.1);
//           z-index: 10;
//         }
        
//         .hexagon {
//           width: 90px;
//           height: 52px;
//           background: rgba(0, 255, 65, 0.1);
//           position: relative;
//           border: 2px solid rgba(0, 255, 65, 0.3);
//           margin: 26px 0;
//           transition: all 0.3s ease;
//         }
        
//         .hexagon:before,
//         .hexagon:after {
//           content: "";
//           position: absolute;
//           width: 0;
//           border-left: 45px solid transparent;
//           border-right: 45px solid transparent;
//           transition: all 0.3s ease;
//         }
        
//         .hexagon:before {
//           bottom: 100%;
//           border-bottom: 26px solid rgba(0, 255, 65, 0.1);
//           border-bottom-color: inherit;
//         }
        
//         .hexagon:after {
//           top: 100%;
//           border-top: 26px solid rgba(0, 255, 65, 0.1);
//           border-top-color: inherit;
//         }
        
//         .hexagon.hover {
//           background: rgba(0, 255, 65, 0.2);
//           border-color: rgba(0, 255, 65, 0.6);
//           box-shadow: 0 0 30px rgba(0, 255, 65, 0.5);
//         }
        
//         .hexagon.active {
//           background: rgba(0, 255, 65, 0.3);
//           border-color: rgba(0, 255, 65, 0.8);
//           box-shadow: 0 0 40px rgba(0, 255, 65, 0.7);
//         }
        
//         .hexagon-inner {
//           width: 100%;
//           height: 100%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }
        
//         .hexagon-content {
//           text-align: center;
//           color: #00ff41;
//           font-family: monospace;
//         }
        
//         .icon-wrapper {
//           margin-bottom: 4px;
//           color: #00ff41;
//         }
        
//         .hexagon-content svg {
//           color: #00ff41 !important;
//           fill: #00ff41 !important;
//         }
        
//         .hexagon-content svg path {
//           fill: #00ff41 !important;
//         }
        
//         .skill-name {
//           font-size: 11px;
//           font-weight: bold;
//         }
        
//         .skill-level {
//           font-size: 9px;
//           opacity: 0.8;
//         }
        
//         .terminal-container {
//           background: rgba(0, 0, 0, 0.8);
//           border: 1px solid rgba(0, 255, 65, 0.3);
//           border-radius: 8px;
//           overflow: hidden;
//           height: 600px;
//           display: flex;
//           flex-direction: column;
//         }
        
//         .terminal-header {
//           background: rgba(0, 255, 65, 0.1);
//           padding: 8px 12px;
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           border-bottom: 1px solid rgba(0, 255, 65, 0.3);
//         }
        
//         .terminal-buttons {
//           display: flex;
//           gap: 6px;
//         }
        
//         .terminal-button {
//           width: 12px;
//           height: 12px;
//           border-radius: 50%;
//         }
        
//         .terminal-button.red { background: #ff5f56; }
//         .terminal-button.yellow { background: #ffbd2e; }
//         .terminal-button.green { background: #27c93f; }
        
//         .terminal-title {
//           font-family: monospace;
//           font-size: 12px;
//           color: rgba(0, 255, 65, 0.8);
//         }
        
//         .terminal-body {
//           flex: 1;
//           padding: 16px;
//           overflow-y: auto;
//           font-family: monospace;
//         }
        
//         .terminal-output {
//           margin-bottom: 16px;
//         }
        
//         .terminal-line {
//           color: #00ff41;
//           margin-bottom: 4px;
//           font-size: 14px;
//         }
        
//         .cursor {
//           animation: blink 1s infinite;
//         }
        
//         @keyframes blink {
//           0%, 50% { opacity: 1; }
//           51%, 100% { opacity: 0; }
//         }
        
//         .terminal-input-line {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           margin-top: 8px;
//         }
        
//         .prompt {
//           color: #00ff41;
//           font-size: 14px;
//         }
        
//         .terminal-input {
//           flex: 1;
//           background: transparent;
//           border: none;
//           color: #00ff41;
//           font-family: monospace;
//           font-size: 14px;
//           outline: none;
//         }
        
//         .category-badge {
//           display: flex;
//           align-items: center;
//           gap: 6px;
//           padding: 4px 12px;
//           background: rgba(0, 0, 0, 0.6);
//           border: 1px solid rgba(0, 255, 65, 0.2);
//           border-radius: 20px;
//           font-family: monospace;
//           font-size: 12px;
//         }
        
//         .category-dot {
//           width: 8px;
//           height: 8px;
//           border-radius: 50%;
//         }
        
//         .category-name {
//           color: rgba(0, 255, 65, 0.8);
//         }
//       `}</style>
//     </div>
//   );
// }























// BEST -------------------------------------------------------------------------------------------------------------
// app/skills/page.js
// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import { Terminal, Code, Database, Shield, Cpu, Zap, GitBranch, Globe, Lock, Server, Cloud, Layers } from 'lucide-react';
// import { useTransition } from '../layout';
// import ScrambledText from '@/components/ScrambledText';

// // Hexagon Component
// const Hexagon = ({ skill, level, icon, delay, isActive, onClick }) => {
//   const [isHovered, setIsHovered] = useState(false);
  
//   return (
//     <div
//       className={`hexagon-wrapper animate-fade-in cursor-pointer ${isActive ? 'active' : ''}`}
//       style={{ animationDelay: `${delay}ms` }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       onClick={onClick}
//     >
//       <div className={`hexagon ${isHovered ? 'hover' : ''} ${isActive ? 'active' : ''}`}>
//         <div className="hexagon-inner">
//           <div className="hexagon-content">
//             <div className="icon-wrapper">
//               {icon}
//             </div>
//             <div className="skill-name">{skill}</div>
//             <div className="skill-level">Lvl {level}</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Terminal Output Component
// const TerminalOutput = ({ selectedSkill, skills }) => {
//   const [output, setOutput] = useState([]);
//   const [currentLine, setCurrentLine] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
  
//   useEffect(() => {
//     if (!selectedSkill) {
//       setOutput(['> Select a skill node to analyze...']);
//       return;
//     }
    
//     const skillData = skills[selectedSkill];
//     if (!skillData) return;
    
//     setIsTyping(true);
//     const lines = [
//       `> Analyzing ${selectedSkill}...`,
//       `> Skill Level: ${skillData.level}/10`,
//       `> Experience: ${skillData.experience}`,
//       `> Status: ${skillData.status}`,
//       `> Related Tools: ${skillData.tools.join(', ')}`,
//       `> Last Updated: ${skillData.lastUpdated}`,
//       `> Proficiency: ${skillData.proficiency}%`,
//       '> Analysis complete.'
//     ];
    
//     setOutput([]);
//     let lineIndex = 0;
    
//     const typeNextLine = () => {
//       if (lineIndex < lines.length) {
//         const line = lines[lineIndex];
//         let charIndex = 0;
        
//         const typeChar = () => {
//           if (charIndex <= line.length) {
//             setCurrentLine(line.substring(0, charIndex));
//             charIndex++;
//             setTimeout(typeChar, 20);
//           } else {
//             setOutput(prev => [...prev, line]);
//             setCurrentLine('');
//             lineIndex++;
//             setTimeout(typeNextLine, 100);
//           }
//         };
        
//         typeChar();
//       } else {
//         setIsTyping(false);
//       }
//     };
    
//     typeNextLine();
//   }, [selectedSkill, skills]);
  
//   return (
//     <div className="terminal-output">
//       {output.map((line, i) => (
//         <div key={i} className="terminal-line">{line}</div>
//       ))}
//       {currentLine && <div className="terminal-line">{currentLine}<span className="cursor">_</span></div>}
//     </div>
//   );
// };

// export default function SkillsPage() {
//   const { isTransitioning } = useTransition();
//   const [selectedSkill, setSelectedSkill] = useState(null);
//   const [commandInput, setCommandInput] = useState('');
//   const [matrixRain, setMatrixRain] = useState([]);
  
// // Custom Logo Components - with dynamic size and color support
// const TailwindLogo = ({ className = "w-6 h-6", color = "#00ff41" }) => (
//   <svg viewBox="0 0 24 24" fill="none" className={className}>
//     <path fillRule="evenodd" clipRule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345-.98-.99-2.114-2.134-4.594-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C8.387 16.855 9.522 18 12 18c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z" fill={color}/>
//   </svg>
// );

// const ReactLogo = ({ className = "w-6 h-6", color = "#00ff41" }) => (
//   <svg viewBox="0 0 24 24" className={className}>
//     <g fill={color}>
//       <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.62c1.714-1.628 3.312-2.526 4.11-2.526zm-8.753.001c.801 0 2.396.89 4.115 2.517a23.897 23.897 0 0 0-2.045 2.522 23.366 23.366 0 0 0-3.096.538c-.108-.498-.2-.982-.254-1.442-.225-1.865.059-3.314.721-3.698.147-.09.335-.136.56-.136zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-.803 0-2.396-.89-4.116-2.518a26.37 26.37 0 0 0 2.045-2.522 23.361 23.361 0 0 0 3.095-.537zm-11.83.001a23.32 23.32 0 0 0 3.097.538 23.802 23.802 0 0 0 2.045 2.525c-1.715 1.63-3.313 2.527-4.11 2.527-.225 0-.406-.042-.558-.128-.666-.382-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
//     </g>
//   </svg>
// );

// const NextLogo = ({ className = "w-6 h-6", color = "" }) => (
//   <svg 
//     viewBox="0 0 180 180" 
//     className={className} 
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <mask
//       id="mask0_408_134"
//       style={{ maskType: "alpha" }}
//       maskUnits="userSpaceOnUse"
//       x="0"
//       y="0"
//       width="180"
//       height="180"
//     >
//       <circle cx="90" cy="90" r="90" fill="black" />
//     </mask>
//     <g mask="url(#mask0_408_134)">
//       <circle cx="90" cy="90" r="90" fill={color} />
//       <path
//         d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
//         fill="url(#paint0_linear_408_134)"
//       />
//       <rect
//         x="115"
//         y="54"
//         width="12"
//         height="72"
//         fill="url(#paint1_linear_408_134)"
//       />
//     </g>
//     <defs>
//       <linearGradient
//         id="paint0_linear_408_134"
//         x1="109"
//         y1="116.5"
//         x2="144.5"
//         y2="160.5"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#00ff41" />
//         <stop offset="1" stopColor="#00ff41" stopOpacity="0" />
//       </linearGradient>
//       <linearGradient
//         id="paint1_linear_408_134"
//         x1="121"
//         y1="54"
//         x2="120.799"
//         y2="106.875"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#00ff41" />
//         <stop offset="1" stopColor="#00ff41" stopOpacity="0" />
//       </linearGradient>
//     </defs>
//   </svg>
// );

// const CanvaLogo = ({ className = "w-6 h-6", color = "#00C4CC" }) => ( // Canva's official turquoise color
//   <svg 
//     viewBox="0 0 100 100" 
//     className={className} 
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path 
//       d="M50 5C25.1878 5 5 25.1878 5 50C5 74.8122 25.1878 95 50 95C62.8956 95 74.5615 89.5171 82.6777 80.6066C83.9134 79.2433 84.0294 77.1776 82.9289 75.6776C81.4516 73.6552 78.5403 73.3351 76.6559 74.9435C70.3981 80.0923 62.5209 83 54 83C35.2223 83 20 67.7777 20 49C20 30.2223 35.2223 15 54 15C65.4688 15 75.6244 21.0547 81.2617 30.1797C82.2852 31.8867 84.4852 32.4539 86.1922 31.4304C87.8992 30.4069 88.4664 28.2069 87.4429 26.4999C79.7585 13.8516 66.3662 5 50 5Z"
//       fill={color}
//       fillRule="evenodd"
//       clipRule="evenodd"
//     />
//   </svg>
// );

// const NodeLogo = ({ className = "w-6 h-6", color = "#00ff41" }) => (
//   <svg viewBox="0 0 24 24" className={className}>
//     <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.602.065-.037.151-.023.218.016l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.135-.141.135-.241V6.921c0-.103-.055-.198-.137-.246l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.075 6.68c-.084.048-.139.144-.139.245v10.142c0 .1.055.194.137.241l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.924-.943-.924-1.609V6.921c0-.665.355-1.283.924-1.611L11.073.236a1.882 1.882 0 0 1 1.85 0l8.794 5.074c.57.329.924.946.924 1.611v10.145c0 .666-.354 1.278-.924 1.609l-8.794 5.078c-.28.163-.599.247-.925.247zm2.718-6.993c-3.848 0-4.653-1.766-4.653-3.25 0-.14.114-.254.256-.254h1.135c.128 0 .235.093.253.219.173 1.17.691 1.761 3.01 1.761 1.851 0 2.639-.419 2.639-1.402 0-.565-.225-1.007-3.103-1.296-2.408-.243-3.896-.77-3.896-2.697 0-1.778 1.5-2.836 4.012-2.836 2.823 0 4.218.98 4.394 3.083a.256.256 0 0 1-.255.278h-1.143a.252.252 0 0 1-.247-.199c-.275-1.22-.94-1.611-2.749-1.611-2.024 0-2.26.705-2.26 1.234 0 .641.277.828 3.006 1.19 2.7.358 3.985.865 3.985 2.773 0 1.921-1.603 3.022-4.397 3.022z" fill={color}/>
//   </svg>
// );

// const ExpressLogo = ({ className = "w-6 h-6", color = "#00ff41" }) => (
//   <svg viewBox="0 0 24 24" className={className}>
//     <path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" fill={color}/>
//   </svg>
// );

// const FramerLogo = ({ className = "w-6 h-6", color = "#00ff41" }) => (
//   <svg viewBox="0 0 24 24" className={className}>
//     <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill={color}/>
//   </svg>
// );

// const skills = {
//     "HTML": {
//       level: 9,
//       icon: <Code className="w-5 h-5 text-green-400" />,
//       category: "frontend",
//       experience: "5+ years",
//       status: "EXPERT",
//       tools: ["HTML5", "Semantic HTML", "SEO", "Accessibility"],
//       lastUpdated: "2024.12.20",
//       proficiency: 95
//     },
//     "CSS": {
//       level: 9,
//       icon: <Layers className="w-5 h-5 text-green-400" />,
//       category: "frontend",
//       experience: "5+ years",
//       status: "EXPERT",
//       tools: ["Flexbox", "Grid", "Animations", "Responsive"],
//       lastUpdated: "2024.12.20",
//       proficiency: 90
//     },
//     "JavaScript": {
//       level: 8,
//       icon: <Terminal className="w-5 h-5 text-green-400" />,
//       category: "language",
//       experience: "4+ years",
//       status: "ADVANCED",
//       tools: ["ES6+", "Async/Await", "DOM API", "Modules"],
//       lastUpdated: "2024.12.22",
//       proficiency: 85
//     },
//     "Tailwind": {
//       level: 8,
//       icon: <TailwindLogo className="w-5 h-5" />, // Change size here: w-8 h-8, w-10 h-10, etc.
//       category: "frontend",
//       experience: "2+ years",
//       status: "ADVANCED",
//       tools: ["JIT", "Custom Config", "Plugins", "DaisyUI"],
//       lastUpdated: "2024.12.15",
//       proficiency: 85
//     },
//     "React": {
//       level: 8,
//       icon: <ReactLogo className="w-5 h-5" />, // Color change: <ReactLogo className="w-5 h-5" color="#61DAFB" />
//       category: "frontend",
//       experience: "3+ years",
//       status: "ADVANCED",
//       tools: ["Hooks", "Context API", "Redux", "React Router"],
//       lastUpdated: "2024.12.20",
//       proficiency: 85
//     },
//     "Node.js": {
//       level: 7,
//       icon: <NodeLogo className="w-5 h-5" />,
//       category: "backend",
//       experience: "3+ years",
//       status: "PROFICIENT",
//       tools: ["NPM", "REST APIs", "File System", "Streams"],
//       lastUpdated: "2024.12.10",
//       proficiency: 75
//     },
//     "Express.js": {
//       level: 7,
//       icon: <ExpressLogo className="w-5 h-5" />,
//       category: "backend",
//       experience: "3+ years",
//       status: "PROFICIENT",
//       tools: ["Middleware", "Routing", "Error Handling", "JWT"],
//       lastUpdated: "2024.12.10",
//       proficiency: 75
//     },
//     "MongoDB": {
//       level: 7,
//       icon: <Database className="w-5 h-5 text-green-400" />,
//       category: "database",
//       experience: "2+ years",
//       status: "PROFICIENT",
//       tools: ["Mongoose", "Aggregation", "Indexing", "Atlas"],
//       lastUpdated: "2024.12.05",
//       proficiency: 70
//     },
//     "Next.js": {
//       level: 7,
//       icon: <NextLogo className="w-7 h-7" />,
//       category: "frontend",
//       experience: "2+ years",
//       status: "PROFICIENT",
//       tools: ["App Router", "SSR", "SSG", "API Routes"],
//       lastUpdated: "2024.12.18",
//       proficiency: 75
//     },
//     "Auth.js": {
//       level: 6,
//       icon: <Lock className="w-5 h-5 text-green-400" />,
//       category: "security",
//       experience: "1+ years",
//       status: "INTERMEDIATE",
//       tools: ["NextAuth", "OAuth", "JWT", "Session Management"],
//       lastUpdated: "2024.11.30",
//       proficiency: 65
//     },
//     "R3F": {
//       level: 7,
//       icon: <Globe className="w-5 h-5 text-green-400" />,
//       category: "frontend",
//       experience: "2+ years",
//       status: "PROFICIENT",
//       tools: ["Three.js", "3D Graphics", "WebGL", "Drei"],
//       lastUpdated: "2024.12.18",
//       proficiency: 70
//     },
//     "React Native": {
//       level: 6,
//       icon: <Code className="w-5 h-5 text-green-400" />,
//       category: "mobile",
//       experience: "1+ years",
//       status: "INTERMEDIATE",
//       tools: ["Expo", "Navigation", "Native APIs", "StyleSheet"],
//       lastUpdated: "2024.11.15",
//       proficiency: 60
//     },
//     "GSAP": {
//       level: 8,
//       icon: <Zap className="w-5 h-5 text-green-400" />,
//       category: "animation",
//       experience: "3+ years",
//       status: "ADVANCED",
//       tools: ["Timeline", "ScrollTrigger", "Morphing", "Easing"],
//       lastUpdated: "2024.12.12",
//       proficiency: 80
//     },
//     "Framer Motion": {
//       level: 7,
//       icon: <FramerLogo className="w-5 h-5" />,
//       category: "animation",
//       experience: "2+ years",
//       status: "PROFICIENT",
//       tools: ["Gestures", "Variants", "Layout", "AnimatePresence"],
//       lastUpdated: "2024.12.08",
//       proficiency: 75
//     },
//     "Git & GitHub": {
//       level: 8,
//       icon: <GitBranch className="w-5 h-5 text-green-400" />,
//       category: "tools",
//       experience: "4+ years",
//       status: "ADVANCED",
//       tools: ["Branching", "Pull Requests", "Actions", "Pages"],
//       lastUpdated: "2024.12.22",
//       proficiency: 85
//     },
//     "Canva": {
//       level: 7,
//       icon: <CanvaLogo className="w-5 h-5" color="#00ff41" />,
//       category: "design",
//       experience: "3+ years",
//       status: "PROFICIENT",
//       tools: ["Templates", "Brand Kit", "Video Editing", "Presentations"],
//       lastUpdated: "2024.12.15",
//       proficiency: 75
//     },
//     "C++": {
//       level: 6,
//       icon: <Cpu className="w-5 h-5 text-green-400" />,
//       category: "language",
//       experience: "2+ years",
//       status: "INTERMEDIATE",
//       tools: ["STL", "OOP", "Pointers", "Data Structures"],
//       lastUpdated: "2024.10.20",
//       proficiency: 60
//     }
//   };
  
//   // Matrix rain effect
//   useEffect(() => {
//     const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
//     const columns = 20;
//     const rain = [];
    
//     for (let i = 0; i < columns; i++) {
//       rain.push({
//         x: i * 50,
//         y: Math.random() * -100,
//         speed: Math.random() * 2 + 1,
//         chars: Array.from({ length: 15 }, () => chars[Math.floor(Math.random() * chars.length)])
//       });
//     }
    
//     setMatrixRain(rain);
//   }, []);
  
//   const handleCommand = (e) => {
//     if (e.key === 'Enter' && commandInput.trim()) {
//       const cmd = commandInput.toLowerCase().trim();
//       if (cmd === 'list all') {
//         // Show all skills
//       } else if (cmd.startsWith('analyze ')) {
//         const skillName = cmd.replace('analyze ', '');
//         const matchedSkill = Object.keys(skills).find(s => s.toLowerCase() === skillName);
//         if (matchedSkill) {
//           setSelectedSkill(matchedSkill);
//         }
//       } else if (cmd === 'clear') {
//         setSelectedSkill(null);
//       }
//       setCommandInput('');
//     }
//   };
  
//   const hexagonPositions = [
//     { top: '5%', left: '10%' },    // Row 1 - 4 skills
//     { top: '5%', left: '30%' },
//     { top: '5%', left: '50%' },
//     { top: '5%', left: '70%' },
//     { top: '18%', left: '0%' },    // Row 2 - 5 skills  
//     { top: '18%', left: '20%' },
//     { top: '18%', left: '40%' },
//     { top: '18%', left: '60%' },
//     { top: '16.7%', left: '80%' },
//     { top: '31%', left: '10%' },   // Row 3 - 4 skills
//     { top: '31%', left: '30%' },
//     { top: '31%', left: '50%' },
//     { top: '31%', left: '70%' },
//     { top: '44%', left: '20%' },   // Row 4 - 4 skills
//     { top: '44%', left: '40%' },
//     { top: '44%', left: '60%' },
//     { top: '57%', left: '40%' },   // Row 5 - 1 skill (centered)
//   ];

//   return (
//     <div className="min-h-screen pt-32 px-6 relative overflow-hidden">
//       {/* Matrix Rain Background */}
//       <div className="matrix-rain">
//         {matrixRain.map((column, i) => (
//           <div
//             key={i}
//             className="matrix-column"
//             style={{
//               left: `${column.x}px`,
//               animationDuration: `${10 / column.speed}s`
//             }}
//           >
//             {column.chars.map((char, j) => (
//               <span
//                 key={j}
//                 style={{
//                   opacity: 1 - (j / column.chars.length),
//                   color: j === 0 ? '#00ff41' : '#00ff4140'
//                 }}
//               >
//                 {char}
//               </span>
//             ))}
//           </div>
//         ))}
//       </div>
      
//       <div className="max-w-7xl mx-auto relative z-10">
//         <h2 className="text-5xl font-mono font-bold text-green-400 mb-4">
//           <span className="text-gray-400">&gt;</span> <ScrambledText text="SKILL_MATRIX.EXE" />
//         </h2>
//         <p className="text-gray-400 font-mono mb-8">
//           <ScrambledText text="Click nodes to analyze skill data | Use terminal for advanced queries" />
//         </p>
        
//         <div className="grid lg:grid-cols-2 gap-8">
//           {/* Hexagonal Skill Grid */}
//           <div className="relative h-[600px] skill-grid">
//             {Object.entries(skills).map(([skillName, skillData], index) => (
//               <div
//                 key={skillName}
//                 className="absolute"
//                 style={hexagonPositions[index]}
//               >
//                 <Hexagon
//                   skill={skillName}
//                   level={skillData.level}
//                   icon={skillData.icon}
//                   delay={index * 100}
//                   isActive={selectedSkill === skillName}
//                   onClick={() => setSelectedSkill(skillName)}
//                 />
//               </div>
//             ))}
//           </div>
          
//           {/* Terminal Interface */}
//           <div className="terminal-container">
//             <div className="terminal-header">
//               <div className="terminal-buttons">
//                 <div className="terminal-button red"></div>
//                 <div className="terminal-button yellow"></div>
//                 <div className="terminal-button green"></div>
//               </div>
//               <span className="terminal-title">skill_analyzer.sh</span>
//             </div>
//             <div className="terminal-body">
//               <TerminalOutput selectedSkill={selectedSkill} skills={skills} />
//               <div className="terminal-input-line">
//                 <span className="prompt">rizwi@skills:~$</span>
//                 <input
//                   type="text"
//                   value={commandInput}
//                   onChange={(e) => setCommandInput(e.target.value)}
//                   onKeyDown={handleCommand}
//                   className="terminal-input"
//                   placeholder="list all | analyze [skill] | clear"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Skill Categories Legend */}
//         <div className="mt-12 flex flex-wrap gap-4 justify-center">
//           {['frontend', 'backend', 'language', 'database', 'security', 'mobile', 'animation', 'design', 'tools'].map(category => (
//             <div key={category} className="category-badge">
//               <span className="category-dot" style={{ backgroundColor: 
//                 category === 'frontend' ? '#00ff41' :
//                 category === 'backend' ? '#00ffaa' :
//                 category === 'security' ? '#ff4141' :
//                 category === 'database' ? '#41aaff' :
//                 category === 'mobile' ? '#ff41ff' :
//                 category === 'animation' ? '#ffff41' :
//                 category === 'design' ? '#ff9141' :
//                 category === 'tools' ? '#41ffff' :
//                 '#aaaaaa'
//               }}></span>
//               <span className="category-name">{category.toUpperCase()}</span>
//             </div>
//           ))}
//         </div>
//       </div>
      
//       <style jsx>{`
//         .matrix-rain {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           overflow: hidden;
//           opacity: 0.1;
//           z-index: 1;
//         }
        
//         .matrix-column {
//           position: absolute;
//           font-family: monospace;
//           font-size: 20px;
//           animation: matrix-fall linear infinite;
//         }
        
//         @keyframes matrix-fall {
//           0% { transform: translateY(-100%); }
//           100% { transform: translateY(100vh); }
//         }
        
//         .hexagon-wrapper {
//           width: 90px;
//           height: 100px;
//           position: relative;
//           transition: transform 0.3s ease;
//         }
        
//         .hexagon-wrapper:hover {
//           transform: scale(1.1);
//           z-index: 10;
//         }
        
//         .hexagon {
//           width: 90px;
//           height: 52px;
//           background: rgba(0, 255, 65, 0.1);
//           position: relative;
//           border: 2px solid rgba(0, 255, 65, 0.3);
//           margin: 26px 0;
//           transition: all 0.3s ease;
//         }
        
//         .hexagon:before,
//         .hexagon:after {
//           content: "";
//           position: absolute;
//           width: 0;
//           border-left: 45px solid transparent;
//           border-right: 45px solid transparent;
//           transition: all 0.3s ease;
//         }
        
//         .hexagon:before {
//           bottom: 100%;
//           border-bottom: 26px solid rgba(0, 255, 65, 0.1);
//           border-bottom-color: inherit;
//         }
        
//         .hexagon:after {
//           top: 100%;
//           border-top: 26px solid rgba(0, 255, 65, 0.1);
//           border-top-color: inherit;
//         }
        
//         .hexagon.hover {
//           background: rgba(0, 255, 65, 0.2);
//           border-color: rgba(0, 255, 65, 0.6);
//           box-shadow: 0 0 30px rgba(0, 255, 65, 0.5);
//         }
        
//         .hexagon.active {
//           background: rgba(0, 255, 65, 0.3);
//           border-color: rgba(0, 255, 65, 0.8);
//           box-shadow: 0 0 40px rgba(0, 255, 65, 0.7);
//         }
        
//         .hexagon-inner {
//           width: 100%;
//           height: 100%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }
        
//         .hexagon-content {
//           text-align: center;
//           color: #00ff41;
//           font-family: monospace;
//         }
        
//         .icon-wrapper {
//           margin-bottom: 4px;
//           color: #00ff41;
//         }
        
//         .skill-name {
//           font-size: 11px;
//           font-weight: bold;
//         }
        
//         .skill-level {
//           font-size: 9px;
//           opacity: 0.8;
//         }
        
//         .terminal-container {
//           background: rgba(0, 0, 0, 0.8);
//           border: 1px solid rgba(0, 255, 65, 0.3);
//           border-radius: 8px;
//           overflow: hidden;
//           height: 600px;
//           display: flex;
//           flex-direction: column;
//         }
        
//         .terminal-header {
//           background: rgba(0, 255, 65, 0.1);
//           padding: 8px 12px;
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           border-bottom: 1px solid rgba(0, 255, 65, 0.3);
//         }
        
//         .terminal-buttons {
//           display: flex;
//           gap: 6px;
//         }
        
//         .terminal-button {
//           width: 12px;
//           height: 12px;
//           border-radius: 50%;
//         }
        
//         .terminal-button.red { background: #ff5f56; }
//         .terminal-button.yellow { background: #ffbd2e; }
//         .terminal-button.green { background: #27c93f; }
        
//         .terminal-title {
//           font-family: monospace;
//           font-size: 12px;
//           color: rgba(0, 255, 65, 0.8);
//         }
        
//         .terminal-body {
//           flex: 1;
//           padding: 16px;
//           overflow-y: auto;
//           font-family: monospace;
//         }
        
//         .terminal-output {
//           margin-bottom: 16px;
//         }
        
//         .terminal-line {
//           color: #00ff41;
//           margin-bottom: 4px;
//           font-size: 14px;
//         }
        
//         .cursor {
//           animation: blink 1s infinite;
//         }
        
//         @keyframes blink {
//           0%, 50% { opacity: 1; }
//           51%, 100% { opacity: 0; }
//         }
        
//         .terminal-input-line {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           margin-top: 8px;
//         }
        
//         .prompt {
//           color: #00ff41;
//           font-size: 14px;
//         }
        
//         .terminal-input {
//           flex: 1;
//           background: transparent;
//           border: none;
//           color: #00ff41;
//           font-family: monospace;
//           font-size: 14px;
//           outline: none;
//         }
        
//         .category-badge {
//           display: flex;
//           align-items: center;
//           gap: 6px;
//           padding: 4px 12px;
//           background: rgba(0, 0, 0, 0.6);
//           border: 1px solid rgba(0, 255, 65, 0.2);
//           border-radius: 20px;
//           font-family: monospace;
//           font-size: 12px;
//         }
        
//         .category-dot {
//           width: 8px;
//           height: 8px;
//           border-radius: 50%;
//         }
        
//         .category-name {
//           color: rgba(0, 255, 65, 0.8);
//         }
//       `}</style>
//     </div>
//   );
// }

























// app/skills/page.js
// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import { Terminal, Code, Database, Shield, Cpu, Zap, GitBranch, Globe, Lock, Server, Cloud, Layers } from 'lucide-react';
// import { useTransition } from '../layout';
// import ScrambledText from '@/components/ScrambledText';

// // Hexagon Component
// const Hexagon = ({ skill, level, icon, delay, isActive, onClick }) => {
//   const [isHovered, setIsHovered] = useState(false);
  
//   return (
//     <div
//       className={`hexagon-wrapper animate-fade-in cursor-pointer ${isActive ? 'active' : ''}`}
//       style={{ animationDelay: `${delay}ms` }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       onClick={onClick}
//     >
//       <div className={`hexagon ${isHovered ? 'hover' : ''} ${isActive ? 'active' : ''}`}>
//         <div className="hexagon-inner">
//           <div className="hexagon-content">
//             <div className="icon-wrapper">
//               {icon}
//             </div>
//             <div className="skill-name">{skill}</div>
//             <div className="skill-level">Lvl {level}</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Terminal Output Component
// const TerminalOutput = ({ selectedSkill, skills }) => {
//   const [output, setOutput] = useState([]);
//   const [currentLine, setCurrentLine] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
  
//   useEffect(() => {
//     if (!selectedSkill) {
//       setOutput([]);
//       return;
//     }
    
//     const skillData = skills[selectedSkill];
//     if (!skillData) return;
    
//     setIsTyping(true);
//     const lines = [
//       `> Analyzing ${selectedSkill}...`,
//       `> Skill Level: ${skillData.level}/10`,
//       `> Experience: ${skillData.experience}`,
//       `> Status: ${skillData.status}`,
//       `> Related Tools: ${skillData.tools.join(', ')}`,
//       `> Last Updated: ${skillData.lastUpdated}`,
//       `> Proficiency: ${skillData.proficiency}%`,
//       '> Analysis complete.'
//     ];
    
//     setOutput([]);
//     let lineIndex = 0;
    
//     const typeNextLine = () => {
//       if (lineIndex < lines.length) {
//         const line = lines[lineIndex];
//         let charIndex = 0;
        
//         const typeChar = () => {
//           if (charIndex <= line.length) {
//             setCurrentLine(line.substring(0, charIndex));
//             charIndex++;
//             setTimeout(typeChar, 20);
//           } else {
//             setOutput(prev => [...prev, line]);
//             setCurrentLine('');
//             lineIndex++;
//             setTimeout(typeNextLine, 100);
//           }
//         };
        
//         typeChar();
//       } else {
//         setIsTyping(false);
//       }
//     };
    
//     typeNextLine();
//   }, [selectedSkill, skills]);
  
//   return (
//     <div className="terminal-output">
//       {output.map((line, i) => (
//         <div key={i} className="terminal-line">{line}</div>
//       ))}
//       {currentLine && <div className="terminal-line">{currentLine}<span className="cursor">_</span></div>}
//     </div>
//   );
// };

// export default function SkillsPage() {
//   const { isTransitioning } = useTransition();
//   const [selectedSkill, setSelectedSkill] = useState(null);
//   const [commandInput, setCommandInput] = useState('');
//   const [matrixRain, setMatrixRain] = useState([]);
//   const [terminalHistory, setTerminalHistory] = useState([]);
//   const terminalRef = useRef(null);
//   const inputRef = useRef(null);
  
// // Custom Logo Components - with dynamic size and color support
// const TailwindLogo = ({ className = "w-6 h-6", color = "#00ff41" }) => (
//   <svg viewBox="0 0 24 24" fill="none" className={className}>
//     <path fillRule="evenodd" clipRule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345-.98-.99-2.114-2.134-4.594-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C8.387 16.855 9.522 18 12 18c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z" fill={color}/>
//   </svg>
// );

// const ReactLogo = ({ className = "w-6 h-6", color = "#00ff41" }) => (
//   <svg viewBox="0 0 24 24" className={className}>
//     <g fill={color}>
//       <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.62c1.714-1.628 3.312-2.526 4.11-2.526zm-8.753.001c.801 0 2.396.89 4.115 2.517a23.897 23.897 0 0 0-2.045 2.522 23.366 23.366 0 0 0-3.096.538c-.108-.498-.2-.982-.254-1.442-.225-1.865.059-3.314.721-3.698.147-.09.335-.136.56-.136zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-.803 0-2.396-.89-4.116-2.518a26.37 26.37 0 0 0 2.045-2.522 23.361 23.361 0 0 0 3.095-.537zm-11.83.001a23.32 23.32 0 0 0 3.097.538 23.802 23.802 0 0 0 2.045 2.525c-1.715 1.63-3.313 2.527-4.11 2.527-.225 0-.406-.042-.558-.128-.666-.382-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
//     </g>
//   </svg>
// );

// const NextLogo = ({ className = "w-6 h-6", color = "" }) => (
//   <svg 
//     viewBox="0 0 180 180" 
//     className={className} 
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <mask
//       id="mask0_408_134"
//       style={{ maskType: "alpha" }}
//       maskUnits="userSpaceOnUse"
//       x="0"
//       y="0"
//       width="180"
//       height="180"
//     >
//       <circle cx="90" cy="90" r="90" fill="black" />
//     </mask>
//     <g mask="url(#mask0_408_134)">
//       <circle cx="90" cy="90" r="90" fill={color} />
//       <path
//         d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
//         fill="url(#paint0_linear_408_134)"
//       />
//       <rect
//         x="115"
//         y="54"
//         width="12"
//         height="72"
//         fill="url(#paint1_linear_408_134)"
//       />
//     </g>
//     <defs>
//       <linearGradient
//         id="paint0_linear_408_134"
//         x1="109"
//         y1="116.5"
//         x2="144.5"
//         y2="160.5"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#00ff41" />
//         <stop offset="1" stopColor="#00ff41" stopOpacity="0" />
//       </linearGradient>
//       <linearGradient
//         id="paint1_linear_408_134"
//         x1="121"
//         y1="54"
//         x2="120.799"
//         y2="106.875"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#00ff41" />
//         <stop offset="1" stopColor="#00ff41" stopOpacity="0" />
//       </linearGradient>
//     </defs>
//   </svg>
// );

// const CanvaLogo = ({ className = "w-6 h-6", color = "#00C4CC" }) => ( // Canva's official turquoise color
//   <svg 
//     viewBox="0 0 100 100" 
//     className={className} 
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path 
//       d="M50 5C25.1878 5 5 25.1878 5 50C5 74.8122 25.1878 95 50 95C62.8956 95 74.5615 89.5171 82.6777 80.6066C83.9134 79.2433 84.0294 77.1776 82.9289 75.6776C81.4516 73.6552 78.5403 73.3351 76.6559 74.9435C70.3981 80.0923 62.5209 83 54 83C35.2223 83 20 67.7777 20 49C20 30.2223 35.2223 15 54 15C65.4688 15 75.6244 21.0547 81.2617 30.1797C82.2852 31.8867 84.4852 32.4539 86.1922 31.4304C87.8992 30.4069 88.4664 28.2069 87.4429 26.4999C79.7585 13.8516 66.3662 5 50 5Z"
//       fill={color}
//       fillRule="evenodd"
//       clipRule="evenodd"
//     />
//   </svg>
// );

// const NodeLogo = ({ className = "w-6 h-6", color = "#00ff41" }) => (
//   <svg viewBox="0 0 24 24" className={className}>
//     <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.602.065-.037.151-.023.218.016l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.135-.141.135-.241V6.921c0-.103-.055-.198-.137-.246l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.075 6.68c-.084.048-.139.144-.139.245v10.142c0 .1.055.194.137.241l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.924-.943-.924-1.609V6.921c0-.665.355-1.283.924-1.611L11.073.236a1.882 1.882 0 0 1 1.85 0l8.794 5.074c.57.329.924.946.924 1.611v10.145c0 .666-.354 1.278-.924 1.609l-8.794 5.078c-.28.163-.599.247-.925.247zm2.718-6.993c-3.848 0-4.653-1.766-4.653-3.25 0-.14.114-.254.256-.254h1.135c.128 0 .235.093.253.219.173 1.17.691 1.761 3.01 1.761 1.851 0 2.639-.419 2.639-1.402 0-.565-.225-1.007-3.103-1.296-2.408-.243-3.896-.77-3.896-2.697 0-1.778 1.5-2.836 4.012-2.836 2.823 0 4.218.98 4.394 3.083a.256.256 0 0 1-.255.278h-1.143a.252.252 0 0 1-.247-.199c-.275-1.22-.94-1.611-2.749-1.611-2.024 0-2.26.705-2.26 1.234 0 .641.277.828 3.006 1.19 2.7.358 3.985.865 3.985 2.773 0 1.921-1.603 3.022-4.397 3.022z" fill={color}/>
//   </svg>
// );

// const ExpressLogo = ({ className = "w-6 h-6", color = "#00ff41" }) => (
//   <svg viewBox="0 0 24 24" className={className}>
//     <path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" fill={color}/>
//   </svg>
// );

// const FramerLogo = ({ className = "w-6 h-6", color = "#00ff41" }) => (
//   <svg viewBox="0 0 24 24" className={className}>
//     <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill={color}/>
//   </svg>
// );

// const skills = {
//     "HTML": {
//       level: 9,
//       icon: <Code className="w-5 h-5 text-green-400" />,
//       category: "frontend",
//       experience: "5+ years",
//       status: "EXPERT",
//       tools: ["HTML5", "Semantic HTML", "SEO", "Accessibility"],
//       lastUpdated: "2024.12.20",
//       proficiency: 95
//     },
//     "CSS": {
//       level: 9,
//       icon: <Layers className="w-5 h-5 text-green-400" />,
//       category: "frontend",
//       experience: "5+ years",
//       status: "EXPERT",
//       tools: ["Flexbox", "Grid", "Animations", "Responsive"],
//       lastUpdated: "2024.12.20",
//       proficiency: 90
//     },
//     "JavaScript": {
//       level: 8,
//       icon: <Terminal className="w-5 h-5 text-green-400" />,
//       category: "language",
//       experience: "4+ years",
//       status: "ADVANCED",
//       tools: ["ES6+", "Async/Await", "DOM API", "Modules"],
//       lastUpdated: "2024.12.22",
//       proficiency: 85
//     },
//     "Tailwind": {
//       level: 8,
//       icon: <TailwindLogo className="w-5 h-5" />, // Change size here: w-8 h-8, w-10 h-10, etc.
//       category: "frontend",
//       experience: "2+ years",
//       status: "ADVANCED",
//       tools: ["JIT", "Custom Config", "Plugins", "DaisyUI"],
//       lastUpdated: "2024.12.15",
//       proficiency: 85
//     },
//     "React": {
//       level: 8,
//       icon: <ReactLogo className="w-5 h-5" />, // Color change: <ReactLogo className="w-5 h-5" color="#61DAFB" />
//       category: "frontend",
//       experience: "3+ years",
//       status: "ADVANCED",
//       tools: ["Hooks", "Context API", "Redux", "React Router"],
//       lastUpdated: "2024.12.20",
//       proficiency: 85
//     },
//     "Node.js": {
//       level: 7,
//       icon: <NodeLogo className="w-5 h-5" />,
//       category: "backend",
//       experience: "3+ years",
//       status: "PROFICIENT",
//       tools: ["NPM", "REST APIs", "File System", "Streams"],
//       lastUpdated: "2024.12.10",
//       proficiency: 75
//     },
//     "Express.js": {
//       level: 7,
//       icon: <ExpressLogo className="w-5 h-5" />,
//       category: "backend",
//       experience: "3+ years",
//       status: "PROFICIENT",
//       tools: ["Middleware", "Routing", "Error Handling", "JWT"],
//       lastUpdated: "2024.12.10",
//       proficiency: 75
//     },
//     "MongoDB": {
//       level: 7,
//       icon: <Database className="w-5 h-5 text-green-400" />,
//       category: "database",
//       experience: "2+ years",
//       status: "PROFICIENT",
//       tools: ["Mongoose", "Aggregation", "Indexing", "Atlas"],
//       lastUpdated: "2024.12.05",
//       proficiency: 70
//     },
//     "Next.js": {
//       level: 7,
//       icon: <NextLogo className="w-7 h-7" />,
//       category: "frontend",
//       experience: "2+ years",
//       status: "PROFICIENT",
//       tools: ["App Router", "SSR", "SSG", "API Routes"],
//       lastUpdated: "2024.12.18",
//       proficiency: 75
//     },
//     "Auth.js": {
//       level: 6,
//       icon: <Lock className="w-5 h-5 text-green-400" />,
//       category: "security",
//       experience: "1+ years",
//       status: "INTERMEDIATE",
//       tools: ["NextAuth", "OAuth", "JWT", "Session Management"],
//       lastUpdated: "2024.11.30",
//       proficiency: 65
//     },
//     "R3F": {
//       level: 7,
//       icon: <Globe className="w-5 h-5 text-green-400" />,
//       category: "frontend",
//       experience: "2+ years",
//       status: "PROFICIENT",
//       tools: ["Three.js", "3D Graphics", "WebGL", "Drei"],
//       lastUpdated: "2024.12.18",
//       proficiency: 70
//     },
//     "React Native": {
//       level: 6,
//       icon: <Code className="w-5 h-5 text-green-400" />,
//       category: "mobile",
//       experience: "1+ years",
//       status: "INTERMEDIATE",
//       tools: ["Expo", "Navigation", "Native APIs", "StyleSheet"],
//       lastUpdated: "2024.11.15",
//       proficiency: 60
//     },
//     "GSAP": {
//       level: 8,
//       icon: <Zap className="w-5 h-5 text-green-400" />,
//       category: "animation",
//       experience: "3+ years",
//       status: "ADVANCED",
//       tools: ["Timeline", "ScrollTrigger", "Morphing", "Easing"],
//       lastUpdated: "2024.12.12",
//       proficiency: 80
//     },
//     "Framer Motion": {
//       level: 7,
//       icon: <FramerLogo className="w-5 h-5" />,
//       category: "animation",
//       experience: "2+ years",
//       status: "PROFICIENT",
//       tools: ["Gestures", "Variants", "Layout", "AnimatePresence"],
//       lastUpdated: "2024.12.08",
//       proficiency: 75
//     },
//     "Git & GitHub": {
//       level: 8,
//       icon: <GitBranch className="w-5 h-5 text-green-400" />,
//       category: "tools",
//       experience: "4+ years",
//       status: "ADVANCED",
//       tools: ["Branching", "Pull Requests", "Actions", "Pages"],
//       lastUpdated: "2024.12.22",
//       proficiency: 85
//     },
//     "Canva": {
//       level: 7,
//       icon: <CanvaLogo className="w-5 h-5" color="#00ff41" />,
//       category: "design",
//       experience: "3+ years",
//       status: "PROFICIENT",
//       tools: ["Templates", "Brand Kit", "Video Editing", "Presentations"],
//       lastUpdated: "2024.12.15",
//       proficiency: 75
//     },
//     "C++": {
//       level: 6,
//       icon: <Cpu className="w-5 h-5 text-green-400" />,
//       category: "language",
//       experience: "2+ years",
//       status: "INTERMEDIATE",
//       tools: ["STL", "OOP", "Pointers", "Data Structures"],
//       lastUpdated: "2024.10.20",
//       proficiency: 60
//     }
//   };
  
//   // Matrix rain effect
//   useEffect(() => {
//     const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
//     const columns = 20;
//     const rain = [];
    
//     for (let i = 0; i < columns; i++) {
//       rain.push({
//         x: i * 50,
//         y: Math.random() * -100,
//         speed: Math.random() * 2 + 1,
//         chars: Array.from({ length: 15 }, () => chars[Math.floor(Math.random() * chars.length)])
//       });
//     }
    
//     setMatrixRain(rain);
//   }, []);
  
//   // Initial terminal messages
//   useEffect(() => {
//     const initialMessages = [
//       { type: 'system', text: 'SKILL ANALYZER v1.0' },
//       { type: 'system', text: 'Loading skill matrix...' },
//       { type: 'success', text: 'Skills loaded successfully.' },
//       { type: 'system', text: "Type 'ls' to list all skills" },
//       { type: 'prompt', text: '~/skills' }
//     ];
//     setTerminalHistory(initialMessages);
//   }, []);

//   // Auto-scroll terminal
//   useEffect(() => {
//     if (terminalRef.current) {
//       terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
//     }
//   }, [terminalHistory]);
  
//   const handleCommand = (e) => {
//     if (e.key === 'Enter' && commandInput.trim()) {
//       const cmd = commandInput.toLowerCase().trim();
      
//       // Add command to history
//       setTerminalHistory(prev => [...prev, 
//         { type: 'prompt', text: '~/skills' },
//         { type: 'command', text: commandInput }
//       ]);
      
//       // Process commands
//       if (cmd === 'ls') {
//         // List all skills
//         const skillsList = Object.keys(skills).join('  ');
//         setTerminalHistory(prev => [...prev, 
//           { type: 'output', text: 'Available skills:' },
//           { type: 'output', text: skillsList }
//         ]);
//       } else if (cmd.startsWith('analyze ')) {
//         // Analyze specific skill
//         const skillName = cmd.replace('analyze ', '').trim();
//         const matchedSkill = Object.keys(skills).find(s => s.toLowerCase() === skillName.toLowerCase());
        
//         if (matchedSkill) {
//           setSelectedSkill(matchedSkill);
//           setTerminalHistory(prev => [...prev, 
//             { type: 'success', text: `Analyzing ${matchedSkill}...` }
//           ]);
//         } else {
//           setTerminalHistory(prev => [...prev, 
//             { type: 'error', text: `Skill not found: ${skillName}` }
//           ]);
//         }
//       } else if (cmd === 'clear') {
//         // Clear terminal
//         setTerminalHistory([
//           { type: 'system', text: 'Terminal cleared.' }
//         ]);
//         setSelectedSkill(null);
//       } else {
//         // Unknown command
//         setTerminalHistory(prev => [...prev, 
//           { type: 'error', text: `Command not found: ${cmd}. Available commands: ls, analyze [skill], clear` }
//         ]);
//       }
      
//       setCommandInput('');
//     }
//   };
  
//   const hexagonPositions = [
//     { top: '5%', left: '10%' },    // Row 1 - 4 skills
//     { top: '5%', left: '30%' },
//     { top: '5%', left: '50%' },
//     { top: '5%', left: '70%' },
//     { top: '18%', left: '0%' },    // Row 2 - 5 skills  
//     { top: '18%', left: '20%' },
//     { top: '18%', left: '40%' },
//     { top: '18%', left: '60%' },
//     { top: '16.7%', left: '80%' },
//     { top: '31%', left: '10%' },   // Row 3 - 4 skills
//     { top: '31%', left: '30%' },
//     { top: '31%', left: '50%' },
//     { top: '31%', left: '70%' },
//     { top: '44%', left: '20%' },   // Row 4 - 4 skills
//     { top: '44%', left: '40%' },
//     { top: '44%', left: '60%' },
//     { top: '57%', left: '40%' },   // Row 5 - 1 skill (centered)
//   ];

//   return (
//     <div className="min-h-screen pt-32 px-6 relative overflow-hidden">
//       {/* Matrix Rain Background */}
//       <div className="matrix-rain">
//         {matrixRain.map((column, i) => (
//           <div
//             key={i}
//             className="matrix-column"
//             style={{
//               left: `${column.x}px`,
//               animationDuration: `${10 / column.speed}s`
//             }}
//           >
//             {column.chars.map((char, j) => (
//               <span
//                 key={j}
//                 style={{
//                   opacity: 1 - (j / column.chars.length),
//                   color: j === 0 ? '#00ff41' : '#00ff4140'
//                 }}
//               >
//                 {char}
//               </span>
//             ))}
//           </div>
//         ))}
//       </div>
      
//       <div className="max-w-7xl mx-auto relative z-10">
//         <h2 className="text-5xl font-mono font-bold text-green-400 mb-4">
//           <span className="text-gray-400">&gt;</span> <ScrambledText text="SKILL_MATRIX.EXE" />
//         </h2>
//         <p className="text-gray-400 font-mono mb-8">
//           <ScrambledText text="Click nodes to analyze skill data | Use terminal for advanced queries" />
//         </p>
        
//         <div className="grid lg:grid-cols-2 gap-8">
//           {/* Hexagonal Skill Grid */}
//           <div className="relative h-[600px] skill-grid">
//             {Object.entries(skills).map(([skillName, skillData], index) => (
//               <div
//                 key={skillName}
//                 className="absolute"
//                 style={hexagonPositions[index]}
//               >
//                 <Hexagon
//                   skill={skillName}
//                   level={skillData.level}
//                   icon={skillData.icon}
//                   delay={index * 100}
//                   isActive={selectedSkill === skillName}
//                   onClick={() => setSelectedSkill(skillName)}
//                 />
//               </div>
//             ))}
//           </div>
          
//           {/* Terminal Interface */}
//           <div className="terminal-container">
//             <div className="terminal-header">
//               <div className="terminal-buttons">
//                 <div className="terminal-button red"></div>
//                 <div className="terminal-button yellow"></div>
//                 <div className="terminal-button green"></div>
//               </div>
//               <span className="terminal-title">skill_analyzer.sh</span>
//             </div>
//             <div className="terminal-body" ref={terminalRef} onClick={() => inputRef.current?.focus()}>
//               {/* Terminal History */}
//               {terminalHistory.map((line, index) => (
//                 <div key={index} className={`terminal-line ${
//                   line.type === 'error' ? 'text-red-400' :
//                   line.type === 'success' ? 'text-green-400' :
//                   line.type === 'system' ? 'text-blue-400' :
//                   line.type === 'prompt' ? 'text-green-400' :
//                   line.type === 'command' ? 'text-white' :
//                   'text-gray-300'
//                 }`}>
//                   {line.type === 'prompt' && (
//                     <span>
//                       <span className="text-green-400">rizwi@skills</span>
//                       <span>:</span>
//                       <span className="text-blue-400">{line.text}</span>
//                       <span>$ </span>
//                     </span>
//                   )}
//                   {line.type === 'command' && <span>{line.text}</span>}
//                   {!['prompt', 'command'].includes(line.type) && line.text}
//                 </div>
//               ))}
              
//               {/* Current Terminal Output */}
//               <TerminalOutput selectedSkill={selectedSkill} skills={skills} />
              
//               {/* Terminal Input */}
//               <div className="terminal-input-line">
//                 <span className="prompt">rizwi@skills:~/skills$</span>
//                 <input
//                   ref={inputRef}
//                   type="text"
//                   value={commandInput}
//                   onChange={(e) => setCommandInput(e.target.value)}
//                   onKeyDown={handleCommand}
//                   className="terminal-input"
//                   placeholder="ls | analyze [skill] | clear"
//                   autoFocus
//                 />
//                 <span className="cursor animate-pulse">_</span>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Skill Categories Legend */}
//         <div className="mt-12 flex flex-wrap gap-4 justify-center">
//           {['frontend', 'backend', 'language', 'database', 'security', 'mobile', 'animation', 'design', 'tools'].map(category => (
//             <div key={category} className="category-badge">
//               <span className="category-dot" style={{ backgroundColor: 
//                 category === 'frontend' ? '#00ff41' :
//                 category === 'backend' ? '#00ffaa' :
//                 category === 'security' ? '#ff4141' :
//                 category === 'database' ? '#41aaff' :
//                 category === 'mobile' ? '#ff41ff' :
//                 category === 'animation' ? '#ffff41' :
//                 category === 'design' ? '#ff9141' :
//                 category === 'tools' ? '#41ffff' :
//                 '#aaaaaa'
//               }}></span>
//               <span className="category-name">{category.toUpperCase()}</span>
//             </div>
//           ))}
//         </div>
//       </div>
      
//       <style jsx>{`
//         .matrix-rain {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           overflow: hidden;
//           opacity: 0.1;
//           z-index: 1;
//         }
        
//         .matrix-column {
//           position: absolute;
//           font-family: monospace;
//           font-size: 20px;
//           animation: matrix-fall linear infinite;
//         }
        
//         @keyframes matrix-fall {
//           0% { transform: translateY(-100%); }
//           100% { transform: translateY(100vh); }
//         }
        
//         .hexagon-wrapper {
//           width: 90px;
//           height: 100px;
//           position: relative;
//           transition: transform 0.3s ease;
//         }
        
//         .hexagon-wrapper:hover {
//           transform: scale(1.1);
//           z-index: 10;
//         }
        
//         .hexagon {
//           width: 90px;
//           height: 52px;
//           background: rgba(0, 255, 65, 0.1);
//           position: relative;
//           border: 2px solid rgba(0, 255, 65, 0.3);
//           margin: 26px 0;
//           transition: all 0.3s ease;
//         }
        
//         .hexagon:before,
//         .hexagon:after {
//           content: "";
//           position: absolute;
//           width: 0;
//           border-left: 45px solid transparent;
//           border-right: 45px solid transparent;
//           transition: all 0.3s ease;
//         }
        
//         .hexagon:before {
//           bottom: 100%;
//           border-bottom: 26px solid rgba(0, 255, 65, 0.1);
//           border-bottom-color: inherit;
//         }
        
//         .hexagon:after {
//           top: 100%;
//           border-top: 26px solid rgba(0, 255, 65, 0.1);
//           border-top-color: inherit;
//         }
        
//         .hexagon.hover {
//           background: rgba(0, 255, 65, 0.2);
//           border-color: rgba(0, 255, 65, 0.6);
//           box-shadow: 0 0 30px rgba(0, 255, 65, 0.5);
//         }
        
//         .hexagon.active {
//           background: rgba(0, 255, 65, 0.3);
//           border-color: rgba(0, 255, 65, 0.8);
//           box-shadow: 0 0 40px rgba(0, 255, 65, 0.7);
//         }
        
//         .hexagon-inner {
//           width: 100%;
//           height: 100%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }
        
//         .hexagon-content {
//           text-align: center;
//           color: #00ff41;
//           font-family: monospace;
//         }
        
//         .icon-wrapper {
//           margin-bottom: 4px;
//           color: #00ff41;
//         }
        
//         .skill-name {
//           font-size: 11px;
//           font-weight: bold;
//         }
        
//         .skill-level {
//           font-size: 9px;
//           opacity: 0.8;
//         }
        
//         .terminal-container {
//           background: rgba(0, 0, 0, 0.8);
//           border: 1px solid rgba(0, 255, 65, 0.3);
//           border-radius: 8px;
//           overflow: hidden;
//           height: 600px;
//           display: flex;
//           flex-direction: column;
//         }
        
//         .terminal-header {
//           background: rgba(0, 255, 65, 0.1);
//           padding: 8px 12px;
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           border-bottom: 1px solid rgba(0, 255, 65, 0.3);
//         }
        
//         .terminal-buttons {
//           display: flex;
//           gap: 6px;
//         }
        
//         .terminal-button {
//           width: 12px;
//           height: 12px;
//           border-radius: 50%;
//         }
        
//         .terminal-button.red { background: #ff5f56; }
//         .terminal-button.yellow { background: #ffbd2e; }
//         .terminal-button.green { background: #27c93f; }
        
//         .terminal-title {
//           font-family: monospace;
//           font-size: 12px;
//           color: rgba(0, 255, 65, 0.8);
//         }
        
//         .terminal-body {
//           flex: 1;
//           padding: 16px;
//           overflow-y: auto;
//           font-family: monospace;
//           cursor: text;
//         }
        
//         .terminal-body::-webkit-scrollbar {
//           width: 4px;
//         }
        
//         .terminal-body::-webkit-scrollbar-track {
//           background: rgba(0, 255, 65, 0.1);
//         }
        
//         .terminal-body::-webkit-scrollbar-thumb {
//           background: rgba(0, 255, 65, 0.3);
//           border-radius: 2px;
//         }
        
//         .terminal-body::-webkit-scrollbar-thumb:hover {
//           background: rgba(0, 255, 65, 0.5);
//         }
        
//         .terminal-output {
//           margin-bottom: 16px;
//         }
        
//         .terminal-line {
//           color: #00ff41;
//           margin-bottom: 4px;
//           font-size: 14px;
//           word-break: break-word;
//         }
        
//         .cursor {
//           animation: blink 1s infinite;
//         }
        
//         @keyframes blink {
//           0%, 50% { opacity: 1; }
//           51%, 100% { opacity: 0; }
//         }
        
//         .terminal-input-line {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           margin-top: 8px;
//         }
        
//         .prompt {
//           color: #00ff41;
//           font-size: 14px;
//         }
        
//         .terminal-input {
//           flex: 1;
//           background: transparent;
//           border: none;
//           color: #00ff41;
//           font-family: monospace;
//           font-size: 14px;
//           outline: none;
//         }
        
//         .category-badge {
//           display: flex;
//           align-items: center;
//           gap: 6px;
//           padding: 4px 12px;
//           background: rgba(0, 0, 0, 0.6);
//           border: 1px solid rgba(0, 255, 65, 0.2);
//           border-radius: 20px;
//           font-family: monospace;
//           font-size: 12px;
//         }
        
//         .category-dot {
//           width: 8px;
//           height: 8px;
//           border-radius: 50%;
//         }
        
//         .category-name {
//           color: rgba(0, 255, 65, 0.8);
//         }
//       `}</style>
//     </div>
//   );
// }





























// BEST + Terminal ------------------------------------------------------------------------------------------------------
// app/skills/page.js
// 'use client';
// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { Terminal, Code, Database, Shield, Cpu, Zap, GitBranch, Globe, Lock, Server, Cloud, Layers } from 'lucide-react';
// import { useTransition } from '../layout';
// import ScrambledText from '@/components/ScrambledText';

// // Hexagon Component
// const Hexagon = ({ skill, level, icon, delay, isActive, onClick, disabled }) => {
//   const [isHovered, setIsHovered] = useState(false);
  
//   return (
//     <div
//       className={`hexagon-wrapper animate-fade-in ${disabled ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'} ${isActive ? 'active' : ''}`}
//       style={{ animationDelay: `${delay}ms` }}
//       onMouseEnter={() => !disabled && setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       onClick={() => !disabled && onClick()}
//     >
//       <div className={`hexagon ${isHovered && !disabled ? 'hover' : ''} ${isActive ? 'active' : ''}`}>
//         <div className="hexagon-inner">
//           <div className="hexagon-content">
//             <div className="icon-wrapper">
//               {icon}
//             </div>
//             <div className="skill-name">{skill}</div>
//             <div className="skill-level">Lvl {level}</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Terminal Output Component
// const TerminalOutput = ({ selectedSkill, skills, onAnalysisStart, onAnalysisComplete }) => {
//   const [output, setOutput] = useState([]);
//   const [currentLine, setCurrentLine] = useState('');
//   const analysisIdRef = useRef(0);
  
//   useEffect(() => {
//     // Clear output immediately
//     setOutput([]);
//     setCurrentLine('');
    
//     if (!selectedSkill) {
//       return;
//     }
    
//     const skillData = skills[selectedSkill];
//     if (!skillData) return;
    
//     // Increment analysis ID for this session
//     analysisIdRef.current += 1;
//     const currentAnalysisId = analysisIdRef.current;
    
//     // Array to store timeout IDs for cleanup
//     const timeoutIds = [];
    
//     onAnalysisStart(); // Notify parent that analysis has started
    
//     const lines = [
//       `> Analyzing ${selectedSkill}...`,
//       `> Skill Level: ${skillData.level}/10`,
//       `> Experience: ${skillData.experience}`,
//       `> Status: ${skillData.status}`,
//       `> Related Tools: ${skillData.tools.join(', ')}`,
//       `> Last Updated: ${skillData.lastUpdated}`,
//       `> Proficiency: ${skillData.proficiency}%`,
//       '> Analysis complete.'
//     ];
    
//     let lineIndex = 0;
    
//     const typeNextLine = () => {
//       // Check if this is still the current analysis
//       if (currentAnalysisId !== analysisIdRef.current) return;
      
//       if (lineIndex < lines.length) {
//         const line = lines[lineIndex];
//         let charIndex = 0;
        
//         const typeChar = () => {
//           // Check if this is still the current analysis
//           if (currentAnalysisId !== analysisIdRef.current) return;
          
//           if (charIndex <= line.length) {
//             setCurrentLine(line.substring(0, charIndex));
//             charIndex++;
//             const timeoutId = setTimeout(typeChar, 20);
//             timeoutIds.push(timeoutId);
//           } else {
//             setOutput(prev => [...prev, line]);
//             setCurrentLine('');
//             lineIndex++;
//             const timeoutId = setTimeout(typeNextLine, 100);
//             timeoutIds.push(timeoutId);
//           }
//         };
        
//         typeChar();
//       } else {
//         // Check if this is still the current analysis before completing
//         if (currentAnalysisId === analysisIdRef.current) {
//           onAnalysisComplete(); // Notify parent that analysis is complete
//         }
//       }
//     };
    
//     typeNextLine();
    
//     // Cleanup function
//     return () => {
//       timeoutIds.forEach(id => clearTimeout(id));
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [selectedSkill]); // Only re-run when selectedSkill changes
  
//   return (
//     <div className="terminal-output">
//       {output.map((line, i) => (
//         <div key={i} className="terminal-line">{line}</div>
//       ))}
//       {currentLine && <div className="terminal-line">{currentLine}<span className="cursor">_</span></div>}
//     </div>
//   );
// };

// export default function SkillsPage() {
//   const { isTransitioning } = useTransition();
//   const [selectedSkill, setSelectedSkill] = useState(null);
//   const [commandInput, setCommandInput] = useState('');
//   const [matrixRain, setMatrixRain] = useState([]);
//   const [terminalHistory, setTerminalHistory] = useState([]);
//   const [isAnalyzing, setIsAnalyzing] = useState(false);
//   const terminalRef = useRef(null);
//   const inputRef = useRef(null);
  
//   // Memoize callbacks to prevent re-renders
//   const handleAnalysisStart = useCallback(() => {
//     setIsAnalyzing(true);
//   }, []);
  
//   const handleAnalysisComplete = useCallback(() => {
//     setIsAnalyzing(false);
//   }, []);
  
//   // Reset isAnalyzing when selectedSkill is cleared
//   useEffect(() => {
//     if (!selectedSkill) {
//       setIsAnalyzing(false);
//     }
//   }, [selectedSkill]);
  
// // Custom Logo Components - with dynamic size and color support
// const TailwindLogo = ({ className = "w-6 h-6", color = "#00ff41" }) => (
//   <svg viewBox="0 0 24 24" fill="none" className={className}>
//     <path fillRule="evenodd" clipRule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345-.98-.99-2.114-2.134-4.594-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C8.387 16.855 9.522 18 12 18c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z" fill={color}/>
//   </svg>
// );

// const ReactLogo = ({ className = "w-6 h-6", color = "#00ff41" }) => (
//   <svg viewBox="0 0 24 24" className={className}>
//     <g fill={color}>
//       <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.62c1.714-1.628 3.312-2.526 4.11-2.526zm-8.753.001c.801 0 2.396.89 4.115 2.517a23.897 23.897 0 0 0-2.045 2.522 23.366 23.366 0 0 0-3.096.538c-.108-.498-.2-.982-.254-1.442-.225-1.865.059-3.314.721-3.698.147-.09.335-.136.56-.136zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-.803 0-2.396-.89-4.116-2.518a26.37 26.37 0 0 0 2.045-2.522 23.361 23.361 0 0 0 3.095-.537zm-11.83.001a23.32 23.32 0 0 0 3.097.538 23.802 23.802 0 0 0 2.045 2.525c-1.715 1.63-3.313 2.527-4.11 2.527-.225 0-.406-.042-.558-.128-.666-.382-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
//     </g>
//   </svg>
// );

// const NextLogo = ({ className = "w-6 h-6", color = "" }) => (
//   <svg 
//     viewBox="0 0 180 180" 
//     className={className} 
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <mask
//       id="mask0_408_134"
//       style={{ maskType: "alpha" }}
//       maskUnits="userSpaceOnUse"
//       x="0"
//       y="0"
//       width="180"
//       height="180"
//     >
//       <circle cx="90" cy="90" r="90" fill="black" />
//     </mask>
//     <g mask="url(#mask0_408_134)">
//       <circle cx="90" cy="90" r="90" fill={color} />
//       <path
//         d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
//         fill="url(#paint0_linear_408_134)"
//       />
//       <rect
//         x="115"
//         y="54"
//         width="12"
//         height="72"
//         fill="url(#paint1_linear_408_134)"
//       />
//     </g>
//     <defs>
//       <linearGradient
//         id="paint0_linear_408_134"
//         x1="109"
//         y1="116.5"
//         x2="144.5"
//         y2="160.5"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#00ff41" />
//         <stop offset="1" stopColor="#00ff41" stopOpacity="0" />
//       </linearGradient>
//       <linearGradient
//         id="paint1_linear_408_134"
//         x1="121"
//         y1="54"
//         x2="120.799"
//         y2="106.875"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#00ff41" />
//         <stop offset="1" stopColor="#00ff41" stopOpacity="0" />
//       </linearGradient>
//     </defs>
//   </svg>
// );

// const CanvaLogo = ({ className = "w-6 h-6", color = "#00C4CC" }) => ( // Canva's official turquoise color
//   <svg 
//     viewBox="0 0 100 100" 
//     className={className} 
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path 
//       d="M50 5C25.1878 5 5 25.1878 5 50C5 74.8122 25.1878 95 50 95C62.8956 95 74.5615 89.5171 82.6777 80.6066C83.9134 79.2433 84.0294 77.1776 82.9289 75.6776C81.4516 73.6552 78.5403 73.3351 76.6559 74.9435C70.3981 80.0923 62.5209 83 54 83C35.2223 83 20 67.7777 20 49C20 30.2223 35.2223 15 54 15C65.4688 15 75.6244 21.0547 81.2617 30.1797C82.2852 31.8867 84.4852 32.4539 86.1922 31.4304C87.8992 30.4069 88.4664 28.2069 87.4429 26.4999C79.7585 13.8516 66.3662 5 50 5Z"
//       fill={color}
//       fillRule="evenodd"
//       clipRule="evenodd"
//     />
//   </svg>
// );

// const NodeLogo = ({ className = "w-6 h-6", color = "#00ff41" }) => (
//   <svg viewBox="0 0 24 24" className={className}>
//     <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.602.065-.037.151-.023.218.016l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.135-.141.135-.241V6.921c0-.103-.055-.198-.137-.246l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.075 6.68c-.084.048-.139.144-.139.245v10.142c0 .1.055.194.137.241l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.924-.943-.924-1.609V6.921c0-.665.355-1.283.924-1.611L11.073.236a1.882 1.882 0 0 1 1.85 0l8.794 5.074c.57.329.924.946.924 1.611v10.145c0 .666-.354 1.278-.924 1.609l-8.794 5.078c-.28.163-.599.247-.925.247zm2.718-6.993c-3.848 0-4.653-1.766-4.653-3.25 0-.14.114-.254.256-.254h1.135c.128 0 .235.093.253.219.173 1.17.691 1.761 3.01 1.761 1.851 0 2.639-.419 2.639-1.402 0-.565-.225-1.007-3.103-1.296-2.408-.243-3.896-.77-3.896-2.697 0-1.778 1.5-2.836 4.012-2.836 2.823 0 4.218.98 4.394 3.083a.256.256 0 0 1-.255.278h-1.143a.252.252 0 0 1-.247-.199c-.275-1.22-.94-1.611-2.749-1.611-2.024 0-2.26.705-2.26 1.234 0 .641.277.828 3.006 1.19 2.7.358 3.985.865 3.985 2.773 0 1.921-1.603 3.022-4.397 3.022z" fill={color}/>
//   </svg>
// );

// const ExpressLogo = ({ className = "w-6 h-6", color = "#00ff41" }) => (
//   <svg viewBox="0 0 24 24" className={className}>
//     <path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" fill={color}/>
//   </svg>
// );

// const FramerLogo = ({ className = "w-6 h-6", color = "#00ff41" }) => (
//   <svg viewBox="0 0 24 24" className={className}>
//     <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill={color}/>
//   </svg>
// );

// const skills = {
//     "HTML": {
//       level: 9,
//       icon: <Code className="w-5 h-5 text-green-400" />,
//       category: "frontend",
//       experience: "5+ years",
//       status: "EXPERT",
//       tools: ["HTML5", "Semantic HTML", "SEO", "Accessibility"],
//       lastUpdated: "2024.12.20",
//       proficiency: 95
//     },
//     "CSS": {
//       level: 9,
//       icon: <Layers className="w-5 h-5 text-green-400" />,
//       category: "frontend",
//       experience: "5+ years",
//       status: "EXPERT",
//       tools: ["Flexbox", "Grid", "Animations", "Responsive"],
//       lastUpdated: "2024.12.20",
//       proficiency: 90
//     },
//     "JavaScript": {
//       level: 8,
//       icon: <Terminal className="w-5 h-5 text-green-400" />,
//       category: "language",
//       experience: "4+ years",
//       status: "ADVANCED",
//       tools: ["ES6+", "Async/Await", "DOM API", "Modules"],
//       lastUpdated: "2024.12.22",
//       proficiency: 85
//     },
//     "Tailwind": {
//       level: 8,
//       icon: <TailwindLogo className="w-5 h-5" />, // Change size here: w-8 h-8, w-10 h-10, etc.
//       category: "frontend",
//       experience: "2+ years",
//       status: "ADVANCED",
//       tools: ["JIT", "Custom Config", "Plugins", "DaisyUI"],
//       lastUpdated: "2024.12.15",
//       proficiency: 85
//     },
//     "React": {
//       level: 8,
//       icon: <ReactLogo className="w-5 h-5" />, // Color change: <ReactLogo className="w-5 h-5" color="#61DAFB" />
//       category: "frontend",
//       experience: "3+ years",
//       status: "ADVANCED",
//       tools: ["Hooks", "Context API", "Redux", "React Router"],
//       lastUpdated: "2024.12.20",
//       proficiency: 85
//     },
//     "Node.js": {
//       level: 7,
//       icon: <NodeLogo className="w-5 h-5" />,
//       category: "backend",
//       experience: "3+ years",
//       status: "PROFICIENT",
//       tools: ["NPM", "REST APIs", "File System", "Streams"],
//       lastUpdated: "2024.12.10",
//       proficiency: 75
//     },
//     "Express.js": {
//       level: 7,
//       icon: <ExpressLogo className="w-5 h-5" />,
//       category: "backend",
//       experience: "3+ years",
//       status: "PROFICIENT",
//       tools: ["Middleware", "Routing", "Error Handling", "JWT"],
//       lastUpdated: "2024.12.10",
//       proficiency: 75
//     },
//     "MongoDB": {
//       level: 7,
//       icon: <Database className="w-5 h-5 text-green-400" />,
//       category: "database",
//       experience: "2+ years",
//       status: "PROFICIENT",
//       tools: ["Mongoose", "Aggregation", "Indexing", "Atlas"],
//       lastUpdated: "2024.12.05",
//       proficiency: 70
//     },
//     "Next.js": {
//       level: 7,
//       icon: <NextLogo className="w-7 h-7" />,
//       category: "frontend",
//       experience: "2+ years",
//       status: "PROFICIENT",
//       tools: ["App Router", "SSR", "SSG", "API Routes"],
//       lastUpdated: "2024.12.18",
//       proficiency: 75
//     },
//     "Auth.js": {
//       level: 6,
//       icon: <Lock className="w-5 h-5 text-green-400" />,
//       category: "security",
//       experience: "1+ years",
//       status: "INTERMEDIATE",
//       tools: ["NextAuth", "OAuth", "JWT", "Session Management"],
//       lastUpdated: "2024.11.30",
//       proficiency: 65
//     },
//     "R3F": {
//       level: 7,
//       icon: <Globe className="w-5 h-5 text-green-400" />,
//       category: "frontend",
//       experience: "2+ years",
//       status: "PROFICIENT",
//       tools: ["Three.js", "3D Graphics", "WebGL", "Drei"],
//       lastUpdated: "2024.12.18",
//       proficiency: 70
//     },
//     "React Native": {
//       level: 6,
//       icon: <Code className="w-5 h-5 text-green-400" />,
//       category: "mobile",
//       experience: "1+ years",
//       status: "INTERMEDIATE",
//       tools: ["Expo", "Navigation", "Native APIs", "StyleSheet"],
//       lastUpdated: "2024.11.15",
//       proficiency: 60
//     },
//     "GSAP": {
//       level: 8,
//       icon: <Zap className="w-5 h-5 text-green-400" />,
//       category: "animation",
//       experience: "3+ years",
//       status: "ADVANCED",
//       tools: ["Timeline", "ScrollTrigger", "Morphing", "Easing"],
//       lastUpdated: "2024.12.12",
//       proficiency: 80
//     },
//     "Framer Motion": {
//       level: 7,
//       icon: <FramerLogo className="w-5 h-5" />,
//       category: "animation",
//       experience: "2+ years",
//       status: "PROFICIENT",
//       tools: ["Gestures", "Variants", "Layout", "AnimatePresence"],
//       lastUpdated: "2024.12.08",
//       proficiency: 75
//     },
//     "Git & GitHub": {
//       level: 8,
//       icon: <GitBranch className="w-5 h-5 text-green-400" />,
//       category: "tools",
//       experience: "4+ years",
//       status: "ADVANCED",
//       tools: ["Branching", "Pull Requests", "Actions", "Pages"],
//       lastUpdated: "2024.12.22",
//       proficiency: 85
//     },
//     "Canva": {
//       level: 7,
//       icon: <CanvaLogo className="w-5 h-5" color="#00ff41" />,
//       category: "design",
//       experience: "3+ years",
//       status: "PROFICIENT",
//       tools: ["Templates", "Brand Kit", "Video Editing", "Presentations"],
//       lastUpdated: "2024.12.15",
//       proficiency: 75
//     },
//     "C++": {
//       level: 6,
//       icon: <Cpu className="w-5 h-5 text-green-400" />,
//       category: "language",
//       experience: "2+ years",
//       status: "INTERMEDIATE",
//       tools: ["STL", "OOP", "Pointers", "Data Structures"],
//       lastUpdated: "2024.10.20",
//       proficiency: 60
//     }
//   };
  
//   // Matrix rain effect
//   useEffect(() => {
//     const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
//     const columns = 20;
//     const rain = [];
    
//     for (let i = 0; i < columns; i++) {
//       rain.push({
//         x: i * 50,
//         y: Math.random() * -100,
//         speed: Math.random() * 2 + 1,
//         chars: Array.from({ length: 15 }, () => chars[Math.floor(Math.random() * chars.length)])
//       });
//     }
    
//     setMatrixRain(rain);
//   }, []);
  
//   // Initial terminal messages
//   useEffect(() => {
//     const initialMessages = [
//       { type: 'system', text: 'SKILL ANALYZER v1.0' },
//       { type: 'system', text: 'Loading skill matrix...' },
//       { type: 'success', text: 'Skills loaded successfully.' },
//       { type: 'system', text: "Type 'ls' to list all skills" },
//       { type: 'prompt', text: '~/skills' }
//     ];
//     setTerminalHistory(initialMessages);
//   }, []);

//   // Auto-scroll terminal
//   useEffect(() => {
//     if (terminalRef.current) {
//       terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
//     }
//   }, [terminalHistory]);
  
//   const handleCommand = (e) => {
//     if (e.key === 'Enter' && commandInput.trim() && !isAnalyzing) {
//       const cmd = commandInput.toLowerCase().trim();
      
//       // Add command to history
//       setTerminalHistory(prev => [...prev, 
//         { type: 'prompt', text: '~/skills' },
//         { type: 'command', text: commandInput }
//       ]);
      
//       // Process commands
//       if (cmd === 'ls') {
//         // List all skills
//         const skillsList = Object.keys(skills).join('  ');
//         setTerminalHistory(prev => [...prev, 
//           { type: 'output', text: 'Available skills:' },
//           { type: 'output', text: skillsList }
//         ]);
//       } else if (cmd.startsWith('analyze ')) {
//         // Analyze specific skill
//         const skillName = cmd.replace('analyze ', '').trim();
//         const matchedSkill = Object.keys(skills).find(s => s.toLowerCase() === skillName.toLowerCase());
        
//         if (matchedSkill) {
//           if (!isAnalyzing) {
//             if (selectedSkill === matchedSkill) {
//               setTerminalHistory(prev => [...prev, 
//                 { type: 'warning', text: `${matchedSkill} is already selected.` }
//               ]);
//             } else {
//               setSelectedSkill(matchedSkill);
//               setTerminalHistory(prev => [...prev, 
//                 { type: 'success', text: `Analyzing ${matchedSkill}...` }
//               ]);
//             }
//           } else {
//             setTerminalHistory(prev => [...prev, 
//               { type: 'warning', text: `Please wait for current analysis to complete.` }
//             ]);
//           }
//         } else {
//           setTerminalHistory(prev => [...prev, 
//             { type: 'error', text: `Skill not found: ${skillName}` }
//           ]);
//         }
//       } else if (cmd === 'clear') {
//         // Clear terminal
//         setTerminalHistory([
//           { type: 'system', text: 'Terminal cleared.' }
//         ]);
//         setSelectedSkill(null);
//         setIsAnalyzing(false); // Reset analyzing state
//       } else {
//         // Unknown command
//         setTerminalHistory(prev => [...prev, 
//           { type: 'error', text: `Command not found: ${cmd}. Available commands: ls, analyze [skill], clear` }
//         ]);
//       }
      
//       setCommandInput('');
//     }
//   };
  
//   const hexagonPositions = [
//     { top: '5%', left: '10%' },    // Row 1 - 4 skills
//     { top: '5%', left: '30%' },
//     { top: '5%', left: '50%' },
//     { top: '5%', left: '70%' },
//     { top: '18%', left: '0%' },    // Row 2 - 5 skills  
//     { top: '18%', left: '20%' },
//     { top: '18%', left: '40%' },
//     { top: '18%', left: '60%' },
//     { top: '16.7%', left: '80%' },
//     { top: '31%', left: '10%' },   // Row 3 - 4 skills
//     { top: '31%', left: '30%' },
//     { top: '31%', left: '50%' },
//     { top: '31%', left: '70%' },
//     { top: '44%', left: '20%' },   // Row 4 - 4 skills
//     { top: '44%', left: '40%' },
//     { top: '44%', left: '60%' },
//     { top: '57%', left: '40%' },   // Row 5 - 1 skill (centered)
//   ];

//   return (
//     <div className="min-h-screen pt-32 px-6 relative overflow-hidden">
//       {/* Matrix Rain Background */}
//       <div className="matrix-rain">
//         {matrixRain.map((column, i) => (
//           <div
//             key={i}
//             className="matrix-column"
//             style={{
//               left: `${column.x}px`,
//               animationDuration: `${10 / column.speed}s`
//             }}
//           >
//             {column.chars.map((char, j) => (
//               <span
//                 key={j}
//                 style={{
//                   opacity: 1 - (j / column.chars.length),
//                   color: j === 0 ? '#00ff41' : '#00ff4140'
//                 }}
//               >
//                 {char}
//               </span>
//             ))}
//           </div>
//         ))}
//       </div>
      
//       <div className="max-w-7xl mx-auto relative z-10">
//         <h2 className="text-5xl font-mono font-bold text-green-400 mb-4">
//           <span className="text-gray-400">&gt;</span> <ScrambledText text="SKILL_MATRIX.EXE" />
//         </h2>
//         <p className="text-gray-400 font-mono mb-8">
//           <ScrambledText text="Click nodes to analyze skill data | Use terminal for advanced queries" />
//         </p>
        
//         <div className="grid lg:grid-cols-2 gap-8">
//           {/* Hexagonal Skill Grid */}
//           <div className="relative h-[600px] skill-grid">
//             {Object.entries(skills).map(([skillName, skillData], index) => (
//               <div
//                 key={skillName}
//                 className="absolute"
//                 style={hexagonPositions[index]}
//               >
//                 <Hexagon
//                   skill={skillName}
//                   level={skillData.level}
//                   icon={skillData.icon}
//                   delay={index * 100}
//                   isActive={selectedSkill === skillName}
//                   onClick={() => {
//                     if (!isAnalyzing && selectedSkill !== skillName) {
//                       setSelectedSkill(skillName);
//                     }
//                   }}
//                   disabled={isAnalyzing}
//                 />
//               </div>
//             ))}
//           </div>
          
//           {/* Terminal Interface */}
//           <div className="terminal-container">
//             <div className="terminal-header">
//               <div className="terminal-buttons">
//                 <div className="terminal-button red"></div>
//                 <div className="terminal-button yellow"></div>
//                 <div className="terminal-button green"></div>
//               </div>
//               <span className="terminal-title">skill_analyzer.sh</span>
//             </div>
//             <div className="terminal-body" ref={terminalRef} onClick={() => inputRef.current?.focus()}>
//               {/* Terminal History */}
//               {terminalHistory.map((line, index) => (
//                 <div key={index} className={`terminal-line ${
//                   line.type === 'error' ? 'text-red-400' :
//                   line.type === 'success' ? 'text-green-400' :
//                   line.type === 'warning' ? 'text-yellow-400' :
//                   line.type === 'system' ? 'text-blue-400' :
//                   line.type === 'prompt' ? 'text-green-400' :
//                   line.type === 'command' ? 'text-white' :
//                   'text-gray-300'
//                 }`}>
//                   {line.type === 'prompt' && (
//                     <span>
//                       <span className="text-green-400">rizwi@skills</span>
//                       <span>:</span>
//                       <span className="text-blue-400">{line.text}</span>
//                       <span>$ </span>
//                     </span>
//                   )}
//                   {line.type === 'command' && <span>{line.text}</span>}
//                   {!['prompt', 'command'].includes(line.type) && line.text}
//                 </div>
//               ))}
              
//               {/* Current Terminal Output */}
//               <TerminalOutput 
//                 selectedSkill={selectedSkill} 
//                 skills={skills} 
//                 onAnalysisStart={handleAnalysisStart}
//                 onAnalysisComplete={handleAnalysisComplete}
//               />
              
//               {/* Terminal Input */}
//               <div className="terminal-input-line">
//                 <span className="prompt">rizwi@skills:~/skills$</span>
//                 <input
//                   ref={inputRef}
//                   type="text"
//                   value={commandInput}
//                   onChange={(e) => !isAnalyzing && setCommandInput(e.target.value)}
//                   onKeyDown={handleCommand}
//                   className={`terminal-input ${isAnalyzing ? 'opacity-50' : ''}`}
//                   placeholder={isAnalyzing ? "Analyzing..." : "ls | analyze [skill] | clear"}
//                   disabled={isAnalyzing}
//                   autoFocus
//                 />
//                 <span className={`cursor ${isAnalyzing ? 'opacity-50' : 'animate-pulse'}`}>_</span>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Skill Categories Legend */}
//         <div className="mt-12 flex flex-wrap gap-4 justify-center">
//           {['frontend', 'backend', 'language', 'database', 'security', 'mobile', 'animation', 'design', 'tools'].map(category => (
//             <div key={category} className="category-badge">
//               <span className="category-dot" style={{ backgroundColor: 
//                 category === 'frontend' ? '#00ff41' :
//                 category === 'backend' ? '#00ffaa' :
//                 category === 'security' ? '#ff4141' :
//                 category === 'database' ? '#41aaff' :
//                 category === 'mobile' ? '#ff41ff' :
//                 category === 'animation' ? '#ffff41' :
//                 category === 'design' ? '#ff9141' :
//                 category === 'tools' ? '#41ffff' :
//                 '#aaaaaa'
//               }}></span>
//               <span className="category-name">{category.toUpperCase()}</span>
//             </div>
//           ))}
//         </div>
//       </div>
      
//       <style jsx>{`
//         .matrix-rain {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           overflow: hidden;
//           opacity: 0.1;
//           z-index: 1;
//         }
        
//         .matrix-column {
//           position: absolute;
//           font-family: monospace;
//           font-size: 20px;
//           animation: matrix-fall linear infinite;
//         }
        
//         @keyframes matrix-fall {
//           0% { transform: translateY(-100%); }
//           100% { transform: translateY(100vh); }
//         }
        
//         .hexagon-wrapper {
//           width: 90px;
//           height: 100px;
//           position: relative;
//           transition: transform 0.3s ease;
//         }
        
//         .hexagon-wrapper:hover {
//           transform: scale(1.1);
//           z-index: 10;
//         }
        
//         .hexagon {
//           width: 90px;
//           height: 52px;
//           background: rgba(0, 255, 65, 0.1);
//           position: relative;
//           border: 2px solid rgba(0, 255, 65, 0.3);
//           margin: 26px 0;
//           transition: all 0.3s ease;
//         }
        
//         .hexagon:before,
//         .hexagon:after {
//           content: "";
//           position: absolute;
//           width: 0;
//           border-left: 45px solid transparent;
//           border-right: 45px solid transparent;
//           transition: all 0.3s ease;
//         }
        
//         .hexagon:before {
//           bottom: 100%;
//           border-bottom: 26px solid rgba(0, 255, 65, 0.1);
//           border-bottom-color: inherit;
//         }
        
//         .hexagon:after {
//           top: 100%;
//           border-top: 26px solid rgba(0, 255, 65, 0.1);
//           border-top-color: inherit;
//         }
        
//         .hexagon.hover {
//           background: rgba(0, 255, 65, 0.2);
//           border-color: rgba(0, 255, 65, 0.6);
//           box-shadow: 0 0 30px rgba(0, 255, 65, 0.5);
//         }
        
//         .hexagon.active {
//           background: rgba(0, 255, 65, 0.3);
//           border-color: rgba(0, 255, 65, 0.8);
//           box-shadow: 0 0 40px rgba(0, 255, 65, 0.7);
//         }
        
//         .hexagon-inner {
//           width: 100%;
//           height: 100%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }
        
//         .hexagon-content {
//           text-align: center;
//           color: #00ff41;
//           font-family: monospace;
//         }
        
//         .icon-wrapper {
//           margin-bottom: 4px;
//           color: #00ff41;
//         }
        
//         .skill-name {
//           font-size: 11px;
//           font-weight: bold;
//         }
        
//         .skill-level {
//           font-size: 9px;
//           opacity: 0.8;
//         }
        
//         .terminal-container {
//           background: rgba(0, 0, 0, 0.8);
//           border: 1px solid rgba(0, 255, 65, 0.3);
//           border-radius: 8px;
//           overflow: hidden;
//           height: 600px;
//           display: flex;
//           flex-direction: column;
//         }
        
//         .terminal-header {
//           background: rgba(0, 255, 65, 0.1);
//           padding: 8px 12px;
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           border-bottom: 1px solid rgba(0, 255, 65, 0.3);
//         }
        
//         .terminal-buttons {
//           display: flex;
//           gap: 6px;
//         }
        
//         .terminal-button {
//           width: 12px;
//           height: 12px;
//           border-radius: 50%;
//         }
        
//         .terminal-button.red { background: #ff5f56; }
//         .terminal-button.yellow { background: #ffbd2e; }
//         .terminal-button.green { background: #27c93f; }
        
//         .terminal-title {
//           font-family: monospace;
//           font-size: 12px;
//           color: rgba(0, 255, 65, 0.8);
//         }
        
//         .terminal-body {
//           flex: 1;
//           padding: 16px;
//           overflow-y: auto;
//           font-family: monospace;
//           cursor: text;
//         }
        
//         .terminal-body::-webkit-scrollbar {
//           width: 4px;
//         }
        
//         .terminal-body::-webkit-scrollbar-track {
//           background: rgba(0, 255, 65, 0.1);
//         }
        
//         .terminal-body::-webkit-scrollbar-thumb {
//           background: rgba(0, 255, 65, 0.3);
//           border-radius: 2px;
//         }
        
//         .terminal-body::-webkit-scrollbar-thumb:hover {
//           background: rgba(0, 255, 65, 0.5);
//         }
        
//         .terminal-output {
//           margin-bottom: 16px;
//         }
        
//         .terminal-line {
//           color: #00ff41;
//           margin-bottom: 4px;
//           font-size: 14px;
//           word-break: break-word;
//         }
        
//         .cursor {
//           animation: blink 1s infinite;
//         }
        
//         @keyframes blink {
//           0%, 50% { opacity: 1; }
//           51%, 100% { opacity: 0; }
//         }
        
//         .terminal-input-line {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           margin-top: 8px;
//         }
        
//         .prompt {
//           color: #00ff41;
//           font-size: 14px;
//         }
        
//         .terminal-input {
//           flex: 1;
//           background: transparent;
//           border: none;
//           color: #00ff41;
//           font-family: monospace;
//           font-size: 14px;
//           outline: none;
//         }
        
//         .terminal-input:disabled {
//           cursor: not-allowed;
//           color: rgba(0, 255, 65, 0.5);
//         }
        
//         .category-badge {
//           display: flex;
//           align-items: center;
//           gap: 6px;
//           padding: 4px 12px;
//           background: rgba(0, 0, 0, 0.6);
//           border: 1px solid rgba(0, 255, 65, 0.2);
//           border-radius: 20px;
//           font-family: monospace;
//           font-size: 12px;
//         }
        
//         .category-dot {
//           width: 8px;
//           height: 8px;
//           border-radius: 50%;
//         }
        
//         .category-name {
//           color: rgba(0, 255, 65, 0.8);
//         }
//       `}</style>
//     </div>
//   );
// }




























// PERFECT ----------------------------------------------------------------------------------------------------------------
// app/skills/page.js
// 'use client';
// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { Terminal, Code, Database, Shield, Cpu, Zap, GitBranch, Globe, Lock, Server, Cloud, Layers } from 'lucide-react';
// import { useTransition } from '../layout';
// import ScrambledText from '@/components/ScrambledText';

// // Terminal LS Output Component
// const TerminalLsOutput = ({ skills, onComplete }) => {
//   const [output, setOutput] = useState([]);
//   const [currentLine, setCurrentLine] = useState('');
  
//   useEffect(() => {
//     const skillEntries = Object.entries(skills);
//     const lines = [
//       `total ${skillEntries.length}`,
//       '', // Empty line
//       ...skillEntries.map(([key, skill]) => {
//         const permissions = 'drwxr-xr-x';
//         const level = `${skill.level}/10`.padEnd(5);
//         const category = skill.category.padEnd(10);
//         return `${permissions} ${level} ${category} ${key}`;
//       })
//     ];
    
//     let lineIndex = 0;
//     const timeoutIds = [];
    
//     const typeNextLine = () => {
//       if (lineIndex < lines.length) {
//         const line = lines[lineIndex];
//         let charIndex = 0;
        
//         const typeChar = () => {
//           if (charIndex <= line.length) {
//             setCurrentLine(line.substring(0, charIndex));
//             charIndex++;
//             const timeoutId = setTimeout(typeChar, 15);
//             timeoutIds.push(timeoutId);
//           } else {
//             setOutput(prev => [...prev, line]);
//             setCurrentLine('');
//             lineIndex++;
//             const timeoutId = setTimeout(typeNextLine, 80);
//             timeoutIds.push(timeoutId);
//           }
//         };
        
//         typeChar();
//       } else {
//         onComplete();
//       }
//     };
    
//     typeNextLine();
    
//     // Cleanup
//     return () => {
//       timeoutIds.forEach(id => clearTimeout(id));
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [skills]);
  
//   return (
//     <>
//       {output.map((line, i) => (
//         <div key={`ls-output-${i}`} className="text-gray-300 mb-1 font-mono text-sm">{line || '\u00A0'}</div>
//       ))}
//       {currentLine && <div key="ls-current" className="text-gray-300 mb-1 font-mono text-sm">{currentLine}<span className="animate-pulse">_</span></div>}
//     </>
//   );
// };

// // Hexagon Component
// const Hexagon = ({ skill, level, icon, delay, isActive, onClick, disabled }) => {
//   const [isHovered, setIsHovered] = useState(false);
  
//   return (
//     <div
//       className={`hexagon-wrapper animate-fade-in ${disabled ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'} ${isActive ? 'active' : ''}`}
//       style={{ animationDelay: `${delay}ms` }}
//       onMouseEnter={() => !disabled && setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       onClick={() => !disabled && onClick()}
//     >
//       <div className={`hexagon ${isHovered && !disabled ? 'hover' : ''} ${isActive ? 'active' : ''}`}>
//         <div className="hexagon-inner">
//           <div className="hexagon-content">
//             <div className="icon-wrapper">
//               {icon}
//             </div>
//             <div className="skill-name">{skill}</div>
//             <div className="skill-level">Lvl {level}</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Terminal Output Component
// const TerminalOutput = ({ selectedSkill, skills, onAnalysisStart, onAnalysisComplete }) => {
//   const [output, setOutput] = useState([]);
//   const [currentLine, setCurrentLine] = useState('');
//   const analysisIdRef = useRef(0);
  
//   useEffect(() => {
//     // Clear output immediately
//     setOutput([]);
//     setCurrentLine('');
    
//     if (!selectedSkill) {
//       return;
//     }
    
//     const skillData = skills[selectedSkill];
//     if (!skillData) return;
    
//     // Increment analysis ID for this session
//     analysisIdRef.current += 1;
//     const currentAnalysisId = analysisIdRef.current;
    
//     // Array to store timeout IDs for cleanup
//     const timeoutIds = [];
    
//     onAnalysisStart(); // Notify parent that analysis has started
    
//     const lines = [
//       `> Analyzing ${selectedSkill}...`,
//       `> Security Level: ${skillData.level}/10`,
//       `> Experience: ${skillData.experience}`,
//       `> Access Status: ${skillData.status}`,
//       `> Loaded Modules: ${skillData.tools.join(', ')}`,
//       `> Last Modified: ${skillData.lastUpdated}`,
//       `> System Usage: ${skillData.proficiency}%`,
//       '> Analysis complete.'
//     ];
    
//     let lineIndex = 0;
    
//     const typeNextLine = () => {
//       // Check if this is still the current analysis
//       if (currentAnalysisId !== analysisIdRef.current) return;
      
//       if (lineIndex < lines.length) {
//         const line = lines[lineIndex];
//         let charIndex = 0;
        
//         const typeChar = () => {
//           // Check if this is still the current analysis
//           if (currentAnalysisId !== analysisIdRef.current) return;
          
//           if (charIndex <= line.length) {
//             setCurrentLine(line.substring(0, charIndex));
//             charIndex++;
//             const timeoutId = setTimeout(typeChar, 20);
//             timeoutIds.push(timeoutId);
//           } else {
//             setOutput(prev => [...prev, line]);
//             setCurrentLine('');
//             lineIndex++;
//             const timeoutId = setTimeout(typeNextLine, 100);
//             timeoutIds.push(timeoutId);
//           }
//         };
        
//         typeChar();
//       } else {
//         // Check if this is still the current analysis before completing
//         if (currentAnalysisId === analysisIdRef.current) {
//           onAnalysisComplete(); // Notify parent that analysis is complete
//         }
//       }
//     };
    
//     typeNextLine();
    
//     // Cleanup function
//     return () => {
//       timeoutIds.forEach(id => clearTimeout(id));
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [selectedSkill]); // Only re-run when selectedSkill changes
  
//   return (
//     <div className="terminal-output mb-4">
//       {output.map((line, i) => (
//         <div key={`analysis-${i}`} className="terminal-line text-gray-300 mb-1 font-mono text-sm">{line}</div>
//       ))}
//       {currentLine && <div className="terminal-line text-gray-300 mb-1 font-mono text-sm">{currentLine}<span className="cursor animate-pulse">_</span></div>}
//     </div>
//   );
// };

// export default function SkillsPage() {
//   const { isTransitioning } = useTransition();
//   const [selectedSkill, setSelectedSkill] = useState(null);
//   const [commandInput, setCommandInput] = useState('');
//   const [matrixRain, setMatrixRain] = useState([]);
//   const [terminalHistory, setTerminalHistory] = useState([]);
//   const [isAnalyzing, setIsAnalyzing] = useState(false);
//   const [showLsOutput, setShowLsOutput] = useState(false);
//   const terminalRef = useRef(null);
//   const inputRef = useRef(null);
  
//   // Memoize callbacks to prevent re-renders
//   const handleAnalysisStart = useCallback(() => {
//     setIsAnalyzing(true);
//   }, []);
  
//   const handleAnalysisComplete = useCallback(() => {
//     setIsAnalyzing(false);
//   }, []);
  
//   // Reset states when selectedSkill is cleared
//   useEffect(() => {
//     if (!selectedSkill) {
//       setIsAnalyzing(false);
//       setShowLsOutput(false);
//     }
//   }, [selectedSkill]);
  
//   // Custom Logo Components - with dynamic size and color support
//   const TailwindLogo = ({ className = "w-6 h-6", color = "#00ff41" }) => (
//     <svg viewBox="0 0 24 24" fill="none" className={className}>
//       <path fillRule="evenodd" clipRule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345-.98-.99-2.114-2.134-4.594-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C8.387 16.855 9.522 18 12 18c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z" fill={color}/>
//     </svg>
//   );

//   const ReactLogo = ({ className = "w-6 h-6", color = "#00ff41" }) => (
//     <svg viewBox="0 0 24 24" className={className}>
//       <g fill={color}>
//         <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.62c1.714-1.628 3.312-2.526 4.11-2.526zm-8.753.001c.801 0 2.396.89 4.115 2.517a23.897 23.897 0 0 0-2.045 2.522 23.366 23.366 0 0 0-3.096.538c-.108-.498-.2-.982-.254-1.442-.225-1.865.059-3.314.721-3.698.147-.09.335-.136.56-.136zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-.803 0-2.396-.89-4.116-2.518a26.37 26.37 0 0 0 2.045-2.522 23.361 23.361 0 0 0 3.095-.537zm-11.83.001a23.32 23.32 0 0 0 3.097.538 23.802 23.802 0 0 0 2.045 2.525c-1.715 1.63-3.313 2.527-4.11 2.527-.225 0-.406-.042-.558-.128-.666-.382-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
//       </g>
//     </svg>
//   );

//   const ReactNativeLogo = ({ className = "w-6 h-6", color = "#00ff41" }) => (
//     <svg viewBox="0 0 24 24" className={className}>
//       <g fill={color}>
//         {/* Original React Logo Paths */}
//         <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.62c1.714-1.628 3.312-2.526 4.11-2.526zm-8.753.001c.801 0 2.396.89 4.115 2.517a23.897 23.897 0 0 0-2.045 2.522 23.366 23.366 0 0 0-3.096.538c-.108-.498-.2-.982-.254-1.442-.225-1.865.059-3.314.721-3.698.147-.09.335-.136.56-.136zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-.803 0-2.396-.89-4.116-2.518a26.37 26.37 0 0 0 2.045-2.522 23.361 23.361 0 0 0 3.095-.537zm-11.83.001a23.32 23.32 0 0 0 3.097.538 23.802 23.802 0 0 0 2.045 2.525c-1.715 1.63-3.313 2.527-4.11 2.527-.225 0-.406-.042-.558-.128-.666-.382-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
        
//         {/* Exponent "N" at top right */}
//         <text 
//           x="20.2" 
//           y="7" 
//           fontSize="6" 
//           fontWeight="bold" 
//           fontFamily="Arial, sans-serif"
//           fill={color}
//         >
//           N
//         </text>
//       </g>
//     </svg>
//   );

//   const NextLogo = ({ className = "w-6 h-6", color = "" }) => (
//     <svg 
//       viewBox="0 0 180 180" 
//       className={className} 
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <mask
//         id="mask0_408_134"
//         style={{ maskType: "alpha" }}
//         maskUnits="userSpaceOnUse"
//         x="0"
//         y="0"
//         width="180"
//         height="180"
//       >
//         <circle cx="90" cy="90" r="90" fill="black" />
//       </mask>
//       <g mask="url(#mask0_408_134)">
//         <circle cx="90" cy="90" r="90" fill={color} />
//         <path
//           d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
//           fill="url(#paint0_linear_408_134)"
//         />
//         <rect
//           x="115"
//           y="54"
//           width="12"
//           height="72"
//           fill="url(#paint1_linear_408_134)"
//         />
//       </g>
//       <defs>
//         <linearGradient
//           id="paint0_linear_408_134"
//           x1="109"
//           y1="116.5"
//           x2="144.5"
//           y2="160.5"
//           gradientUnits="userSpaceOnUse"
//         >
//           <stop stopColor="#00ff41" />
//           <stop offset="1" stopColor="#00ff41" stopOpacity="0" />
//         </linearGradient>
//         <linearGradient
//           id="paint1_linear_408_134"
//           x1="121"
//           y1="54"
//           x2="120.799"
//           y2="106.875"
//           gradientUnits="userSpaceOnUse"
//         >
//           <stop stopColor="#00ff41" />
//           <stop offset="1" stopColor="#00ff41" stopOpacity="0" />
//         </linearGradient>
//       </defs>
//     </svg>
//   );

//   const CanvaLogo = ({ className = "w-6 h-6", color = "#00C4CC" }) => ( // Canva's official turquoise color
//     <svg 
//       viewBox="0 0 100 100" 
//       className={className} 
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path 
//         d="M50 5C25.1878 5 5 25.1878 5 50C5 74.8122 25.1878 95 50 95C62.8956 95 74.5615 89.5171 82.6777 80.6066C83.9134 79.2433 84.0294 77.1776 82.9289 75.6776C81.4516 73.6552 78.5403 73.3351 76.6559 74.9435C70.3981 80.0923 62.5209 83 54 83C35.2223 83 20 67.7777 20 49C20 30.2223 35.2223 15 54 15C65.4688 15 75.6244 21.0547 81.2617 30.1797C82.2852 31.8867 84.4852 32.4539 86.1922 31.4304C87.8992 30.4069 88.4664 28.2069 87.4429 26.4999C79.7585 13.8516 66.3662 5 50 5Z"
//         fill={color}
//         fillRule="evenodd"
//         clipRule="evenodd"
//       />
//     </svg>
//   );

//   const NodeLogo = ({ className = "w-6 h-6", color = "#00ff41" }) => (
//     <svg viewBox="0 0 24 24" className={className}>
//       <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.602.065-.037.151-.023.218.016l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.135-.141.135-.241V6.921c0-.103-.055-.198-.137-.246l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.075 6.68c-.084.048-.139.144-.139.245v10.142c0 .1.055.194.137.241l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.924-.943-.924-1.609V6.921c0-.665.355-1.283.924-1.611L11.073.236a1.882 1.882 0 0 1 1.85 0l8.794 5.074c.57.329.924.946.924 1.611v10.145c0 .666-.354 1.278-.924 1.609l-8.794 5.078c-.28.163-.599.247-.925.247zm2.718-6.993c-3.848 0-4.653-1.766-4.653-3.25 0-.14.114-.254.256-.254h1.135c.128 0 .235.093.253.219.173 1.17.691 1.761 3.01 1.761 1.851 0 2.639-.419 2.639-1.402 0-.565-.225-1.007-3.103-1.296-2.408-.243-3.896-.77-3.896-2.697 0-1.778 1.5-2.836 4.012-2.836 2.823 0 4.218.98 4.394 3.083a.256.256 0 0 1-.255.278h-1.143a.252.252 0 0 1-.247-.199c-.275-1.22-.94-1.611-2.749-1.611-2.024 0-2.26.705-2.26 1.234 0 .641.277.828 3.006 1.19 2.7.358 3.985.865 3.985 2.773 0 1.921-1.603 3.022-4.397 3.022z" fill={color}/>
//     </svg>
//   );

//   const ExpressLogo = ({ className = "w-6 h-6", color = "#00ff41" }) => (
//     <svg viewBox="0 0 24 24" className={className}>
//       <path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" fill={color}/>
//     </svg>
//   );

//   const FramerLogo = ({ className = "w-6 h-6", color = "#00ff41" }) => (
//     <svg viewBox="0 0 24 24" className={className}>
//       <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill={color}/>
//     </svg>
//   );

//   const skills = {
//     "HTML": {
//       level: 9,
//       icon: <Code className="w-5 h-5" style={{ color: "#00ff41" }} />,
//       category: "frontend",
//       experience: "5+ years",
//       status: "EXPERT",
//       tools: ["HTML5", "Semantic HTML", "SEO", "Accessibility"],
//       lastUpdated: "2024.12.20",
//       proficiency: 95
//     },
//     "CSS": {
//       level: 9,
//       icon: <Layers className="w-5 h-5" style={{ color: "#00ff41" }} />,
//       category: "frontend",
//       experience: "5+ years",
//       status: "EXPERT",
//       tools: ["Flexbox", "Grid", "Animations", "Responsive"],
//       lastUpdated: "2024.12.20",
//       proficiency: 90
//     },
//     "JavaScript": {
//       level: 8,
//       icon: <Terminal className="w-5 h-5" style={{ color: "#00ff41" }} />,
//       category: "language",
//       experience: "4+ years",
//       status: "ADVANCED",
//       tools: ["ES6+", "Async/Await", "DOM API", "Modules"],
//       lastUpdated: "2024.12.22",
//       proficiency: 85
//     },
//     "Tailwind": {
//       level: 8,
//       icon: <TailwindLogo className="w-5 h-5" />, // Change size here: w-8 h-8, w-10 h-10, etc.
//       category: "frontend",
//       experience: "2+ years",
//       status: "ADVANCED",
//       tools: ["JIT", "Custom Config", "Plugins", "DaisyUI"],
//       lastUpdated: "2024.12.15",
//       proficiency: 85
//     },
//     "React": {
//       level: 8,
//       icon: <ReactLogo className="w-5 h-5" />, // Color change: <ReactLogo className="w-5 h-5" color="#61DAFB" />
//       category: "frontend",
//       experience: "3+ years",
//       status: "ADVANCED",
//       tools: ["Hooks", "Context API", "Redux", "React Router"],
//       lastUpdated: "2024.12.20",
//       proficiency: 85
//     },
//     "Node.js": {
//       level: 7,
//       icon: <NodeLogo className="w-5 h-5" />,
//       category: "backend",
//       experience: "3+ years",
//       status: "PROFICIENT",
//       tools: ["NPM", "REST APIs", "File System", "Streams"],
//       lastUpdated: "2024.12.10",
//       proficiency: 75
//     },
//     "Express.js": {
//       level: 7,
//       icon: <ExpressLogo className="w-5 h-5" />,
//       category: "backend",
//       experience: "3+ years",
//       status: "PROFICIENT",
//       tools: ["Middleware", "Routing", "Error Handling", "JWT"],
//       lastUpdated: "2024.12.10",
//       proficiency: 75
//     },
//     "MongoDB": {
//       level: 7,
//       icon: <Database className="w-5 h-5" style={{ color: "#00ff41" }} />,
//       category: "database",
//       experience: "2+ years",
//       status: "PROFICIENT",
//       tools: ["Mongoose", "Aggregation", "Indexing", "Atlas"],
//       lastUpdated: "2024.12.05",
//       proficiency: 70
//     },
//     "Next.js": {
//       level: 7,
//       icon: <NextLogo className="w-7 h-7" />,
//       category: "frontend",
//       experience: "2+ years",
//       status: "PROFICIENT",
//       tools: ["App Router", "SSR", "SSG", "API Routes"],
//       lastUpdated: "2024.12.18",
//       proficiency: 75
//     },
//     "Auth.js": {
//       level: 6,
//       icon: <Lock className="w-5 h-5" style={{ color: "#00ff41" }} />,
//       category: "security",
//       experience: "1+ years",
//       status: "INTERMEDIATE",
//       tools: ["NextAuth", "OAuth", "JWT", "Session Management"],
//       lastUpdated: "2024.11.30",
//       proficiency: 65
//     },
//     "R3F": {
//       level: 7,
//       icon: <Globe className="w-5 h-5" style={{ color: "#00ff41" }} />,
//       category: "frontend",
//       experience: "2+ years",
//       status: "PROFICIENT",
//       tools: ["Three.js", "3D Graphics", "WebGL", "Drei"],
//       lastUpdated: "2024.12.18",
//       proficiency: 70
//     },
//     "React Native": {
//       level: 6,
//       icon: <ReactNativeLogo className="w-5 h-5" />,
//       category: "mobile",
//       experience: "1+ years",
//       status: "INTERMEDIATE",
//       tools: ["Expo", "Navigation", "Native APIs", "StyleSheet"],
//       lastUpdated: "2024.11.15",
//       proficiency: 60
//     },
//     "GSAP": {
//       level: 8,
//       icon: <Zap className="w-5 h-5" style={{ color: "#00ff41" }} />,
//       category: "animation",
//       experience: "3+ years",
//       status: "ADVANCED",
//       tools: ["Timeline", "ScrollTrigger", "Morphing", "Easing"],
//       lastUpdated: "2024.12.12",
//       proficiency: 80
//     },
//     "Motion": {
//       level: 7,
//       icon: <FramerLogo className="w-5 h-5" />,
//       category: "animation",
//       experience: "2+ years",
//       status: "PROFICIENT",
//       tools: ["Gestures", "Variants", "Layout", "AnimatePresence"],
//       lastUpdated: "2024.12.08",
//       proficiency: 75
//     },
//     "Git & GitHub": {
//       level: 8,
//       icon: <GitBranch className="w-5 h-5" style={{ color: "#00ff41" }} />,
//       category: "tools",
//       experience: "4+ years",
//       status: "ADVANCED",
//       tools: ["Branching", "Pull Requests", "Actions", "Pages"],
//       lastUpdated: "2024.12.22",
//       proficiency: 85
//     },
//     "Canva": {
//       level: 7,
//       icon: <CanvaLogo className="w-5 h-5" color="#00ff41" />,
//       category: "design",
//       experience: "3+ years",
//       status: "PROFICIENT",
//       tools: ["Templates", "Brand Kit", "Video Editing", "Presentations"],
//       lastUpdated: "2024.12.15",
//       proficiency: 75
//     },
//     "C++": {
//       level: 6,
//       icon: <Cpu className="w-5 h-5" style={{ color: "#00ff41" }} />,
//       category: "language",
//       experience: "2+ years",
//       status: "INTERMEDIATE",
//       tools: ["STL", "OOP", "Pointers", "Data Structures"],
//       lastUpdated: "2024.10.20",
//       proficiency: 60
//     }
//   };
  
//   // Matrix rain effect
//   useEffect(() => {
//     const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
//     const columns = 20;
//     const rain = [];
    
//     for (let i = 0; i < columns; i++) {
//       rain.push({
//         x: i * 50,
//         y: Math.random() * -100,
//         speed: Math.random() * 2 + 1,
//         chars: Array.from({ length: 15 }, () => chars[Math.floor(Math.random() * chars.length)])
//       });
//     }
    
//     setMatrixRain(rain);
//   }, []);
  
//   // Initial terminal messages
//   useEffect(() => {
//     const initialMessages = [
//       { type: 'system', text: 'SKILL ANALYZER v3.7' },
//       { type: 'system', text: 'Establishing secure connection...' },
//       { type: 'success', text: 'Connection established.' },
//       { type: 'system', text: `Type 'help' for available commands` },
//       // { type: 'prompt', text: '/home/rizwi/skills' },
//       // { type: 'command', text: 'pwd' },
//       // { type: 'output', text: '/home/rizwi/skills' },
//       // { type: 'prompt', text: '~/skills' }
//     ];
//     setTerminalHistory(initialMessages);
//   }, []);

//   // Auto-scroll terminal
//   useEffect(() => {
//     if (terminalRef.current) {
//       terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
//     }
//   }, [terminalHistory]);
  
//   const handleCommand = (e) => {
//     if (e.key === 'Enter' && commandInput.trim() && !isAnalyzing) {
//       const cmd = commandInput.toLowerCase().trim();
      
//       // Add command to history
//       setTerminalHistory(prev => [...prev, 
//         { type: 'prompt', text: '~/skills' },
//         // { type: 'command', text: commandInput }
//       ]);
      
//       // Process commands
//       if (cmd === 'ls' || cmd === 'ls -la') {
//         // List all skills with animation
//         setIsAnalyzing(true); // Block input during ls output
//         setShowLsOutput(true);

//         // FIX 1: Add the LS output to terminal history after completion
//         const skillEntries = Object.entries(skills);
//         const lsOutput = [
//           `total ${skillEntries.length}`,
//           '', // Empty line
//           ...skillEntries.map(([key, skill]) => {
//             const permissions = 'drwxr-xr-x';
//             const level = `${skill.level}/10`.padEnd(5);
//             const category = skill.category.padEnd(10);
//             return `${permissions} ${level} ${category} ${key}`;
//           })
//         ];
        
//         // Add to history after animation completes
//         setTimeout(() => {
//           setTerminalHistory(prev => [
//             ...prev,
//             ...lsOutput.map(line => ({ type: 'output', text: line || '\u00A0' }))
//           ]);
//         }, lsOutput.length * 612.5); // Approximate time for animation

//       } else if (cmd.startsWith('analyze ')) {
//         // Analyze specific skill
//         const skillName = cmd.replace('analyze ', '').trim();
//         const matchedSkill = Object.keys(skills).find(s => s.toLowerCase() === skillName.toLowerCase());
        
//         if (matchedSkill) {
//           if (!isAnalyzing) {
//               if (selectedSkill === matchedSkill) {
//               setTerminalHistory(prev => [...prev, 
//                 { type: 'warning', text: `${matchedSkill} is already selected.` }
//               ]);
//             } else {
//               setSelectedSkill(matchedSkill);
//               setTerminalHistory(prev => [...prev, 
//                 { type: 'success', text: `Decrypting ${matchedSkill} skill data...` }
//               ]);
//             }
//           } else {
//             setTerminalHistory(prev => [...prev, 
//               { type: 'warning', text: `Please wait for current analysis to complete.` }
//             ]);
//           }
//         } else {
//           setTerminalHistory(prev => [...prev, 
//             { type: 'error', text: `Skill not found: ${skillName}` }
//           ]);
//         }
//       } else if (cmd === 'clear') {
//         // Clear terminal
//         setTerminalHistory([]);
//         setSelectedSkill(null);
//         setShowLsOutput(false);
//         setIsAnalyzing(false); // Reset analyzing state
//       } else if (cmd === 'pwd') {
//         // Print working directory
//         setTerminalHistory(prev => [...prev, 
//           { type: 'output', text: '/home/rizwi/skills' }
//         ]);
//       } else if (cmd === 'help') {
//         setSelectedSkill(null);
//         setIsAnalyzing(true);
        
//         // FIX 2: Add all help text at once to avoid undefined issues
//         const helpText = [
//           'Available commands:',
//           '  ls               - List directory contents',
//           '  pwd              - Print working directory',
//           '  analyze <skill>  - Decrypt and analyze skill data',
//           '  clear            - Clear terminal',
//           '  help             - Show this help message',
//           '  exit             - Exit terminal'
//         ];

//         // Add all help text to history at once after a delay
//         setTimeout(() => {
//           setTerminalHistory(prev => [
//             ...prev,
//             ...helpText.map(text => ({ type: 'output', text }))
//           ]);
//           setIsAnalyzing(false);
//         }, 70);
        
//       } else if (cmd === 'exit') {
//         setTerminalHistory(prev => [...prev, 
//           { type: 'system', text: 'Goodbye.' }
//         ]);
//       } else {
//         // Unknown command
//         setTerminalHistory(prev => [...prev, 
//           { type: 'error', text: `bash: ${cmd}: command not found` }
//         ]);
//       }
      
//       setCommandInput('');
//     }
//   };
  
//   const hexagonPositions = [
//     { top: '5%', left: '10%' },    // Row 1 - 4 skills
//     { top: '5%', left: '30%' },
//     { top: '5%', left: '50%' },
//     { top: '5%', left: '70%' },
//     { top: '18%', left: '0%' },    // Row 2 - 5 skills  
//     { top: '18%', left: '20%' },
//     { top: '18%', left: '40%' },
//     { top: '18%', left: '60%' },
//     { top: '16.7%', left: '80%' },
//     { top: '31%', left: '10%' },   // Row 3 - 4 skills
//     { top: '31%', left: '30%' },
//     { top: '31%', left: '50%' },
//     { top: '31%', left: '70%' },
//     { top: '44%', left: '20%' },   // Row 4 - 4 skills
//     { top: '44%', left: '40%' },
//     { top: '44%', left: '60%' },
//     { top: '57%', left: '40%' },   // Row 5 - 1 skill (centered)
//   ];

//   return (
//     <div className="min-h-screen pt-32 px-6 relative overflow-hidden">
//       {/* Matrix Rain Background */}
//       <div className="matrix-rain">
//         {matrixRain.map((column, i) => (
//           <div
//             key={i}
//             className="matrix-column"
//             style={{
//               left: `${column.x}px`,
//               animationDuration: `${10 / column.speed}s`
//             }}
//           >
//             {column.chars.map((char, j) => (
//               <span
//                 key={j}
//                 style={{
//                   opacity: 1 - (j / column.chars.length),
//                   color: j === 0 ? '#00ff41' : '#00ff4140'
//                 }}
//               >
//                 {char}
//               </span>
//             ))}
//           </div>
//         ))}
//       </div>
      
//       <div className="max-w-7xl mx-auto relative z-10">
//         <h2 className="text-5xl font-mono font-bold text-green-400 mb-4">
//           <span className="text-gray-400">&gt;</span> <ScrambledText text="SKILLS.CONFIG" />
//         </h2>
//         <p className="text-gray-400 font-mono mb-8">
//           <ScrambledText text="Click nodes to analyze skill data | Use terminal for advanced queries" />
//         </p>
        
//         <div className="grid lg:grid-cols-2 gap-8">
//           {/* Hexagonal Skill Grid */}
//           <div className="relative h-[600px] skill-grid">
//             {Object.entries(skills).map(([skillName, skillData], index) => (
//               <div
//                 key={skillName}
//                 className="absolute"
//                 style={hexagonPositions[index]}
//               >
//                 <Hexagon
//                   skill={skillName}
//                   level={skillData.level}
//                   icon={skillData.icon}
//                   delay={index * 100}
//                   isActive={selectedSkill === skillName}
//                   onClick={() => {
//                     if (!isAnalyzing && selectedSkill !== skillName) {
//                       setTerminalHistory(prev => [...prev, 
//                         { type: 'prompt', text: '~/skills' },
//                         { type: 'success', text: `Decrypting ${skillName} skill data...` }
//                       ]);
//                       setSelectedSkill(skillName);
//                     }
//                   }}
//                   disabled={isAnalyzing}
//                 />
//               </div>
//             ))}
//           </div>
          
//           {/* Terminal Interface */}
//           <div className="bg-black/80 backdrop-blur-sm border border-green-500/30 rounded-lg overflow-hidden h-[600px] flex flex-col">
//             <div className="bg-green-950/30 px-4 py-2 border-b border-green-500/30 flex items-center justify-between">
//               <div className="flex items-center gap-2">
//                 <div className="flex gap-2">
//                   <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//                   <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//                   <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                 </div>
//                 <span className="text-xs text-green-400 font-mono ml-2">terminal.nexus</span>
//               </div>
//               <Terminal className="w-4 h-4 text-green-400" />
//             </div>
//             <div className="flex-1 p-4 overflow-y-auto font-mono text-sm" ref={terminalRef} onClick={() => inputRef.current?.focus()}>
//               {/* Terminal History */}
//               {terminalHistory.map((line, index) => (
//                 <div key={`history-${index}`} className={`mb-1 font-mono text-sm ${
//                   line.type === 'error' ? 'text-red-400' :
//                   line.type === 'success' ? 'text-green-400' :
//                   line.type === 'warning' ? 'text-yellow-400' :
//                   line.type === 'system' ? 'text-blue-400' :
//                   line.type === 'prompt' ? 'text-green-400' :
//                   line.type === 'command' ? 'text-white' :
//                   'text-gray-300'
//                 }`}>
//                   {line.type === 'prompt' && (
//                     <span>
//                       <span className="text-green-400">rizwi@skills</span>
//                       <span>:</span>
//                       <span className="text-blue-400">{line.text}</span>
//                       <span>$ </span>
//                     </span>
//                   )}
//                   {line.type === 'command' && <span className="ml-0">{line.text}</span>}
//                   {!['prompt', 'command'].includes(line.type) && line.text}
//                 </div>
//               ))}
              
//               {/* LS Output */}
//               {showLsOutput && (
//                 <TerminalLsOutput 
//                   skills={skills}
//                   onComplete={() => {
//                     setShowLsOutput(false);
//                     setIsAnalyzing(false);
//                   }}
//                 />
//               )}
              
//               {/* Current Terminal Output */}
//               <TerminalOutput 
//                 selectedSkill={selectedSkill} 
//                 skills={skills} 
//                 onAnalysisStart={handleAnalysisStart}
//                 onAnalysisComplete={handleAnalysisComplete}
//               />
              
//               {/* Terminal Input */}
//               <div className="flex items-center text-green-400 mt-2">
//                 <span className="text-green-400">rizwi@skills</span>
//                 <span>:</span>
//                 <span className="text-blue-400">~/skills</span>
//                 <span>$ </span>
//                 <input
//                   ref={inputRef}
//                   type="text"
//                   value={commandInput}
//                   onChange={(e) => !isAnalyzing && setCommandInput(e.target.value)}
//                   onKeyDown={handleCommand}
//                   className={`flex-1 bg-transparent border-none outline-none ml-1 text-white ${isAnalyzing ? 'opacity-50' : ''}`}
//                   placeholder={isAnalyzing ? "" : ""}
//                   disabled={isAnalyzing}
//                   autoFocus
//                 />
//                 <span className={`${isAnalyzing ? 'opacity-50' : 'animate-pulse'}`}>_</span>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Instructions */}
//         <div className="mt-8 bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-4">
//           <div className="flex items-start gap-3">
//             <Terminal className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
//             <div className="font-mono text-sm">
//               <p className="text-green-400 mb-2">Quick Start:</p>
//               <div className="text-gray-400 space-y-1">
//                 <p>1. Type <span className="text-green-400">'pwd'</span> to see current directory</p>
//                 <p>2. Type <span className="text-green-400">'ls'</span> to list all skills</p>
//                 <p>3. Type <span className="text-green-400">'analyze [skill]'</span> to decrypt skill data</p>
//                 <p>4. Click on hexagon nodes for quick access</p>
//                 <p>5. Type <span className="text-green-400">'help'</span> for all commands</p>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Skill Categories Legend */}
//         <div className="mt-12 flex flex-wrap gap-4 justify-center">
//           {['frontend', 'backend', 'language', 'database', 'security', 'mobile', 'animation', 'design', 'tools'].map(category => (
//             <div key={category} className="category-badge">
//               <span className="category-dot" style={{ backgroundColor: 
//                 category === 'frontend' ? '#00ff41' :
//                 category === 'backend' ? '#00ffaa' :
//                 category === 'security' ? '#ff4141' :
//                 category === 'database' ? '#41aaff' :
//                 category === 'mobile' ? '#ff41ff' :
//                 category === 'animation' ? '#ffff41' :
//                 category === 'design' ? '#ff9141' :
//                 category === 'tools' ? '#41ffff' :
//                 '#aaaaaa'
//               }}></span>
//               <span className="category-name">{category.toUpperCase()}</span>
//             </div>
//           ))}
//         </div>
//       </div>
      
//       <style jsx>{`
//         .matrix-rain {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           overflow: hidden;
//           opacity: 0.1;
//           z-index: 1;
//         }
        
//         .matrix-column {
//           position: absolute;
//           font-family: monospace;
//           font-size: 20px;
//           animation: matrix-fall linear infinite;
//         }
        
//         @keyframes matrix-fall {
//           0% { transform: translateY(-100%); }
//           100% { transform: translateY(100vh); }
//         }
        
//         .hexagon-wrapper {
//           width: 90px;
//           height: 100px;
//           position: relative;
//           transition: transform 0.3s ease;
//         }
        
//         .hexagon-wrapper:hover {
//           transform: scale(1.1);
//           z-index: 10;
//         }
        
//         .hexagon {
//           width: 90px;
//           height: 52px;
//           background: rgba(0, 255, 65, 0.1);
//           position: relative;
//           border: 2px solid rgba(0, 255, 65, 0.3);
//           margin: 26px 0;
//           transition: all 0.3s ease;
//         }
        
//         .hexagon:before,
//         .hexagon:after {
//           content: "";
//           position: absolute;
//           width: 0;
//           border-left: 45px solid transparent;
//           border-right: 45px solid transparent;
//           transition: all 0.3s ease;
//         }
        
//         .hexagon:before {
//           bottom: 100%;
//           border-bottom: 26px solid rgba(0, 255, 65, 0.1);
//           border-bottom-color: inherit;
//         }
        
//         .hexagon:after {
//           top: 100%;
//           border-top: 26px solid rgba(0, 255, 65, 0.1);
//           border-top-color: inherit;
//         }
        
//         .hexagon.hover {
//           background: rgba(0, 255, 65, 0.2);
//           border-color: rgba(0, 255, 65, 0.6);
//           box-shadow: 0 0 30px rgba(0, 255, 65, 0.5);
//         }
        
//         .hexagon.active {
//           background: rgba(0, 255, 65, 0.3);
//           border-color: rgba(0, 255, 65, 0.8);
//           box-shadow: 0 0 40px rgba(0, 255, 65, 0.7);
//         }
        
//         .hexagon-inner {
//           width: 100%;
//           height: 100%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }
        
//         .hexagon-content {
//           text-align: center;
//           color: #00ff41;
//           font-family: monospace;
//         }
        
//         .icon-wrapper {
//           margin-bottom: 4px;
//           color: #00ff41;
//         }
        
//         .skill-name {
//           font-size: 11px;
//           font-weight: bold;
//         }
        
//         .skill-level {
//           font-size: 9px;
//           opacity: 0.8;
//         }
        
//         /* Terminal scrollbar styling */
//         div::-webkit-scrollbar {
//           width: 4px;
//           height: 4px;
//         }
        
//         div::-webkit-scrollbar-track {
//           background: rgba(0, 255, 65, 0.1);
//         }
        
//         div::-webkit-scrollbar-thumb {
//           background: rgba(0, 255, 65, 0.3);
//           border-radius: 2px;
//         }
        
//         div::-webkit-scrollbar-thumb:hover {
//           background: rgba(0, 255, 65, 0.5);
//         }
        
//         .terminal-output {
//           margin-bottom: 16px;
//         }
        
//         .terminal-line {
//           color: #00ff41;
//         }
        
//         @keyframes blink {
//           0%, 50% { opacity: 1; }
//           51%, 100% { opacity: 0; }
//         }
        
//         .category-badge {
//           display: flex;
//           align-items: center;
//           gap: 6px;
//           padding: 4px 12px;
//           background: rgba(0, 0, 0, 0.6);
//           border: 1px solid rgba(0, 255, 65, 0.2);
//           border-radius: 20px;
//           font-family: monospace;
//           font-size: 12px;
//         }
        
//         .category-dot {
//           width: 8px;
//           height: 8px;
//           border-radius: 50%;
//         }
        
//         .category-name {
//           color: rgba(0, 255, 65, 0.8);
//         }
//       `}</style>
//     </div>
//   );
// }


























// PERFECT 2 -----------------------------------------------------------------------------------------------------------------
// app/skills/page.js
'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Terminal, Code, Database, Shield, Cpu, Zap, GitBranch, Globe, Lock, Server, Cloud, Layers } from 'lucide-react';
import { useTransition } from '../layout';
import ScrambledText from '@/components/ScrambledText';

// Terminal LS Output Component
const TerminalLsOutput = ({ skills, onComplete, isMobile }) => {
  const [output, setOutput] = useState([]);
  const [currentLine, setCurrentLine] = useState('');
  
  useEffect(() => {
    const skillEntries = Object.entries(skills);
    const lines = [
      `total ${skillEntries.length}`,
      '', // Empty line
      ...skillEntries.map(([key, skill]) => {
        const permissions = 'drwxr-xr-x';
        const level = `${skill.level}/10`.padEnd(5);
        const category = skill.category.padEnd(10);
        // Condensed format on mobile
        if (isMobile) {
          return `${key} ${level}`;
        }
        return `${permissions} ${level} ${category} ${key}`;
      })
    ];
    
    let lineIndex = 0;
    const timeoutIds = [];
    
    const typeNextLine = () => {
      if (lineIndex < lines.length) {
        const line = lines[lineIndex];
        let charIndex = 0;
        
        const typeChar = () => {
          if (charIndex <= line.length) {
            setCurrentLine(line.substring(0, charIndex));
            charIndex++;
            const timeoutId = setTimeout(typeChar, 15);
            timeoutIds.push(timeoutId);
          } else {
            setOutput(prev => [...prev, line]);
            setCurrentLine('');
            lineIndex++;
            const timeoutId = setTimeout(typeNextLine, 80);
            timeoutIds.push(timeoutId);
          }
        };
        
        typeChar();
      } else {
        onComplete();
      }
    };
    
    typeNextLine();
    
    // Cleanup
    return () => {
      timeoutIds.forEach(id => clearTimeout(id));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skills, isMobile]);
  
  return (
    <>
      {output.map((line, i) => (
        <div key={`ls-output-${i}`} className="text-gray-300 mb-1 font-mono text-xs sm:text-sm">{line || '\u00A0'}</div>
      ))}
      {currentLine && <div key="ls-current" className="text-gray-300 mb-1 font-mono text-xs sm:text-sm">{currentLine}<span className="animate-pulse">_</span></div>}
    </>
  );
};

// Hexagon Component
const Hexagon = ({ skill, level, icon, delay, isActive, onClick, disabled }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className={`hexagon-wrapper pt-15 pl-6.5 lg:pl-0 animate-fade-in ${disabled ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'} ${isActive ? 'active' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => !disabled && onClick()}
    >
      <div className={`hexagon ${isHovered && !disabled ? 'hover' : ''} ${isActive ? 'active' : ''}`}>
        <div className="hexagon-inner">
          <div className="hexagon-content">
            <div className="icon-wrapper">
              {icon}
            </div>
            <div className="md:font-bold opacity-95 text-[9px] sm:text-[10px] md:text-[11px]">{skill}</div>
            <div className="text-[8px] opacity-70 md:text-[9px]">Lvl {level}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Terminal Output Component
const TerminalOutput = ({ selectedSkill, skills, onAnalysisStart, onAnalysisComplete, isMobile }) => {
  const [output, setOutput] = useState([]);
  const [currentLine, setCurrentLine] = useState('');
  const analysisIdRef = useRef(0);
  
  useEffect(() => {
    // Clear output immediately
    setOutput([]);
    setCurrentLine('');
    
    if (!selectedSkill) {
      return;
    }
    
    const skillData = skills[selectedSkill];
    if (!skillData) return;
    
    // Increment analysis ID for this session
    analysisIdRef.current += 1;
    const currentAnalysisId = analysisIdRef.current;
    
    // Array to store timeout IDs for cleanup
    const timeoutIds = [];
    
    onAnalysisStart(); // Notify parent that analysis has started
    
    const lines = isMobile ? [
      `> ${selectedSkill}`,
      `> Level: ${skillData.level}/10`,
      `> Status: ${skillData.status}`,
      `> Tools: ${skillData.tools.slice(0, 2).join(', ')}...`,
      '> Analysis complete.'
    ] : [
      `> Analyzing ${selectedSkill}...`,
      `> Security Level: ${skillData.level}/10`,
      `> Experience: ${skillData.experience}`,
      `> Access Status: ${skillData.status}`,
      `> Loaded Modules: ${skillData.tools.join(', ')}`,
      `> Last Modified: ${skillData.lastUpdated}`,
      `> System Usage: ${skillData.proficiency}%`,
      '> Analysis complete.'
    ];
    
    let lineIndex = 0;
    
    const typeNextLine = () => {
      // Check if this is still the current analysis
      if (currentAnalysisId !== analysisIdRef.current) return;
      
      if (lineIndex < lines.length) {
        const line = lines[lineIndex];
        let charIndex = 0;
        
        const typeChar = () => {
          // Check if this is still the current analysis
          if (currentAnalysisId !== analysisIdRef.current) return;
          
          if (charIndex <= line.length) {
            setCurrentLine(line.substring(0, charIndex));
            charIndex++;
            const timeoutId = setTimeout(typeChar, 20);
            timeoutIds.push(timeoutId);
          } else {
            setOutput(prev => [...prev, line]);
            setCurrentLine('');
            lineIndex++;
            const timeoutId = setTimeout(typeNextLine, 100);
            timeoutIds.push(timeoutId);
          }
        };
        
        typeChar();
      } else {
        // Check if this is still the current analysis before completing
        if (currentAnalysisId === analysisIdRef.current) {
          onAnalysisComplete(); // Notify parent that analysis is complete
        }
      }
    };
    
    typeNextLine();
    
    // Cleanup function
    return () => {
      timeoutIds.forEach(id => clearTimeout(id));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSkill, isMobile]); // Re-run when selectedSkill or isMobile changes
  
  return (
    <div className="terminal-output mb-4">
      {output.map((line, i) => (
        <div key={`analysis-${i}`} className="terminal-line text-gray-300 mb-1 font-mono text-xs sm:text-sm">{line}</div>
      ))}
      {currentLine && <div className="terminal-line text-gray-300 mb-1 font-mono text-xs sm:text-sm">{currentLine}<span className="cursor animate-pulse">_</span></div>}
    </div>
  );
};

export default function SkillsPage() {
  const { isTransitioning } = useTransition();
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [commandInput, setCommandInput] = useState('');
  const [matrixRain, setMatrixRain] = useState([]);
  const [terminalHistory, setTerminalHistory] = useState([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showLsOutput, setShowLsOutput] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const terminalRef = useRef(null);
  const inputRef = useRef(null);
  
  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Memoize callbacks to prevent re-renders
  const handleAnalysisStart = useCallback(() => {
    setIsAnalyzing(true);
  }, []);
  
  const handleAnalysisComplete = useCallback(() => {
    setIsAnalyzing(false);
  }, []);
  
  // Reset states when selectedSkill is cleared
  useEffect(() => {
    if (!selectedSkill) {
      setIsAnalyzing(false);
      setShowLsOutput(false);
    }
  }, [selectedSkill]);
  
  // Custom Logo Components - with dynamic size and color support
  const TailwindLogo = ({ className = "w-6 h-6", color = "#00ff41" }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345-.98-.99-2.114-2.134-4.594-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C8.387 16.855 9.522 18 12 18c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z" fill={color}/>
    </svg>
  );

  const ReactLogo = ({ className = "w-6 h-6", color = "#00ff41" }) => (
    <svg viewBox="0 0 24 24" className={className}>
      <g fill={color}>
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.62c1.714-1.628 3.312-2.526 4.11-2.526zm-8.753.001c.801 0 2.396.89 4.115 2.517a23.897 23.897 0 0 0-2.045 2.522 23.366 23.366 0 0 0-3.096.538c-.108-.498-.2-.982-.254-1.442-.225-1.865.059-3.314.721-3.698.147-.09.335-.136.56-.136zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-.803 0-2.396-.89-4.116-2.518a26.37 26.37 0 0 0 2.045-2.522 23.361 23.361 0 0 0 3.095-.537zm-11.83.001a23.32 23.32 0 0 0 3.097.538 23.802 23.802 0 0 0 2.045 2.525c-1.715 1.63-3.313 2.527-4.11 2.527-.225 0-.406-.042-.558-.128-.666-.382-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
      </g>
    </svg>
  );

  const ReactNativeLogo = ({ className = "w-6 h-6", color = "#00ff41" }) => (
    <svg viewBox="0 0 24 24" className={className}>
      <g fill={color}>
        {/* Original React Logo Paths */}
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.62c1.714-1.628 3.312-2.526 4.11-2.526zm-8.753.001c.801 0 2.396.89 4.115 2.517a23.897 23.897 0 0 0-2.045 2.522 23.366 23.366 0 0 0-3.096.538c-.108-.498-.2-.982-.254-1.442-.225-1.865.059-3.314.721-3.698.147-.09.335-.136.56-.136zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-.803 0-2.396-.89-4.116-2.518a26.37 26.37 0 0 0 2.045-2.522 23.361 23.361 0 0 0 3.095-.537zm-11.83.001a23.32 23.32 0 0 0 3.097.538 23.802 23.802 0 0 0 2.045 2.525c-1.715 1.63-3.313 2.527-4.11 2.527-.225 0-.406-.042-.558-.128-.666-.382-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
        
        {/* Exponent "N" at top right */}
        <text 
          x="20.2" 
          y="7" 
          fontSize="6" 
          fontWeight="bold" 
          fontFamily="Arial, sans-serif"
          fill={color}
        >
          N
        </text>
      </g>
    </svg>
  );

  const NextLogo = ({ className = "w-6 h-6", color = "" }) => (
    <svg 
      viewBox="0 0 180 180" 
      className={className} 
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_408_134"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="180"
        height="180"
      >
        <circle cx="90" cy="90" r="90" fill="black" />
      </mask>
      <g mask="url(#mask0_408_134)">
        <circle cx="90" cy="90" r="90" fill={color} />
        <path
          d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
          fill="url(#paint0_linear_408_134)"
        />
        <rect
          x="115"
          y="54"
          width="12"
          height="72"
          fill="url(#paint1_linear_408_134)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_408_134"
          x1="109"
          y1="116.5"
          x2="144.5"
          y2="160.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00ff41" />
          <stop offset="1" stopColor="#00ff41" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_408_134"
          x1="121"
          y1="54"
          x2="120.799"
          y2="106.875"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00ff41" />
          <stop offset="1" stopColor="#00ff41" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );

  const CanvaLogo = ({ className = "w-6 h-6", color = "#00C4CC" }) => ( // Canva's official turquoise color
    <svg 
      viewBox="0 0 100 100" 
      className={className} 
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M50 5C25.1878 5 5 25.1878 5 50C5 74.8122 25.1878 95 50 95C62.8956 95 74.5615 89.5171 82.6777 80.6066C83.9134 79.2433 84.0294 77.1776 82.9289 75.6776C81.4516 73.6552 78.5403 73.3351 76.6559 74.9435C70.3981 80.0923 62.5209 83 54 83C35.2223 83 20 67.7777 20 49C20 30.2223 35.2223 15 54 15C65.4688 15 75.6244 21.0547 81.2617 30.1797C82.2852 31.8867 84.4852 32.4539 86.1922 31.4304C87.8992 30.4069 88.4664 28.2069 87.4429 26.4999C79.7585 13.8516 66.3662 5 50 5Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );

  const NodeLogo = ({ className = "w-6 h-6", color = "#00ff41" }) => (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.602.065-.037.151-.023.218.016l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.135-.141.135-.241V6.921c0-.103-.055-.198-.137-.246l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.075 6.68c-.084.048-.139.144-.139.245v10.142c0 .1.055.194.137.241l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.924-.943-.924-1.609V6.921c0-.665.355-1.283.924-1.611L11.073.236a1.882 1.882 0 0 1 1.85 0l8.794 5.074c.57.329.924.946.924 1.611v10.145c0 .666-.354 1.278-.924 1.609l-8.794 5.078c-.28.163-.599.247-.925.247zm2.718-6.993c-3.848 0-4.653-1.766-4.653-3.25 0-.14.114-.254.256-.254h1.135c.128 0 .235.093.253.219.173 1.17.691 1.761 3.01 1.761 1.851 0 2.639-.419 2.639-1.402 0-.565-.225-1.007-3.103-1.296-2.408-.243-3.896-.77-3.896-2.697 0-1.778 1.5-2.836 4.012-2.836 2.823 0 4.218.98 4.394 3.083a.256.256 0 0 1-.255.278h-1.143a.252.252 0 0 1-.247-.199c-.275-1.22-.94-1.611-2.749-1.611-2.024 0-2.26.705-2.26 1.234 0 .641.277.828 3.006 1.19 2.7.358 3.985.865 3.985 2.773 0 1.921-1.603 3.022-4.397 3.022z" fill={color}/>
    </svg>
  );

  const ExpressLogo = ({ className = "w-6 h-6", color = "#00ff41" }) => (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" fill={color}/>
    </svg>
  );

  const FramerLogo = ({ className = "w-6 h-6", color = "#00ff41" }) => (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill={color}/>
    </svg>
  );

  const skills = {
    "HTML": {
      level: 9,
      icon: <Code className="w-5 h-5" style={{ color: "#00ff41" }} />,
      category: "frontend",
      experience: "5+ years",
      status: "EXPERT",
      tools: ["HTML5", "Semantic HTML", "SEO", "Accessibility"],
      lastUpdated: "2024.12.20",
      proficiency: 95
    },
    "CSS": {
      level: 9,
      icon: <Layers className="w-5 h-5" style={{ color: "#00ff41" }} />,
      category: "frontend",
      experience: "5+ years",
      status: "EXPERT",
      tools: ["Flexbox", "Grid", "Animations", "Responsive"],
      lastUpdated: "2024.12.20",
      proficiency: 90
    },
    "JavaScript": {
      level: 8,
      icon: <Terminal className="w-5 h-5" style={{ color: "#00ff41" }} />,
      category: "language",
      experience: "4+ years",
      status: "ADVANCED",
      tools: ["ES6+", "Async/Await", "DOM API", "Modules"],
      lastUpdated: "2024.12.22",
      proficiency: 85
    },
    "Tailwind": {
      level: 8,
      icon: <TailwindLogo className="w-5 h-5" />, // Change size here: w-8 h-8, w-10 h-10, etc.
      category: "frontend",
      experience: "2+ years",
      status: "ADVANCED",
      tools: ["JIT", "Custom Config", "Plugins", "DaisyUI"],
      lastUpdated: "2024.12.15",
      proficiency: 85
    },
    "React": {
      level: 8,
      icon: <ReactLogo className="w-5 h-5" />, // Color change: <ReactLogo className="w-5 h-5" color="#61DAFB" />
      category: "frontend",
      experience: "3+ years",
      status: "ADVANCED",
      tools: ["Hooks", "Context API", "Redux", "React Router"],
      lastUpdated: "2024.12.20",
      proficiency: 85
    },
    "Node.js": {
      level: 7,
      icon: <NodeLogo className="w-5 h-5" />,
      category: "backend",
      experience: "3+ years",
      status: "PROFICIENT",
      tools: ["NPM", "REST APIs", "File System", "Streams"],
      lastUpdated: "2024.12.10",
      proficiency: 75
    },
    "Express.js": {
      level: 7,
      icon: <ExpressLogo className="w-5 h-5" />,
      category: "backend",
      experience: "3+ years",
      status: "PROFICIENT",
      tools: ["Middleware", "Routing", "Error Handling", "JWT"],
      lastUpdated: "2024.12.10",
      proficiency: 75
    },
    "MongoDB": {
      level: 7,
      icon: <Database className="w-5 h-5" style={{ color: "#00ff41" }} />,
      category: "database",
      experience: "2+ years",
      status: "PROFICIENT",
      tools: ["Mongoose", "Aggregation", "Indexing", "Atlas"],
      lastUpdated: "2024.12.05",
      proficiency: 70
    },
    "Next.js": {
      level: 7,
      icon: <NextLogo className="w-7 h-7" />,
      category: "frontend",
      experience: "2+ years",
      status: "PROFICIENT",
      tools: ["App Router", "SSR", "SSG", "API Routes"],
      lastUpdated: "2024.12.18",
      proficiency: 75
    },
    "Auth.js": {
      level: 6,
      icon: <Lock className="w-5 h-5" style={{ color: "#00ff41" }} />,
      category: "security",
      experience: "1+ years",
      status: "INTERMEDIATE",
      tools: ["NextAuth", "OAuth", "JWT", "Session Management"],
      lastUpdated: "2024.11.30",
      proficiency: 65
    },
    "R3F": {
      level: 7,
      icon: <Globe className="w-5 h-5" style={{ color: "#00ff41" }} />,
      category: "frontend",
      experience: "2+ years",
      status: "PROFICIENT",
      tools: ["Three.js", "3D Graphics", "WebGL", "Drei"],
      lastUpdated: "2024.12.18",
      proficiency: 70
    },
    "React Native": {
      level: 6,
      icon: <ReactNativeLogo className="w-5 h-5" />,
      category: "mobile",
      experience: "1+ years",
      status: "INTERMEDIATE",
      tools: ["Expo", "Navigation", "Native APIs", "StyleSheet"],
      lastUpdated: "2024.11.15",
      proficiency: 60
    },
    "GSAP": {
      level: 8,
      icon: <Zap className="w-5 h-5" style={{ color: "#00ff41" }} />,
      category: "animation",
      experience: "3+ years",
      status: "ADVANCED",
      tools: ["Timeline", "ScrollTrigger", "Morphing", "Easing"],
      lastUpdated: "2024.12.12",
      proficiency: 80
    },
    "Motion": {
      level: 7,
      icon: <FramerLogo className="w-5 h-5" />,
      category: "animation",
      experience: "2+ years",
      status: "PROFICIENT",
      tools: ["Gestures", "Variants", "Layout", "AnimatePresence"],
      lastUpdated: "2024.12.08",
      proficiency: 75
    },
    "Git & GitHub": {
      level: 8,
      icon: <GitBranch className="w-5 h-5" style={{ color: "#00ff41" }} />,
      category: "tools",
      experience: "4+ years",
      status: "ADVANCED",
      tools: ["Branching", "Pull Requests", "Actions", "Pages"],
      lastUpdated: "2024.12.22",
      proficiency: 85
    },
    "Canva": {
      level: 7,
      icon: <CanvaLogo className="w-5 h-5" color="#00ff41" />,
      category: "design",
      experience: "3+ years",
      status: "PROFICIENT",
      tools: ["Templates", "Brand Kit", "Video Editing", "Presentations"],
      lastUpdated: "2024.12.15",
      proficiency: 75
    },
    "C++": {
      level: 6,
      icon: <Cpu className="w-5 h-5" style={{ color: "#00ff41" }} />,
      category: "language",
      experience: "2+ years",
      status: "INTERMEDIATE",
      tools: ["STL", "OOP", "Pointers", "Data Structures"],
      lastUpdated: "2024.10.20",
      proficiency: 60
    }
  };
  
  // Matrix rain effect
  useEffect(() => {
    const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const columns = 20;
    const rain = [];
    
    for (let i = 0; i < columns; i++) {
      rain.push({
        x: i * 50,
        y: Math.random() * -100,
        speed: Math.random() * 2 + 1,
        chars: Array.from({ length: 15 }, () => chars[Math.floor(Math.random() * chars.length)])
      });
    }
    
    setMatrixRain(rain);
  }, []);
  
  // Initial terminal messages
  useEffect(() => {
    const initialMessages = [
      { type: 'system', text: 'SKILL ANALYZER v3.7' },
      { type: 'system', text: 'Establishing secure connection...' },
      { type: 'success', text: 'Connection established.' },
      { type: 'system', text: `Type 'help' for available commands` },
    ];
    setTerminalHistory(initialMessages);
  }, []);

  // Auto-scroll terminal
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalHistory]);
  
  const handleCommand = (e) => {
    if (e.key === 'Enter' && commandInput.trim() && !isAnalyzing) {
      const cmd = commandInput.toLowerCase().trim();
      
      // Add command to history
      setTerminalHistory(prev => [...prev, 
        { type: 'prompt', text: '~/skills' },
      ]);
      
      // Process commands
      if (cmd === 'ls' || cmd === 'ls -la') {
        // List all skills with animation
        setIsAnalyzing(true); // Block input during ls output
        setShowLsOutput(true);

        // FIX 1: Add the LS output to terminal history after completion
        const skillEntries = Object.entries(skills);
        const lsOutput = [
          `total ${skillEntries.length}`,
          '', // Empty line
          ...skillEntries.map(([key, skill]) => {
            const permissions = 'drwxr-xr-x';
            const level = `${skill.level}/10`.padEnd(5);
            const category = skill.category.padEnd(10);
            if (isMobile) {
              return `${key} ${level}`;
            }
            return `${permissions} ${level} ${category} ${key}`;
          })
        ];
        
        // Add to history after animation completes
        setTimeout(() => {
          setTerminalHistory(prev => [
            ...prev,
            ...lsOutput.map(line => ({ type: 'output', text: line || '\u00A0' }))
          ]);
        }, lsOutput.length * 612.5); // Approximate time for animation

      } else if (cmd.startsWith('analyze ')) {
        // Analyze specific skill
        const skillName = cmd.replace('analyze ', '').trim();
        const matchedSkill = Object.keys(skills).find(s => s.toLowerCase() === skillName.toLowerCase());
        
        if (matchedSkill) {
          if (!isAnalyzing) {
              if (selectedSkill === matchedSkill) {
              setTerminalHistory(prev => [...prev, 
                { type: 'warning', text: `${matchedSkill} is already selected.` }
              ]);
            } else {
              setSelectedSkill(matchedSkill);
              setTerminalHistory(prev => [...prev, 
                { type: 'success', text: `Decrypting ${matchedSkill} skill data...` }
              ]);
            }
          } else {
            setTerminalHistory(prev => [...prev, 
              { type: 'warning', text: `Please wait for current analysis to complete.` }
            ]);
          }
        } else {
          setTerminalHistory(prev => [...prev, 
            { type: 'error', text: `Skill not found: ${skillName}` }
          ]);
        }
      } else if (cmd === 'clear') {
        // Clear terminal
        setTerminalHistory([]);
        setSelectedSkill(null);
        setShowLsOutput(false);
        setIsAnalyzing(false); // Reset analyzing state
      } else if (cmd === 'pwd') {
        // Print working directory
        setTerminalHistory(prev => [...prev, 
          { type: 'output', text: '/home/rizwi/skills' }
        ]);
      } else if (cmd === 'help') {
        setSelectedSkill(null);
        setIsAnalyzing(true);
        
        // FIX 2: Add all help text at once to avoid undefined issues
        const helpText = [
          'Available commands:',
          '  ls               - List directory contents',
          '  pwd              - Print working directory',
          '  analyze <skill>  - Decrypt and analyze skill data',
          '  clear            - Clear terminal',
          '  help             - Show this help message',
          '  exit             - Exit terminal'
        ];

        // Add all help text to history at once after a delay
        setTimeout(() => {
          setTerminalHistory(prev => [
            ...prev,
            ...helpText.map(text => ({ type: 'output', text }))
          ]);
          setIsAnalyzing(false);
        }, 70);
        
      } else if (cmd === 'exit') {
        setTerminalHistory(prev => [...prev, 
          { type: 'system', text: 'Goodbye.' }
        ]);
      } else {
        // Unknown command
        setTerminalHistory(prev => [...prev, 
          { type: 'error', text: `bash: ${cmd}: command not found` }
        ]);
      }
      
      setCommandInput('');
    }
  };
  
  const hexagonPositions = [
    { top: '5%', left: '10%' },    // Row 1 - 4 skills
    { top: '5%', left: '30%' },
    { top: '5%', left: '50%' },
    { top: '5%', left: '70%' },
    { top: '18%', left: '0%' },    // Row 2 - 5 skills  
    { top: '18%', left: '20%' },
    { top: '18%', left: '40%' },
    { top: '18%', left: '60%' },
    { top: '16.7%', left: '80%' },
    { top: '31%', left: '10%' },   // Row 3 - 4 skills
    { top: '31%', left: '30%' },
    { top: '31%', left: '50%' },
    { top: '31%', left: '70%' },
    { top: '44%', left: '20%' },   // Row 4 - 4 skills
    { top: '44%', left: '40%' },
    { top: '44%', left: '60%' },
    { top: '57%', left: '40%' },   // Row 5 - 1 skill (centered)
  ];

  return (
    <div className="min-h-screen pt-20 sm:pt-24 md:pt-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Matrix Rain Background */}
      <div className="matrix-rain">
        {matrixRain.map((column, i) => (
          <div
            key={i}
            className="matrix-column"
            style={{
              left: `${column.x}px`,
              animationDuration: `${10 / column.speed}s`
            }}
          >
            {column.chars.map((char, j) => (
              <span
                key={j}
                style={{
                  opacity: 1 - (j / column.chars.length),
                  color: j === 0 ? '#00ff41' : '#00ff4140'
                }}
              >
                {char}
              </span>
            ))}
          </div>
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-green-400 mb-3 sm:mb-4">
          <span className="text-gray-400">&gt;</span> <ScrambledText text="SKILLS.CONFIG" />
        </h2>
        <p className="text-gray-400 font-mono text-xs sm:text-sm md:text-base mb-6 sm:mb-8">
          <ScrambledText text="Click nodes to analyze skill data | Use terminal for advanced queries" />
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Hexagonal Skill Grid */}
          <div className="relative h-[500px] sm:h-[550px] md:h-[600px] skill-grid">
            {Object.entries(skills).map(([skillName, skillData], index) => (
              <div
                key={skillName}
                className="absolute"
                style={hexagonPositions[index]}
              >
                <Hexagon
                  skill={skillName}
                  level={skillData.level}
                  icon={skillData.icon}
                  delay={index * 100}
                  isActive={selectedSkill === skillName}
                  onClick={() => {
                    if (!isAnalyzing && selectedSkill !== skillName) {
                      setTerminalHistory(prev => [...prev, 
                        { type: 'prompt', text: '~/skills' },
                        { type: 'success', text: `Decrypting ${skillName} skill data...` }
                      ]);
                      setSelectedSkill(skillName);
                    }
                  }}
                  disabled={isAnalyzing}
                />
              </div>
            ))}
          </div>
          
          {/* Terminal Interface */}
          <div className="bg-black/80 backdrop-blur-sm border border-green-500/30 rounded-lg overflow-hidden h-[350px] sm:h-[450px] md:h-[600px] flex flex-col">
            <div className="bg-green-950/30 px-3 sm:px-4 py-2 border-b border-green-500/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex gap-1 sm:gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-xs text-green-400 font-mono ml-2 hidden sm:inline">terminal.nexus</span>
              </div>
              <Terminal className="w-4 h-4 text-green-400" />
            </div>
            <div className="flex-1 p-3 sm:p-4 overflow-y-auto font-mono text-xs sm:text-sm" ref={terminalRef} onClick={() => inputRef.current?.focus()}>
              {/* Terminal History */}
              {terminalHistory.map((line, index) => (
                <div key={`history-${index}`} className={`mb-1 font-mono text-xs sm:text-sm ${
                  line.type === 'error' ? 'text-red-400' :
                  line.type === 'success' ? 'text-green-400' :
                  line.type === 'warning' ? 'text-yellow-400' :
                  line.type === 'system' ? 'text-blue-400' :
                  line.type === 'prompt' ? 'text-green-400' :
                  line.type === 'command' ? 'text-white' :
                  'text-gray-300'
                }`}>
                  {line.type === 'prompt' && (
                    <span>
                      <span className="text-green-400 hidden sm:inline">rizwi@skills</span>
                      <span className="text-green-400 sm:hidden">~</span>
                      <span className="hidden sm:inline">:</span>
                      <span className="text-blue-400 hidden sm:inline">{line.text}</span>
                      <span>$ </span>
                    </span>
                  )}
                  {line.type === 'command' && <span className="ml-0">{line.text}</span>}
                  {!['prompt', 'command'].includes(line.type) && line.text}
                </div>
              ))}
              
              {/* LS Output */}
              {showLsOutput && (
                <TerminalLsOutput 
                  skills={skills}
                  onComplete={() => {
                    setShowLsOutput(false);
                    setIsAnalyzing(false);
                  }}
                  isMobile={isMobile}
                />
              )}
              
              {/* Current Terminal Output */}
              <TerminalOutput 
                selectedSkill={selectedSkill} 
                skills={skills} 
                onAnalysisStart={handleAnalysisStart}
                onAnalysisComplete={handleAnalysisComplete}
                isMobile={isMobile}
              />
              
              {/* Terminal Input */}
              <div className="flex items-center text-green-400 mt-2 text-xs sm:text-sm">
                <span className="text-green-400 hidden sm:inline">rizwi@skills</span>
                <span className="text-green-400 sm:hidden">~</span>
                <span className="hidden sm:inline">:</span>
                <span className="text-blue-400 hidden sm:inline">~/skills</span>
                <span>$ </span>
                <input
                  ref={inputRef}
                  type="text"
                  value={commandInput}
                  onChange={(e) => !isAnalyzing && setCommandInput(e.target.value)}
                  onKeyDown={handleCommand}
                  className={`flex-1 bg-transparent border-none outline-none ml-1 text-white ${isAnalyzing ? 'opacity-50' : ''}`}
                  placeholder={isAnalyzing ? "" : ""}
                  disabled={isAnalyzing}
                  autoFocus
                />
                <span className={`${isAnalyzing ? 'opacity-50' : 'animate-pulse'}`}>_</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Instructions */}
        <div className="mt-6 sm:mt-8 bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-3 sm:p-4">
          <div className="flex items-start gap-2 sm:gap-3">
            <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <div className="font-mono text-xs sm:text-sm">
              <p className="text-green-400 mb-2">Quick Start:</p>
              <div className="text-gray-400 space-y-1">
                <p>1. Type <span className="text-green-400">'pwd'</span> to see current directory</p>
                <p>2. Type <span className="text-green-400">'ls'</span> to list all skills</p>
                <p>3. Type <span className="text-green-400">'analyze [skill]'</span> to decrypt skill data</p>
                <p>4. Click on hexagon nodes for quick access</p>
                <p>5. Type <span className="text-green-400">'help'</span> for all commands</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skill Categories Legend */}
        <div className="mt-8 sm:mt-12 flex flex-wrap gap-2 sm:gap-4 justify-center">
          {['frontend', 'backend', 'language', 'database', 'security', 'mobile', 'animation', 'design', 'tools'].map(category => (
            <div key={category} className="category-badge">
              <span className="category-dot" style={{ backgroundColor: 
                category === 'frontend' ? '#00ff41' :
                category === 'backend' ? '#00ffaa' :
                category === 'security' ? '#ff4141' :
                category === 'database' ? '#41aaff' :
                category === 'mobile' ? '#ff41ff' :
                category === 'animation' ? '#ffff41' :
                category === 'design' ? '#ff9141' :
                category === 'tools' ? '#41ffff' :
                '#aaaaaa'
              }}></span>
              <span className="category-name text-xs sm:text-sm">{category.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .matrix-rain {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          opacity: 0.1;
          z-index: 1;
        }
        
        .matrix-column {
          position: absolute;
          font-family: monospace;
          font-size: 16px;
          animation: matrix-fall linear infinite;
        }
        
        @media (min-width: 640px) {
          .matrix-column {
            font-size: 20px;
          }
        }
        
        @keyframes matrix-fall {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        
        .hexagon-wrapper {
          width: 70px;
          height: 80px;
          position: relative;
          transition: transform 0.3s ease;
        }
        
        @media (min-width: 640px) {
          .hexagon-wrapper {
            width: 80px;
            height: 90px;
          }
        }
        
        @media (min-width: 768px) {
          .hexagon-wrapper {
            width: 90px;
            height: 100px;
          }
        }
        
        .hexagon-wrapper:hover {
          transform: scale(1.1);
          z-index: 10;
        }
        
        .hexagon {
          width: 70px;
          height: 40px;
          background: rgba(0, 255, 65, 0.1);
          position: relative;
          border: 2px solid rgba(0, 255, 65, 0.3);
          margin: 20px 0;
          transition: all 0.3s ease;
        }
        
        @media (min-width: 640px) {
          .hexagon {
            width: 80px;
            height: 46px;
            margin: 23px 0;
          }
        }
        
        @media (min-width: 768px) {
          .hexagon {
            width: 90px;
            height: 52px;
            margin: 26px 0;
          }
        }
        
        .hexagon:before,
        .hexagon:after {
          content: "";
          position: absolute;
          width: 0;
          border-left: 35px solid transparent;
          border-right: 35px solid transparent;
          transition: all 0.3s ease;
        }
        
        @media (min-width: 640px) {
          .hexagon:before,
          .hexagon:after {
            border-left: 40px solid transparent;
            border-right: 40px solid transparent;
          }
        }
        
        @media (min-width: 768px) {
          .hexagon:before,
          .hexagon:after {
            border-left: 45px solid transparent;
            border-right: 45px solid transparent;
          }
        }
        
        .hexagon:before {
          bottom: 100%;
          border-bottom: 20px solid rgba(0, 255, 65, 0.1);
          border-bottom-color: inherit;
        }
        
        @media (min-width: 640px) {
          .hexagon:before {
            border-bottom: 23px solid rgba(0, 255, 65, 0.1);
          }
        }
        
        @media (min-width: 768px) {
          .hexagon:before {
            border-bottom: 26px solid rgba(0, 255, 65, 0.1);
          }
        }
        
        .hexagon:after {
          top: 100%;
          border-top: 20px solid rgba(0, 255, 65, 0.1);
          border-top-color: inherit;
        }
        
        @media (min-width: 640px) {
          .hexagon:after {
            border-top: 23px solid rgba(0, 255, 65, 0.1);
          }
        }
        
        @media (min-width: 768px) {
          .hexagon:after {
            border-top: 26px solid rgba(0, 255, 65, 0.1);
          }
        }
        
        .hexagon.hover {
          background: rgba(0, 255, 65, 0.2);
          border-color: rgba(0, 255, 65, 0.6);
          box-shadow: 0 0 30px rgba(0, 255, 65, 0.5);
        }
        
        .hexagon.active {
          background: rgba(0, 255, 65, 0.3);
          border-color: rgba(0, 255, 65, 0.8);
          box-shadow: 0 0 40px rgba(0, 255, 65, 0.7);
        }
        
        .hexagon-inner {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .hexagon-content {
          text-align: center;
          color: #00ff41;
          font-family: monospace;
        }
        
        .icon-wrapper {
          margin-bottom: 2px;
          color: #00ff41;
        }
        
        @media (min-width: 640px) {
          .icon-wrapper {
            margin-bottom: 4px;
          }
        }
        
        /* Terminal scrollbar styling */
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
        
        .terminal-output {
          margin-bottom: 16px;
        }
        
        .terminal-line {
          color: #00ff41;
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        .category-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 3px 8px;
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(0, 255, 65, 0.2);
          border-radius: 20px;
          font-family: monospace;
          font-size: 10px;
        }
        
        @media (min-width: 640px) {
          .category-badge {
            gap: 6px;
            padding: 4px 12px;
            font-size: 12px;
          }
        }
        
        .category-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }
        
        @media (min-width: 640px) {
          .category-dot {
            width: 8px;
            height: 8px;
          }
        }
        
        .category-name {
          color: rgba(0, 255, 65, 0.8);
        }
        
        @media (max-width: 639px) {
          .terminal-line {
            font-size: 11px;
          }
        }
      `}</style>
    </div>
  );
}