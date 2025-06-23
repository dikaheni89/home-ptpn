'use client';

import {
  Box,
  Flex,
  Text,
  Button,
  IconButton,
  HStack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  VStack,
  useDisclosure, Link,
} from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import Image from 'next/image';
import { useRef } from 'react';
import { getBasePath } from '@/libs/utils/getBasePath';

const MENU_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Pemeliharaan', href: 'https://gis.ptpn4.or.id/portal/apps/opsdashboard/index.html#/32f44319bdee416099fb6594ed5bc0eb' },
  { label: 'Pemupukan', href: 'https://gis.ptpn4.or.id/portal/apps/opsdashboard/index.html#/cb7f9ffbfa9d4985bf3dd4915a556027' },
  { label: 'Panen', href: 'https://gis.ptpn4.or.id/portal/apps/opsdashboard/index.html#/88170851d6964583954fca800e1f621b' },
  { label: 'Produksi', href: 'https://gis.ptpn4.or.id/portal/apps/opsdashboard/index.html#/bcd2b8427964472ea1cd43c0e25a969c' },
  { label: 'Hama', href: 'https://gis.ptpn4.or.id/portal/apps/opsdashboard/index.html#/6ee767b22a1a42059b601ab39f82c51d' },
  { label: 'Hazard', href: 'https://gis.ptpn4.or.id/portal/apps/opsdashboard/index.html#/fc9971f5f0b64f6f927667bfbc2c8fe7' },
  { label: 'Survey', href: 'https://gis.ptpn4.or.id/portal/apps/opsdashboard/index.html#/2dc8b32c6ab8482eb8ae9f600aa39831' },
  { label: 'Legal', href: 'https://gis.ptpn4.or.id/portal/apps/opsdashboard/index.html#/6fa3da8b00f341809b6ff6d22986a294' },
];

export default function Header() {
  const isMobile = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Box as="header" w="100%" bg="white" boxShadow="sm" position="relative" zIndex={10}>
        <Box bg="primary.50" py={4} borderBottom="1px solid #ededed">
          <Flex maxW="7xl" mx="auto" align="center" px={4} justify="space-between">
            <Box minW="220px" pr={4}>
              <Flex align="center">
                <Image
                  src={getBasePath() + '/static/images/logo.png'}
                  alt="Gadden Logo"
                  width={40}
                  height={40}
                  style={{ marginRight: 8 }}
                />
                <Box>
                  <Text fontSize="2xl" fontWeight="bold" color="#0d4531" letterSpacing="-1px">
                    PTPN IV
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    PT Perkebunan Nusantara
                  </Text>
                </Box>
              </Flex>
            </Box>

            <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
              {MENU_ITEMS.map((item, index) => (
                <Link key={index} target="_blank" href={item.href}>
                  <Text
                    as="span"
                    fontWeight="semibold"
                    textDecoration="none"
                    cursor="pointer"
                    _hover={{ color: 'primary.main', textDecoration: 'none' }}
                  >
                    {item.label}
                  </Text>
                </Link>
              ))}
            </HStack>

            <IconButton
              ref={btnRef}
              aria-label="Open menu"
              px={2}
              icon={<FaBars size={32} />}
              variant="ghost"
              size="lg"
              display={{ base: 'block', md: 'none' }}
              onClick={isMobile.onOpen}
              borderRadius="md"
              border="1.5px solid #E6E6E6"
              bg="white"
              _hover={{ bg: '#F7F7F7' }}
            />
          </Flex>
        </Box>
      </Box>

      <Drawer
        isOpen={isMobile.isOpen}
        placement="right"
        onClose={isMobile.onClose}
        finalFocusRef={btnRef}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px" bg="white" py={6}>
            <Flex align="center">
              <Image
                src={getBasePath() + '/static/images/logo.png'}
                alt="Gadden Logo"
                width={40}
                height={40}
                style={{ marginRight: 8 }}
              />
              <Box>
                <Text fontSize="sm" fontWeight="bold" color="primary.main" letterSpacing="-1px">
                  PTPN IV
                </Text>
                <Text fontSize="sm" color="#5D6A6A">
                  PT Perkebunan Nusantara
                </Text>
              </Box>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={6} mt={6} align="stretch">
              <VStack align="stretch" spacing={4}>
                {MENU_ITEMS.map((item) => (
                  <Link key={item.label} target="_blank" href={item.href}>
                    <Flex  align="center" justify="space-between" py={1} px={1} borderBottom="1px solid #efefef">
                      <Text
                        fontWeight="bold"
                        fontSize="md"
                        cursor="pointer"
                        textDecoration="none"
                        _hover={{ color: 'primary.main', textDecoration: 'none' }}
                      >
                        {item.label}
                      </Text>
                    </Flex>
                  </Link>
                ))}
              </VStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
