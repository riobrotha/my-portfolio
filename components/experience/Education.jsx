import { Box, Container, VStack } from "@chakra-ui/react";
import React from "react";
import SectionTitle from "../compliments/SectionTitle";
import ExperienceCard from "../compliments/ExperienceCard";
import Animate from "../animation/Animate";

const Education = () => {
  const educations = [
    {
      logo: "/coding_id.svg",
      institute: "Bootcamp Coding.id",
      position: "Fullstack Engineer",
      period: "May 2023 - Jul 2023",
      tech: [".NET", "C#", "React", "SQL Server", "Material UI"],
    },
    {
      logo: "/pnp.svg",
      institute: "Politeknik Negeri Padang",
      position: "Associate Degree in Information Technology",
      period: "Sep 2016 - Sep 2019",
      tech: ["GPA - 3.78", "Web Development", "Android Development"],
    },
  ];

  return (
    <Box mt={6} mb={{ base: 12, md: 6 }}>
      <Container maxW="container.md">
        <Animate delay={0.1}>
          <SectionTitle number="02" title="Education" />
        </Animate>
        <Box my="2rem"></Box>
        <VStack spacing={7}>
          {educations.map((education, index) => (
            <Animate key={index} delay={(index + 1.8) * 0.1} fullWidth>
              <ExperienceCard key={index} data={education} />
            </Animate>
          ))}
        </VStack>
      </Container>
    </Box>
  );
};

export default Education;
