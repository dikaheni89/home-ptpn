'use client';

import type { FormEvent } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  InputGroup,
  Input,
  InputRightElement,
  IconButton
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {SearchIcon} from "@chakra-ui/icons";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } }),
};

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
        py={{ base: 14, md: 28 }}
        px={{ base: 4, md: 10, lg: 12 }}
        direction={{ base: "column", md: "row" }}
        gap={{ base: 10, md: 16 }}
      >
        <Box flex="1" minW={0} maxW={{ md: "520px" }}>
          <motion.div custom={0} variants={fadeUp} initial="initial" animate="animate">
            <Text
              fontSize="xs"
              fontWeight="semibold"
              color="#114034"
              letterSpacing="wider"
              textTransform="uppercase"
              mb={3}
            >
              Platform GIS PTPN IV
            </Text>
            <Heading
              as="h1"
              fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
              color="#114034"
              fontWeight="extrabold"
              lineHeight="1.15"
              letterSpacing="-0.02em"
              mb={5}
            >
              GeoPalm Dashboard (GPD)
            </Heading>
          </motion.div>
          <motion.div custom={1} variants={fadeUp} initial="initial" animate="animate">
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="#3A3A3A"
              fontWeight="medium"
              lineHeight="1.65"
              mb={8}
            >
              Menjadi perusahaan agribisnis nasional yang unggul dan berdaya saing kelas dunia serta berkontribusi secara berkesinambungan bagi kemajuan bangsa.
            </Text>
          </motion.div>
          <motion.div custom={2} variants={fadeUp} initial="initial" animate="animate">
            <Box
              as="form"
              onSubmit={(e: FormEvent) => e.preventDefault()}
              maxW="420px"
            >
              <InputGroup size="lg">
                <Input
                  placeholder="Cari data GIS..."
                  bg="white"
                  color="gray.800"
                  border="1.5px solid #E5E5E5"
                  borderRadius="xl"
                  px={5}
                  py={6}
                  _placeholder={{ color: "gray.500" }}
                  _focus={{ borderColor: "#114034", boxShadow: "0 0 0 1px #114034" }}
                />
                <InputRightElement height="100%" px={3}>
                  <IconButton
                    aria-label="Cari"
                    icon={<SearchIcon />}
                    size="lg"
                    bg="#114034"
                    color="white"
                    borderRadius="lg"
                    _hover={{ bg: "#0d332a" }}
                  />
                </InputRightElement>
              </InputGroup>
            </Box>
          </motion.div>
        </Box>

        <Box
          flex="1"
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          minW={{ base: "260px", md: "400px" }}
          minH={{ base: "260px", md: "400px" }}
        >
          <Box
            position="absolute"
            right={{ base: "-48px", md: "-72px" }}
            top={{ base: "-16px", md: "-32px" }}
            w={{ base: "220px", md: "320px" }}
            h={{ base: "220px", md: "320px" }}
            borderTopRightRadius="100%"
            borderBottomRightRadius="100%"
            borderTopLeftRadius="0"
            borderBottomLeftRadius="0"
            bg="#F2D3A2"
            zIndex={0}
          />
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Box
              position="relative"
              borderRadius="2xl"
              overflow="hidden"
              w={{ base: "260px", md: "360px" }}
              h={{ base: "260px", md: "360px" }}
              zIndex={2}
              boxShadow="0 25px 50px -12px rgba(17, 64, 52, 0.15)"
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
          </motion.div>
        </Box>
      </Flex>
    </Box>
  );
}

