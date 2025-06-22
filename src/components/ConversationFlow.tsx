
import { useState, useEffect } from "react";
import { MessageCircle, Volume2, Mic, Brain } from "lucide-react";

interface ConversationFlowProps {
  isActive: boolean;
  currentMessage: string;
  userResponse?: string;
  aiResponse?: string;
  stepType: string;
}

const ConversationFlow = ({ 
  isActive, 
  currentMessage, 
  userResponse, 
  aiResponse, 
  stepType 
}: ConversationFlowProps) => {
  const [animationPhase, setAnimationPhase] = useState<'ai-speaking' | 'user-thinking' | 'user-speaking' | 'ai-processing' | 'ai-responding'>('ai-speaking');
  const [typingText, setTypingText] = useState("");

  useEffect(() => {
    if (!isActive) return;

    const phases = [
      { phase: 'ai-speaking', duration: 2000 },
      { phase: 'user-thinking', duration: 1000 },
      { phase: 'user-speaking', duration: 1500 },
      { phase: 'ai-processing', duration: 1000 },
      { phase: 'ai-responding', duration: 2000 }
    ];

    let currentPhaseIndex = 0;
    const cyclePhases = () => {
      if (currentPhaseIndex < phases.length) {
        setAnimationPhase(phases[currentPhaseIndex].phase as any);
        setTimeout(() => {
          currentPhaseIndex++;
          cyclePhases();
        }, phases[currentPhaseIndex].duration);
      }
    };

    cyclePhases();
  }, [isActive, currentMessage]);

  // Typewriter effect for messages
  useEffect(() => {
    if (animationPhase === 'ai-speaking' && currentMessage) {
      setTypingText("");
      let i = 0;
      const timer = setInterval(() => {
        if (i < currentMessage.length) {
          setTypingText(currentMessage.slice(0, i + 1));
          i++;
        } else {
          clearInterval(timer);
        }
      }, 50);
      return () => clearInterval(timer);
    }
  }, [animationPhase, currentMessage]);

  const getPhaseIcon = () => {
    switch (animationPhase) {
      case 'ai-speaking':
        return <Volume2 className="w-5 h-5 text-blue-500 animate-pulse" />;
      case 'user-thinking':
        return <Brain className="w-5 h-5 text-yellow-500 animate-pulse" />;
      case 'user-speaking':
        return <Mic className="w-5 h-5 text-green-500 animate-bounce" />;
      case 'ai-processing':
        return <Brain className="w-5 h-5 text-purple-500 animate-spin" />;
      case 'ai-responding':
        return <Volume2 className="w-5 h-5 text-blue-500 animate-pulse" />;
    }
  };

  const getPhaseDescription = () => {
    switch (animationPhase) {
      case 'ai-speaking':
        return "AI Tutor is speaking...";
      case 'user-thinking':
        return "Maria is thinking...";
      case 'user-speaking':
        return "Maria is responding...";
      case 'ai-processing':
        return "AI is processing response...";
      case 'ai-responding':
        return "AI is providing feedback...";
    }
  };

  if (!isActive) return null;

  return (
    <div className="space-y-4">
      {/* Current Phase Indicator */}
      <div className="flex items-center justify-center space-x-2 p-3 bg-gray-50 rounded-lg">
        {getPhaseIcon()}
        <span className="text-sm font-medium text-gray-700">
          {getPhaseDescription()}
        </span>
      </div>

      {/* Conversation Bubbles */}
      <div className="space-y-3">
        {/* AI Message */}
        {animationPhase === 'ai-speaking' && (
          <div className="flex justify-start">
            <div className="max-w-xs bg-blue-100 rounded-lg p-3 relative">
              <div className="flex items-center space-x-2 mb-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-xs font-medium text-blue-700">AI Tutor</span>
              </div>
              <p className="text-sm text-gray-800">
                {typingText}
                <span className="animate-ping">|</span>
              </p>
            </div>
          </div>
        )}

        {/* User Response */}
        {(animationPhase === 'user-speaking' || animationPhase === 'ai-processing' || animationPhase === 'ai-responding') && userResponse && (
          <div className="flex justify-end">
            <div className="max-w-xs bg-green-100 rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-1 justify-end">
                <span className="text-xs font-medium text-green-700">Maria</span>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <p className="text-sm text-gray-800 text-right">{userResponse}</p>
            </div>
          </div>
        )}

        {/* AI Response/Feedback */}
        {animationPhase === 'ai-responding' && aiResponse && (
          <div className="flex justify-start">
            <div className="max-w-xs bg-purple-100 rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-1">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-purple-700">AI Feedback</span>
              </div>
              <p className="text-sm text-gray-800">{aiResponse}</p>
            </div>
          </div>
        )}
      </div>

      {/* Processing Animation */}
      {animationPhase === 'ai-processing' && (
        <div className="flex justify-center">
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ConversationFlow;
