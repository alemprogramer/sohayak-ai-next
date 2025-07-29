import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import React from 'react'
import Image from "next/image"


function Header() {
  return (
     <header className="flex items-center justify-between px-6 py-4 lg:px-[16%] ">
        <div className="flex items-center gap-2">
          {/* <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center relative">
              <div className="w-2 h-2 bg-white rounded-full absolute left-2"></div>
              <div className="w-2 h-2 bg-white rounded-full absolute right-2"></div>
              <div className="w-4 h-1 bg-white rounded-full absolute bottom-2"></div>
            </div>
          </div> */}
          <div className="flex items-center gap-2">
            <Image
              src="/images/sohayakai.png"
              alt="SohayakAI Logo"
              width={200}
              height={48}
              className="h-12 w-auto"
              priority
            />
          </div>
        </div>

        <nav className="flex items-center gap-6">
          <div className="flex items-center gap-1 text-orange-500 cursor-pointer">
            <span>Home</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6">{"Let's Talk"}</Button>
        </nav>
      </header>
  )
}

export default Header