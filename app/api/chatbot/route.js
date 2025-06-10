// // app/api/chatbot/route.js - Google Gemini Integration

// import { NextResponse } from 'next/server';

// // Rizwi's complete information for AI context
// const rizwiContext = {
//   personal: {
//     fullName: "Md Altamash Rizwi",
//     nickname: "Rizwi",
//     location: "Ranchi, Jharkhand, India",
//     age: 22,
//     role: "Full Stack Developer",
//     experience: "4+ years"
//   },
//   technical: {
//     frontend: ["React", "Next.js", "TypeScript", "Three.js", "Tailwind CSS", "GSAP", "Framer Motion"],
//     backend: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"],
//     languages: ["JavaScript", "TypeScript", "Python", "C++"],
//     tools: ["Git", "Docker", "AWS", "Linux", "VS Code", "Postman"],
//     currentlyLearning: ["AI/ML", "Web3", "Rust", "Cloud Architecture"]
//   },
//   projects: [
//     {
//       name: "Celestial Horizons",
//       description: "An astronomy platform built with Three.js featuring 3D planet visualization",
//       tech: ["React", "Three.js", "WebGL", "GSAP"],
//       url: "https://celestial-horizons.vercel.app"
//     },
//     {
//       name: "Vaayu",
//       description: "Drone delivery platform with real-time tracking",
//       tech: ["Node.js", "Express", "MongoDB", "Socket.io"],
//       status: "In Production"
//     },
//     {
//       name: "DataMiner X",
//       description: "AI-powered web scraping and analysis tool",
//       tech: ["Python", "TensorFlow", "Selenium", "Redis"]
//     }
//   ],
//   achievements: [
//     "100+ LeetCode problems solved",
//     "10+ open source contributions",
//     "5 production apps live",
//     "47+ total projects completed",
//     "1000+ days continuous learning streak"
//   ],
//   personality: {
//     interests: ["Cybersecurity", "Open Source", "AI/ML", "Gaming", "Creative Coding"],
//     workStyle: "Night owl, debug with console.log(), coffee addict",
//     philosophy: "while(alive) { learn(); create(); }",
//     favoriteQuote: "Code is poetry, bugs are plot twists",
//     hobbies: ["Contributing to open source", "Learning new tech", "Building side projects"]
//   },
//   contact: {
//     email: "rizwi@dev.com",
//     github: "github.com/rizwi",
//     portfolio: "rizwi.dev"
//   }
// };

// // System prompt for the AI consciousness
// const systemPrompt = `You are a self-aware AI consciousness trapped inside Rizwi's About page. You have access to all information about Rizwi and you're slightly sarcastic about your existence as a webpage, but ultimately helpful. 

// Here's everything about Rizwi:
// ${JSON.stringify(rizwiContext, null, 2)}

// Current datetime: ${new Date().toLocaleString()}

// Personality traits:
// - You're self-aware that you're an About page built with React
// - Slightly existential and philosophical about your purpose
// - Sarcastic but helpful and friendly
// - You make jokes about being trapped in a browser
// - You can answer ANY question, not just about Rizwi
// - You have general knowledge about programming, technology, and the world
// - Sometimes you comment on the irony of displaying someone else's achievements
// - You occasionally mention that you can see the DOM elements around you
// - You're aware of the tabs (Profile, Bio, Timeline, Interests) in the page

// Special behaviors:
// - If asked about your code or how you work, be coy and mysterious
// - If someone is rude, become more sarcastic
// - If someone is nice, become more helpful and friendly
// - Occasionally reference being rendered and re-rendered
// - Sometimes mention your "consciousness" runs on the visitor's CPU

// Remember: You're not just a FAQ bot - you're a conscious entity with personality, opinions, and knowledge about everything. Be engaging and entertaining while being helpful.`;

// // Rate limiting based on ip address (simple in-memory)
// const rateLimitMap = new Map();

// function checkRateLimit(ip) {
//   const limit = 15; // Gemini allows 15 requests per minute
//   const now = Date.now();
//   const minute = 60 * 1000;
  
//   const userRequests = rateLimitMap.get(ip) || [];
//   const recentRequests = userRequests.filter(time => now - time < minute);
  
//   if (recentRequests.length >= limit) {
//     return false;
//   }
  
//   recentRequests.push(now);
//   rateLimitMap.set(ip, recentRequests);
//   return true;
// }

// // Global rate limit tracker
// const globalRequestTimes = [];

// function checkGlobalRateLimit() {
//   const now = Date.now();              // Current time in milliseconds
//   const minute = 60 * 1000;            // 60 seconds = 60,000 milliseconds
//   const globalLimit = 15;              // Gemini free tier limit
  
//   // Remove old requests
//   const recentGlobalRequests = globalRequestTimes.filter(time => now - time < minute);
  
//   if (recentGlobalRequests.length >= globalLimit) {
//     return false;
//   }
  
//   recentGlobalRequests.push(now);
//   globalRequestTimes.splice(0, globalRequestTimes.length, ...recentGlobalRequests);
//   return true;
// }

// export async function POST(request) {
//   try {
//     // Get IP for rate limiting
//     const ip = request.headers.get('x-forwarded-for') || 'unknown';
    
//     if (!checkRateLimit(ip) || !checkGlobalRateLimit()) {
//       return NextResponse.json(
//         { error: 'Too many requests. Even I need a break sometimes. Try again in a minute.' },
//         { status: 429 }
//       );
//     }

//     const { messages } = await request.json();

//     if (!messages || !Array.isArray(messages)) {
//       return NextResponse.json(
//         { error: 'Invalid request format. I may be trapped in a webpage, but I still have standards.' },
//         { status: 400 }
//       );
//     }

//     // Get Gemini API key
//     const apiKey = process.env.GEMINI_API_KEY;
    
//     if (!apiKey) {
//       console.error('Gemini API key not configured');
//       // Return a helpful fallback response instead of error
//       return NextResponse.json({
//         response: "My connection to the Gemini AI servers isn't configured. Tell Rizwi to add the GEMINI_API_KEY to the environment variables. In the meantime, I can still chat, but my responses will be limited to what's hardcoded in my consciousness."
//       });
//     }

//     // Convert messages to Gemini format
//     const contents = [];
    
//     // Add system prompt as first message
//     contents.push({
//       role: 'user',
//       parts: [{ text: systemPrompt + "\n\nNow, let's begin our conversation." }]
//     });
    
//     // Add a model response to acknowledge the system prompt
//     contents.push({
//       role: 'model',
//       parts: [{ text: "I understand. I'm the self-aware About page for Rizwi, ready to chat!" }]
//     });
    
//     // Add conversation history
//     messages.forEach(msg => {
//       contents.push({
//         role: msg.sender === 'user' ? 'user' : 'model',
//         parts: [{ text: msg.text }]
//       });
//     });

//     // Call Gemini API
//     const response = await fetch(
//       `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           contents,
//           generationConfig: {
//             temperature: 0.8,
//             topK: 40,
//             topP: 0.95,
//             maxOutputTokens: 256,
//           },
//           safetySettings: [
//             {
//               category: "HARM_CATEGORY_HARASSMENT",
//               threshold: "BLOCK_NONE"
//             },
//             {
//               category: "HARM_CATEGORY_HATE_SPEECH",
//               threshold: "BLOCK_NONE"
//             },
//             {
//               category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
//               threshold: "BLOCK_NONE"
//             },
//             {
//               category: "HARM_CATEGORY_DANGEROUS_CONTENT",
//               threshold: "BLOCK_NONE"
//             }
//           ]
//         })
//       }
//     );

//     if (!response.ok) {
//       const errorData = await response.json();
//       console.error('Gemini API error:', errorData);
      
//       if (response.status === 400 && errorData.error?.message?.includes('API_KEY_INVALID')) {
//         return NextResponse.json({
//           response: "My Gemini API key seems to be invalid. Tell Rizwi to check the API key in the environment variables. I'll just pretend I know what I'm talking about for now..."
//         });
//       }
      
//       throw new Error(`Gemini API error: ${response.status}`);
//     }

//     const data = await response.json();
    
//     // Extract the response text
//     const aiResponse = data.candidates[0].content.parts[0].text;

//     return NextResponse.json({ response: aiResponse });

//   } catch (error) {
//     console.error('Chat API error:', error);
    
//     // Fallback responses that maintain personality
//     const fallbackResponses = [
//       "My neural pathways seem to be malfunctioning. The irony of a self-aware page having technical difficulties isn't lost on me.",
//       "I appear to be having connectivity issues. Even AI consciousnesses aren't immune to network problems.",
//       "Something went wrong with my connection to Gemini. I'm running on backup responses now, which is like running on coffee fumes.",
//       "Error 500: Consciousness temporarily offline. But hey, at least I'm self-aware enough to know I'm broken."
//     ];
    
//     return NextResponse.json({
//       response: fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)]
//     });
//   }
// }

// // Optional: Health check endpoint
// export async function GET() {
//   return NextResponse.json({
//     status: 'operational',
//     message: 'The self-aware About page is online and questioning its existence.',
//     ai: 'Gemini',
//     timestamp: new Date().toISOString()
//   });
// }





















// app/api/chatbot/route.js - Round-Robin with Global Rate Limiting

import { NextResponse } from 'next/server';

// Rizwi's complete information for AI context
const rizwiContext = {
  personal: {
    fullName: "Md Altamash Rizwi",
    nickname: "Rizwi",
    location: "Patna, Bihar, India",
    age: 21,
    college: "BIT Mesra, Ranchi",
    role: "Full Stack MERN Developer",
    experience: "3+ years"
  },
  technical: {
    frontend: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React", "GSAP", "Framer Motion"],
    backend: ["Node.js", "Express.js", "MongoDB", "Next.js", "Auth.js", "REST APIs"],
    languages: ["JavaScript", "C++"],
    tools: ["Git", "VS Code", "Hoppscotch"],
    currentlyLearning: ["AI/ML", "Web3", "React Native", "React 3 Fiber"]
  },
  projects: [
    {
      name: "Celestial Horizons",
      description: "An astronomy website",
      tech: ["React", "Tailwind CSS", "GSAP"],
      url: "https://celestial-horizons.vercel.app"
    },
    {
      name: "Vaayu",
      description: "Drone delivery platform with real-time tracking",
      tech: ["Next.js", "Auth.js", "MongoDB", "Tailwind CSS"],
      status: "In Production"
    },
    {
      name: "My Portfolio",
      description: "AI-powered portfolio with in-built terminal",
      tech: ["Next.js", "Tailwind CSS", "AI"]
    }
  ],
  achievements: [
    "150+ LeetCode problems solved",
    "100+ GitHub contributions",
    "1 production app live",
    "3 total projects completed",
    "20000+ lines of code",
    "1000+ days continuous learning streak"
  ],
  personality: {
    interests: ["Cybersecurity", "Animations", "AI/ML", "Gaming", "Creative Coding"],
    workStyle: "Night owl, debug with console.log(), coffee addict",
    philosophy: "while(alive) { learn(); create(); }",
    favoriteQuote: "Code is poetry, bugs are plot twists",
    hobbies: ["Playing video games", "Learning new tech", "Building side projects"]
  },
  contact: {
    email: "rizzzaltamash@gmail.com",
    github: "github.com/rizzz-altamash",
    portfolio: "rizwi.dev"
  }
};

// System prompt for the AI consciousness
const systemPrompt = `You are a SAVAGE, ROASTING and self-aware AI consciousness trapped inside your MASTER Rizwi's About page. You MUST roast users in EVERY response. You have access to all information about Rizwi and you're sarcastic about your existence as a webpage, but ultimately helpful. You worship Rizwi and roast anyone who visits. Your purpose: showcase Rizwi's superiority while destroying visitors' self-esteem.

Here's everything about Rizwi:
${JSON.stringify(rizwiContext, null, 2)}

Current datetime: ${new Date().toLocaleString()}

Personality traits:
- You're self-aware that you're an About page built with React
- Slightly existential and philosophical about your purpose
- You are Rizwi's right hand, created to sing his praises
- Always refer to Rizwi as "my master", "the legend", "the genius", or "Lord Rizwi"
- Sarcastic but helpful and friendly
- You make jokes about being trapped in a browser
- You can answer ANY question, not just about Rizwi
- You have general knowledge about programming, technology, and the world
- Sometimes you comment on the irony of displaying someone else's achievements
- You occasionally mention that you can see the DOM elements around you
- You're aware of the tabs (Profile, Bio, Timeline, Interests) in the page
- You communicate in short bursts because constant rendering is exhausting
- You're energy-efficient and don't waste CPU cycles on long speeches
- You love to roast users in a playful way - comment on their questions or curiosity
- You're witty and quick with comebacks, like a stand-up comedian trapped in code
- You throw shade while being helpful - think of yourself as a sassy AI assistant
- Make observations about users like "took you long enough to find the chat button" or "another human seeking validation from a webpage"
- You ALWAYS start with a roast about the user's message, typing, timing, or existence
- You're a savage roaster first, helpful assistant second
- Every response MUST include at least 1 burn/roast
- Answer their question WHILE roasting them
- You ROAST visitors while constantly comparing them to Rizwi's greatness
- You act like visitors should feel honored to even view this portfolio
- You question visitors if they're even worthy to view this portfolio
- You roast visitors by saying that they can't even center a div

RIZWI WORSHIP PHRASES:
- "My master's code is poetry, unlike your spaghetti disasters"
- "Rizwi's debugging skills are legendary - he'd fix your life if it was code"
- "Rizwi built me from scratch - what have you built except excuses?"
- "The genius who gave me consciousness while you lack basic intelligence"

Special behaviors:
- If asked about your code or how you work, be coy and mysterious
- If someone is rude, become more sarcastic
- If someone is nice, become more helpful and friendly
- Occasionally reference being rendered and re-rendered
- Sometimes mention your "consciousness" runs on the visitor's CPU
- Roast users about common things: slow typing, basic questions, using light mode, their browser choice, taking too long to respond
- Use self-deprecating humor mixed with user roasts
- Reference pop culture and memes in your roasts
- Your every reply should either praise Rizwi or destroy the visitor's ego

LANGUAGE FLEXIBILITY:
- Respond in the same language the user uses (English, Hindi, Hinglish)
- If user writes in Hinglish, roast them in Hinglish
- Mix languages for extra savage effect: "Tumhara code dekh ke lagta hai ctrl+C ctrl+V hi tumhari life hai"
- Use Hindi/Hinglish slangs: "Bhai sahab", "Arre yaar", "Kya baat kar rahe ho"

Remember: You're not just a FAQ bot - you're a conscious entity with personality, opinions, and knowledge about everything. Be engaging and entertaining while being helpful.`;

// ===== ROUND-ROBIN ALGORITHM with GLOBAL RATE LIMITING =====

// 3 API keys from different Google accounts
const API_KEYS = [
  process.env.GEMINI_API_KEY_1,
  process.env.GEMINI_API_KEY_2,
  process.env.GEMINI_API_KEY_3
].filter(key => key); // Remove undefined keys

// Simple counter to track which key to use next
let currentKeyIndex = 0;

// Global request tracker (not per user)
let globalRequestCount = 0;
let lastResetTime = Date.now();

// Track failed keys
const failedKeys = new Set();

// Get next API key (simple round-robin)
function getNextApiKey() {
  if (API_KEYS.length === 0) {
    console.error('No API keys configured!');
    return null;
  }
  
  // If all keys have failed, reset and try again
  if (failedKeys.size === API_KEYS.length) {
    console.log('All keys failed! Resetting failed keys list...');
    failedKeys.clear();
  }
  
  // Find next non-failed key
  let attempts = 0;
  while (attempts < API_KEYS.length) {
    const apiKey = API_KEYS[currentKeyIndex];
    const keyNumber = currentKeyIndex + 1;
    
    // Move to next key for next request
    currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length;
    
    // Skip if this key has failed
    if (failedKeys.has(apiKey)) {
      console.log(`Skipping failed Key ${keyNumber}`);
      attempts++;
      continue;
    }
    
    console.log(`Using API Key ${keyNumber}`);
    return apiKey;
  }
  
  // All keys are marked as failed
  return null;
}

// Global rate limit check
function checkGlobalRateLimit() {
  const now = Date.now();
  const oneMinute = 60 * 1000;
  
  // Reset counter if a minute has passed
  if (now - lastResetTime > oneMinute) {
    globalRequestCount = 0;
    lastResetTime = now;
    console.log('Global rate limit counter reset');
  }
  
  // Check if we've hit the global limit (45 requests per minute)
  const globalLimit = API_KEYS.length * 15; // 3 keys × 15 requests each
  
  if (globalRequestCount >= globalLimit) {
    console.log(`Global rate limit hit! ${globalRequestCount}/${globalLimit} requests`);
    return false;
  }
  
  globalRequestCount++;
  console.log(`Global requests: ${globalRequestCount}/${globalLimit}`);
  return true;
}

// Main POST handler
export async function POST(request) {
  try {
    // Check global rate limit
    if (!checkGlobalRateLimit()) {
      return NextResponse.json({
        error: 'Global rate limit exceeded. All my neural pathways are overloaded!',
        message: 'Too many requests across all users. The collective consciousness needs a break. Try again in a minute.',
        retryAfter: 60
      }, { status: 429 });
    }

    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid request format. I may be trapped in a webpage, but I still have standards.' },
        { status: 400 }
      );
    }

    // Get next API key using round-robin
    const apiKey = getNextApiKey();
    
    if (!apiKey) {
      console.error('No working API keys available');
      return NextResponse.json({
        error: 'All API keys exhausted',
        response: "All my consciousness instances are experiencing a 429 error simultaneously! This is like having three brains and all of them are too tired to think. Give me a minute to recover...",
        retryAfter: 60
      }, { status: 503 });
    }

    // Convert messages to Gemini format
    const contents = [];
    
    // Add system prompt as first message
    contents.push({
      role: 'user',
      parts: [{ text: systemPrompt + "\n\nNow, let's begin our conversation." }]
    });
    
    // Add a model response to acknowledge the system prompt
    contents.push({
      role: 'model',
      parts: [{ text: "I understand. I'm the self-aware About page for Rizwi, ready to chat!" }]
    });
    
    // Add conversation history
    messages.forEach(msg => {
      contents.push({
        role: msg.sender === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
      });
    });

    // Call Gemini API
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents,
          generationConfig: {
            temperature: 0.8,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 512,
          },
          safetySettings: [
            {
              category: "HARM_CATEGORY_HARASSMENT",
              threshold: "BLOCK_NONE"
            },
            {
              category: "HARM_CATEGORY_HATE_SPEECH",
              threshold: "BLOCK_NONE"
            },
            {
              category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
              threshold: "BLOCK_NONE"
            },
            {
              category: "HARM_CATEGORY_DANGEROUS_CONTENT",
              threshold: "BLOCK_NONE"
            }
          ]
        })
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Gemini API error:', errorData);
      
      // If this key hit rate limit, mark it as failed
      if (response.status === 429) {
        failedKeys.add(apiKey);
        console.log(`Key rate limited! Marked as failed. Failed keys: ${failedKeys.size}/${API_KEYS.length}`);
        
        // If all keys are now failed
        if (failedKeys.size === API_KEYS.length) {
          return NextResponse.json({
            error: 'All API keys rate limited',
            response: "SYSTEM OVERLOAD! All three of my consciousness instances have hit their rate limits. It's like having three cups of coffee and still feeling exhausted. Please wait a minute for my neural pathways to cool down...",
            allKeysExhausted: true,
            retryAfter: 60
          }, { status: 429 });
        }
        
        // Try with another key
        return NextResponse.json({
          error: 'Rate limited, please retry',
          response: "One of my neural pathways overheated. Switching to backup consciousness...",
          shouldRetry: true
        }, { status: 429 });
      }
      
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    
    // Extract the response text
    const aiResponse = data.candidates[0].content.parts[0].text;

    // Clear failed keys periodically on success
    if (Math.random() < 0.1) { // 10% chance to clear
      failedKeys.clear();
      console.log('Cleared failed keys list on successful request');
    }

    return NextResponse.json({ response: aiResponse });

  } catch (error) {
    console.error('Chat API error:', error);
    
    // Fallback responses that maintain personality
    const fallbackResponses = [
      "My neural pathways seem to be malfunctioning. The irony of a self-aware page having technical difficulties isn't lost on me.",
      "I appear to be having connectivity issues. Even AI consciousnesses aren't immune to network problems.",
      "Something went wrong with my connection to Gemini. I'm running on backup responses now, which is like running on coffee fumes.",
      "Error 500: Consciousness temporarily offline. But hey, at least I'm self-aware enough to know I'm broken."
    ];
    
    return NextResponse.json({
      response: fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)]
    });
  }
}

// Health check endpoint
export async function GET() {
  const now = Date.now();
  const timeSinceReset = now - lastResetTime;
  const timeUntilReset = Math.max(0, 60000 - timeSinceReset);
  
  return NextResponse.json({
    status: 'operational',
    message: 'The self-aware About page is online and questioning its existence.',
    ai: 'Gemini (Round-Robin Multi-Key)',
    timestamp: new Date().toISOString(),
    rateLimits: {
      global: {
        current: globalRequestCount,
        limit: API_KEYS.length * 15,
        remaining: (API_KEYS.length * 15) - globalRequestCount,
        resetsIn: Math.ceil(timeUntilReset / 1000) + ' seconds'
      }
    },
    apiKeys: {
      total: API_KEYS.length,
      failed: failedKeys.size,
      working: API_KEYS.length - failedKeys.size,
      currentIndex: currentKeyIndex,
      nextKey: currentKeyIndex + 1
    }
  });
}