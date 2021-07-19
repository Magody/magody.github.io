/* eslint-disable @next/next/no-sync-scripts */
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { SimpleSection } from '../../../components/projects/SimpleSection';
import useMediaQueryFixed from '../../../hooks/use-media-query';

const prefix =
  (process.env.NEXT_PUBLIC_BASE_PATH || '') +
  '/images/projects/artificial_intelligence/TicTacToe';

const TicTacToe: React.FC<{ basePathImageDir: string }> = (props) => {
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
        A.I. play TicTacToe
      </Heading>

      <SimpleSection
        text="By means of data structures a tree is generated with all possible moves and according to a score the move with the highest score is chosen. Each loss in the tree is a negative value and each draw/victory is a positive value. "
        customCSS={cssBoxImage}
        srcImage={''}
      />

      <Heading fontSize="1.2rem" m="2rem" className="responsive_text">
        Player vs A.I.
      </Heading>

      <Flex w="100%" h="30rem">
        <iframe
          src="https://player.vimeo.com/video/576932532?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{
            width: '100%',
            height: '100%',
          }}
          title="Player vs A.I."
        ></iframe>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </Flex>

      <Heading fontSize="1.2rem" m="2rem" className="responsive_text">
        A.I. vs A.I.
      </Heading>

      <Flex w="100%" h="30rem">
        <iframe
          src="https://player.vimeo.com/video/576932510?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{
            width: '100%',
            height: '100%',
          }}
          title="A.I. vs A.I."
        ></iframe>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </Flex>

      <SimpleSection
        text="The program receives the state of the board and depending on it will generate all posible paths but 
        pruning unviable branches (branches with a cost less than a 'minimun cost'). "
        customCSS={cssBoxImage}
        srcImage={`${prefix}/1.png`}
      />

      <SimpleSection
        text="Of course the computational cost will be extremely higher when the board is empty. 
        So we created a lot of strategies to solve this problem"
        customCSS={cssBoxImage}
        srcImage={``}
      />

      <Heading fontSize="1.2rem" m="2rem" className="responsive_text">
        The first move
      </Heading>

      <SimpleSection
        text="The most experienced players place the first move on a corner every time they start first. This gives the opponent more opportunity to make a mistake. If the opponent responds by placing anywhere but in the center, the chances of victory increase, so the algorithm chooses one of the 4 corners as the first move."
        customCSS={cssBoxImage}
        srcImage={`${prefix}/2.png`}
      />

      <Heading fontSize="1.2rem" m="2rem" className="responsive_text">
        The second move
      </Heading>

      <SimpleSection
        text="If the opponent plays first and starts in one corner, he always places the second move in the center.the second move should always be placed in the opposite corner, because we would automatically lose, without turning back.with this strategy, it is estimated that the game will probably end in a draw.in theory, you can win from this position, but the opponent would have to make a big mistake."
        customCSS={cssBoxImage}
        srcImage={`${prefix}/3.png`}
      />

      <SimpleSection
        text="When the opponent starts by placing in the center, the second move is placed in a corner. Basically, there is no way to win, only to draw, from this position; unless the opponent makes a mistake."
        customCSS={cssBoxImage}
        srcImage={`${prefix}/4.png`}
      />

      <SimpleSection
        text="If the component places the first leg on an edge (side) instead of on a corner or in the center, there is a chance of a hit."
        customCSS={cssBoxImage}
        srcImage={`${prefix}/5.png`}
      />

      <SimpleSection
        text="Using the first move and second move strategies the computer will never compute the tree for a board with 9 or 8 empty spaces. This is a good improvement."
        customCSS={cssBoxImage}
        srcImage={``}
      />

      <Heading fontSize="1.2rem" m="2rem" className="responsive_text">
        Counter plays
      </Heading>

      <SimpleSection
        text="The 'counterplay' function is used to fill in some of the weaknesses that the algorithm may have and also to feed it with 'good plays', i.e., if we find a 'good play' where the victory is clear, we apply this counterplay to pay off."
        customCSS={cssBoxImage}
        srcImage={`${prefix}/6.png`}
      />

      <Flex
        justifyContent="center"
        alignItems="center"
        direction={isSmallerScreen ? 'column' : 'row'}
      >
        <Link m="1rem" href={`${prefix}/report.pdf`} target="_blank">
          <Button colorScheme="facebook">See the report</Button>
        </Link>
        <Link m="1rem" href={`${prefix}/strategies.pdf`} target="_blank">
          <Button colorScheme="facebook">See more about strategies</Button>
        </Link>
        <Link m="1rem" href={`${prefix}/presentation.pdf`} target="_blank">
          <Button colorScheme="facebook">
            See the presentation showed in class
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default TicTacToe;
