import Animate from "@/components/animation/Animate";
import SectionTitle from "@/components/compliments/SectionTitle";
import { Transition } from "@/components/animation/Transition";
import Social from "@/components/contact/Social";
import { Box, Container, Heading, Text, useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Contact = () => {
  const { colorMode } = useColorMode();
  return (
    <Transition>
      <Box as="section" mt={6}>
        <Container maxW="container.md">
          <Animate delay={0.1}>
            <SectionTitle number="01" title="Contact Me" />
          </Animate>
          <Animate delay={0.2}>
            <Box textAlign="center">
              <Heading
                mt="3rem"
                mb="1rem"
                as="h1"
                size={{ base: "md", md: "lg" }}
              >
                Let&apos;s get in touch
              </Heading>
              <Text
                mb="1rem"
                fontSize="1rem"
                color={colorMode === "dark" ? "gray.400" : "gray.500"}
              >
                Feel free to contact me
              </Text>
              <Text
                mb="1.5rem"
                color={colorMode === "dark" ? "purple.300" : "purple.600"}
                fontWeight="bold"
              >
                <Link href="mailto:riopambudhi51@gmail.com">
                  riopambudhi51@gmail.com
                </Link>
              </Text>
              <Social
                w={{ base: 12, md: 16 }}
                h={{ base: 12, md: 16 }}
                gap={12}
                iconSize={34}
              />
            </Box>
          </Animate>
        </Container>
      </Box>
    </Transition>
  );
};

export default Contact;
