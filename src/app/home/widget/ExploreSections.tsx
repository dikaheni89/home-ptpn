'use client';

import { Box, SimpleGrid, Text, IconButton, Flex, Link } from '@chakra-ui/react';
import { IoArrowRedoCircleSharp } from 'react-icons/io5';
import {
  FaSeedling,
  FaMapMarkedAlt,
  FaBuilding,
  FaShieldAlt,
  FaGraduationCap,
} from 'react-icons/fa';

const categories = [
  { name: 'Produksi', href: 'https://gis.ptpn4.or.id/portal/apps/opsdashboard/index.html#/bcd2b8427964472ea1cd43c0e25a969c', sub: 'Dashboard Produksi PTPN IV', icon: FaSeedling },
  { name: 'Sensus Hama', href: 'https://gis.ptpn4.or.id/portal/apps/opsdashboard/index.html#/49ffdb11e83140fcb9f1e5706e6f9181', sub: 'Dashboard Aplikasi Digital Farming', icon: FaMapMarkedAlt },
  { name: 'Pemupukan', href: 'https://gis.ptpn4.or.id/portal/apps/opsdashboard/index.html#/42cd39ac71f94d55bd37b212788897a2', sub: 'Dashboard Satuan Pohon per Hektar (SPH)', icon: FaBuilding },
  { name: 'Album TBM', href: 'https://gis.ptpn4.or.id/portal/apps/opsdashboard/index.html#/6fa3da8b00f341809b6ff6d22986a294', sub: 'Dashboard Monitoring Areal PTPN Group', icon: FaShieldAlt },
  { name: 'Survey Jalan', href: 'https://gis.ptpn4.or.id/portal/apps/opsdashboard/index.html#/a3a6470bd1a14acb811e78420839edf3', sub: 'Dashboard Monitoring HGU PTPN Group', icon: FaGraduationCap },
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
          MAPS GALLERY
        </Text>

        <SimpleGrid columns={{ base: 1, md: 3, lg: 4 }} spacing={8}>
          {categories.map(({ name, sub, href, icon: Icon }) => (
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
                  <Text fontSize="xs" fontWeight="bold" color="#114034">
                    {sub}
                  </Text>
                </Flex>
                <Link href={href} target="_blank" rel="noopener noreferrer">
                  <IconButton
                    aria-label="Explore"
                    icon={<IoArrowRedoCircleSharp />}
                    variant="ghost"
                    borderRadius="full"
                    size="md"
                    border="1px solid #EAEAEA"
                    _hover={{ bg: '#F0F0F0' }}
                  />
                </Link>
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
