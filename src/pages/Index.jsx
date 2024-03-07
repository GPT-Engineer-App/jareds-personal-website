import React from "react";
import { Box, Container, Heading, Text, Stack, Image, Flex, Button, Link, IconButton, useColorModeValue } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" p={4}>
      <Flex flexDirection="column" alignItems="center" justifyContent="center" minH="100vh">
        <Box borderRadius="lg" bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")} p={3} mb={6} textAlign="center">
          Welcome to the personal website of Jared Ingersoll
        </Box>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1613463455809-28608760827d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxKYXJlZCUyMEluZ2Vyc29sbHxlbnwwfHx8fDE3MDk4MTcwMjN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Jared Ingersoll" mb={4} />
        <Heading as="h1" size="xl" mb={2}>
          Jared Ingersoll
        </Heading>
        <Text fontSize="lg" mb={4}>
          Full-stack Developer | Tech Enthusiast | Lifelong Learner
        </Text>
        <Stack direction="row" spacing={4} mb={4}>
          <Link href="https://github.com/jaredingersoll" isExternal>
            <IconButton aria-label="GitHub" icon={<FaGithub fontSize="20px" />} variant="ghost" />
          </Link>
          <Link href="https://linkedin.com/in/jaredingersoll" isExternal>
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin fontSize="20px" />} variant="ghost" />
          </Link>
          <Link href="mailto:jared@ingersoll.com">
            <IconButton aria-label="Email" icon={<FaEnvelope fontSize="20px" />} variant="ghost" />
          </Link>
          <Link href="/resume.pdf" isExternal>
            <IconButton aria-label="Resume" icon={<FaFileAlt fontSize="20px" />} variant="ghost" />
          </Link>
        </Stack>
        <Button colorScheme="teal" size="lg" leftIcon={<FaFileAlt />}>
          Download Resume
        </Button>
      </Flex>
    </Container>
  );
};

export default Index;
