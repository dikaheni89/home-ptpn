'use client';

import {
  Box,
  Text,
  SimpleGrid,
  Flex,
  Heading,
} from '@chakra-ui/react';
import Image from 'next/image';

const mobileImages = [
  '/static/mobile/mobile1.png',
  '/static/mobile/mobile2.png',
  '/static/mobile/mobile3.png',
  '/static/mobile/mobile4.png',
  '/static/mobile/mobile5.png',
];

export default function ApplicationSections() {
  return (
    <Box bg="white" py={20} px={{ base: 4, md: 12 }} position="relative" overflow="hidden">
      {/* LEFT PALM IMAGE */}
      <Box
        position="absolute"
        left={0}
        top={0}
        height="100%"
        zIndex={0}
        display={{ base: 'none', md: 'block' }}
      >
        <Image
          src="/static/images/kelaparight.png"
          alt="Kelapa Left"
          width={400}
          height={600}
          style={{
            objectFit: 'contain',
            transform: 'scaleX(-1)',
          }}
          unoptimized
        />
      </Box>

      {/* RIGHT PALM IMAGE */}
      <Box
        position="absolute"
        right={0}
        top={0}
        height="100%"
        zIndex={0}
        display={{ base: 'none', md: 'block' }}
      >
        <Image
          src="/static/images/kelaparight.png"
          alt="Kelapa Right"
          width={400}
          height={600}
          style={{ objectFit: 'contain' }}
          unoptimized
        />
      </Box>

      {/* TEXT SECTION */}
      <Box textAlign="center" mb={12} position="relative" zIndex={1}>
        <Heading
          as="h2"
          fontSize={{ base: '2xl', md: '4xl' }}
          fontWeight="extrabold"
          color="green.900"
        >
          Geo Palm Mobile (GPM)
        </Heading>
        <Text fontSize="xl" color="green.700" mb={2}>
          dapat di download di Playstore untuk kegiatan survey, tracking, dan monitoring kelapa sawit melalui smartphone.
        </Text>
      </Box>

      {/* IMAGE GRID */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 5 }} spacing={8} position="relative" zIndex={1}>
        {mobileImages.map((src, idx) => (
          <Box
            key={idx}
            bg="#FDFCFB"
            borderRadius="2xl"
            p={1}
            position="relative"
            boxShadow="sm"
            transition="all 0.3s"
            _hover={{ boxShadow: 'lg', transform: 'translateY(-4px)' }}
          >
            <Flex
              w="100%"
              h="280px"
              align="center"
              justify="center"
              borderRadius="xl"
              bg="white"
              boxShadow="0 0 20px rgba(0,0,0,0.06)"
              overflow="hidden"
            >
              <Image
                src={src}
                alt={`Mobile App ${idx + 1}`}
                width={100}
                height={280}
                style={{ objectFit: 'contain' }}
                unoptimized
              />
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
