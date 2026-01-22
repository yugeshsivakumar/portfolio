import { useState, useEffect, ReactNode } from 'react';
import Turnstile from './Turnstile';

interface TurnstileWrapperProps {
  children: ReactNode;
}

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || '';

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

    // Check if already verified in this session
    const verified = sessionStorage.getItem('turnstile_verified');
    if (verified === 'true') {
      setIsVerified(true);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, [isDevelopment]);

  const handleTurnstileSuccess = (token: string) => {
    console.log('Turnstile verification successful');
    sessionStorage.setItem('turnstile_verified', 'true');
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
