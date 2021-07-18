import { Flex, Icon, ScaleFade, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { IconType } from 'react-icons/lib';
import useMediaQueryFixed from '../../../hooks/use-media-query';

export const SimpleCard: React.FC<{
  bg: string;
  bg_secundary: string;
  icon: IconType;
  text: string;
  waitToShow: number;
}> = (props) => {
  const isSmallerScreen = useMediaQueryFixed('(max-width:600px)');

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, props.waitToShow);
  }, []);

  return (
    <ScaleFade initialScale={0.3} in={isOpen}>
      <Flex
        direction="column"
        m="0.5rem"
        p="1rem"
        borderRadius="1rem"
        bg={props.bg}
        justifyContent="center"
        alignItems="center"
        className="over_particles"
        _hover={{
          bg: props.bg_secundary,
        }}
      >
        <Icon
          color="white"
          as={props.icon}
          boxSize={isSmallerScreen ? '2rem' : '4rem'}
        />
        <Text
          color="white"
          fontSize={isSmallerScreen ? '1rem' : '1.3rem'}
          fontWeight="semibold"
          alignSelf="flex-end"
        >
          {props.text}
        </Text>
      </Flex>
    </ScaleFade>
  );
};
