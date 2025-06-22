
import { useState, useEffect } from "react";
import { MessageCircle, Volume2, Mic, Brain, Languages } from "lucide-react";

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
      { phase: 'ai-speaking', duration: 3000 },
      { phase: 'user-thinking', duration: 1500 },
      { phase: 'user-speaking', duration: 2000 },
      { phase: 'ai-processing', duration: 1000 },
      { phase: 'ai-responding', duration: 2500 }
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
      }, 40);
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
        return <Languages className="w-5 h-5 text-purple-500 animate-spin" />;
      case 'ai-responding':
        return <Volume2 className="w-5 h-5 text-blue-500 animate-pulse" />;
    }
  };

  const getPhaseDescription = () => {
    switch (animationPhase) {
      case 'ai-speaking':
        return "AI Tutor teaching in multilingual mode...";
      case 'user-thinking':
        return "Maria is processing the lesson...";
      case 'user-speaking':
        return "Maria is practicing English...";
      case 'ai-processing':
        return "AI analyzing language progress...";
      case 'ai-responding':
        return "AI providing personalized feedback...";
    }
  };

  const isNativeLanguage = (text: string) => {
    return text.includes('Karibu') || text.includes('Habari') || text.includes('Vizuri') || text.includes('ni ');
  };

  if (!isActive) return null;

  return (
    <div className="space-y-4">
      {/* Current Phase Indicator */}
      <div className="flex items-center justify-center space-x-2 p-3 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
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
            <div className="max-w-sm bg-gradient-to-r from-blue-100 to-green-100 rounded-lg p-4 relative">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-blue-700">AI Tutor (Multilingual)</span>
                {isNativeLanguage(typingText) && (
                  <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded">Swahili</span>
                )}
              </div>
              <p className="text-sm text-gray-800 leading-relaxed">
                {typingText}
                <span className="animate-ping text-blue-500">|</span>
              </p>
            </div>
          </div>
        )}

        {/* User Response */}
        {(animationPhase === 'user-speaking' || animationPhase === 'ai-processing' || animationPhase === 'ai-responding') && userResponse && (
          <div className="flex justify-end">
            <div className="max-w-sm bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2 justify-end">
                <span className="text-xs font-medium text-green-700">Maria (Learning)</span>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <p className="text-sm text-gray-800 text-right leading-relaxed">{userResponse}</p>
            </div>
          </div>
        )}

        {/* AI Response/Feedback */}
        {animationPhase === 'ai-responding' && aiResponse && (
          <div className="flex justify-start">
            <div className="max-w-sm bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-purple-700">AI Feedback & Encouragement</span>
              </div>
              <p className="text-sm text-gray-800 leading-relaxed">{aiResponse}</p>
            </div>
          </div>
        )}
      </div>

      {/* Processing Animation */}
      {animationPhase === 'ai-processing' && (
        <div className="flex justify-center">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <div className="flex space-x-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
            <span>Analyzing language patterns...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConversationFlow;
