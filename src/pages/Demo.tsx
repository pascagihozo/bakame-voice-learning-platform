import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Play, Pause, RotateCcw, Phone, PhoneCall, MessageCircle, Volume2, Award, Zap, Users, Globe, Languages, Settings, Mic, MicOff } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
  const [learningMode, setLearningMode] = useState<'gradual' | 'english-only' | 'native-heavy'>('gradual');
  const [isUserSpeaking, setIsUserSpeaking] = useState(false);
  const [callQuality, setCallQuality] = useState<'excellent' | 'good' | 'fair'>('excellent');

  const demoSteps = [
    {
      title: "Language Detection & Welcome",
      description: "AI detects the learner's native language and provides a warm welcome with initial assessment.",
      content: {
        swahili: {
          gradual: "Karibu kwenye Bakame AI! Mimi ni mwalimu wako wa Kiingereza. Tutaanza kujifunza pamoja. Je, umeshawahi kujifunza Kiingereza?",
          "english-only": "Welcome to Bakame AI! I am your English teacher. We will learn together. Have you ever learned English before?",
          "native-heavy": "Karibu sana kwenye Bakame AI! Mimi ni mwalimu wako mkuu wa lugha ya Kiingereza. Tutaanza safari yetu ya kujifunza pamoja. Je, una uzoefu wowote wa kujifunza Kiingereza hapo awali?"
        },
        kinyarwanda: {
          gradual: "Murakaza neza kuri Bakame AI! Ndi mwarimu wawe w'Icyongereza. Tuzatangira kwiga hamwe. Ese wigeze wiga Icyongereza?",
          "english-only": "Welcome to Bakame AI! I am your English teacher. We will learn together. Have you ever learned English before?",
          "native-heavy": "Murakaza neza cyane kuri Bakame AI! Ndi mwarimu wawe mukuru w'ururimi rw'Icyongereza. Tuzatangira urugendo rwacu rwo kwiga hamwe. Ese ufite ubunyangamugayo ubwo aribwo bwose bwo kwiga Icyongereza mbere?"
        }
      },
      userResponse: {
        swahili: {
          gradual: "Nimeanza kidogo lakini ni ngumu sana kwangu",
          "english-only": "I have started a little but it is very difficult for me",
          "native-heavy": "Nimeanza kidogo tu lakini ni vigumu sana kwangu kuelewa na kusema Kiingereza"
        },
        kinyarwanda: {
          gradual: "Natangiye gake ariko birangoye cyane",
          "english-only": "I have started a little but it is very difficult for me",
          "native-heavy": "Natangiye gake gusa ariko birangoye cyane kwanjye gusobanukirwa no kuvuga Icyongereza"
        }
      },
      aiResponse: {
        swahili: {
          gradual: "Hakuna shida kabisa! Kila mtu huanza hapo. Let me help you step by step. Tutaanza na maneno rahisi. Sema 'Hello' - maana yake ni 'Hujambo'",
          "english-only": "No problem at all! Everyone starts there. Let me help you step by step. We'll start with easy words. Say 'Hello' - it means 'Hujambo'",
          "native-heavy": "Hakuna shida hata kidogo! Kila mtu anaanza hapo hapo. Nitakusaidia hatua kwa hatua. Tutaanza na maneno rahisi rahisi. Jaribu kusema 'Hello' - maana yake ni 'Hujambo' kwa Kiswahili"
        },
        kinyarwanda: {
          gradual: "Nta kibazo na gato! Buri muntu atangira aho. Reka nkugufashe ntambike ntambike. Tuzatangira n'amagambo yoroshye. Vuga 'Hello' - bivuze 'Muraho'",
          "english-only": "No problem at all! Everyone starts there. Let me help you step by step. We'll start with easy words. Say 'Hello' - it means 'Muraho'",
          "native-heavy": "Nta kibazo na gato cyangwa cyo aribwo bwose! Buri muntu atangira aho nyene. Reka nkugufashe intambwe ku ntambwe. Tuzatangira n'amagambo yoroshye yoroshye. Gerageza kuvuga 'Hello' - mu Kinyarwanda bivuze 'Muraho'"
        }
      },
      icon: <Languages className="w-6 h-6" />,
      type: "detection",
      nativeRatio: { gradual: 80, "english-only": 20, "native-heavy": 95 }
    },
    {
      title: "Basic Greetings Practice",
      description: "Learning essential greetings with pronunciation guidance and cultural context.",
      content: {
        swahili: {
          gradual: "Vizuri sana! Now let's practice greetings. 'Good morning' ni 'Habari za asubuhi'. Repeat after me: Good morning",
          "english-only": "Very good! Now let's practice greetings. 'Good morning' means 'Habari za asubuhi'. Repeat after me: Good morning",
          "native-heavy": "Vizuri sana! Sasa hebu tujifunze maneno ya salamu. 'Good morning' kwa Kiingereza ni kama 'Habari za asubuhi' kwa Kiswahili. Rudia baada yangu: Good morning"
        },
        kinyarwanda: {
          gradual: "Byiza cyane! Ubu reka twige gusalamuza. 'Good morning' ni nk'uko tuvuga 'Mwaramutse'. Repeat after me: Good morning",
          "english-only": "Very good! Now let's practice greetings. 'Good morning' means 'Mwaramutse'. Repeat after me: Good morning",
          "native-heavy": "Byiza cyane rwose! Ubu reka twige amagambo yo gusalamuza. 'Good morning' mu Cyongereza ni nk'uko tuvuga 'Mwaramutse' mu Kinyarwanda. Subiramo nyuma yanjye: Good morning"
        }
      },
      userResponse: {
        swahili: {
          gradual: "Good... morning. Ni vigumu kidogo lakini nazama",
          "english-only": "Good... morning. It's a bit difficult but I'm trying",
          "native-heavy": "Good... morning. Ni vigumu kidogo lakini ninajaribu kujifunza"
        },
        kinyarwanda: {
          gradual: "Good... morning. Birangoye gato ariko ndagerageza",
          "english-only": "Good... morning. It's a bit difficult but I'm trying",
          "native-heavy": "Good... morning. Birangoye gato ariko ndagerageza kwiga"
        }
      },
      aiResponse: {
        swahili: {
          gradual: "Perfect pronunciation! You're doing great. Now try 'How are you?' - ni 'Hujambo?'",
          "english-only": "Perfect pronunciation! You're doing great. Now try 'How are you?' - it means 'Hujambo?'",
          "native-heavy": "Uchawi mzuri kabisa! Unafanya vizuri sana. Sasa jaribu 'How are you?' - kwa Kiswahili ni 'Hujambo?' au 'Habari gani?'"
        },
        kinyarwanda: {
          gradual: "Ubivuze neza cyane! Urakora neza. Ubu gerageza 'How are you?' - ni nk'uko tuvuga 'Amakuru?'",
          "english-only": "Perfect pronunciation! You're doing great. Now try 'How are you?' - it means 'Amakuru?'",
          "native-heavy": "Ubivuze neza cyane cyane! Urakora neza rwose. Ubu gerageza 'How are you?' - mu Kinyarwanda ni nk'uko tuvuga 'Amakuru?' cyangwa 'Witeze gute?'"
        }
      },
      icon: <MessageCircle className="w-6 h-6" />,
      type: "greetings",
      nativeRatio: { gradual: 70, "english-only": 30, "native-heavy": 85 }
    },
    {
      title: "Family & Daily Words",
      description: "Building vocabulary around family and daily life with cultural examples.",
      content: {
        swahili: {
          gradual: "Excellent! Let's learn family words. 'Mother' ni 'Mama', 'Father' ni 'Baba'. Can you say 'My mother'?",
          "english-only": "Excellent! Let's learn family words. 'Mother' means 'Mama', 'Father' means 'Baba'. Can you say 'My mother'?",
          "native-heavy": "Bora kabisa! Hebu tujifunze maneno ya familia. 'Mother' kwa Kiingereza ni 'Mama' kwa Kiswahili, na 'Father' ni 'Baba'. Je, unaweza kusema 'My mother' kwa Kiingereza?"
        },
        kinyarwanda: {
          gradual: "Byiza cyane! Reka twige amagambo y'umuryango. 'Mother' ni 'Mama', 'Father' ni 'Papa'. Urashobora kuvuga 'My mother'?",
          "english-only": "Excellent! Let's learn family words. 'Mother' means 'Mama', 'Father' means 'Papa'. Can you say 'My mother'?",
          "native-heavy": "Byiza cyane rwose! Reka twige amagambo ajyanye n'umuryango. 'Mother' mu Cyongereza ni 'Mama' mu Kinyarwanda, na 'Father' ni 'Papa'. Urashobora kuvuga 'My mother' mu Cyongereza?"
        }
      },
      userResponse: {
        swahili: {
          gradual: "My... mother. Mama wangu anaitwa Grace",
          "english-only": "My... mother. My mother is called Grace",
          "native-heavy": "My... mother. Mama wangu anaitwa Grace na ni mzuri sana"
        },
        kinyarwanda: {
          gradual: "My... mother. Mama wanjye yitwa Grace",
          "english-only": "My... mother. My mother is called Grace",
          "native-heavy": "My... mother. Mama wanjye yitwa Grace kandi ni mwiza cyane"
        }
      },
      aiResponse: {
        swahili: {
          gradual: "Wonderful! Grace is a beautiful name. Now try 'My father works' - 'Baba yangu anafanya kazi'",
          "english-only": "Wonderful! Grace is a beautiful name. Now try 'My father works' - it means 'Baba yangu anafanya kazi'",
          "native-heavy": "Vizuri kabisa! Grace ni jina zuri sana. Sasa jaribu kusema 'My father works' - kwa Kiswahili ni 'Baba yangu anafanya kazi'"
        },
        kinyarwanda: {
          gradual: "Byiza cyane! Grace ni izina ryiza. Ubu gerageza 'My father works' - ni nk'uko tuvuga 'Papa wanjye akora'",
          "english-only": "Wonderful! Grace is a beautiful name. Now try 'My father works' - it means 'Papa wanjye akora'",
          "native-heavy": "Byiza cyane rwose! Grace ni izina ryiza cyane. Ubu gerageza kuvuga 'My father works' - mu Kinyarwanda ni nk'uko tuvuga 'Papa wanjye akora'"
        }
      },
      icon: <Users className="w-6 h-6" />,
      type: "vocabulary",
      nativeRatio: { gradual: 50, "english-only": 40, "native-heavy": 75 }
    },
    {
      title: "Simple Conversations",
      description: "Practicing real conversations with encouragement and error correction.",
      content: {
        swahili: {
          gradual: "Great progress! Now let's practice conversation. I'll ask: 'What is your name?' Answer in English please.",
          "english-only": "Great progress! Now let's practice conversation. I'll ask: 'What is your name?' Please answer in English.",
          "native-heavy": "Maendeleo mazuri sana! Sasa hebu tufanye mazungumzo. Nitakuuliza: 'What is your name?' - maana yake ni 'Jina lako ni nani?' Jibu kwa Kiingereza tafadhali."
        },
        kinyarwanda: {
          gradual: "Iterambere ryiza! Ubu reka tuganire. Nzakubaza: 'What is your name?' Subiza mu Cyongereza please.",
          "english-only": "Great progress! Now let's practice conversation. I'll ask: 'What is your name?' Please answer in English.",
          "native-heavy": "Iterambere ryiza cyane! Ubu reka duganire. Nzakubaza: 'What is your name?' - bivuze 'Witwa nde?' Subiza mu Cyongereza nyamuneka."
        }
      },
      userResponse: {
        swahili: {
          gradual: "My name is Maria. Nina miaka kumi na saba",
          "english-only": "My name is Maria. I am seventeen years old",
          "native-heavy": "My name is Maria. Mimi nina miaka kumi na saba na naishi Nairobi"
        },
        kinyarwanda: {
          gradual: "My name is Maria. Mfite imyaka cumi n'irindwi",
          "english-only": "My name is Maria. I am seventeen years old",
          "native-heavy": "My name is Maria. Mfite imyaka cumi n'irindwi kandi ntuye i Kigali"
        }
      },
      aiResponse: {
        swahili: {
          gradual: "Perfect English! Very good pronunciation, Maria! Can you tell me about your school in English?",
          "english-only": "Perfect English! Very good pronunciation, Maria! Can you tell me about your school in English?",
          "native-heavy": "Kiingereza nzuri kabisa! Uchawi mzuri sana, Maria! Je, unaweza kuniambia kuhusu shule yako kwa Kiingereza?"
        },
        kinyarwanda: {
          gradual: "Icyongereza cyiza cyane! Ubivuze neza, Maria! Urashobora kumbwira amakuru y'ishuri ryawe mu Cyongereza?",
          "english-only": "Perfect English! Very good pronunciation, Maria! Can you tell me about your school in English?",
          "native-heavy": "Icyongereza cyiza cyane rwose! Ubivuze neza cyane, Maria! Urashobora kumbwira amakuru y'ishuri ryawe mu Cyongereza?"
        }
      },
      icon: <Award className="w-6 h-6" />,
      type: "conversation",
      nativeRatio: { gradual: 30, "english-only": 10, "native-heavy": 60 }
    },
    {
      title: "English Immersion",
      description: "Advanced practice with minimal native language support for confidence building.",
      content: {
        swahili: {
          gradual: "Excellent work, Maria! You're ready for more English. Tell me about your dreams and what you want to become.",
          "english-only": "Excellent work, Maria! You're ready for more English. Tell me about your dreams and what you want to become.",
          "native-heavy": "Kazi nzuri sana, Maria! Umejiandaa kwa Kiingereza zaidi. Niambie kuhusu ndoto zako na unachotaka kuwa."
        },
        kinyarwanda: {
          gradual: "Akazi keza cyane, Maria! Witeguye Icyongereza cyinshi. Mbwira ibintu byawe n'icyo ushaka kuba.",
          "english-only": "Excellent work, Maria! You're ready for more English. Tell me about your dreams and what you want to become.",
          "native-heavy": "Akazi keza cyane, Maria! Witeguye Icyongereza nyinshi. Mbwira ku byifuzo byawe n'icyo ushaka kuba mu buzima bwawe."
        }
      },
      userResponse: {
        swahili: {
          gradual: "I want to be a teacher like you. I love helping people learn new things and English will help me teach many students.",
          "english-only": "I want to be a teacher like you. I love helping people learn new things and English will help me teach many students.",
          "native-heavy": "I want to be a teacher like you. Napenda kusaidia watu kujifunza mambo mapya na Kiingereza kitanisaidia kufundisha wanafunzi wengi."
        },
        kinyarwanda: {
          gradual: "I want to be a teacher like you. I love helping people learn new things and English will help me teach many students.",
          "english-only": "I want to be a teacher like you. I love helping people learn new things and English will help me teach many students.",
          "native-heavy": "I want to be a teacher like you. Nkunda gufasha abantu kwiga ibintu bishya kandi Icyongereza kizamfasha kwigisha abanyeshuri benshi."
        }
      },
      aiResponse: {
        swahili: {
          gradual: "That's a beautiful dream, Maria! Your English has improved so much. Keep practicing and you'll achieve your goals!",
          "english-only": "That's a beautiful dream, Maria! Your English has improved so much. Keep practicing and you'll achieve your goals!",
          "native-heavy": "Hiyo ni ndoto nzuri, Maria! Kiingereza chako kimebadilika sana. Endelea kujifunza na utafikia malengo yako!"
        },
        kinyarwanda: {
          gradual: "Ni icyifuzo cyiza, Maria! Icyongereza cyawe cyateye imbere cyane. Komeza kwiga uzagera ku ntego zawe!",
          "english-only": "That's a beautiful dream, Maria! Your English has improved so much. Keep practicing and you'll achieve your goals!",
          "native-heavy": "Ni icyifuzo cyiza cyane, Maria! Icyongereza cyawe cyateye imbere cyane. Komeza kwiga kandi uzagera ku ntego zawe zose!"
        }
      },
      icon: <Award className="w-6 h-6" />,
      type: "immersion",
      nativeRatio: { gradual: 10, "english-only": 5, "native-heavy": 40 }
    }
  ];

  const languageOptions = [
    { code: 'swahili', name: 'Kiswahili', flag: '🇰🇪', region: 'Kenya/Tanzania' },
    { code: 'kinyarwanda', name: 'Kinyarwanda', flag: '🇷🇼', region: 'Rwanda' }
  ];

  const learningModeOptions = [
    { 
      value: 'gradual', 
      label: 'Gradual Transition', 
      description: 'Start with native language, gradually increase English',
      icon: <Zap className="w-4 h-4" />
    },
    { 
      value: 'english-only', 
      label: 'English Focus', 
      description: 'Minimal native language, focus on English immersion',
      icon: <Globe className="w-4 h-4" />
    },
    { 
      value: 'native-heavy', 
      label: 'Native Support', 
      description: 'Heavy native language support for beginners',
      icon: <Users className="w-4 h-4" />
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
      description: `Learning ${selectedLanguage === 'swahili' ? 'Kiswahili' : 'Kinyarwanda'} to English with ${learningModeOptions.find(m => m.value === learningMode)?.label} mode`,
    });
  };

  const nextStep = () => {
    if (currentStep < demoSteps.length - 1) {
      setCurrentStep(currentStep + 1);
      setProgress(((currentStep + 1) / demoSteps.length) * 100);
      setUserResponses([...userResponses, demoSteps[currentStep].userResponse[selectedLanguage][learningMode]]);
    } else {
      setIsPlaying(false);
      setShowConversation(false);
      toast({
        title: "Lesson Completed! 🎉",
        description: "Maria has successfully progressed through all learning stages!",
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

  const toggleUserSpeaking = () => {
    setIsUserSpeaking(!isUserSpeaking);
    toast({
      title: isUserSpeaking ? "Microphone Off" : "Microphone On",
      description: isUserSpeaking ? "Stopped listening" : "Ready to listen to your practice",
    });
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const currentStepData = demoSteps[currentStep];
  const currentNativeRatio = currentStepData.nativeRatio[learningMode];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Interactive Demo: Dynamic Multilingual AI Learning
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Experience how learners progress from their native language to English fluency with our adaptive AI tutor.
            Choose your language and learning style to see how our system adapts in real-time.
          </p>

          {/* Language & Mode Selection */}
          <div className="space-y-8 mb-8">
            {/* Language Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Select Your Native Language</h3>
              <div className="flex justify-center space-x-4">
                {languageOptions.map((lang) => (
                  <Button
                    key={lang.code}
                    variant={selectedLanguage === lang.code ? "default" : "outline"}
                    onClick={() => setSelectedLanguage(lang.code as 'swahili' | 'kinyarwanda')}
                    className="flex items-center space-x-2 px-6"
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <div className="text-left">
                      <div className="font-medium">{lang.name}</div>
                      <div className="text-xs opacity-75">{lang.region}</div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>

            {/* Learning Mode Selection */}
            <div className="max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold mb-4">Choose Learning Style</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {learningModeOptions.map((mode) => (
                  <Button
                    key={mode.value}
                    variant={learningMode === mode.value ? "default" : "outline"}
                    onClick={() => setLearningMode(mode.value as typeof learningMode)}
                    className="flex flex-col items-center p-6 h-auto"
                  >
                    {mode.icon}
                    <div className="mt-2 text-center">
                      <div className="font-medium">{mode.label}</div>
                    </div>
                  </Button>
                ))}
              </div>
              
              {/* Learning Mode Descriptions - Now moved below the cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-gray-800 mb-1">Gradual Transition</p>
                  <p>Start with native language, gradually increase English</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-gray-800 mb-1">English Focus</p>
                  <p>Minimal native language, focus on English immersion</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-gray-800 mb-1">Native Support</p>
                  <p>Heavy native language support for beginners</p>
                </div>
              </div>
            </div>
          </div>

          {/* Demo Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg">
              <div className="flex items-center justify-center space-x-2">
                <Languages className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">Native Detection</span>
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
                <span className="text-sm font-medium text-purple-800">Cultural Context</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-lg">
              <div className="flex items-center justify-center space-x-2">
                <Globe className="w-5 h-5 text-orange-600" />
                <span className="text-sm font-medium text-orange-800">Offline Ready</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Phone Animation */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-lg">Maria's Learning Journey</CardTitle>
                <CardDescription>
                  {selectedLanguage === 'swahili' ? 'Kiswahili' : 'Kinyarwanda'} → English
                </CardDescription>
                <div className="flex justify-center space-x-2 mt-2">
                  <Badge variant={callQuality === 'excellent' ? 'default' : 'outline'} className="text-xs">
                    📶 {callQuality}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {learningModeOptions.find(m => m.value === learningMode)?.label}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <PhoneAnimation 
                  isActive={isPlaying}
                  currentStep={currentStep}
                  callDuration={callDuration}
                />
                
                {/* Interactive Call Controls */}
                {isPlaying && (
                  <div className="flex justify-center space-x-2">
                    <Button
                      size="sm"
                      variant={isUserSpeaking ? "default" : "outline"}
                      onClick={toggleUserSpeaking}
                      className="flex items-center space-x-1"
                    >
                      {isUserSpeaking ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
                      <span className="text-xs">{isUserSpeaking ? 'Speaking' : 'Listen'}</span>
                    </Button>
                    
                    <Select value={callQuality} onValueChange={(value: any) => setCallQuality(value)}>
                      <SelectTrigger className="w-20 h-8">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="excellent">📶 Excellent</SelectItem>
                        <SelectItem value="good">📶 Good</SelectItem>
                        <SelectItem value="fair">📶 Fair</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
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
                      <CardTitle>Bakame AI Dynamic Learning</CardTitle>
                      <CardDescription className="text-blue-100">
                        {selectedLanguage === 'swahili' ? 'Kiswahili' : 'Kinyarwanda'} → English • {learningModeOptions.find(m => m.value === learningMode)?.label}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm opacity-75">Session Time</div>
                    <div className="text-lg font-mono">{formatTime(callDuration)}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                {!isPlaying && currentStep === 0 ? (
                  <div className="text-center py-12">
                    <Languages className="w-24 h-24 text-gray-300 mx-auto mb-6" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Ready for Dynamic Learning?
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Experience how Maria learns English from {selectedLanguage === 'swahili' ? 'Kiswahili' : 'Kinyarwanda'} 
                      using the {learningModeOptions.find(m => m.value === learningMode)?.label} approach
                    </p>
                    <Button onClick={startDemo} size="lg" className="bg-gradient-to-r from-blue-600 to-green-600">
                      <Play className="w-5 h-5 mr-2" />
                      Start Dynamic Learning Demo
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Progress Bar with Dynamic Language Ratio */}
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Learning Progress</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500">{Math.round(progress)}%</span>
                          <Badge variant="outline">
                            {currentNativeRatio}% Native / {100 - currentNativeRatio}% English
                          </Badge>
                        </div>
                      </div>
                      <Progress value={progress} className="w-full h-3" />
                      <div className="mt-2 flex justify-between text-xs text-gray-500">
                        <span>{selectedLanguage === 'swahili' ? 'Kiswahili' : 'Kinyarwanda'} Heavy</span>
                        <span>Balanced Mix</span>
                        <span>English Immersion</span>
                      </div>
                    </div>

                    {/* Current Step with Dynamic Content */}
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
                              {currentNativeRatio}% Native Support
                            </Badge>
                          </div>
                          <p className="text-gray-600">{currentStepData.description}</p>
                        </div>
                      </div>

                      {/* Dynamic Conversation */}
                      {showConversation && (
                        <ConversationFlow
                          isActive={isPlaying}
                          currentMessage={currentStepData.content[selectedLanguage][learningMode]}
                          userResponse={currentStepData.userResponse[selectedLanguage][learningMode]}
                          aiResponse={currentStepData.aiResponse[selectedLanguage][learningMode]}
                          stepType={currentStepData.type}
                          selectedLanguage={selectedLanguage}
                          learningMode={learningMode}
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
                          Continue Learning →
                        </Button>
                      ) : isPlaying && currentStep === demoSteps.length - 1 ? (
                        <Button onClick={nextStep} className="bg-gradient-to-r from-green-600 to-blue-600">
                          Complete Lesson 🎉
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

          {/* Enhanced Analytics Panel */}
          <div className="lg:col-span-1 space-y-6">
            {/* Dynamic Learning Analytics */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Learning Analytics</CardTitle>
                <CardDescription>
                  Real-time adaptation metrics
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Session Duration:</span>
                  <span className="text-sm font-medium">{formatTime(callDuration)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Words Learned:</span>
                  <span className="text-sm font-medium">{Math.min(currentStep * 5 + 8, 35)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Comprehension:</span>
                  <span className="text-sm font-medium text-green-600">
                    {Math.min(75 + currentStep * 5, 96)}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Confidence Level:</span>
                  <span className="text-sm font-medium text-blue-600">
                    {Math.min(60 + currentStep * 8, 92)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${Math.min(75 + currentStep * 5, 96)}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>

            {/* Dynamic Language Transition */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Language Balance</CardTitle>
                <CardDescription>Current lesson composition</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Native ({selectedLanguage === 'swahili' ? 'Kiswahili' : 'Kinyarwanda'}):</span>
                  <span className="text-blue-600 font-medium">{currentNativeRatio}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">English Practice:</span>
                  <span className="text-green-600 font-medium">{100 - currentNativeRatio}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Learning Mode:</span>
                  <span className="text-purple-600 font-medium">
                    {learningModeOptions.find(m => m.value === learningMode)?.label}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Difficulty Level:</span>
                  <span className="text-orange-600 font-medium">
                    {currentStep < 2 ? 'Beginner' : currentStep < 4 ? 'Intermediate' : 'Advanced'}
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Smart Features */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">AI Features Active</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { feature: "Native language detection", active: true },
                  { feature: "Cultural context awareness", active: true },
                  { feature: "Pronunciation analysis", active: isPlaying },
                  { feature: "Real-time adaptation", active: isPlaying },
                  { feature: "Progress optimization", active: true },
                  { feature: "Confidence building", active: isPlaying }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${item.active ? 'bg-green-500 animate-pulse' : 'bg-gray-300'}`}></div>
                      <span className="text-sm">{item.feature}</span>
                    </div>
                    <Badge variant={item.active ? "default" : "outline"} className="text-xs">
                      {item.active ? "ON" : "OFF"}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Enhanced Bottom Info */}
        <div className="mt-12 space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
              🌍 Dynamic Multilingual Learning Experience
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">For Complete Beginners:</h4>
                <p>
                  Students can start learning entirely in their native language ({selectedLanguage === 'swahili' ? 'Kiswahili' : 'Kinyarwanda'}) 
                  with the AI providing comprehensive support, cultural context, and gradual English introduction.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Adaptive Learning Modes:</h4>
                <p>
                  Choose from Gradual Transition (balanced approach), English Focus (minimal native support), 
                  or Native Support (heavy assistance) - the AI adapts in real-time to learner needs.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-500 max-w-2xl mx-auto">
              This interactive demo simulates real learning sessions where our AI tutor adapts to each student's 
              pace, cultural background, and preferred learning style - all while working offline on basic feature phones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
