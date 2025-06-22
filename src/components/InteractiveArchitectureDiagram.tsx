import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Phone, Globe, MessageCircle, Server, Brain, Database, BarChart3, Cloud, Users, Volume2, Shield, Mic, Languages } from "lucide-react";

// Define groups (cards/zones) and their components
const groups = [
  {
    key: "device",
    label: "Device",
    components: [
      { key: "user", icon: <Phone className="w-5 h-5 text-blue-600 mb-1" />, label: "User (Feature Phone)", desc: "Learner with a basic phone." },
    ],
  },
  {
    key: "network",
    label: "Network",
    components: [
      { key: "cellular", icon: <Globe className="w-5 h-5 text-green-600 mb-1" />, label: "Cellular Network", desc: "2G/3G/4G/5G for voice calls." },
    ],
  },
  {
    key: "telephony",
    label: "Telephony",
    components: [
      { key: "ivr", icon: <MessageCircle className="w-5 h-5 text-orange-600 mb-1" />, label: "IVR System", desc: "IVR (Twilio/Asterisk) greets and records audio." },
      { key: "telecom", icon: <Server className="w-5 h-5 text-purple-600 mb-1" />, label: "Telecom Gateway", desc: "SIP/VoIP gateway connects to cloud." },
    ],
  },
  {
    key: "ai",
    label: "AI Engine",
    components: [
      { key: "stt", icon: <Mic className="w-5 h-5 text-yellow-600 mb-1" />, label: "Speech-to-Text (Whisper)", desc: "Transcribes audio to text." },
      { key: "langdetect", icon: <Languages className="w-5 h-5 text-blue-600 mb-1" />, label: "Language Detection", desc: "Detects language and accent." },
      { key: "gpt", icon: <Brain className="w-5 h-5 text-purple-600 mb-1" />, label: "Lesson Generator (GPT-4)", desc: "Generates adaptive lesson content." },
      { key: "tts", icon: <Volume2 className="w-5 h-5 text-green-600 mb-1" />, label: "Text-to-Speech (ElevenLabs)", desc: "Converts text to audio." },
    ],
  },
  {
    key: "content",
    label: "Content & Data",
    components: [
      { key: "contentdb", icon: <Database className="w-5 h-5 text-yellow-600 mb-1" />, label: "Curriculum DB", desc: "Stores lessons and progress." },
      { key: "externalapi", icon: <Cloud className="w-5 h-5 text-blue-600 mb-1" />, label: "External APIs", desc: "OpenAI, ElevenLabs, etc." },
      { key: "datastore", icon: <Database className="w-5 h-5 text-green-600 mb-1" />, label: "Data Storage", desc: "Stores audio, transcripts, analytics." },
    ],
  },
  {
    key: "analytics",
    label: "Analytics & Security",
    components: [
      { key: "analytics", icon: <BarChart3 className="w-5 h-5 text-pink-600 mb-1" />, label: "Analytics Engine", desc: "Analyzes usage and outcomes." },
      { key: "security", icon: <Shield className="w-5 h-5 text-blue-600 mb-1" />, label: "Security & Compliance", desc: "Ensures privacy and compliance." },
    ],
  },
  {
    key: "dashboard",
    label: "Client Dashboard",
    components: [
      { key: "dashboard", icon: <Users className="w-5 h-5 text-purple-600 mb-1" />, label: "Client Dashboard", desc: "Reports for governments/organizations." },
    ],
  },
];

// Define the flow steps (each step highlights a group, components, and flows)
const flowSteps = [
  // Device to Network
  { group: "device", highlight: ["user"], flows: [["user", "cellular"]], label: "User initiates call", desc: "Learner dials the platform's number from their phone." },
  { group: "network", highlight: ["cellular"], flows: [["user", "cellular"]], label: "Call routed via network", desc: "Call is transmitted over the local phone network." },
  // Network to Telephony
  { group: "telephony", highlight: ["ivr"], flows: [["cellular", "ivr"]], label: "IVR answers call", desc: "IVR system greets user and records their speech." },
  { group: "telephony", highlight: ["telecom"], flows: [["ivr", "telecom"]], label: "Telecom gateway forwards audio", desc: "Audio is routed to the cloud for AI processing." },
  // Telephony to AI
  { group: "ai", highlight: ["stt"], flows: [["telecom", "stt"]], label: "Speech-to-Text", desc: "Audio is transcribed to text using Whisper." },
  { group: "ai", highlight: ["langdetect"], flows: [["stt", "langdetect"]], label: "Language Detection", desc: "Language and accent are detected." },
  { group: "ai", highlight: ["gpt"], flows: [["langdetect", "gpt"]], label: "Lesson Generation", desc: "GPT-4 generates adaptive lesson content." },
  { group: "ai", highlight: ["tts"], flows: [["gpt", "tts"]], label: "Text-to-Speech", desc: "Text is converted to audio using ElevenLabs." },
  { group: "telephony", highlight: ["telecom"], flows: [["tts", "telecom"]], label: "Audio Response", desc: "Audio response sent back to telecom gateway." },
  // AI to Content/Data
  { group: "content", highlight: ["contentdb"], flows: [["gpt", "contentdb"]], label: "Curriculum Access", desc: "Lessons and progress are fetched/updated." },
  { group: "content", highlight: ["externalapi"], flows: [["gpt", "externalapi"]], label: "External API Call", desc: "External APIs are used for advanced features." },
  { group: "content", highlight: ["datastore"], flows: [["gpt", "datastore"]], label: "Data Storage", desc: "Audio, transcripts, and analytics are stored." },
  // Content/Data to Analytics/Security
  { group: "analytics", highlight: ["analytics"], flows: [["datastore", "analytics"]], label: "Analytics Processing", desc: "Usage and outcomes are analyzed." },
  { group: "analytics", highlight: ["security"], flows: [["analytics", "security"]], label: "Security & Compliance", desc: "Data privacy and compliance enforced." },
  // Analytics to Dashboard
  { group: "dashboard", highlight: ["dashboard"], flows: [["analytics", "dashboard"]], label: "Dashboard Update", desc: "Clients access real-time reports." },
];

// Helper to get component position in the grid
function getComponentGrid(groupIdx, compIdx) {
  return `col-start-${groupIdx + 1} row-start-${compIdx + 1}`;
}

// Helper to get component by key
function getComponentByKey(key) {
  for (const group of groups) {
    for (const comp of group.components) {
      if (comp.key === key) return { ...comp, groupKey: group.key };
    }
  }
  return null;
}

export default function InteractiveArchitectureDiagram({ autoPlay = true, onAutoEnd, expanded = false }) {
  const [stepIdx, setStepIdx] = useState(0);
  const [isAuto, setIsAuto] = useState(autoPlay);
  const autoRef = useRef(isAuto);
  autoRef.current = isAuto;

  // Auto simulation effect
  useEffect(() => {
    if (!isAuto) return;
    if (stepIdx >= flowSteps.length - 1) {
      setIsAuto(false);
      if (onAutoEnd) onAutoEnd();
      return;
    }
    const timer = setTimeout(() => {
      if (autoRef.current) setStepIdx((s) => Math.min(flowSteps.length - 1, s + 1));
    }, 1200);
    return () => clearTimeout(timer);
  }, [stepIdx, isAuto, onAutoEnd]);

  // Manual navigation disables auto
  const handleManualNav = (nextIdx) => {
    setIsAuto(false);
    setStepIdx(nextIdx);
  };

  const step = flowSteps[stepIdx];
  const isGroupActive = (groupKey) => step && step.group === groupKey;
  const isComponentActive = (key) => step && step.highlight.includes(key);
  const isFlowActive = (from, to) => step && step.flows.some(([f, t]) => f === from && t === to);

  return (
    <Card className={`border-0 shadow-xl min-w-[1100px] max-w-[90vw] ${expanded ? 'h-[90vh]' : 'h-[600px]'} bg-white`}>
      <CardHeader>
        <CardTitle className="text-2xl text-center">System Architecture & Communication Flow</CardTitle>
        <div className="text-center text-gray-600 mt-2">Step {stepIdx + 1} of {flowSteps.length}: {step.label}</div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center space-y-8">
          {/* Main horizontal flex diagram */}
          <div className={`w-full max-w-none flex flex-row gap-8 ${expanded ? 'min-h-[70vh]' : 'min-h-[320px]'} items-end justify-start relative bg-white border rounded-lg p-6 overflow-x-auto`}>
            {/* Group cards horizontally */}
            {groups.map((group, groupIdx) => (
              <div key={group.key} className={`flex flex-col items-center w-56 min-w-[200px] h-auto p-4 rounded-lg border transition-all duration-300 ${isGroupActive(group.key) ? "bg-blue-50 border-blue-400 shadow-lg scale-105" : "bg-white border-gray-200 opacity-90"}`} style={{ height: 'auto', justifyContent: 'flex-end' }}>
                <div className="font-bold text-center mb-4 text-base whitespace-nowrap">{group.label}</div>
                <TooltipProvider>
                  {group.components.map((comp, compIdx) => (
                    <Tooltip key={comp.key}>
                      <TooltipTrigger asChild>
                        <div className={`my-2 px-2 py-2 rounded-lg flex flex-col items-center border transition-all duration-300 ${isComponentActive(comp.key) ? "bg-blue-100 border-blue-400 scale-110 shadow" : "bg-white border-gray-200"}`} style={{ maxHeight: 56 }}>
                          {comp.icon}
                          <div className="text-xs font-semibold text-center whitespace-nowrap">{comp.label}</div>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <div className="font-bold mb-1">{comp.label}</div>
                        <div className="text-xs text-gray-600">{comp.desc}</div>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </TooltipProvider>
              </div>
            ))}
            {/* Flows/arrows between components */}
            {flowSteps.slice(0, stepIdx + 1).flatMap((s, idx) =>
              s.flows.map(([from, to], i) => {
                const fromComp = getComponentByKey(from);
                const toComp = getComponentByKey(to);
                if (!fromComp || !toComp) return null;
                const fromGroupIdx = groups.findIndex(g => g.key === fromComp.groupKey);
                const toGroupIdx = groups.findIndex(g => g.key === toComp.groupKey);
                const fromCompIdx = groups[fromGroupIdx].components.findIndex(c => c.key === from);
                const toCompIdx = groups[toGroupIdx].components.findIndex(c => c.key === to);
                // Draw a horizontal line between group columns, vertically between component rows
                const left = `calc(${fromGroupIdx * 200 + 100}px)`;
                const width = `${(toGroupIdx - fromGroupIdx) * 200}px`;
                const top = `calc(${(fromCompIdx + toCompIdx) * 40 + 80}px)`;
                return (
                  <Tooltip key={`${from}-${to}-${idx}-${i}`}>
                    <TooltipTrigger asChild>
                      <div
                        className={`absolute z-0 h-1 rounded-full ${isFlowActive(from, to) ? "bg-blue-400" : "bg-gray-200"} transition-all duration-500`}
                        style={{ left, top, width, opacity: isFlowActive(from, to) ? 1 : 0.3 }}
                      >
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-gray-500 whitespace-nowrap">{fromComp.label} → {toComp.label}</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <div className="font-bold mb-1">{fromComp.label} → {toComp.label}</div>
                      <div className="text-xs text-gray-600">{step.desc}</div>
                    </TooltipContent>
                  </Tooltip>
                );
              })
            )}
          </div>

          {/* Step Description & Controls */}
          <div className="mt-8 w-full max-w-2xl mx-auto text-center">
            <div className="mb-4 p-6 bg-gray-50 rounded-lg border text-lg font-medium min-h-[80px] text-wrap break-words">
              <span className="text-blue-700">{step.label}</span>
              <div className="text-base text-gray-600 mt-2 break-words whitespace-pre-line">{step.desc}</div>
            </div>
            <div className="flex items-center justify-between mt-4 sticky bottom-0 bg-white z-10 p-4 rounded-b-lg gap-4 shadow-lg">
              <Button
                variant="outline"
                onClick={() => handleManualNav(Math.max(0, stepIdx - 1))}
                disabled={stepIdx === 0}
                className="min-w-[100px]"
              >
                Previous
              </Button>
              <div className="flex-1 mx-4 px-4 py-2 bg-gray-50 border rounded text-base text-gray-800 text-center min-w-[180px] max-w-full break-words">
                {step.desc}
              </div>
              {stepIdx < flowSteps.length - 1 ? (
                <Button onClick={() => handleManualNav(Math.min(flowSteps.length - 1, stepIdx + 1))} className="min-w-[100px] bg-gray-900 text-white">Next</Button>
              ) : (
                <Button onClick={() => handleManualNav(0)} className="min-w-[100px] bg-gradient-to-r from-green-600 to-blue-600 text-white">Restart</Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 