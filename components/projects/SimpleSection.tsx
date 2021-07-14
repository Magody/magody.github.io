import { Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

export const SimpleSection: React.FC<{
  text: string;
  customCSS: any;
  srcImage: string;
}> = (props) => {
  return (
    <Flex direction="column" justifyContent="center" alignItems="center">
      <Text mt="1rem" className="responsive_text">
        {props.text}
      </Text>
      {props.srcImage != '' && (
        <Image
          m="1rem"
          alt=""
          css={props.customCSS}
          backgroundColor="transparent"
          boxShadow="lg"
          src={props.srcImage}
        ></Image>
      )}
    </Flex>
  );
};
