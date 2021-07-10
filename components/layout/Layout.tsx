import React from "react";
import { Box, Flex, Heading, Stack, VStack } from "@chakra-ui/layout";
import { IconButton, Spacer, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon, FaGithub, FaLinkedin } from "react-icons/fa";
import MainHeader from "./MainHeader";

const Layout: React.FC<{}> = (props) => {
  return (
    <VStack p={5}>
      <MainHeader />

      {props.children}
    </VStack>
  );
};

export default Layout;
