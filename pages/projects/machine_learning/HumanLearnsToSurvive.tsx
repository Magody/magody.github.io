/* eslint-disable @next/next/no-sync-scripts */
import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { SimpleSection } from '../../../components/projects/SimpleSection';
import useMediaQueryFixed from '../../../hooks/use-media-query';

const prefix =
  (process.env.NEXT_PUBLIC_BASE_PATH || '') +
  '/images/projects/machine_learning/HumanLearnsToSurvive';

const HumanLearnsToSurvive = () => {
  const isSmallerScreen = useMediaQueryFixed('(max-width:600px)');

  const cssFullImage = {
    maxWidth: '100%',
  };
  const cssBoxImage = {
    w: '15rem',
    h: '15rem',
  };
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      width="90vw"
      maxWidth="90vw"
    >
      <Heading m="2rem" className="responsive_text">
        Genetic algorithms for videogames
      </Heading>

      <SimpleSection
        text="Humans adapt and in certain cases evolve, so it is interesting to be able to replicate this. In this project 50 humans are set free, each one at the beginning does not know what to do in the unknown environment, when these humans spend too much energy or touch a monster several times, they die. Their goal is to survive as long as they can and collect as much green energy as possible."
        customCSS={cssBoxImage}
        srcImage={''}
      />

      <Flex w="100%" h="30rem">
        <iframe
          src="https://player.vimeo.com/video/574751509?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{
            width: '100%',
            height: '100%',
          }}
          title="Adodot"
        ></iframe>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </Flex>

      <SimpleSection
        text="In this project I use NEAT, which in short is the combination of neural networks and genetic algorithms. This project is based on 'AI learns to play flappy bird'"
        customCSS={cssFullImage}
        srcImage={prefix + '/0.jpg'}
      />

      <SimpleSection
        text="Of course i also implemented flappy bird learns to play videogames, just search on my portfolio."
        customCSS={cssBoxImage}
        srcImage={''}
      />
    </Flex>
  );
};

export default HumanLearnsToSurvive;
