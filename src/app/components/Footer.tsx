'use client';

import { Box, Flex, Text, Divider } from '@chakra-ui/react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box as="footer" bg="#FDFCFB" py={8} px={{ base: 4, md: 10, lg: 12 }}>
      <Box maxW="7xl" mx="auto">
        <Divider mb={6} borderColor="gray.200" />
        <Flex
          justify="center"
          align="center"
          flexDirection={{ base: 'column', md: 'row' }}
          gap={{ base: 2, md: 0 }}
        >
          <Text fontSize="sm" color="gray.600" textAlign="center">
            © {currentYear} PT. Perkebunan Nusantara IV. All rights reserved.
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}
