import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Spacer,
  Text,
  Button,
  Container,
  useColorMode,
  useColorModeValue,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "../compliments/NavLink";
import MenuLink from "./MenuLink";

const Navbar = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const { toggleColorMode } = useColorMode();

  // const bgNav = useColorModeValue("gray.100", "gray.800");
  const bgNav = useColorModeValue("whiteAlpha.200", "blackAlpha.200");
  const iconColorMode = useColorModeValue(
    <MoonIcon w={5} h={5} />,
    <SunIcon w={5} h={5} />
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      backgroundColor={isNavbarFixed ? bgNav : "transparent"}
      position={isNavbarFixed ? "fixed" : "relative"}
      top={isNavbarFixed ? "-65px" : "auto"}
      left={0}
      right={0}
      transform={isNavbarFixed ? "translateY(65px)" : "none"}
      zIndex={isNavbarFixed ? "999" : "auto"}
      transition="transform 0.5s ease-in-out,background-color 0.5s ease-in-out"
      as="nav"
      backdropFilter={isNavbarFixed ? "blur(10px)" : "none"}
    >
      <Container maxW="container.xl">
        <Flex alignItems="center">
          <Box py={4}>
            <Link href="/">
              <Text fontSize="xl" fontWeight={"bold"}>
                RioBrotha
              </Text>
            </Link>
          </Box>
          <Spacer />
          <Flex gap={8} px={0} alignItems="center">
            <Flex
              gap={8}
              sx={{
                display: { base: "none", lg: "flex" },
              }}
            >
              <MenuLink isMobile={false} />
            </Flex>
            <Flex gap={4}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  style={{ display: "block" }}
                  key={useColorModeValue("light", "dark")}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconButton
                    onClick={toggleColorMode}
                    colorScheme="purple"
                    size="md"
                    icon={iconColorMode}
                  ></IconButton>
                </motion.div>
              </AnimatePresence>
              <Menu>
                <MenuButton
                  sx={{ display: { base: "block", lg: "none" } }}
                  as={IconButton}
                  aria-label="Options"
                  icon={<HamburgerIcon w={6} h={6} />}
                  variant={isNavbarFixed ? "outline" : "ghost"}
                  size="md"
                ></MenuButton>
                <MenuList
                  variant="menu"
                  zIndex="999"
                  sx={{ display: { base: "block", lg: "none" } }}
                >
                  <MenuLink isMobile={true} />
                </MenuList>
              </Menu>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
