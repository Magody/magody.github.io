/* eslint-disable @next/next/no-sync-scripts */
import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { SimpleSection } from '../../../components/projects/SimpleSection';

const Adodot = () => {
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
        Simple RPG game with a lot of mini mechanics
      </Heading>

      <SimpleSection
        text="This is a simple game with a main character with this skills: reflect magic, make a barrier, fly, teleport, stop time, back in time, invoke a fire ball and transform in super sayajin"
        customCSS={cssBoxImage}
        srcImage={''}
      />

      <Flex w="100%" h="30rem">
        <iframe
          src="https://player.vimeo.com/video/574746497?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
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
        text="If you want to see more technical details please consider visit: https://magody.github.io/OldPortfolio/Lenguajes/CSharp/Adodot/adodotValley.pdf."
        customCSS={cssFullImage}
        srcImage={''}
      />
      <Heading m="2rem" className="responsive_text">
        History
      </Heading>

      <SimpleSection
        text='Hyul is the main character, who wakes up in the middle of a village without most of his memories of his past. He remembers many of the customs of a planet called Earth and that he comes from there. He learned to communicate with the villagers and they welcomed him as one of their own, as he conversed more fluently with the leaders he learned that the planet is going through a crisis in which many plagues of monsters fall from meteorites and torment the people, gradually they were cornered in "protected" sectors like the valley where he woke up. The richest people are able to enjoy abundant magical power that allows them to establish a barrier in their cities and protect themselves from the monsters. However, Adodot valley has only poor people who try not to get involved in the war.Hyul helped where he could in exchange for food and other necessities.The town was surrounded by huge mountains and the only exits contained hundreds of monsters.Many village heroes tried to break through but failed.The people as they moved from place to place took with them common goods, ornaments and pets but left behind books of knowledge. The passing of the decades produced that the humanity of that planet forgot their history and were governed only by what the king of the day said through well-trained magician messengers who appeared not to protect but to collect resources.currently there are only 5 old sages with the knowledge to heal, destroy and create scattered around the world.Hyul will seek in every way to help Adodot valley gathering as much knowledge to face first the monsters, then the noble classes while seeking the reason for their appearance on that planet and the origin of the meteorites of monsters.'
        customCSS={cssFullImage}
        srcImage={''}
      />
    </Flex>
  );
};

export default Adodot;
