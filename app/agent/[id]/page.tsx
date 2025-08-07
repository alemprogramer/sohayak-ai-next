"use client";

import React, { useEffect, useState, useCallback } from "react";
import { Mic, MicOff, Headphones, Loader2, PhoneOff, MessageSquare } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import {
  RoomContext,
  useVoiceAssistant,
  DisconnectButton,
  RoomAudioRenderer
} from "@livekit/components-react";
import { Room, RoomEvent } from "livekit-client";
import type { ConnectionDetails } from "../../api/connection-details/route";
import { useSearchParams } from "next/navigation";
import { TanningDialog } from "@/app/demos/__components/TrainnerModel";

function VoiceAgentCard({
  agentName = "AI Assistant",
  agentRole = "Voice Agent",
  agentAvatar = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face",
  onConnect,
  setOpenModel
}: {
  agentName?: string;
  agentRole?: string;
  agentAvatar?: string;
  onConnect: () => void;
  setOpenModel: any;
}) {
  const { state: agentState } = useVoiceAssistant();
  console.log("🚀 ~ VoiceAgentCard ~ agentState:", agentState)
  const [time, setTime] = useState(0);
  // const [openModel,setOpenModel] = useState(false)
  const searchParams = useSearchParams();
  const training = searchParams.get("training");
  console.log("🚀 ~ VoiceAgentCard ~ train:", training)

  const isListening = agentState === "listening";
  const isSpeaking = agentState === "speaking";
  const isThinking = agentState === "thinking";
  const isConnected = isListening || isSpeaking || isThinking;
  const isDisconnected = agentState === "disconnected";
  const isConnecting = agentState === "connecting";

  useEffect(() => {
    let intervalId: any;
    if (isConnected) {
      intervalId = setInterval(() => {
        setTime((t) => t + 1);
      }, 1000);
    } else {
      setTime(0);
    }
    return () => clearInterval(intervalId);
  }, [isConnected]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleToggle = () => {
    if (isDisconnected) onConnect();
  };

  

  const MicButton = () => (
    <motion.button
      onClick={handleToggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300",
        isConnected
          ? "bg-red-500 hover:bg-red-600 text-white"
          : "bg-primary hover:bg-primary/90 text-primary-foreground"
      )}
    >
      <AnimatePresence mode="wait">

        {isConnected ? (
          <motion.div
            key="mic-off"
            // initial={{ scale: 0,  }}
            animate={{ scale: 1, }}
            // exit={{ scale: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* <MicOff className="w-6 h-6" /> */}
            <div className={`w-8 h-8 flex items-center justify-center  text-white rounded-md relative ${isConnected ? 'bg-red-500' : 'bg-blue-500'}`}>
              {isConnected && (
                <span className="text-xs absolute "><PhoneOff /></span>
              )}
            </div>
          </motion.div>

        ) : (
          <motion.div
            key="mic-on"
            // initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            // exit={{ scale: 0, rotate: 180 }}
            transition={{ duration: 0.2 }}
          >
            {isConnecting ?
            <div className={`w-8 h-8 flex items-center justify-center  text-white rounded-md relative  bg-blue-500} `}>
             <Loader2 className={`w-5 h-5  animate-spin transition-opacity duration-300 `}
            /> </div>:
              <Mic className="w-7 h-8 cursor-pointer" />

            }
          </motion.div>
        )}
      </AnimatePresence>

      {isConnected && (
        <motion.div
          className="absolute inset-0 rounded-full bg-red-500/30 cursor-pointer"
          // initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 1.5, opacity: [0, 0.5, 0] }}
        // exit={{ scale: 1, opacity: 0 }}
        // transition={{ duration: 1.5, repeat: Infinity }}
        />
      )}
    </motion.button>
  );

  return (
    <Card className={cn(
      "relative overflow-hidden p-6 transition-all duration-300 hover:scale-[1.02] group",
      isConnected && "ring-2 ring-primary/50 shadow-lg"
    )}>
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isConnected ? 0.1 : 0,
          background: isConnected
            ? "linear-gradient(45deg, hsl(var(--primary)) 0%, transparent 50%, hsl(var(--primary)) 100%)"
            : "transparent"
        }}
        transition={{ duration: 0.3 }}
      />

      <div className="absolute top-4 right-4 flex gap-2">
        {training == 'verticasoft'&& <MessageSquare onClick={()=>setOpenModel((prev:boolean)=>!prev)} className="w-3 h-3 cursor-pointer" />}
        
        <motion.div
          className={cn("w-3 h-3 rounded-full", isConnected ? "bg-green-500" : "bg-gray-400")}
          animate={isConnected ? { scale: [1, 1.2, 1] } : { scale: 1 }}
          transition={{ duration: 1, repeat: isConnected ? Infinity : 0 }}
        />
      </div>

      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-border">
          <img
            src={agentAvatar}
            alt={agentName}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-center space-y-1">
          <h3 className="font-semibold text-lg text-foreground">{agentName}</h3>
          <p className="text-sm text-muted-foreground">{agentRole}</p>
        </div>

        <div className="flex items-center justify-center h-8 space-x-1">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 bg-primary rounded-full"
              initial={{ height: 4 }}
              animate={{
                height: isSpeaking ? [4, 8 + Math.random() * 16, 6 + Math.random() * 8, 4] : 4,
                opacity: isSpeaking ? 1 : 0.3
              }}
            // transition={{
            //   duration: isSpeaking ? 0.8 : 0.3,
            //   repeat: isSpeaking ? Infinity : 0,
            //   delay: isSpeaking ? i * 0.1 : 0,
            //   ease: "easeInOut"
            // }}
            />
          ))}
        </div>

        <div className="font-mono text-sm text-muted-foreground">
          {formatTime(time)}
        </div>

        {isConnected || isListening || isSpeaking || isThinking ? (
          <DisconnectButton>
            <MicButton />
          </DisconnectButton>
        ) : (
          <MicButton />
        )}

        <p className="text-xs text-center text-muted-foreground">
          {isListening ? "Listening..." : isConnecting ? "Connecting..." : isSpeaking ? "Speaking..." : isThinking ? "Thinking..." : "Click to start"}
        </p>
      </div>
    </Card>
  );
}

function MultipleVoiceAgentCards() {
  const [room] = useState(new Room());
  const [openModel,setOpenModel] = useState(false)

  useEffect(() => {
    room.on(RoomEvent.MediaDevicesError, onDeviceFailure);
    return () => {
      room.off(RoomEvent.MediaDevicesError, onDeviceFailure);
    };
  }, [room]);

  const onConnect = useCallback(async () => {
    const companyId: any = "6869636ed594fd6701d7714f";
    const url = new URL(
      process.env.NEXT_PUBLIC_CONN_DETAILS_ENDPOINT ?? "/api/connection-details",
      window.location.origin
    );
    url.searchParams.set("companyId", companyId);
    const response = await fetch(url.toString());
    const connectionDetailsData: ConnectionDetails = await response.json();
    await room.connect(connectionDetailsData.serverUrl, connectionDetailsData.participantToken);
    await room.localParticipant.setMicrophoneEnabled(true);
  }, [room]);

  const agents = [
    {
      id: "assistant-3",
      name: "Maya",
      role: "Sales Assistant",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <RoomContext.Provider value={room}>
      <RoomAudioRenderer />
      <div className="min-h-screen p-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Voice Agent Dashboard</h1>
            <p className="text-muted-foreground">Manage your AI voice assistants</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 justify-items-center">
            {agents.map((agent) => (
              <div key={agent.id} className="w-[25%]">
                <VoiceAgentCard
                  agentName={agent.name}
                  agentRole={agent.role}
                  agentAvatar={agent.avatar}
                  onConnect={onConnect}
                  setOpenModel={setOpenModel}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <TanningDialog open={openModel} setOpen={setOpenModel}/>
    </RoomContext.Provider>
  );
}

export default MultipleVoiceAgentCards;

function onDeviceFailure(error: Error) {
  console.error(error);
  alert("Microphone/camera permission failed. Please allow access and reload.");
}
