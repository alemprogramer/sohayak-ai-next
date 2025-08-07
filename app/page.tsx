"use client"
import { Button } from "@/components/ui/button"
import { ChevronDown, Mic } from "lucide-react"
import Image from "next/image"
import Header from "./__components/Header"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/demos");  // আপনার পছন্দসই route
  };
  return (
    <>
      {/* Header */}
     

      {/* Main Content */}
      <main className="px-6 py-12 lg:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Revolutionize
                <br />
                Customer Service
                <br />
                with <span className="text-orange-500">SohayakAI!</span>
              </h1>

              <p className="text-xl text-gray-700 max-w-lg">
                Communication feels easier with the help of our customer care AI agent.
              </p>
            </div>

            <Button onClick={handleClick} className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg flex items-center gap-2 cursor-pointer">
              <Mic className="w-5 h-5" />
              Test Demo
            </Button>

            <p className="text-gray-700">
              Available <span className="font-bold">100%</span> in Bangla with <span className="font-bold">98.9%</span>{" "}
              Accuracy
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div className="border-l-4 border-orange-500 pl-4">
                <div className="text-3xl font-bold text-gray-900">28+ Million</div>
                <div className="text-gray-600">Personal users</div>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <div className="text-3xl font-bold text-gray-900">500k+</div>
                <div className="text-gray-600">Business users</div>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <div className="text-3xl font-bold text-gray-900">200k+</div>
                <div className="text-gray-600">In-app currencies</div>
              </div>
            </div>
          </div>

          {/* Right Content - Robot Image */}
          <div className="relative">
            <div className="relative bg-white/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <div className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                Hi I'm SohayakAI!
              </div>
              <div className="mt-8">
                <Image
                  src="/robot-assistant.png"
                  alt="SohayakAI Robot Assistant"
                  width={500}
                  height={600}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>

            {/* Decorative circle */}
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-teal-500 rounded-full opacity-20"></div>
          </div>
        </div>
      </main>
    </>
  )
}

