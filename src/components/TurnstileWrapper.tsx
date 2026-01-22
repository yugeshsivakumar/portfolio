import { useState, useEffect, ReactNode } from 'react';
import Turnstile from './Turnstile';

interface TurnstileWrapperProps {
  children: ReactNode;
}

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || '';
const VERIFICATION_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

const TurnstileWrapper = ({ children }: TurnstileWrapperProps) => {
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Skip Turnstile in development mode
  const isDevelopment = import.meta.env.DEV;

  useEffect(() => {
    if (isDevelopment) {
      setIsVerified(true);
      setIsLoading(false);
      return;
    }

    // Check if already verified and if verification is still valid
    const verificationData = localStorage.getItem('turnstile_verified');
    
    if (verificationData) {
      try {
        const { verified, timestamp } = JSON.parse(verificationData);
        const now = Date.now();
        
        // Check if verification is still valid (within 24 hours)
        if (verified && (now - timestamp) < VERIFICATION_EXPIRY) {
          setIsVerified(true);
          setIsLoading(false);
          return;
        } else {
          // Verification expired, clear it
          localStorage.removeItem('turnstile_verified');
        }
      } catch (error) {
        // Invalid data, clear it
        localStorage.removeItem('turnstile_verified');
      }
    }
    
    setIsLoading(false);
  }, [isDevelopment]);

  const handleTurnstileSuccess = (token: string) => {
    console.log('Turnstile verification successful');
    
    // Store verification with timestamp
    const verificationData = {
      verified: true,
      timestamp: Date.now(),
      token: token // Optional: store token if needed for backend verification
    };
    
    localStorage.setItem('turnstile_verified', JSON.stringify(verificationData));
    setIsVerified(true);
  };

  if (isLoading) {
    return (
      <div className="turnstile-loading">
        <div className="turnstile-spinner"></div>
      </div>
    );
  }

  if (!isVerified && !isDevelopment) {
    return (
      <div className="turnstile-container">
        <div className="turnstile-card">
          <h1 className="turnstile-heading">
            Verify you are human by completing the action below.
          </h1>
          
          <div className="turnstile-widget-wrapper">
            <Turnstile 
              siteKey={TURNSTILE_SITE_KEY} 
              onSuccess={handleTurnstileSuccess} 
            />
          </div>
          
          <p className="turnstile-security-text">
            yugesh.me needs to review the security of your connection before proceeding.
          </p>
        </div>
        
        <div className="turnstile-footer">
          <p className="turnstile-ray-id">Ray ID: {generateRayId()}</p>
          <p className="turnstile-powered">Performance & security by Cloudflare</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

// Generate a random Ray ID similar to Cloudflare's format
function generateRayId(): string {
  const chars = '0123456789abcdef';
  let result = '';
  for (let i = 0; i < 16; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export default TurnstileWrapper;