'use client';

import {Box, Flex, Text} from "@chakra-ui/react";

export default function Topbar() {
  return (
    <>
      <Box
        bg="primary.main"
        color="white"
        py={2}
        mx={5}
        overflow="hidden"
        borderBottomLeftRadius="28px"
        borderBottomRightRadius="28px"
        display={{ base: "none", md: "block" }}
      >
        <Flex
          maxW="7xl"
          mx="auto"
          justify="space-between"
          align="center"
          px={4}
          py={4}
        >
          <Text fontSize="lg" fontWeight="medium">
            Selamat Datang Di GeoPalm Dashboard (GPD)
          </Text>
          {/*<HStack spacing={1}>*/}
          {/*  <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebookF />} variant="ghost" color="white" size={'lg'} _hover={{ bg: "rgba(255,255,255,0.1)" }} />*/}
          {/*  <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} variant="ghost" color="white" size={'lg'} _hover={{ bg: "rgba(255,255,255,0.1)" }} />*/}
          {/*  <IconButton as="a" href="#" aria-label="YouTube" icon={<FaYoutube />} variant="ghost" color="white" size={'lg'} _hover={{ bg: "rgba(255,255,255,0.1)" }} />*/}
          {/*  <IconButton as="a" href="#" aria-label="Pinterest" icon={<FaPinterestP />} variant="ghost" color="white" size={'lg'} _hover={{ bg: "rgba(255,255,255,0.1)" }} />*/}
          {/*</HStack>*/}
        </Flex>
      </Box>
    </>
  )
}
