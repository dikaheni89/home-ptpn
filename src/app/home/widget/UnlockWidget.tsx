'use client';

import { Box, Flex, Heading, Text, SimpleGrid, Icon, HStack } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaLeaf } from "react-icons/fa";
import Image from "next/image";

const features = [
  {
    title: "Mengeksplorasi",
    description: "Menggali datanya",
  },
  {
    title: "Visualisasikan & Analisis",
    description: "Sorot pola spasial dan temukan trend",
  },
  {
    title: "Membangun",
    description: "Mengembangkan aplikasi baru menggunakan template dan API",
  },
  {
    title: "Membagikan",
    description: "Sematkan analisis pada situs web Anda.",
  },
];

export default function UnlockWidget() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <Box ref={ref} py={20} px={{ base: 4, md: 10, lg: 12 }} bg="gray.50">
      <Flex
        maxW="7xl"
        mx="auto"
        direction={{ base: "column", md: "row" }}
        align="center"
        gap={{ base: 12, lg: 20 }}
      >
        <Box w={{ base: "100%", md: "44%" }} display="flex" justifyContent="center">
          <Box
            position="relative"
            width="300px"
            height="300px"
            borderRadius="2xl"
            overflow="hidden"
            boxShadow="0 20px 40px -12px rgba(0,0,0,0.08)"
          >
            <Image
              src={'/static/images/hero.png'}
              alt="Visual Hero"
              fill
              style={{ objectFit: "cover" }}
              priority
              unoptimized
            />
          </Box>
        </Box>

        <Box w={{ base: "100%", md: "56%" }} maxW="560px">
          <HStack spacing={2} mb={3}>
            <Icon as={FaLeaf} color="green.900" boxSize={4} />
            <Text fontWeight="semibold" color="green.900" fontSize="sm" letterSpacing="wider">
              ABOUT GEO PLATFORM
            </Text>
          </HStack>
          <Heading as="h2" fontSize={{ base: "xl", md: "2xl", lg: "3xl" }} mb={4} color="green.900" letterSpacing="-0.02em">
            Unlock the Power of Location Data
          </Heading>
          <Text color="gray.600" mb={8} lineHeight="1.7" fontSize="sm">
            Gunakan informasi spasial untuk meningkatkan pemahaman dan pengambilan keputusan berbasis lokasi.
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -12 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
                transition={{ duration: 0.35, delay: idx * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Box
                  p={4}
                  bg="white"
                  borderRadius="lg"
                  border="1px solid"
                  borderColor="gray.100"
                  h="100%"
                  transition="all 0.2s"
                  _hover={{ borderColor: "gray.200", boxShadow: "sm" }}
                >
                  <Text fontWeight="bold" color="green.700" mb={1} fontSize="sm">
                    {item.title}
                  </Text>
                  <Text color="gray.600" fontSize="xs" lineHeight="1.5">
                    {item.description}
                  </Text>
                </Box>
              </motion.div>
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  );
}
