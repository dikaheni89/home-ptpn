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
  useDisclosure,
} from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import Image from 'next/image';
import { useRef } from 'react';
import { getBasePath } from "@/libs/utils/getBasePath";

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
                <Image src={getBasePath() + '/static/images/logo.png'} alt="Gadden Logo" width={60} height={60} style={{ marginRight: 8 }} />
                <Box>
                  <Text fontSize="2xl" fontWeight="bold" color="#0d4531" letterSpacing="-1px">
                    PTPN
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    PT Perkebunan Nusantara
                  </Text>
                </Box>
              </Flex>
            </Box>

            <HStack spacing={8} display={{ base: "none", md: "flex" }}>
              <Text as="span" fontWeight="semibold" cursor="pointer">
                Home
              </Text>
              <Text as="span" fontWeight="semibold" cursor="pointer">
                Data
              </Text>
              <Text as="span" fontWeight="semibold" cursor="pointer">
                Documents
              </Text>
              <Text as="span" fontWeight="semibold" cursor="pointer">
                Apps & Maps
              </Text>
            </HStack>
            <Button
              bg="#0d4531"
              color="white"
              rounded="2xl"
              px={8}
              py={2}
              fontSize="lg"
              fontWeight="bold"
              _hover={{ bg: "primary.main" }}
              display={{ base: "none", md: "block" }}
            >
              Login
            </Button>
            <IconButton
              ref={btnRef}
              aria-label="Open menu"
              px={2}
              icon={<FaBars size={32} />}
              variant="ghost"
              size="lg"
              display={{ base: "block", md: "none" }}
              onClick={isMobile.onOpen}
              borderRadius="md"
              border="1.5px solid #E6E6E6"
              bg="white"
              _hover={{ bg: "#F7F7F7" }}
            />
          </Flex>
        </Box>
      </Box>

      {/* Drawer tetap sama */}
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
              <Image src={getBasePath() + '/static/images/logo.png'} alt="Gadden Logo" width={48} height={48} style={{ marginRight: 8 }} />
              <Box>
                <Text fontSize="sm" fontWeight="bold" color="primary.main" letterSpacing="-1px">
                  PTPN
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
                {[
                  "Home",
                  "Data",
                  "Documents",
                  "Apps & Maps",
                ].map((item) => (
                  <Flex key={item} align="center" justify="space-between" py={1} px={1} borderBottom="1px solid #efefef">
                    <Text fontWeight="bold" fontSize="md">{item}</Text>
                  </Flex>
                ))}
              </VStack>
              <Button
                bg="primary.main"
                color="white"
                rounded="2xl"
                w="100%"
                h="60px"
                fontWeight="bold"
                fontSize="md"
                mt={4}
                _hover={{ bg: "#164A35" }}
              >
                Login
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
