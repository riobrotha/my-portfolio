import { Flex, IconButton } from "@chakra-ui/react";
import { SiGithub } from "@react-icons/all-files/si/SiGithub";
import { SiGitlab } from "@react-icons/all-files/si/SiGitlab";
import { SiGmail } from "@react-icons/all-files/si/SiGmail";
import { SiLinkedin } from "@react-icons/all-files/si/SiLinkedin";
import React from "react";

const Social = ({ iconSize = 23, gap = 2, w = 12, h = 12 }) => {
  const navigateTo = (link) => {
    window.open(link, "_blank");
  };
  return (
    <Flex alignItems="center" justifyContent="center" gap={gap}>
      <IconButton
        onClick={() => navigateTo("https://github.com/riobrotha")}
        rounded="full"
        variant="ghost"
        w={w}
        h={h}
        icon={<SiGithub size={iconSize} />}
      />
      <IconButton
        colorScheme="orange"
        onClick={() => navigateTo("https://gitlab.com/riobrotha")}
        rounded="full"
        variant="ghost"
        w={w}
        h={h}
        icon={<SiGitlab size={iconSize} />}
      />
      <IconButton
        colorScheme="blue"
        onClick={() => navigateTo("https://www.linkedin.com/in/rio-pambudhi/")}
        rounded="full"
        variant="ghost"
        w={w}
        h={h}
        icon={<SiLinkedin size={iconSize} />}
      />
      <IconButton
        colorScheme="red"
        onClick={() => navigateTo("mailto:riopambudhi51@gmail.com")}
        rounded="full"
        variant="ghost"
        w={w}
        h={h}
        icon={<SiGmail size={iconSize} />}
      />
    </Flex>
  );
};

export default Social;
