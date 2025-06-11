'use client';

import { Box, Flex, Heading, Text, SimpleGrid, Icon, HStack } from "@chakra-ui/react";
import { FaLeaf } from "react-icons/fa";
import Image from "next/image";
import {getBasePath} from "@/libs/utils/getBasePath";

const features = [
  {
    title: "Mengeksplorasi",
    description: "Menggali datanya",
  },
  {
    title: "Visualisasikan & Analisis",
    description: "Sorot pola spasial dan temukan tren",
  },
  {
    title: "Membangun",
    description: "Mengembangkan aplikasi baru menggunakan templat dan API",
  },
  {
    title: "Membagikan",
    description: "Sematkan analisis pada situs web Anda.",
  },
];

export default function UnlockWidget() {
  return (
    <Box py={16} px={{ base: 4, md: 16 }} bg="gray.50">
      <Flex direction={{ base: "column", md: "row" }} align="center" gap={10}>
        <Box w={{ base: "100%", md: "50%" }} display="flex" justifyContent="center">
          <Box
            position="relative"
            width="280px"
            height="280px"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src={getBasePath() + '/static/images/hero.png'}
              alt="Visual Hero"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </Box>
        </Box>

        <Box w={{ base: "100%", md: "50%" }}>
          <HStack spacing={2} mb={2}>
            <Icon as={FaLeaf} color="green.900" />
            <Text fontWeight="bold" color="green.900">About Geo Platform</Text>
          </HStack>
          <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} mb={4}>
            Unlock the Power of Location Data
          </Heading>
          <Text color="gray.600" mb={6}>
            Gunakan informasi spasial untuk meningkatkan pemahaman dan pengambilan keputusan berbasis lokasi.
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            {features.map((item, idx) => (
              <Box key={idx}>
                <Text fontWeight="semibold" color="green.700" mb={1}>
                  » {item.title}
                </Text>
                <Text color="gray.600">{item.description}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  );
}
