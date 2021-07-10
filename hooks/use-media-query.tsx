import React, { useState, useEffect } from "react";
import { useMediaQuery } from "@chakra-ui/media-query";

// useMediaQuery has a bug with re creating css classes
// this custom hook tries to solve that bug with a clean solution
// Related Error: prop `className` did not match. Server: "css-yyy" Client: "css-zzz" div
// this error only ocurrs when the media query is true at the begining if someone want to replicate

const useMediaQueryFixed = (query: string) => {
  const [condition, setCondition] = useState(false);
  const [queryEvaluation] = useMediaQuery(query);

  useEffect(() => {
    if (condition !== queryEvaluation) {
      setCondition(queryEvaluation);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryEvaluation]); // not include condition because that will cause infinite loop

  return condition;
};

export default useMediaQueryFixed;
