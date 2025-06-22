
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Globe, Users, TrendingUp, Shield, Zap, Heart, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transforming Education Through
            <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Voice-Powered AI
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Bringing world-class English education to 2.7 billion people without internet access. 
            Our AI platform turns any phone into a personalized learning tool.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                Try Our Demo
              </Button>
            </Link>
            <Link to="/architecture">
              <Button size="lg" variant="outline">
                Learn How It Works
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Global Education Challenge
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="flex items-start space-x-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>2.7 billion people lack internet access but own phones</span>
                </p>
                <p className="flex items-start space-x-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Limited English proficiency restricts economic opportunities</span>
                </p>
                <p className="flex items-start space-x-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Governments struggle to deliver digital services at scale</span>
                </p>
                <p className="flex items-start space-x-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Educational inequality widens in remote areas</span>
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our AI-Powered Solution
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Voice-based learning requires no internet connection</span>
                </p>
                <p className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>AI personalizes lessons to individual learning pace</span>
                </p>
                <p className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Works on any phone with calling capability</span>
                </p>
                <p className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Real-time analytics for governments and organizations</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Platform Capabilities
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Phone className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>Voice-First Learning</CardTitle>
                <CardDescription>
                  Interactive conversations with AI tutors through simple phone calls
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Zap className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle>AI Personalization</CardTitle>
                <CardDescription>
                  Adaptive learning that adjusts to individual pace and skill level
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle>Real-Time Analytics</CardTitle>
                <CardDescription>
                  Comprehensive dashboards for tracking progress and outcomes
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Markets */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Who We Serve
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Globe className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>Governments & Organizations</CardTitle>
                <CardDescription className="text-base">
                  Education ministries, telecommunications providers, NGOs, and international 
                  development organizations seeking scalable solutions for remote populations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• National and regional education ministries</p>
                  <p>• UN agencies, World Bank, USAID</p>
                  <p>• Telecommunications providers</p>
                  <p>• Social enterprises in emerging markets</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Users className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle>End Users</CardTitle>
                <CardDescription className="text-base">
                  Students, adult learners, and citizens in remote areas who need access to 
                  education and government services without internet connectivity.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Students in rural areas without internet</p>
                  <p>• Adult learners seeking English proficiency</p>
                  <p>• Citizens needing civic information</p>
                  <p>• Visually impaired and disability communities</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Beta Program */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Free Beta Program: English Learning for Students
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We're providing free English learning access to students without internet connectivity, 
            demonstrating our platform's potential for educational equity at scale.
          </p>
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold">Vocabulary Building</h3>
              <p className="text-sm text-gray-600">Context-based learning</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold">Conversational Skills</h3>
              <p className="text-sm text-gray-600">Interactive dialogues</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold">Story-Based Learning</h3>
              <p className="text-sm text-gray-600">Engaging narratives</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold">Progress Tracking</h3>
              <p className="text-sm text-gray-600">Performance metrics</p>
            </div>
          </div>
          <Link to="/demo">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
              Experience Our Demo
            </Button>
          </Link>
        </div>
      </section>

      {/* Security & Trust */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Security & Compliance First
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built with government-grade security and privacy protection for sensitive educational data.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Data Sovereignty</h3>
              <p className="text-gray-600">In-country data storage options for government clients</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Privacy Protection</h3>
              <p className="text-gray-600">No personal data storage, only anonymized learning metrics</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-2">GDPR Ready</h3>
              <p className="text-gray-600">Compliant architecture adaptable to local regulations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Education in Your Region?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join governments and organizations worldwide in bringing AI-powered education to everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Schedule a Demo
            </Button>
            <Link to="/architecture">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                View Technical Details
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Bakame AI</span>
              </div>
              <p className="text-gray-400">
                Transforming education through voice-powered AI for the Global South.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <div className="space-y-2 text-gray-400">
                <Link to="/demo" className="block hover:text-white transition-colors">Demo</Link>
                <Link to="/architecture" className="block hover:text-white transition-colors">Architecture</Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <div className="space-y-2 text-gray-400">
                <a href="#" className="block hover:text-white transition-colors">About</a>
                <a href="#" className="block hover:text-white transition-colors">Careers</a>
                <a href="#" className="block hover:text-white transition-colors">Blog</a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p>Happy Herman</p>
                <p>Head of Strategy</p>
                <a href="mailto:h.niyorurema@tcu.edu" className="hover:text-white transition-colors">
                  h.niyorurema@tcu.edu
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Bakame AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
