import React, { useState, useEffect } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import Icon from "@chakra-ui/icon";
import { DiCodeigniter, DiAndroid, DiWebplatform, DiMongodb } from "react-icons/di";
import { FaReact, FaUnity, FaLaravel, FaAngular } from "react-icons/fa";
import { GiWolfHead } from "react-icons/gi";
import { SiPostgresql, SiSpring, SiTensorflow } from "react-icons/si";
import { FcLinux } from "react-icons/fc";



import useMediaQueryFixed from "../../hooks/use-media-query";

import { SimpleCard } from "../ui/cards/SimpleCard";

function Profile() {
  const isSmallerScreen = useMediaQueryFixed("(max-width:600px)");
  // console.log("isNotSmallerScreen", isNotSmallerScreen);



  const technologies = [
    {
      id: 1,
      bg: "green.400",
      bg_secundary: "#70f06e",
      icon: DiAndroid,
      text: "Android apps"
    },
    {
      id: 2,
      bg: "blue.200",
      bg_secundary: "cyan.300",
      icon: FaReact,
      text: "React/NextJS"
    },
    {
      id: 3,
      bg: "salmon",
      bg_secundary: "red.200",
      icon: GiWolfHead,
      text: "NestJs"
    },
    {
      id: 4,
      bg: "#a4a6a4",
      bg_secundary: "#b6d9d5",
      icon: FaUnity,
      text: "Videogames"
    },
    {
      id: 5,
      bg: "#de9c18",
      bg_secundary: "#f0ddb9",
      icon: FaLaravel,
      text: "Laravel"
    },
    {
      id: 6,
      bg: "#00c77e",
      bg_secundary: "#82edc6",
      icon: SiSpring,
      text: "Spring Boot"
    },
    {
      id: 7,
      bg: "#a1b8ed",
      bg_secundary: "#bac7e6",
      icon: SiPostgresql,
      text: "Databases SQL"
    },
    {
      id: 8,
      bg: "#77ed9c",
      bg_secundary: "#a1edb9",
      icon: DiMongodb,
      text: "Databases NoSQL"
    },
    {
      id: 9,
      bg: "#a4a6a4",
      bg_secundary: "#b6d9d5",
      icon: FcLinux,
      text: "Linux/Servers"
    },
    {
      id: 10,
      bg: "#ccdb48",
      bg_secundary: "#e9f296",
      icon: SiTensorflow,
      text: "Machine Learning"
    },
    {
      id: 11,
      bg: "#ed864a",
      bg_secundary: "#f56614",
      icon: FaAngular,
      text: "Angular"
    }

    
  ]

  return (
    <Flex direction={isSmallerScreen ? "column" : "row"} w="100%">
      <Box alignSelf="center" px="8" py="8" borderColor="blue" border="1px">
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
          2+
        </Heading>
        <Text fontSize="2xl" color="gray.400">
        Years of experience
        </Text>
      </Box>

      <Box m="1rem">
        <Text fontWeight="bold" fontSize={isSmallerScreen? "xl":"3xl"} textAlign="center">
        Developer and data scientist focused on machine learning
        </Text>
        <Text fontWeight="normal" fontSize={isSmallerScreen? "xl":"2xl"} textAlign="center">
        I know the following technologies:
        </Text>
        <Flex alignSelf="center" direction="row" justifyContent="center" alignItems="center"
      flexWrap="wrap">
          {
            technologies.map((tech)=>{
              return <SimpleCard key={tech.id} bg={tech.bg} bg_secundary={tech.bg_secundary} icon={tech.icon} text={tech.text} />;
            })
          }
          
        </Flex>
      </Box>
    </Flex>
  );
}

export default Profile;