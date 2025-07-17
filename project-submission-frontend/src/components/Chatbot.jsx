import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Sparkles, Bot, Zap } from 'lucide-react';

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pulseAnimation, setPulseAnimation] = useState(false);

  useEffect(() => {
    // Add pulsing animation periodically to draw attention
    const interval = setInterval(() => {
      if (!open) {
        setPulseAnimation(true);
        setTimeout(() => setPulseAnimation(false), 2000);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [open]);

  const handleToggle = () => {
    if (!open) {
      setIsLoading(true);
      setOpen(true);
      // Simulate loading time for premium feel
      setTimeout(() => setIsLoading(false), 1200);
    } else {
      setOpen(false);
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Icon with Premium Effects */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Ambient glow effect */}
        <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-30 blur-xl scale-110 ${pulseAnimation ? 'animate-pulse' : ''}`} />
        
        {/* Animated ring */}
        <div className={`absolute inset-0 rounded-full border-2 border-blue-400 opacity-60 ${open ? 'animate-spin' : pulseAnimation ? 'animate-ping' : ''}`} style={{ animationDuration: '3s' }} />
        
        <button
          onClick={handleToggle}
          className={`relative p-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 ${open ? 'rotate-180' : ''} ${pulseAnimation ? 'animate-bounce' : ''}`}
        >
          {open ? (
            <X className="w-6 h-6" />
          ) : (
            <div className="relative">
              <MessageCircle className="w-6 h-6" />
              <Sparkles className="w-3 h-3 absolute -top-1 -right-1 text-yellow-300 animate-pulse" />
            </div>
          )}
        </button>
      </div>

      {/* Chat Window with Premium Design */}
      {open && (
        <div className="fixed bottom-20 right-6 z-50 w-[380px] h-[600px] transform transition-all duration-500 ease-out">
          {/* Glassmorphism container */}
          <div className="relative w-full h-full bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 animate-gradient" />
            
            {/* Header */}
            <div className="relative z-10 p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Bot className="w-6 h-6" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-bold text-lg">AI Assistant</h3>
                      <span className="px-2 py-1 bg-yellow-400 text-yellow-900 text-xs font-semibold rounded-full animate-pulse">
                        BETA
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleToggle}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content Area */}
            <div className="relative h-[calc(100%-120px)] overflow-hidden">
              {isLoading ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="relative">
                      <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4" />
                      <Sparkles className="w-6 h-6 text-blue-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                    </div>
                    <p className="text-gray-600 font-medium">Initializing AI Assistant...</p>
                    <p className="text-sm text-gray-500 mt-1">Setting up premium beta experience</p>
                  </div>
                </div>
              ) : (
                <iframe
                  src="https://ai-document-summarizer-kappa.vercel.app/"
                  title="AI Chatbot"
                  className="w-full h-full border-none"
                />
              )}
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse" />
          </div>

          {/* Floating particles effect */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30 animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Custom animations */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .animate-gradient {
          animation: gradient 4s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </>
  );
};

export default Chatbot;