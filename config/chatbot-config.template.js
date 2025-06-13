// config/chatbot-config.template.js
// 📝 Instructions: Copy this file to chatbot-config.js and update with your data
// ⚠️ Never commit chatbot-config.js to GitHub!

export const yourContext = {
  personal: {
    fullName: "Your Full Name", // e.g., "John Doe"
    nickname: "Your Nick", // e.g., "John"
    location: "City, State, Country", // e.g., "Mumbai, Maharashtra, India"
    age: 0, // Your age in years
    college: "Your College Name", // e.g., "IIT Bombay"
    role: "Your Role", // e.g., "Full Stack Developer"
    experience: "X years" // e.g., "2+ years"
  },
  technical: {
    frontend: ["HTML", "CSS", "JavaScript"], // Add your frontend skills
    backend: ["Node.js"], // Add your backend skills
    languages: ["JavaScript"], // Programming languages you know
    tools: ["Git"], // Tools you use
    currentlyLearning: ["React"] // What you're learning
  },
  projects: [
    {
      name: "Project Name",
      description: "Brief description of the project",
      tech: ["Tech1", "Tech2"], // Technologies used
      url: "https://project-url.com", // Optional: deployment URL
      status: "Live" // Optional: project status
    }
    // Add more projects as needed
  ],
  achievements: [
    "Achievement 1", // e.g., "100+ LeetCode problems solved"
    "Achievement 2" // e.g., "Open source contributor"
    // Add more achievements
  ],
  personality: {
    interests: ["Interest 1", "Interest 2"], // Your interests
    workStyle: "Describe your work style", // e.g., "Early bird, TDD enthusiast"
    philosophy: "Your coding philosophy", // e.g., "Code should be self-documenting"
    favoriteQuote: "Your favorite quote",
    hobbies: ["Hobby 1", "Hobby 2"] // Your hobbies
  },
  contact: {
    email: "your-email@example.com",
    github: "github.com/your-username",
    portfolio: "your-portfolio.com"
  }
};

// System prompt - Define your AI assistant's personality
export const systemPrompt = `You are an AI assistant for [Your Name]'s portfolio. 
Describe the personality and behavior of your chatbot here.

Current datetime: ${new Date().toLocaleString()}

Add specific instructions for how the bot should behave...`;

// Roasting responses (if you want a roasting chatbot like the original)
export const roastingResponses = {
  mild: {
    english: [
      "Your mild roast response 1 with {count}/10 warning",
      "Your mild roast response 2 with {count}/10 warning"
    ],
    hindi: [
      "Your Hindi mild roast 1 with {count}/10 warning",
      "Your Hindi mild roast 2 with {count}/10 warning"
    ]
  },
  medium: {
    english: [
      "Your medium roast response 1 with {count}/10 warning",
      "Your medium roast response 2 with {count}/10 warning"
    ],
    hindi: [
      "Your Hindi medium roast 1 with {count}/10 warning",
      "Your Hindi medium roast 2 with {count}/10 warning"
    ]
  },
  severe: {
    english: [
      "Your severe roast response 1 with {count}/10 warning",
      "Your severe roast response 2 with {count}/10 warning"
    ],
    hindi: [
      "Your Hindi severe roast 1 with {count}/10 warning",
      "Your Hindi severe roast 2 with {count}/10 warning"
    ]
  },
  timeout: {
    english: [
      "Your timeout message after 10 warnings"
    ],
    hindi: [
      "Your Hindi timeout message after 10 warnings"
    ]
  }
};

// If you want master abuse protection
export const masterAbuseResponses = {
  english: [
    "Response when someone insults you with {count}/10 warning"
  ],
  hindi: [
    "Hindi response when someone insults you with {count}/10 warning"
  ],
  instant_ban: [
    "Ban message after 10 warnings"
  ]
};

// Abuse detection patterns (modify as needed)
export const abusePatterns = {
  mildAbuseEng: /\b(stupid|dumb|idiot)\b/i,
  mildAbuseHindi: /\b(bewakoof|gadha)\b/i,
  // Add more patterns as needed
};