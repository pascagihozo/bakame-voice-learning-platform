
import { useState, useEffect } from "react";
import { Phone, Volume2 } from "lucide-react";

interface PhoneAnimationProps {
  isActive: boolean;
  currentStep: number;
  callDuration: number;
}

const PhoneAnimation = ({ isActive, currentStep, callDuration }: PhoneAnimationProps) => {
  const [audioWaves, setAudioWaves] = useState<number[]>([]);

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setAudioWaves(prev => [
          ...prev.slice(-20),
          Math.random() * 40 + 10
        ]);
      }, 100);
      return () => clearInterval(interval);
    } else {
      setAudioWaves([]);
    }
  }, [isActive]);

  return (
    <div className="relative">
      {/* Phone Device */}
      <div className={`mx-auto w-48 h-80 bg-gray-800 rounded-3xl p-4 transition-all duration-500 ${
        isActive ? 'shadow-2xl shadow-green-500/30 scale-105' : 'shadow-lg'
      }`}>
        {/* Screen */}
        <div className="w-full h-60 bg-gray-900 rounded-2xl p-4 relative overflow-hidden">
          {/* Screen Content */}
          <div className="text-center">
            <div className={`text-green-400 text-xs mb-2 transition-opacity ${
              isActive ? 'opacity-100' : 'opacity-50'
            }`}>
              {isActive ? 'CALL ACTIVE' : 'READY'}
            </div>
            
            {/* Call Duration */}
            <div className="text-white text-lg font-mono mb-4">
              {Math.floor(callDuration / 60)}:{(callDuration % 60).toString().padStart(2, '0')}
            </div>

            {/* Bakame AI Logo */}
            <div className="text-blue-400 text-sm font-bold mb-2">Bakame AI</div>
            <div className="text-gray-400 text-xs mb-4">English Learning</div>

            {/* Audio Visualization */}
            {isActive && (
              <div className="flex justify-center items-end space-x-1 h-12 mb-4">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-1 bg-gradient-to-t from-blue-500 to-green-400 rounded-full transition-all duration-100"
                    style={{
                      height: `${audioWaves[audioWaves.length - 12 + i] || 5}px`,
                      animationDelay: `${i * 50}ms`
                    }}
                  />
                ))}
              </div>
            )}

            {/* Status */}
            <div className="text-gray-300 text-xs">
              {isActive ? `Step ${currentStep + 1}/5` : 'Tap to start'}
            </div>
          </div>

          {/* Animated rings when active */}
          {isActive && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-20 h-20 border-2 border-green-400 rounded-full animate-ping opacity-30"></div>
              <div className="absolute w-16 h-16 border-2 border-blue-400 rounded-full animate-ping opacity-40" style={{ animationDelay: '0.5s' }}></div>
            </div>
          )}
        </div>

        {/* Call Button */}
        <div className="flex justify-center mt-4">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
            isActive 
              ? 'bg-red-500 animate-pulse' 
              : 'bg-green-500 hover:bg-green-400'
          }`}>
            <Phone className={`w-6 h-6 text-white transition-transform ${
              isActive ? 'rotate-12' : ''
            }`} />
          </div>
        </div>
      </div>

      {/* Floating Audio Indicators */}
      {isActive && (
        <div className="absolute -top-4 -right-4">
          <div className="relative">
            <Volume2 className="w-8 h-8 text-blue-500 animate-bounce" />
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhoneAnimation;
