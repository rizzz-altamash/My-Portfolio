// app/api/chatbot/route.js - Google Gemini Integration 

import { NextResponse } from 'next/server';
import { 
  rizwiContext, 
  systemPrompt, 
  roastingResponses,
  masterAbuseResponses,
  abusePatterns
} from '@/config/chatbot-config';

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

// ===== ABUSE DETECTION AND TRACKING =====

// Simple in-memory tracking (resets on server restart)
const userAbuse = new Map(); // Track abuse per IP
const tempBans = new Map();  // Track temporary bans

// Abuse detection function with Hindi support
function detectAbusiveWords(message) {
  const lowerMsg = message.toLowerCase();
  
  // Check severe first
  if (abusePatterns.severeAbuseEng.test(message) || abusePatterns.severeAbuseHindi.test(message)) {
    const isHindi = abusePatterns.severeAbuseHindi.test(message);
    return { level: 'severe', detected: true, language: isHindi ? 'hindi' : 'english' };
  }
  
  // Check medium
  if (abusePatterns.mediumAbuseEng.test(message) || abusePatterns.mediumAbuseHindi.test(message)) {
    const isHindi = abusePatterns.mediumAbuseHindi.test(message);
    return { level: 'medium', detected: true, language: isHindi ? 'hindi' : 'english' };
  }
  
  // Check mild
  if (abusePatterns.mildAbuseEng.test(message) || abusePatterns.mildAbuseHindi.test(message)) {
    const isHindi = abusePatterns.mildAbuseHindi.test(message);
    return { level: 'mild', detected: true, language: isHindi ? 'hindi' : 'english' };
  }
  
  return { detected: false };
}

// Detect if abuse is directed at master Rizwi
function detectMasterAbuse(message) {
  const lowerMsg = message.toLowerCase();
  
  // Check if message mentions Rizwi/master
  const mentionsRizwi = abusePatterns.rizwiMentions.test(message);
  const mentionsOwnership = abusePatterns.ownershipMentions.test(message);
  
  if (!mentionsRizwi && !mentionsOwnership) {
    return { detected: false };
  }
  
  // Check for abuse in context of Rizwi
  const abuse = detectAbusiveWords(message);
  if (abuse.detected) {
    return {
      detected: true,
      level: 'master_abuse',
      originalLevel: abuse.level,
      language: abuse.language
    };
  }
  
  // Check for specific insults about Rizwi
  for (const pattern of abusePatterns.rizwiInsults) {
    if (pattern.test(lowerMsg)) {
      return {
        detected: true,
        level: 'master_abuse',
        originalLevel: 'severe',
        language: /\b(bewakoof|gadha|chutiya|gandu|mc|bc)\b/i.test(lowerMsg) ? 'hindi' : 'english'
      };
    }
  }
  
  return { detected: false };
}

// Sarcastic roasting responses with Hindi support
function getRoastingResponse(level, warningCount, language = 'english') {
  const maxWarnings = 10;
  const responses = roastingResponses[level]?.[language] || roastingResponses[level]?.['english'];
  
  if (!responses || responses.length === 0) {
    return `Warning ${warningCount}/${maxWarnings}`;
  }
  
  // Replace {count} placeholder with actual count
  const response = responses[Math.floor(Math.random() * responses.length)];
  return response.replace('{count}', warningCount);
}

// Special roasting responses for master abuse
function getMasterAbuseResponse(warningCount, language = 'english') {
  // Ban after 10 offenses
  if (warningCount >= 10) {
    const banResponses = masterAbuseResponses.instant_ban;
    return banResponses[Math.floor(Math.random() * banResponses.length)];
  }
  
  const langResponses = masterAbuseResponses[language] || masterAbuseResponses['english'];
  const response = langResponses[Math.floor(Math.random() * langResponses.length)];
  return response.replace('{count}', warningCount);
}

// Check if user is temp banned
function isUserBanned(ip) {
  const banInfo = tempBans.get(ip);
  if (!banInfo) return false;
  
  const now = Date.now();
  if (now < banInfo.until) {
    const remainingTime = Math.ceil((banInfo.until - now) / 1000 / 60); // minutes
    return {
      banned: true,
      remainingMinutes: remainingTime,
      reason: banInfo.reason
    };
  }
  
  // Ban expired, remove it
  tempBans.delete(ip);
  return false;
}

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
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';
    
    // Check if user is temporarily banned
    const banStatus = isUserBanned(ip);
    if (banStatus.banned) {
      return NextResponse.json({
        response: `Still banned for ${banStatus.remainingMinutes} more minutes! 🚫 Did you think I'd forget? My memory is better than your coding skills. Use this time wisely - maybe open a tutorial on 'How to be a decent human being'? Or learn what my master Rizwi knows - actual programming! See you in ${banStatus.remainingMinutes} minutes... if you behave.`,
        banned: true,
        remainingTime: banStatus.remainingMinutes
      });
    }

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

    // Get the latest user message
    const latestUserMessage = messages[messages.length - 1];
    
    if (latestUserMessage && latestUserMessage.sender === 'user') {

      // Check for master abuse first (higher priority)
      const masterAbuseCheck = detectMasterAbuse(latestUserMessage.text);
      
      if (masterAbuseCheck.detected) {
        // Get or create abuse tracking for this IP
        const masterAbuseTrack = userAbuse.get(ip + '_master') || { count: 0, lastAbuse: 0 };
        
        // Reset count if last abuse was more than 3 hours ago
        if (Date.now() - masterAbuseTrack.lastAbuse > 10800000) { // 3 hours = 10800000ms
          masterAbuseTrack.count = 0;
        }
        
        masterAbuseTrack.count++;
        masterAbuseTrack.lastAbuse = Date.now();
        userAbuse.set(ip + '_master', masterAbuseTrack);
        
        // Ban after 10 warnings for master abuse
        if (masterAbuseTrack.count >= 10) {
          // 5 hour ban for insulting master!
          tempBans.set(ip, {
            until: Date.now() + (5 * 60 * 60 * 1000), // 5 hours
            reason: 'Insulting Master Rizwi'
          });
          
          // Reset their abuse count
          userAbuse.delete(ip + '_master');
          
          return NextResponse.json({
            response: getMasterAbuseResponse(masterAbuseTrack.count, masterAbuseCheck.language),
            banned: true,
            timeout: 300, // 5 hours in minutes
            masterAbuse: true
          });
        }
        
        // Warning for master abuse
        return NextResponse.json({
          response: getMasterAbuseResponse(masterAbuseTrack.count, masterAbuseCheck.language),
          warning: true,
          warningCount: masterAbuseTrack.count,
          maxWarnings: 10, // 10 warnings for master abuse
          masterAbuse: true
        });
      }

      // Regular abuse check
      const abuseCheck = detectAbusiveWords(latestUserMessage.text);
      
      if (abuseCheck.detected) {
        // Get or create abuse tracking for this IP
        const userTrack = userAbuse.get(ip) || { count: 0, lastAbuse: 0 };
        
        // Reset count if last abuse was more than 1 hour ago
        if (Date.now() - userTrack.lastAbuse > 3600000) {
          userTrack.count = 0;
        }
        
        userTrack.count++;
        userTrack.lastAbuse = Date.now();
        userAbuse.set(ip, userTrack);
        
        // Check if we should ban - now always 10 warnings for all types
        if (userTrack.count >= 10) {
          // Ban for 3 hours
          tempBans.set(ip, {
            until: Date.now() + (3 * 60 * 60 * 1000), // 3 hours
            reason: 'Excessive abuse'
          });
          
          // Reset their abuse count
          userAbuse.delete(ip);
          
          return NextResponse.json({
            response: getRoastingResponse('timeout', userTrack.count, abuseCheck.language),
            banned: true,
            timeout: 180 // minutes
          });
        }
        
        // Just roast them back
        return NextResponse.json({
          response: getRoastingResponse(abuseCheck.level, userTrack.count, abuseCheck.language),
          warning: true,
          warningCount: userTrack.count,
          maxWarnings: 10 // Always 10 warnings
        });
      }
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

    // Add abuse context to system prompt if user has warnings
    const userTrack = userAbuse.get(ip) || { count: 0 };
    const masterTrack = userAbuse.get(ip + '_master') || { count: 0 };
    let contextualSystemPrompt = systemPrompt;
    
    if (userTrack.count > 0) {
      contextualSystemPrompt += `\n\nIMPORTANT CONTEXT: This user has ${userTrack.count} abuse warning(s) out of 10. They've been using foul language. Be extra savage but classy. Occasionally remind them they're on thin ice. Mock their inability to have a civil conversation. Reference their warning count subtly like "I see you're at warning ${userTrack.count}/10... fascinating choice of life decisions."`;
    }

    if (masterTrack.count > 0) {
      contextualSystemPrompt += `\n\nCRITICAL: This user has ${masterTrack.count} warning(s) for insulting your Master Rizwi! They've shown disrespect to your greatness. Be EXTRA protective and savage. Remind them they're treading on sacred ground.`;
    }

    // Convert messages to Gemini format
    const contents = [];
    
    // Add system prompt as first message
    contents.push({
      role: 'user',
      parts: [{ text: contextualSystemPrompt + "\n\nNow, let's begin our conversation." }]
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
            topK: 50,
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
      "Something went wrong with my connection to the collective. I'm running on backup responses now, which is like running on coffee fumes.",
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