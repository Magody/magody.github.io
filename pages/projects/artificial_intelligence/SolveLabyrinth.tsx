/* eslint-disable @next/next/no-sync-scripts */
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { SimpleSection } from '../../../components/projects/SimpleSection';
import useMediaQueryFixed from '../../../hooks/use-media-query';

const prefix =
  (process.env.NEXT_PUBLIC_BASE_PATH || '') +
  '/images/projects/artificial_intelligence/SolveLabyrinth';

const SolveLabyrinth: React.FC<{ basePathImageDir: string }> = (props) => {
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
        A.I. solve a random labyrinth using recursive algorithms
      </Heading>

      <SimpleSection
        text="By means of recursion, paths are generated in all directions as long as there is no wall, until the 'yellow ball' is reached. This is one of a bunch of path finding algorithms!"
        customCSS={cssBoxImage}
        srcImage={''}
      />

      <Flex w="100%" h="30rem">
        <iframe
          src="https://player.vimeo.com/video/576411097?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{
            width: '100%',
            height: '100%',
          }}
          title="Java, labyrinth"
        ></iframe>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </Flex>

      <SimpleSection
        text="Using a matrix we can change the objective point, and the a.i. willy find the correct path. If the point is unreachable then the a.i. after a mini loop stops and decides that is imposible."
        customCSS={cssFullImage}
        srcImage={prefix + '/0.png'}
      />

      <SimpleSection
        text=""
        customCSS={cssFullImage}
        srcImage={prefix + '/1.png'}
      />
    </Flex>
  );
};

export default SolveLabyrinth;
