import {
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Tag,
  TagLabel,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const ExperienceCard = ({ data }) => {
  const cardHoverStyle = {
    borderColor: useColorModeValue("purple.600", "purple.300"),
    transform: "translateY(-10px)",
  };
  return (
    <Card
      width="full"
      variant="outline"
      border="3px"
      borderStyle="solid"
      borderColor="transparent"
      transition="all 0.4s ease-in-out"
      _hover={cardHoverStyle}
    >
      <CardBody p={5}>
        <Flex alignItems="center" gap={{ base: 3, md: 2 }}>
          {data.logo ? (
            <Image
              src={data.logo}
              objectFit="cover"
              boxSize="90px"
              alt="coding_id"
            />
          ) : (
            <Text fontSize="1.8rem">🟣</Text>
          )}
          <Flex flex="1" gap={2} flexDirection="column">
            <Flex
              gap={{ base: 2, md: 0 }}
              flexDirection={{ base: "column", md: "row" }}
            >
              <Heading
                flex="1"
                as="h2"
                fontSize={{ base: "1rem", sm: "1.1rem" }}
              >
                {data.institute ? data.institute : data.company}
              </Heading>
              <Text fontSize={{ base: "0.8rem", sm: "1rem" }}>
                {data.period}
              </Text>
            </Flex>
            <Text fontSize={{ base: "1rem", sm: "1.1rem" }}>
              {data.position}
            </Text>
            <Flex wrap="wrap" gap={3}>
              {data.tech.map((tech, index) => (
                <Tag
                  key={index}
                  size={{ base: "sm", sm: "md" }}
                  variant="subtle"
                  colorScheme="red"
                >
                  <TagLabel>{tech}</TagLabel>
                </Tag>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ExperienceCard;
