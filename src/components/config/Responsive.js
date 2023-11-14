import React from "react";
import { useMediaQuery } from "react-responsive";

export const PC = ({ children }) => {
  const isPc = useMediaQuery({
    query: "(min-width:551px)",
  });

  return <>{isPc && children}</>;
};
