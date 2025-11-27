'use client';

import { Box, SimpleGrid, Text, IconButton, Flex, Link } from '@chakra-ui/react';
import { IoArrowRedoCircleSharp } from 'react-icons/io5';
import {
  FaSeedling
} from 'react-icons/fa';
import { PiUsersFourLight } from 'react-icons/pi';
import {GiFertilizerBag} from "react-icons/gi";
import {BiSolidPhotoAlbum} from "react-icons/bi";
import {RiSurveyLine} from "react-icons/ri";
import {SiFireship} from "react-icons/si";

const categories = [
  { name: 'Dashboard Produksi', href: 'https://gpd.ptpn4.co.id/app/dashboard/produksi', sub: 'Monitoring Produksi', icon: FaSeedling },
  { name: 'Dashboard Hama & Penyakit', href: 'https://gis.ptpn4.or.id/portal/apps/opsdashboard/index.html#/a93fa9fa4d804585aee1e68554ae1750', sub: 'Early Warning System HPT', icon: PiUsersFourLight },
  { name: 'Dashboard Pemupukan', href: 'https://gis.ptpn4.or.id/portal/apps/opsdashboard/index.html#/cb7f9ffbfa9d4985bf3dd4915a556027', icon: GiFertilizerBag },
  { name: 'Dashboard Monitoring Health', href: 'https://gpd.ptpn4.co.id/app/dashboard/monitoring-health', sub: 'Monitoring Health', icon: BiSolidPhotoAlbum },
  { name: 'Dashboard Infrastruktur', href: 'https://gpd.ptpn4.co.id/app/dashboard/status-jalan', sub: 'Kondisi Jalan', icon: RiSurveyLine },
  { name: 'Dashboard Fire Hotspot', href: 'https://gpd.ptpn4.co.id/app/dashboard/fire-hotspot ', sub: 'Pemantauan Titik Api Areal Kebun', icon: SiFireship },
  { name: 'Dashboard Album TBM', href: 'https://gpd.ptpn4.co.id/app/dashboard/fire-hotspot ', sub: 'Album TBM', icon: BiSolidPhotoAlbum },
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
          {categories.map(({ name, sub, href, icon: Icon }, idx) => {
            const isLastRow = idx >= categories.length - 2;
            const isLastTwoInMiddleRow = isLastRow && categories.length % 4 === 2;

            return (
              <Box
                key={name}
                bg="white"
                borderRadius="xl"
                p={6}
                boxShadow="md"
                position="relative"
                transition="all 0.2s"
                _hover={{ boxShadow: 'xl', transform: 'translateY(-4px)' }}
                // Rata tengah jika 2 item terakhir di baris sendiri (misal total 6 item & 4 kolom)
                gridColumn={{
                  base: 'auto',
                  md: 'auto',
                  lg: isLastTwoInMiddleRow && idx === categories.length - 2 ? '2 / span 1' :
                    isLastTwoInMiddleRow && idx === categories.length - 1 ? '3 / span 1' : 'auto',
                }}
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
            );
          })}
        </SimpleGrid>

      </Box>
    </Box>
  );
}
