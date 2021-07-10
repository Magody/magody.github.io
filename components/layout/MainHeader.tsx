import {
  Flex,
  Heading,
  IconButton,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";

const MainHeader = () => {
  const { colorMode, setColorMode } = useColorMode();

  const handleToggleColorMode = () => {
    if (colorMode == "light") {
      setColorMode("dark");
    } else if (colorMode == "dark") {
      setColorMode("light");
    }
  };

  return (
    <Flex w="100%">
      <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
        Danny
      </Heading>
      <Spacer></Spacer>
      <IconButton aria-label="Github" icon={<FaGithub />}></IconButton>
      <IconButton
        ml="2"
        aria-label="Linkedin"
        icon={<FaLinkedin />}
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
