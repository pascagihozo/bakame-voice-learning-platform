
import { useState, useEffect } from "react";
import { MessageCircle, Volume2, Mic, Brain, Languages, Sparkles } from "lucide-react";

interface ConversationFlowProps {
  isActive: boolean;
  currentMessage: string;
  userResponse?: string;
  aiResponse?: string;
  stepType: string;
  selectedLanguage?: 'swahili' | 'kinyarwanda';
  learningMode?: 'gradual' | 'english-only' | 'native-heavy';
}

const ConversationFlow = ({ 
  isActive, 
  currentMessage, 
  userResponse, 
  aiResponse, 
  stepType,
  selectedLanguage = 'swahili',
  learningMode = 'gradual'
}: ConversationFlowProps) => {
  const [animationPhase, setAnimationPhase] = useState<'ai-speaking' | 'user-thinking' | 'user-speaking' | 'ai-processing' | 'ai-responding'>('ai-speaking');
  const [typingText, setTypingText] = useState("");

  useEffect(() => {
    if (!isActive) return;

    const phases = [
      { phase: 'ai-speaking', duration: 4000 },
      { phase: 'user-thinking', duration: 2000 },
      { phase: 'user-speaking', duration: 3000 },
      { phase: 'ai-processing', duration: 1500 },
      { phase: 'ai-responding', duration: 3000 }
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

  // Enhanced typewriter effect for multilingual messages
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
      }, 35);
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
        return <Sparkles className="w-5 h-5 text-pink-500 animate-pulse" />;
    }
  };

  const getPhaseDescription = () => {
    const languageName = selectedLanguage === 'swahili' ? 'Kiswahili' : 'Kinyarwanda';
    const modeDescription = {
      'gradual': 'Adaptive Mix',
      'english-only': 'English Focus',
      'native-heavy': 'Native Support'
    }[learningMode];

    switch (animationPhase) {
      case 'ai-speaking':
        return `AI teaching in ${languageName} & English (${modeDescription})`;
      case 'user-thinking':
        return "Maria is processing the multilingual lesson...";
      case 'user-speaking':
        return "Maria practicing with mixed languages...";
      case 'ai-processing':
        return "AI analyzing language patterns & cultural context...";
      case 'ai-responding':
        return "AI providing personalized cultural feedback...";
    }
  };

  const detectLanguageContent = (text: string) => {
    // Enhanced language detection for both Swahili and Kinyarwanda
    const swahiliWords = ['Karibu', 'Habari', 'Vizuri', 'ni ', 'na ', 'kwa', 'Hakuna', 'sana', 'kwenye', 'kusema', 'kujifunza'];
    const kinyarwandaWords = ['Murakaza', 'Amakuru', 'Byiza', 'ni ', 'na ', 'mu ', 'Nta', 'cyane', 'kuri', 'kuvuga', 'kwiga'];
    const englishWords = ['Welcome', 'Hello', 'Good', 'is ', 'and ', 'to ', 'No', 'very', 'learn', 'say', 'practice'];

    const hasSwahili = swahiliWords.some(word => text.includes(word));
    const hasKinyarwanda = kinyarwandaWords.some(word => text.includes(word));
    const hasEnglish = englishWords.some(word => text.includes(word));

    if (hasSwahili && hasEnglish) return 'mixed-swahili';
    if (hasKinyarwanda && hasEnglish) return 'mixed-kinyarwanda';
    if (hasSwahili) return 'swahili';
    if (hasKinyarwanda) return 'kinyarwanda';
    if (hasEnglish) return 'english';
    return 'mixed';
  };

  const getLanguageBadge = (text: string) => {
    const contentType = detectLanguageContent(text);
    switch (contentType) {
      case 'mixed-swahili':
        return <span className="text-xs bg-gradient-to-r from-blue-200 to-green-200 text-blue-800 px-2 py-1 rounded">Kiswahili + English</span>;
      case 'mixed-kinyarwanda':
        return <span className="text-xs bg-gradient-to-r from-purple-200 to-green-200 text-purple-800 px-2 py-1 rounded">Kinyarwanda + English</span>;
      case 'swahili':
        return <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded">Kiswahili</span>;
      case 'kinyarwanda':
        return <span className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded">Kinyarwanda</span>;
      case 'english':
        return <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">English</span>;
      default:
        return <span className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded">Mixed</span>;
    }
  };

  const getLearningModeIndicator = () => {
    const modeColors = {
      'gradual': 'from-blue-500 to-green-500',
      'english-only': 'from-green-500 to-emerald-500',
      'native-heavy': 'from-purple-500 to-blue-500'
    };

    return (
      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${modeColors[learningMode]} animate-pulse`}></div>
    );
  };

  if (!isActive) return null;

  return (
    <div className="space-y-4">
      {/* Enhanced Phase Indicator */}
      <div className="flex items-center justify-center space-x-3 p-4 bg-gradient-to-r from-blue-50 via-purple-50 to-green-50 rounded-lg border">
        {getPhaseIcon()}
        <span className="text-sm font-medium text-gray-700">
          {getPhaseDescription()}
        </span>
        {getLearningModeIndicator()}
      </div>

      {/* Enhanced Conversation Bubbles */}
      <div className="space-y-4">
        {/* AI Message with Language Detection */}
        {animationPhase === 'ai-speaking' && (
          <div className="flex justify-start">
            <div className="max-w-lg bg-gradient-to-r from-blue-100 via-purple-50 to-green-100 rounded-lg p-4 relative shadow-sm border">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-blue-700">
                    Bakame AI Tutor (Multilingual)
                  </span>
                </div>
                {getLanguageBadge(typingText)}
              </div>
              <p className="text-sm text-gray-800 leading-relaxed">
                {typingText}
                <span className="animate-ping text-blue-500 ml-1">|</span>
              </p>
              
              {/* Learning Mode Indicator */}
              <div className="mt-3 flex items-center space-x-2">
                <span className="text-xs text-gray-500">Mode:</span>
                <span className="text-xs font-medium text-purple-600">
                  {learningMode === 'gradual' ? 'Adaptive Mix' : 
                   learningMode === 'english-only' ? 'English Focus' : 'Native Heavy'}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced User Response */}
        {(animationPhase === 'user-speaking' || animationPhase === 'ai-processing' || animationPhase === 'ai-responding') && userResponse && (
          <div className="flex justify-end">
            <div className="max-w-lg bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-4 shadow-sm border">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-medium text-green-700">Maria (Learning Journey)</span>
                </div>
                <div className="flex items-center space-x-2">
                  {getLanguageBadge(userResponse)}
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
              <p className="text-sm text-gray-800 text-right leading-relaxed">{userResponse}</p>
              
              {/* Progress Indicator */}
              <div className="mt-3 flex justify-end">
                <span className="text-xs text-gray-500">
                  {selectedLanguage === 'swahili' ? 'Kiswahili' : 'Kinyarwanda'} → English progress
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced AI Response/Feedback */}
        {animationPhase === 'ai-responding' && aiResponse && (
          <div className="flex justify-start">
            <div className="max-w-lg bg-gradient-to-r from-purple-100 via-pink-50 to-orange-100 rounded-lg p-4 shadow-sm border">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-purple-700">
                    AI Cultural Feedback & Encouragement
                  </span>
                </div>
                {getLanguageBadge(aiResponse)}
              </div>
              <p className="text-sm text-gray-800 leading-relaxed">{aiResponse}</p>
              
              {/* Cultural Context Indicator */}
              <div className="mt-3 flex items-center space-x-2">
                <span className="text-xs text-gray-500">Cultural context:</span>
                <span className="text-xs font-medium text-orange-600">
                  {selectedLanguage === 'swahili' ? 'East African' : 'Rwandan'} learning style
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Processing Animation */}
      {animationPhase === 'ai-processing' && (
        <div className="flex justify-center">
          <div className="flex items-center space-x-3 text-sm text-gray-600 bg-purple-50 px-4 py-3 rounded-lg border">
            <div className="flex space-x-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
            <span>Analyzing {selectedLanguage === 'swahili' ? 'Kiswahili' : 'Kinyarwanda'} patterns & cultural context...</span>
            <Languages className="w-4 h-4 text-purple-500 animate-spin" />
          </div>
        </div>
      )}

      {/* Learning Progress Indicator */}
      {animationPhase === 'ai-responding' && (
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 px-4 py-2 rounded-lg border text-center">
            <div className="text-xs text-gray-600 mb-1">Learning Progress</div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-medium text-blue-600">
                {selectedLanguage === 'swahili' ? 'Kiswahili' : 'Kinyarwanda'}
              </span>
              <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
              <span className="text-xs font-medium text-green-600">English</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConversationFlow;
