import { Divider, HStack, Text, Flex } from "@chakra-ui/react";

const SectionTitle = ({ number, title }) => {
  return (
    <HStack spacing="24px">
      <Flex gap="10px" flexWrap={"nowrap"}>
        <Text fontSize="xl" color="red.400">
          <strong>{number}</strong>
        </Text>
        <Text flexGrow={1} fontSize="xl" style={{ whiteSpace: "nowrap" }}>
          {title}
        </Text>
      </Flex>
      <Divider />
    </HStack>
  );
};

export default SectionTitle;
