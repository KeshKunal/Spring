import React, { useState, useEffect, useRef } from 'react';
import './BreathSync.css';

function BreathSync({ onClose, theme = 'day' }) {
  const [isActive, setIsActive] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [selectedDuration, setSelectedDuration] = useState(60); // Default 1 minute
  const [customMinutes, setCustomMinutes] = useState(3);
  const [breathPhase, setBreathPhase] = useState('inhale'); // 'inhale', 'hold', 'exhale', 'hold-exhale'
  const [countdown, setCountdown] = useState(3);
  const [showCountdown, setShowCountdown] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [circlePosition, setCirclePosition] = useState({ x: 50, y: 50 });
  const [targetPosition, setTargetPosition] = useState({ x: 50, y: 50 });
  
  const intervalRef = useRef(null);
  const breathIntervalRef = useRef(null);
  const moveIntervalRef = useRef(null);
  const containerRef = useRef(null);

  const durations = [
    { label: '1 Min', value: 60 },
    { label: '2 Min', value: 120 },
    { label: '5 Min', value: 300 },
    { label: 'Custom', value: 'custom' }
  ];

  const isDarkTheme = theme === 'night';

  // Move circle to random positions for eye tracking
  useEffect(() => {
    if (isActive) {
      const moveCircle = () => {
        const newX = 15 + Math.random() * 70; // Keep between 15% and 85%
        const newY = 15 + Math.random() * 70;
        setTargetPosition({ x: newX, y: newY });
      };

      // Move every 8 seconds (2 breath cycles)
      moveIntervalRef.current = setInterval(moveCircle, 8000);
      moveCircle(); // Initial position

      return () => {
        if (moveIntervalRef.current) clearInterval(moveIntervalRef.current);
      };
    }
  }, [isActive]);

  // Smooth transition to target position
  useEffect(() => {
    if (isActive) {
      const transitionInterval = setInterval(() => {
        setCirclePosition(current => ({
          x: current.x + (targetPosition.x - current.x) * 0.02,
          y: current.y + (targetPosition.y - current.y) * 0.02
        }));
      }, 50);

      return () => clearInterval(transitionInterval);
    }
  }, [isActive, targetPosition]);

  useEffect(() => {
    if (isActive && timeRemaining > 0) {
      intervalRef.current = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            stopBreathing();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => {
        clearInterval(intervalRef.current);
      };
    }
  }, [isActive, timeRemaining]);

  useEffect(() => {
    if (isActive) {
      // Start with inhale
      setBreathPhase('inhale');
      
      let phaseTimer;
      const cyclePhases = () => {
        // 4 seconds inhale
        setBreathPhase('inhale');
        phaseTimer = setTimeout(() => {
          // 2 seconds hold
          setBreathPhase('hold');
          phaseTimer = setTimeout(() => {
            // 4 seconds exhale
            setBreathPhase('exhale');
            phaseTimer = setTimeout(() => {
              // 2 seconds hold
              setBreathPhase('hold-exhale');
              phaseTimer = setTimeout(() => {
                cyclePhases(); // Repeat cycle
              }, 2000);
            }, 4000);
          }, 2000);
        }, 4000);
      };

      cyclePhases();

      return () => {
        clearTimeout(phaseTimer);
      };
    }
  }, [isActive]);

  useEffect(() => {
    if (showCountdown && countdown > 0) {
      const countdownInterval = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            setShowCountdown(false);
            setIsActive(true);
            return 3;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  }, [showCountdown, countdown]);

  const startBreathing = () => {
    const duration = selectedDuration === 'custom' ? customMinutes * 60 : selectedDuration;
    setTimeRemaining(duration);
    setCountdown(3);
    setShowCountdown(true);
    setBreathPhase('inhale');
  };

  const stopBreathing = () => {
    setIsActive(false);
    setShowCountdown(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (breathIntervalRef.current) clearInterval(breathIntervalRef.current);
    if (moveIntervalRef.current) clearInterval(moveIntervalRef.current);
  };

  const handleDurationSelect = (value) => {
    setSelectedDuration(value);
    if (value !== 'custom') {
      stopBreathing();
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div 
      ref={containerRef}
      className={`breath-sync-overlay ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}
    >
      <div className="breath-sync-container">
        <button 
          className="close-btn" 
          onClick={() => {
            stopBreathing();
            onClose();
          }}
          aria-label="Close Breath Sync"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {!isActive && !showCountdown && (
          <div className="setup-screen">
            <h2 className="breath-sync-title">Breath Sync</h2>
            <p className="breath-sync-subtitle">Find your calm through mindful breathing</p>

            <div className="duration-selector">
              <p className="duration-label">Select Duration:</p>
              <div className="duration-buttons">
                {durations.map((duration) => (
                  <button
                    key={duration.label}
                    className={`duration-btn ${selectedDuration === duration.value ? 'active' : ''}`}
                    onClick={() => handleDurationSelect(duration.value)}
                  >
                    {duration.label}
                  </button>
                ))}
              </div>

              {selectedDuration === 'custom' && (
                <div className="custom-input-wrapper">
                  <label htmlFor="custom-minutes">Minutes:</label>
                  <input
                    id="custom-minutes"
                    type="number"
                    min="1"
                    max="30"
                    value={customMinutes}
                    onChange={(e) => setCustomMinutes(Math.max(1, Math.min(30, parseInt(e.target.value) || 1)))}
                    className="custom-input"
                  />
                </div>
              )}

              <button className="start-btn" onClick={startBreathing}>
                Begin Journey
              </button>
            </div>
          </div>
        )}

        {showCountdown && (
          <div className="countdown-display">
            <div className="countdown-number">{countdown}</div>
            <p className="countdown-text">Prepare yourself...</p>
            <p className="countdown-hint">Follow the circle with your eyes</p>
          </div>
        )}

        {isActive && (
          <div className="breathing-canvas">
            {/* Timer Display */}
            <div className="timer-display">{formatTime(timeRemaining)}</div>
            
            {/* Moving breathing circle */}
            <div className="breathing-circle-container">
              <div 
                className="moving-breath-container"
                style={{
                  left: `${circlePosition.x}%`,
                  top: `${circlePosition.y}%`
                }}
              >
                <div className={`simple-breathing-circle ${breathPhase} ${isDarkTheme ? 'dark' : 'light'}`}>
                </div>
              </div>
            </div>

            {/* Breath instruction */}
            <div className="breath-instruction">
              <div className={`breath-phase-badge ${breathPhase}`}>
                {breathPhase === 'inhale' ? '↑' : breathPhase === 'exhale' ? '↓' : '○'}
              </div>
              <p className="breath-phase-text">
                {breathPhase === 'inhale' ? 'Breathe In' : breathPhase === 'exhale' ? 'Breathe Out' : 'Hold'}
              </p>
              <div className="breath-count-dots">
                <span className={`dot ${breathPhase === 'inhale' ? 'active' : ''}`}></span>
                <span className={`dot ${breathPhase === 'hold' ? 'active' : ''}`}></span>
                <span className={`dot ${breathPhase === 'exhale' ? 'active' : ''}`}></span>
                <span className={`dot ${breathPhase === 'hold-exhale' ? 'active' : ''}`}></span>
              </div>
            </div>

            <button className="stop-btn" onClick={stopBreathing}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="6" width="12" height="12" rx="1"></rect>
              </svg>
              Stop Session
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default BreathSync;
