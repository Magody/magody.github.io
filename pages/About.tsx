import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import { timers } from "jquery";
import React, { useState, useEffect, useRef } from "react";

import useMediaQueryFixed from "../hooks/use-media-query";
import $ from "jquery";

import dynamic from 'next/dynamic';

const Galaxy = dynamic(
  () => import("../components/3D/Galaxy")
)

const phrases = [
  {
    text: "Can a machine do something with all its heart?",
    wait: 4000,
  },
  {
    text: "No, a bunch of electric sparks in their head would be incapable of doing that.",
    wait: 6000,
  },
  {
    text: "A machine just follows a purpose blindly.",
    wait: 5000,
  },
  {
    text: "But... Aren't we the same?",
    wait: 4000,
  },
  {
    text: "What does it mean to do something with all our heart?",
    wait: 6000,
  },
  {
    text: "",
    wait: 0,
  },
];

const sleep = (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const prefix = "";
const filename = prefix + "/audio/i_am_ia.mp3";

const About: React.FC<{ audio: any }> = (props) => {
  const { colorMode } = useColorMode();
  const [indexPresentation, setIndexPresentation] = useState({
    index: 0,
    text: "",
  });
  const musicPlayers = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio(filename) : undefined
  );

  const isSmallerScreen = useMediaQueryFixed("(max-width: 600px)");

  const isDark = colorMode === "dark";

  useEffect(() => {
    $("#box").show();
    $("#final_texts").hide();
    var viewportOffset = $("#flex_vh")[0].getBoundingClientRect();
    // these are relative to the viewport, i.e. the window
    var top = viewportOffset.top;

      $("#flex_vh").css("height", window.innerHeight-top-5);
    const showMessage = async () => {
      for (let index = 0; index < phrases.length; index++) {
        const element = phrases[index];
        setIndexPresentation({
          index: index,
          text: element.text,
        });
        await sleep(element.wait);
      }
      $("#box").hide();
      $("#final_texts").show();
      const height = window.innerHeight/ 2;

      $("#flex_vh").css("height", height);
      
    };
    musicPlayers.current
      ?.play()
      .then(() => {
        console.log("played");
        if (musicPlayers.current instanceof HTMLAudioElement) {
          musicPlayers.current.volume = 0.25;
        } else {
          console.log("No instance", typeof musicPlayers.current);
        }
      })
      .catch(() => {
        console.log("User not interacted with website");
      });

    showMessage();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <Flex
        id="flex_vh"
        w="100%"
        h="80vh"
        m="0rem"
        position="relative"
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Flex
          id="box"
          w="100%"
          h="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Text textAlign="center" fontSize={isSmallerScreen ? "3xl" : "6xl"}>
            {indexPresentation.text}
          </Text>
        </Flex>

        {indexPresentation.index >= phrases.length-1 && <Galaxy />}
      </Flex>
      <Flex
        id="final_texts"
        m={isSmallerScreen ? "0rem" : "2rem"}
        mt="3rem"
        direction={isSmallerScreen ? "column" : "row"}
        justifyContent="center"
        alignItems="center"
      >
        <Text
          textAlign="center"
          fontSize="1.2rem"
          mt={isSmallerScreen ? "1rem" : "0rem"}
          p="1rem"
        >
          Since the first time I wrote hello world I have wondered, what is it
          that gives us consciousness. Perhaps understanding why a machine can
          or cannot reach that level will give us answers to understand
          ourselves.
        </Text>

        <Text
          textAlign="center"
          fontSize="1.2rem"
          p="1rem"
          mt={isSmallerScreen ? "1rem" : "0rem"}
        >
          The background music in this section, if you were one of the lucky
          ones to hear it, was written by an AI. It is nothing more than
          composite mathematical functions transforming into 0s and 1s, but
          perhaps our thoughts and consciousness are also slightly more complex
          composite mathematical functions.
        </Text>
      </Flex>
    </React.Fragment>
  );
};

export default About;
