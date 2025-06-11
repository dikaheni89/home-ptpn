'use client';

import { Box, SimpleGrid, Text, IconButton, Flex } from '@chakra-ui/react';
import { IoArrowRedoCircleSharp } from 'react-icons/io5';
import {
  FaSeedling,
  FaMapMarkedAlt,
  FaBuilding,
  FaShieldAlt,
  FaGraduationCap,
  FaHeartbeat,
  FaHome,
  FaBus,
} from 'react-icons/fa';

const categories = [
  { name: 'Agriculture', icon: FaSeedling },
  { name: 'Boundaries', icon: FaMapMarkedAlt },
  { name: 'Business', icon: FaBuilding },
  { name: 'Community Safety', icon: FaShieldAlt },
  { name: 'Education', icon: FaGraduationCap },
  { name: 'Health', icon: FaHeartbeat },
  { name: 'Housing', icon: FaHome },
  { name: 'Transportation', icon: FaBus },
];

export default function ExploreSections() {
  return (
    <Box position="relative" bg="#114034" py={16} px={{ base: 4, md: 12 }} overflow="hidden">
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        backgroundImage="url('/static/images/batik-pattern.png')"
        backgroundRepeat="repeat"
        backgroundSize="contain"
        opacity={0.10}
        zIndex={0}
      />

      <Box position="relative" zIndex={1}>
        <Text
          fontSize={{ base: '3xl', md: '5xl' }}
          fontWeight="extrabold"
          color="white"
          textAlign="center"
          mb={12}
          textShadow="2px 2px #0c2a1f, 4px 4px #0a241b"
        >
          Explore Data
        </Text>

        <SimpleGrid columns={{ base: 1, md: 3, lg: 4 }} spacing={8}>
          {categories.map(({ name, icon: Icon }) => (
            <Box
              key={name}
              bg="white"
              borderRadius="xl"
              p={6}
              boxShadow="md"
              position="relative"
              transition="all 0.2s"
              _hover={{ boxShadow: 'xl', transform: 'translateY(-4px)' }}
            >
              <Flex justify="space-between" align="center">
                <Flex direction="column" gap={3}>
                  <Box fontSize="3xl" color="#114034">
                    <Icon />
                  </Box>
                  <Text fontSize="lg" fontWeight="bold" color="#114034">
                    {name}
                  </Text>
                </Flex>
                <IconButton
                  aria-label="Explore"
                  icon={<IoArrowRedoCircleSharp />}
                  variant="ghost"
                  borderRadius="full"
                  size="md"
                  border="1px solid #EAEAEA"
                  _hover={{ bg: '#F0F0F0' }}
                />
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
