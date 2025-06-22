
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mic, Brain, Database, BarChart3, Globe, Zap, MessageCircle } from "lucide-react";

const SystemFlowDiagram = () => {
  return (
    <div className="space-y-8">
      {/* Main Flow Diagram */}
      <Card className="border-0 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl text-center">System Architecture Flow</CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="space-y-12">
            {/* Layer 1: User Interface */}
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-6">Layer 1: User Interface</h3>
              <div className="flex justify-center items-center space-x-8">
                <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                  <Phone className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <div className="text-sm font-medium">Feature Phone</div>
                  <div className="text-xs text-gray-600 mt-1">Any phone with calling</div>
                </div>
                <div className="text-2xl text-gray-400">→</div>
                <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
                  <Globe className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <div className="text-sm font-medium">Cellular Network</div>
                  <div className="text-xs text-gray-600 mt-1">2G/3G/4G networks</div>
                </div>
              </div>
            </div>

            {/* Layer 2: Communication Gateway */}
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-6">Layer 2: Communication Gateway</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <MessageCircle className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">IVR System</div>
                  <div className="text-xs text-gray-600">Call routing & management</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <Mic className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Audio Processing</div>
                  <div className="text-xs text-gray-600">8kHz optimization</div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <Globe className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Language Detection</div>
                  <div className="text-xs text-gray-600">Auto-detect native language</div>
                </div>
              </div>
            </div>

            {/* Layer 3: AI Processing Engine */}
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-6">Layer 3: AI Processing Engine</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                  <Mic className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Speech Recognition</div>
                  <div className="text-xs text-gray-600">Whisper (multilingual)</div>
                  <Badge variant="outline" className="mt-1 text-xs">Swahili, Kinyarwanda</Badge>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
                  <Brain className="w-8 h-8 text-pink-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Language Processing</div>
                  <div className="text-xs text-gray-600">GPT-4 with custom prompts</div>
                  <Badge variant="outline" className="mt-1 text-xs">Adaptive Learning</Badge>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
                  <Zap className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Learning Engine</div>
                  <div className="text-xs text-gray-600">Personalized curriculum</div>
                  <Badge variant="outline" className="mt-1 text-xs">Progress Tracking</Badge>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <MessageCircle className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Text-to-Speech</div>
                  <div className="text-xs text-gray-600">ElevenLabs multilingual</div>
                  <Badge variant="outline" className="mt-1 text-xs">Native accents</Badge>
                </div>
              </div>
            </div>

            {/* Layer 4: Data & Analytics */}
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-6">Layer 4: Data & Analytics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-200">
                  <Database className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Content Database</div>
                  <div className="text-xs text-gray-600">Multilingual curriculum</div>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                  <Brain className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">User Progress</div>
                  <div className="text-xs text-gray-600">Learning analytics</div>
                </div>
                <div className="bg-violet-50 p-4 rounded-lg border border-violet-200">
                  <BarChart3 className="w-8 h-8 text-violet-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Dashboards</div>
                  <div className="text-xs text-gray-600">Government reporting</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interaction Flow */}
      <Card className="border-0 shadow-xl">
        <CardHeader>
          <CardTitle className="text-xl">Multilingual Learning Interaction Flow</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">1</div>
                <div className="text-sm font-medium">Call Initiated</div>
                <div className="text-xs text-gray-600 mt-1">Student dials number</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">2</div>
                <div className="text-sm font-medium">Language Detection</div>
                <div className="text-xs text-gray-600 mt-1">AI identifies native language</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 mb-2">3</div>
                <div className="text-sm font-medium">Level Assessment</div>
                <div className="text-xs text-gray-600 mt-1">Current English proficiency</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600 mb-2">4</div>
                <div className="text-sm font-medium">Adaptive Learning</div>
                <div className="text-xs text-gray-600 mt-1">Personalized lesson delivery</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Technical Components Detail */}
      <Card className="border-0 shadow-xl">
        <CardHeader>
          <CardTitle className="text-xl">Core Components Architecture</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Frontend Components</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span>IVR Gateway</span>
                  <Badge variant="secondary">Twilio/Local Telco</Badge>
                </div>
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span>Audio Processing</span>
                  <Badge variant="secondary">Real-time</Badge>
                </div>
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span>Language Router</span>
                  <Badge variant="secondary">Auto-detect</Badge>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Backend Services</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span>AI Engine</span>
                  <Badge variant="secondary">GPT-4 + Whisper</Badge>
                </div>
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span>Content Management</span>
                  <Badge variant="secondary">PostgreSQL</Badge>
                </div>
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span>Analytics Platform</span>
                  <Badge variant="secondary">Real-time</Badge>
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
