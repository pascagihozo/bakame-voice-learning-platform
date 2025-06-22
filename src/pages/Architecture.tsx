import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, Brain, Database, BarChart3, Shield, Zap, Globe, Users, Server, Cloud, Lock, Languages } from "lucide-react";
import InteractiveArchitectureDiagram from "@/components/InteractiveArchitectureDiagram";
import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

const Architecture = () => {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Technical Architecture
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of how Bakame AI delivers multilingual voice-based learning 
            at scale across low-bandwidth networks in the Global South.
          </p>
        </div>
        {/* Simulation Modal Trigger */}
        <div className="flex justify-center mb-12">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg font-semibold shadow hover:from-blue-700 hover:to-green-700 transition">
                Simulate System Architecture
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-[1600px] min-w-[1200px] w-[90vw] h-[650px] p-0 bg-transparent border-none shadow-none flex flex-col items-center justify-center">
              <div className="w-full flex flex-col items-center justify-center">
                <div className="w-full flex justify-end pr-8 pt-4">
                  <button onClick={() => setExpanded(true)} className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-sm font-semibold shadow">Expand View</button>
                </div>
                <InteractiveArchitectureDiagram onAutoEnd={() => {}} />
              </div>
            </DialogContent>
          </Dialog>
          {/* Expanded Modal */}
          <Dialog open={expanded} onOpenChange={setExpanded}>
            <DialogContent className="w-[98vw] h-[95vh] max-w-none max-h-none p-0 bg-white border-none shadow-2xl flex flex-col items-center justify-center z-50">
              <div className="w-full flex flex-col items-center justify-center">
                <div className="w-full flex justify-end pr-8 pt-4">
                  <button onClick={() => setExpanded(false)} className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-sm font-semibold shadow">Close Expanded View</button>
                </div>
                <InteractiveArchitectureDiagram onAutoEnd={() => {}} expanded />
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* System Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Multilingual Learning Flow</h2>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-6">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Student Calls</h3>
                  <p className="text-sm text-gray-600">Speaks native language (Swahili/Kinyarwanda)</p>
                </div>
                
                <div className="text-2xl text-gray-400">→</div>
                
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Language Detection</h3>
                  <p className="text-sm text-gray-600">AI identifies and adapts to native language</p>
                </div>
                
                <div className="text-2xl text-gray-400">→</div>
                
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Brain className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Smart Assessment</h3>
                  <p className="text-sm text-gray-600">Evaluates English level & creates plan</p>
                </div>
                
                <div className="text-2xl text-gray-400">→</div>
                
                <div className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Adaptive Teaching</h3>
                  <p className="text-sm text-gray-600">Gradual transition to English usage</p>
                </div>
                
                <div className="text-2xl text-gray-400">→</div>
                
                <div className="text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BarChart3 className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Progress Tracking</h3>
                  <p className="text-sm text-gray-600">Real-time analytics & reporting</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Detailed Components */}
        <Tabs defaultValue="multilingual" className="mb-16">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="multilingual">Multilingual AI</TabsTrigger>
            <TabsTrigger value="voice">Voice Interface</TabsTrigger>
            <TabsTrigger value="ai">AI Engine</TabsTrigger>
            <TabsTrigger value="content">Content System</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="multilingual" className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Globe className="w-5 h-5 text-green-600" />
                    <span>Native Language Support</span>
                  </CardTitle>
                  <CardDescription>
                    Intelligent language detection and adaptive learning progression
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Primary Languages:</span>
                      <Badge variant="secondary">Swahili, Kinyarwanda</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Detection Method:</span>
                      <Badge variant="secondary">AI-powered analysis</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Adaptation Speed:</span>
                      <Badge variant="outline">Real-time</Badge>
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

        {/* Security & Compliance */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Security & Compliance</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Data Sovereignty</CardTitle>
                <CardDescription>
                  In-country data storage options for government clients
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Lock className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Privacy Protection</CardTitle>
                <CardDescription>
                  No personal data storage, only anonymized learning metrics
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <BarChart3 className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>GDPR Ready</CardTitle>
                <CardDescription>
                  Compliant architecture adaptable to local regulations
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Infrastructure Requirements */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Infrastructure Specifications</h2>
          <Card>
            <CardContent className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-4 px-4 font-semibold">Component</th>
                      <th className="text-left py-4 px-4 font-semibold">Specification</th>
                      <th className="text-left py-4 px-4 font-semibold">Initial Capacity</th>
                      <th className="text-left py-4 px-4 font-semibold">Scale Target</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b">
                      <td className="py-4 px-4 font-medium">Concurrent Calls</td>
                      <td className="py-4 px-4 text-gray-600">Load-balanced IVR</td>
                      <td className="py-4 px-4">100-1,000</td>
                      <td className="py-4 px-4">10,000+</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4 font-medium">Response Latency</td>
                      <td className="py-4 px-4 text-gray-600">AI Processing</td>
                      <td className="py-4 px-4">&lt;4 seconds</td>
                      <td className="py-4 px-4">Maintained at scale</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4 font-medium">Audio Storage</td>
                      <td className="py-4 px-4 text-gray-600">Auto-scaling cloud</td>
                      <td className="py-4 px-4">50GB</td>
                      <td className="py-4 px-4">Unlimited scaling</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4 font-medium">Database</td>
                      <td className="py-4 px-4 text-gray-600">PostgreSQL cluster</td>
                      <td className="py-4 px-4">Horizontal scaling</td>
                      <td className="py-4 px-4">Ready for millions</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-medium">API Gateway</td>
                      <td className="py-4 px-4 text-gray-600">Load-balanced FastAPI</td>
                      <td className="py-4 px-4">Auto-scaling containers</td>
                      <td className="py-4 px-4">Global distribution</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Implementation Timeline */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Implementation Timeline</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-lg text-blue-800">Months 1-2</CardTitle>
                <CardDescription>Foundation Setup</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2 text-sm">
                  <li>• Architecture finalization</li>
                  <li>• Infrastructure setup</li>
                  <li>• Core platform development</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="bg-green-50">
                <CardTitle className="text-lg text-green-800">Months 3-4</CardTitle>
                <CardDescription>Core Development</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2 text-sm">
                  <li>• AI integration</li>
                  <li>• IVR system</li>
                  <li>• Content management</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="bg-purple-50">
                <CardTitle className="text-lg text-purple-800">Months 5-6</CardTitle>
                <CardDescription>Beta Launch</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2 text-sm">
                  <li>• Pilot school deployment</li>
                  <li>• Analytics platform</li>
                  <li>• Government dashboards</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="bg-orange-50">
                <CardTitle className="text-lg text-orange-800">Months 7-12</CardTitle>
                <CardDescription>Scale & Optimize</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2 text-sm">
                  <li>• National partnerships</li>
                  <li>• Feature iterations</li>
                  <li>• Expansion support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Key Differentiators */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Differentiators</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>True Offline Capability</CardTitle>
                <CardDescription>
                  No internet required by end users, only voice calling
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>AI-Powered Personalization</CardTitle>
                <CardDescription>
                  Adaptive learning without human instructors
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle>Government-Ready</CardTitle>
                <CardDescription>
                  Built for scale with robust reporting and compliance
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Architecture;
