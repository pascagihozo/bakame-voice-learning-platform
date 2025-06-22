
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Play, Pause, RotateCcw, Phone, PhoneCall, MessageCircle, Volume2, Award } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Demo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [userResponses, setUserResponses] = useState<string[]>([]);

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
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const currentStepData = demoSteps[currentStep];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Interactive Demo: AI-Powered Voice Learning
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience how Maria, a student in rural Kenya, learns English through our voice-based AI platform 
            using just her feature phone - no internet required.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Phone Interface Simulation */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-t-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-6 h-6" />
                    <div>
                      <CardTitle>Bakame AI Voice Learning</CardTitle>
                      <CardDescription className="text-blue-100">
                        Feature Phone Simulation
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
                      <div className="flex items-start space-x-4">
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
                          <p className="text-gray-600 mb-4">{currentStepData.description}</p>
                          
                          {/* AI Speech */}
                          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                            <div className="flex items-center space-x-2 mb-2">
                              <Volume2 className="w-4 h-4 text-blue-600" />
                              <span className="text-sm font-medium text-blue-700">AI Tutor Says:</span>
                            </div>
                            <p className="text-gray-800">{currentStepData.content}</p>
                          </div>

                          {/* User Response */}
                          {currentStep > 0 && userResponses[currentStep - 1] && (
                            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                              <div className="flex items-center space-x-2 mb-2">
                                <MessageCircle className="w-4 h-4 text-green-600" />
                                <span className="text-sm font-medium text-green-700">Maria Says:</span>
                              </div>
                              <p className="text-gray-800">{userResponses[currentStep - 1]}</p>
                            </div>
                          )}

                          {/* AI Response */}
                          {currentStepData.aiResponse && (
                            <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                              <div className="flex items-center space-x-2 mb-2">
                                <Volume2 className="w-4 h-4 text-purple-600" />
                                <span className="text-sm font-medium text-purple-700">AI Responds:</span>
                              </div>
                              <p className="text-gray-800">{currentStepData.aiResponse}</p>
                            </div>
                          )}
                        </div>
                      </div>
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

          {/* Info Panel */}
          <div className="space-y-6">
            {/* Real-Time Analytics */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Real-Time Analytics</CardTitle>
                <CardDescription>
                  Data available to teachers and education ministries
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Session Length:</span>
                  <span className="text-sm font-medium">{formatTime(callDuration)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Vocabulary Words:</span>
                  <span className="text-sm font-medium">{currentStep + 2}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Comprehension:</span>
                  <span className="text-sm font-medium">85%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Pronunciation:</span>
                  <span className="text-sm font-medium">Good</span>
                </div>
              </CardContent>
            </Card>

            {/* Key Features */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Demo Highlights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">No internet required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Works on any phone</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">AI adapts to skill level</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Real-time progress tracking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Personalized feedback</span>
                </div>
              </CardContent>
            </Card>

            {/* Technical Specs */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Technical Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <span className="font-medium">Speech Recognition:</span>
                  <span className="text-gray-600 ml-2">OpenAI Whisper</span>
                </div>
                <div>
                  <span className="font-medium">Language Model:</span>
                  <span className="text-gray-600 ml-2">GPT-4 Turbo</span>
                </div>
                <div>
                  <span className="font-medium">Response Time:</span>
                  <span className="text-gray-600 ml-2">&lt;4 seconds</span>
                </div>
                <div>
                  <span className="font-medium">Audio Quality:</span>
                  <span className="text-gray-600 ml-2">8 kHz optimized</span>
                </div>
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
