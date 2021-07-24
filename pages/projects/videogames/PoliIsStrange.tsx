/* eslint-disable @next/next/no-sync-scripts */
import { Button, Flex, Heading, Link } from '@chakra-ui/react';
import React from 'react';
import { SimpleSection } from '../../../components/projects/SimpleSection';

const prefix =
  (process.env.NEXT_PUBLIC_BASE_PATH || '') +
  '/images/projects/videogames/PoliIsStrange';

const PoliIsStrange = () => {
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
        Mini RPG made in Java only
      </Heading>

      <SimpleSection
        text="Project carried out in the fourth semester by: Chicaiza Carlos , Díaz Danny (Magody) y Vinueza Rafael"
        customCSS={cssBoxImage}
        srcImage={''}
      />

      <SimpleSection
        text="We developed a small mini-game using only JAVA as a language to understand the basics of a 2D game. In the game you can destroy enemies, collect money and use it either in investments or a store, and use magic. up = W
        down = S,
        left = A,
        right = D,
        exit = ESCAPE,
        run = SHIFT,
        powerFireball = 1,
        time_power = T,
        fire_gun = E,
        reload_gun = R,
        sword_attack = 2,"
        customCSS={cssBoxImage}
        srcImage={''}
      />

      <Flex w="100%" h="30rem">
        <iframe
          src="https://player.vimeo.com/video/578858878?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{
            width: '100%',
            height: '100%',
          }}
          title="Java, Poli is strange"
        ></iframe>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </Flex>

      <Heading m="2rem" className="responsive_text">
        Important objectives of the project
      </Heading>

      <Flex justifyContent="center" alignItems="center">
        <ul>
          <li>{'Design of a video game in general'}</li>
          <li>{'AI capable of playing Tic-tac-toe'}</li>
          <li>{'Data protection (Security)'}</li>
          <li>{'Backtracking actions by x time'}</li>
          <li>{'Decision making in games'}</li>
        </ul>
      </Flex>

      <Heading m="2rem" className="responsive_text">
        Design diary
      </Heading>

      <SimpleSection
        text="Some art wass designed manually"
        customCSS={cssFullImage}
        srcImage={prefix + '/1.png'}
      />

      <SimpleSection
        text="We implemented a Tycoon feature in the game, the player can invest and after a time generate an extra percentage."
        customCSS={cssBoxImage}
        srcImage={prefix + '/2.png'}
      />

      <Heading m="1.3rem" className="responsive_text">
        Bullet
      </Heading>

      <SimpleSection
        text="An element has been implemented 
        pistol that allows to shoot bullets 
        at enemies."
        customCSS={cssBoxImage}
        srcImage={prefix + '/3.png'}
      />

      <Heading m="1.3rem" className="responsive_text">
        Store
      </Heading>

      <SimpleSection
        text="A place where the player can 
        buy useful items for his adventure. 
        adventure."
        customCSS={cssBoxImage}
        srcImage={prefix + '/4.png'}
      />

      <Heading m="1.3rem" className="responsive_text">
        Final Boss
      </Heading>

      <SimpleSection
        text="A final boss that appears after killing 
        a certain number of enemies, 
        has a lot of life"
        customCSS={cssBoxImage}
        srcImage={prefix + '/5.png'}
      />

      <Heading m="1.3rem" className="responsive_text">
        COLLISIONS
      </Heading>

      <SimpleSection
        text="To implement collisions
        hitboxes were used, which were
        implemented with the
        java Rectangle class."
        customCSS={cssBoxImage}
        srcImage={prefix + '/6.png'}
      />

      <Heading m="1.3rem" className="responsive_text">
        HUD
      </Heading>

      <SimpleSection
        text="The HUD was implemented with a preview image
        image that serves as a background, and the
        Graphics class with its methods help us to
        draw the rest of the interface."
        customCSS={cssBoxImage}
        srcImage={prefix + '/7.png'}
      />

      <Heading m="1.3rem" className="responsive_text">
        Fireball
      </Heading>

      <SimpleSection
        text="Similar implementation to the bullet class, the difference
        difference is that this ability is
        unlimited, only depending on the player's mana
        of the player"
        customCSS={cssBoxImage}
        srcImage={prefix + '/8.png'}
      />

      <Heading m="1.3rem" className="responsive_text">
        TicTacToe
      </Heading>

      <SimpleSection
        text="Inside the game exist the posibility of play a mini  TicTacToe game, i used the knowledge that i got from Matlab TicTacToe project"
        customCSS={cssBoxImage}
        srcImage={prefix + '/9.png'}
      />

      <Heading m="1.3rem" className="responsive_text">
        Cheats
      </Heading>

      <SimpleSection
        text="Do you remember the GTA San Andreas cheats? We replicated that using data structures"
        customCSS={cssBoxImage}
        srcImage={prefix + '/10.png'}
      />

      <Heading m="1.3rem" className="responsive_text">
        Back in the time
      </Heading>

      <SimpleSection
        text="Each second we saved the states of the player, then with a command the player can back in time N states before, this is an awesome effect and was inspired from League of Legend and Life is strange. The idea is the posibility of back in time to take other decisions..."
        customCSS={cssBoxImage}
        srcImage={prefix + '/11.png'}
      />

      <Heading m="1.3rem" className="responsive_text">
        Decisions that modify the environment and the distant future
      </Heading>

      <SimpleSection
        text="With NPCs exist the chance of save them or leave them to their luck"
        customCSS={cssBoxImage}
        srcImage={prefix + '/12.png'}
      />

      <Heading m="1.3rem" className="responsive_text">
        Finite-state machine
      </Heading>

      <SimpleSection
        text="Each NPC represent a finite-state machine"
        customCSS={cssBoxImage}
        srcImage={prefix + '/13.png'}
      />

      <Flex justifyContent="center" alignItems="center">
        <Link
          m="1rem"
          href={`${prefix}/presentationPoliIsStrange.pdf`}
          target="_blank"
        >
          <Button colorScheme="facebook">
            See the presentation made in class
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default PoliIsStrange;
