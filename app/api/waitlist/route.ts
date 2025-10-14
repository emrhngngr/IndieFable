import { NextRequest, NextResponse } from 'next/server';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// Upstash Redis setup with error handling
let redis: Redis | null = null;
let ratelimit: Ratelimit | null = null;

try {
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    });

    // Rate limiting: 3 requests per minute per IP
    ratelimit = new Ratelimit({
      redis: redis,
      limiter: Ratelimit.slidingWindow(3, '1 m'),
      analytics: true,
    });
  }
} catch (error) {
  console.error('Redis initialization failed:', error);
}

// MailerLite API configuration
const MAILERLITE_API_URL = 'https://connect.mailerlite.com/api';
const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;
const MAILERLITE_GROUP_ID = process.env.MAILERLITE_GROUP_ID;

interface WaitlistRequest {
  name: string;
  email: string;
  honeypot?: string; // Bot detection field
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const ip = forwarded?.split(',')[0] || realIp || 'unknown';
    
    // Check rate limit (if Redis is available)
    if (ratelimit) {
      const { success, limit, reset, remaining } = await ratelimit.limit(ip);
      
      if (!success) {
        return NextResponse.json(
          { 
            error: 'Too many requests. Please try again later.',
            retryAfter: Math.round((reset - Date.now()) / 1000)
          },
          { status: 429 }
        );
      }
    }

    const body: WaitlistRequest = await request.json();
    const { name, email, honeypot } = body;

    // Honeypot check - if filled, it's likely a bot
    if (honeypot && honeypot.trim() !== '') {
      console.log(`Bot detected with honeypot value: ${honeypot} from IP: ${ip}`);
      // Return success to not give away the honeypot
      return NextResponse.json({ success: true });
    }

    // Basic validation
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Check if API key is configured
    if (!MAILERLITE_API_KEY) {
      console.error('MailerLite API key not configured');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Check if email already exists in our cache (to prevent duplicates)
    const emailKey = `waitlist:email:${email.toLowerCase()}`;
    let emailExists = false;
    
    if (redis) {
      try {
        const result = await redis.get(emailKey);
        emailExists = !!result;
      } catch (error) {
        console.warn('Redis cache check failed:', error);
        // Continue without cache check
      }
    }
    
    if (emailExists) {
      return NextResponse.json(
        { error: 'This email is already on the waitlist' },
        { status: 409 }
      );
    }

    // Add subscriber to MailerLite
    console.log('Attempting to add subscriber to MailerLite:', email);
    
    const mailerLiteResponse = await fetch(`${MAILERLITE_API_URL}/subscribers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MAILERLITE_API_KEY}`,
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        email: email.toLowerCase(),
        fields: {
          name: name,
          source: 'IndieFable Waitlist',
          signup_date: new Date().toISOString(),
          ip_address: ip,
        },
        groups: MAILERLITE_GROUP_ID ? [MAILERLITE_GROUP_ID] : undefined,
        status: 'active',
      }),
    });

    console.log('MailerLite Response Status:', mailerLiteResponse.status);
    
    if (!mailerLiteResponse.ok) {
      const errorData = await mailerLiteResponse.text();
      console.error('MailerLite API Error:', errorData);
      console.error('Request was:', {
        email: email.toLowerCase(),
        name: name,
        groups: MAILERLITE_GROUP_ID ? [MAILERLITE_GROUP_ID] : undefined,
      });
      
      // Check if it's a duplicate email error
      if (mailerLiteResponse.status === 422 || errorData.includes('already exists')) {
        // Cache the duplicate if Redis is available
        if (redis) {
          try {
            await redis.setex(emailKey, 60 * 60 * 24 * 30, 'true');
          } catch (redisError) {
            console.warn('Redis cache set failed for duplicate:', redisError);
          }
        }
        
        return NextResponse.json(
          { error: 'This email is already on the waitlist' },
          { status: 409 }
        );
      }
      
      return NextResponse.json(
        { error: 'Failed to add to waitlist. Please try again.' },
        { status: 500 }
      );
    }

    // Success - get the response data for logging
    const responseData = await mailerLiteResponse.json();
    console.log('MailerLite Success Response:', responseData);

    // Cache the email to prevent duplicates (expire in 30 days)
    if (redis) {
      try {
        await redis.setex(emailKey, 60 * 60 * 24 * 30, 'true');
      } catch (error) {
        console.warn('Redis cache set failed:', error);
        // Continue without caching
      }
    }

    // Log successful signup (without sensitive data)
    console.log(`New waitlist signup: ${email} from IP: ${ip}`);

    return NextResponse.json({ 
      success: true,
      message: 'Successfully joined the waitlist!' 
    });

  } catch (error) {
    console.error('Waitlist API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}