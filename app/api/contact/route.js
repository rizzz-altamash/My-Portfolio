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
            <style>
              body { margin: 0; padding: 0; background-color: #0a0a0a; }
              .container { 
                max-width: 600px; 
                margin: 0 auto; 
                background-color: #000; 
                border: 2px solid #00ff41;
                font-family: 'Courier New', monospace;
              }
              .header {
                background: linear-gradient(135deg, #001a00 0%, #003300 100%);
                color: #00ff41;
                padding: 30px;
                text-align: center;
                border-bottom: 2px solid #00ff41;
              }
              .content {
                padding: 30px;
                color: #00ff88;
              }
              .info-row {
                margin: 15px 0;
                padding: 10px;
                background-color: #001a00;
                border-left: 3px solid #00ff41;
              }
              .label {
                color: #00ff41;
                font-weight: bold;
                text-transform: uppercase;
                font-size: 12px;
              }
              .value {
                color: #ffffff;
                margin-top: 5px;
                word-break: break-all;
              }
              .message-box {
                background-color: #001a00;
                border: 1px solid #00ff41;
                padding: 20px;
                margin: 20px 0;
                color: #ffffff;
                white-space: pre-wrap;
                line-height: 1.6;
              }
              .footer {
                background-color: #001a00;
                padding: 20px;
                text-align: center;
                color: #00ff41;
                font-size: 12px;
                border-top: 1px solid #00ff41;
              }
              .pulse {
                display: inline-block;
                width: 8px;
                height: 8px;
                background-color: #00ff41;
                border-radius: 50%;
                margin-right: 10px;
                animation: pulse 2s infinite;
              }
              @keyframes pulse {
                0% { opacity: 1; }
                50% { opacity: 0.3; }
                100% { opacity: 1; }
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0; font-size: 24px; letter-spacing: 2px;">
                  <span class="pulse"></span>NEW TRANSMISSION RECEIVED
                </h1>
              </div>
              
              <div class="content">
                <div class="info-row">
                  <div class="label">SENDER IDENTIFICATION</div>
                  <div class="value">${name}</div>
                </div>
                
                <div class="info-row">
                  <div class="label">RETURN FREQUENCY</div>
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
                
                <div style="margin: 30px 0;">
                  <div class="label" style="margin-bottom: 10px;">ENCRYPTED MESSAGE</div>
                  <div class="message-box">${message}</div>
                </div>
                
                <div style="text-align: center; margin-top: 30px;">
                  <a href="mailto:${email}" style="
                    display: inline-block;
                    padding: 12px 30px;
                    background-color: #00ff41;
                    color: #000;
                    text-decoration: none;
                    font-weight: bold;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    transition: all 0.3s;
                  ">REPLY TO TRANSMISSION</a>
                </div>
              </div>
              
              <div class="footer">
                <p style="margin: 5px 0;">TRANSMISSION END</p>
                <p style="margin: 5px 0; font-size: 10px; color: #666;">
                  This message was sent from your portfolio contact form
                </p>
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