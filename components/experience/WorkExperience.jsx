import {
  Box,
  Card,
  CardBody,
  Container,
  Flex,
  Heading,
  Tag,
  TagLabel,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import SectionTitle from "../compliments/SectionTitle";
import ExperienceCard from "../compliments/ExperienceCard";
import Animate from "../animation/Animate";

const WorkExperience = () => {
  const workExperience = [
    {
      company: "Nawadata Solution",
      position: "Fullstack Developer",
      period: "Aug 2023 - Present",
      tech: [".NET", "C#", "React", "SQL Server"],
    },
    {
      company: "Jojonomic",
      position: "Support Developer",
      period: "Apr 2022 - Aug 2023",
      tech: ["PHP", "Javascript", "Laravel", "MySQL"],
    },
    {
      company: "Soraya Bedsheet",
      position: "Web Developer",
      period: "Jul 2020 - Apr 2022",
      tech: ["PHP", "Javascript", "Codeigniter", "Laravel", "MySQL"],
    },
    {
      company: "Infomedia Nusantara",
      position: "Programmer Intern",
      period: "Feb 2019 - Apr 2019",
      tech: ["PHP", "Javascript", "Codeigniter", "MySQL"],
    },
  ];

  return (
    <Box as="section" mt={6}>
      <Container maxW="container.md">
        <Animate delay={0.1}>
          <SectionTitle number="01" title="Work Experience" />
        </Animate>
        <Box my="2rem">
          <VStack spacing={7}>
            {workExperience.map((work, index) => (
              <Animate
                key={index}
                delay={(index + 1.8) * 0.1}
                fullWidth
                style={{ marginBottom: "1rem" }}
              >
                <ExperienceCard data={work} />
              </Animate>
            ))}
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};

export default WorkExperience;
