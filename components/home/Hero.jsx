import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import Animate from "../animation/Animate";
import Link from "next/link";

const Hero = () => {
  const { colorMode } = useColorMode();

  return (
    <Box as="section">
      <Container maxW="container.xl">
        <Flex
          justifyContent={"center"}
          flexDirection="column"
          alignItems={"center"}
          gap={6}
          h={{ base: "32rem  ", md: "40rem" }}
        >
          <Animate delay={0.1}>
            <Box textAlign={"center"}>
              <Avatar
                src="/avatar.png"
                width={{ base: 150, md: 200 }}
                height={{ base: 150, md: 200 }}
                bgGradient="linear(to-b, red.200, purple.300)"
                marginBottom={"1.5rem"}
              ></Avatar>
              <Heading
                as="h1"
                size={{ base: "xl", md: "2xl" }}
                marginBottom={"1.1rem"}
              >
                Hi, I&apos;m Rio
                <Text as="span" className="hello">
                  👋
                </Text>
              </Heading>
              <Heading
                as="h2"
                size={{ base: "xl", md: "2xl" }}
                marginBottom="1.1rem"
              >
                <Box width="100%" display="inline-block">
                  <Text
                    as="span"
                    display="inline-block"
                    className="typing"
                    color="red.400"
                  >
                    I&apos;m a Web Developer
                  </Text>
                </Box>
              </Heading>
              <Text
                as="p"
                fontSize={{ base: "xl", md: "2xl" }}
                color={colorMode === "dark" ? "gray.400" : "gray.500"}
              >
                give the solution with code..
              </Text>
            </Box>
          </Animate>
          <Animate delay={0.35}>
            <Flex gap={4} alignItems="center">
              <Link target="_blank" href="https://s.id/1Vsry">
                <Button colorScheme="red" rounded="full">
                  Download Resume
                </Button>
              </Link>
              <Link href="/contact">
                <Button colorScheme="gray" variant="link" rounded="full">
                  Contact Me
                </Button>
              </Link>
            </Flex>
          </Animate>
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero;
