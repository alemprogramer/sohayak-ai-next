import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Linkedin, Send, ArrowUp, Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-cyan-200 to-teal-300 pt-16 pb-8 relative mt-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center relative">
                  <div className="w-2 h-2 bg-white rounded-full absolute left-2"></div>
                  <div className="w-2 h-2 bg-white rounded-full absolute right-2"></div>
                  <div className="w-4 h-1 bg-white rounded-full absolute bottom-2"></div>
                </div>
              </div>
              <span className="text-xl font-bold text-gray-800">সহায়কAI</span>
            </div>
            <p className="text-gray-700 text-sm mb-6 max-w-xs">
              Qorem ipsum dolor sit amet, consectetur adipiscing elit aut elit tellus luctus nec ulla corper mattis
              pulvinar dapibus leo.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-3">
              <div className="w-10 h-10 border-2 border-teal-600 rounded-lg flex items-center justify-center hover:bg-teal-600 hover:text-white transition-colors cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 border-2 border-teal-600 rounded-lg flex items-center justify-center hover:bg-teal-600 hover:text-white transition-colors cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 border-2 border-teal-600 rounded-lg flex items-center justify-center hover:bg-teal-600 hover:text-white transition-colors cursor-pointer">
                <Linkedin className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-1">
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-700">
                <Phone className="w-5 h-5 text-teal-600" />
                <span>+61 3 8376 6284</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Mail className="w-5 h-5 text-teal-600" />
                <span>verticasoft@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin className="w-5 h-5 text-teal-600" />
                <span>Khilgaon, Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Email Subscription */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter Email:"
                  className="bg-white/80 border-gray-300 text-gray-700 placeholder:text-gray-500"
                />
                <Button className="bg-teal-600 hover:bg-teal-700 text-white px-3">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-teal-600 rounded flex items-center justify-center mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded"></div>
                </div>
                <p className="text-sm text-gray-700">Quis autem vel eum iure reprehenderit rui in ea voluptate esse.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-400/30 pt-6 text-center">
          <p className="text-gray-700 text-sm">Copyright © 2025 SohayakAI All rights reserved.</p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button className="fixed bottom-6 right-6 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center shadow-lg transition-colors">
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  )
}
