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
  useDisclosure,
  Link,
} from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import { MdAdminPanelSettings } from 'react-icons/md';
import { FiUploadCloud } from 'react-icons/fi';
import Image from 'next/image';
import { useRef } from 'react';

const MENU_ITEMS = [
  { label: 'GPM Admin Panel', href: 'https://ispn.ptpn4.or.id/admin-panel/login', icon: MdAdminPanelSettings, desc: 'Kelola panel admin' },
  { label: 'Upload Data', href: 'https://gpd.ptpn4.co.id/app/dashboard/upload-data', icon: FiUploadCloud, desc: 'Raster & vector' },
];

export default function Header() {
  const isMobile = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Box as="header" w="100%" bg="white" boxShadow="sm" position="relative" zIndex={10}>
        <Box bg="primary.50" py={4} borderBottom="1px solid #ededed">
          <Flex maxW="7xl" mx="auto" align="center" px={{ base: 4, md: 6, lg: 8 }} justify="space-between">
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
                    GeoPalm Dashboard (GPD)
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    PT PERKEBUNAN NUSANTARA IV
                  </Text>
                </Box>
              </Flex>
            </Box>

            <HStack spacing={3} display={{ base: 'none', md: 'flex' }}>
              {MENU_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    _hover={{ textDecoration: 'none' }}
                  >
                    <Flex
                      align="center"
                      gap={2}
                      px={4}
                      py={2.5}
                      borderRadius="xl"
                      bg="white"
                      border="1.5px solid"
                      borderColor="gray.200"
                      boxShadow="sm"
                      transition="all 0.2s"
                      _hover={{
                        borderColor: 'primary.400',
                        bg: 'primary.50',
                        boxShadow: 'md',
                        transform: 'translateY(-1px)',
                      }}
                    >
                      <Box color="primary.600" fontSize="lg">
                        <Icon />
                      </Box>
                      <Text fontWeight="semibold" color="gray.800" fontSize="sm">
                        {item.label}
                      </Text>
                    </Flex>
                  </Link>
                );
              })}
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
                  PT PERKEBUNAN NUSANTARA
                </Text>
              </Box>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={3} mt={4} align="stretch">
              {MENU_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <Link key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" _hover={{ textDecoration: 'none' }}>
                    <Flex
                      align="center"
                      gap={3}
                      p={4}
                      borderRadius="xl"
                      bg="gray.50"
                      border="1px solid"
                      borderColor="gray.200"
                      transition="all 0.2s"
                      _hover={{ bg: 'primary.50', borderColor: 'primary.200' }}
                    >
                      <Flex
                        w={10}
                        h={10}
                        align="center"
                        justify="center"
                        borderRadius="lg"
                        bg="white"
                        boxShadow="sm"
                        color="primary.600"
                      >
                        <Icon size={20} />
                      </Flex>
                      <Box flex={1}>
                        <Text fontWeight="bold" fontSize="md" color="gray.800">
                          {item.label}
                        </Text>
                        <Text fontSize="xs" color="gray.500" mt={0.5}>
                          {item.desc}
                        </Text>
                      </Box>
                    </Flex>
                  </Link>
                );
              })}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
