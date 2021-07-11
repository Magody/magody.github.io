import { Button, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

import useTranslation from "next-translate/useTranslation";

const ButtonWhatsapp: React.FC<{ phone: string; text: string }> = (props) => {
  
  let { t } = useTranslation("common");
  return (
    <Button
      colorScheme="green"
      onClick={() => window.open(`https://wa.me/${props.phone}?text=${props.text}`)}
    >
      <Icon as={FaWhatsapp} boxSize="2rem"></Icon>
      <Text>{t("talk_to_me_whatsapp")}</Text>
    </Button>
  );
};

export default ButtonWhatsapp;
