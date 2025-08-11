'use client';

import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  InputGroup,
  Input,
  InputRightElement,
  IconButton
} from '@chakra-ui/react';
import Image from 'next/image';
import {SearchIcon} from "@chakra-ui/icons";

export default function HeroSections() {
  return (
    <Box
      as="section"
      w="100%"
      minH={{ base: "80vh", md: "600px" }}
      bg="#fcfbf9"
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        left={0}
        top={0}
        w={{ base: "160px", md: "320px" }}
        h={{ base: "100%", md: "100%" }}
        zIndex={0}
      >
        <Image
          src={'/static/images/shape-1.png'}
          alt="shape left"
          width={300}
          height={300}
          objectFit="cover"
          style={{ width: '100px', height: '300px', objectPosition: 'left' }}
          unoptimized
        />
      </Box>
      <Box
        position="absolute"
        right={0}
        top={0}
        w={{ base: "160px", md: "320px" }}
        h={{ base: "100%", md: "100%" }}
        zIndex={0}
        transform="scaleX(-1)"
      >
        <Image
          src={'/static/images/shape-2.png'}
          alt="shape right"
          width={300}
          height={300}
          objectFit="cover"
          style={{ width: '80vw', height: '600px', objectPosition: 'left' }}
          unoptimized
        />
      </Box>

      <Flex
        maxW="7xl"
        mx="auto"
        position="relative"
        zIndex={1}
        align="center"
        justify="space-between"
        py={{ base: 12, md: 24 }}
        px={{ base: 4, md: 12 }}
        direction={{ base: "column", md: "row" }}
        gap={12}
      >
        <Box flex="1" minW={0}>
          <Heading
            as="h1"
            fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
            color="#114034"
            fontWeight="extrabold"
            lineHeight="1.1"
            mb={6}
          >
            GeoPalm Dashboard (GPD)
          </Heading>
          <Text fontSize={{ base: "lg", md: "2xl" }} color="#3A3A3A" fontWeight="medium" mb={8}>
            Menjadi perusahaan agribisnis nasional yang unggul dan berdaya saing kelas dunia serta berkontribusi secara berkesinambungan bagi kemajuan bangsa
          </Text>
          <Stack direction={{ base: "column", sm: "row" }} spacing={6}>
            <InputGroup size="lg">
              <Input
                placeholder="Cari data GIS..."
                bg="white"
                color="gray.800"
                border="1.5px solid #E5E5E5"
                borderRadius="2xl"
                px={6}
                py={6}
                _placeholder={{ color: "gray.500" }}
              />
              <InputRightElement height="100%" px={4}>
                <IconButton
                  aria-label="Cari"
                  icon={<SearchIcon />}
                  size="lg"
                  colorScheme="green"
                  bg="#114034"
                  color="white"
                  borderRadius="xl"
                  _hover={{ bg: "#0d332a" }}
                />
              </InputRightElement>
            </InputGroup>
          </Stack>
        </Box>

        <Box
          flex="1"
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          minW={{ base: "240px", md: "420px" }}
          minH={{ base: "240px", md: "420px" }}
          w={{ base: "90vw", md: "460px" }}
          h={{ base: "90vw", md: "460px" }}
        >
          <Box
            position="absolute"
            right="-40px"
            top="-48px"
            w={{ base: "260px", md: "410px" }}
            h={{ base: "260px", md: "410px" }}
            borderTopRightRadius="100%"
            borderBottomRightRadius="100%"
            borderTopLeftRadius="0"
            borderBottomLeftRadius="0"
            bg="#F2D3A2"
            zIndex={1}
          />
          <Box
            position="relative"
            borderRadius="full"
            overflow="hidden"
            w={{ base: "240px", md: "380px" }}
            h={{ base: "240px", md: "380px" }}
            zIndex={2}
          >
            <Image
              src={'/static/images/hero.png'}
              alt="hero photo"
              fill
              style={{ objectFit: "cover" }}
              priority
              unoptimized
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

