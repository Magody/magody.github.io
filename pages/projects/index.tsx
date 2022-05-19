import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Icon,
  IconButton,
  Image,
  Text,
  Tooltip,
  useColorMode,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import useMediaQueryFixed from '../../hooks/use-media-query';
import { IoMdConstruct } from 'react-icons/io';
import { FaProjectDiagram } from 'react-icons/fa';
import dynamic from 'next/dynamic';
import { EnumProjectTypes, Project } from '../../models/Project';
import $ from 'jquery';
import CardProject from '../../components/ui/cards/CardProject';

const prefix = (process.env.NEXT_PUBLIC_BASE_PATH || '') + '/images/projects';

const projects = [

  new Project(
    EnumProjectTypes.dataScience,
    '/projects/data_science/AssociationRulesRestaurant',
    prefix + '/data_science/AssociationRulesRestaurant' + '/0.png',
    'Increasing sales with Association Rules',
    'Data mining algorithm over restaurant transactions to deteminate association rules',
  ),
  new Project(
    EnumProjectTypes.dataScience,
    '/projects/data_science/EDA_KenJee',
    prefix + '/data_science/EDA_KenJee' + '/2.png',
    'Sentimental analysis, EDA and clustering',
    'Data science for youtuber Ken Jee in order to improve the CTR and subscription ratio',
  ),
  new Project(
    EnumProjectTypes.computerVision,
    '/projects/computer_vision/VirtualUI',
    prefix + '/computer_vision/VirtualUI' + '/0.png',
    'Virtual UI and painter with CV',
    'Computer vision to detect hands, shapes, colors, gestures, etc.',
  ),
  new Project(
    EnumProjectTypes.nlp,
    '/projects/nlp/BrainChatbotRetrieval',
    prefix + '/nlp/BrainChatbotRetrieval' + '/0.png',
    'Chatbot Online with TF',
    'Chatbot made with Neural Networks and SERVER LESS!',
  ),

  new Project(
    EnumProjectTypes.computerVision,
    '/projects/computer_vision/FaceRecognition',
    prefix + '/computer_vision/FaceRecognition' + '/0.png',
    'Face and contour recognition',
    'Computer vision to detect face and other features.',
  ),
  new Project(
    EnumProjectTypes.machineLearning,
    '/projects/machine_learning/DigitsRecognition',
    prefix + '/machine_learning/DigitsRecognition' + '/0.png',
    'Digit recognizer ONLINE',
    'MNIST Digit recognizer in the browser with Tensorflow JS',
  ),
  new Project(
    EnumProjectTypes.machineLearning,
    '/projects/machine_learning/AndroidGestureRecognition',
    prefix + '/machine_learning/AndroidGestureRecognition' + '/0.png',
    'Android Gesture Recognition',
    'Neural Network using signals',
  ),
  new Project(
    EnumProjectTypes.webScrapping,
    '/projects/web_scrapping/anime_flv_scrapper',


    prefix + '/web_scrapping/anime_flv_scrapper' + '/0.png',
    'Web Scrapping (undetected), ETL and analysis',
    'Web Scrapping with Selenium against bot detection in AnimeFLV. I perform a little analysis sliding the data collected',
  ),

  new Project(
    EnumProjectTypes.videogames,
    '/projects/videogames/EthicalOwl',
    prefix + '/videogames/EthicalOwl' + '/mr robot.jpg',
    'Operative system simulation for a hacking game in C',
    'Game inspired on hacking, we created a mini OS with various functions',
  ),
  new Project(
    EnumProjectTypes.machineLearning,
    '/projects/machine_learning/HumanLearnsToSurvive',
    prefix + '/machine_learning/HumanLearnsToSurvive' + '/1.png',
    'Genetic algorithms: Human learns to survive',
    'A human learn to avoid collisions with monsters and to collect life',
  ),
  new Project(
    EnumProjectTypes.ai,
    '/projects/artificial_intelligence/ExplorerPI',
    prefix + '/artificial_intelligence/ExplorerPI' + '/0.png',
    'Robot that can dodge obstacles and detect fire',
    'ExplorerPI, a robot that can explore the world and detect fire',
  ),

  new Project(
    EnumProjectTypes.ai,
    '/projects/artificial_intelligence/TicTacToe',
    prefix + '/artificial_intelligence/TicTacToe' + '/0.png',
    'A.I. plays Tic Tac Toe',
    'A.I. plays Tic Tac Toe using recursivity to generate tree of diferent results, and choose the best branch to win the game',
  ),

  new Project(
    EnumProjectTypes.videogames,
    '/projects/videogames/PoliIsStrange',
    prefix + '/videogames/PoliIsStrange' + '/0.png',
    'Back in time in this game',
    'Small mini-game using only JAVA as a language to understand the basics of a 2D game. In the game you can destroy enemies, collect money and use it either in investments or a store, and use magic',
  ),
  new Project(
    EnumProjectTypes.applications,
    '/projects/applications/GameOfLife',
    prefix + '/applications/GameOfLife' + '/0.png',
    'Play now online the game of life!',
    'A game with 0 players, you can play it online!',
  ),
  new Project(
    EnumProjectTypes.machineLearning,
    '/projects/machine_learning/RecommendationSystemGeneticAlgorithms',
    prefix +
      '/machine_learning/RecommendationSystemGeneticAlgorithms' +
      '/0.png',
    'Genetic algorithms for YOUTUBE recommendations',
    'Recommendation system with genetic algotrithms using Youtube videos',
  ),

  new Project(
    EnumProjectTypes.ai,
    '/projects/artificial_intelligence/SolveLabyrinth',
    prefix + '/artificial_intelligence/SolveLabyrinth' + '/0.png',
    'A.I. solve a labyrinth',
    'A.I. solve a random labyrinth using recursive algorithms',
  ),
  new Project(
    EnumProjectTypes.videogames,
    '/projects/videogames/Adodot',
    prefix + '/videogames/Adodot' + '/0.png',
    'Unity RPG mini videogame',
    'Videogame prototype where main character can do a lot of magic and stop time',
  ),

  new Project(
    EnumProjectTypes.ai,
    '/projects/artificial_intelligence/Rubik3x3',
    prefix + '/artificial_intelligence/Rubik3x3' + '/0.png',
    "A.I. solve the rubik's cube",
    "A.I. solve the rubik's cube, generating distinct posible paths and score them.",
  ),

  new Project(
    EnumProjectTypes.machineLearning,
    '/projects/machine_learning/RecommendationSystemMatrix',
    prefix + '/machine_learning/RecommendationSystemMatrix' + '/0.png',
    'C.F. Recommendation System for a electronic store',
    'Collaborative filtering with tensorflow',
  ),
  new Project(
    EnumProjectTypes.ai,
    '/projects/artificial_intelligence/Puzzle8',
    prefix + '/artificial_intelligence/Puzzle8' + '/0.png',
    'A.I. solve the 8-Puzzle',
    'A.I. solve the 8-Puzzle using Backtracking and greedy algorithms',
  ),
  
];

const projectTypes = [
  EnumProjectTypes.ai,
  EnumProjectTypes.applications,
  EnumProjectTypes.machineLearning,
  EnumProjectTypes.videogames,
  EnumProjectTypes.dataScience,
  EnumProjectTypes.webScrapping,
  EnumProjectTypes.nlp,
  EnumProjectTypes.computerVision,
];

const Index = () => {
  const { colorMode } = useColorMode();

  const isSmallerScreen = useMediaQueryFixed('(max-width: 600px)');

  const [filter, setFilter] = useState('all');
  const [projectsFiltered, setProjectsFiltered] = useState([...projects]);

  const isDark = colorMode === 'dark';

  const redirectToOldPortfolio = () => {
    window.open('https://magody.github.io/OldPortfolio/');
  };

  useEffect(() => {
    handlerFilterProjectType(filter);
  }, [filter]);

  const handlerFilterProjectType = (projectType: string) => {
    if (projectType === 'all') {
      setProjectsFiltered([...projects]);
    } else {
      setProjectsFiltered(
        projects.filter((project) => project.type.enumValue === projectType),
      );
      console.log(
        'FILTER',
        projects.filter((project) => project.type.enumValue === projectType),
      );
    }
  };

  const changeFiltering = (newFilter: string) => {
    setFilter(newFilter);
  };

  return (
    <Box pt="2rem">
      <Flex
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
      >
        <Button
          className={
            filter === 'all' ? 'filter_selected' : 'filter_no_selected'
          }
          onClick={() => changeFiltering('all')}
        >
          All
        </Button>

        {projectTypes.map((projectType) => {
          return (
            <Button
              key={projectType + '' + Math.random() * 10000}
              className={
                filter === projectType
                  ? 'filter_selected'
                  : 'filter_no_selected'
              }
              onClick={() => changeFiltering(projectType)}
            >
              {projectType}
            </Button>
          );
        })}
      </Flex>

      <Flex
        direction={isSmallerScreen ? 'column' : 'row'}
        flexWrap={isSmallerScreen ? 'nowrap' : 'wrap'}
        justifyContent="center"
        alignItems="center"
        w="90vw"
        m="2rem"
      >
        {projectsFiltered.map((project) => {
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

        
      </Flex>
    </Box>
  );
};

export default Index;
