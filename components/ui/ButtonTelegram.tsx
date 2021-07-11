import { Button, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { FaTelegram } from "react-icons/fa";


const ButtonTelegram: React.FC<{ username: string }> = (props) => {



  return (
    <Button
      colorScheme="telegram"
      onClick={() => window.open(`https://t.me/${props.username}`)}
    >
      <Icon as={FaTelegram} boxSize="2rem"></Icon>
      <Text>Contact me on telegram</Text>
    </Button>
  );
};

export default ButtonTelegram;
