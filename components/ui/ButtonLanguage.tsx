import { Flex, useColorMode } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export const ButtonLanguage: React.FC<{ locale: string }> = (props) => {
  const { colorMode, setColorMode } = useColorMode();
  const router = useRouter();

  const buttonCSS = {
    bg: colorMode == "dark" ? "white" : "blue.700",
    color: colorMode == "dark" ? "black" : "white",
    borderRadius: "1rem",
  };

  const buttonCSSHover = {
    bg: "cyan.400",
    cursor: "pointer",
  };

  const handleClickButton = () => {
    // props.onClick(props.locale);
  };

  let code = "US";
  if (props.locale == "es") {
    code = "ES";
  }

  return (
    <Link passHref={true} href={router.asPath} locale={props.locale}>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        __css={buttonCSS}
        _hover={buttonCSSHover}
        boxSize="3rem"
        padding="0.3rem"
      >
        <img
          alt=""
          style={{
            width: "100%",
            height: "100%",
          }}
          src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${code}.svg`}
        />
      </Flex>
    </Link>
  );
};
