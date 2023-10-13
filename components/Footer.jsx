import { Box, Container, Flex, IconButton, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";

const Footer = () => {
  return (
    <Box py={{ base: 10, md: 8 }} marginTop="90px">
      <Box
        width="100%"
        bg="transparent"
        py={5}
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <Container maxW="container.md">
          <Flex
            alignItems="center"
            justifyContent="center"
            flexDirection={{ base: "column", md: "row" }}
            gap={{ base: "0.35rem", md: 0 }}
            pb={{ base: 2.2, md: 0 }}
          >
            <Text as="p" fontSize={{ base: "sm", md: "md" }}>
              © {new Date().getFullYear()} Rio Pambudhi. All rights reserved
            </Text>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
