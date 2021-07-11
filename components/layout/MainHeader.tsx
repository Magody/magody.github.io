import {
  Box,
  Fade,
  Flex,
  Heading,
  Icon,
  IconButton,
  Select,
  Spacer,
  useColorMode,
  useDisclosure,
  VStack,
  transition,
  Tooltip,
  HStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaMoon,
  FaSun,
  FaLanguage,
  FaProjectDiagram,
} from "react-icons/fa";
import { MenuLanguages } from "./MenuLanguages";
import Link from "next/link";
import { useRouter } from "next/router";
import useMediaQueryFixed from "../../hooks/use-media-query";

const MainHeader = () => {
  const { colorMode, setColorMode } = useColorMode();

  const isSmallerScreen = useMediaQueryFixed("(max-width:600px)");
  const router = useRouter();

  useEffect(() => {
    // ensure always start with dark
    if (colorMode == "light") {
      setColorMode("dark");
    }
    
  }, []);

  const handleToggleColorMode = () => {
    if (colorMode == "light") {
      setColorMode("dark");
    } else if (colorMode == "dark") {
      setColorMode("light");
    }
  };

  const redirectToGithub = () => {
    window.open("https://www.github.com/Magody");
  };

  const redirectToLinkedin = () => {
    window.open("https://www.linkedin.com/in/magody-pendragon");
  };
  const redirectToOldPortfolio = () => {
    window.open("https://magody.github.io/OldPortfolio/");
  };

  console.log("header", router.asPath);
  /*
  <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
        Danny
      </Heading>
      <MenuLanguages />
      <Tooltip
        label="This is my old portfolio with projects that i did in my college. ¡Check it out!"
        aria-label="A tooltip"
      >
        <IconButton
          aria-label="Old portfolio"
          icon={<FaProjectDiagram />}
          onClick={redirectToOldPortfolio}
        ></IconButton>
      </Tooltip>
  */

  return (
    <Flex
      w="100%"
      direction="row"
      justifyContent="center"
      alignItems="center"
      className="over_particles"
      flexWrap="wrap"
    >
      <HStack spacing="0.5rem">
        <Box
          className={`nav_button ${
            router.asPath === "/" ? "nav_button_active" : ""
          }`}
          p="0.5rem"
          borderRadius="0.5rem"
        >
          <Link href="/">Home</Link>
        </Box>
        <Box
          className={`nav_button ${
            router.asPath.includes("/projects") ? "nav_button_active" : ""
          }`}
          p="0.5rem"
          borderRadius="0.5rem"
        >
        <Link href="/projects">Projects</Link>
        </Box>
        <Box
          className={`nav_button ${
            router.asPath === "/About" ? "nav_button_active" : ""
          }`}
          p="0.5rem"
          borderRadius="0.5rem"
        >
        <Link href="/About">About me</Link>
        </Box>

      </HStack>

          {
            isSmallerScreen? "": <Spacer></Spacer>
          }
      

      <Tooltip label="My old portfolio" aria-label="A tooltip">
        <IconButton
          m={isSmallerScreen? "1rem": ""}
          aria-label="Old portfolio"
          icon={<FaProjectDiagram />}
          onClick={redirectToOldPortfolio}
        ></IconButton>
      </Tooltip>
      <Tooltip label="My Linkedin" aria-label="A tooltip">
        <IconButton
          m={isSmallerScreen? "1rem": ""}
          ml={isSmallerScreen? "": "1rem"}
          aria-label="Linkedin"
          icon={<FaLinkedin />}
          onClick={redirectToLinkedin}
        ></IconButton>
      </Tooltip>
      <Tooltip
        label="Turn on and turn off the DARK MODE"
        aria-label="A tooltip"
      >
        <IconButton
          m={isSmallerScreen? "1rem": ""}
          ml={isSmallerScreen? "": "1rem"}
          onClick={handleToggleColorMode}
          aria-label="Toggle dark mode"
          icon={colorMode == "dark" ? <FaSun /> : <FaMoon />}
        ></IconButton>
      </Tooltip>
    </Flex>
  );
};

export default MainHeader;
