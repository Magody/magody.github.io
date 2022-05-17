import { Box, Image, Text, Tooltip } from '@chakra-ui/react';
import React from 'react';
import useMediaQueryFixed from '../../../hooks/use-media-query';
import Link from 'next/link';

const CardProject: React.FC<{
  srcImage: string;
  title: string;
  bgBox: string;
  tooltip: string;
  destination: string;
  type: string;
  colorBadge: string;
}> = (props) => {
  const isSmallerScreen = useMediaQueryFixed('(max-width: 600px)');
  return (
    <Link passHref={true} href={props.destination}>
      <Box
        position="relative"
        m="1rem"
        w={isSmallerScreen ? '100%' : '15rem'}
        h={isSmallerScreen ? '18rem' : '12rem'}
        _hover={{
          cursor: 'pointer',
        }}
        bg={props.bgBox}
        borderRadius="1rem"
        className="item"
      >
        <span className="badge" style={{ background: props.colorBadge }}>
          {props.type}
        </span>

        <Tooltip label={props.tooltip}>
          <Image
            w="100%"
            h={"100%"}
            alt=""
            backgroundColor="transparent"
            boxShadow="lg"
            src={props.srcImage}
          ></Image>
        </Tooltip>
        <Text
          position="absolute"
          fontSize="1rem"
          bottom="0"
          color="white"
          bg="black"
          p="0.3rem"
          textAlign="center"
          className="responsive_text"
          w="100%"
          _hover={{
            bg: 'cyan.400',
          }}
        >
          {props.title}
        </Text>
      </Box>
    </Link>
  );
};

export default CardProject;
