import React, { useState, useEffect } from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import {
  DiCodeigniter,
  DiAndroid,
  DiWebplatform,
  DiMongodb,
} from 'react-icons/di';
import { FaReact, FaUnity, FaLaravel, FaAngular } from 'react-icons/fa';
import { GiWolfHead } from 'react-icons/gi';
import { SiDjango, SiPostgresql, SiSpring, SiTensorflow } from 'react-icons/si';
import { FcLinux } from 'react-icons/fc';

import useMediaQueryFixed from '../../hooks/use-media-query';

import { SimpleCard } from '../ui/cards/SimpleCard';
import { ScaleFade } from '@chakra-ui/react';
import $ from 'jquery';

const technologies = [
  {
    id: 1,
    bg: 'green.400',
    bg_secundary: '#70f06e',
    icon: DiAndroid,
    text: 'Android apps',
  },
  {
    id: 2,
    bg: 'blue.200',
    bg_secundary: 'cyan.300',
    icon: FaReact,
    text: 'React/NextJS',
  },
  {
    id: 3,
    bg: 'salmon',
    bg_secundary: 'red.200',
    icon: GiWolfHead,
    text: 'NestJs',
  },
  {
    id: 4,
    bg: '#a4a6a4',
    bg_secundary: '#b6d9d5',
    icon: FaUnity,
    text: 'Videogames',
  },
  {
    id: 7,
    bg: '#a1b8ed',
    bg_secundary: '#bac7e6',
    icon: SiPostgresql,
    text: 'Databases SQL',
  },
  {
    id: 8,
    bg: '#77ed9c',
    bg_secundary: '#a1edb9',
    icon: DiMongodb,
    text: 'Databases NoSQL',
  },
  {
    id: 9,
    bg: '#a4a6a4',
    bg_secundary: '#b6d9d5',
    icon: FcLinux,
    text: 'Linux/Servers',
  },
  {
    id: 10,
    bg: '#ccdb48',
    bg_secundary: '#e9f296',
    icon: SiTensorflow,
    text: 'Machine Learning',
  },
  {
    id: 12,
    bg: '#507a5a',
    bg_secundary: '#83a38a',
    icon: SiDjango,
    text: 'Django',
  },
];

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function Profile() {
  const isSmallerScreen = useMediaQueryFixed('(max-width:600px)');
  // console.log("isNotSmallerScreen", isNotSmallerScreen);

  useEffect(() => {}, []);

  return (
    <Flex direction={isSmallerScreen ? 'column' : 'row'} w="100%">
      <Box alignSelf="center" px="8" py="8" borderColor="blue" border="1px">
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
          3+
        </Heading>
        <Text fontSize="2xl" color="gray.400">
          Years of experience
        </Text>
      </Box>

      <Box m="1rem">
        <Text
          fontWeight="bold"
          fontSize={isSmallerScreen ? 'xl' : '3xl'}
          textAlign="center"
        >
          Developer and data scientist focused on machine learning
        </Text>
        <Text
          fontWeight="normal"
          fontSize={isSmallerScreen ? 'xl' : '2xl'}
          textAlign="center"
        >
          I know mainly the following technologies:
        </Text>
        <Flex
          alignSelf="center"
          direction="row"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
        >
          {technologies.map((tech, index) => {
            return (
              <SimpleCard
                key={tech.id + 'card'}
                bg={tech.bg}
                bg_secundary={tech.bg_secundary}
                icon={tech.icon}
                text={tech.text}
                waitToShow={0 * index}
              />
            );
          })}
        </Flex>
      </Box>
    </Flex>
  );
}

export default Profile;
