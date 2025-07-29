"use client";

import React, { useState, useEffect } from "react";
import { Mic, MicOff } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

interface VoiceAgentCardProps {
    agentName?: string;
    agentRole?: string;
    agentAvatar?: string;
    isActive?: boolean;
    onToggle?: (isActive: boolean) => void;
    className?: string;
}

function VoiceAgentCard({
    agentName = "AI Assistant",
    agentRole = "Voice Agent",
    agentAvatar = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face",
    isActive = false,
    onToggle,
    className
}: VoiceAgentCardProps) {
    const [listening, setListening] = useState(isActive);
    const [time, setTime] = useState(0);

    useEffect(() => {
        setListening(isActive);
    }, [isActive]);

    useEffect(() => {
        let intervalId: number | any;

        if (listening) {
            intervalId = setInterval(() => {
                setTime((t) => t + 1);
            }, 1000);
        } else {
            setTime(0);
        }

        return () => clearInterval(intervalId);
    }, [listening]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    };

    const handleToggle = () => {
        const newState = !listening;
        setListening(newState);
        onToggle?.(newState);
    };

    return (
        <Card className={cn(
            "relative overflow-hidden p-6 transition-all duration-300 hover:scale-[1.02] group",
            listening && "ring-2 ring-primary/50 shadow-lg",
            className
        )}>
            {/* Animated background gradient */}
            <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: listening ? 0.1 : 0,
                    background: listening
                        ? "linear-gradient(45deg, hsl(var(--primary)) 0%, transparent 50%, hsl(var(--primary)) 100%)"
                        : "transparent"
                }}
                transition={{ duration: 0.3 }}
            />

            {/* Status indicator */}
            <div className="absolute top-4 right-4">
                <motion.div
                    className={cn(
                        "w-3 h-3 rounded-full",
                        listening ? "bg-green-500" : "bg-gray-400"
                    )}
                    animate={listening ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                    transition={{ duration: 1, repeat: listening ? Infinity : 0 }}
                />
            </div>

            <div className="flex flex-col items-center space-y-4">
                {/* Agent Avatar */}
                <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <div className={cn(
                        "w-20 h-20 rounded-full overflow-hidden border-4 transition-colors duration-300",
                        listening ? "border-primary" : "border-border"
                    )}>
                        <img
                            src={agentAvatar}
                            alt={agentName}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Pulse animation when listening */}
                    <AnimatePresence>
                        {listening && (
                            <motion.div
                                className="absolute inset-0 rounded-full border-2 border-primary"
                                initial={{ scale: 1, opacity: 1 }}
                                animate={{ scale: 1.5, opacity: 0 }}
                                exit={{ scale: 1, opacity: 0 }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Agent Info */}
                <div className="text-center space-y-1">
                    <h3 className="font-semibold text-lg text-foreground">{agentName}</h3>
                    <p className="text-sm text-muted-foreground">{agentRole}</p>
                </div>

                {/* Voice Visualizer */}
                <div className="flex items-center justify-center h-8 space-x-1">
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-1 bg-primary rounded-full"
                            initial={{ height: 4 }}
                            animate={{
                                height: listening
                                    ? [4, 8 + Math.random() * 16, 6 + Math.random() * 8, 4]
                                    : 4,
                                opacity: listening ? 1 : 0.3
                            }}
                            transition={{
                                duration: listening ? 0.8 : 0.3,
                                repeat: listening ? Infinity : 0,
                                delay: listening ? i * 0.1 : 0,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </div>

                {/* Timer */}
                <motion.div
                    className="font-mono text-sm text-muted-foreground"
                    animate={{ opacity: listening ? 1 : 0.5 }}
                >
                    {formatTime(time)}
                </motion.div>

                {/* Microphone Button */}
                <motion.button
                    className={cn(
                        "relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300",
                        listening
                            ? "bg-red-500 hover:bg-red-600 text-white"
                            : "bg-primary hover:bg-primary/90 text-primary-foreground"
                    )}
                    onClick={handleToggle}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <AnimatePresence mode="wait">
                        {listening ? (
                            <motion.div
                                key="mic-off"
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                exit={{ scale: 0, rotate: 180 }}
                                transition={{ duration: 0.2 }}
                            >
                                <MicOff className="w-6 h-6" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="mic-on"
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                exit={{ scale: 0, rotate: 180 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Mic className="w-6 h-6" />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Button glow effect */}
                    <AnimatePresence>
                        {listening && (
                            <motion.div
                                className="absolute inset-0 rounded-full bg-red-500/30"
                                initial={{ scale: 1, opacity: 0 }}
                                animate={{ scale: 1.5, opacity: [0, 0.5, 0] }}
                                exit={{ scale: 1, opacity: 0 }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                        )}
                    </AnimatePresence>
                </motion.button>

                {/* Status Text */}
                <motion.p
                    className="text-xs text-center text-muted-foreground"
                    animate={{ opacity: listening ? 1 : 0.7 }}
                >
                    {listening ? "Listening..." : "Click to start"}
                </motion.p>
            </div>
        </Card>
    );
}

function MultipleVoiceAgentCards() {
    const [activeAgents, setActiveAgents] = useState<Record<string, boolean>>({});

    const agents = [
        // {
        //   id: "assistant-1",
        //   name: "Sarah",
        //   role: "Customer Support",
        //   avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
        // },
        // {
        //     id: "assistant-2",
        //     name: "Alex",
        //     role: "Technical Support",
        //     avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
        // },
        {
          id: "assistant-3",
          name: "Maya",
          role: "Sales Assistant",
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
        },
        // {
        //   id: "assistant-4",
        //   name: "David",
        //   role: "AI Researcher",
        //   avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
        // }
    ];

    const handleAgentToggle = (agentId: string, isActive: boolean) => {
        console.log("🚀 ~ handleAgentToggle ~ isActive:", isActive)
        setActiveAgents(prev => ({
            ...prev,
            [agentId]: isActive
        }));
    };


    //agent functionality
     

    return (
        <div className="min-h-screen  p-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-foreground mb-2">Voice Agent Dashboard</h1>
                    <p className="text-muted-foreground">Manage your AI voice assistants</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 justify-items-center ">

                    {agents.map((agent) => (
                        <div className="w-[25%]">
                        <VoiceAgentCard
                            key={agent.id}
                            agentName={agent.name}
                            agentRole={agent.role}
                            agentAvatar={agent.avatar}
                            isActive={activeAgents[agent.id] || false}
                            onToggle={(isActive) => handleAgentToggle(agent.id, isActive)}
                        />
                        </div>
                    ))}
                </div>


                <div className="mt-8 text-center">
                    <p className="text-sm text-muted-foreground">
                        Active agents: {Object.values(activeAgents).filter(Boolean).length} / {agents.length}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MultipleVoiceAgentCards;
