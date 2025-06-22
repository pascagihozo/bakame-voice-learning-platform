import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Play, Pause, RotateCcw, Phone, PhoneCall, MessageCircle, Volume2, Award, Zap, Users, Globe } from "lucide-react";
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

  const demoSteps = [
    {
      title: "Student Dials the Number",
      description: "Maria, a student in rural Kenya, dials the toll-free education number on her feature phone.",
      content: "Welcome to Bakame AI English Learning! Please say your student ID or press 1 for new students.",
      userResponse: "Student ID 12345",
      aiResponse: "Hello Maria! Welcome back. Today we'll continue with Lesson 5: Daily Conversations.",
      icon: <PhoneCall className="w-6 h-6" />,
      type: "call"
    },
    {
      title: "AI Assesses Current Level",
      description: "The AI quickly reviews Maria's progress and adapts the lesson to her current proficiency level.",
      content: "Let's start with a quick review. Can you tell me what you did yesterday? Use past tense.",
      userResponse: "Yesterday I go to market with my mother",
      aiResponse: "Good try! Let's practice: 'Yesterday I WENT to the market.' Can you repeat that?",
      icon: <MessageCircle className="w-6 h-6" />,
      type: "assessment"
    },
    {
      title: "Interactive Vocabulary Practice",
      description: "The AI teaches new vocabulary through context and repetition.",
      content: "Perfect! Now let's learn new words. Listen: 'I bought vegetables at the market.' What does 'bought' mean?",
      userResponse: "Bought means... to get something with money?",
      aiResponse: "Excellent! 'Bought' is the past tense of 'buy'. Let's practice: 'I bought bread yesterday.'",
      icon: <Volume2 className="w-6 h-6" />,
      type: "vocabulary"
    },
    {
      title: "Story-Based Learning",
      description: "The AI presents an engaging story to practice comprehension and speaking.",
      content: "Great! Now listen to this short story: 'Sarah went to the market. She bought apples and oranges...'",
      userResponse: "Sarah bought fruits at the market",
      aiResponse: "Perfect comprehension! Now tell me, what would you buy if you went to the market?",
      icon: <Award className="w-6 h-6" />,
      type: "story"
    },
    {
      title: "Progress Tracking & Encouragement",
      description: "The AI provides feedback and tracks learning progress for teachers and education ministries.",
      content: "Wonderful work today, Maria! You completed 85% of today's lesson. See you tomorrow!",
      userResponse: "Thank you! Goodbye!",
      aiResponse: "Goodbye Maria! Keep practicing. Your English is improving every day!",
      icon: <Award className="w-6 h-6" />,
      type: "completion"
    }
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
            Interactive Demo: AI-Powered Voice Learning
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Experience how Maria, a student in rural Kenya, learns English through our voice-based AI platform 
            using just her feature phone - no internet required.
          </p>

          {/* Demo Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg">
              <div className="flex items-center justify-center space-x-2">
                <Zap className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">4 sec response</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg">
              <div className="flex items-center justify-center space-x-2">
                <Users className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-green-800">2.7B potential users</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg">
              <div className="flex items-center justify-center space-x-2">
                <Globe className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium text-purple-800">No internet needed</span>
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
                      <CardTitle>Bakame AI Voice Learning</CardTitle>
                      <CardDescription className="text-blue-100">
                        Interactive Learning Session
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
                    <Phone className="w-24 h-24 text-gray-300 mx-auto mb-6" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Ready to Start the Demo?
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Click the button below to simulate Maria's English learning session
                    </p>
                    <Button onClick={startDemo} size="lg" className="bg-gradient-to-r from-blue-600 to-green-600">
                      <Play className="w-5 h-5 mr-2" />
                      Start Voice Learning Demo
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Progress Bar */}
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Lesson Progress</span>
                        <span className="text-sm text-gray-500">{Math.round(progress)}%</span>
                      </div>
                      <Progress value={progress} className="w-full" />
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
                          </div>
                          <p className="text-gray-600">{currentStepData.description}</p>
                        </div>
                      </div>

                      {/* Live Conversation Animation */}
                      {showConversation && (
                        <ConversationFlow
                          isActive={isPlaying}
                          currentMessage={currentStepData.content}
                          userResponse={currentStepData.userResponse}
                          aiResponse={currentStepData.aiResponse}
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
            {/* Real-Time Analytics */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Live Analytics</CardTitle>
                <CardDescription>
                  Real-time data for educators
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Session Length:</span>
                  <span className="text-sm font-medium">{formatTime(callDuration)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Words Learned:</span>
                  <span className="text-sm font-medium">{Math.min(currentStep * 3 + 2, 15)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Comprehension:</span>
                  <span className="text-sm font-medium text-green-600">
                    {Math.min(75 + currentStep * 5, 95)}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Engagement:</span>
                  <span className="text-sm font-medium text-blue-600">High</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${Math.min(75 + currentStep * 5, 95)}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>

            {/* Technical Performance */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">System Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Response Time:</span>
                  <span className="text-green-600 font-medium">2.1s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Audio Quality:</span>
                  <span className="text-green-600 font-medium">Excellent</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Connection:</span>
                  <span className="text-green-600 font-medium">Stable</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">AI Processing:</span>
                  <span className="text-blue-600 font-medium">98% Accuracy</span>
                </div>
              </CardContent>
            </Card>

            {/* Key Features */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Demo Highlights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "No internet required",
                  "Works on any phone",
                  "AI adapts to skill level",
                  "Real-time progress tracking",
                  "Personalized feedback",
                  "24/7 availability"
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
              This demo simulates a real voice interaction
            </h3>
            <p className="text-gray-600">
              In the actual implementation, Maria would speak directly with our AI through her phone. 
              The conversation flows naturally with speech recognition, AI processing, and text-to-speech 
              responses - all optimized for low-bandwidth networks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
