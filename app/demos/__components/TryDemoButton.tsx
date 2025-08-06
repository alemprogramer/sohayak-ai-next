// app/components/TryDemoButton.jsx
"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"; // আপনার UI button
import { Mic } from "lucide-react";

export default function TryDemoButton({ itemId }:any) {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push(`/agent/${itemId}`)}
      className="bg-teal-600 hover:bg-teal-700 text-white w-full flex items-center justify-center gap-2 cursor-pointer"
    >
      <Mic className="w-4 h-4" />
      Try Sales Demo
    </Button>
  );
}
