// // app/page.js
// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import { ChevronRight, Terminal, Lock } from 'lucide-react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { useTransition } from './layout';
// import ScrambledText from '@/components/ScrambledText';

// const MyPhoto = () => {
//   const { isTransitioning } = useTransition();
  
//   return (
//     <div className={`w-64 h-64 md:w-96 md:h-96 pointer-events-none ${isTransitioning ? 'opacity-0' : 'opacity-100'} transition-opacity duration-700`}>
//       <div className="relative w-full h-full">
//         <div className="absolute inset-0 bg-green-400 rounded-full blur-3xl opacity-20 animate-pulse" />
        
//         <div className="absolute inset-4 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-full backdrop-blur-xl border border-white shadow-2xl shadow-green-400/20 overflow-hidden">
//           {/* Profile Image Layer */}
//           <div className="absolute inset-0 rounded-full overflow-hidden">
//             <Image
//               src="/portfolio.jpg" // Replace with your image path
//               alt="Profile"
//               fill
//               className="object-cover opacity-99"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function HomePage() {
//   const { isTransitioning } = useTransition();
//   const [showElements, setShowElements] = useState(false);

//   useEffect(() => {
//     if (!isTransitioning) {
//       setTimeout(() => setShowElements(true), 2500);
//     }
//   }, [isTransitioning]);

//   useEffect(() => {
//     if (isTransitioning) {
//       setShowElements(false);
//     }
//   }, [isTransitioning]);

//   return (
//     <div className="min-h-screen flex flex-col relative overflow-hidden pt-16 px-4 md:px-8 lg:px-12">
//       <div className="flex-1 flex items-center justify-center">
//       <div className="relative z-10 max-w-7xl px-8 md:px-12 lg:px-16">
//         <div className="mb-8">
//           <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6">
//             <span className="text-green-400 font-mono text-sm flex items-center gap-2">
//               <Lock className="w-4 h-4" />
//               SECURE CONNECTION ESTABLISHED
//             </span>
//           </div>
//         </div>
        
//         <div className="flex flex-wrap items-center justify-center">
//           <div className="max-w-2xl">
//             <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-mono">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-white">
//                 <ScrambledText text="WELCOME TO MY " />
//               </span>
//               <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-500 via-amber-300 to-orange-300">
//                 <ScrambledText text="PORTFOLIO" />
//               </span>
//             </h1>
        
//             <p className="text-xl md:text-2xl mb-12 text-gray-300 font-mono">
//               <span className="text-green-400">&gt;</span> <ScrambledText text="Full Stack Developer | Ethical Hacker | System Architect" />
//               <span className="animate-blink">_</span>
//             </p>
//           </div>

//           <MyPhoto />

//         </div>

//         {/* {showElements && ( */}
//           <div className={`mt-7 lg:mt-1 mb-7 flex flex-col xl:flex-row gap-4 animate-fade-in ${isTransitioning ? 'opacity-0' : ''}`}>
//             <Link 
//               href="/projects" 
//               className="px-8 py-4 bg-transparent border-2 border-green-400 text-green-400 font-mono rounded-lg hover:bg-green-400 hover:text-black transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-400/30 flex items-center justify-center gap-2 group"
//             >
//               <Terminal className="w-5 h-5 group-hover:scale-130 transition-transform" />
//               ACCESS PROJECTS
//             </Link>
//             <Link 
//               href="/contact" 
//               className="px-8 py-4 bg-green-400/20 border-2 border-green-400/50 text-green-400 font-mono rounded-lg hover:bg-green-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-400/20 flex items-center justify-center gap-2"
//             >
//               GET IN TOUCH
//             </Link>
//           </div>
//         {/* )} */}
//       </div>
//       </div>

//       {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <div className="text-green-400/70 text-sm font-mono">SCROLL TO DECRYPT</div>
//       </div> */}
//     </div>
//   );
// }




















// // app/page.js
// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import { ChevronRight, Terminal, Lock } from 'lucide-react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { useTransition } from './layout';
// import ScrambledText from '@/components/ScrambledText';

// const MyPhoto = () => {
//   const { isTransitioning } = useTransition();
//   const [isMobile, setIsMobile] = useState(false);
  
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
    
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);
  
//   return (
//     <div className={`
//       w-48 h-48 
//       sm:w-56 sm:h-56 
//       md:w-64 md:h-64 
//       lg:w-80 lg:h-80 
//       xl:w-96 xl:h-96 
//       pointer-events-none 
//       ${isTransitioning ? 'opacity-0' : 'opacity-100'} 
//       transition-opacity duration-700
//     `}>
//       <div className="relative w-full h-full">
//         <div className="absolute inset-0 bg-green-400 rounded-full blur-2xl sm:blur-3xl opacity-20 animate-pulse" />
        
//         <div className="absolute inset-2 sm:inset-3 md:inset-4 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-full backdrop-blur-xl border border-white shadow-2xl shadow-green-400/20 overflow-hidden">
//           {/* Profile Image Layer */}
//           <div className="absolute inset-0 rounded-full overflow-hidden">
//             <Image
//               src="/portfolio.jpg" // Replace with your image path
//               alt="Profile"
//               fill
//               className="object-cover opacity-99"
//               priority
//               sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 256px, (max-width: 1280px) 320px, 384px"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function HomePage() {
//   const { isTransitioning } = useTransition();
//   const [showElements, setShowElements] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [isTablet, setIsTablet] = useState(false);

//   // Check device type
//   useEffect(() => {
//     const checkDevice = () => {
//       setIsMobile(window.innerWidth < 640);
//       setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
//     };
//     checkDevice();
//     window.addEventListener('resize', checkDevice);
    
//     return () => window.removeEventListener('resize', checkDevice);
//   }, []);

//   useEffect(() => {
//     if (!isTransitioning) {
//       setTimeout(() => setShowElements(true), 2500);
//     }
//   }, [isTransitioning]);

//   useEffect(() => {
//     if (isTransitioning) {
//       setShowElements(false);
//     }
//   }, [isTransitioning]);

//   return (
//     <div className="min-h-screen flex flex-col relative overflow-hidden pt-16 sm:pt-20 md:pt-16 px-4 sm:px-6 md:px-8 lg:px-12">
//       <div className="flex-1 flex items-center justify-center">
//         <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
//           {/* Status Badge */}
//           <div className="mb-6 sm:mb-8">
//             <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-green-500/10 border border-green-500/30 rounded-full">
//               <span className="text-green-400 font-mono text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2">
//                 <Lock className="w-3 h-3 sm:w-4 sm:h-4" />
//                 <span className="hidden sm:inline">SECURE CONNECTION ESTABLISHED</span>
//                 <span className="sm:hidden">CONNECTED</span>
//               </span>
//             </div>
//           </div>
          
//           {/* Main Content */}
//           <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
//             {/* Text Content */}
//             <div className="max-w-full lg:max-w-2xl text-center lg:text-left order-2 lg:order-1">
//               <h1 className="font-bold font-mono mb-4 sm:mb-6">
//                 <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-white">
//                   <ScrambledText text={isMobile ? "WELCOME TO" : "WELCOME TO MY "} />
//                 </span>
//                 <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-transparent bg-clip-text bg-gradient-to-br from-orange-500 via-amber-300 to-orange-300 mt-1 sm:mt-2">
//                   {!isMobile && <ScrambledText text="PORTFOLIO" />}
//                   {isMobile && (
//                     <>
//                       <ScrambledText text="MY " />
//                       <ScrambledText text="PORTFOLIO" />
//                     </>
//                   )}
//                 </span>
//               </h1>
          
//               <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 lg:mb-12 text-gray-300 font-mono">
//                 <span className="text-green-400">&gt;</span>{' '}
//                 <span className="inline-block">
//                   <ScrambledText text={
//                     isMobile 
//                       ? "Full Stack Dev" 
//                       : isTablet
//                         ? "Full Stack Developer | Ethical Hacker"
//                         : "Full Stack Developer | Ethical Hacker | System Architect"
//                   } />
//                 </span>
//                 <span className="animate-blink ml-1">_</span>
//               </p>

//               {/* CTA Buttons */}
//               <div className={`
//                 flex flex-col sm:flex-row gap-3 sm:gap-4 
//                 ${isMobile ? 'w-full' : 'justify-center lg:justify-start'}
//                 animate-fade-in ${isTransitioning ? 'opacity-0' : ''}
//               `}>
//                 <Link 
//                   href="/projects" 
//                   className={`
//                     ${isMobile ? 'w-full' : ''}
//                     px-6 py-3 sm:px-8 sm:py-4 
//                     bg-transparent border-2 border-green-400 text-green-400 
//                     font-mono text-sm sm:text-base rounded-lg 
//                     hover:bg-green-400 hover:text-black 
//                     transition-all duration-300 transform hover:scale-105 
//                     hover:shadow-lg hover:shadow-green-400/30 
//                     flex items-center justify-center gap-2 group
//                   `}
//                 >
//                   <Terminal className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
//                   <span className="hidden sm:inline">ACCESS PROJECTS</span>
//                   <span className="sm:hidden">PROJECTS</span>
//                 </Link>
//                 <Link 
//                   href="/contact" 
//                   className={`
//                     ${isMobile ? 'w-full' : ''}
//                     px-6 py-3 sm:px-8 sm:py-4 
//                     bg-green-400/20 border-2 border-green-400/50 text-green-400 
//                     font-mono text-sm sm:text-base rounded-lg 
//                     hover:bg-green-400/30 
//                     transition-all duration-300 transform hover:scale-105 
//                     hover:shadow-lg hover:shadow-green-400/20 
//                     flex items-center justify-center gap-2
//                   `}
//                 >
//                   <span className="hidden sm:inline">GET IN TOUCH</span>
//                   <span className="sm:hidden">CONTACT</span>
//                 </Link>
//               </div>
//             </div>

//             {/* Photo Component */}
//             <div className="order-1 lg:order-2 mb-6 lg:mb-0">
//               <MyPhoto />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Optional: Scroll indicator for desktop only */}
//       {!isMobile && !isTablet && (
//         <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <div className="text-green-400/70 text-sm font-mono hidden xl:block">SCROLL TO DECRYPT</div>
//         </div>
//       )}

//       <style jsx>{`
//         @keyframes blink {
//           0%, 50% { opacity: 1; }
//           51%, 100% { opacity: 0; }
//         }
        
//         @keyframes fade-in {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
        
//         .animate-fade-in {
//           animation: fade-in 0.6s ease-out forwards;
//         }
        
//         .animate-blink {
//           animation: blink 1s infinite;
//         }
//       `}</style>
//     </div>
//   );
// }

























// BEST 
// app/page.js
'use client';
import React, { useState, useEffect, useRef } from 'react';
import { ShieldUser, Lock, FolderInput } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useTransition } from './layout';
import ScrambledText from '@/components/ScrambledText';

// Typing Animation Component

const TypingAnimation = ({ isSmallScreen }) => {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const mountedRef = useRef(true);
  
  // Add more roles here in the future
  const roles = useRef([
    'Full Stack Developer',
    'MERN Developer',
    'DSA Enthusiast'
  ]).current;
  
  useEffect(() => {
    // Set mounted ref
    mountedRef.current = true;
    
    // Initialize with first character
    if (displayText === '' && !isDeleting) {
      setDisplayText(roles[0].charAt(0));
      setCharIndex(1);
    }
    
    return () => {
      mountedRef.current = false;
    };
  }, []);
  
  useEffect(() => {
    if (!mountedRef.current) return;
    
    const currentRole = roles[roleIndex];
    let timeout;
    
    if (!isDeleting && charIndex < currentRole.length) {
      // Typing
      timeout = setTimeout(() => {
        if (mountedRef.current) {
          setDisplayText(currentRole.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }
      }, 150);
    } else if (!isDeleting && charIndex === currentRole.length) {
      // Pause at end
      timeout = setTimeout(() => {
        if (mountedRef.current) {
          setIsDeleting(true);
        }
      }, 2000);
    } else if (isDeleting && charIndex > 0) {
      // Deleting
      timeout = setTimeout(() => {
        if (mountedRef.current) {
          setDisplayText(currentRole.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }
      }, 50);
    } else if (isDeleting && charIndex === 0) {
      // Move to next role
      timeout = setTimeout(() => {
        if (mountedRef.current) {
          const nextIndex = (roleIndex + 1) % roles.length;
          setRoleIndex(nextIndex);
          setIsDeleting(false);
          setDisplayText(roles[nextIndex].charAt(0));
          setCharIndex(1);
        }
      }, 500);
    }
    
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [charIndex, roleIndex, isDeleting, roles]);

  // On mobile/tablet, include > with the typing text
  if (isSmallScreen) {
    return (
      <span className="inline-block min-h-[1.5em]">
        <span className="text-green-400">&gt;</span>
        <span className="ml-2">{displayText}</span>
        <span className="animate-blink ml-0.5">_</span>
      </span>
    );
  }
  
  return (
    <span className="inline-block min-h-[1.5em] min-w-[200px]">
      <span>{displayText}</span>
      <span className="animate-blink ml-0.5">_</span>
    </span>
  );
};

const MyPhoto = () => {
  const { isTransitioning } = useTransition();
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <div className={`
      w-56 h-56 
      sm:w-56 sm:h-56 
      md:w-64 md:h-64 
      lg:w-80 lg:h-80 
      xl:w-96 xl:h-96 
      pointer-events-none 
      ${isTransitioning ? 'opacity-0' : 'opacity-100'} 
      transition-opacity duration-700
    `}>
      <div className="relative w-full h-full">
        <div className="absolute inset-0 bg-green-400 rounded-full blur-2xl sm:blur-3xl opacity-20 animate-pulse" />
        
        <div className="absolute inset-2 sm:inset-3 md:inset-4 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-full backdrop-blur-xl border border-white shadow-2xl shadow-green-400/20 overflow-hidden">
          {/* Profile Image Layer */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <Image
              src="/portfolio.jpg" // Replace with your image path
              alt="Profile"
              fill
              className="object-cover opacity-99"
              priority
              sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 256px, (max-width: 1280px) 320px, 384px"
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
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Check device type
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

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
    <div className="min-h-screen flex flex-col relative overflow-hidden pt-16 sm:pt-20 md:pt-16 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="flex-1 flex items-center justify-center">
        <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* Status Badge - Centered on non-desktop screens */}
          <div className="mb-12 sm:mb-8 flex justify-center lg:justify-start lg:pl-7">
            <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-green-500/10 border border-green-500/30 rounded-full">
              <span className="text-green-400 font-mono text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2">
                <Lock className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="">SECURE CONNECTION ESTABLISHED</span>
              </span>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            {/* Text Content */}
            <div className="max-w-full lg:max-w-2xl text-center lg:text-left order-2 lg:order-1">
              <h1 className="font-bold font-mono mb-4 sm:mb-6">
                {/* Welcome to my - single line on desktop */}
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.7rem] text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-white">
                  <ScrambledText text="WELCOME TO MY" />
                </span>
                {/* Portfolio - second line */}
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-transparent bg-clip-text bg-gradient-to-br from-orange-500 via-amber-300 to-orange-300 mt-1 sm:mt-2">
                  <ScrambledText text="PORTFOLIO" />
                </span>
              </h1>
          
              {/* <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 lg:mb-12 text-gray-300 font-mono">
                <span className="text-green-400">&gt;</span>{' '}
                <TypingAnimation />
              </p> */}

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 lg:mb-12 text-gray-300 font-mono text-center lg:text-left">
                {!(isMobile || isTablet) && (
                  <>
                    <span className="text-green-400">&gt;</span>{' '}
                  </>
                )}
                <TypingAnimation isSmallScreen={isMobile || isTablet} />
              </p>

              {/* CTA Buttons */}
              <div className={`
                flex flex-col sm:flex-row gap-3 sm:gap-4 
                ${isMobile ? 'w-full' : 'justify-center lg:justify-start'}
                animate-fade-in ${isTransitioning ? 'opacity-0' : ''}
              `}>
                <Link 
                  href="/projects" 
                  className={`
                    ${isMobile ? 'w-full' : ''}
                    px-6 py-3 sm:px-8 sm:py-4 
                    bg-transparent border-2 border-green-400 text-green-400 
                    font-mono text-sm sm:text-base rounded-lg 
                    hover:bg-green-400 hover:text-black 
                    transition-all duration-300 transform hover:scale-105 
                    hover:shadow-lg hover:shadow-green-400/30 
                    flex items-center justify-center gap-2 group
                  `}
                >
                  <FolderInput className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                  <span className="">ACCESS PROJECTS</span>
                </Link>
                <Link 
                  href="/about" 
                  className={`
                    ${isMobile ? 'w-full' : ''}
                    px-6 py-3 sm:px-8 sm:py-4 
                    bg-green-400/20 border-2 border-green-400/50 text-green-400 
                    font-mono text-sm sm:text-base rounded-lg 
                    hover:bg-green-400/30 
                    transition-all duration-300 transform hover:scale-105 
                    hover:shadow-lg hover:shadow-green-400/20 
                    flex items-center justify-center gap-2
                  `}
                >
                  <ShieldUser className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                  <span className="">KNOW ME</span>
                </Link>
              </div>
            </div>

            {/* Photo Component */}
            <div className="order-1 lg:order-2 mb-6 lg:mb-0">
              <MyPhoto />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </div>
  );
}