"use client"
import { Button } from "@/components/ui/button"
import { Mic, Zap, Shield, Globe, MessageCircle, Star, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/demos");
  };

  return (
    <main className="overflow-hidden">
      {/* ===== HERO SECTION ===== */}
      <section className="px-6 py-12 lg:px-[10%] lg:py-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 px-4 py-2 rounded-full text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              Bangladesh&apos;s #1 AI Customer Assistant
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Revolutionize
                <br />
                Customer Service
                <br />
                with{" "}
                <span className="relative inline-block">
                  <span className="text-orange-500">SohayakAI!</span>
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-orange-200 rounded-full"></span>
                </span>
              </h1>

              <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                Communication feels easier with the help of our AI-powered customer care agent — built for Bangladesh, speaking your language.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={handleClick}
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg flex items-center gap-2 cursor-pointer rounded-xl shadow-lg shadow-teal-200 hover:shadow-teal-300 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Mic className="w-5 h-5" />
                Test Demo
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-gray-200 hover:border-teal-300 text-gray-700 px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Learn More
              </Button>
            </div>

            {/* Trust indicator */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm">
                Available{" "}
                <span className="font-bold text-gray-900">100%</span> in Bangla with{" "}
                <span className="font-bold text-gray-900">98.9%</span> Accuracy
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-gray-900">28M+</div>
                <div className="text-sm text-gray-500">Personal Users</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-gray-900">500k+</div>
                <div className="text-sm text-gray-500">Business Users</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-gray-900">200k+</div>
                <div className="text-sm text-gray-500">In-app Tokens</div>
              </div>
            </div>
          </div>

          {/* Right Content - Robot Image */}
          <div className="relative flex justify-center">
            {/* Glowing background blob */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-100 via-cyan-50 to-orange-50 rounded-3xl blur-3xl opacity-60"></div>

            <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/80 max-w-md w-full">
              {/* Chat bubble badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg whitespace-nowrap">
                👋 Hi, I&apos;m SohayakAI!
              </div>

              {/* Robot Image */}
              <div className="mt-4">
                <Image
                  src="/robot-assistant.png"
                  alt="SohayakAI Robot Assistant"
                  width={500}
                  height={600}
                  className="w-full h-auto object-contain drop-shadow-xl"
                  priority
                />
              </div>

              {/* Floating chat bubble */}
              <div className="absolute -right-4 top-1/3 bg-white rounded-2xl rounded-tr-sm px-4 py-2.5 shadow-lg border border-gray-100 text-sm font-medium text-gray-700 max-w-[160px]">
                <div className="text-xs text-teal-600 font-semibold mb-0.5">SohayakAI</div>
                আপনাকে কীভাবে সাহায্য করতে পারি? 😊
              </div>

              {/* Floating response bubble */}
              <div className="absolute -left-4 bottom-1/4 bg-teal-600 text-white rounded-2xl rounded-tl-sm px-4 py-2.5 shadow-lg text-sm font-medium max-w-[140px]">
                আমার অর্ডার কোথায়? 🛍️
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-orange-400 rounded-full opacity-10 blur-xl"></div>
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-teal-400 rounded-full opacity-10 blur-xl"></div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="px-6 py-16 lg:px-[10%]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-teal-600">SohayakAI</span>?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Built specifically for Bangladeshi businesses, our AI understands your customers like no other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Globe,
                color: "bg-teal-50 text-teal-600",
                border: "border-teal-100",
                title: "100% Bangla Support",
                desc: "Speaks fluent Bangla (and Banglish) with natural conversation flow that feels human.",
              },
              {
                icon: Zap,
                color: "bg-orange-50 text-orange-500",
                border: "border-orange-100",
                title: "Instant Response",
                desc: "Responds in under 1 second, 24/7. Never keep your customers waiting again.",
              },
              {
                icon: Shield,
                color: "bg-blue-50 text-blue-600",
                border: "border-blue-100",
                title: "98.9% Accuracy",
                desc: "Industry-leading accuracy ensures your customers always get the right answer.",
              },
              {
                icon: MessageCircle,
                color: "bg-purple-50 text-purple-600",
                border: "border-purple-100",
                title: "Multi-channel",
                desc: "Works seamlessly on Facebook Messenger, WhatsApp, website, and phone calls.",
              },
              {
                icon: CheckCircle,
                color: "bg-green-50 text-green-600",
                border: "border-green-100",
                title: "Easy Integration",
                desc: "Get started in minutes. No technical expertise required to set up and manage.",
              },
              {
                icon: Star,
                color: "bg-yellow-50 text-yellow-600",
                border: "border-yellow-100",
                title: "5-Star Experience",
                desc: "Trusted by 28+ million users across Bangladesh for outstanding customer service.",
              },
            ].map(({ icon: Icon, color, border, title, desc }) => (
              <div
                key={title}
                className={`group bg-white border ${border} rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default`}
              >
                <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING COMPARISON SECTION ===== */}
      <section className="px-6 py-16 lg:px-[10%]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              💰 Cost Breakdown
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Traditional Call Center <span className="text-gray-400">vs</span>{" "}
              <span className="text-teal-600">SohayakAI</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              দেখুন কতটা সাশ্রয় হয় AI Agent ব্যবহার করলে
            </p>
          </div>

          {/* Comparison Table */}
          <div className="grid lg:grid-cols-2 gap-6 mb-10">
            {/* Normal Call Center */}
            <div className="bg-white border-2 border-red-100 rounded-3xl overflow-hidden shadow-sm">
              <div className="bg-red-50 px-8 py-5 border-b border-red-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center text-xl">📞</div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl">Traditional Call Center</h3>
                    <p className="text-red-500 text-sm font-medium">High Cost · Limited Hours</p>
                  </div>
                </div>
              </div>
              <div className="p-8 space-y-4">
                {[
                  { label: "প্রতি Agent মাসিক বেতন", value: "৳ ১৫,০০০ – ২৫,০০০", note: "per agent" },
                  { label: "১০ জন Agent (ন্যূনতম টিম)", value: "৳ ১,৫০,০০০+", note: "per month" },
                  { label: "Training & Onboarding", value: "৳ ৩০,০০০ – ৫০,০০০", note: "one-time" },
                  { label: "Office & Infrastructure", value: "৳ ৫০,০০০+", note: "per month" },
                  { label: "Working Hours", value: "৮ঘন্টা / দিন", note: "৫ দিন/সপ্তাহ" },
                  { label: "একসাথে কল হ্যান্ডেল", value: "১ জন = ১ কল", note: "limited" },
                  { label: "Accuracy / Consistency", value: "~৭০–৮০%", note: "varies by agent" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
                    <span className="text-gray-600 text-sm">{item.label}</span>
                    <div className="text-right">
                      <span className="font-bold text-red-600">{item.value}</span>
                      <div className="text-xs text-gray-400">{item.note}</div>
                    </div>
                  </div>
                ))}
                <div className="bg-red-50 rounded-2xl p-4 mt-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">মাসিক মোট খরচ (আনুমানিক)</div>
                    <div className="text-3xl font-black text-red-500">৳ ২,৩০,০০০+</div>
                    <div className="text-xs text-red-400 mt-1">শুধু ৮ ঘন্টা সার্ভিসের জন্য</div>
                  </div>
                </div>
              </div>
            </div>

            {/* SohayakAI */}
            <div className="bg-white border-2 border-teal-200 rounded-3xl overflow-hidden shadow-xl">
              <div className="bg-teal-600 px-8 py-5 border-b border-teal-500 relative">
                {/* Popular badge - inside header to avoid overflow-hidden clipping */}
                <div className="absolute -top-px right-6 bg-orange-400 text-white text-xs font-bold px-4 py-1 rounded-b-xl shadow-md">
                  ✨ সেরা পছন্দ
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-xl">🤖</div>
                  <div>
                    <h3 className="font-bold text-white text-xl">SohayakAI Agent</h3>
                    <p className="text-teal-200 text-sm font-medium">Low Cost · 24/7 Available</p>
                  </div>
                </div>
              </div>
              <div className="p-8 space-y-4">
                {[
                  { label: "Setup Cost", value: "৳ ০", note: "বিনামূল্যে শুরু" },
                  { label: "মাসিক সাবস্ক্রিপশন", value: "৳ ৫,০০০ – ২০,০০০", note: "per month" },
                  { label: "Training & Onboarding", value: "৳ ০", note: "auto-learning" },
                  { label: "Infrastructure", value: "৳ ০", note: "cloud-based" },
                  { label: "Working Hours", value: "২৪ঘন্টা / দিন", note: "৭ দিন/সপ্তাহ" },
                  { label: "একসাথে কল হ্যান্ডেল", value: "Unlimited", note: "কোনো সীমা নেই" },
                  { label: "Accuracy / Consistency", value: "৯৮.৯%", note: "guaranteed" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
                    <span className="text-gray-600 text-sm">{item.label}</span>
                    <div className="text-right">
                      <span className="font-bold text-teal-600">{item.value}</span>
                      <div className="text-xs text-gray-400">{item.note}</div>
                    </div>
                  </div>
                ))}
                <div className="bg-teal-50 rounded-2xl p-4 mt-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">মাসিক মোট খরচ (আনুমানিক)</div>
                    <div className="text-3xl font-black text-teal-600">৳ ৫,০০০ – ২০,০০০</div>
                    <div className="text-xs text-teal-500 mt-1">২৪/৭ সম্পূর্ণ সার্ভিসের জন্য</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===== ISSUES COMPARISON ===== */}
          <div className="mt-4 mb-6">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              সাধারণ <span className="text-red-500">সমস্যাগুলো</span> যা Traditional Call Center এ হয়
            </h3>
            <div className="grid lg:grid-cols-2 gap-4">
              {/* Problems Column */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-lg">❌</div>
                  <h4 className="font-bold text-red-600 text-lg">Traditional Call Center — সমস্যা</h4>
                </div>
                {[
                  { issue: "দীর্ঘ Hold Time", detail: "গ্রাহক ১৫–৩০ মিনিট অপেক্ষা করে, বিরক্ত হয়ে চলে যায়" },
                  { issue: "রাত/ছুটিতে সার্ভিস নেই", detail: "রাত ১১টায় সমস্যা হলে পরের দিন পর্যন্ত অপেক্ষা করতে হয়" },
                  { issue: "Human Error", detail: "ক্লান্ত বা অমনোযোগী agent ভুল তথ্য দিতে পারে" },
                  { issue: "Language Barrier", detail: "Formal বাংলা বোঝেন না সব agent, Dialect সমস্যা" },
                  { issue: "High Staff Turnover", detail: "ঘন ঘন নতুন agent নিয়োগ ও training এ সময়-অর্থ নষ্ট" },
                  { issue: "Inconsistent Service", detail: "প্রতিটি agent ভিন্নভাবে উত্তর দেয়, গ্রাহক বিভ্রান্ত হয়" },
                  { issue: "Sick Leave / Absence", detail: "Agent অসুস্থ হলে কল অনুত্তরিত থাকে" },
                  { issue: "Scalability সমস্যা", detail: "Peak time এ বেশি কল আসলে সামলানো যায় না" },
                ].map((item) => (
                  <div key={item.issue} className="flex gap-3 bg-red-50 border border-red-100 rounded-xl p-4">
                    <div className="w-5 h-5 bg-red-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-0.5 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-red-700 text-sm">{item.issue}</p>
                      <p className="text-red-400 text-xs mt-0.5">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Solutions Column */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center text-lg">✅</div>
                  <h4 className="font-bold text-teal-600 text-lg">SohayakAI — কোনো সমস্যা নেই!</h4>
                </div>
                {[
                  { fix: "তাৎক্ষণিক Response", detail: "<১ সেকেন্ডে উত্তর, কোনো Hold Time নেই — কখনোই না" },
                  { fix: "২৪/৭/৩৬৫ Active", detail: "রাত ৩টায়ও সমান speed এ সার্ভিস, ঈদ বা ছুটিতেও বন্ধ নেই" },
                  { fix: "Zero Human Error", detail: "Database থেকে সঠিক তথ্য, প্রতিবার একই নির্ভুল উত্তর" },
                  { fix: "Pure Bangla Fluency", detail: "আঞ্চলিক dialect সহ স্বাভাবিক বাংলায় কথা বলে" },
                  { fix: "No HR Hassle", detail: "নিয়োগ, training, turnover — কিছুই দরকার নেই" },
                  { fix: "100% Consistent", detail: "প্রতিটি গ্রাহক একই মানের সার্ভিস পায়, সবসময়" },
                  { fix: "Never Absent", detail: "AI কখনো অসুস্থ হয় না, ছুটি নেয় না, দেরি করে আসে না" },
                  { fix: "Unlimited Scale", detail: "একসাথে ১ হাজার কল? কোনো সমস্যাই নেই" },
                ].map((item) => (
                  <div key={item.fix} className="flex gap-3 bg-teal-50 border border-teal-100 rounded-xl p-4">
                    <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-teal-700 text-sm">{item.fix}</p>
                      <p className="text-teal-500 text-xs mt-0.5">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Savings Banner */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-2xl p-6 text-white text-center">
            <p className="text-lg font-semibold">
              💡 SohayakAI ব্যবহার করে আপনি প্রতি মাসে সাশ্রয় করতে পারেন
            </p>
            <p className="text-4xl font-black mt-1">৳ ২,১০,০০০+ </p>
            <p className="text-orange-100 text-sm mt-1">
              এবং পাচ্ছেন ৩x বেশি কার্যকর, ২৪/৭ customer service
            </p>
          </div>
        </div>
      </section>




      {/* ===== VOICE AI PLATFORM FEATURES ===== */}
      <section className="px-6 py-16 lg:px-[10%]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              🎙️ Voice AI Engine
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              আমাদের <span className="text-green-600">Voice AI Platform</span> এর শক্তি
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              SohayakAI এর নিজস্ব Voice AI Engine বিশ্বমানের real-time technology দিয়ে তৈরি —
              প্রতিটি feature আপনার business এর জন্য optimize করা
            </p>
          </div>

          {/* Main Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

            {[
              {
                emoji: "⚡",
                bg: "bg-yellow-50",
                border: "border-yellow-100",
                iconBg: "bg-yellow-100",
                iconColor: "text-yellow-600",
                title: "Ultra Low Latency",
                subtitle: "< 300ms response time",
                desc: "কথা শেষ হওয়ার আগেই AI বুঝে ফেলে। মানুষের মতো স্বাভাবিক কথোপকথন — কোনো awkward pause নেই।",
                tags: ["Real-time", "WebRTC"],
              },
              {
                emoji: "🗣️",
                bg: "bg-amber-50",
                border: "border-amber-100",
                iconBg: "bg-amber-100",
                iconColor: "text-amber-700",
                title: "TurnDetector() Audio Model",
                subtitle: "Intelligent Turn Detection",
                desc: "গ্রাহক কখন কথা শেষ করেছেন তা নির্ভুলভাবে সনাক্ত করে। গ্রাহক থামলে বা কথা শেষ করলেই কেবল AI উত্তর দেওয়া শুরু করে।",
                tags: ["Turn Detection", "Audio Model"],
              },
              {
                emoji: "🧠",
                bg: "bg-teal-50",
                border: "border-teal-100",
                iconBg: "bg-teal-100",
                iconColor: "text-teal-700",
                title: "VAT AI (Voice Activity Detection)",
                subtitle: "Smart Voice Detection",
                desc: "অপ্রয়োজনীয় শব্দ, কাশি বা দীর্ঘ নীরবতা বাদ দিয়ে কেবল মানুষের কণ্ঠস্বরকে নিখুঁতভাবে চিহ্নিত করে প্রসেস করে।",
                tags: ["VAT AI", "VAD"],
              },
              {
                emoji: "🔌",
                bg: "bg-indigo-50",
                border: "border-indigo-100",
                iconBg: "bg-indigo-100",
                iconColor: "text-indigo-700",
                title: "Smart Function Calling",
                subtitle: "Real-time ERP Data Fetch",
                desc: "যেকোনো ERP বা CRM API থেকে রিয়েল-টাইমে ডাটা নিয়ে সেটার উপর ভিত্তি করে গ্রাহককে তাদের চাহিদামতো তথ্য দেয় (যেমন: অর্ডার বা পেমেন্ট স্ট্যাটাস)।",
                tags: ["Function Call", "ERP Integration"],
              },
              {
                emoji: "💾",
                bg: "bg-emerald-50",
                border: "border-emerald-100",
                iconBg: "bg-emerald-100",
                iconColor: "text-emerald-700",
                title: "ERP & Database Write Support",
                subtitle: "Add, Update & Delete Data",
                desc: "যেকোনো ERP বা ডাটাবেজে নতুন কাস্টমার ইনফরমেশন যোগ করা (Add), আগের ডাটা পরিবর্তন (Update) এবং ডিলিট করার ক্ষমতা রাখে।",
                tags: ["Database Sync", "Write & Edit"],
              },
              {
                emoji: "🎙️",
                bg: "bg-blue-50",
                border: "border-blue-100",
                iconBg: "bg-blue-100",
                iconColor: "text-blue-600",
                title: "Smart Speech-to-Text",
                subtitle: "Bangla STT সহ",
                desc: "বাংলা, ইংরেজি, এবং Banglish — সব ধরনের উচ্চারণ সঠিকভাবে text এ convert করে।",
                tags: ["STT", "Bangla AI"],
              },
              {
                emoji: "🔊",
                bg: "bg-purple-50",
                border: "border-purple-100",
                iconBg: "bg-purple-100",
                iconColor: "text-purple-600",
                title: "Natural Text-to-Speech",
                subtitle: "Human-like voice",
                desc: "Robot মনে হয় না! আমাদের TTS engine স্বাভাবিক বাংলা কণ্ঠে কথা বলে — tone, pause সহ।",
                tags: ["TTS", "Natural Voice"],
              },
              {
                emoji: "🔇",
                bg: "bg-slate-50",
                border: "border-slate-100",
                iconBg: "bg-slate-100",
                iconColor: "text-slate-600",
                title: "Background Noise Cancellation",
                subtitle: "AI-powered filtering",
                desc: "রাস্তার শব্দ, ভিড়, বা অফিসের noise — AI স্বয়ংক্রিয়ভাবে filter করে শুধু কণ্ঠস্বর নেয়।",
                tags: ["Noise Cancel", "AI Filter"],
              },
              {
                emoji: "📞",
                bg: "bg-teal-50",
                border: "border-teal-100",
                iconBg: "bg-teal-100",
                iconColor: "text-teal-600",
                title: "Simultaneous Calls",
                subtitle: "Unlimited concurrent",
                desc: "একসাথে হাজার হাজার কল handle করুন। কোনো queue নেই, কোনো busy signal নেই।",
                tags: ["Scalable", "Concurrent"],
              },
              {
                emoji: "🔐",
                bg: "bg-red-50",
                border: "border-red-100",
                iconBg: "bg-red-100",
                iconColor: "text-red-600",
                title: "End-to-End Encryption",
                subtitle: "Bank-grade security",
                desc: "প্রতিটি কল সম্পূর্ণ encrypted। আপনার গ্রাহকের তথ্য সম্পূর্ণ নিরাপদ।",
                tags: ["E2E Encrypt", "Secure"],
              },
              {
                emoji: "📊",
                bg: "bg-orange-50",
                border: "border-orange-100",
                iconBg: "bg-orange-100",
                iconColor: "text-orange-600",
                title: "Call Analytics & Recording",
                subtitle: "Full insights",
                desc: "প্রতিটি কলের analytics, sentiment analysis, এবং recording — dashboard এ দেখুন।",
                tags: ["Analytics", "Recording"],
              },
              {
                emoji: "🌐",
                bg: "bg-indigo-50",
                border: "border-indigo-100",
                iconBg: "bg-indigo-100",
                iconColor: "text-indigo-600",
                title: "Multi-channel Support",
                subtitle: "Phone, Web, App",
                desc: "Phone call, website widget, mobile app — সব channel এ একই AI agent কাজ করে।",
                tags: ["Omni-channel", "Cross-platform"],
              },
              {
                emoji: "🔄",
                bg: "bg-emerald-50",
                border: "border-emerald-100",
                iconBg: "bg-emerald-100",
                iconColor: "text-emerald-600",
                title: "Seamless Handoff",
                subtitle: "AI → Human transfer",
                desc: "জটিল সমস্যা হলে AI নিজেই সঠিক human agent কে transfer করে — context সহ।",
                tags: ["Smart Routing", "Handoff"],
              },
            ].map(({ emoji, bg, border, iconBg, iconColor, title, subtitle, desc, tags }) => (
              <div
                key={title}
                className={`group ${bg} border-2 ${border} rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {emoji}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-0.5">{title}</h3>
                <p className={`text-sm font-semibold ${iconColor} mb-2`}>{subtitle}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className={`${iconBg} ${iconColor} text-xs px-3 py-1 rounded-full font-medium`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom highlight banner */}
          <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 text-white">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  সম্পূর্ণ Managed Voice AI Infrastructure
                </h3>
                <p className="text-green-100 max-w-xl">
                  Server setup, scaling, maintenance — সব আমাদের দায়িত্ব। আপনি শুধু আপনার ব্যবসায় মনোযোগ দিন।
                  আমাদের Voice AI Engine সব সামলাবে।
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <div className="text-center bg-white/15 rounded-xl px-6 py-4">
                  <div className="text-3xl font-black">99.9%</div>
                  <div className="text-green-200 text-sm">Uptime SLA</div>
                </div>
                <div className="text-center bg-white/15 rounded-xl px-6 py-4">
                  <div className="text-3xl font-black">&lt;300ms</div>
                  <div className="text-green-200 text-sm">Latency</div>
                </div>
                <div className="text-center bg-white/15 rounded-xl px-6 py-4">
                  <div className="text-3xl font-black">∞</div>
                  <div className="text-green-200 text-sm">Concurrent Calls</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>







      <section className="px-6 py-16 lg:px-[10%]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-teal-600 to-cyan-700 rounded-3xl p-10 lg:p-16 text-center text-white relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Transform Your Customer Service?
              </h2>
              <p className="text-teal-100 max-w-xl mx-auto mb-8 text-lg">
                Join thousands of Bangladeshi businesses already using SohayakAI to delight their customers every day.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  onClick={handleClick}
                  className="bg-white text-teal-700 hover:bg-teal-50 px-8 py-6 text-lg rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Mic className="w-5 h-5 mr-2" />
                  Try Demo Free
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-white/40 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl transition-all duration-300"
                >
                  Schedule a Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
