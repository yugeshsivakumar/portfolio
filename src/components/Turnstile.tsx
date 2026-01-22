import { useEffect, useRef } from 'react';

interface TurnstileProps {
  siteKey: string;
  onSuccess: (token: string) => void;
}

declare global {
  interface Window {
    turnstile: {
      render: (container: HTMLElement, options: {
        sitekey: string;
        callback: (token: string) => void;
        theme?: 'light' | 'dark' | 'auto';
      }) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
    onloadTurnstileCallback?: () => void;
  }
}

const Turnstile = ({ siteKey, onSuccess }: TurnstileProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    const renderWidget = () => {
      if (containerRef.current && window.turnstile && !widgetIdRef.current) {
        try {
          widgetIdRef.current = window.turnstile.render(containerRef.current, {
            sitekey: siteKey,
            callback: onSuccess,
            theme: 'dark',
          });
        } catch (error) {
          console.error('Error rendering Turnstile widget:', error);
        }
      }
    };

    const loadTurnstileScript = () => {
      // Check if script is already loaded
      if (window.turnstile) {
        renderWidget();
        return;
      }

      // Check if script tag already exists
      const existingScript = document.querySelector('script[src*="challenges.cloudflare.com/turnstile"]');
      if (existingScript) {
        // Script exists but might not be loaded yet
        window.onloadTurnstileCallback = renderWidget;
        return;
      }

      // Create and load the script
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback';
      script.async = true;
      script.defer = true;
      
      window.onloadTurnstileCallback = renderWidget;
      
      script.onerror = () => {
        console.error('Failed to load Turnstile script');
      };

      document.head.appendChild(script);
      scriptLoadedRef.current = true;
    };

    loadTurnstileScript();

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch (error) {
          console.error('Error removing Turnstile widget:', error);
        }
        widgetIdRef.current = null;
      }
    };
  }, [siteKey, onSuccess]);

  return <div ref={containerRef} className="cf-turnstile"></div>;
};

export default Turnstile;