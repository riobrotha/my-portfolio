import { Box, Container, Text, useColorMode } from "@chakra-ui/react";
import SectionTitle from "./compliments/SectionTitle";

const About = () => {
  const { colorMode } = useColorMode();

  return (
    <Box mt={{ base: -2.5, sm: -5 }}>
      <Container maxW="container.md">
        <SectionTitle number="01" title="About" />
        <Box textAlign="center" marginTop={"2.5rem"} marginBottom={"2.5rem"}>
          <Text
            color={colorMode === "dark" ? "gray.400" : "gray.500"}
            fontSize={{ base: "1rem", md: "1.1rem" }}
          >
            Hi, I&apos;m Rio, a web developer with a strong passion and
            dedication for creating outstanding web experience and applications
            based in Depok, Indonesia. I have more than <strong>2 years</strong>{" "}
            of experience in the world of web development and take pride in
            solving problems.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
