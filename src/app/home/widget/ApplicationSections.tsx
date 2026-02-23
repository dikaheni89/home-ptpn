'use client';

import {
  Box,
  Text,
  SimpleGrid,
  Flex,
  Heading,
} from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const mobileImages = [
  '/static/mobile/mobile1.png',
  '/static/mobile/mobile2.png',
  '/static/mobile/mobile3.png',
  '/static/mobile/mobile4.png',
  '/static/mobile/mobile5.png',
];

export default function ApplicationSections() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.08 });

  return (
    <Box ref={ref} bg="white" py={24} px={{ base: 4, md: 10, lg: 12 }} position="relative" overflow="hidden">
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
      <Box position="relative" zIndex={1} maxW="3xl" mx="auto" textAlign="center" mb={14}>
        <Text
          fontSize="xs"
          fontWeight="semibold"
          color="green.800"
          letterSpacing="wider"
          textTransform="uppercase"
          mb={2}
        >
          Aplikasi Mobile
        </Text>
        <Heading
          as="h2"
          fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
          fontWeight="extrabold"
          color="green.900"
          letterSpacing="-0.02em"
          mb={3}
        >
          GeoPalm Mobile (GPM)
        </Heading>
        <Text fontSize="md" color="green.700" lineHeight="1.6">
          Aplikasi Mobile GIS PTPN IV untuk kegiatan survey, tracking, dan monitoring kelapa sawit melalui smartphone.
        </Text>
      </Box>

      {/* IMAGE GRID */}
      <Box position="relative" zIndex={1} maxW="6xl" mx="auto">
        <SimpleGrid columns={{ base: 2, md: 3, lg: 5 }} spacing={6}>
          {mobileImages.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Box
                bg="white"
                borderRadius="xl"
                p={2}
                border="1px solid"
                borderColor="gray.100"
                position="relative"
                boxShadow="sm"
                transition="all 0.25s"
                _hover={{ boxShadow: 'md', transform: 'translateY(-4px)', borderColor: 'gray.200' }}
              >
                <Flex
                  w="100%"
                  h="260px"
                  align="center"
                  justify="center"
                  borderRadius="lg"
                  bg="#FDFCFB"
                  overflow="hidden"
                >
                  <Image
                    src={src}
                    alt={`Mobile App ${idx + 1}`}
                    width={100}
                    height={260}
                    style={{ objectFit: 'contain' }}
                    unoptimized
                  />
                </Flex>
              </Box>
            </motion.div>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
