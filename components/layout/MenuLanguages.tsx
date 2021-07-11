import {
  Box,
  Fade,
  Flex,
  Heading,
  Icon,
  IconButton,
  Select,
  Spacer,
  useColorMode,
  useDisclosure,
  VStack,
  transition,
} from "@chakra-ui/react";
import { IconContext } from "react-icons";
import { ButtonLanguage } from "../ui/ButtonLanguage";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaLanguage } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import $ from 'jquery';

export const MenuLanguages = () => {
  const [openLanguages, setOpenLanguages] = useState(false);

  const router = useRouter();
  useEffect(() => {
    setOpenLanguages(false);

  }, []);

  const handleClickContainerLanguage = () => {
    const new_toggle = !openLanguages;
    // console.log("Open languages", new_toggle)
    setOpenLanguages(new_toggle);

    if (new_toggle) {
        $("#select_language").css("display", "flex");
    } else {
        setTimeout(()=>{
            $("#select_language").css("display", "none");
        }, 50);
        
    }
    
  };

  return (
    <Box onClick={handleClickContainerLanguage} position="relative">
      <IconButton aria-label="Language" icon={<IoLanguage />} p="0" m="0" ></IconButton>

      <Fade in={openLanguages}>
        <Flex
          id="select_language"
          position="absolute"
          zIndex="10"
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          {router.locales?.map((locale) => {
            // console.log(locale)
            return <ButtonLanguage key={locale} locale={locale} />;
          })}
        </Flex>
      </Fade>
    </Box>
  );
};
