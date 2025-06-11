'use client';

import { Box, Flex, Text, Link, HStack, Divider } from '@chakra-ui/react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box as="footer" bg="#FDFCFB" py={6} px={{ base: 4, md: 12 }}>
      <Divider mb={4} borderColor="gray.200" />

      <Flex
        justify="space-between"
        align="center"
        flexDirection={{ base: 'column', md: 'row' }}
        gap={{ base: 4, md: 0 }}
      >
        <Text fontSize="sm" color="gray.700" textAlign="center">
          Copy© {currentYear} GIS PTPN. All Rights Reserved.
        </Text>

        <HStack spacing={6}>
          <Link href="#" fontSize="sm" color="gray.700" _hover={{ color: 'green.600' }}>
            Setting & Privacy
          </Link>
          <Link href="#" fontSize="sm" color="gray.700" _hover={{ color: 'green.600' }}>
            Faqs
          </Link>
          <Link href="#" fontSize="sm" color="gray.700" _hover={{ color: 'green.600' }}>
            Food Menu
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
}
