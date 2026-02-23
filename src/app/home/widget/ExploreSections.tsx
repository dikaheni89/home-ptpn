'use client';

import { Box, SimpleGrid, Text, Flex, Link } from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
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
  { name: 'Dashboard Hama & Penyakit', href: 'https://gpd.ptpn4.co.id/app/dashboard/protection', sub: 'Early Warning System HPT', icon: PiUsersFourLight },
  { name: 'Dashboard Pemupukan', href: 'https://gis.ptpn4.or.id/portal/apps/opsdashboard/index.html#/cb7f9ffbfa9d4985bf3dd4915a556027', icon: GiFertilizerBag },
  { name: 'Dashboard Monitoring Health', href: 'https://gpd.ptpn4.co.id/app/dashboard/monitoring-health', sub: 'Monitoring Health', icon: BiSolidPhotoAlbum },
  { name: 'Dashboard Infrastruktur', href: 'https://gpd.ptpn4.co.id/app/dashboard/jalan', sub: 'Kondisi Jalan', icon: RiSurveyLine },
  { name: 'Dashboard Fire Hotspot', href: 'https://gpd.ptpn4.co.id/app/dashboard/fire-hotspot ', sub: 'Pemantauan Titik Api Areal Kebun', icon: SiFireship },
  { name: 'Dashboard Album TBM', href: 'https://gpd.ptpn4.co.id/app/dashboard/album-tbm', sub: 'Album TBM', icon: BiSolidPhotoAlbum },
];

export default function ExploreSections() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.08 });

  return (
    <Box
      ref={ref}
      position="relative"
      bg="#114034"
      py={20}
      px={{ base: 4, md: 10, lg: 12 }}
      overflow="hidden"
    >
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

      <Box position="relative" zIndex={1} maxW="7xl" mx="auto">
        <Box textAlign="center" mb={14}>
          <Text
            fontSize="xs"
            fontWeight="semibold"
            color="white"
            opacity={0.9}
            letterSpacing="wider"
            textTransform="uppercase"
            mb={2}
          >
            Dashboard Spasial
          </Text>
          <Text
            fontSize={{ base: '2xl', md: '4xl' }}
            fontWeight="extrabold"
            color="white"
            letterSpacing="-0.02em"
            textShadow="2px 2px #0c2a1f"
          >
            MAPS GALLERY
          </Text>
          <Text mt={3} fontSize="sm" color="white" opacity={0.85} maxW="xl" mx="auto">
            Akses dashboard monitoring produksi, HPT, pemupukan, dan infrastruktur kebun secara real-time.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
          {categories.map(({ name, sub, href, icon: Icon }, idx) => {
            const isLastRow = idx >= categories.length - 2;
            const isLastTwoInMiddleRow = isLastRow && categories.length % 4 === 2;

            return (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.06,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                style={{
                  gridColumn: isLastTwoInMiddleRow && idx === categories.length - 2 ? '2 / span 1' :
                    isLastTwoInMiddleRow && idx === categories.length - 1 ? '3 / span 1' : 'auto',
                }}
              >
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{ textDecoration: 'none' }}
                  role="group"
                >
                  <Box
                    bg="white"
                    borderRadius="xl"
                    p={6}
                    minH="160px"
                    boxShadow="sm"
                    border="1px solid"
                    borderColor="gray.100"
                    position="relative"
                    transition="all 0.2s"
                    _hover={{ boxShadow: 'lg', transform: 'translateY(-4px)', borderColor: 'gray.200' }}
                  >
                    <Flex justify="space-between" align="flex-start" h="100%">
                      <Flex direction="column" gap={4} flex={1}>
                        <Box
                          w={12}
                          h={12}
                          borderRadius="xl"
                          bg="#114034"
                          color="white"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          fontSize="xl"
                          transition="transform 0.18s ease-out"
                          _groupHover={{ transform: 'translateY(-2px) scale(1.05)' }}
                        >
                          <Icon />
                        </Box>
                        <Box>
                          <Text fontSize="md" fontWeight="bold" color="#114034" mb={1}>
                            {name}
                          </Text>
                          <Text fontSize="xs" color="gray.600" lineHeight="1.4">
                            {sub}
                          </Text>
                        </Box>
                      </Flex>
                      <Box color="#114034" mt={1}>
                        <IoArrowRedoCircleSharp size={22} />
                      </Box>
                    </Flex>
                  </Box>
                </Link>
              </motion.div>
            );
          })}
        </SimpleGrid>

      </Box>
    </Box>
  );
}
