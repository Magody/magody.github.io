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
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaMoon,
  FaSun,
  FaLanguage,
} from "react-icons/fa";
import { MenuLanguages } from "./MenuLanguages";

const MainHeader = () => {
  const { colorMode, setColorMode } = useColorMode();

  const handleToggleColorMode = () => {
    if (colorMode == "light") {
      setColorMode("dark");
    } else if (colorMode == "dark") {
      setColorMode("light");
    }
  };

  const redirectToGithub = () => {
    window.open("www.github.com/Magody");
  };

  const redirectToLinkedin = () => {
    window.open("www.linkedin.com/in/magody-pendragon");
  };

  console.log("header");
  /*
  <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
        Danny
      </Heading>
  */

  return (
    <Flex w="100%" direction="row" alignItems="center" className="over_particles">
      
      <Box ml="2rem"></Box>
      <MenuLanguages />

      <Spacer></Spacer>
      <IconButton
        aria-label="Github"
        icon={<FaGithub />}
        onClick={redirectToGithub}
      ></IconButton>
      <IconButton
        ml="2"
        aria-label="Linkedin"
        icon={<FaLinkedin />}
        onClick={redirectToLinkedin}
      ></IconButton>
      <IconButton
        ml="8"
        onClick={handleToggleColorMode}
        aria-label="Toggle dark mode"
        icon={colorMode == "dark" ? <FaSun /> : <FaMoon />}
      ></IconButton>
    </Flex>
  );
};

export default MainHeader;
