import { Button, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { FaTelegram } from "react-icons/fa";

import useTranslation from "next-translate/useTranslation";

const ButtonTelegram: React.FC<{ username: string }> = (props) => {


  let { t } = useTranslation("common");

  return (
    <Button
      colorScheme="telegram"
      onClick={() => window.open(`https://t.me/${props.username}`)}
    >
      <Icon as={FaTelegram} boxSize="2rem"></Icon>
      <Text>{t("talk_to_me_telegram")}</Text>
    </Button>
  );
};

export default ButtonTelegram;
