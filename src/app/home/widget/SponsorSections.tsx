'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useState } from 'react';
import { Box, Flex, Button } from '@chakra-ui/react';
import Image from 'next/image';

export default function SponsorSections() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      origin: 'center',
      perView: 3,
      spacing: 5,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const banners = [
    { href: 'https://www.mitratechindonesia.co.id/', src: '/static/mobile/mitratech.png' },
    { href: 'https://www.ptpn4.co.id/', src: '/static/mobile/ptpn4.png' },
    { href: 'https://esriindonesia.co.id/id', src: '/static/mobile/logoesri.png' },
  ];

  return (
    <Box as="section" position="relative" bg="transparent" m="0" p="0" border="0">
      <Box position="absolute" top={0} left={0} right={0} overflow="hidden" h="102px" zIndex={0}>
        <svg
          viewBox="0 0 1920 102"
          preserveAspectRatio="xMinYMin"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#F7F7F7"
            d="M1895,78c-56.71-6.03-113.75-12.1-167-17c-75.42-6.94-133.81-10.66-171-13c-62.1-3.91-108.85-5.97-155-8
              c-35.96-1.58-78.06-3.42-133-5c-59.81-1.72-103.18-2.23-172-3c-92.17-1.03-154.41-1.01-169-1c-69.05,0.05-115.16,0.67-137,1
              c-43.08,0.65-76.21,1.48-97,2c-28.02,0.7-71.13,1.8-128,4c-16.64,0.64-57.72,2.28-111,5c-26.12,1.33-67.11,3.45-121,7
              c-21.14,1.39-54.21,3.59-96,7c-19.93,1.63-39.22,3.32-47,4c-16.12,1.41-33.55,2.94-55,5c-26.48,2.54-19.07,2.04-77,8
              c-19.39,1.99-36.94,3.77-60.59,7.46V103H1923V81C1916.55,80.3,1906.82,79.26,1895,78z"
          />
        </svg>
      </Box>

      <Box px={4} py={4} my={4} position="relative" zIndex={1}>
        <Box ref={sliderRef} className="keen-slider">
          {banners.map((item, index) => (
            <Box key={index} className="keen-slider__slide">
              <Flex justify="center">
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={item.src}
                    alt={`Banner ${index + 1}`}
                    width={1920}
                    height={1080}
                    style={{
                      borderRadius: '12px',
                      border: '1px solid #E2E8F0',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                      width: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </a>
              </Flex>
            </Box>
          ))}
        </Box>

        <Flex justify="center" mt={4} gap={2}>
          {banners.map((_, idx) => (
            <Button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              size="xs"
              bg={currentSlide === idx ? 'blue.900' : 'gray.300'}
              borderRadius="full"
              minW="10px"
              h="10px"
              p={0}
              _hover={{ bg: 'blue.700' }}
            />
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
