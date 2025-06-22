
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Play, Pause, RotateCcw, Phone, PhoneCall, MessageCircle, Volume2, Award, Zap, Users, Globe, Languages } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import PhoneAnimation from "@/components/PhoneAnimation";
import ConversationFlow from "@/components/ConversationFlow";

const Demo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [userResponses, setUserResponses] = useState<string[]>([]);
  const [showConversation, setShowConversation] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<'swahili' | 'kinyarwanda'>('swahili');

  const demoSteps = [
    {
      title: "Language Detection & Welcome",
      description: "Maria calls and speaks in Swahili. AI detects her native language and responds accordingly.",
      content: {
        swahili: "Karibu kwenye Bakame AI! Nitakusaidia kujifunza Kiingereza. Je, umeanza kujifunza Kiingereza?",
        english: "Welcome to Bakame AI! I'll help you learn English. Have you started learning English before?"
      },
      userResponse: {
        swahili: "Nimeanza kidogo lakini ni mgumu sana",
        english: "I have started a little but it's very difficult"
      },
      aiResponse: {
        swahili: "Hakuna shida! Tutaanza polepole. Let me teach you step by step. Sema 'Hello' - maana yake ni 'Hujambo'",
        english: "No problem! We'll start slowly. Let me teach you step by step. Say 'Hello' - it means 'Hujambo'"
      },
      icon: <Languages className="w-6 h-6" />,
      type: "detection",
      nativeRatio: 80
    },
    {
      title: "Basic Greetings (Native + English)",
      description: "AI teaches basic greetings using 70% native language for explanations, 30% English practice.",
      content: {
        swahili: "Vizuri! Sasa jifunze maneno ya salamu. 'Good morning' ni 'Habari za asubuhi'. Rudia: Good morning",
        english: "Good! Now learn greeting words. 'Good morning' means 'Habari za asubuhi'. Repeat: Good morning"
      },
      userResponse: {
        swahili: "Good... morning?",
        english: "Good... morning?"
      },
      aiResponse: {
        swahili: "Vizuri sana! Perfect! Sasa jaribu kusema 'How are you?' - ni 'Hujambo?'",
        english: "Very good! Perfect! Now try to say 'How are you?' - it's 'Hujambo?'"
      },
      icon: <MessageCircle className="w-6 h-6" />,
      type: "greetings",
      nativeRatio: 70
    },
    {
      title: "Simple Vocabulary (Balanced Mix)",
      description: "Building vocabulary with 50% native explanations, 50% English practice and encouragement.",
      content: {
        swahili: "Let's learn family words. 'Mother' ni 'Mama', 'Father' ni 'Baba'. Can you say 'My mother'?",
        english: "Let's learn family words. 'Mother' is 'Mama', 'Father' is 'Baba'. Can you say 'My mother'?"
      },
      userResponse: {
        swahili: "My... mother... mama wangu?",
        english: "My... mother... mama wangu?"
      },
      aiResponse: {
        swahili: "Excellent! Yes, 'My mother' ni 'mama wangu'. You're learning fast! Now try 'My father'",
        english: "Excellent! Yes, 'My mother' is 'mama wangu'. You're learning fast! Now try 'My father'"
      },
      icon: <Volume2 className="w-6 h-6" />,
      type: "vocabulary",
      nativeRatio: 50
    },
    {
      title: "Simple Conversations (More English)",
      description: "Practicing conversations with 30% native support, 70% English to build confidence.",
      content: {
        swahili: "Great progress! Now let's practice. I'll ask: 'What is your name?' Jibu kwa Kiingereza: 'My name is...'",
        english: "Great progress! Now let's practice. I'll ask: 'What is your name?' Answer in English: 'My name is...'"
      },
      userResponse: {
        swahili: "My name is Maria",
        english: "My name is Maria"
      },
      aiResponse: {
        swahili: "Perfect English! Very good pronunciation! Can you tell me about your family in English?",
        english: "Perfect English! Very good pronunciation! Can you tell me about your family in English?"
      },
      icon: <Award className="w-6 h-6" />,
      type: "conversation",
      nativeRatio: 30
    },
    {
      title: "Full English Immersion",
      description: "Advanced practice with 90% English, minimal native language support for complex concepts.",
      content: {
        swahili: "Wonderful! You're ready for English conversation. Tell me about your daily activities using English words we learned.",
        english: "Wonderful! You're ready for English conversation. Tell me about your daily activities using English words we learned."
      },
      userResponse: {
        swahili: "I wake up in the morning. I greet my mother and father. I go to school.",
        english: "I wake up in the morning. I greet my mother and father. I go to school."
      },
      aiResponse: {
        swahili: "Outstanding! Your English is improving remarkably! Tomorrow we'll learn more advanced topics. Keep practicing!",
        english: "Outstanding! Your English is improving remarkably! Tomorrow we'll learn more advanced topics. Keep practicing!"
      },
      icon: <Award className="w-6 h-6" />,
      type: "immersion",
      nativeRatio: 10
    }
  ];

  const languageOptions = [
    { code: 'swahili', name: 'Swahili (Kenya/Tanzania)', flag: '🇰🇪' },
    { code: 'kinyarwanda', name: 'Kinyarwanda (Rwanda)', flag: '🇷🇼' }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCallDuration(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const startDemo = () => {
    setIsPlaying(true);
    setCurrentStep(0);
    setCallDuration(0);
    setProgress(0);
    setUserResponses([]);
    setShowConversation(true);
    toast({
      title: "Demo Started",
      description: "Experience how our AI-powered voice learning works!",
    });
  };

  const nextStep = () => {
    if (currentStep < demoSteps.length - 1) {
      setCurrentStep(currentStep + 1);
      setProgress(((currentStep + 1) / demoSteps.length) * 100);
      setUserResponses([...userResponses, demoSteps[currentStep].userResponse]);
    } else {
      setIsPlaying(false);
      setShowConversation(false);
      toast({
        title: "Demo Completed!",
        description: "Maria has successfully completed her English lesson.",
      });
    }
  };

  const resetDemo = () => {
    setCurrentStep(0);
    setIsPlaying(false);
    setCallDuration(0);
    setProgress(0);
    setUserResponses([]);
    setShowConversation(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const currentStepData = demoSteps[currentStep];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Interactive Demo: Multilingual AI-Powered Learning
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Experience how Maria, a student in rural Kenya, learns English starting from her native Swahili 
            through our adaptive voice-based AI platform - no internet required.
          </p>

          {/* Language Selection */}
          <div className="flex justify-center space-x-4 mb-8">
            {languageOptions.map((lang) => (
              <Button
                key={lang.code}
                variant={selectedLanguage === lang.code ? "default" : "outline"}
                onClick={() => setSelectedLanguage(lang.code as 'swahili' | 'kinyarwanda')}
                className="flex items-center space-x-2"
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </Button>
            ))}
          </div>

          {/* Demo Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg">
              <div className="flex items-center justify-center space-x-2">
                <Languages className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">Multilingual AI</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg">
              <div className="flex items-center justify-center space-x-2">
                <Zap className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-green-800">Adaptive Learning</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg">
              <div className="flex items-center justify-center space-x-2">
                <Users className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium text-purple-800">Beginner Friendly</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-lg">
              <div className="flex items-center justify-center space-x-2">
                <Globe className="w-5 h-5 text-orange-600" />
                <span className="text-sm font-medium text-orange-800">No Internet Needed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Phone Animation */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-lg">Maria's Phone</CardTitle>
                <CardDescription>Feature Phone Simulation</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <PhoneAnimation 
                  isActive={isPlaying}
                  currentStep={currentStep}
                  callDuration={callDuration}
                />
              </CardContent>
            </Card>
          </div>

          {/* Main Demo Interface */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-t-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-6 h-6" />
                    <div>
                      <CardTitle>Bakame AI Multilingual Learning</CardTitle>
                      <CardDescription className="text-blue-100">
                        {selectedLanguage === 'swahili' ? 'Swahili to English' : 'Kinyarwanda to English'} Learning Session
                      </CardDescription>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm opacity-75">Call Duration</div>
                    <div className="text-lg font-mono">{formatTime(callDuration)}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                {!isPlaying && currentStep === 0 ? (
                  <div className="text-center py-12">
                    <Languages className="w-24 h-24 text-gray-300 mx-auto mb-6" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Ready to Experience Multilingual Learning?
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Click below to simulate Maria's journey from {selectedLanguage === 'swahili' ? 'Swahili' : 'Kinyarwanda'} to English fluency
                    </p>
                    <Button onClick={startDemo} size="lg" className="bg-gradient-to-r from-blue-600 to-green-600">
                      <Play className="w-5 h-5 mr-2" />
                      Start Multilingual Learning Demo
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Progress Bar with Language Transition */}
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Learning Progress</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500">{Math.round(progress)}%</span>
                          <Badge variant="outline">
                            {currentStepData?.nativeRatio}% Native / {100 - (currentStepData?.nativeRatio || 0)}% English
                          </Badge>
                        </div>
                      </div>
                      <Progress value={progress} className="w-full" />
                      <div className="mt-2 text-xs text-gray-500 text-center">
                        Language Transition: Gradually increasing English usage
                      </div>
                    </div>

                    {/* Current Step */}
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="bg-blue-100 p-3 rounded-full">
                          {currentStepData.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">
                              {currentStepData.title}
                            </h3>
                            <Badge variant="secondary">{currentStepData.type}</Badge>
                            <Badge variant="outline" className="bg-green-50">
                              {currentStepData.nativeRatio}% Native Support
                            </Badge>
                          </div>
                          <p className="text-gray-600">{currentStepData.description}</p>
                        </div>
                      </div>

                      {/* Live Conversation Animation */}
                      {showConversation && (
                        <ConversationFlow
                          isActive={isPlaying}
                          currentMessage={currentStepData.content[selectedLanguage]}
                          userResponse={currentStepData.userResponse[selectedLanguage]}
                          aiResponse={currentStepData.aiResponse[selectedLanguage]}
                          stepType={currentStepData.type}
                        />
                      )}
                    </div>

                    {/* Controls */}
                    <div className="flex justify-between items-center">
                      <Button variant="outline" onClick={resetDemo}>
                        <RotateCcw className="w-4 h-4 mr-2" />
                        Reset Demo
                      </Button>
                      
                      {isPlaying && currentStep < demoSteps.length - 1 ? (
                        <Button onClick={nextStep} className="bg-gradient-to-r from-blue-600 to-green-600">
                          Next Step
                        </Button>
                      ) : isPlaying && currentStep === demoSteps.length - 1 ? (
                        <Button onClick={nextStep} className="bg-gradient-to-r from-green-600 to-blue-600">
                          Complete Lesson
                        </Button>
                      ) : (
                        <Button onClick={startDemo} className="bg-gradient-to-r from-blue-600 to-green-600">
                          <Play className="w-4 h-4 mr-2" />
                          Start Demo
                        </Button>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Analytics Panel */}
          <div className="lg:col-span-1 space-y-6">
            {/* Language Learning Analytics */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Learning Analytics</CardTitle>
                <CardDescription>
                  Real-time multilingual progress
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Session Length:</span>
                  <span className="text-sm font-medium">{formatTime(callDuration)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">English Words:</span>
                  <span className="text-sm font-medium">{Math.min(currentStep * 4 + 3, 20)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Comprehension:</span>
                  <span className="text-sm font-medium text-green-600">
                    {Math.min(70 + currentStep * 6, 95)}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Native Support:</span>
                  <span className="text-sm font-medium text-blue-600">
                    {currentStepData?.nativeRatio || 0}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${Math.min(70 + currentStep * 6, 95)}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>

            {/* Language Transition Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Language Transition</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Native Language:</span>
                  <span className="text-blue-600 font-medium">{currentStepData?.nativeRatio || 0}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">English Usage:</span>
                  <span className="text-green-600 font-medium">{100 - (currentStepData?.nativeRatio || 0)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Learning Stage:</span>
                  <span className="text-purple-600 font-medium">
                    {currentStep < 2 ? 'Beginner' : currentStep < 4 ? 'Intermediate' : 'Advanced'}
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Key Features */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Multilingual Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Native language detection",
                  "Gradual English transition",
                  "Cultural context awareness",
                  "Pronunciation coaching",
                  "Real-time adaptation",
                  "Progress optimization"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Multilingual AI Learning Experience
            </h3>
            <p className="text-gray-600">
              This demo shows how students can start learning in their native language (Swahili/Kinyarwanda) 
              and gradually transition to English fluency. Our AI adapts to each learner's pace and provides 
              culturally relevant examples while building confidence through progressive language immersion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
