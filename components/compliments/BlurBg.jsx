import { useColorMode } from "@chakra-ui/react";
import React from "react";

const BlurBg = () => {
  const { colorMode } = useColorMode();

  return (
    <div
      className="circle-bg"
      style={{
        background:
          colorMode === "light"
            ? "var(--background-gradient-light)"
            : "var(--background-gradient-dark )",
      }}
    ></div>
  );
};

export default BlurBg;
