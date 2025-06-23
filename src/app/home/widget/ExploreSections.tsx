'use client';

import { Box, SimpleGrid, Text, IconButton, Flex, Link } from '@chakra-ui/react';
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
import {FiBook, FiGlobe} from "react-icons/fi";
import {GiCampfire, GiFire} from "react-icons/gi";
import {AiOutlineAudit, AiOutlineContainer, AiOutlineFileSearch, AiOutlineSafetyCertificate} from "react-icons/ai";

const categories = [
  { name: 'Produksi', href: 'https://gis.ptpn4.or.id/portal/apps/opsdashboard/index.html#/bcd2b8427964472ea1cd43c0e25a969c', sub: 'Dashboard Produksi PTPN IV', icon: FaSeedling },
  { name: 'Farming', href: 'https://gis.ptpn4.or.id/portal/apps/opsdashboard/index.html#/49ffdb11e83140fcb9f1e5706e6f9181', sub: 'Dashboard Aplikasi Digital Farming', icon: FaMapMarkedAlt },
  { name: 'Satuan Pohon per Hektar', href: 'https://gis.ptpn4.or.id/portal/apps/opsdashboard/index.html#/42cd39ac71f94d55bd37b212788897a2', sub: 'Dashboard Satuan Pohon per Hektar (SPH)', icon: FaBuilding },
  { name: 'Monitoring Areal', href: 'https://gis.ptpn4.or.id/portal/apps/opsdashboard/index.html#/6fa3da8b00f341809b6ff6d22986a294', sub: 'Dashboard Monitoring Areal PTPN Group', icon: FaShieldAlt },
  { name: 'Summary Areal', href: 'https://gis.ptpn4.or.id/portal/apps/opsdashboard/index.html#/a3a6470bd1a14acb811e78420839edf3', sub: 'Dashboard Monitoring HGU PTPN Group', icon: FaGraduationCap },
  { name: 'Monitoring Sensus', href: 'https://gis.ptpn4.or.id/portal/apps/opsdashboard/index.html#/6ee767b22a1a42059b601ab39f82c51d', sub: 'Dashboard Monitoring Sensus Hama PTPN Terkini', icon: FaHeartbeat },
  { name: 'Monitoring Survey', href: 'https://gis.ptpn4.or.id/portal/apps/opsdashboard/index.html#/2dc8b32c6ab8482eb8ae9f600aa39831', sub: 'Dashboard Monitoring Survey PTPN IV', icon: FaHome },
  { name: 'Survey Pemeliharaan', href: 'https://gis.ptpn4.or.id/portal/apps/opsdashboard/index.html#/32f44319bdee416099fb6594ed5bc0eb', sub: 'Dashboard Survey Pemeliharaan', icon: FaBus },
  { name: 'Survey Panen', href: 'https://gis.ptpn4.or.id/portal/apps/opsdashboard/index.html#/88170851d6964583954fca800e1f621b', sub: 'Dashboard Survey Panen', icon: FiBook },
  { name: 'Report Monitoring', href: 'https://gis.ptpn4.or.id/portal/apps/webappviewer/index.html?id=fe4c5fe222d444b390b791c1f0fa6e6f', sub: 'Web App Report Monitoring Survey PTPN IV', icon: FiGlobe },
  { name: 'Fire Maps', href: 'https://gis.ptpn4.or.id/portal/apps/opsdashboard/index.html#/fc9971f5f0b64f6f927667bfbc2c8fe7', sub: 'Dashboard Fire Maps', icon: GiCampfire },
  { name: 'Fire Maps PalmCo', href: 'https://gis.ptpn4.or.id/portal/apps/opsdashboard/index.html#/7ead67f49095412fa0bafd328d095e44', sub: 'Dashboard Fire Maps PalmCo', icon: GiFire },
  { name: 'Pilot project pemanfaatan', href: 'https://gis.ptpn4.or.id/portal/apps/opsdashboard/index.html#/23fe89310fff45ad8564cde01c242a10', sub: 'Dashboard Pilot project pemanfaatan', icon: AiOutlineAudit },
  { name: 'WebGIS PTPN 13', href: 'https://gis.ptpn4.or.id/portal/apps/webappviewer/index.html?id=fa446f8ed9c244319d93760ffde407d9', sub: 'Dashboard WebGIS PTPN 13', icon: AiOutlineContainer },
  { name: 'PalmCo PICA', href: 'https://gis.ptpn4.or.id/portal/apps/opsdashboard/index.html#/7f5f47f3533348478e082c15824b6561', sub: 'Dashboard PalmCo PICA (Problem Identification Corrective Actions)', icon: AiOutlineFileSearch },
  { name: 'Web App Report', href: 'https://gis.ptpn4.or.id/portal/apps/webappviewer/index.html?id=af5a665681934507ba8675d1d70504ad', sub: 'Web App Report Monitoring Survey General', icon: AiOutlineSafetyCertificate },
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
