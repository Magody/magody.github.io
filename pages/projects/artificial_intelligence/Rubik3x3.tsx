/* eslint-disable @next/next/no-sync-scripts */
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { SimpleSection } from '../../../components/projects/SimpleSection';
import useMediaQueryFixed from '../../../hooks/use-media-query';

const prefix =
  (process.env.NEXT_PUBLIC_BASE_PATH || '') +
  '/images/projects/artificial_intelligence/Rubik3x3';

const Rubik3x3: React.FC<{ basePathImageDir: string }> = (props) => {
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
        A.I. solve a the rubik&apos;s cube
      </Heading>

      <SimpleSection
        text="By means of data structures, a tree with several possible movements is generated and the best one is chosen. In the subject of AI it was proved that this method is one of the most inefficient to solve this kind of problems and also the heuristic must consider distances not only in 2D but in 3D as well."
        customCSS={cssBoxImage}
        srcImage={''}
      />

      <SimpleSection
        text={`The following video shows the resolution of the problem with depth levels (of the tree) less or equal to 10. For the first generation of the tree the program takes several seconds demonstrating the slowness of the method. When typing "sol" in the interface is when the program will start solving the cube.`}
        customCSS={cssBoxImage}
        srcImage={''}
      />

      <Flex w="100%" h="30rem">
        <iframe
          src="https://player.vimeo.com/video/577774833?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{
            width: '100%',
            height: '100%',
          }}
          title="Java, Rubik"
        ></iframe>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </Flex>

      <SimpleSection
        text="These were the movements considered for the algorithm"
        customCSS={cssFullImage}
        srcImage={prefix + '/moves.jpg'}
      />

      <SimpleSection
        text="To solve this problem in a computer, it's first necessary to reduce the 3D problem to a 2D problem like this"
        customCSS={cssFullImage}
        srcImage={prefix + '/rubik.png'}
      />

      <SimpleSection
        text="The strategy is generate all 'relevant' paths to solve the mave and choose one, then generate again paths and chuse the good one. The solution was very similar to the solution in my project 'TicTacToe' but very much complex. Using machine learning techniques like reinforcement learning would be a better option than simple A.I."
        customCSS={cssFullImage}
        srcImage={''}
      />
    </Flex>
  );
};

export default Rubik3x3;
