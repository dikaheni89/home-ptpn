'use client';

import {
  Box,
  Text,
  SimpleGrid,
  IconButton,
  Flex,
  Heading,
} from '@chakra-ui/react';
import { IoArrowRedoCircleSharp } from 'react-icons/io5';
import {
  MdLocationOn,
  MdMap,
  MdPoll,
  MdDashboard,
} from 'react-icons/md';

const apps = [
  {
    title: 'Local Perspective',
    description: 'Configure apps to provide focused citizen experiences',
    icon: MdLocationOn,
  },
  {
    title: 'Story Maps',
    description: 'Tell stories about local issues and solutions.',
    icon: MdMap,
  },
  {
    title: 'Survey 123',
    description: 'Hear from your community.',
    icon: MdPoll,
  },
  {
    title: 'Ops Dashboard',
    description: 'Monitor your data',
    icon: MdDashboard,
  },
];

export default function ApplicationSections() {
  return (
    <Box bg="white" py={20} px={{ base: 4, md: 12 }}>
      <Box textAlign="center" mb={12}>
        <Text fontSize="lg" color="green.700" mb={2}>
          Aplikasi
        </Text>
        <Heading
          as="h2"
          fontSize={{ base: '2xl', md: '4xl' }}
          fontWeight="extrabold"
          color="green.900"
        >
          Aplikasi Bermanfaat untuk Mendukung Tujuan Anda
        </Heading>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
        {apps.map(({ title, description, icon: Icon }) => (
          <Box
            key={title}
            bg="#FDFCFB"
            borderRadius="2xl"
            p={8}
            position="relative"
            boxShadow="sm"
            transition="all 0.3s"
            _hover={{ boxShadow: 'lg', transform: 'translateY(-4px)' }}
          >
            <Flex
              w="16"
              h="16"
              align="center"
              justify="center"
              borderRadius="full"
              bg="white"
              boxShadow="0 0 20px rgba(0,0,0,0.06)"
              mb={6}
              mx="auto"
            >
              <Box fontSize="2xl" color="green.800">
                <Icon />
              </Box>
            </Flex>
            <Text
              fontSize="lg"
              fontWeight="bold"
              color="green.900"
              textAlign="center"
              mb={2}
            >
              {title}
            </Text>
            <Text
              fontSize="sm"
              color="gray.700"
              textAlign="center"
              mb={6}
            >
              {description}
            </Text>
            <Flex justify="center">
              <IconButton
                aria-label={`Go to ${title}`}
                icon={<IoArrowRedoCircleSharp />}
                variant="ghost"
                borderRadius="full"
                border="1px solid #E2E8F0"
                size="md"
                _hover={{ bg: 'gray.100' }}
              />
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

