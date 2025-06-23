import React from 'react';
import { Phone, Globe, Database, Cloud, Shield, Zap, Users, Server, Lock, Languages, Volume2, Mic, Headphones, Brain, BarChart3, MessageCircle, ArrowRight, CheckCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SystemFlowDiagram = () => {
  return (
    <div className="space-y-12">
      {/* Enhanced Main Flow Diagram */}
      <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-green-50">
        <CardHeader className="pb-6">
          <CardTitle className="text-2xl sm:text-3xl text-center bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Complete System Architecture & Data Flow
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 lg:p-8">
          <div className="space-y-16 lg:space-y-20">
            {/* Layer 1: User Interface & Device Layer */}
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-bold mb-8 text-blue-800 flex items-center justify-center gap-3">
                <Phone className="w-6 h-6" />
                Layer 1: Device & Access Points
              </h3>
              <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 lg:space-x-12">
                <div className="bg-blue-50 p-6 sm:p-8 rounded-xl border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-xs">
                  <Phone className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600 mx-auto mb-4" />
                  <div className="text-base font-bold mb-2">Feature Phone</div>
                  <div className="text-sm text-gray-600 mb-3">Basic calling capability</div>
                  <Badge variant="outline" className="text-xs">No internet required</Badge>
                </div>
                <ArrowRight className="text-3xl lg:text-4xl text-blue-400 hidden lg:block animate-pulse" />
                <div className="bg-green-50 p-6 sm:p-8 rounded-xl border-2 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-xs">
                  <Globe className="w-12 h-12 sm:w-16 sm:h-16 text-green-600 mx-auto mb-4" />
                  <div className="text-base font-bold mb-2">Cellular Network</div>
                  <div className="text-sm text-gray-600 mb-3">2G/3G/4G/5G</div>
                  <Badge variant="outline" className="text-xs">Voice calls</Badge>
                </div>
                <ArrowRight className="text-3xl lg:text-4xl text-green-400 hidden lg:block animate-pulse" />
                <div className="bg-purple-50 p-6 sm:p-8 rounded-xl border-2 border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-xs">
                  <Server className="w-12 h-12 sm:w-16 sm:h-16 text-purple-600 mx-auto mb-4" />
                  <div className="text-base font-bold mb-2">Telecom Gateway</div>
                  <div className="text-sm text-gray-600 mb-3">Call routing</div>
                  <Badge variant="outline" className="text-xs">SIP/VoIP</Badge>
                </div>
              </div>
            </div>

            {/* Layer 2: Communication & Processing Gateway */}
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-bold mb-8 text-green-800 flex items-center justify-center gap-3">
                <MessageCircle className="w-6 h-6" />
                Layer 2: Communication Gateway & Voice Processing
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                <div className="bg-orange-50 p-6 rounded-xl border border-orange-200 shadow-md hover:shadow-lg transition-all duration-300">
                  <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 text-orange-600 mx-auto mb-4" />
                  <div className="text-sm font-bold mb-2">IVR System</div>
                  <div className="text-xs text-gray-600 mb-3">Call routing & menu</div>
                  <Badge variant="secondary" className="text-xs">Twilio/Asterisk</Badge>
                </div>
                <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 shadow-md hover:shadow-lg transition-all duration-300">
                  <Mic className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-600 mx-auto mb-4" />
                  <div className="text-sm font-bold mb-2">Audio Capture</div>
                  <div className="text-xs text-gray-600 mb-3">8kHz optimization</div>
                  <Badge variant="secondary" className="text-xs">Real-time</Badge>
                </div>
                <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200 shadow-md hover:shadow-lg transition-all duration-300">
                  <Languages className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-600 mx-auto mb-4" />
                  <div className="text-sm font-bold mb-2">Language Detection</div>
                  <div className="text-xs text-gray-600 mb-3">Auto-detect native</div>
                  <Badge variant="secondary" className="text-xs">ML-based</Badge>
                </div>
                <div className="bg-teal-50 p-6 rounded-xl border border-teal-200 shadow-md hover:shadow-lg transition-all duration-300">
                  <Headphones className="w-8 h-8 sm:w-10 sm:h-10 text-teal-600 mx-auto mb-4" />
                  <div className="text-sm font-bold mb-2">Audio Output</div>
                  <div className="text-xs text-gray-600 mb-3">Voice synthesis</div>
                  <Badge variant="secondary" className="text-xs">Multi-accent</Badge>
                </div>
              </div>
            </div>

            {/* Layer 3: Third-Party AI Services */}
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-bold mb-8 text-purple-800 flex items-center justify-center gap-3">
                <Brain className="w-6 h-6" />
                Layer 3: AI Processing Engine (Third-Party APIs)
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 sm:p-8 rounded-xl border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Cloud className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-base font-bold mb-3">OpenAI Whisper API</div>
                  <div className="text-sm text-gray-600 mb-4">Speech Recognition</div>
                  <div className="space-y-3 text-xs">
                    <div className="bg-white p-3 rounded-lg border shadow-sm">
                      <strong>Input:</strong> Audio stream (8kHz)
                    </div>
                    <div className="bg-white p-3 rounded-lg border shadow-sm">
                      <strong>Process:</strong> Multi-language transcription
                    </div>
                    <div className="bg-white p-3 rounded-lg border shadow-sm">
                      <strong>Output:</strong> Text + language confidence
                    </div>
                  </div>
                  <Badge variant="outline" className="mt-4 text-xs">API Key Required</Badge>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 sm:p-8 rounded-xl border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Brain className="w-10 h-10 sm:w-12 sm:h-12 text-green-600 mx-auto mb-4" />
                  <div className="text-base font-bold mb-3">OpenAI GPT-4 API</div>
                  <div className="text-sm text-gray-600 mb-4">Language Processing & Learning</div>
                  <div className="space-y-3 text-xs">
                    <div className="bg-white p-3 rounded-lg border shadow-sm">
                      <strong>Input:</strong> User text + context
                    </div>
                    <div className="bg-white p-3 rounded-lg border shadow-sm">
                      <strong>Process:</strong> Adaptive lesson generation
                    </div>
                    <div className="bg-white p-3 rounded-lg border shadow-sm">
                      <strong>Output:</strong> Personalized responses
                    </div>
                  </div>
                  <Badge variant="outline" className="mt-4 text-xs">Custom Prompts</Badge>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-6 sm:p-8 rounded-xl border border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Volume2 className="w-10 h-10 sm:w-12 sm:h-12 text-purple-600 mx-auto mb-4" />
                  <div className="text-base font-bold mb-3">ElevenLabs API</div>
                  <div className="text-sm text-gray-600 mb-4">Text-to-Speech</div>
                  <div className="space-y-3 text-xs">
                    <div className="bg-white p-3 rounded-lg border shadow-sm">
                      <strong>Input:</strong> Text + voice preferences
                    </div>
                    <div className="bg-white p-3 rounded-lg border shadow-sm">
                      <strong>Process:</strong> Natural voice synthesis
                    </div>
                    <div className="bg-white p-3 rounded-lg border shadow-sm">
                      <strong>Output:</strong> Audio stream
                    </div>
                  </div>
                  <Badge variant="outline" className="mt-4 text-xs">Native Accents</Badge>
                </div>
              </div>
            </div>

            {/* Layer 4: Core Application Logic */}
            <div className="text-center">
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-orange-800">Layer 4: Application Logic & Business Rules</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-200">
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-600 mx-auto mb-3" />
                  <div className="text-sm font-medium mb-2">Learning Engine</div>
                  <div className="text-xs text-gray-600 mb-2">Adaptive curriculum</div>
                  <div className="text-xs text-gray-500 space-y-1">
                    <div>• Progress tracking</div>
                    <div>• Difficulty adjustment</div>
                    <div>• Cultural context</div>
                  </div>
                </div>
                <div className="bg-rose-50 p-4 rounded-lg border border-rose-200">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-rose-600 mx-auto mb-3" />
                  <div className="text-sm font-medium mb-2">User Management</div>
                  <div className="text-xs text-gray-600 mb-2">Profile & sessions</div>
                  <div className="text-xs text-gray-500 space-y-1">
                    <div>• Authentication</div>
                    <div>• Session state</div>
                    <div>• Preferences</div>
                  </div>
                </div>
                <div className="bg-violet-50 p-4 rounded-lg border border-violet-200">
                  <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-violet-600 mx-auto mb-3" />
                  <div className="text-sm font-medium mb-2">Conversation Manager</div>
                  <div className="text-xs text-gray-600 mb-2">Flow control</div>
                  <div className="text-xs text-gray-500 space-y-1">
                    <div>• Context memory</div>
                    <div>• Turn management</div>
                    <div>• Error handling</div>
                  </div>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600 mx-auto mb-3" />
                  <div className="text-sm font-medium mb-2">Analytics Engine</div>
                  <div className="text-xs text-gray-600 mb-2">Learning insights</div>
                  <div className="text-xs text-gray-500 space-y-1">
                    <div>• Progress metrics</div>
                    <div>• Usage patterns</div>
                    <div>• Performance data</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Layer 5: Data Storage & External Integrations */}
            <div className="text-center">
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-red-800">Layer 5: Data Storage & Government Integration</h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div className="bg-slate-50 p-4 sm:p-6 rounded-lg border border-slate-200">
                  <Database className="w-8 h-8 sm:w-10 sm:h-10 text-slate-600 mx-auto mb-3" />
                  <div className="text-sm font-bold mb-2">Primary Database</div>
                  <div className="text-xs text-gray-600 mb-3">PostgreSQL</div>
                  <div className="space-y-2 text-xs">
                    <div className="bg-white p-2 rounded border">User profiles & progress</div>
                    <div className="bg-white p-2 rounded border">Multilingual content</div>
                    <div className="bg-white p-2 rounded border">Session recordings</div>
                    <div className="bg-white p-2 rounded border">Analytics data</div>
                  </div>
                </div>

                <div className="bg-emerald-50 p-4 sm:p-6 rounded-lg border border-emerald-200">
                  <Globe className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-600 mx-auto mb-3" />
                  <div className="text-sm font-bold mb-2">Government APIs</div>
                  <div className="text-xs text-gray-600 mb-3">Ministry of Education</div>
                  <div className="space-y-2 text-xs">
                    <div className="bg-white p-2 rounded border">Student enrollment</div>
                    <div className="bg-white p-2 rounded border">Progress reporting</div>
                    <div className="bg-white p-2 rounded border">Curriculum alignment</div>
                    <div className="bg-white p-2 rounded border">Certificate issuance</div>
                  </div>
                </div>

                <div className="bg-orange-50 p-4 sm:p-6 rounded-lg border border-orange-200">
                  <BarChart3 className="w-8 h-8 sm:w-10 sm:h-10 text-orange-600 mx-auto mb-3" />
                  <div className="text-sm font-bold mb-2">Reporting Dashboard</div>
                  <div className="text-xs text-gray-600 mb-3">Real-time Analytics</div>
                  <div className="space-y-2 text-xs">
                    <div className="bg-white p-2 rounded border">Usage statistics</div>
                    <div className="bg-white p-2 rounded border">Learning outcomes</div>
                    <div className="bg-white p-2 rounded border">System performance</div>
                    <div className="bg-white p-2 rounded border">Cost analysis</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Interactive Data Flow Diagram */}
      <Card className="border-0 shadow-xl bg-gradient-to-br from-gray-50 to-blue-50">
        <CardHeader className="pb-6">
          <CardTitle className="text-xl sm:text-2xl bg-gradient-to-r from-gray-700 to-blue-700 bg-clip-text text-transparent">
            Real-time Data Flow & Component Interaction
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 lg:p-8">
          <div className="space-y-10">
            {/* Step-by-step interaction flow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { num: 1, title: "Call Initiated", items: ["User dials number", "IVR picks up", "Session created"], color: "blue" },
                { num: 2, title: "Audio Processing", items: ["Whisper API called", "Language detected", "Text extracted"], color: "green" },
                { num: 3, title: "AI Processing", items: ["GPT-4 analyzes", "Context retrieved", "Response generated"], color: "purple" },
                { num: 4, title: "Voice Synthesis", items: ["ElevenLabs TTS", "Native accent", "Audio generated"], color: "orange" },
                { num: 5, title: "Learning Update", items: ["Progress saved", "Analytics updated", "Next lesson prep"], color: "red" }
              ].map((step, index) => (
                <div key={index} className={`text-center p-6 bg-gradient-to-br from-${step.color}-50 to-${step.color}-100 rounded-xl border shadow-lg hover:shadow-xl transition-all duration-300`}>
                  <div className={`text-2xl sm:text-3xl font-bold text-${step.color}-600 mb-3 bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto shadow-md`}>{step.num}</div>
                  <div className="text-sm font-bold mb-3">{step.title}</div>
                  <div className="text-xs text-gray-600 space-y-2">
                    {step.items.map((item, i) => (
                      <div key={i} className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Resource Requirements */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 sm:p-8 rounded-xl shadow-inner">
              <h4 className="font-bold text-gray-900 mb-6 text-lg flex items-center gap-3">
                <BarChart3 className="w-6 h-6" />
                System Resource Requirements & Third-Party Dependencies
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h5 className="font-bold text-gray-800 text-base">External APIs & Services</h5>
                  <div className="space-y-3 text-sm">
                    {[
                      { service: "OpenAI API", cost: "$0.01-0.03/1K tokens" },
                      { service: "ElevenLabs TTS", cost: "$0.30/1K chars" },
                      { service: "Twilio Voice", cost: "$0.013/min" },
                      { service: "AWS/GCP Hosting", cost: "Variable" }
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col sm:flex-row sm:justify-between p-3 bg-white rounded-lg border shadow-sm gap-2">
                        <span className="font-medium">{item.service}</span>
                        <Badge variant="secondary" className="text-xs w-fit">{item.cost}</Badge>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-6">
                  <h5 className="font-bold text-gray-800 text-base">Infrastructure Components</h5>
                  <div className="space-y-3 text-sm">
                    {[
                      { component: "Load Balancer", spec: "High Availability" },
                      { component: "Database Cluster", spec: "PostgreSQL" },
                      { component: "Cache Layer", spec: "Redis" },
                      { component: "Monitoring", spec: "DataDog/NewRelic" }
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col sm:flex-row sm:justify-between p-3 bg-white rounded-lg border shadow-sm gap-2">
                        <span className="font-medium">{item.component}</span>
                        <Badge variant="secondary" className="text-xs w-fit">{item.spec}</Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Technical Implementation Details */}
      <Card className="border-0 shadow-xl">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg sm:text-xl">Component Integration & API Workflow</CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Request Flow (User → AI → User)</h4>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <strong className="text-sm">1. Voice Input Processing</strong>
                  <p className="text-gray-600 mt-1 text-xs">Audio → Whisper API → Text + Language Detection</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <strong className="text-sm">2. Context Assembly</strong>
                  <p className="text-gray-600 mt-1 text-xs">User history + Current text + Learning level → Context object</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <strong className="text-sm">3. AI Generation</strong>
                  <p className="text-gray-600 mt-1 text-xs">Context → GPT-4 API → Adaptive lesson response</p>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                  <strong className="text-sm">4. Voice Synthesis</strong>
                  <p className="text-gray-600 mt-1 text-xs">Text response → ElevenLabs API → Audio stream</p>
                </div>
                <div className="p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <strong className="text-sm">5. Data Persistence</strong>
                  <p className="text-gray-600 mt-1 text-xs">Session data → Database → Analytics update</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Error Handling & Fallbacks</h4>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-yellow-50 rounded-lg border">
                  <strong className="text-sm">API Failure Handling</strong>
                  <ul className="text-gray-600 mt-1 list-disc list-inside text-xs space-y-1">
                    <li>Cached responses for common phrases</li>
                    <li>Offline voice synthesis fallback</li>
                    <li>Progressive degradation of features</li>
                  </ul>
                </div>
                <div className="p-3 bg-cyan-50 rounded-lg border">
                  <strong className="text-sm">Network Issues</strong>
                  <ul className="text-gray-600 mt-1 list-disc list-inside text-xs space-y-1">
                    <li>Call quality adaptation</li>
                    <li>Retry mechanisms with backoff</li>
                    <li>Graceful session termination</li>
                  </ul>
                </div>
                <div className="p-3 bg-pink-50 rounded-lg border">
                  <strong className="text-sm">Language Detection Errors</strong>
                  <ul className="text-gray-600 mt-1 list-disc list-inside text-xs space-y-1">
                    <li>Manual language selection option</li>
                    <li>Confidence threshold checking</li>
                    <li>Multi-language response support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SystemFlowDiagram;
