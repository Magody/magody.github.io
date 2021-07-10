import React from "react";
import {
  Box,
  Button,
  Circle,
  Flex,
  Image,
  Stack,
  Text,
  useColorMode
} from "@chakra-ui/react";
import useMediaQueryFixed from "../../hooks/use-media-query";

const Presentation = () => {
  const { colorMode } = useColorMode();

  const isDark = colorMode == "dark";
  // console.log("presentation")

  const isSmallerScreen = useMediaQueryFixed("(max-width:600px)");

  return (
    <Stack>
      <Circle
        position="absolute"
        bg="blue.100"
        opacity="0.1"
        w="300px"
        h="300px"
        alignSelf="flex-end"
      />
      <Flex  direction={isSmallerScreen ? "column" : "row"}
      p={isSmallerScreen ? "0" : "32"}
      alignSelf="flex-start">
        <Box>
          <Text fontSize="3xl" fontWeight="semibold">
            Hi, i am
          </Text>
          <Text
            fontSize="5xl"
            fontWeight="bold"
            bgClip="text"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
          >
            Danny
          </Text>
          <Text color={isDark ? "gray.200" : "gray.500"}> A dreamer 🗣</Text>
          <Button
            mt={8}
            colorScheme="messenger"
            onClick={() => window.open("https://magody.github.io")}
          >
            Work with Me
          </Button>
          
        </Box>
        <Image
            alt="My photo"
            mt={isSmallerScreen ? "12" : "0"}
            mb={isSmallerScreen ? "12" : "0"}
            boxSize="300px"
            alignSelf="center"
            borderRadius="full"
            backgroundColor="transparent"
            boxShadow="lg"
            src="https://avatars.githubusercontent.com/u/37024575?v=4"
          />
      </Flex>
    </Stack>
  );
};

export default Presentation;
