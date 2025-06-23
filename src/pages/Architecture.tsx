import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, Brain, Database, BarChart3, Shield, Zap, Globe, Users, Server, Cloud, Lock, Languages, ArrowRight, CheckCircle, Star } from "lucide-react";
import InteractiveArchitectureDiagram from "@/components/InteractiveArchitectureDiagram";
import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const Architecture = () => {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="min-h-screen py-4 sm:py-6 lg:py-8 px-2 sm:px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4 px-2">
            Technical Architecture
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto px-2 leading-relaxed">
            A comprehensive overview of how Bakame AI delivers multilingual voice-based learning 
            at scale across low-bandwidth networks in the Global South.
          </p>
        </div>

        {/* Enhanced Simulation Modal Trigger */}
        <div className="flex justify-center mb-12 sm:mb-16 px-2">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <button className="w-full sm:w-auto px-8 sm:px-10 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl font-bold shadow-lg hover:from-blue-700 hover:to-green-700 hover:shadow-xl transition-all duration-300 text-base sm:text-lg transform hover:scale-105">
                🚀 Simulate System Architecture
              </button>
            </DialogTrigger>
            <DialogContent className="w-[95vw] sm:w-[90vw] lg:w-[1200px] xl:w-[1400px] 2xl:w-[1600px] max-w-[95vw] h-[70vh] sm:h-[80vh] lg:h-[650px] p-2 sm:p-4 bg-white border shadow-xl flex flex-col">
              <DialogTitle className="text-sm sm:text-lg font-semibold text-gray-800">Interactive System Architecture</DialogTitle>
              <DialogDescription className="text-xs sm:text-sm text-gray-600">Explore the complete system flow and architecture</DialogDescription>
              <div className="w-full flex flex-col items-center justify-center h-full">
                <div className="w-full flex justify-between items-center px-2 sm:px-4 py-2 mb-2">
                  <button 
                    onClick={() => setExpanded(true)} 
                    className="px-2 sm:px-4 py-1 sm:py-2 bg-gray-200 hover:bg-gray-300 rounded text-xs sm:text-sm font-semibold shadow"
                  >
                    Expand View
                  </button>
                </div>
                <div className="flex-1 w-full overflow-auto">
                  <InteractiveArchitectureDiagram onAutoEnd={() => {}} />
                </div>
              </div>
            </DialogContent>
          </Dialog>
          
          {/* Enhanced Expanded Modal */}
          <Dialog open={expanded} onOpenChange={setExpanded}>
            <DialogContent className="w-[98vw] h-[95vh] max-w-none max-h-none p-1 sm:p-2 bg-white border-none shadow-2xl flex flex-col items-center justify-center z-50">
              <DialogTitle className="text-base sm:text-xl font-bold text-gray-800">Full System Architecture View</DialogTitle>
              <DialogDescription className="text-sm text-gray-600">Complete interactive system visualization</DialogDescription>
              <div className="w-full flex flex-col items-center justify-center h-full">
                <div className="w-full flex justify-between items-center px-2 sm:px-8 py-2 sm:py-4">
                  <button 
                    onClick={() => setExpanded(false)} 
                    className="px-3 sm:px-4 py-1 sm:py-2 bg-gray-200 hover:bg-gray-300 rounded text-xs sm:text-sm font-semibold shadow"
                  >
                    Close
                  </button>
                </div>
                <div className="flex-1 w-full overflow-auto">
                  <InteractiveArchitectureDiagram onAutoEnd={() => {}} expanded />
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Enhanced Multilingual Learning Flow */}
        <section className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            🌍 Multilingual Learning Flow
          </h2>
          <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 via-white to-green-50">
            <CardContent className="p-6 sm:p-8 lg:p-12">
              <div className="space-y-8">
                {/* Main Flow Visualization */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-4 items-center">
                  {[
                    { 
                      icon: Phone, 
                      title: "Student Calls", 
                      desc: "Speaks native language", 
                      detail: "Swahili/Kinyarwanda", 
                      color: "blue",
                      accent: "🇷🇼"
                    },
                    { 
                      icon: Globe, 
                      title: "Language Detection", 
                      desc: "AI identifies & adapts", 
                      detail: "Real-time analysis", 
                      color: "green",
                      accent: "🧠"
                    },
                    { 
                      icon: Brain, 
                      title: "Smart Assessment", 
                      desc: "Evaluates English level", 
                      detail: "Creates learning plan", 
                      color: "purple",
                      accent: "📊"
                    },
                    { 
                      icon: Zap, 
                      title: "Adaptive Teaching", 
                      desc: "Gradual transition", 
                      detail: "Native → English", 
                      color: "orange",
                      accent: "🎯"
                    },
                    { 
                      icon: BarChart3, 
                      title: "Progress Tracking", 
                      desc: "Real-time analytics", 
                      detail: "Government reporting", 
                      color: "red",
                      accent: "📈"
                    }
                  ].map((item, index) => (
                    <div key={index} className="text-center group">
                      <div className={`bg-${item.color}-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                        <item.icon className={`w-8 h-8 sm:w-10 sm:h-10 text-${item.color}-600`} />
                      </div>
                      <div className="text-2xl mb-2">{item.accent}</div>
                      <h3 className="font-bold mb-2 text-sm sm:text-base">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-600 mb-1">{item.desc}</p>
                      <p className="text-xs text-gray-500 font-medium">{item.detail}</p>
                      {index < 4 && (
                        <div className="hidden lg:flex justify-center mt-4">
                          <ArrowRight className="text-2xl text-gray-400 animate-pulse" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Language Progression Visualization */}
                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 sm:p-8 rounded-xl border">
                  <h3 className="text-lg sm:text-xl font-bold text-center mb-6 flex items-center justify-center gap-3">
                    <Languages className="w-6 h-6" />
                    Language Learning Progression
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { 
                        level: "Beginner", 
                        native: "80%", 
                        english: "20%", 
                        color: "blue",
                        example: "Muraho! Let's learn 'Hello' in English"
                      },
                      { 
                        level: "Intermediate", 
                        native: "50%", 
                        english: "50%", 
                        color: "purple",
                        example: "Now we mix: 'Good morning' ni 'Muraho'"
                      },
                      { 
                        level: "Advanced", 
                        native: "20%", 
                        english: "80%", 
                        color: "green",
                        example: "Perfect! You can have full English conversations!"
                      }
                    ].map((stage, index) => (
                      <div key={index} className={`bg-${stage.color}-50 p-6 rounded-xl border border-${stage.color}-200 shadow-md`}>
                        <div className="text-center mb-4">
                          <h4 className="font-bold text-base mb-2">{stage.level}</h4>
                          <div className="flex justify-center gap-4 mb-3">
                            <div className="text-sm">
                              <div className="text-xs text-gray-600">Native</div>
                              <div className="font-bold text-blue-600">{stage.native}</div>
                            </div>
                            <div className="text-sm">
                              <div className="text-xs text-gray-600">English</div>
                              <div className="font-bold text-green-600">{stage.english}</div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white p-3 rounded-lg border text-xs italic text-gray-700">
                          "{stage.example}"
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Detailed Components - Mobile Responsive Tabs */}
        <Tabs defaultValue="multilingual" className="mb-12 sm:mb-16">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 h-auto">
            <TabsTrigger value="multilingual" className="text-xs sm:text-sm p-2 sm:p-3">Multilingual AI</TabsTrigger>
            <TabsTrigger value="voice" className="text-xs sm:text-sm p-2 sm:p-3">Voice Interface</TabsTrigger>
            <TabsTrigger value="ai" className="text-xs sm:text-sm p-2 sm:p-3">AI Engine</TabsTrigger>
            <TabsTrigger value="content" className="text-xs sm:text-sm p-2 sm:p-3">Content System</TabsTrigger>
            <TabsTrigger value="analytics" className="text-xs sm:text-sm p-2 sm:p-3">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="multilingual" className="mt-6 sm:mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <Card>
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                    <span>Native Language Support</span>
                  </CardTitle>
                  <CardDescription className="text-sm">
                    Intelligent language detection and adaptive learning progression
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:justify-between space-y-1 sm:space-y-0">
                      <span className="text-sm text-gray-600">Primary Languages:</span>
                      <Badge variant="secondary" className="text-xs w-fit">Swahili, Kinyarwanda</Badge>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between space-y-1 sm:space-y-0">
                      <span className="text-sm text-gray-600">Detection Method:</span>
                      <Badge variant="secondary" className="text-xs w-fit">AI-powered analysis</Badge>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between space-y-1 sm:space-y-0">
                      <span className="text-sm text-gray-600">Adaptation Speed:</span>
                      <Badge variant="outline" className="text-xs w-fit">Real-time</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Brain className="w-5 h-5 text-purple-600" />
                    <span>Progressive Learning</span>
                  </CardTitle>
                  <CardDescription>
                    Gradual transition from native language to English immersion
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm">Start: 80% native, 20% English</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm">Middle: 50% native, 50% English</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm">Advanced: 20% native, 80% English</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="voice" className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span>IVR Integration</span>
                  </CardTitle>
                  <CardDescription>
                    Twilio Programmable Voice or local telco APIs for seamless connectivity
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Concurrent Calls:</span>
                      <Badge variant="secondary">100-1,000 initial</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Scalability:</span>
                      <Badge variant="secondary">10,000+ at scale</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Audio Quality:</span>
                      <Badge variant="secondary">8 kHz optimized</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Globe className="w-5 h-5 text-green-600" />
                    <span>Multi-Language Support</span>
                  </CardTitle>
                  <CardDescription>
                    Initial focus on English with local language instructions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Intelligent call routing</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Quality optimization for low-bandwidth</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Regional accent adaptation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="ai" className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Brain className="w-5 h-5 text-purple-600" />
                    <span>Multilingual Speech Processing</span>
                  </CardTitle>
                  <CardDescription>
                    Advanced AI for cross-language learning optimization
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Speech Recognition:</span>
                      <Badge variant="secondary">Whisper Multilingual</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Language Model:</span>
                      <Badge variant="secondary">GPT-4 Multilingual</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Text-to-Speech:</span>
                      <Badge variant="secondary">ElevenLabs Native</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Response Time:</span>
                      <Badge variant="outline">&lt;3 seconds</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-yellow-600" />
                    <span>Smart Learning Engine</span>
                  </CardTitle>
                  <CardDescription>
                    Adaptive curriculum based on native language patterns
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm">Language transfer analysis</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm">Cultural context integration</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm">Pronunciation coaching</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="content" className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Database className="w-5 h-5 text-indigo-600" />
                    <span>Curriculum Database</span>
                  </CardTitle>
                  <CardDescription>
                    Structured lessons aligned with local education standards
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Database:</span>
                      <Badge variant="secondary">PostgreSQL cluster</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Audio Storage:</span>
                      <Badge variant="secondary">50GB initial</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Scaling:</span>
                      <Badge variant="secondary">Auto-scaling cloud</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span>Content Management</span>
                  </CardTitle>
                  <CardDescription>
                    Dynamic content delivery and government integration
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">AI-selected content based on progress</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">Offline fallbacks for interruptions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">Government content integration</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="w-5 h-5 text-green-600" />
                    <span>Government Dashboards</span>
                  </CardTitle>
                  <CardDescription>
                    Regional usage statistics and learning outcomes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Real-time usage statistics</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Learning outcome tracking</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Demographic insights</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Cloud className="w-5 h-5 text-purple-600" />
                    <span>API Integration</span>
                  </CardTitle>
                  <CardDescription>
                    Real-time data feeds and system integration
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">API Gateway:</span>
                      <Badge variant="secondary">Load-balanced FastAPI</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Containers:</span>
                      <Badge variant="secondary">Auto-scaling</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Privacy:</span>
                      <Badge variant="outline">Anonymized data</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Security & Compliance - Mobile Grid */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Security & Compliance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <Card className="text-center">
              <CardHeader className="p-4 sm:p-6">
                <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mx-auto mb-3 sm:mb-4" />
                <CardTitle className="text-base sm:text-lg">Data Sovereignty</CardTitle>
                <CardDescription className="text-sm">
                  In-country data storage options for government clients
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader className="p-4 sm:p-6">
                <Lock className="w-10 h-10 sm:w-12 sm:h-12 text-green-600 mx-auto mb-3 sm:mb-4" />
                <CardTitle className="text-base sm:text-lg">Privacy Protection</CardTitle>
                <CardDescription className="text-sm">
                  No personal data storage, only anonymized learning metrics
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader className="p-4 sm:p-6">
                <BarChart3 className="w-10 h-10 sm:w-12 sm:h-12 text-purple-600 mx-auto mb-3 sm:mb-4" />
                <CardTitle className="text-base sm:text-lg">GDPR Ready</CardTitle>
                <CardDescription className="text-sm">
                  Compliant architecture adaptable to local regulations
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Infrastructure Requirements - Mobile Responsive Table */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Infrastructure Specifications</h2>
          <Card>
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 sm:py-4 px-2 sm:px-4 font-semibold text-sm sm:text-base">Component</th>
                      <th className="text-left py-3 sm:py-4 px-2 sm:px-4 font-semibold text-sm sm:text-base">Specification</th>
                      <th className="text-left py-3 sm:py-4 px-2 sm:px-4 font-semibold text-sm sm:text-base">Initial Capacity</th>
                      <th className="text-left py-3 sm:py-4 px-2 sm:px-4 font-semibold text-sm sm:text-base">Scale Target</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs sm:text-sm">
                    {[
                      { component: "Concurrent Calls", spec: "Load-balanced IVR", initial: "100-1,000", scale: "10,000+" },
                      { component: "Response Latency", spec: "AI Processing", initial: "<4 seconds", scale: "Maintained at scale" },
                      { component: "Audio Storage", spec: "Auto-scaling cloud", initial: "50GB", scale: "Unlimited scaling" },
                      { component: "Database", spec: "PostgreSQL cluster", initial: "Horizontal scaling", scale: "Ready for millions" },
                      { component: "API Gateway", spec: "Load-balanced FastAPI", initial: "Auto-scaling containers", scale: "Global distribution" }
                    ].map((row, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3 sm:py-4 px-2 sm:px-4 font-medium">{row.component}</td>
                        <td className="py-3 sm:py-4 px-2 sm:px-4 text-gray-600">{row.spec}</td>
                        <td className="py-3 sm:py-4 px-2 sm:px-4">{row.initial}</td>
                        <td className="py-3 sm:py-4 px-2 sm:px-4">{row.scale}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Implementation Timeline - Mobile Grid */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Implementation Timeline</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { months: "Months 1-2", title: "Foundation Setup", color: "blue", items: ["Architecture finalization", "Infrastructure setup", "Core platform development"] },
              { months: "Months 3-4", title: "Core Development", color: "green", items: ["AI integration", "IVR system", "Content management"] },
              { months: "Months 5-6", title: "Beta Launch", color: "purple", items: ["Pilot school deployment", "Analytics platform", "Government dashboards"] },
              { months: "Months 7-12", title: "Scale & Optimize", color: "orange", items: ["National partnerships", "Feature iterations", "Expansion support"] }
            ].map((phase, index) => (
              <Card key={index}>
                <CardHeader className={`bg-${phase.color}-50 p-4 sm:p-6`}>
                  <CardTitle className={`text-base sm:text-lg text-${phase.color}-800`}>{phase.months}</CardTitle>
                  <CardDescription className="text-sm">{phase.title}</CardDescription>
                </CardHeader>
                <CardContent className="pt-3 sm:pt-4 p-4 sm:p-6">
                  <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                    {phase.items.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Key Differentiators - Mobile Grid */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            ⭐ Key Differentiators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { 
                icon: Phone, 
                title: "True Offline Capability", 
                desc: "No internet required by end users, only voice calling", 
                color: "blue",
                benefit: "Works in remote areas"
              },
              { 
                icon: Brain, 
                title: "AI-Powered Personalization", 
                desc: "Adaptive learning without human instructors", 
                color: "green",
                benefit: "Scales infinitely"
              },
              { 
                icon: Shield, 
                title: "Government-Ready", 
                desc: "Built for scale with robust reporting and compliance", 
                color: "purple",
                benefit: "Policy integration"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <CardHeader className="p-6 sm:p-8">
                  <div className={`bg-${item.color}-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <item.icon className={`w-8 h-8 sm:w-10 sm:h-10 text-${item.color}-600`} />
                  </div>
                  <CardTitle className="text-lg sm:text-xl mb-3">{item.title}</CardTitle>
                  <CardDescription className="text-sm mb-4">
                    {item.desc}
                  </CardDescription>
                  <Badge variant="outline" className={`text-${item.color}-600 border-${item.color}-200`}>
                    {item.benefit}
                  </Badge>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Architecture;
