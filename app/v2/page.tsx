"use client";

import { useEffect, useRef, useState } from "react";

export default function V2RealtimePage() {
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [dataChannel, setDataChannel] = useState<RTCDataChannel | null>(null);
  const peerConnection = useRef<RTCPeerConnection | null>(null);
  const audioElement = useRef<HTMLAudioElement | null>(null);

  // ⏱ Timer state
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const isSpeaking = isSessionActive;

  async function startSession() {
    setIsLoading(true);
    try {
      const tokenResponse = await fetch("/api/v2/token");
      const data = await tokenResponse.json();
      const EPHEMERAL_KEY = data.value;

      const pc = new RTCPeerConnection();

      audioElement.current = document.createElement("audio");
      audioElement.current.autoplay = true;
      pc.ontrack = (e) => {
        if (audioElement.current) {
          audioElement.current.srcObject = e.streams[0];
        }
      };

      const ms = await navigator.mediaDevices.getUserMedia({ audio: true });
      pc.addTrack(ms.getTracks()[0]);

      const dc = pc.createDataChannel("oai-events");
      setDataChannel(dc);

      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);

      const sdpResponse = await fetch(
        "https://api.openai.com/v1/realtime/calls?model=gpt-realtime",
        {
          method: "POST",
          body: offer.sdp,
          headers: {
            Authorization: `Bearer ${EPHEMERAL_KEY}`,
            "Content-Type": "application/sdp",
          },
        }
      );

      const sdp = await sdpResponse.text();
      await pc.setRemoteDescription({ type: "answer", sdp });

      peerConnection.current = pc;
    } catch (error) {
      console.error("Failed to start session:", error);
      setIsLoading(false);
    }
  }

  function stopSession() {
    dataChannel?.close();
    peerConnection.current?.getSenders().forEach((s) => s.track?.stop());
    peerConnection.current?.close();

    setIsSessionActive(false);
    setIsLoading(false);
    setDataChannel(null);
    peerConnection.current = null;

    // ⏱ Stop timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setSeconds(0);
  }

  useEffect(() => {
    if (!dataChannel) return;

    const onOpen = () => {
      setIsSessionActive(true);
      setIsLoading(false);

      const sessionUpdate = {
        type: "session.update",
        session: {
          instructions: "You are a helpful Bangla AI assistant. Talk naturally in Bengali with a warm tone.",
        },
      };
      dataChannel.send(JSON.stringify(sessionUpdate));

      timerRef.current = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    };

    dataChannel.addEventListener("open", onOpen);

    return () => {
      dataChannel.removeEventListener("open", onOpen);
    };
  }, [dataChannel]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  return (
    <div className="py-20 px-6 flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900">
          Voice Agent Call
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          Talk to our AI voice assistant in real time
        </p>
      </div>

      <div className={`relative w-[340px] rounded-3xl bg-white/80 backdrop-blur-md p-8 text-center shadow-2xl border border-white/20 transition-all duration-500 ${isSpeaking ? 'ring-4 ring-teal-400' : ''}`}>
        <div className="relative mx-auto w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg bg-cyan-50">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
            alt="Maya"
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="mt-4 text-2xl font-bold text-gray-900">
          Maya
        </h2>
        <p className="text-sm font-medium text-teal-600">Sales Assistant</p>

        <div className="mt-6 text-gray-800 font-mono text-3xl font-semibold tracking-wider">
          {minutes}:{secs}
        </div>

        <div className="relative mt-8 flex justify-center">
          {isSpeaking && (
            <span className="absolute w-20 h-20 rounded-full bg-red-400/40 animate-ping" />
          )}

          <button
            onClick={isSessionActive ? stopSession : startSession}
            disabled={isLoading}
            className={`relative z-10 w-16 h-16 flex items-center justify-center rounded-full text-white text-xl shadow-xl transition-all duration-300 cursor-pointer
            ${isSessionActive
                ? "bg-red-500 hover:bg-red-600"
                : isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-teal-600 hover:bg-teal-700"
              }`}
          >
            {isLoading ? (
              <svg
                className="animate-spin h-8 w-8 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : isSessionActive ? (
              "📞"
            ) : (
              "📞"
            )}
          </button>
        </div>

        <p className="mt-4 text-sm font-semibold text-gray-600">
          {isLoading
            ? "Connecting..."
            : isSessionActive
              ? "Tap to end call"
              : "Click to start call"}
        </p>
      </div>
    </div>
  );
}
