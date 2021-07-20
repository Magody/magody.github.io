/* eslint-disable @next/next/no-sync-scripts */
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { SimpleSection } from '../../../components/projects/SimpleSection';
import useMediaQueryFixed from '../../../hooks/use-media-query';

const prefix =
  (process.env.NEXT_PUBLIC_BASE_PATH || '') +
  '/images/projects/artificial_intelligence/ExplorerPI';

const ExplorerPI: React.FC<{ basePathImageDir: string }> = (props) => {
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
        ExplorerPI, a robot that can explore the world and detect fire
      </Heading>

      <SimpleSection
        text="The project presented is a robot capable of detecting obstacles and detecting fire by means of sensors and then throwing water at it. The project actually is incomplete... however, you can see how the agents were structured in this project here https://github.com/Magody/IRaspberryPiSensores"
        customCSS={cssBoxImage}
        srcImage={''}
      />

      <Flex w="100%" h="30rem">
        <iframe
          src="https://player.vimeo.com/video/577362910?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{
            width: '100%',
            height: '100%',
          }}
          title="Explorer py"
        ></iframe>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </Flex>

      <SimpleSection
        text="We use sensors, each sensor is managed as an intelligent agent that will send information to the other agents and then the robot will make a decision as to where to go."
        customCSS={cssFullImage}
        srcImage={prefix + '/agentes.png'}
      />

      <SimpleSection
        text="When the 'fire sensor' has a high value, the 'Luminosity sensor' detect a lot of light and the 'smoke sensor' has a certain value, the robot then runs a motor that empties water from a bottle."
        customCSS={cssFullImage}
        srcImage={''}
      />

      <SimpleSection
        text=""
        customCSS={cssFullImage}
        srcImage={prefix + '/intensidadLuz.png'}
      />
      <SimpleSection
        text=""
        customCSS={cssFullImage}
        srcImage={prefix + '/sensorGas.png'}
      />
      <SimpleSection
        text=""
        customCSS={cssFullImage}
        srcImage={prefix + '/sensorLlama.png'}
      />

      <SimpleSection
        text="We use a RaspberryPI connected to a different motors, sensors and a battery."
        customCSS={cssFullImage}
        srcImage={prefix + '/raspberry.png'}
      />

      <SimpleSection
        text="Using a raspberry was a good experience. I only recommend the purchase of a ventilation system for this. I am going to leave here some of the sensors that were used"
        customCSS={cssFullImage}
        srcImage={''}
      />

      <Flex
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
      >
        <SimpleSection
          text=""
          customCSS={{}}
          srcImage={prefix + '/ultrasonido.png'}
        />

        <SimpleSection
          text=""
          customCSS={{}}
          srcImage={prefix + '/motorGear.png'}
        />
        <SimpleSection
          text=""
          customCSS={{}}
          srcImage={prefix + '/sensorTemperatura.png'}
        />
        <SimpleSection
          text=""
          customCSS={{}}
          srcImage={prefix + '/servoMotor.png'}
        />
      </Flex>

      <Flex
        justifyContent="center"
        alignItems="center"
        direction={isSmallerScreen ? 'column' : 'row'}
      >
        <Link m="1rem" href={`${prefix}/notes.pdf`} target="_blank">
          <Button colorScheme="facebook">
            See additional notes for this project
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default ExplorerPI;
