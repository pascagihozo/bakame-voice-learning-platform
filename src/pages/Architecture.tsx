
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, Brain, Database, BarChart3, Shield, Zap, Globe, Users, Server, Cloud, Lock } from "lucide-react";

const Architecture = () => {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Technical Architecture
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of how Bakame AI delivers voice-based learning 
            at scale across low-bandwidth networks in the Global South.
          </p>
        </div>

        {/* System Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">System Flow</h2>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-6">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Feature Phone</h3>
                  <p className="text-sm text-gray-600">Student calls toll-free number</p>
                </div>
                
                <div className="text-2xl text-gray-400">→</div>
                
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Local Network</h3>
                  <p className="text-sm text-gray-600">Existing phone infrastructure</p>
                </div>
                
                <div className="text-2xl text-gray-400">→</div>
                
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Server className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2">IVR Gateway</h3>
                  <p className="text-sm text-gray-600">Call routing & processing</p>
                </div>
                
                <div className="text-2xl text-gray-400">→</div>
                
                <div className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Brain className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Bakame AI Platform</h3>
                  <p className="text-sm text-gray-600">AI processing & learning</p>
                </div>
                
                <div className="text-2xl text-gray-400">→</div>
                
                <div className="text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BarChart3 className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Client Dashboard</h3>
                  <p className="text-sm text-gray-600">Analytics & reporting</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Detailed Components */}
        <Tabs defaultValue="voice" className="mb-16">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="voice">Voice Interface</TabsTrigger>
            <TabsTrigger value="ai">AI Engine</TabsTrigger>
            <TabsTrigger value="content">Content System</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

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
                    <span>Speech Processing</span>
                  </CardTitle>
                  <CardDescription>
                    OpenAI Whisper optimized for accented English
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Speech Recognition:</span>
                      <Badge variant="secondary">OpenAI Whisper</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Language Model:</span>
                      <Badge variant="secondary">GPT-4 Turbo</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Text-to-Speech:</span>
                      <Badge variant="secondary">ElevenLabs</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Response Time:</span>
                      <Badge variant="outline">&lt;4 seconds</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-yellow-600" />
                    <span>AI Capabilities</span>
                  </CardTitle>
                  <CardDescription>
                    Advanced learning personalization and adaptation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm">Custom prompts for A1-A2 CEFR levels</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm">Conversation state management</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm">Adaptive difficulty adjustment</span>
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
