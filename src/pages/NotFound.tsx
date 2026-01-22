import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="not-found-container">
      {/* Animated background particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div 
        className="not-found-content"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      >
        {/* Glowing 404 */}
        <div className="error-code-wrapper">
          <h1 className="error-code">
            <span className="digit">4</span>
            <span className="digit zero">
              <AlertTriangle className="zero-icon" />
            </span>
            <span className="digit">4</span>
          </h1>
          <div className="error-glow"></div>
        </div>

        {/* Error message */}
        <div className="error-message">
          <h2 className="error-title">Page Not Found</h2>
          <p className="error-description">
            Oops! The page you're looking for seems to have wandered off into the digital void.
          </p>
        </div>

        {/* Animated path display */}
        <div className="error-path">
          <code>{location.pathname}</code>
        </div>

        {/* Home button */}
        <Link to="/" className="home-button">
          <Home size={20} />
          <span>Back to Home</span>
          <div className="button-glow"></div>
        </Link>
      </div>

      <style>{`
        .not-found-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: var(--smoky-black);
          position: relative;
          overflow: hidden;
          font-family: var(--ff-poppins);
        }

        .particles {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: var(--orange-yellow-crayola);
          border-radius: 50%;
          opacity: 0.3;
          animation: float linear infinite;
        }

        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100vh) rotate(720deg);
            opacity: 0;
          }
        }

        .not-found-content {
          text-align: center;
          z-index: 1;
          transition: transform 0.1s ease-out;
        }

        .error-code-wrapper {
          position: relative;
          margin-bottom: 30px;
        }

        .error-code {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          margin: 0;
        }

        .digit {
          font-family: var(--ff-playfair);
          font-size: clamp(80px, 20vw, 180px);
          font-weight: 700;
          background: var(--text-gradient-yellow);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .digit.zero {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .zero-icon {
          width: clamp(60px, 15vw, 140px);
          height: clamp(60px, 15vw, 140px);
          color: var(--orange-yellow-crayola);
          animation: shake 0.5s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% {
            filter: drop-shadow(0 0 20px hsla(45, 100%, 72%, 0.4));
          }
          50% {
            filter: drop-shadow(0 0 40px hsla(45, 100%, 72%, 0.8));
          }
        }

        @keyframes shake {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }

        .error-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, hsla(45, 100%, 72%, 0.15) 0%, transparent 70%);
          pointer-events: none;
          animation: breathe 3s ease-in-out infinite;
        }

        @keyframes breathe {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.2); }
        }

        .error-message {
          margin-bottom: 25px;
        }

        .error-title {
          font-family: var(--ff-playfair);
          font-size: clamp(24px, 5vw, 36px);
          font-weight: 600;
          color: var(--white-1);
          margin-bottom: 15px;
          animation: fadeInUp 0.6s ease-out 0.2s backwards;
        }

        .error-description {
          font-size: clamp(14px, 3vw, 16px);
          color: var(--light-gray);
          max-width: 400px;
          margin: 0 auto;
          line-height: 1.6;
          animation: fadeInUp 0.6s ease-out 0.4s backwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .error-path {
          margin-bottom: 30px;
          animation: fadeInUp 0.6s ease-out 0.6s backwards;
        }

        .error-path code {
          background: var(--eerie-black-1);
          color: var(--vegas-gold);
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 14px;
          border: 1px solid var(--jet);
        }

        .home-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--border-gradient-onyx);
          color: var(--orange-yellow-crayola);
          padding: 16px 32px;
          border-radius: 14px;
          font-size: 16px;
          font-weight: 500;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          animation: fadeInUp 0.6s ease-out 0.8s backwards;
          z-index: 1;
        }

        .home-button::before {
          content: "";
          position: absolute;
          inset: 1px;
          background: var(--bg-gradient-jet);
          border-radius: inherit;
          z-index: -1;
          transition: all 0.3s ease;
        }

        .home-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px hsla(45, 100%, 72%, 0.2);
        }

        .home-button:hover::before {
          background: var(--bg-gradient-yellow-2);
        }

        .button-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, hsla(45, 100%, 72%, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .home-button:hover .button-glow {
          left: 100%;
        }

        @media (max-width: 480px) {
          .not-found-content {
            padding: 20px;
          }

          .error-path code {
            font-size: 12px;
            word-break: break-all;
          }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
