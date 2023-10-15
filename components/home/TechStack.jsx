import {
  Box,
  Card,
  CardBody,
  Container,
  Flex,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript";
import { SiPhp } from "@react-icons/all-files/si/SiPhp";
import { SiCsharp } from "@react-icons/all-files/si/SiCsharp";
import { SiTypescript } from "@react-icons/all-files/si/SiTypescript";
import { SiReact } from "@react-icons/all-files/si/SiReact";
import { SiDotNet } from "@react-icons/all-files/si/SiDotNet";
import { SiLaravel } from "@react-icons/all-files/si/SiLaravel";
import { SiCodeigniter } from "@react-icons/all-files/si/SiCodeigniter";
import { SiMysql } from "@react-icons/all-files/si/SiMysql";
import { SiMicrosoftsqlserver } from "@react-icons/all-files/si/SiMicrosoftsqlserver";
import { SiGithub } from "@react-icons/all-files/si/SiGithub";
import { SiGitlab } from "@react-icons/all-files/si/SiGitlab";
import { FaVuejs } from "@react-icons/all-files/fa/FaVuejs";
import { SiHtml5 } from "@react-icons/all-files/si/SiHtml5";
import { SiCss3 } from "@react-icons/all-files/si/SiCss3";
import { SiTailwindcss } from "@react-icons/all-files/si/SiTailwindcss";
import { SiBootstrap } from "@react-icons/all-files/si/SiBootstrap";
import React from "react";
import SectionTitle from "../compliments/SectionTitle";
import Animate from "../animation/Animate";

const TechStack = () => {
  const tabs = [
    "Web",
    "Languages",
    "Framework or Library",
    "Database",
    "Others",
  ];
  const iconSize = 40;

  const techStack = [
    {
      category: "Web",
      list: [
        {
          text: "HTML",
          icon: <SiHtml5 size={iconSize} />,
        },
        {
          text: "CSS",
          icon: <SiCss3 size={iconSize} />,
        },
        {
          text: "Bootstrap",
          icon: <SiBootstrap size={iconSize} />,
        },
        {
          text: "Tailwind CSS",
          icon: <SiTailwindcss size={iconSize} />,
        },
      ],
    },
    {
      category: "Languages",
      list: [
        {
          text: "Javascript",
          icon: <SiJavascript size={iconSize} />,
        },
        {
          text: "Typescript",
          icon: <SiTypescript size={iconSize} />,
        },
        {
          text: "PHP",
          icon: <SiPhp size={iconSize} />,
        },
        {
          text: "C#",
          icon: <SiCsharp size={iconSize} />,
        },
      ],
    },
    {
      category: "Framework or Library",
      list: [
        {
          text: "React",
          icon: <SiReact size={iconSize} />,
        },
        {
          text: "Vue",
          icon: <FaVuejs size={iconSize} />,
        },
        {
          text: "Laravel",
          icon: <SiLaravel size={iconSize} />,
        },
        {
          text: "Codeigniter",
          icon: <SiCodeigniter size={iconSize} />,
        },
        {
          text: "ASP.NET",
          icon: <SiDotNet size={iconSize} />,
        },
      ],
    },
    {
      category: "Database",
      list: [
        {
          text: "MySQL",
          icon: <SiMysql size={iconSize} />,
        },
        {
          text: "SQL Server",
          icon: <SiMicrosoftsqlserver size={iconSize} />,
        },
      ],
    },
    {
      category: "Others",
      list: [
        {
          text: "GitHub",
          icon: <SiGithub size={iconSize} />,
        },
        {
          text: "GitLab",
          icon: <SiGitlab size={iconSize} />,
        },
      ],
    },
  ];

  const selectedTabColor = useColorModeValue("purple.400", "purple.800");

  return (
    <Box as="section">
      <Container maxW="container.md">
        <SectionTitle number="02" title="Tech Stack" />
        <Box textAlign="center" my="2.5rem">
          <Tabs variant="unstyled">
            <TabList height="auto" overflowX="auto" pb={2}>
              {tabs.map((tab) => {
                return (
                  <Tab
                    _selected={{
                      color: "white",
                      bg: selectedTabColor,
                      rounded: "8px",
                    }}
                    fontSize={{ base: "0.9rem", sm: "1rem" }}
                    key={tab}
                  >
                    {tab}
                  </Tab>
                );
              })}
            </TabList>
            <TabPanels>
              {tabs.map((tab) => {
                return (
                  <TabPanel px={0} py={8} key={tab}>
                    <SimpleGrid columns={{ base: 2, md: 3 }} spacing="24px">
                      {techStack
                        .filter((tech) => tech.category === tab)
                        .map((tech) =>
                          tech.list.map((item, itemIndex) => (
                            <Card key={itemIndex} variant="outline">
                              <CardBody>
                                <Flex
                                  alignItems="center"
                                  justifyContent={{
                                    base: "center",
                                    md: "flex-start",
                                  }}
                                  flexDirection={{ base: "column", md: "row" }}
                                  gap={6}
                                >
                                  {item.icon}
                                  <Text>{item.text}</Text>
                                </Flex>
                              </CardBody>
                            </Card>
                          ))
                        )}
                    </SimpleGrid>
                  </TabPanel>
                );
              })}
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </Box>
  );
};

export default TechStack;
