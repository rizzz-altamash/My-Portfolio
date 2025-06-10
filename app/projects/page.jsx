// // app/projects/page.js
// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import { Lock, Globe, Shield, Database, ChevronRight } from 'lucide-react';
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

// export default function ProjectsPage() {
//   const { isTransitioning } = useTransition();
//   // const titleText = useTextScramble("PROJECTS.DIR", 1500);
//   const chars = '!<>-_\\/[]{}—=+*^?#________';
//   const projects = [
//     { 
//       name: "Celestial Horizons", 
//       // desc: "Decentralized password manager with end-to-end encryption", 
//       desc: <ScrambledText text="An Astronomy Website" />,
//       tech: ["React", "Web3", "Solidity", "IPFS"],
//       status: "CLASSIFIED",
//       icon: <Lock className="w-6 h-6" />,
//       url: "https://tailwindcss.com"
//     },
//     { 
//       name: "Vaayu", 
//       desc: <ScrambledText text="A Drone Delivery Platform" />, 
//       tech: ["Python", "Nmap", "Threading", "AI"],
//       status: "ACTIVE",
//       icon: <Globe className="w-6 h-6" />,
//       url: "https://your-project-url.com"
//     },
//     { 
//       name: "My Portfolio", 
//       desc: <ScrambledText text="My Portfolio :)" />, 
//       tech: ["Rust", "Cryptography", "QKD", "Blockchain"],
//       status: "BETA",
//       icon: <Shield className="w-6 h-6" />,
//       url: "https://your-project-url.com"
//     },
//     { 
//       name: "DataMiner X", 
//       desc: <ScrambledText text="AI-powered web scraping and analysis platform" />, 
//       tech: ["Python", "TensorFlow", "Selenium", "Redis"],
//       status: "DEPLOYED",
//       icon: <Database className="w-6 h-6" />,
//       url: "https://your-project-url.com"
//     }
//   ];

//   return (
//     <div className="min-h-screen pt-32 px-6 relative">
//       <div className="max-w-6xl mx-auto relative z-10">
//         <h2 className="text-5xl font-mono font-bold text-green-400 mb-12">
//           <span className="text-gray-400">&gt;</span> <ScrambledText text="PROJECTS.DIR" />
//         </h2>
        
//         <div className="grid md:grid-cols-2 gap-6">
//           {projects.map((project, index) => (
//             <div
//               key={project.name}
//               className="group relative bg-black/40 backdrop-blur-sm border border-green-500/20 rounded-lg p-6 hover:border-green-500/40 transition-all duration-300 overflow-hidden animate-fade-in"
//               style={{animationDelay: `${index * 150}ms`}}
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
//               <div className="relative z-10">
//                 <div className="flex items-start justify-between mb-4">
//                   <div className="flex items-center gap-3">
//                     <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center border border-green-500/30 group-hover:bg-green-500/20 transition-colors">
//                       {React.cloneElement(project.icon, { className: "w-6 h-6 text-green-400" })}
//                     </div>
//                     <div>
//                       <h3 className="text-2xl text-green-400 font-mono">
//                         {project.name}
//                       </h3>
//                       <span className={`text-xs font-mono ${
//                         project.status === 'ACTIVE' ? 'text-green-400' :
//                         project.status === 'CLASSIFIED' ? 'text-red-400' :
//                         project.status === 'BETA' ? 'text-yellow-400' :
//                         'text-blue-400'
//                       }`}>
//                         [{project.status}]
//                       </span>
//                     </div>
//                   </div>
//                 </div>
                
//                 <p className="text-gray-300 mb-4 font-mono text-sm">
//                   {/* {isTransitioning ? project.desc.split('').map(c => c === ' ' ? ' ' : chars[Math.floor(Math.random() * chars.length)]).join('') : project.desc} */}
//                   {project.desc}
//                 </p>
                
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tech.map(tech => (
//                     <span 
//                       key={tech} 
//                       className="px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-mono rounded"
//                     >
//                       {isTransitioning ? '████' : tech}
//                     </span>
//                   ))}
//                 </div>
                
//                 <button className="text-green-400 hover:text-green-300 font-mono text-sm flex items-center gap-2 group">
//                   <span>ACCESS PROJECT</span>
//                   <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-12 bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-6">
//           <div className="font-mono">
//             <div className="text-green-400 mb-2">
//               <span className="text-gray-400">nexus@h4ck3r</span>:~$ view --all-projects
//             </div>
//             <div className="text-gray-300 mb-4">
//               Accessing secure repository... <span className="text-green-400">23 projects found</span>
//             </div>
//             <button className="text-green-400 hover:text-green-300 underline">
//               [LOAD MORE PROJECTS]
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





















// // app/projects/page.js
// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import { Lock, Unlock, Globe, Shield, Database, ChevronRight, Terminal, Folder, FileCode, AlertCircle, CheckCircle } from 'lucide-react';
// import { useTransition } from '../layout';
// import ScrambledText from '@/components/ScrambledText';

// export default function ProjectsPage() {
//   const { isTransitioning } = useTransition();
//   const [terminalInput, setTerminalInput] = useState('');
//   const [terminalHistory, setTerminalHistory] = useState([]);
//   const [currentDirectory, setCurrentDirectory] = useState('/home/rizwi/projects');
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [isHacking, setIsHacking] = useState(false);
//   const [hackProgress, setHackProgress] = useState(0);
//   const [accessStatus, setAccessStatus] = useState({});
//   const terminalRef = useRef(null);
//   const inputRef = useRef(null);

//   const projects = {
//     "celestial_horizons": { 
//       name: "Celestial Horizons",
//       type: "directory",
//       permissions: "drwxr-xr-x",
//       size: "4.2MB",
//       modified: "Dec 15 2024",
//       desc: "An Astronomy Website",
//       tech: ["React", "Three.js", "WebGL", "GSAP"],
//       status: "CLASSIFIED",
//       security: "HIGH",
//       icon: <Globe className="w-5 h-5" />,
//       url: "https://celestial-horizons.com",
//       accessTime: 3000,
//       files: [
//         { name: "index.jsx", size: "24KB" },
//         { name: "galaxy.glsl", size: "8KB" },
//         { name: "planets.json", size: "156KB" },
//         { name: ".env", size: "1KB", locked: true }
//       ]
//     },
//     "vaayu_drone": { 
//       name: "Vaayu",
//       type: "directory",
//       permissions: "drwxr-xr-x",
//       size: "8.7MB",
//       modified: "Dec 10 2024",
//       desc: "A Drone Delivery Platform",
//       tech: ["Node.js", "Express", "MongoDB", "Socket.io"],
//       status: "ACTIVE",
//       security: "MEDIUM",
//       icon: <Shield className="w-5 h-5" />,
//       url: "https://vaayu-platform.com",
//       accessTime: 2000,
//       files: [
//         { name: "server.js", size: "45KB" },
//         { name: "drone-api/", size: "2.1MB" },
//         { name: "flight-control.js", size: "78KB" },
//         { name: "config.json", size: "3KB", locked: true }
//       ]
//     },
//     "portfolio_v3": { 
//       name: "My Portfolio",
//       type: "directory", 
//       permissions: "drwxr-xr-x",
//       size: "2.1MB",
//       modified: "Dec 22 2024",
//       desc: "My Portfolio :)",
//       tech: ["Next.js", "Tailwind", "Framer Motion", "Three.js"],
//       status: "LIVE",
//       security: "LOW",
//       icon: <Terminal className="w-5 h-5" />,
//       url: "https://rizwi.dev",
//       accessTime: 1000,
//       files: [
//         { name: "app/", size: "890KB" },
//         { name: "components/", size: "456KB" },
//         { name: "public/", size: "234KB" },
//         { name: "README.md", size: "12KB" }
//       ]
//     },
//     "dataminer_x": { 
//       name: "DataMiner X",
//       type: "directory",
//       permissions: "drwx------",
//       size: "12.4MB",
//       modified: "Nov 28 2024",
//       desc: "AI-powered web scraping and analysis platform",
//       tech: ["Python", "TensorFlow", "Selenium", "Redis"],
//       status: "RESTRICTED",
//       security: "CRITICAL",
//       icon: <Database className="w-5 h-5" />,
//       url: "https://dataminer-x.io",
//       accessTime: 5000,
//       files: [
//         { name: "scraper.py", size: "67KB" },
//         { name: "ml_models/", size: "4.5MB", locked: true },
//         { name: "data_pipeline.py", size: "89KB" },
//         { name: "credentials.enc", size: "2KB", locked: true }
//       ]
//     }
//   };

//   useEffect(() => {
//     // Initial terminal messages
//     const initialMessages = [
//       { type: 'system', text: 'NEXUS TERMINAL v2.0.1' },
//       { type: 'system', text: 'Establishing secure connection...' },
//       { type: 'success', text: 'Connection established.' },
//       { type: 'prompt', text: `${currentDirectory}` },
//       { type: 'command', text: 'ls -la' },
//       { type: 'output', text: 'total 4 directories' }
//     ];
//     setTerminalHistory(initialMessages);
//   }, []);

//   useEffect(() => {
//     if (terminalRef.current) {
//       terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
//     }
//   }, [terminalHistory]);

//   const handleCommand = (e) => {
//     if (e.key === 'Enter' && terminalInput.trim()) {
//       const command = terminalInput.trim();
//       const args = command.split(' ');
//       const cmd = args[0].toLowerCase();
      
//       // Add command to history
//       setTerminalHistory(prev => [...prev, 
//         { type: 'prompt', text: currentDirectory },
//         { type: 'command', text: command }
//       ]);

//       // Process commands
//       switch (cmd) {
//         case 'ls':
//           handleLs(args);
//           break;
//         case 'cd':
//           handleCd(args[1]);
//           break;
//         case 'hack':
//         case 'access':
//           handleHack(args[1]);
//           break;
//         case 'cat':
//           handleCat(args[1]);
//           break;
//         case 'help':
//           handleHelp();
//           break;
//         case 'clear':
//           setTerminalHistory([]);
//           break;
//         case 'exit':
//           setTerminalHistory(prev => [...prev, 
//             { type: 'system', text: 'Goodbye, hacker.' }
//           ]);
//           break;
//         default:
//           setTerminalHistory(prev => [...prev, 
//             { type: 'error', text: `Command not found: ${cmd}. Type 'help' for available commands.` }
//           ]);
//       }
      
//       setTerminalInput('');
//     }
//   };

//   const handleLs = (args) => {
//     const showAll = args.includes('-la') || args.includes('-l');
//     let output = [];
    
//     if (currentDirectory === '/home/rizwi/projects') {
//       output.push({ type: 'output', text: 'total 4' });
//       Object.entries(projects).forEach(([key, project]) => {
//         const status = accessStatus[key] ? '(ACCESSED)' : '(LOCKED)';
//         output.push({ 
//           type: 'output', 
//           text: `${project.permissions} ${project.size.padEnd(10)} ${project.modified} ${key}/ ${status}`
//         });
//       });
//     }
    
//     setTerminalHistory(prev => [...prev, ...output]);
//   };

//   const handleCd = (dir) => {
//     if (!dir || dir === '..') {
//       setCurrentDirectory('/home/rizwi/projects');
//       setSelectedProject(null);
//       setTerminalHistory(prev => [...prev, 
//         { type: 'success', text: 'Changed directory to /home/rizwi/projects' }
//       ]);
//     } else if (projects[dir]) {
//       if (accessStatus[dir]) {
//         setCurrentDirectory(`/home/rizwi/projects/${dir}`);
//         setSelectedProject(dir);
//         setTerminalHistory(prev => [...prev, 
//           { type: 'success', text: `Changed directory to ${dir}/` }
//         ]);
//       } else {
//         setTerminalHistory(prev => [...prev, 
//           { type: 'error', text: `Access denied. Run 'hack ${dir}' to gain access.` }
//         ]);
//       }
//     } else {
//       setTerminalHistory(prev => [...prev, 
//         { type: 'error', text: `Directory not found: ${dir}` }
//       ]);
//     }
//   };

//   const handleHack = (target) => {
//     if (!target) {
//       setTerminalHistory(prev => [...prev, 
//         { type: 'error', text: 'Usage: hack <project_name>' }
//       ]);
//       return;
//     }

//     const project = projects[target];
//     if (!project) {
//       setTerminalHistory(prev => [...prev, 
//         { type: 'error', text: `Target not found: ${target}` }
//       ]);
//       return;
//     }

//     if (accessStatus[target]) {
//       setTerminalHistory(prev => [...prev, 
//         { type: 'warning', text: `Already have access to ${target}` }
//       ]);
//       return;
//     }

//     // Start hacking sequence
//     setIsHacking(true);
//     setTerminalHistory(prev => [...prev, 
//       { type: 'warning', text: `Initiating breach protocol for ${target}...` },
//       { type: 'system', text: `Security level: ${project.security}` },
//       { type: 'system', text: 'Bypassing firewall...' }
//     ]);

//     let progress = 0;
//     const interval = setInterval(() => {
//       progress += Math.random() * 20;
//       if (progress >= 100) {
//         progress = 100;
//         clearInterval(interval);
        
//         setTimeout(() => {
//           setAccessStatus(prev => ({ ...prev, [target]: true }));
//           setIsHacking(false);
//           setHackProgress(0);
//           setTerminalHistory(prev => [...prev,
//             { type: 'success', text: 'BREACH SUCCESSFUL!' },
//             { type: 'success', text: `Access granted to ${project.name}` },
//             { type: 'system', text: `You can now 'cd ${target}' to explore the project.` }
//           ]);
//         }, 500);
//       }
//       setHackProgress(progress);
//     }, project.accessTime / 20);
//   };

//   const handleCat = (file) => {
//     if (!file) {
//       setTerminalHistory(prev => [...prev, 
//         { type: 'error', text: 'Usage: cat <filename>' }
//       ]);
//       return;
//     }

//     if (selectedProject && projects[selectedProject]) {
//       const project = projects[selectedProject];
//       const fileData = project.files.find(f => f.name === file);
      
//       if (fileData) {
//         if (fileData.locked) {
//           setTerminalHistory(prev => [...prev, 
//             { type: 'error', text: `Access denied: ${file} is encrypted` }
//           ]);
//         } else {
//           setTerminalHistory(prev => [...prev, 
//             { type: 'output', text: `--- ${file} ---` },
//             { type: 'code', text: '// File contents would be displayed here' },
//             { type: 'code', text: `// Size: ${fileData.size}` }
//           ]);
//         }
//       } else {
//         setTerminalHistory(prev => [...prev, 
//           { type: 'error', text: `File not found: ${file}` }
//         ]);
//       }
//     } else {
//       setTerminalHistory(prev => [...prev, 
//         { type: 'error', text: 'Not in a project directory' }
//       ]);
//     }
//   };

//   const handleHelp = () => {
//     const helpText = [
//       { type: 'output', text: 'Available commands:' },
//       { type: 'output', text: '  ls [-la]      - List directory contents' },
//       { type: 'output', text: '  cd <dir>      - Change directory' },
//       { type: 'output', text: '  hack <target> - Gain access to a project' },
//       { type: 'output', text: '  cat <file>    - Display file contents' },
//       { type: 'output', text: '  clear         - Clear terminal' },
//       { type: 'output', text: '  help          - Show this help message' },
//       { type: 'output', text: '  exit          - Exit terminal' }
//     ];
//     setTerminalHistory(prev => [...prev, ...helpText]);
//   };

//   return (
//     <div className="min-h-screen pt-24 px-6 relative">
//       {/* Background Matrix Effect */}
//       <div className="fixed inset-0 overflow-hidden opacity-5">
//         {Array.from({ length: 50 }, (_, i) => (
//           <div
//             key={i}
//             className="absolute text-green-400 text-xs font-mono animate-matrix-fall"
//             style={{
//               left: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 10}s`,
//               animationDuration: `${10 + Math.random() * 10}s`
//             }}
//           >
//             {Math.random() > 0.5 ? '01101001' : 'ACCESS'}
//           </div>
//         ))}
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="mb-8">
//           <h2 className="text-4xl md:text-5xl font-mono font-bold text-green-400 mb-4">
//             <span className="text-gray-400">&gt;</span> <ScrambledText text="PROJECT_VAULT.SYS" />
//           </h2>
//           <p className="text-gray-400 font-mono text-sm">
//             <ScrambledText text="Use terminal commands to access project files. Type 'help' for available commands." />
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-6">
//           {/* Terminal Interface */}
//           <div className="lg:col-span-1">
//             <div className="bg-black/80 backdrop-blur-sm border border-green-500/30 rounded-lg overflow-hidden">
//               <div className="bg-green-950/30 px-4 py-2 border-b border-green-500/30 flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <div className="flex gap-2">
//                     <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//                     <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//                     <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                   </div>
//                   <span className="text-xs text-green-400 font-mono ml-2">nexus@terminal</span>
//                 </div>
//                 <Terminal className="w-4 h-4 text-green-400" />
//               </div>
              
//               <div 
//                 ref={terminalRef}
//                 className="p-4 h-[500px] overflow-y-auto font-mono text-sm"
//                 onClick={() => inputRef.current?.focus()}
//               >
//                 {terminalHistory.map((line, index) => (
//                   <div key={index} className={`mb-1 ${
//                     line.type === 'error' ? 'text-red-400' :
//                     line.type === 'success' ? 'text-green-400' :
//                     line.type === 'warning' ? 'text-yellow-400' :
//                     line.type === 'system' ? 'text-blue-400' :
//                     line.type === 'prompt' ? 'text-green-400' :
//                     line.type === 'command' ? 'text-white' :
//                     line.type === 'code' ? 'text-gray-400 pl-4' :
//                     'text-gray-300'
//                   }`}>
//                     {line.type === 'prompt' && (
//                       <span>
//                         <span className="text-green-400">rizwi@nexus</span>:
//                         <span className="text-blue-400">{line.text}</span>$ 
//                       </span>
//                     )}
//                     {line.type === 'command' && <span className="ml-1">{line.text}</span>}
//                     {!['prompt', 'command'].includes(line.type) && line.text}
//                   </div>
//                 ))}
                
//                 <div className="flex items-center text-green-400">
//                   <span>rizwi@nexus:</span>
//                   <span className="text-blue-400">{currentDirectory}</span>
//                   <span>$</span>
//                   <input
//                     ref={inputRef}
//                     type="text"
//                     value={terminalInput}
//                     onChange={(e) => setTerminalInput(e.target.value)}
//                     onKeyDown={handleCommand}
//                     className="flex-1 bg-transparent border-none outline-none ml-2 text-white"
//                     autoFocus
//                   />
//                   <span className="animate-pulse">_</span>
//                 </div>
//               </div>
//             </div>

//             {/* Hacking Progress Bar */}
//             {isHacking && (
//               <div className="mt-4 bg-black/80 backdrop-blur-sm border border-green-500/30 rounded-lg p-4">
//                 <div className="flex items-center justify-between mb-2">
//                   <span className="text-green-400 font-mono text-sm">HACKING IN PROGRESS</span>
//                   <span className="text-green-400 font-mono text-sm">{Math.floor(hackProgress)}%</span>
//                 </div>
//                 <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
//                   <div 
//                     className="bg-green-400 h-2 rounded-full transition-all duration-300 relative"
//                     style={{ width: `${hackProgress}%` }}
//                   >
//                     <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
//                   </div>
//                 </div>
//                 <div className="mt-2 text-xs text-gray-400 font-mono">
//                   {hackProgress < 30 && "Initializing breach protocol..."}
//                   {hackProgress >= 30 && hackProgress < 60 && "Bypassing security layers..."}
//                   {hackProgress >= 60 && hackProgress < 90 && "Decrypting access codes..."}
//                   {hackProgress >= 90 && "Finalizing breach..."}
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Project Cards */}
//           <div className="lg:col-span-1 space-y-4">
//             {Object.entries(projects).map(([key, project]) => {
//               const hasAccess = accessStatus[key];
//               return (
//                 <div
//                   key={key}
//                   className={`relative bg-black/60 backdrop-blur-sm border rounded-lg p-4 transition-all duration-300 ${
//                     hasAccess 
//                       ? 'border-green-500/40 hover:border-green-500/60' 
//                       : 'border-red-500/20 hover:border-red-500/40'
//                   } ${selectedProject === key ? 'ring-2 ring-green-400' : ''}`}
//                 >
//                   <div className="flex items-start justify-between mb-3">
//                     <div className="flex items-center gap-3">
//                       <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${
//                         hasAccess 
//                           ? 'bg-green-500/10 border-green-500/30' 
//                           : 'bg-red-500/10 border-red-500/30'
//                       }`}>
//                         {hasAccess ? <Unlock className="w-5 h-5 text-green-400" /> : <Lock className="w-5 h-5 text-red-400" />}
//                       </div>
//                       <div>
//                         <h3 className="text-lg font-mono text-green-400">{project.name}</h3>
//                         <span className={`text-xs font-mono ${
//                           project.status === 'ACTIVE' ? 'text-green-400' :
//                           project.status === 'CLASSIFIED' ? 'text-red-400' :
//                           project.status === 'RESTRICTED' ? 'text-orange-400' :
//                           'text-blue-400'
//                         }`}>
//                           [{project.status}]
//                         </span>
//                       </div>
//                     </div>
//                     <div className={`px-2 py-1 rounded text-xs font-mono ${
//                       project.security === 'CRITICAL' ? 'bg-red-500/20 text-red-400' :
//                       project.security === 'HIGH' ? 'bg-orange-500/20 text-orange-400' :
//                       project.security === 'MEDIUM' ? 'bg-yellow-500/20 text-yellow-400' :
//                       'bg-green-500/20 text-green-400'
//                     }`}>
//                       {project.security}
//                     </div>
//                   </div>

//                   <p className="text-gray-400 font-mono text-sm mb-3">{project.desc}</p>

//                   {hasAccess && (
//                     <>
//                       <div className="flex flex-wrap gap-2 mb-3">
//                         {project.tech.map(tech => (
//                           <span key={tech} className="px-2 py-1 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-mono rounded">
//                             {tech}
//                           </span>
//                         ))}
//                       </div>

//                       <div className="bg-black/40 rounded p-2 mb-3 max-h-32 overflow-y-auto">
//                         <div className="font-mono text-xs">
//                           {project.files.map((file, index) => (
//                             <div key={index} className="text-gray-400 flex items-center gap-2">
//                               {file.name.endsWith('/') ? <Folder className="w-3 h-3" /> : <FileCode className="w-3 h-3" />}
//                               <span className={file.locked ? 'text-red-400' : ''}>{file.name}</span>
//                               <span className="text-gray-600 ml-auto">{file.size}</span>
//                               {file.locked && <Lock className="w-3 h-3 text-red-400" />}
//                             </div>
//                           ))}
//                         </div>
//                       </div>

//                       <a 
//                         href={project.url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-green-400 hover:text-green-300 font-mono text-sm flex items-center gap-2 group"
//                       >
//                         <span>VISIT PROJECT</span>
//                         <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                       </a>
//                     </>
//                   )}

//                   {!hasAccess && (
//                     <div className="flex items-center gap-2 text-red-400 font-mono text-sm">
//                       <AlertCircle className="w-4 h-4" />
//                       <span>Access required. Run 'hack {key}'</span>
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Instructions */}
//         <div className="mt-8 bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-4">
//           <div className="flex items-start gap-3">
//             <Terminal className="w-5 h-5 text-green-400 mt-0.5" />
//             <div className="font-mono text-sm">
//               <p className="text-green-400 mb-2">Quick Start:</p>
//               <div className="text-gray-400 space-y-1">
//                 <p>1. Type <span className="text-green-400">'ls -la'</span> to list all projects</p>
//                 <p>2. Type <span className="text-green-400">'hack [project_name]'</span> to gain access</p>
//                 <p>3. Type <span className="text-green-400">'cd [project_name]'</span> to enter project directory</p>
//                 <p>4. Type <span className="text-green-400">'help'</span> for more commands</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes matrix-fall {
//           0% {
//             transform: translateY(-100vh);
//             opacity: 1;
//           }
//           100% {
//             transform: translateY(100vh);
//             opacity: 0;
//           }
//         }

//         .terminal-output::-webkit-scrollbar {
//           width: 6px;
//         }

//         .terminal-output::-webkit-scrollbar-track {
//           background: rgba(0, 255, 65, 0.1);
//         }

//         .terminal-output::-webkit-scrollbar-thumb {
//           background: rgba(0, 255, 65, 0.3);
//           border-radius: 3px;
//         }

//         .terminal-output::-webkit-scrollbar-thumb:hover {
//           background: rgba(0, 255, 65, 0.5);
//         }
//       `}</style>
//     </div>
//   );
// }
























// // BEST + Responsive ----------------------------------------------------------------------------------------------------------
// // app/projects/page.js
// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import { Lock, Unlock, Globe, Shield, Database, ChevronRight, Terminal, Folder, FileCode, AlertCircle, CheckCircle } from 'lucide-react';
// import { useTransition } from '../layout';
// import ScrambledText from '@/components/ScrambledText';

// export default function ProjectsPage() {
//   const { isTransitioning } = useTransition();
//   const [terminalInput, setTerminalInput] = useState('');
//   const [terminalHistory, setTerminalHistory] = useState([]);
//   const [currentDirectory, setCurrentDirectory] = useState('/home/rizwi/projects');
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [isHacking, setIsHacking] = useState(false);
//   const [hackProgress, setHackProgress] = useState(0);
//   const [accessStatus, setAccessStatus] = useState({});
//   const [isMobile, setIsMobile] = useState(false);
//   const terminalRef = useRef(null);
//   const inputRef = useRef(null);

//   const projects = {
//     "celestial_horizons": { 
//       name: "Celestial Horizons",
//       type: "directory",
//       permissions: "drwxr-xr-x",
//       size: "4.2MB",
//       modified: "Dec 15 2024",
//       desc: "An Astronomy Website",
//       tech: ["React", "Three.js", "WebGL", "GSAP"],
//       status: "CLASSIFIED",
//       security: "HIGH",
//       icon: <Globe className="w-5 h-5" />,
//       url: "https://celestial-horizons.com",
//       accessTime: 3000,
//       files: [
//         { name: "index.jsx", size: "24KB" },
//         { name: "galaxy.glsl", size: "8KB" },
//         { name: "planets.json", size: "156KB" },
//         { name: ".env", size: "1KB", locked: true }
//       ]
//     },
//     "vaayu_drone": { 
//       name: "Vaayu",
//       type: "directory",
//       permissions: "drwxr-xr-x",
//       size: "8.7MB",
//       modified: "Dec 10 2024",
//       desc: "A Drone Delivery Platform",
//       tech: ["Node.js", "Express", "MongoDB", "Socket.io"],
//       status: "ACTIVE",
//       security: "MEDIUM",
//       icon: <Shield className="w-5 h-5" />,
//       url: "https://vaayu-platform.com",
//       accessTime: 2000,
//       files: [
//         { name: "server.js", size: "45KB" },
//         { name: "drone-api/", size: "2.1MB" },
//         { name: "flight-control.js", size: "78KB" },
//         { name: "config.json", size: "3KB", locked: true }
//       ]
//     },
//     "portfolio_v3": { 
//       name: "My Portfolio",
//       type: "directory", 
//       permissions: "drwxr-xr-x",
//       size: "2.1MB",
//       modified: "Dec 22 2024",
//       desc: "My Portfolio :)",
//       tech: ["Next.js", "Tailwind", "Framer Motion", "Three.js"],
//       status: "LIVE",
//       security: "LOW",
//       icon: <Terminal className="w-5 h-5" />,
//       url: "https://rizwi.dev",
//       accessTime: 1000,
//       files: [
//         { name: "app/", size: "890KB" },
//         { name: "components/", size: "456KB" },
//         { name: "public/", size: "234KB" },
//         { name: "README.md", size: "12KB" }
//       ]
//     },
//     "dataminer_x": { 
//       name: "DataMiner X",
//       type: "directory",
//       permissions: "drwx------",
//       size: "12.4MB",
//       modified: "Nov 28 2024",
//       desc: "AI-powered web scraping and analysis platform",
//       tech: ["Python", "TensorFlow", "Selenium", "Redis"],
//       status: "RESTRICTED",
//       security: "CRITICAL",
//       icon: <Database className="w-5 h-5" />,
//       url: "https://dataminer-x.io",
//       accessTime: 5000,
//       files: [
//         { name: "scraper.py", size: "67KB" },
//         { name: "ml_models/", size: "4.5MB", locked: true },
//         { name: "data_pipeline.py", size: "89KB" },
//         { name: "credentials.enc", size: "2KB", locked: true }
//       ]
//     }
//   };

//   useEffect(() => {
//     // Check if mobile
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 640);
//     };
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
    
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   useEffect(() => {
//     // Initial terminal messages
//     const initialMessages = [
//       { type: 'system', text: 'NEXUS TERMINAL v2.0.1' },
//       { type: 'system', text: 'Establishing secure connection...' },
//       { type: 'success', text: 'Connection established.' },
//       { type: 'prompt', text: currentDirectory },
//       { type: 'command', text: 'ls -la' },
//       { type: 'output', text: 'total 4 directories' }
//     ];
//     setTerminalHistory(initialMessages);
//   }, []);

//   useEffect(() => {
//     if (terminalRef.current) {
//       terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
//     }
//   }, [terminalHistory]);

//   const handleCommand = (e) => {
//     if (e.key === 'Enter' && terminalInput.trim()) {
//       const command = terminalInput.trim();
//       const args = command.split(' ');
//       const cmd = args[0].toLowerCase();
      
//       // Add command to history
//       setTerminalHistory(prev => [...prev, 
//         { type: 'prompt', text: currentDirectory },
//         { type: 'command', text: command }
//       ]);

//       // Process commands
//       switch (cmd) {
//         case 'ls':
//           handleLs(args);
//           break;
//         case 'cd':
//           handleCd(args[1]);
//           break;
//         case 'decrypt':
//         case 'access':
//           handleDecrypt(args[1]);
//           break;
//         case 'cat':
//           handleCat(args[1]);
//           break;
//         case 'help':
//           handleHelp();
//           break;
//         case 'clear':
//           setTerminalHistory([]);
//           break;
//         case 'exit':
//           setTerminalHistory(prev => [...prev, 
//             { type: 'system', text: 'Goodbye.' }
//           ]);
//           break;
//         default:
//           setTerminalHistory(prev => [...prev, 
//             { type: 'error', text: `Command not found: ${cmd}. Type 'help' for available commands.` }
//           ]);
//       }
      
//       setTerminalInput('');
//     }
//   };

//   const handleLs = (args) => {
//     const showAll = args.includes('-la') || args.includes('-l');
//     let output = [];
    
//     if (currentDirectory === '/home/rizwi/projects') {
//       output.push({ type: 'output', text: 'total 4' });
//       Object.entries(projects).forEach(([key, project]) => {
//         const status = accessStatus[key] ? '(ACCESSED)' : '(LOCKED)';
//         // Show condensed format on mobile
//         if (isMobile) {
//           output.push({ 
//             type: 'output', 
//             text: `${key}/ ${project.size} ${status}`
//           });
//         } else {
//           output.push({ 
//             type: 'output', 
//             text: `${project.permissions} ${project.size.padEnd(10)} ${project.modified} ${key}/ ${status}`
//           });
//         }
//       });
//     }
    
//     setTerminalHistory(prev => [...prev, ...output]);
//   };

//   const handleCd = (dir) => {
//     if (!dir || dir === '..') {
//       setCurrentDirectory('/home/rizwi/projects');
//       setSelectedProject(null);
//       setTerminalHistory(prev => [...prev, 
//         { type: 'success', text: 'Changed directory to /home/rizwi/projects' }
//       ]);
//     } else if (projects[dir]) {
//       if (accessStatus[dir]) {
//         setCurrentDirectory(`/home/rizwi/projects/${dir}`);
//         setSelectedProject(dir);
//         setTerminalHistory(prev => [...prev, 
//           { type: 'success', text: `Changed directory to ${dir}/` }
//         ]);
//       } else {
//         setTerminalHistory(prev => [...prev, 
//           { type: 'error', text: `Access denied. Run 'decrypt ${dir}' to gain access.` }
//         ]);
//       }
//     } else {
//       setTerminalHistory(prev => [...prev, 
//         { type: 'error', text: `Directory not found: ${dir}` }
//       ]);
//     }
//   };

//   const handleDecrypt = (target) => {
//     if (!target) {
//       setTerminalHistory(prev => [...prev, 
//         { type: 'error', text: 'Usage: decrypt <project_name>' }
//       ]);
//       return;
//     }

//     const project = projects[target];
//     if (!project) {
//       setTerminalHistory(prev => [...prev, 
//         { type: 'error', text: `Target not found: ${target}` }
//       ]);
//       return;
//     }

//     if (accessStatus[target]) {
//       setTerminalHistory(prev => [...prev, 
//         { type: 'warning', text: `Already have access to ${target}` }
//       ]);
//       return;
//     }

//     // Start decryption sequence
//     setIsHacking(true);
//     setTerminalHistory(prev => [...prev, 
//       { type: 'warning', text: `Initiating decryption protocol for ${target}...` },
//       { type: 'system', text: `Security level: ${project.security}` },
//       { type: 'system', text: 'Analyzing encryption algorithm...' }
//     ]);

//     let progress = 0;
//     const interval = setInterval(() => {
//       progress += Math.random() * 20;
//       if (progress >= 100) {
//         progress = 100;
//         clearInterval(interval);
        
//         setTimeout(() => {
//           setAccessStatus(prev => ({ ...prev, [target]: true }));
//           setIsHacking(false);
//           setHackProgress(0);
//           setTerminalHistory(prev => [...prev,
//             { type: 'success', text: 'DECRYPTION SUCCESSFUL!' },
//             { type: 'success', text: `Access granted to ${project.name}` },
//             { type: 'system', text: `You can now 'cd ${target}' to explore the project.` }
//           ]);
//         }, 500);
//       }
//       setHackProgress(progress);
//     }, project.accessTime / 20);
//   };

//   const handleCat = (file) => {
//     if (!file) {
//       setTerminalHistory(prev => [...prev, 
//         { type: 'error', text: 'Usage: cat <filename>' }
//       ]);
//       return;
//     }

//     if (selectedProject && projects[selectedProject]) {
//       const project = projects[selectedProject];
//       const fileData = project.files.find(f => f.name === file);
      
//       if (fileData) {
//         if (fileData.locked) {
//           setTerminalHistory(prev => [...prev, 
//             { type: 'error', text: `Access denied: ${file} is encrypted` }
//           ]);
//         } else {
//           setTerminalHistory(prev => [...prev, 
//             { type: 'output', text: `--- ${file} ---` },
//             { type: 'code', text: '// File contents would be displayed here' },
//             { type: 'code', text: `// Size: ${fileData.size}` }
//           ]);
//         }
//       } else {
//         setTerminalHistory(prev => [...prev, 
//           { type: 'error', text: `File not found: ${file}` }
//         ]);
//       }
//     } else {
//       setTerminalHistory(prev => [...prev, 
//         { type: 'error', text: 'Not in a project directory' }
//       ]);
//     }
//   };

//   const handleHelp = () => {
//     const helpText = [
//       { type: 'output', text: 'Available commands:' },
//       { type: 'output', text: '  ls [-la]         - List directory contents' },
//       { type: 'output', text: '  cd <dir>         - Change directory' },
//       { type: 'output', text: '  decrypt <target> - Decrypt and access a project' },
//       { type: 'output', text: '  cat <file>       - Display file contents' },
//       { type: 'output', text: '  clear            - Clear terminal' },
//       { type: 'output', text: '  help             - Show this help message' },
//       { type: 'output', text: '  exit             - Exit terminal' }
//     ];
//     setTerminalHistory(prev => [...prev, ...helpText]);
//   };

//   return (
//     <div className="min-h-screen pt-20 sm:pt-24 px-4 sm:px-6 relative">
//       {/* Background Matrix Effect */}
//       <div className="fixed inset-0 overflow-hidden opacity-5">
//         {Array.from({ length: 30 }, (_, i) => (
//           <div
//             key={i}
//             className="absolute text-green-400 text-xs font-mono animate-matrix-fall hidden sm:block"
//             style={{
//               left: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 10}s`,
//               animationDuration: `${10 + Math.random() * 10}s`
//             }}
//           >
//             {Math.random() > 0.5 ? '01101001' : 'ACCESS'}
//           </div>
//         ))}
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="mb-6 sm:mb-8">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-green-400 mb-3 sm:mb-4">
//             <span className="text-gray-400">&gt;</span> <ScrambledText text="PROJECT_VAULT.SYS" />
//           </h2>
//           <p className="text-gray-400 font-mono text-xs sm:text-sm">
//             <ScrambledText text="Use terminal commands to access project files. Type 'help' for available commands." />
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {/* Terminal Interface */}
//           <div className="order-2 lg:order-1">
//             <div className="bg-black/80 backdrop-blur-sm border border-green-500/30 rounded-lg overflow-hidden">
//               <div className="bg-green-950/30 px-3 sm:px-4 py-2 border-b border-green-500/30 flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <div className="flex gap-1 sm:gap-2">
//                     <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
//                     <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
//                     <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
//                   </div>
//                   <span className="text-xs text-green-400 font-mono ml-2 hidden sm:inline">nexus@terminal</span>
//                 </div>
//                 <Terminal className="w-4 h-4 text-green-400" />
//               </div>
              
//               <div 
//                 ref={terminalRef}
//                 className="p-3 sm:p-4 h-[300px] sm:h-[400px] lg:h-[500px] overflow-y-auto font-mono text-xs sm:text-sm"
//                 onClick={() => inputRef.current?.focus()}
//               >
//                 {terminalHistory.map((line, index) => (
//                   <div key={index} className={`mb-1 break-words ${
//                     line.type === 'error' ? 'text-red-400' :
//                     line.type === 'success' ? 'text-green-400' :
//                     line.type === 'warning' ? 'text-yellow-400' :
//                     line.type === 'system' ? 'text-blue-400' :
//                     line.type === 'prompt' ? 'text-green-400' :
//                     line.type === 'command' ? 'text-white' :
//                     line.type === 'code' ? 'text-gray-400 pl-4' :
//                     'text-gray-300'
//                   }`}>
//                     {line.type === 'prompt' && (
//                       <span>
//                         <span className="text-green-400 hidden sm:inline">rizwi@nexus</span>
//                         <span className="text-green-400 sm:hidden">~</span>
//                         <span className="hidden sm:inline">:</span>
//                         <span className="text-blue-400 hidden sm:inline">{line.text}</span>
//                         <span>$ </span>
//                       </span>
//                     )}
//                     {line.type === 'command' && <span className="ml-1">{line.text}</span>}
//                     {!['prompt', 'command'].includes(line.type) && line.text}
//                   </div>
//                 ))}
                
//                 <div className="flex items-center text-green-400 text-xs sm:text-sm">
//                   <span className="hidden sm:inline">rizwi@nexus:</span>
//                   <span className="hidden sm:inline text-blue-400">{currentDirectory}</span>
//                   <span className="sm:hidden">~$</span>
//                   <span className="hidden sm:inline">$</span>
//                   <input
//                     ref={inputRef}
//                     type="text"
//                     value={terminalInput}
//                     onChange={(e) => setTerminalInput(e.target.value)}
//                     onKeyDown={handleCommand}
//                     className="flex-1 bg-transparent border-none outline-none ml-2 text-white"
//                     autoFocus
//                   />
//                   <span className="animate-pulse">_</span>
//                 </div>
//               </div>
//             </div>

//             {/* Decryption Progress Bar */}
//             {isHacking && (
//               <div className="mt-4 bg-black/80 backdrop-blur-sm border border-green-500/30 rounded-lg p-3 sm:p-4">
//                 <div className="flex items-center justify-between mb-2">
//                   <span className="text-green-400 font-mono text-xs sm:text-sm">DECRYPTION IN PROGRESS</span>
//                   <span className="text-green-400 font-mono text-xs sm:text-sm">{Math.floor(hackProgress)}%</span>
//                 </div>
//                 <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
//                   <div 
//                     className="bg-green-400 h-2 rounded-full transition-all duration-300 relative"
//                     style={{ width: `${hackProgress}%` }}
//                   >
//                     <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
//                   </div>
//                 </div>
//                 <div className="mt-2 text-xs text-gray-400 font-mono">
//                   {hackProgress < 30 && "Analyzing encryption patterns..."}
//                   {hackProgress >= 30 && hackProgress < 60 && "Breaking cipher keys..."}
//                   {hackProgress >= 60 && hackProgress < 90 && "Decrypting access tokens..."}
//                   {hackProgress >= 90 && "Finalizing decryption..."}
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Project Cards */}
//           <div className="order-1 lg:order-2 space-y-4">
//             {Object.entries(projects).map(([key, project]) => {
//               const hasAccess = accessStatus[key];
//               return (
//                 <div
//                   key={key}
//                   className={`relative bg-black/60 backdrop-blur-sm border rounded-lg p-3 sm:p-4 transition-all duration-300 ${
//                     hasAccess 
//                       ? 'border-green-500/40 hover:border-green-500/60' 
//                       : 'border-red-500/20 hover:border-red-500/40'
//                   } ${selectedProject === key ? 'ring-2 ring-green-400' : ''}`}
//                 >
//                   <div className="flex items-start justify-between mb-3">
//                     <div className="flex items-center gap-2 sm:gap-3">
//                       <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center border ${
//                         hasAccess 
//                           ? 'bg-green-500/10 border-green-500/30' 
//                           : 'bg-red-500/10 border-red-500/30'
//                       }`}>
//                         {hasAccess ? <Unlock className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" /> : <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />}
//                       </div>
//                       <div>
//                         <h3 className="text-base sm:text-lg font-mono text-green-400">{project.name}</h3>
//                         <span className={`text-xs font-mono ${
//                           project.status === 'ACTIVE' ? 'text-green-400' :
//                           project.status === 'CLASSIFIED' ? 'text-red-400' :
//                           project.status === 'RESTRICTED' ? 'text-orange-400' :
//                           'text-blue-400'
//                         }`}>
//                           [{project.status}]
//                         </span>
//                       </div>
//                     </div>
//                     <div className={`px-2 py-1 rounded text-xs font-mono ${
//                       project.security === 'CRITICAL' ? 'bg-red-500/20 text-red-400' :
//                       project.security === 'HIGH' ? 'bg-orange-500/20 text-orange-400' :
//                       project.security === 'MEDIUM' ? 'bg-yellow-500/20 text-yellow-400' :
//                       'bg-green-500/20 text-green-400'
//                     }`}>
//                       <span className="hidden sm:inline">{project.security}</span>
//                       <span className="sm:hidden">{project.security.charAt(0)}</span>
//                     </div>
//                   </div>

//                   <p className="text-gray-400 font-mono text-xs sm:text-sm mb-3">{project.desc}</p>

//                   {hasAccess && (
//                     <>
//                       <div className="flex flex-wrap gap-1 sm:gap-2 mb-3">
//                         {project.tech.map(tech => (
//                           <span key={tech} className="px-2 py-1 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-mono rounded">
//                             {tech}
//                           </span>
//                         ))}
//                       </div>

//                       <div className="bg-black/40 rounded p-2 mb-3 max-h-24 sm:max-h-32 overflow-y-auto">
//                         <div className="font-mono text-xs">
//                           {project.files.map((file, index) => (
//                             <div key={index} className="text-gray-400 flex items-center gap-1 sm:gap-2">
//                               {file.name.endsWith('/') ? <Folder className="w-3 h-3" /> : <FileCode className="w-3 h-3" />}
//                               <span className={`truncate ${file.locked ? 'text-red-400' : ''}`}>{file.name}</span>
//                               <span className="text-gray-600 ml-auto">{file.size}</span>
//                               {file.locked && <Lock className="w-3 h-3 text-red-400" />}
//                             </div>
//                           ))}
//                         </div>
//                       </div>

//                       <a 
//                         href={project.url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-green-400 hover:text-green-300 font-mono text-xs sm:text-sm flex items-center gap-2 group"
//                       >
//                         <span>VISIT PROJECT</span>
//                         <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
//                       </a>
//                     </>
//                   )}

//                   {!hasAccess && (
//                     <div className="flex items-center gap-1 sm:gap-2 text-red-400 font-mono text-xs sm:text-sm">
//                       <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
//                       <span className="truncate">Run 'decrypt {key}'</span>
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Instructions */}
//         <div className="mt-6 sm:mt-8 bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-3 sm:p-4">
//           <div className="flex items-start gap-2 sm:gap-3">
//             <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mt-0.5" />
//             <div className="font-mono text-xs sm:text-sm">
//               <p className="text-green-400 mb-2">Quick Start:</p>
//               <div className="text-gray-400 space-y-1">
//                 <p>1. Type <span className="text-green-400">'ls -la'</span> to list all projects</p>
//                 <p>2. Type <span className="text-green-400">'decrypt [name]'</span> to gain access</p>
//                 <p>3. Type <span className="text-green-400">'cd [name]'</span> to enter directory</p>
//                 <p>4. Type <span className="text-green-400">'help'</span> for more commands</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes matrix-fall {
//           0% {
//             transform: translateY(-100vh);
//             opacity: 1;
//           }
//           100% {
//             transform: translateY(100vh);
//             opacity: 0;
//           }
//         }

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

//         @media (max-width: 640px) {
//           .terminal-output {
//             font-size: 11px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }
















// BEST + Responsive + BEST -----------------------------------------------------------------------------------------------------------
// app/projects/page.js
'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Lock, Unlock, Globe, Shield, Database, ChevronRight, Terminal, Folder, FileCode, AlertCircle, CheckCircle } from 'lucide-react';
import { useTransition } from '../layout';
import ScrambledText from '@/components/ScrambledText';

export default function ProjectsPage() {
  const { isTransitioning } = useTransition();
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState([]);
  const [currentDirectory, setCurrentDirectory] = useState('/home/rizwi/projects');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isHacking, setIsHacking] = useState(false);
  const [hackProgress, setHackProgress] = useState(0);
  const [accessStatus, setAccessStatus] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const terminalRef = useRef(null);
  const inputRef = useRef(null);

  const projects = {
    "celestial_horizons": { 
      name: "Celestial Horizons",
      type: "directory",
      permissions: "drwxr-xr-x",
      size: "4.2MB",
      modified: "Dec 15 2024",
      desc: "An Astronomy Website",
      tech: ["React", "Three.js", "WebGL", "GSAP"],
      status: "CLASSIFIED",
      security: "HIGH",
      icon: <Globe className="w-5 h-5" />,
      url: "https://celestial-horizons.vercel.app",
      accessTime: 3000,
      files: [
        { name: "index.jsx", size: "24KB" },
        { name: "galaxy.glsl", size: "8KB" },
        { name: "planets.json", size: "156KB" },
        { name: ".env", size: "1KB", locked: true }
      ]
    },
    "vaayu": { 
      name: "Vaayu",
      type: "directory",
      permissions: "drwxr-xr-x",
      size: "8.7MB",
      modified: "Dec 10 2024",
      desc: "A Drone Delivery Platform",
      tech: ["Node.js", "Express", "MongoDB", "Socket.io"],
      status: "ACTIVE",
      security: "MEDIUM",
      icon: <Shield className="w-5 h-5" />,
      url: "https://vaayu-platform.com",
      accessTime: 2000,
      files: [
        { name: "server.js", size: "45KB" },
        { name: "drone-api/", size: "2.1MB" },
        { name: "flight-control.js", size: "78KB" },
        { name: "config.json", size: "3KB", locked: true }
      ]
    },
    "portfolio_v1": { 
      name: "My Portfolio",
      type: "directory", 
      permissions: "drwxr-xr-x",
      size: "2.1MB",
      modified: "Dec 22 2024",
      desc: "My Portfolio :)",
      tech: ["Next.js", "Tailwind", "Framer Motion", "Three.js"],
      status: "LIVE",
      security: "LOW",
      icon: <Terminal className="w-5 h-5" />,
      url: "https://rizwi.dev",
      accessTime: 1000,
      files: [
        { name: "app/", size: "890KB" },
        { name: "components/", size: "456KB" },
        { name: "public/", size: "234KB" },
        { name: "README.md", size: "12KB" }
      ]
    },
    "dataminer_x": { 
      name: "DataMiner X",
      type: "directory",
      permissions: "drwx------",
      size: "12.4MB",
      modified: "Nov 28 2024",
      desc: "AI-powered web scraping and analysis platform",
      tech: ["Python", "TensorFlow", "Selenium", "Redis"],
      status: "RESTRICTED",
      security: "CRITICAL",
      icon: <Database className="w-5 h-5" />,
      url: "https://dataminer-x.io",
      accessTime: 5000,
      files: [
        { name: "scraper.py", size: "67KB" },
        { name: "ml_models/", size: "4.5MB", locked: true },
        { name: "data_pipeline.py", size: "89KB" },
        { name: "credentials.enc", size: "2KB", locked: true }
      ]
    }
  };

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Initial terminal messages
    const initialMessages = [
      { type: 'system', text: 'NEXUS TERMINAL v2.0.1' },
      { type: 'system', text: 'Establishing secure connection...' },
      { type: 'success', text: 'Connection established.' },
      { type: 'system', text: `Type 'help' for available commands` },
      { type: 'prompt', text: currentDirectory },
      { type: 'command', text: 'pwd' },
      { type: 'output', text: currentDirectory },
      { type: 'prompt', text: currentDirectory },
      { type: 'command', text: 'ls -la' },
      { type: 'output', text: 'total 4 directories' }
    ];
    setTerminalHistory(initialMessages);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalHistory]);

  const handleCommand = (e) => {
    if (e.key === 'Enter' && terminalInput.trim()) {
      const command = terminalInput.trim();
      const args = command.split(' ');
      const cmd = args[0].toLowerCase();
      
      // Add command to history
      setTerminalHistory(prev => [...prev, 
        { type: 'prompt', text: currentDirectory },
        { type: 'command', text: command }
      ]);

      // Process commands
      switch (cmd) {
        case 'ls':
          handleLs(args);
          break;
        case 'pwd':
          handlePwd();
          break;
        case 'cd':
          handleCd(args[1]);
          break;
        case 'decrypt':
        case 'access':
          handleDecrypt(args[1]);
          break;
        case 'cat':
          handleCat(args[1]);
          break;
        case 'help':
          handleHelp();
          break;
        case 'clear':
          setTerminalHistory([]);
          break;
        case 'exit':
          setTerminalHistory(prev => [...prev, 
            { type: 'system', text: 'Goodbye.' }
          ]);
          break;
        default:
          setTerminalHistory(prev => [...prev, 
            { type: 'error', text: `Command not found: ${cmd}. Type 'help' for available commands.` }
          ]);
      }
      
      setTerminalInput('');
    }
  };

  const handlePwd = () => {
    setTerminalHistory(prev => [...prev, 
      { type: 'output', text: currentDirectory }
    ]);
  };

  const handleLs = (args) => {
    const showAll = args.includes('-la') || args.includes('-l');
    let output = [];
    
    if (currentDirectory === '/home/rizwi/projects') {
      output.push({ type: 'output', text: 'total 4' });
      Object.entries(projects).forEach(([key, project]) => {
        const status = accessStatus[key] ? '(ACCESSED)' : '(LOCKED)';
        // Show condensed format on mobile
        if (isMobile) {
          output.push({ 
            type: 'output', 
            text: `${key}/ ${project.size} ${status}`
          });
        } else {
          output.push({ 
            type: 'output', 
            text: `${project.permissions} ${project.size.padEnd(10)} ${project.modified} ${key}/ ${status}`
          });
        }
      });
    } else if (selectedProject && projects[selectedProject]) {
      // Show files in project directory
      const project = projects[selectedProject];
      output.push({ type: 'output', text: `total ${project.files.length} files` });
      project.files.forEach(file => {
        const fileType = file.name.endsWith('/') ? 'd' : '-';
        const permissions = file.locked ? '-r--------' : '-rw-r--r--';
        if (isMobile) {
          output.push({ 
            type: 'output', 
            text: `${file.name} ${file.size} ${file.locked ? '(LOCKED)' : ''}`
          });
        } else {
          output.push({ 
            type: 'output', 
            text: `${fileType}${permissions} ${file.size.padEnd(8)} ${file.name} ${file.locked ? '(ENCRYPTED)' : ''}`
          });
        }
      });
    }
    
    setTerminalHistory(prev => [...prev, ...output]);
  };

  const handleCd = (dir) => {
    if (!dir) {
      setTerminalHistory(prev => [...prev, 
        { type: 'error', text: 'Usage: cd <directory> or cd ..' }
      ]);
      return;
    }
    
    if (dir === '..') {
      if (currentDirectory === '/home/rizwi/projects') {
        setTerminalHistory(prev => [...prev, 
          { type: 'output', text: 'Already at root directory' }
        ]);
      } else {
        setCurrentDirectory('/home/rizwi/projects');
        setSelectedProject(null);
        setTerminalHistory(prev => [...prev, 
          { type: 'success', text: 'Changed directory to /home/rizwi/projects' }
        ]);
      }
    } else if (projects[dir]) {
      if (accessStatus[dir]) {
        setCurrentDirectory(`/home/rizwi/projects/${dir}`);
        setSelectedProject(dir);
        setTerminalHistory(prev => [...prev, 
          { type: 'success', text: `Changed directory to ${dir}/` }
        ]);
      } else {
        setTerminalHistory(prev => [...prev, 
          { type: 'error', text: `Access denied. Run 'decrypt ${dir}' to gain access.` }
        ]);
      }
    } else {
      setTerminalHistory(prev => [...prev, 
        { type: 'error', text: `Directory not found: ${dir}` }
      ]);
    }
  };

  const handleDecrypt = (target) => {
    if (!target) {
      setTerminalHistory(prev => [...prev, 
        { type: 'error', text: 'Usage: decrypt <project_name>' }
      ]);
      return;
    }

    const project = projects[target];
    if (!project) {
      setTerminalHistory(prev => [...prev, 
        { type: 'error', text: `Target not found: ${target}` }
      ]);
      return;
    }

    if (accessStatus[target]) {
      setTerminalHistory(prev => [...prev, 
        { type: 'warning', text: `Already have access to ${target}` }
      ]);
      return;
    }

    // Start decryption sequence
    setIsHacking(true);
    setTerminalHistory(prev => [...prev, 
      { type: 'warning', text: `Initiating decryption protocol for ${target}...` },
      { type: 'system', text: `Security level: ${project.security}` },
      { type: 'system', text: 'Analyzing encryption algorithm...' }
    ]);

    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 20;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        
        setTimeout(() => {
          setAccessStatus(prev => ({ ...prev, [target]: true }));
          setIsHacking(false);
          setHackProgress(0);
          setTerminalHistory(prev => [...prev,
            { type: 'success', text: 'DECRYPTION SUCCESSFUL!' },
            { type: 'success', text: `Access granted to ${project.name}` },
            { type: 'system', text: `You can now 'cd ${target}' to explore the project.` }
          ]);
        }, 500);
      }
      setHackProgress(progress);
    }, project.accessTime / 20);
  };

  const handleCat = (file) => {
    if (!file) {
      setTerminalHistory(prev => [...prev, 
        { type: 'error', text: 'Usage: cat <filename>' }
      ]);
      return;
    }

    if (selectedProject && projects[selectedProject]) {
      const project = projects[selectedProject];
      const fileData = project.files.find(f => f.name === file);
      
      if (fileData) {
        if (fileData.locked) {
          setTerminalHistory(prev => [...prev, 
            { type: 'error', text: `Access denied: ${file} is encrypted` }
          ]);
        } else {
          setTerminalHistory(prev => [...prev, 
            { type: 'output', text: `--- ${file} ---` },
            { type: 'code', text: '// File contents would be displayed here' },
            { type: 'code', text: `// Size: ${fileData.size}` }
          ]);
        }
      } else {
        setTerminalHistory(prev => [...prev, 
          { type: 'error', text: `File not found: ${file}` }
        ]);
      }
    } else {
      setTerminalHistory(prev => [...prev, 
        { type: 'error', text: 'Not in a project directory' }
      ]);
    }
  };

  const handleHelp = () => {
    const helpText = [
      { type: 'output', text: 'Available commands:' },
      { type: 'output', text: '  ls [-la]         - List directory contents' },
      { type: 'output', text: '  pwd              - Print working directory' },
      { type: 'output', text: '  cd <dir>         - Change directory' },
      { type: 'output', text: '  cd ..            - Go to parent directory' },
      { type: 'output', text: '  decrypt <target> - Decrypt and access a project' },
      { type: 'output', text: '  cat <file>       - Display file contents' },
      { type: 'output', text: '  clear            - Clear terminal' },
      { type: 'output', text: '  help             - Show this help message' },
      { type: 'output', text: '  exit             - Exit terminal' }
    ];
    setTerminalHistory(prev => [...prev, ...helpText]);
  };

  return (
    <div className="min-h-screen pt-20 sm:pt-24 px-4 sm:px-6 relative">
      {/* Background Matrix Effect */}
      <div className="fixed inset-0 overflow-hidden opacity-5">
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={i}
            className="absolute text-green-400 text-xs font-mono animate-matrix-fall hidden sm:block"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          >
            {Math.random() > 0.5 ? '01101001' : 'ACCESS'}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-green-400 mb-3 sm:mb-4">
            <span className="text-gray-400">&gt;</span> <ScrambledText text="PROJECT_VAULT.SYS" />
          </h2>
          <p className="text-gray-400 font-mono text-xs sm:text-sm">
            <ScrambledText text="Use terminal commands to access project files. Type 'help' for available commands." />
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Terminal Interface */}
          <div className="order-2 lg:order-1">
            <div className="bg-black/80 backdrop-blur-sm border border-green-500/30 rounded-lg overflow-hidden">
              <div className="bg-green-950/30 px-3 sm:px-4 py-2 border-b border-green-500/30 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1 sm:gap-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-green-400 font-mono ml-2 hidden sm:inline">nexus@terminal</span>
                </div>
                <Terminal className="w-4 h-4 text-green-400" />
              </div>
              
              <div 
                ref={terminalRef}
                className="p-3 sm:p-4 h-[300px] sm:h-[400px] lg:h-[500px] overflow-y-auto font-mono text-xs sm:text-sm"
                onClick={() => inputRef.current?.focus()}
              >
                {terminalHistory.map((line, index) => (
                  <div key={index} className={`mb-1 break-words ${
                    line.type === 'error' ? 'text-red-400' :
                    line.type === 'success' ? 'text-green-400' :
                    line.type === 'warning' ? 'text-yellow-400' :
                    line.type === 'system' ? 'text-blue-400' :
                    line.type === 'prompt' ? 'text-green-400' :
                    line.type === 'command' ? 'text-white' :
                    line.type === 'code' ? 'text-gray-400 pl-4' :
                    'text-gray-300'
                  }`}>
                    {line.type === 'prompt' && (
                      <span>
                        <span className="text-green-400 hidden sm:inline">rizwi@nexus</span>
                        <span className="text-green-400 sm:hidden">~</span>
                        <span className="hidden sm:inline">:</span>
                        <span className="text-blue-400 hidden sm:inline">{line.text}</span>
                        <span>$ </span>
                      </span>
                    )}
                    {line.type === 'command' && <span className="ml-1">{line.text}</span>}
                    {!['prompt', 'command'].includes(line.type) && line.text}
                  </div>
                ))}
                
                <div className="flex items-center text-green-400 text-xs sm:text-sm">
                  <span className="hidden sm:inline">rizwi@nexus:</span>
                  <span className="hidden sm:inline text-blue-400">{currentDirectory}</span>
                  <span className="sm:hidden">
                    {selectedProject ? `~/${selectedProject}` : '~'}
                  </span>
                  <span>$ </span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    onKeyDown={handleCommand}
                    className="flex-1 bg-transparent border-none outline-none ml-1 text-white"
                    autoFocus
                  />
                  <span className="animate-pulse">_</span>
                </div>
              </div>
            </div>

            {/* Decryption Progress Bar */}
            {isHacking && (
              <div className="mt-4 bg-black/80 backdrop-blur-sm border border-green-500/30 rounded-lg p-3 sm:p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-green-400 font-mono text-xs sm:text-sm">DECRYPTION IN PROGRESS</span>
                  <span className="text-green-400 font-mono text-xs sm:text-sm">{Math.floor(hackProgress)}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-green-400 h-2 rounded-full transition-all duration-300 relative"
                    style={{ width: `${hackProgress}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
                <div className="mt-2 text-xs text-gray-400 font-mono">
                  {hackProgress < 30 && "Analyzing encryption patterns..."}
                  {hackProgress >= 30 && hackProgress < 60 && "Breaking cipher keys..."}
                  {hackProgress >= 60 && hackProgress < 90 && "Decrypting access tokens..."}
                  {hackProgress >= 90 && "Finalizing decryption..."}
                </div>
              </div>
            )}
          </div>

          {/* Project Cards */}
          <div className="order-1 lg:order-2 space-y-4">
            {Object.entries(projects).map(([key, project]) => {
              const hasAccess = accessStatus[key];
              return (
                <div
                  key={key}
                  className={`relative bg-black/60 backdrop-blur-sm border rounded-lg p-3 sm:p-4 transition-all duration-300 ${
                    hasAccess 
                      ? 'border-green-500/40 hover:border-green-500/60' 
                      : 'border-red-500/20 hover:border-red-500/40'
                  } ${selectedProject === key ? 'ring-2 ring-green-400' : ''}`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center border ${
                        hasAccess 
                          ? 'bg-green-500/10 border-green-500/30' 
                          : 'bg-red-500/10 border-red-500/30'
                      }`}>
                        {hasAccess ? <Unlock className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" /> : <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />}
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-mono text-green-400">{project.name}</h3>
                        <span className={`text-xs font-mono ${
                          project.status === 'ACTIVE' ? 'text-green-400' :
                          project.status === 'CLASSIFIED' ? 'text-red-400' :
                          project.status === 'RESTRICTED' ? 'text-orange-400' :
                          'text-blue-400'
                        }`}>
                          [{project.status}]
                        </span>
                      </div>
                    </div>
                    <div className={`px-2 py-1 rounded text-xs font-mono ${
                      project.security === 'CRITICAL' ? 'bg-red-500/20 text-red-400' :
                      project.security === 'HIGH' ? 'bg-orange-500/20 text-orange-400' :
                      project.security === 'MEDIUM' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      <span className="hidden sm:inline">{project.security}</span>
                      <span className="sm:hidden">{project.security.charAt(0)}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 font-mono text-xs sm:text-sm mb-3">{project.desc}</p>

                  {hasAccess && (
                    <>
                      <div className="flex flex-wrap gap-1 sm:gap-2 mb-3">
                        {project.tech.map(tech => (
                          <span key={tech} className="px-2 py-1 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-mono rounded">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="bg-black/40 rounded p-2 mb-3 max-h-24 sm:max-h-32 overflow-y-auto">
                        <div className="font-mono text-xs">
                          {project.files.map((file, index) => (
                            <div key={index} className="text-gray-400 flex items-center gap-1 sm:gap-2">
                              {file.name.endsWith('/') ? <Folder className="w-3 h-3" /> : <FileCode className="w-3 h-3" />}
                              <span className={`truncate ${file.locked ? 'text-red-400' : ''}`}>{file.name}</span>
                              <span className="text-gray-600 ml-auto">{file.size}</span>
                              {file.locked && <Lock className="w-3 h-3 text-red-400" />}
                            </div>
                          ))}
                        </div>
                      </div>

                      <a 
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:text-green-300 font-mono text-xs sm:text-sm flex items-center gap-2 group"
                      >
                        <span>VISIT PROJECT</span>
                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </>
                  )}

                  {!hasAccess && (
                    <div className="flex items-center gap-1 sm:gap-2 text-red-400 font-mono text-xs sm:text-sm">
                      <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span className="truncate">Run 'decrypt {key}'</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-6 sm:mt-8 bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-lg p-3 sm:p-4">
          <div className="flex items-start gap-2 sm:gap-3">
            <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mt-0.5" />
            <div className="font-mono text-xs sm:text-sm">
              <p className="text-green-400 mb-2">Quick Start:</p>
              <div className="text-gray-400 space-y-1">
                <p>1. Type <span className="text-green-400">'pwd'</span> to see current directory</p>
                <p>2. Type <span className="text-green-400">'ls -la'</span> to list all projects</p>
                <p>3. Type <span className="text-green-400">'decrypt [name]'</span> to gain access</p>
                <p>4. Type <span className="text-green-400">'cd [name]'</span> to enter directory</p>
                <p>5. Type <span className="text-green-400">'cd ..'</span> to go back</p>
                <p>6. Type <span className="text-green-400">'help'</span> for all commands</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes matrix-fall {
          0% {
            transform: translateY(-100vh);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

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

        @media (max-width: 640px) {
          .terminal-output {
            font-size: 11px;
          }
        }
      `}</style>
    </div>
  );
}