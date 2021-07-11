import { Button, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";


const ButtonWhatsapp: React.FC<{ phone: string; text: string }> = (props) => {
  
  return (
    <Button
      colorScheme="green"
      onClick={() => window.open(`https://wa.me/${props.phone}?text=${props.text}`)}
    >
      <Icon as={FaWhatsapp} boxSize="2rem"></Icon>
      <Text>Contact me on whatsapp</Text>
    </Button>
  );
};

export default ButtonWhatsapp;
