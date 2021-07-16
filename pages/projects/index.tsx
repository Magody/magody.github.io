import {
  Box,
  Flex,
  Grid,
  GridItem,
  Icon,
  IconButton,
  Text,
  Tooltip,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';
import useMediaQueryFixed from '../../hooks/use-media-query';
import { IoMdConstruct } from 'react-icons/io';
import { FaProjectDiagram } from 'react-icons/fa';
import dynamic from 'next/dynamic';
import { EnumProjectTypes, Project } from '../../models/Project';

const CardProject = dynamic(
  () => import('../../components/ui/cards/CardProject'),
);

const prefix = (process.env.NEXT_PUBLIC_BASE_PATH || '') + '/images/projects';

const projects = [
  new Project(
    'machineLearning',
    '/projects/machine_learning/AndroidGestureRecognition',
    prefix + '/machine_learning/AndroidGestureRecognition' + '/0.png',
    'Android Gesture Recognition',
    'Neural Network using signals',
  ),
  new Project(
    'machineLearning',
    '/projects/machine_learning/RecommendationSystemMatrix',
    prefix + '/machine_learning/RecommendationSystemMatrix' + '/0.png',
    'C.F. Recommendation System for a electronic store',
    'Collaborative filtering with tensorflow',
  ),
  new Project(
    'machineLearning',
    '/projects/machine_learning/HumanLearnsToSurvive',
    prefix + '/machine_learning/HumanLearnsToSurvive' + '/1.png',
    'Genetic algorithms: Human learns to survive',
    'A human learn to avoid collisions with monsters and to collect life',
  ),
  new Project(
    'videogames',
    '/projects/videogames/Adodot',
    prefix + '/videogames/Adodot' + '/0.png',
    'RPG mini videogame',
    'Videogame prototype where main character can do a lot of magic and stop time',
  ),
  new Project(
    'applications',
    '/projects/applications/GameOfLife',
    prefix + '/applications/GameOfLife' + '/0.png',
    'Play now online the game of life!',
    'A game with 0 players, you can play it online!',
  ),
  new Project(
    'machineLearning',
    '/projects/machine_learning/RecommendationSystemGeneticAlgorithms',
    prefix +
      '/machine_learning/RecommendationSystemGeneticAlgorithms' +
      '/0.png',
    'Genetic algorithms for YOUTUBE recommendations',
    'Recommendation system with genetic algotrithms using Youtube videos',
  ),
];

const Index = () => {
  const { colorMode } = useColorMode();

  const isSmallerScreen = useMediaQueryFixed('(max-width: 600px)');

  const isDark = colorMode === 'dark';

  const redirectToOldPortfolio = () => {
    window.open('https://magody.github.io/OldPortfolio/');
  };

  return (
    <Flex
      direction={isSmallerScreen ? 'column' : 'row'}
      flexWrap={isSmallerScreen ? 'nowrap' : 'wrap'}
      justifyContent="center"
      alignItems="center"
      w="90vw"
      m="2rem"
    >
      {projects.map((project) => {
        return (
          <CardProject
            key={project.id}
            srcImage={project.srcImage}
            title={project.title}
            bgBox={project.type.bgBox}
            tooltip={project.tooltip}
            destination={project.destination}
            type={project.type.name}
            colorBadge={project.type.colorBadge}
          ></CardProject>
        );
      })}

      <Flex
        justifyContent="center"
        alignItems="center"
        direction="column"
        p="1rem"
      >
        <Icon as={IoMdConstruct} w="8rem" h="8rem"></Icon>
        <Text>
          Im refactoring this portflio with NEXT JS, there are a lot o projects
          that i havent published yet like a chatbot, an inspired game of
          General Chaos, a IA that can compose by it self, datamart and workflow
          with pentaho, etc. Whatever, you can still check my old portfolio with
          college projects, they are interesting ¡so check it out! Of course the
          best projects of that portfolio i will refactor here in English.
        </Text>
        <Tooltip label="My old portfolio" aria-label="A tooltip">
          <IconButton
            m={isSmallerScreen ? '1rem' : ''}
            aria-label="Old portfolio"
            icon={<FaProjectDiagram />}
            onClick={redirectToOldPortfolio}
          ></IconButton>
        </Tooltip>
      </Flex>
    </Flex>
  );
};

export default Index;
