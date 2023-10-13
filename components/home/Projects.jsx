import {
  Box,
  Card,
  CardBody,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Tag,
  TagLabel,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import SectionTitle from "../compliments/SectionTitle";
import Reveal from "../animation/Reveal";

const Projects = () => {
  const myProjects = [
    {
      title: "Otomobil from Coding.id",
      desc: "Learn to drive car",
      img: "/projects/otomobil.webp",
      link: "https://gitlab.com/str.rnl/otomobil-team02",
      tech: [
        "HTML",
        "CSS",
        "React",
        "Material UI",
        "React Context",
        "Axios",
        ".NET Core",
        "C#",
      ],
    },
    {
      title: "Qur'an Web",
      desc: "A Holy Qur'an in web.",
      img: "/projects/qur_an-web.webp",
      link: "https://github.com/riobrotha/qur-an-web",
      tech: [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Vue",
        "Pinia State Management",
        "Axios",
        "Equr'an API",
      ],
    },
    {
      title: "E-Commerce Soraya Bedsheet",
      desc: "Shopping with experience.",
      img: "/projects/sorayabedsheet.webp",
      link: "https://www.sorayabedsheet.id/",
      tech: [
        "HTML",
        "CSS",
        "Bootstrap",
        "Javascript",
        "PHP",
        "Codeigniter",
        "MySQL",
      ],
    },
    {
      title: "E-Employee Soraya Bedsheet",
      desc: "Manage employee data in a single place.",
      img: "/projects/hrd_soraya.webp",
      link: "https://github.com/riobrotha/e-employee/",
      tech: [
        "HTML",
        "CSS",
        "Bootstrap",
        "Javascript",
        "PHP",
        "Codeigniter",
        "MySQL",
      ],
    },
    {
      title: "E-Factory Soraya Bedsheet",
      desc: "Controll Production with easy to use.",
      img: "/projects/pabrik_sorayabedsheet.webp",
      link: "https://pabrik.sorayabedsheet.id/",
      tech: [
        "HTML",
        "CSS",
        "Bootstrap",
        "Javascript",
        "PHP",
        "Codeigniter",
        "MySQL",
      ],
    },
    {
      title: "Hersclinic Website and E-Commerce",
      desc: "Clinic profile and e-commerce.",
      img: "/projects/hers_clinic.webp",
      link: "https://hersclinic.id",
      tech: [
        "HTML",
        "CSS",
        "Bootstrap",
        "Javascript",
        "PHP",
        "Codeigniter",
        "MySQL",
      ],
    },
    {
      title: "Hersclinic POS and Clinic System",
      desc: "POS with Clinic System",
      img: "/projects/pos_hersclinic.webp",
      link: "https://smhc.hersclinic.id",
      tech: [
        "HTML",
        "CSS",
        "Bootstrap",
        "Javascript",
        "PHP",
        "Codeigniter",
        "MySQL",
      ],
    },
  ];

  const bgOverlay = useColorModeValue("rgba(0,0,0,0.5)", "rgba(0,0,0,0.65)");
  const textDesc = useColorModeValue("gray.100", "gray.300");
  const borderColorHover = useColorModeValue("purple.600", "purple.300");

  return (
    <Box>
      <Container maxW="container.md">
        <SectionTitle number="03" title="Projects" />
        <Box my="2.5rem">
          <SimpleGrid columns={1} spacing="32px">
            {myProjects.map((project, index) => {
              return (
                <Reveal key={index}>
                  <Card
                    variant="outline"
                    cursor="pointer"
                    onClick={() => window.open(project.link, "_blank")}
                    overflow="hidden"
                    border="3px"
                    borderStyle="solid"
                    borderColor="transparent"
                    transition="all 0.4s ease-in-out"
                    _hover={{
                      borderColor: borderColorHover,
                      transform: "translateY(-10px)",
                      "& .overlay": {
                        transform: "translateY(0px)",
                      },
                    }}
                  >
                    <Box
                      width="100%"
                      position="relative"
                      overflow="hidden"
                      border="none"
                    >
                      <Image
                        objectFit="cover"
                        transform="scale(1.03)"
                        position="relative"
                        border="none"
                        src={project.img}
                        alt="project"
                      ></Image>
                      <Box
                        className="overlay"
                        position="absolute"
                        bg={bgOverlay}
                        width="100%"
                        paddingY={{ base: 2, sm: 2.5, md: 4 }}
                        paddingX={{ base: 2, sm: 2.5, md: 3 }}
                        bottom={0}
                        left={0}
                        transform="translateY(40%)"
                        transition="all 0.4s ease-in-out"
                      >
                        <Heading
                          color="white"
                          as="h3"
                          fontSize={{ base: "17px", md: "2xl" }}
                          marginBottom={1}
                        >
                          {project.title}
                        </Heading>
                        <Text
                          color={textDesc}
                          fontSize={{ base: "12.5px", md: "lg" }}
                        >
                          {project.desc}
                        </Text>
                      </Box>
                    </Box>

                    <CardBody border="none">
                      <Flex wrap={"wrap"} gap={3}>
                        {project.tech.map((tech, index) => (
                          <Tag
                            key={index}
                            size={{ base: "sm", sm: "md", md: "lg" }}
                            variant="subtle"
                            colorScheme="red"
                          >
                            <TagLabel>{tech}</TagLabel>
                          </Tag>
                        ))}
                      </Flex>
                    </CardBody>
                  </Card>
                </Reveal>
              );
            })}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
