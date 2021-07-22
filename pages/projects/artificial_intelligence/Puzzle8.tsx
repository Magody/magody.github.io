/* eslint-disable @next/next/no-sync-scripts */
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { SimpleSection } from '../../../components/projects/SimpleSection';
import useMediaQueryFixed from '../../../hooks/use-media-query';

const prefix =
  (process.env.NEXT_PUBLIC_BASE_PATH || '') +
  '/images/projects/artificial_intelligence/Puzzle8';

const Puzzle8: React.FC<{ basePathImageDir: string }> = (props) => {
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
        A.I. solve the 8-Puzzle
      </Heading>

      <SimpleSection
        text="Project carried out in the fourth semester by: Borja Grace, Burbano Renato and Diaz Danny (Magody)."
        customCSS={cssBoxImage}
        srcImage={''}
      />

      <SimpleSection
        text={`Backtracking is an optimized brute force technique. To solve this puzzle we always find a first solution very quickly, but we look for the best one, so little by little and by means of quotas we optimize the possibilities. `}
        customCSS={cssBoxImage}
        srcImage={''}
      />

      <SimpleSection
        text={`In the following video the A.I. creates a solution for the puzzle and show us the solution with 'arrows' then the human with that help can complete the puzzle correctly`}
        customCSS={cssBoxImage}
        srcImage={''}
      />

      <Flex w="100%" h="30rem">
        <iframe
          src="https://player.vimeo.com/video/578221631?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{
            width: '100%',
            height: '100%',
          }}
          title="Java, 8-Puzzle"
        ></iframe>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </Flex>

      <SimpleSection
        text="Recursion can generate paths that have already been explored, thus creating a loop."
        customCSS={cssFullImage}
        srcImage={''}
      />

      <SimpleSection
        text="The complexity of the program increases significantly when dealing with a 4x4 matrix."
        customCSS={cssFullImage}
        srcImage={''}
      />
    </Flex>
  );
};

export default Puzzle8;
