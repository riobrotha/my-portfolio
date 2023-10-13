import { Transition } from "@/components/animation/Transition";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect } from "react";
import { useNotFound } from "@/contexts/NotFoundContext";

const My404 = () => {
  const { setIsNotFound } = useNotFound();

  useEffect(() => {
    setIsNotFound(true);

    return () => {
      setIsNotFound(false);
    };
  }, [setIsNotFound]);

  return (
    <Transition>
      <Box position="relative" height="100vh">
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
        >
          <Flex flexDirection="column" gap={3}>
            <Text fontSize="2xl">404 | Oops... Page Not Found</Text>
            <Box width="100%">
              <Link href="/">
                <Button variant="solid" width="100%" colorScheme="purple">
                  Back to Home
                </Button>
              </Link>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Transition>
  );
};

export default My404;
