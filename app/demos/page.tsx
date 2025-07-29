import React from 'react'
import Header from '../__components/Header'
import { Button } from '@/components/ui/button'
import { Clock, Globe, Headphones, MessageCircle, Mic, Phone, Users } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

function pages() {
  return (
   <>
   {/* AI Voice Agent Demo Cards */}
        <section className="mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Experience Our <span className="text-orange-500">AI Voice Demos</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Try different scenarios and see how SohayakAI handles various customer service situations with natural
                Bengali conversation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Customer Support Demo */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Headphones className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Customer Support</CardTitle>
                  <CardDescription className="text-gray-600">
                    Handle customer queries and complaints with empathy
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white w-full flex items-center justify-center gap-2">
                    <Mic className="w-4 h-4" />
                    Try Support Demo
                  </Button>
                  <p className="text-sm text-gray-500 mt-3">⏱️ 2-3 min demo • 🗣️ Bengali & English</p>
                </CardContent>
              </Card>

              {/* Sales Assistant Demo */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Sales Assistant</CardTitle>
                  <CardDescription className="text-gray-600">
                    Product recommendations and sales conversations
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white w-full flex items-center justify-center gap-2">
                    <Mic className="w-4 h-4" />
                    Try Sales Demo
                  </Button>
                  <p className="text-sm text-gray-500 mt-3">⏱️ 3-4 min demo • 💰 Product focused</p>
                </CardContent>
              </Card>

              {/* Technical Support Demo */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Technical Support</CardTitle>
                  <CardDescription className="text-gray-600">
                    Troubleshooting and technical problem solving
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white w-full flex items-center justify-center gap-2">
                    <Mic className="w-4 h-4" />
                    Try Tech Demo
                  </Button>
                  <p className="text-sm text-gray-500 mt-3">⏱️ 4-5 min demo • 🔧 Problem solving</p>
                </CardContent>
              </Card>

              {/* Appointment Booking Demo */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Appointment Booking</CardTitle>
                  <CardDescription className="text-gray-600">
                    Schedule appointments and manage calendars
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white w-full flex items-center justify-center gap-2">
                    <Mic className="w-4 h-4" />
                    Try Booking Demo
                  </Button>
                  <p className="text-sm text-gray-500 mt-3">⏱️ 2-3 min demo • 📅 Calendar integration</p>
                </CardContent>
              </Card>

              {/* Multi-language Demo */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Multi-language</CardTitle>
                  <CardDescription className="text-gray-600">
                    Seamless switching between Bengali and English
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white w-full flex items-center justify-center gap-2">
                    <Mic className="w-4 h-4" />
                    Try Language Demo
                  </Button>
                  <p className="text-sm text-gray-500 mt-3">⏱️ 3-4 min demo • 🌐 বাংলা + English</p>
                </CardContent>
              </Card>

              {/* Group Conversation Demo */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">Group Support</CardTitle>
                  <CardDescription className="text-gray-600">
                    Handle multiple customers in conference calls
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white w-full flex items-center justify-center gap-2">
                    <Mic className="w-4 h-4" />
                    Try Group Demo
                  </Button>
                  <p className="text-sm text-gray-500 mt-3">⏱️ 5-6 min demo • 👥 Multi-participant</p>
                </CardContent>
              </Card>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to integrate SohayakAI into your business?
                </h3>
                <p className="text-gray-700 mb-6">
                  Get started with our comprehensive API and see how our AI voice agent can transform your customer
                  service experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">Start Free Trial</Button>
                  <Button
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 bg-transparent"
                  >
                    View Documentation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
   </>
  )
}

export default pages