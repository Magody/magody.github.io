/* eslint-disable @next/next/no-sync-scripts */
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { SimpleSection } from '../../../components/projects/SimpleSection';
import useMediaQueryFixed from '../../../hooks/use-media-query';

const prefix =
  (process.env.NEXT_PUBLIC_BASE_PATH || '') +
  '/images/projects/computer_vision/FaceRecognition';

const FaceRecognition: React.FC<{ basePathImageDir: string }> = (
  props,
) => {
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
        Face and contourn recognition
      </Heading>

      <SimpleSection
        text="Face recognition using haarcascades."
        customCSS={cssBoxImage}
        srcImage={''}
      />
        <Flex w="100%" h="30rem">
        <iframe
          src="https://player.vimeo.com/video/711431818?h=d387628b69&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{
            width: '100%',
            height: '100%',
          }}
          title="Face recognition Demo"
        ></iframe>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </Flex>




    </Flex>
  );
};

export default FaceRecognition;
