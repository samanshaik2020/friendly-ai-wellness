import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import BaymaxIntro from './BaymaxIntro';
const HeroSection: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [hasSeenIntro, setHasSeenIntro] = useState(false);
  
  // Check if user has seen the intro in this session
  useEffect(() => {
    // Use sessionStorage instead of localStorage to show intro on each new session
    const hasSeenIntroThisSession = sessionStorage.getItem('hasSeenBaymaxIntro');
    if (hasSeenIntroThisSession) {
      setShowIntro(false);
      setHasSeenIntro(true);
    }
  }, []);
  
  const handleIntroComplete = () => {
    setShowIntro(false);
    setHasSeenIntro(true);
    // Store in sessionStorage to show intro again on new sessions
    sessionStorage.setItem('hasSeenBaymaxIntro', 'true');
  };
  return (
    <>
      {showIntro && <BaymaxIntro onIntroComplete={handleIntroComplete} />}
      <div className={`relative pt-24 pb-16 overflow-hidden ${!hasSeenIntro ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000'}`}>
      {/* Background particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(10)].map((_, i) => <div key={i} className="particle float-animation" style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 10 + 5}px`,
        height: `${Math.random() * 10 + 5}px`,
        animationDelay: `${Math.random() * 5}s`
      }} />)}
      </div>

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left z-10 mb-10 lg:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Your Personal <br />
            <span className="text-primary">Healthcare Companion</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
            Meet Baymax, your AI healthcare assistant designed to provide
            compassionate care, answer medical questions, and monitor
            your wellbeing anytime, anywhere.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
            <Link to="/onboarding">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg pulse-animation">
                Start Chatting
              </Button>
            </Link>
            <Button variant="outline" className="rounded-full px-8 py-6 text-lg">
              Learn More
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="w-full h-[400px] flex items-center justify-center">
            <img alt="Baymax" className="w-[300px] h-[300px] object-contain animate-float" src="/lovable-uploads/6d66ca49-c82e-41ea-b547-9772e066f53f.png" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default HeroSection;