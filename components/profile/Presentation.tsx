import React from "react";
import {
  Box,
  Button,
  Circle,
  Flex,
  HStack,
  Image,
  Spacer,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import useMediaQueryFixed from "../../hooks/use-media-query";
import ButtonWhatsapp from "../ui/ButtonWhatsapp";
import ButtonTelegram from "../ui/ButtonTelegram";

const boxSize = "10rem";

const Presentation: React.FC<{ greeting: string }> = (props) => {
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
        w={boxSize}
        h={boxSize}
        alignSelf="flex-end"
      />
      <Flex
        direction={isSmallerScreen ? "column" : "row"}
        p={isSmallerScreen ? "0" : "4"}
        w="90vw"
        maxW="90vw"
      >
        <Box
          style={{
            flex: 3,
            
          }}
        >
          <Text
            textAlign="center"
            fontSize={isSmallerScreen ? "2xl" : "3xl"}
            fontWeight="semibold"
            className="over_particles responsive_text"
          >
            If you can imagine it,
          </Text>
          <Text
            textAlign="center"
            fontSize={isSmallerScreen ? "3xl" : "5xl"}
            className="over_particles responsive_text"
            fontWeight="bold"
            bgClip="text"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
          >
            You can program it
          </Text>
          <Text textAlign="center" color={isDark ? "gray.200" : "gray.500"}>
            {props.greeting}
          </Text>
          <Flex
            direction={isSmallerScreen ? "column" : "row"}
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
          >
            <Box m="1rem">
            <ButtonWhatsapp
              phone="593978654041"
              text="Hi, Danny. Whats going on?"
            ></ButtonWhatsapp>
            </Box>
            <Box m="1rem">
            <ButtonTelegram username="magody_pendragon"></ButtonTelegram>
            </Box>
            
            
          </Flex>
        </Box>
        <Flex
          style={{
            flex: 1,
          }}
          justifyContent="center"
          alignItems="center"
        >
          <Image
            className="over_particles"
            alt="My photo"
            m={isSmallerScreen ? "0.5rem" : "0"}
            w={boxSize}
            h={boxSize}
            borderRadius="full"
            backgroundColor="transparent"
            boxShadow="lg"
            src="https://avatars.githubusercontent.com/u/37024575?v=4"
          />
        </Flex>
      </Flex>
    </Stack>
  );
};

export default Presentation;
