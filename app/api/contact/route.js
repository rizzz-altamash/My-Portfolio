// app/api/contact/route.js

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiting store
const rateLimitStore = new Map();

// Helper: Clean old entries from rate limit store
function cleanRateLimitStore() {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  
  for (const [ip, timestamps] of rateLimitStore.entries()) {
    const validTimestamps = timestamps.filter(time => now - time < windowMs);
    if (validTimestamps.length === 0) {
      rateLimitStore.delete(ip);
    } else {
      rateLimitStore.set(ip, validTimestamps);
    }
  }
}

// Helper: Check rate limit
function checkRateLimit(ip) {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 3; // 3 requests per 15 minutes
  
  // Clean old entries periodically
  if (Math.random() < 0.1) cleanRateLimitStore();
  
  const timestamps = rateLimitStore.get(ip) || [];
  const recentTimestamps = timestamps.filter(time => now - time < windowMs);
  
  if (recentTimestamps.length >= maxRequests) {
    return false;
  }
  
  recentTimestamps.push(now);
  rateLimitStore.set(ip, recentTimestamps);
  return true;
}

// Helper: Validate and sanitize input
function validateAndSanitize(data) {
  const { name, email, message } = data;
  
  // Basic validation
  if (!name || !email || !message) {
    return { error: 'All fields are required' };
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { error: 'Invalid email address' };
  }
  
  // Length validation
  if (name.length > 100 || email.length > 100 || message.length > 1000) {
    return { error: 'Input too long' };
  }
  
  // Sanitize - remove any potential XSS
  const sanitize = (str) => {
    return str
      .trim()
      .replace(/[<>]/g, '') // Remove < and >
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+\s*=/gi, ''); // Remove event handlers
  };
  
  return {
    data: {
      name: sanitize(name),
      email: email.trim().toLowerCase(),
      message: sanitize(message)
    }
  };
}

export async function POST(request) {
  try {
    // Get IP for rate limiting
    const forwardedFor = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const ip = forwardedFor?.split(',')[0] || realIp || 'unknown';
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { 
          error: 'Too many requests. Please try again in 15 minutes.',
          retryAfter: 900 // 15 minutes in seconds
        },
        { 
          status: 429,
          headers: {
            'Retry-After': '900',
            'X-RateLimit-Limit': '3',
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': new Date(Date.now() + 900000).toISOString()
          }
        }
      );
    }
    
    // Parse request body
    const body = await request.json();
    
    // Validate and sanitize
    const validation = validateAndSanitize(body);
    if (validation.error) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }
    
    const { name, email, message } = validation.data;
    
    // Get current timestamp
    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata', // Adjust to your timezone
      dateStyle: 'full',
      timeStyle: 'long'
    });
    
    // Send email to yourself
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Or your verified domain
      to: process.env.RECIPIENT_EMAIL, // Your Gmail address
      replyTo: email, // So you can reply directly to the sender
      subject: `🚀 New Portfolio Contact from ${name}`,
      html: `
        <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <style>
                body { 
                  margin: 0; 
                  padding: 20px; 
                  background-color: #0a0a0a;
                  font-family: 'Courier New', Consolas, monospace;
                }
                .container { 
                  max-width: 600px; 
                  margin: 0 auto; 
                  background-color: #000; 
                  border: 2px solid #00ff41;
                  border-radius: 16px;
                  overflow: hidden;
                  box-shadow: 
                    0 0 40px rgba(0, 255, 65, 0.3),
                    0 20px 60px rgba(0, 0, 0, 0.5),
                    inset 0 0 120px rgba(0, 255, 65, 0.05);
                }
                .header {
                  background: linear-gradient(135deg, #001a00 0%, #002200 50%, #003300 100%);
                  color: #00ff41;
                  padding: 40px 30px;
                  text-align: center;
                  border-bottom: 2px solid #00ff41;
                  position: relative;
                  overflow: hidden;
                }
                .header::before {
                  content: '';
                  position: absolute;
                  top: -50%;
                  left: -50%;
                  width: 200%;
                  height: 200%;
                  background: radial-gradient(circle, rgba(0, 255, 65, 0.1) 0%, transparent 70%);
                  animation: rotate 20s linear infinite;
                }
                @keyframes rotate {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
                .header h1 {
                  margin: 0; 
                  font-size: 26px; 
                  letter-spacing: 3px;
                  text-shadow: 
                    0 0 20px rgba(0, 255, 65, 0.8),
                    0 0 40px rgba(0, 255, 65, 0.4);
                  position: relative;
                  z-index: 1;
                }
                .content {
                  padding: 40px 30px;
                  background: linear-gradient(180deg, #0a0a0a 0%, #050505 100%);
                }
                .info-row {
                  margin: 20px 0;
                  padding: 16px 20px;
                  background: linear-gradient(135deg, rgba(0, 26, 0, 0.8) 0%, rgba(0, 26, 0, 0.4) 100%);
                  border-left: 3px solid #00ff41;
                  border-radius: 8px;
                  transition: all 0.3s ease;
                  position: relative;
                  overflow: hidden;
                }
                .info-row::before {
                  content: '';
                  position: absolute;
                  top: 0;
                  left: -100%;
                  width: 100%;
                  height: 100%;
                  background: linear-gradient(90deg, transparent, rgba(0, 255, 65, 0.1), transparent);
                  transition: left 0.5s ease;
                }
                .info-row:hover::before {
                  left: 100%;
                }
                .label {
                  color: #00ff41;
                  font-weight: bold;
                  text-transform: uppercase;
                  font-size: 11px;
                  letter-spacing: 2px;
                  opacity: 0.9;
                }
                .value {
                  color: #ffffff;
                  margin-top: 8px;
                  word-break: break-all;
                  font-size: 14px;
                  text-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
                }
                .message-box {
                  background: linear-gradient(135deg, #001a00 0%, #000d00 100%);
                  border: 1px solid rgba(0, 255, 65, 0.6);
                  border-radius: 12px;
                  padding: 25px;
                  margin: 30px 0;
                  color: #ffffff;
                  white-space: pre-wrap;
                  line-height: 1.8;
                  font-size: 14px;
                  box-shadow: 
                    inset 0 2px 20px rgba(0, 255, 65, 0.1),
                    0 5px 20px rgba(0, 0, 0, 0.5);
                }
                .message-label {
                  color: #00ff41;
                  font-weight: bold;
                  text-transform: uppercase;
                  font-size: 12px;
                  letter-spacing: 2px;
                  margin-bottom: 20px;
                  display: flex;
                  align-items: center;
                  gap: 10px;
                }
                .message-label::before {
                  content: '';
                  width: 30px;
                  height: 1px;
                  background: linear-gradient(90deg, transparent, #00ff41);
                }
                .message-label::after {
                  content: '';
                  flex: 1;
                  height: 1px;
                  background: linear-gradient(90deg, #00ff41, transparent);
                }
                .action-button {
                  display: inline-block;
                  margin-top: 30px;
                  padding: 16px 40px;
                  background: linear-gradient(135deg, #00ff41 0%, #00cc33 100%);
                  color: #000;
                  text-decoration: none;
                  font-weight: bold;
                  text-transform: uppercase;
                  letter-spacing: 2px;
                  border-radius: 8px;
                  font-size: 13px;
                  transition: all 0.3s ease;
                  box-shadow: 
                    0 4px 20px rgba(0, 255, 65, 0.4),
                    0 0 40px rgba(0, 255, 65, 0.2),
                    inset 0 0 20px rgba(255, 255, 255, 0.2);
                  position: relative;
                  overflow: hidden;
                }
                .action-button::before {
                  content: '';
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  width: 0;
                  height: 0;
                  background: rgba(255, 255, 255, 0.3);
                  border-radius: 50%;
                  transform: translate(-50%, -50%);
                  transition: width 0.5s, height 0.5s;
                }
                .action-button:hover {
                  background: linear-gradient(135deg, #00ff88 0%, #00ff41 100%);
                  transform: translateY(-2px);
                  box-shadow: 
                    0 6px 30px rgba(0, 255, 65, 0.5),
                    0 0 60px rgba(0, 255, 65, 0.3),
                    inset 0 0 30px rgba(255, 255, 255, 0.3);
                }
                .action-button:hover::before {
                  width: 300px;
                  height: 300px;
                }
                .footer {
                  background: linear-gradient(180deg, #001a00 0%, #000000 100%);
                  padding: 30px 20px;
                  text-align: center;
                  color: #00ff41;
                  font-size: 11px;
                  border-top: 1px solid rgba(0, 255, 65, 0.3);
                  letter-spacing: 1px;
                }
                .footer p {
                  margin: 8px 0;
                  opacity: 0.8;
                }
                .footer .dim {
                  color: #666;
                  font-size: 10px;
                  opacity: 0.6;
                }
                .pulse {
                  display: inline-block;
                  width: 8px;
                  height: 8px;
                  background-color: #00ff41;
                  border-radius: 50%;
                  margin-right: 12px;
                  box-shadow: 0 0 15px #00ff41;
                  animation: pulse 2s infinite;
                }
                @keyframes pulse {
                  0% { 
                    opacity: 1;
                    box-shadow: 0 0 15px #00ff41;
                  }
                  50% { 
                    opacity: 0.3;
                    box-shadow: 0 0 5px #00ff41;
                  }
                  100% { 
                    opacity: 1;
                    box-shadow: 0 0 15px #00ff41;
                  }
                }
                .status-badge {
                  display: inline-block;
                  background: rgba(0, 255, 65, 0.1);
                  border: 1px solid rgba(0, 255, 65, 0.3);
                  padding: 4px 12px;
                  border-radius: 20px;
                  font-size: 10px;
                  letter-spacing: 1px;
                  margin-top: 10px;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>
                    <span class="pulse"></span>NEW TRANSMISSION RECEIVED
                  </h1>
                  <div class="status-badge">SECURE CONNECTION</div>
                </div>
                
                <div class="content">
                  <div class="info-row">
                    <div class="label">SENDER IDENTIFICATION</div>
                    <div class="value">${name}</div>
                  </div>
                  
                  <div class="info-row">
                    <div class="label">RETURN EMAIL</div>
                    <div class="value">${email}</div>
                  </div>
                  
                  <div class="info-row">
                    <div class="label">TIMESTAMP</div>
                    <div class="value">${timestamp}</div>
                  </div>
                  
                  <div class="info-row">
                    <div class="label">ORIGIN IP</div>
                    <div class="value">${ip}</div>
                  </div>
                  
                  <div style="margin: 40px 0;">
                    <div class="message-label">ENCRYPTED MESSAGE</div>
                    <div class="message-box">${message}</div>
                  </div>
                  
                  <div style="text-align: center;">
                    <a href="mailto:${email}" class="action-button">
                      REPLY TO TRANSMISSION
                    </a>
                  </div>
                </div>
                
                <div class="footer">
                  <p>◈ TRANSMISSION END ◈</p>
                  <p class="dim">This message was sent from your Portfolio contact form</p>
                  <p class="dim">NEXUS SECURE MAIL SYSTEM v2.0.7</p>
                </div>
              </div>
            </body>
          </html>
      `,
      text: `
New Contact Form Message

From: ${name}
Email: ${email}
Time: ${timestamp}
IP: ${ip}

Message:
${message}
      `
    });
    
    if (emailError) {
      console.error('Failed to send email:', emailError);
      throw new Error('Failed to send email');
    }
    
    // Send confirmation email to the user (optional but recommended)
    await resend.emails.send({
      from: 'Altamash Rizwi <onboarding@resend.dev>', // Or your verified domain
      to: email,
      subject: 'Message Received - Altamash Rizwi',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { margin: 0; padding: 0; background-color: #0a0a0a; }
              .container { 
                max-width: 600px; 
                margin: 0 auto; 
                background-color: #000; 
                border: 2px solid #00ff41;
                font-family: 'Courier New', monospace;
                color: #00ff88;
              }
              .header {
                background: linear-gradient(135deg, #001a00 0%, #003300 100%);
                padding: 30px;
                text-align: center;
                border-bottom: 1px solid #00ff41;
              }
              .content {
                padding: 30px;
                line-height: 1.8;
              }
              .footer {
                background-color: #001a00;
                padding: 20px;
                text-align: center;
                font-size: 12px;
                border-top: 1px solid #00ff41;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0; font-size: 24px; color: #00ff41;">
                  TRANSMISSION SUCCESSFUL
                </h1>
              </div>
              
              <div class="content">
                <p>Hello ${name},</p>
                <p>Your message has been successfully transmitted through the quantum communication channel.</p>
                <p>I appreciate you reaching out and will respond to your message as soon as possible.</p>
                <p style="margin-top: 30px;">Best regards,<br><strong>Altamash Rizwi</strong></p>
              </div>
              
              <div class="footer">
                <p style="margin: 0; color: #666;">This is an automated response</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
Hello ${name},

Your message has been successfully received. I'll get back to you as soon as possible.

Best regards,
Altamash Rizwi
      `
    });
    
    // Log for monitoring (optional)
    console.log(`Contact form submission from ${email} at ${timestamp}`);
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Message transmitted successfully',
        id: emailData?.id 
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to transmit message. Please try again later.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

// Handle other methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}