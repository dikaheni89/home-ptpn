'use client';

import {
  Box,
  Flex,
  Text,
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

const MENU_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Content', href: 'https://gis.ptpn4.or.id/portal/apps/opsdashboard/index.html#/32f44319bdee416099fb6594ed5bc0eb' },
  { label: 'GPM Admin Panel', href: 'https://gis.ptpn4.or.id/portal/apps/opsdashboard/index.html#/cb7f9ffbfa9d4985bf3dd4915a556027' },
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
                  src={'/static/images/logo.png'}
                  alt="Gadden Logo"
                  width={40}
                  height={40}
                  style={{ marginRight: 8 }}
                  unoptimized
                />
                <Box>
                  <Text fontSize="2xl" fontWeight="bold" color="#0d4531" letterSpacing="-1px">
                    Geo Palm Dashboard (GPD)
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    PT Perkebunan Nusantara IV
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
                src={'/static/images/logo.png'}
                alt="Gadden Logo"
                width={40}
                height={40}
                style={{ marginRight: 8 }}
                unoptimized
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
