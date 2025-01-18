"use client";

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const Galaxy = dynamic(() => import("@/components/3D/Galaxy"), { ssr: false });

const phrases = [
  { text: "Can a machine do something with all its heart?", wait: 4000 },
  {
    text: "No, a bunch of electric sparks in their head would be incapable of doing that.",
    wait: 6000,
  },
  { text: "A machine just follows a purpose blindly.", wait: 5000 },
  { text: "But... Aren't we the same?", wait: 4000 },
  { text: "What does it mean to do something with all our heart?", wait: 6000 },
  { text: "", wait: 0 },
];

const sleep = (milliseconds: number) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";
const audioFile = `${prefix}/audio/i_am_ia.mp3`;

const About: React.FC = () => {
  const [currentPhrase, setCurrentPhrase] = useState({ index: 0, text: "" });
  const [showText, setShowText] = useState(false);
  const [showGalaxy, setShowGalaxy] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(
    typeof Audio !== "undefined" ? new Audio(audioFile) : null
  );

  useEffect(() => {
    const playAudio = async () => {
      try {
        audioRef.current?.play();
        if (audioRef.current) {
          audioRef.current.volume = 0.1;
        }
      } catch (err) {
        console.error("Audio play failed: ", err);
      }
    };

    const runPhrases = async () => {
      for (let i = 0; i < phrases.length; i++) {
        setCurrentPhrase({ index: i, text: phrases[i].text });
        await sleep(phrases[i].wait);
      }
      // After all phrases are shown
      setShowText(true);
      setShowGalaxy(true);
    };

    playAudio();
    runPhrases();
    
    //setShowText(true);
    //setShowGalaxy(true);

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  return (
    <div>
      {/* Main Animation Section */}
      <div
        id="flex_vh"
        style={{
          width: "100%",
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: showText ? "none" : "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <h1 style={{ textAlign: "center", fontSize: "3rem" }}>
            {currentPhrase.text}
          </h1>
        </div>
        {
        showGalaxy && 
        <div style={{ margin: "2rem", textAlign: "center", overflow: "auto" }}>
            <p style={{ fontSize: "2.2rem", padding: "1rem" }}>
            Since the first time I wrote hello world I have wondered, what is it
            that gives us consciousness. Perhaps understanding why a machine can
            or cannot reach that level will give us answers to understand
            ourselves.
            </p>
            <p style={{ fontSize: "2.2rem", padding: "1rem" }}>
            The background music in this section, if you were one of the lucky
            ones to hear it, was written by an AI. It is nothing more than
            composite mathematical functions transforming into 0s and 1s, but
            perhaps our thoughts and consciousness are also slightly more
            complex composite mathematical functions.
            </p>
        </div>
        }
      </div>
    </div>
  );
};

export default About;
