
import React from 'react';
import { Phone, Globe, Database, Cloud, Shield, Zap, Users, Server, Lock, Languages, Volume2, Mic, Headphones, Brain, BarChart3, MessageCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SystemFlowDiagram = () => {
  return (
    <div className="space-y-12">
      {/* Enhanced Main Flow Diagram */}
      <Card className="border-0 shadow-xl">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl sm:text-2xl text-center">Complete System Architecture & Data Flow</CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 lg:p-8">
          <div className="space-y-12 lg:space-y-16">
            {/* Layer 1: User Interface & Device Layer */}
            <div className="text-center">
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-blue-800">Layer 1: Device & Access Points</h3>
              <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-8">
                <div className="bg-blue-50 p-4 sm:p-6 rounded-lg border-2 border-blue-200 w-full max-w-xs">
                  <Phone className="w-8 h-8 sm:w-12 sm:h-12 text-blue-600 mx-auto mb-3" />
                  <div className="text-sm font-medium mb-1">Feature Phone</div>
                  <div className="text-xs text-gray-600 mb-2">Basic calling capability</div>
                  <Badge variant="outline" className="text-xs">No internet required</Badge>
                </div>
                <div className="text-xl lg:text-2xl text-gray-400 hidden lg:block">↔</div>
                <div className="bg-green-50 p-4 sm:p-6 rounded-lg border-2 border-green-200 w-full max-w-xs">
                  <Globe className="w-8 h-8 sm:w-12 sm:h-12 text-green-600 mx-auto mb-3" />
                  <div className="text-sm font-medium mb-1">Cellular Network</div>
                  <div className="text-xs text-gray-600 mb-2">2G/3G/4G/5G</div>
                  <Badge variant="outline" className="text-xs">Voice calls</Badge>
                </div>
                <div className="text-xl lg:text-2xl text-gray-400 hidden lg:block">→</div>
                <div className="bg-purple-50 p-4 sm:p-6 rounded-lg border-2 border-purple-200 w-full max-w-xs">
                  <Server className="w-8 h-8 sm:w-12 sm:h-12 text-purple-600 mx-auto mb-3" />
                  <div className="text-sm font-medium mb-1">Telecom Gateway</div>
                  <div className="text-xs text-gray-600 mb-2">Call routing</div>
                  <Badge variant="outline" className="text-xs">SIP/VoIP</Badge>
                </div>
              </div>
            </div>

            {/* Layer 2: Communication & Processing Gateway */}
            <div className="text-center">
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-green-800">Layer 2: Communication Gateway & Voice Processing</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600 mx-auto mb-3" />
                  <div className="text-sm font-medium mb-1">IVR System</div>
                  <div className="text-xs text-gray-600 mb-2">Call routing & menu</div>
                  <Badge variant="secondary" className="text-xs">Twilio/Asterisk</Badge>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <Mic className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600 mx-auto mb-3" />
                  <div className="text-sm font-medium mb-1">Audio Capture</div>
                  <div className="text-xs text-gray-600 mb-2">8kHz optimization</div>
                  <Badge variant="secondary" className="text-xs">Real-time</Badge>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                  <Languages className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600 mx-auto mb-3" />
                  <div className="text-sm font-medium mb-1">Language Detection</div>
                  <div className="text-xs text-gray-600 mb-2">Auto-detect native</div>
                  <Badge variant="secondary" className="text-xs">ML-based</Badge>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
                  <Headphones className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600 mx-auto mb-3" />
                  <div className="text-sm font-medium mb-1">Audio Output</div>
                  <div className="text-xs text-gray-600 mb-2">Voice synthesis</div>
                  <Badge variant="secondary" className="text-xs">Multi-accent</Badge>
                </div>
              </div>
            </div>

            {/* Layer 3: Third-Party AI Services */}
            <div className="text-center">
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-purple-800">Layer 3: AI Processing Engine (Third-Party APIs)</h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-6 rounded-lg border border-blue-200">
                  <Cloud className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 mx-auto mb-3" />
                  <div className="text-sm font-bold mb-2">OpenAI Whisper API</div>
                  <div className="text-xs text-gray-600 mb-3">Speech Recognition</div>
                  <div className="space-y-2 text-xs">
                    <div className="bg-white p-2 rounded border">
                      <strong>Input:</strong> Audio stream (8kHz)
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <strong>Process:</strong> Multi-language transcription
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <strong>Output:</strong> Text + language confidence
                    </div>
                  </div>
                  <Badge variant="outline" className="mt-3 text-xs">API Key Required</Badge>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-4 sm:p-6 rounded-lg border border-green-200">
                  <Brain className="w-8 h-8 sm:w-10 sm:h-10 text-green-600 mx-auto mb-3" />
                  <div className="text-sm font-bold mb-2">OpenAI GPT-4 API</div>
                  <div className="text-xs text-gray-600 mb-3">Language Processing & Learning</div>
                  <div className="space-y-2 text-xs">
                    <div className="bg-white p-2 rounded border">
                      <strong>Input:</strong> User text + context
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <strong>Process:</strong> Adaptive lesson generation
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <strong>Output:</strong> Personalized responses
                    </div>
                  </div>
                  <Badge variant="outline" className="mt-3 text-xs">Custom Prompts</Badge>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-4 sm:p-6 rounded-lg border border-purple-200">
                  <Volume2 className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600 mx-auto mb-3" />
                  <div className="text-sm font-bold mb-2">ElevenLabs API</div>
                  <div className="text-xs text-gray-600 mb-3">Text-to-Speech</div>
                  <div className="space-y-2 text-xs">
                    <div className="bg-white p-2 rounded border">
                      <strong>Input:</strong> Text + voice preferences
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <strong>Process:</strong> Natural voice synthesis
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <strong>Output:</strong> Audio stream
                    </div>
                  </div>
                  <Badge variant="outline" className="mt-3 text-xs">Native Accents</Badge>
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

      {/* Interactive Data Flow Diagram */}
      <Card className="border-0 shadow-xl">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg sm:text-xl">Real-time Data Flow & Component Interaction</CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <div className="space-y-8">
            {/* Step-by-step interaction flow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border">
                <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">1</div>
                <div className="text-sm font-medium mb-2">Call Initiated</div>
                <div className="text-xs text-gray-600 space-y-1">
                  <div>• User dials number</div>
                  <div>• IVR picks up</div>
                  <div>• Session created</div>
                </div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border">
                <div className="text-xl sm:text-2xl font-bold text-green-600 mb-2">2</div>
                <div className="text-sm font-medium mb-2">Audio Processing</div>
                <div className="text-xs text-gray-600 space-y-1">
                  <div>• Whisper API called</div>
                  <div>• Language detected</div>
                  <div>• Text extracted</div>
                </div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border">
                <div className="text-xl sm:text-2xl font-bold text-purple-600 mb-2">3</div>
                <div className="text-sm font-medium mb-2">AI Processing</div>
                <div className="text-xs text-gray-600 space-y-1">
                  <div>• GPT-4 analyzes</div>
                  <div>• Context retrieved</div>
                  <div>• Response generated</div>
                </div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border">
                <div className="text-xl sm:text-2xl font-bold text-orange-600 mb-2">4</div>
                <div className="text-sm font-medium mb-2">Voice Synthesis</div>
                <div className="text-xs text-gray-600 space-y-1">
                  <div>• ElevenLabs TTS</div>
                  <div>• Native accent</div>
                  <div>• Audio generated</div>
                </div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-lg border">
                <div className="text-xl sm:text-2xl font-bold text-red-600 mb-2">5</div>
                <div className="text-sm font-medium mb-2">Learning Update</div>
                <div className="text-xs text-gray-600 space-y-1">
                  <div>• Progress saved</div>
                  <div>• Analytics updated</div>
                  <div>• Next lesson prep</div>
                </div>
              </div>
            </div>

            {/* Resource Requirements */}
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-4">System Resource Requirements & Third-Party Dependencies</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h5 className="font-semibold text-gray-800 text-sm sm:text-base">External APIs & Services</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex flex-col sm:flex-row sm:justify-between p-2 bg-white rounded border gap-1">
                      <span>OpenAI API</span>
                      <Badge variant="secondary" className="text-xs w-fit">$0.01-0.03/1K tokens</Badge>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between p-2 bg-white rounded border gap-1">
                      <span>ElevenLabs TTS</span>
                      <Badge variant="secondary" className="text-xs w-fit">$0.30/1K chars</Badge>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between p-2 bg-white rounded border gap-1">
                      <span>Twilio Voice</span>
                      <Badge variant="secondary" className="text-xs w-fit">$0.013/min</Badge>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between p-2 bg-white rounded border gap-1">
                      <span>AWS/GCP Hosting</span>
                      <Badge variant="secondary" className="text-xs w-fit">Variable</Badge>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h5 className="font-semibold text-gray-800 text-sm sm:text-base">Infrastructure Components</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex flex-col sm:flex-row sm:justify-between p-2 bg-white rounded border gap-1">
                      <span>Load Balancer</span>
                      <Badge variant="secondary" className="text-xs w-fit">High Availability</Badge>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between p-2 bg-white rounded border gap-1">
                      <span>Database Cluster</span>
                      <Badge variant="secondary" className="text-xs w-fit">PostgreSQL</Badge>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between p-2 bg-white rounded border gap-1">
                      <span>Cache Layer</span>
                      <Badge variant="secondary" className="text-xs w-fit">Redis</Badge>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between p-2 bg-white rounded border gap-1">
                      <span>Monitoring</span>
                      <Badge variant="secondary" className="text-xs w-fit">DataDog/NewRelic</Badge>
                    </div>
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
